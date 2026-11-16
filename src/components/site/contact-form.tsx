"use client";

import { useState } from "react";
import { site, whatsappLink, mailtoLink } from "@/lib/site";

const serviceOptions = [
  "Graphic Design & Branding",
  "Website Design & Development",
  "Social Media & Digital Marketing",
  "A combination / not sure yet",
];

const budgetOptions = [
  "Under $50",
  "$50 – $150",
  "$150 – $300",
  "$300+",
  "Not sure yet",
];

type Fields = {
  name: string;
  business: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  details: string;
};

const empty: Fields = {
  name: "",
  business: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  details: "",
};

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  function update<K extends keyof Fields>(key: K, value: string) {
    setFields((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate() {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!fields.name.trim()) next.name = "Please add your name.";
    if (!fields.email.trim()) next.email = "Please add your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      next.email = "That email doesn't look right.";
    if (!fields.service) next.service = "Please choose a service.";
    if (!fields.details.trim())
      next.details = "Tell us a little about your project.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const message = [
      `New enquiry for Yonah Studios`,
      ``,
      `Name: ${fields.name}`,
      fields.business && `Business: ${fields.business}`,
      `Email: ${fields.email}`,
      fields.phone && `Phone: ${fields.phone}`,
      `Service: ${fields.service}`,
      fields.budget && `Budget: ${fields.budget}`,
      ``,
      `Project: ${fields.details}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-border bg-sand/50 p-8 text-center sm:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-terracotta text-2xl text-ivory">
          ✓
        </div>
        <h2 className="mt-6 font-heading text-2xl text-charcoal">
          Thanks, {fields.name.split(" ")[0] || "there"}!
        </h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          We&apos;ve opened WhatsApp with your enquiry ready to send. If it
          didn&apos;t open, you can reach us directly below.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-ivory transition-colors hover:bg-terracotta"
          >
            Open WhatsApp
          </a>
          <a
            href={mailtoLink}
            className="rounded-full border border-charcoal/25 px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:border-charcoal"
          >
            Email us instead
          </a>
        </div>
        <button
          type="button"
          onClick={() => {
            setFields(empty);
            setSent(false);
          }}
          className="mt-6 text-sm text-muted-foreground underline underline-offset-4 hover:text-charcoal"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" error={errors.name} required>
          <input
            type="text"
            value={fields.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputClass(!!errors.name)}
            placeholder="Your name"
          />
        </Field>
        <Field label="Business name" error={errors.business}>
          <input
            type="text"
            value={fields.business}
            onChange={(e) => update("business", e.target.value)}
            className={inputClass(false)}
            placeholder="Your business (optional)"
          />
        </Field>
        <Field label="Email" error={errors.email} required>
          <input
            type="email"
            value={fields.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass(!!errors.email)}
            placeholder="you@example.com"
          />
        </Field>
        <Field label="Phone / WhatsApp" error={errors.phone}>
          <input
            type="tel"
            value={fields.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClass(false)}
            placeholder="Optional"
          />
        </Field>
        <Field label="Service required" error={errors.service} required>
          <select
            value={fields.service}
            onChange={(e) => update("service", e.target.value)}
            className={inputClass(!!errors.service)}
          >
            <option value="">Choose a service…</option>
            {serviceOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Estimated budget" error={errors.budget}>
          <select
            value={fields.budget}
            onChange={(e) => update("budget", e.target.value)}
            className={inputClass(false)}
          >
            <option value="">Choose a range…</option>
            {budgetOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Project description" error={errors.details} required>
        <textarea
          value={fields.details}
          onChange={(e) => update("details", e.target.value)}
          rows={5}
          className={inputClass(!!errors.details)}
          placeholder="Tell us what you're looking for…"
        />
      </Field>

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-4 text-sm font-medium text-ivory transition-colors hover:bg-terracotta sm:w-auto"
      >
        Send via WhatsApp
        <span className="transition-transform group-hover:translate-x-0.5">→</span>
      </button>
      <p className="text-xs text-muted-foreground">
        Submitting opens WhatsApp with your details ready to send to{" "}
        {site.phoneDisplay}. Prefer email? Write to{" "}
        <a href={mailtoLink} className="underline underline-offset-2">
          {site.email}
        </a>
        .
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-charcoal">
        {label}
        {required && <span className="text-terracotta"> *</span>}
      </span>
      <div className="mt-2">{children}</div>
      {error && <span className="mt-1.5 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function inputClass(hasError: boolean) {
  return [
    "w-full rounded-xl border bg-background px-4 py-3 text-charcoal outline-none transition-colors placeholder:text-muted-foreground/70",
    hasError
      ? "border-destructive focus:border-destructive"
      : "border-border focus:border-charcoal",
  ].join(" ");
}
