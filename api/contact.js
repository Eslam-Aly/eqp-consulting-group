const HOSTGATOR_ENDPOINT = "https://forms.eqpconsulting.com/contact.php";

const ALLOWED_ORIGINS = new Set([
  "https://eqp-consulting-group.eslam-mahmud18.chatgpt.site",
  "https://eqp-consulting-group.vercel.app",
  "https://eqpconsulting.com",
  "https://www.eqpconsulting.com",
]);

const MAX_REQUEST_BYTES = 16 * 1024;

async function forwardToHostGator(body, origin, cookie) {
  return fetch(HOSTGATOR_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Origin: origin,
      ...(cookie ? { Cookie: cookie } : {}),
    },
    body,
  });
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ message: "Método no permitido." });
  }

  const origin = request.headers.origin;
  if (!origin || !ALLOWED_ORIGINS.has(origin)) {
    return response
      .status(403)
      .json({ message: "Origen de solicitud no autorizado." });
  }

  const contentType = request.headers["content-type"] ?? "";
  if (!contentType.toLowerCase().startsWith("application/json")) {
    return response
      .status(415)
      .json({ message: "Formato de solicitud no válido." });
  }

  const body =
    typeof request.body === "string"
      ? request.body
      : JSON.stringify(request.body ?? {});

  if (Buffer.byteLength(body, "utf8") > MAX_REQUEST_BYTES) {
    return response
      .status(413)
      .json({ message: "La solicitud es demasiado grande." });
  }

  try {
    let upstream = await forwardToHostGator(body, origin);
    let responseBody = await upstream.text();

    if (
      upstream.status === 409 &&
      responseBody.includes("humans_21909=1")
    ) {
      upstream = await forwardToHostGator(body, origin, "humans_21909=1");
      responseBody = await upstream.text();
    }

    response.setHeader("Cache-Control", "no-store");
    response.setHeader(
      "Content-Type",
      upstream.headers.get("content-type") ??
        "application/json; charset=utf-8",
    );
    return response.status(upstream.status).send(responseBody);
  } catch {
    return response.status(502).json({
      message:
        "No pudimos conectar con el servicio de correo. Inténtalo nuevamente.",
    });
  }
}
