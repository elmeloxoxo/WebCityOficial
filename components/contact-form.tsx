"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

import { Icon } from "@/components/icon";
import { site, whatsappUrl } from "@/lib/site";
import {
  budgetRanges,
  projectTypes,
  validateContact,
  type ContactField,
  type ValidationErrors,
} from "@/lib/validation";

type Values = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
  consent: boolean;
  website: string;
};

type Status = "idle" | "submitting" | "success" | "error";

type ContactResponse = {
  ok: boolean;
  message?: string;
  errors?: ValidationErrors;
};

const initialValues: Values = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  message: "",
  consent: false,
  website: "",
};

const fieldOrder: ContactField[] = [
  "name",
  "email",
  "phone",
  "projectType",
  "budget",
  "message",
  "consent",
];

function focusField(field: ContactField) {
  const element = document.getElementById(`contacto-${field}`);
  if (element instanceof HTMLElement) element.focus();
}

export function ContactForm() {
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState("");
  const [sent, setSent] = useState<{ name: string; email: string } | null>(null);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const target = event.target;
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;

    setValues((previous) => ({ ...previous, [target.name]: value }));
    setFormError("");

    if (status === "error") setStatus("idle");

    const field = target.name as ContactField;
    if (errors[field]) {
      setErrors((previous) => {
        const next = { ...previous };
        delete next[field];
        return next;
      });
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError("");

    const result = validateContact(values);
    if (!result.ok) {
      setErrors(result.errors);
      const firstField = fieldOrder.find((field) => result.errors[field]);
      if (firstField) window.requestAnimationFrame(() => focusField(firstField));
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          projectType: values.projectType,
          budget: values.budget,
          message: values.message,
          consent: values.consent,
          website: values.website,
        }),
      });

      const data = (await response.json().catch(() => null)) as ContactResponse | null;

      if (!response.ok || !data?.ok) {
        if (data?.errors) {
          setErrors(data.errors);
          const firstField = fieldOrder.find((field) => data.errors?.[field]);
          if (firstField) window.requestAnimationFrame(() => focusField(firstField));
        }
        setStatus("error");
        setFormError(
          data?.message ??
            "No pudimos enviar tu mensaje. Intenta de nuevo en un momento.",
        );
        return;
      }

      setSent({ name: values.name.split(" ")[0] ?? values.name, email: values.email });
      setValues(initialValues);
      setStatus("success");
    } catch {
      setStatus("error");
      setFormError(
        "Hubo un problema de conexión. Revisa tu internet o escríbenos por WhatsApp.",
      );
    }
  }

  if (status === "success" && sent) {
    return (
      <div className="form-success" role="status">
        <span className="form-success__icon">
          <Icon name="check" />
        </span>
        <h3>¡Mensaje enviado, {sent.name}!</h3>
        <p>
          Gracias por escribirnos. Recibimos tu consulta para responderte a{" "}
          <strong>{sent.email}</strong>. Si prefieres, también puedes contactarnos
          por WhatsApp.
        </p>
        <a
          className="btn btn--primary"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="whatsapp" />
          Abrir WhatsApp
        </a>
        <button
          type="button"
          className="btn btn--outline"
          onClick={() => {
            setStatus("idle");
            setSent(null);
          }}
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
      noValidate
      aria-busy={status === "submitting"}
    >
      {formError ? (
        <div className="form__error" role="alert">
          <Icon name="shield" />
          <span>
            {formError}{" "}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Escríbenos por WhatsApp
            </a>
            .
          </span>
        </div>
      ) : null}

      <div className="form__row">
        <div className="field">
          <label className="field__label" htmlFor="contacto-name">
            Nombre completo
          </label>
          <input
            className="input"
            id="contacto-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Ej. Ana Vela"
            value={values.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contacto-name-error" : undefined}
            required
          />
          {errors.name ? (
            <p className="field__error" id="contacto-name-error">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="field">
          <label className="field__label" htmlFor="contacto-email">
            Correo electrónico
          </label>
          <input
            className="input"
            id="contacto-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="tu@correo.com"
            value={values.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contacto-email-error" : undefined}
            required
          />
          {errors.email ? (
            <p className="field__error" id="contacto-email-error">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label className="field__label" htmlFor="contacto-phone">
            Teléfono o WhatsApp
            <span className="field__optional">Opcional</span>
          </label>
          <input
            className="input"
            id="contacto-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+51 999 999 999"
            value={values.phone}
            onChange={handleChange}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "contacto-phone-error" : undefined}
          />
          {errors.phone ? (
            <p className="field__error" id="contacto-phone-error">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div className="field">
          <label className="field__label" htmlFor="contacto-projectType">
            Tipo de proyecto
          </label>
          <select
            className="select"
            id="contacto-projectType"
            name="projectType"
            value={values.projectType}
            onChange={handleChange}
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={
              errors.projectType ? "contacto-projectType-error" : undefined
            }
            required
          >
            <option value="">Selecciona una opción</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType ? (
            <p className="field__error" id="contacto-projectType-error">
              {errors.projectType}
            </p>
          ) : null}
        </div>
      </div>

      <div className="field">
        <label className="field__label" htmlFor="contacto-budget">
          Presupuesto aproximado
          <span className="field__optional">Opcional</span>
        </label>
        <select
          className="select"
          id="contacto-budget"
          name="budget"
          value={values.budget}
          onChange={handleChange}
          aria-invalid={Boolean(errors.budget)}
          aria-describedby={errors.budget ? "contacto-budget-error" : undefined}
        >
          <option value="">Prefiero conversarlo</option>
          {budgetRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
        {errors.budget ? (
          <p className="field__error" id="contacto-budget-error">
            {errors.budget}
          </p>
        ) : null}
      </div>

      <div className="field">
        <label className="field__label" htmlFor="contacto-message">
          Cuéntanos sobre tu proyecto
          <span className="field__optional">{values.message.length}/2000</span>
        </label>
        <textarea
          className="textarea"
          id="contacto-message"
          name="message"
          rows={5}
          maxLength={2000}
          placeholder="¿Qué hace tu negocio? ¿Qué te gustaría lograr con la web o la app? Cuéntanos lo que consideres importante."
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? "contacto-message-error" : "contacto-message-hint"
          }
          required
        />
        {errors.message ? (
          <p className="field__error" id="contacto-message-error">
            {errors.message}
          </p>
        ) : (
          <p className="field__hint" id="contacto-message-hint">
            Mínimo 20 caracteres. Cuanto más contexto nos des, mejor será la
            propuesta.
          </p>
        )}
      </div>

      <div>
        <label className="checkbox" htmlFor="contacto-consent">
          <input
            type="checkbox"
            id="contacto-consent"
            name="consent"
            checked={values.consent}
            onChange={handleChange}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "contacto-consent-error" : undefined}
            required
          />
          <span>
            Acepto que WebCity use mis datos únicamente para responder a esta
            consulta. No se comparten con terceros.
          </span>
        </label>
        {errors.consent ? (
          <p className="field__error" id="contacto-consent-error">
            {errors.consent}
          </p>
        ) : null}
      </div>

      <div className="honeypot" aria-hidden="true">
        <label htmlFor="contacto-website">No completar este campo</label>
        <input
          id="contacto-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={handleChange}
        />
      </div>

      <div className="form__footer">
        <button
          className="btn btn--primary btn--lg btn--block"
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            <>
              <span className="spinner" aria-hidden="true" />
              Enviando…
            </>
          ) : (
            <>
              Enviar mensaje
              <Icon name="arrow" />
            </>
          )}
        </button>
        <p className="form__note">
          Respondemos en menos de 24 horas hábiles. También puedes escribirnos a{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>
    </form>
  );
}
