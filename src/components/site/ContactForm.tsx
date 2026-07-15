import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitInquiry } from "@/lib/contact.functions";

export function ContactForm() {
  const submit = useServerFn(submitInquiry);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    const form = new FormData(e.currentTarget);
    try {
      await submit({
        data: {
          name: String(form.get("name") ?? ""),
          phone: String(form.get("phone") ?? ""),
          email: String(form.get("email") ?? ""),
          matter: String(form.get("matter") ?? ""),
          message: String(form.get("message") ?? ""),
        },
      });
      setStatus("done");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "done") {
    return (
      <div className="border border-gold/40 bg-card p-8 text-center">
        <h3 className="font-display text-2xl text-primary">Thank you</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We've received your inquiry and will respond within one business day. For urgent matters,
          please call or WhatsApp us directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" required autoComplete="name" />
        <Field label="Phone" name="phone" required type="tel" autoComplete="tel" />
      </div>
      <Field label="Email" name="email" type="email" autoComplete="email" />
      <input type="hidden" name="matter" value="general" />
      <div className="grid gap-1.5">
        <label
          htmlFor="message"
          className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground"
        >
          Tell us briefly about your requirements
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="border border-border bg-card p-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          Submitting this form does not create a professional relationship.
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center bg-primary px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-primary-foreground transition hover:bg-navy-deep disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Request consultation"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="grid gap-1.5">
      <label
        htmlFor={name}
        className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground"
      >
        {label}
        {required ? " *" : ""}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="h-11 border border-border bg-card px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
