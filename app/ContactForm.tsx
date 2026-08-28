"use client";

import { FormEvent, useRef, useState } from "react";

const CONTACT_ENDPOINT =
  process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "/api/contact";

type SubmissionState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const startedAt = useRef(Date.now());

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submissionState === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmissionState("sending");
    setStatusMessage("Enviando tu consulta…");

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: formData.get("nombre"),
          empresa: formData.get("empresa"),
          email: formData.get("email"),
          servicio: formData.get("servicio"),
          mensaje: formData.get("mensaje"),
          website: formData.get("website"),
          startedAt: startedAt.current,
        }),
      });

      const result = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;

      if (!response.ok) {
        throw new Error(
          result?.message ??
            "No pudimos enviar tu consulta. Inténtalo nuevamente.",
        );
      }

      form.reset();
      startedAt.current = Date.now();
      setSubmissionState("success");
      setStatusMessage(
        result?.message ??
          "Tu consulta fue enviada. Nuestro equipo se pondrá en contacto contigo.",
      );
    } catch (error) {
      setSubmissionState("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "No pudimos enviar tu consulta. Inténtalo nuevamente.",
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label>
          Nombre
          <input
            name="nombre"
            required
            minLength={2}
            maxLength={100}
            autoComplete="name"
            placeholder="Tu nombre"
          />
        </label>
        <label>
          Empresa
          <input
            name="empresa"
            maxLength={120}
            autoComplete="organization"
            placeholder="Nombre de empresa"
          />
        </label>
      </div>

      <label>
        Email
        <input
          type="email"
          name="email"
          required
          maxLength={180}
          autoComplete="email"
          placeholder="tu@empresa.com"
        />
      </label>

      <label>
        ¿En qué podemos ayudarte?
        <select name="servicio" defaultValue="" required>
          <option value="" disabled>
            Selecciona un servicio
          </option>
          <option>Consultoría ISO</option>
          <option>Capacitación</option>
          <option>Gestión y productividad</option>
          <option>Otro</option>
        </select>
      </label>

      <label>
        Mensaje
        <textarea
          name="mensaje"
          rows={4}
          required
          minLength={10}
          maxLength={3000}
          placeholder="Cuéntanos brevemente sobre tu objetivo..."
        />
      </label>

      <div className="form-honeypot" aria-hidden="true">
        <label>
          Sitio web
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        className="button button-primary contact-submit"
        type="submit"
        disabled={submissionState === "sending"}
      >
        {submissionState === "sending" ? "Enviando…" : "Enviar consulta"}
      </button>

      {submissionState !== "idle" ? (
        <p
          className={`form-status form-status--${submissionState}`}
          role={submissionState === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {statusMessage}
        </p>
      ) : null}

      <small>Al enviar aceptas ser contactado por EQP Consulting.</small>
    </form>
  );
}
