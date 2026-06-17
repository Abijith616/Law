import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { firm } from "@/content/firm";
import { useT, ui } from "@/lib/i18n";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${firm.name}` },
      {
        name: "description",
        content: `Call, WhatsApp or visit our Angamaly office. ${firm.contact.phone}.`,
      },
      { property: "og:title", content: `Contact — ${firm.name}` },
      { property: "og:description", content: "Free initial consultation. Direct WhatsApp access." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: firm.name,
          telephone: firm.contact.phone,
          email: firm.contact.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: firm.contact.address.en,
            addressLocality: "Kochi",
            addressRegion: "Kerala",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const t = useT();
  return (
    <div>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-gold">
            <span className="h-px w-10 bg-gold" /> {t(ui.nav.contact)}
          </div>
          <h1 className="max-w-3xl font-display text-4xl leading-tight text-primary sm:text-6xl">
            Talk to a partner. The first 15 minutes are on us.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Tell us about your matter in plain language. We'll respond within one business day —
            sooner on WhatsApp.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1.2fr]">
        <aside className="flex flex-col gap-6">
          <Card
            icon={Phone}
            title="Phone"
            body={firm.contact.phone}
            href={`tel:${firm.contact.phoneHref}`}
          />
          <Card
            icon={MessageCircle}
            title="WhatsApp"
            body={firm.contact.phone}
            href={`https://wa.me/${firm.contact.whatsapp}`}
            accent
          />
          <Card
            icon={Mail}
            title="Email"
            body={firm.contact.email}
            href={`mailto:${firm.contact.email}`}
          />
          <Card icon={MapPin} title="Office" body={t(firm.contact.address)} />
          <Card icon={Clock} title="Hours" body={t(firm.contact.hours)} />

          <div className="mt-2 overflow-hidden border border-border">
            <iframe
              title="Office location"
              src={firm.mapEmbed}
              className="block h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>

        <div className="border border-border bg-card p-6 sm:p-10">
          <h2 className="font-display text-2xl text-primary">Send an inquiry</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            We treat every inquiry as confidential.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

function Card({
  icon: Icon,
  title,
  body,
  href,
  accent,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
  href?: string;
  accent?: boolean;
}) {
  const inner = (
    <div className="flex items-start gap-4">
      <div
        className={`grid h-10 w-10 shrink-0 place-items-center ${accent ? "bg-[#25D366] text-white" : "bg-primary text-primary-foreground"}`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{title}</p>
        <p className="mt-1 font-display text-lg text-primary break-words">{body}</p>
      </div>
    </div>
  );
  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="border border-border bg-card p-5 transition hover:border-gold"
    >
      {inner}
    </a>
  ) : (
    <div className="border border-border bg-card p-5">{inner}</div>
  );
}
