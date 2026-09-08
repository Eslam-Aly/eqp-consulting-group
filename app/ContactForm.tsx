"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

const CONTACT_ENDPOINT =
  process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "/api/contact";

type SubmissionState = "idle" | "sending" | "success" | "error";

const formCopy = {
  es: {
    sending: "Enviando tu consulta…",
    error: "No pudimos enviar tu consulta. Inténtalo nuevamente.",
    success:
      "Tu consulta fue enviada. Nuestro equipo se pondrá en contacto contigo.",
    name: "Nombre",
    namePlaceholder: "Tu nombre",
    company: "Empresa",
    companyPlaceholder: "Nombre de empresa",
    help: "¿En qué podemos ayudarte?",
    selectService: "Selecciona un servicio",
    isoConsulting: "Consultoría ISO",
    training: "Capacitación",
    management: "Gestión y productividad",
    other: "Otro",
    message: "Mensaje",
    messagePlaceholder: "Cuéntanos brevemente sobre tu objetivo...",
    website: "Sitio web",
    submit: "Enviar consulta",
    consent: "Al enviar aceptas ser contactado por EQP Consulting.",
  },
  en: {
    sending: "Sending your inquiry…",
    error: "We could not send your inquiry. Please try again.",
    success: "Your inquiry was sent. Our team will contact you shortly.",
    name: "Name",
    namePlaceholder: "Your name",
    company: "Company",
    companyPlaceholder: "Company name",
    help: "How can we help?",
    selectService: "Select a service",
    isoConsulting: "ISO consulting",
    training: "Corporate training",
    management: "Management and productivity",
    other: "Other",
    message: "Message",
    messagePlaceholder: "Tell us briefly about your objective...",
    website: "Website",
    submit: "Send inquiry",
    consent: "By submitting, you agree to be contacted by EQP Consulting.",
  },
} as const;

export default function ContactForm({ locale = "es" }: { locale?: "es" | "en" }) {
  const copy = formCopy[locale];
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const startedAt = useRef(0);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submissionState === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmissionState("sending");
    setStatusMessage(copy.sending);

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
        throw new Error(locale === "es" ? result?.message ?? copy.error : copy.error);
      }

      form.reset();
      startedAt.current = Date.now();
      setSubmissionState("success");
      setStatusMessage(
        locale === "es" ? result?.message ?? copy.success : copy.success,
      );
    } catch (error) {
      setSubmissionState("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : copy.error,
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label>
          {copy.name}
          <input
            name="nombre"
            required
            minLength={2}
            maxLength={100}
            autoComplete="name"
            placeholder={copy.namePlaceholder}
          />
        </label>
        <label>
          {copy.company}
          <input
            name="empresa"
            maxLength={120}
            autoComplete="organization"
            placeholder={copy.companyPlaceholder}
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
        {copy.help}
        <select name="servicio" defaultValue="" required>
          <option value="" disabled>
            {copy.selectService}
          </option>
          <option value="Consultoría ISO">{copy.isoConsulting}</option>
          <option value="Capacitación">{copy.training}</option>
          <option value="Gestión y productividad">{copy.management}</option>
          <option value="Otro">{copy.other}</option>
        </select>
      </label>

      <label>
        {copy.message}
        <textarea
          name="mensaje"
          rows={4}
          required
          minLength={10}
          maxLength={3000}
          placeholder={copy.messagePlaceholder}
        />
      </label>

      <div className="form-honeypot" aria-hidden="true">
        <label>
          {copy.website}
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        className="button button-primary contact-submit"
        type="submit"
        disabled={submissionState === "sending"}
      >
        {submissionState === "sending" ? copy.sending : copy.submit}
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

      <small>{copy.consent}</small>
    </form>
  );
}
