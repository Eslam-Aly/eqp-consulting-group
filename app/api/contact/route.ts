const HOSTGATOR_ENDPOINT = "https://forms.eqpconsulting.com/contact.php";

const ALLOWED_ORIGINS = new Set([
  "https://eqp-consulting-group.eslam-mahmud18.chatgpt.site",
  "https://eqp-consulting-group.vercel.app",
  "https://eqpconsulting.com",
  "https://www.eqpconsulting.com",
]);

const MAX_REQUEST_BYTES = 16 * 1024;

async function forwardToHostGator(body: string, origin: string, cookie?: string) {
  return fetch(HOSTGATOR_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Origin: origin,
      ...(cookie ? { Cookie: cookie } : {}),
    },
    body,
    cache: "no-store",
  });
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");

  if (!origin || !ALLOWED_ORIGINS.has(origin)) {
    return Response.json(
      { message: "Origen de solicitud no autorizado." },
      { status: 403 },
    );
  }

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().startsWith("application/json")) {
    return Response.json(
      { message: "Formato de solicitud no válido." },
      { status: 415 },
    );
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_REQUEST_BYTES) {
    return Response.json(
      { message: "La solicitud es demasiado grande." },
      { status: 413 },
    );
  }

  const body = await request.text();
  if (new TextEncoder().encode(body).byteLength > MAX_REQUEST_BYTES) {
    return Response.json(
      { message: "La solicitud es demasiado grande." },
      { status: 413 },
    );
  }

  try {
    let response = await forwardToHostGator(body, origin);
    let responseBody = await response.text();

    if (
      response.status === 409 &&
      responseBody.includes("humans_21909=1")
    ) {
      response = await forwardToHostGator(body, origin, "humans_21909=1");
      responseBody = await response.text();
    }

    return new Response(responseBody, {
      status: response.status,
      headers: {
        "Content-Type":
          response.headers.get("content-type") ??
          "application/json; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return Response.json(
      {
        message:
          "No pudimos conectar con el servicio de correo. Inténtalo nuevamente.",
      },
      { status: 502 },
    );
  }
}
