import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Scale, ShieldCheck, MessageCircle, Star } from "lucide-react";
import { firm, practiceAreas, testimonials, insights, reviews } from "@/content/firm";
import { useT, ui } from "@/lib/i18n";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PracticeCard } from "@/components/site/PracticeCard";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { TrustStrip } from "@/components/site/TrustStrip";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${firm.name} — Chartered Accountants in Angamaly, Ernakulam` },
      {
        name: "description",
        content:
          "Professional Chartered Accountant firm in Angamaly, Ernakulam, Kerala. Expert auditing, taxation, GST compliance, company registration, and corporate financial advisory.",
      },
      { property: "og:title", content: `${firm.name} — Chartered Accountants in Angamaly, Ernakulam` },
      {
        property: "og:description",
        content:
          "Expert financial advice. Trustworthy auditing and taxation solutions. Free 15-minute consultation, direct WhatsApp access.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: firm.name,
          telephone: firm.contact.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: firm.contact.address.en,
            addressLocality: "Angamaly",
            addressRegion: "Kerala",
            addressCountry: "IN",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: reviews.rating,
            reviewCount: reviews.count,
          },
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  const t = useT();
  const waHref = `https://wa.me/${firm.contact.whatsapp}`;

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-background">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M48 0H0V48" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="text-primary" />
          </svg>
        </div>
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pt-16 pb-20 sm:px-8 sm:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pt-28 lg:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-10 bg-gold" />
              Est. {firm.established} · {t(firm.city)}
            </div>
            <h1 className="font-display text-[2.6rem] leading-[1.05] text-primary sm:text-6xl md:text-7xl">
              Financial advice you can <span className="italic text-gold">trust</span>.
              <br className="hidden sm:block" />
              Solutions you can count on.
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              A professional Chartered Accountant firm representing individuals and businesses across GST compliance, tax filings, audits, and company incorporation. Plain advice, transparent fees, direct access.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-medium uppercase tracking-[0.18em] text-primary-foreground transition hover:bg-navy-deep"
              >
                {t(ui.cta.book)}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-primary px-6 py-3.5 text-sm font-medium uppercase tracking-[0.18em] text-primary transition hover:bg-primary hover:text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" />
                {t(ui.cta.whatsapp)}
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span>ICAI FRN {firm.leadAdvocate.barCouncilNo}</span>
              <span className="inline-flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 fill-gold text-gold" />
                {reviews.rating} on Google · {reviews.count} reviews
              </span>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative border border-border bg-card p-8 shadow-[0_30px_60px_-30px_rgba(11,30,63,0.35)]">
              <div className="absolute -top-3 left-8 bg-gold px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-primary">
                {t(firm.consultation)}
              </div>
              <div className="flex items-start gap-5">
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border border-border bg-white p-1">
                  <img
                    src="/icon.jpeg"
                    alt={firm.leadAdvocate.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {t(ui.sections.leadAdvocate)}
                  </p>
                  <p className="mt-1 font-display text-2xl text-primary">
                    {firm.leadAdvocate.name}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {firm.leadAdvocate.yearsOfPractice}+ years · {firm.leadAdvocate.aibe}
                  </p>
                </div>
              </div>
              <ul className="mt-8 grid gap-3 text-sm">
                {firm.courts.slice(0, 3).map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-3 border-b border-border/60 pb-3 last:border-b-0"
                  >
                    <Scale className="h-4 w-4 text-gold" aria-hidden />
                    <span className="text-foreground">{c}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`tel:${firm.contact.phoneHref}`}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-primary py-3 text-sm font-medium text-primary-foreground hover:bg-navy-deep"
              >
                <Phone className="h-4 w-4" />
                {firm.contact.phone}
              </a>
            </div>
          </motion.aside>
        </div>
      </section>

      <TrustStrip />

      {/* PRACTICE AREAS */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow={t(ui.sections.practiceAreas)}
          title="Specialist counsel across the matters that affect Kerala the most."
          subtitle="Eight focused practice areas. Each handled personally by a partner with deep court-room experience."
        />
        <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {practiceAreas.map((p) => (
            <PracticeCard key={p.slug} area={p} />
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/practice-areas"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-primary hover:text-gold"
          >
            {t(ui.cta.allAreas)} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-10 bg-gold" />
              {t(ui.sections.whyUs)}
            </div>
            <h2 className="font-display text-3xl leading-tight sm:text-5xl">
              Old-school discipline.
              <br />
              Modern access.
            </h2>
            <p className="mt-5 max-w-md text-primary-foreground/75">
              We blend the rigour expected from a senior bar with the responsiveness clients in 2026
              actually need.
            </p>
          </div>
          <ul className="grid gap-px bg-white/15 sm:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Transparent fees",
                body: "Quoted upfront in writing. No surprise bills, no hidden disbursements.",
              },
              {
                icon: MessageCircle,
                title: "Direct WhatsApp",
                body: "The partner on your matter is reachable on WhatsApp during business hours.",
              },
              {
                icon: Scale,
                title: "Compliance-expert",
                body: `${firm.leadAdvocate.yearsOfPractice}+ years of auditing, tax filings, and representation before financial authorities.`,
              },
            ].map((f) => (
              <li key={f.title} className="bg-primary p-7">
                <f.icon className="h-6 w-6 text-gold" aria-hidden />
                <h3 className="mt-4 font-display text-xl">{f.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/75">{f.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading eyebrow="Client voices" title={t(ui.sections.testimonials)} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((it, i) => (
            <TestimonialCard key={i} t={it} />
          ))}
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="flex items-end justify-between gap-6">
            <SectionHeading
              eyebrow={t(ui.sections.insights)}
              title="Practical notes from our practice."
            />
            <Link
              to="/insights"
              className="hidden shrink-0 items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-primary hover:text-gold sm:inline-flex"
            >
              {t(ui.cta.allInsights)} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {insights.slice(0, 3).map((a) => (
              <Link
                key={a.slug}
                to="/insights/$slug"
                params={{ slug: a.slug }}
                className="group flex flex-col border-t-2 border-primary pt-5"
              >
                <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {new Date(a.date).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}{" "}
                  · {a.author}
                </span>
                <h3 className="mt-3 font-display text-2xl leading-snug text-primary group-hover:text-gold">
                  {t(a.title)}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{t(a.excerpt)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="grid gap-8 border border-gold bg-card p-8 sm:p-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2 className="font-display text-3xl leading-tight text-primary sm:text-5xl">
                Talk to a partner today. The first 15 minutes are on us.
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Describe your financial or tax needs in plain language. We'll tell you honestly how we can help — and what it will cost.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 bg-[#25D366] px-6 py-4 text-sm font-medium uppercase tracking-[0.18em] text-white"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp · {firm.contact.phone}
              </a>
              <a
                href={`tel:${firm.contact.phoneHref}`}
                className="inline-flex flex-1 items-center justify-center gap-2 bg-primary px-6 py-4 text-sm font-medium uppercase tracking-[0.18em] text-primary-foreground"
              >
                <Phone className="h-4 w-4" /> {firm.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
