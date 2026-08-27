"use client";

import { FormEvent, useState } from "react";

type SubmissionState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmissionState("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/info@eqpconsulting.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );
      const result = await response.json();

      if (!response.ok || (result.success !== true && result.success !== "true")) {
        throw new Error("Submission failed");
      }

      form.reset();
      setSubmissionState("success");
    } catch {
      setSubmissionState("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        className="form-honeypot"
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <input
        type="hidden"
        name="_subject"
        value="Nueva consulta desde EQP Consulting"
      />
      <input type="hidden" name="_template" value="table" />
      <input
        type="hidden"
        name="_url"
        value="https://eqp-consulting-group.eslam-mahmud18.chatgpt.site/#contacto"
      />

      <div className="field-row">
        <label>
          Nombre
          <input name="nombre" required placeholder="Tu nombre" />
        </label>
        <label>
          Empresa
          <input name="empresa" placeholder="Nombre de empresa" />
        </label>
      </div>
      <label>
        Email
        <input
          type="email"
          name="email"
          required
          placeholder="tu@empresa.com"
        />
      </label>
      <label>
        ¿En qué podemos ayudarte?
        <select name="servicio" defaultValue="">
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
          placeholder="Cuéntanos brevemente sobre tu objetivo..."
        />
      </label>
      <button
        className="button button-primary contact-submit"
        type="submit"
        disabled={submissionState === "sending"}
      >
        {submissionState === "sending" ? "Enviando…" : "Enviar consulta"}
      </button>
      <p
        className={`form-status form-status--${submissionState}`}
        role="status"
        aria-live="polite"
      >
        {submissionState === "success" &&
          "Gracias. Recibimos tu consulta y te contactaremos pronto."}
        {submissionState === "error" &&
          "No pudimos enviar tu consulta. Intenta nuevamente o escríbenos a info@eqpconsulting.com."}
      </p>
      <small>Al enviar aceptas ser contactado por EQP Consulting.</small>
    </form>
  );
}
