import { createFileRoute, Link } from "@tanstack/react-router";
import { Eye, Target } from "lucide-react";
import { firm, team } from "@/content/firm";
import { useT, ui } from "@/lib/i18n";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${firm.name}` },
      {
        name: "description",
        content: `Established ${firm.established} in Ernakulam, Kerala. Boutique advocacy firm with court-room experience from District Court to the Supreme Court of India.`,
      },
      { property: "og:title", content: `About — ${firm.name}` },
      {
        property: "og:description",
        content: `Established ${firm.established} in Ernakulam, Kerala.`,
      },
    ],
  }),
  component: About,
});

function About() {
  const t = useT();
  return (
    <div>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-gold">
            <span className="h-px w-10 bg-gold" /> {t(ui.nav.about)}
          </div>
          <h1 className="font-display text-4xl leading-tight text-primary sm:text-6xl">
            A trusted Kerala firm built on
            <br className="hidden sm:block" />
            experience, integrity and clarity.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {firm.name} is a professionally managed Chartered Accountancy firm headquartered in Angamaly, Ernakulam, Kerala. We are a modern professional services firm dedicated to delivering practical, technology-enabled, and value-driven solutions that help businesses navigate today's dynamic regulatory and commercial environment.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-gold">
                <span className="h-px w-10 bg-gold" /> Our Story
              </div>
              <h2 className="font-display text-3xl leading-tight text-primary sm:text-4xl">
                The Union of Two Trusted Practices
              </h2>
            </div>
            <div className="max-w-none text-muted-foreground space-y-6 text-sm leading-relaxed">
              <p>
                <strong>J A & Associates</strong> was established in 2024 following the strategic merger of two established chartered accountancy practices: <strong>J Jose & Associates</strong> (founded by CA Jibin Jose, FCA in Kottayam) and <strong>Anoop Antony & Co.</strong> (founded by CA Anoop Antony, FCA in Kozhikode). By combining their regional strengths and cumulative decades of experience, the partners established a unified, high-standard professional practice.
              </p>
              <p>
                To complement the core chartered accountancy services, our management consulting vertical is operated through <strong>J A Business Consultants Private Limited</strong>, an ICAI-registered Management Consultancy Services (MCS) Company bearing Firm Registration No. <strong>MCS000010S</strong>.
              </p>
              <p>
                By integrating statutory expertise with strategic business advisory, we offer our clients a single point of access for financial, tax compliance, auditing, and management consulting services. Our objective is to become a trusted partner in our clients' long-term growth and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="border border-border p-8 bg-card shadow-sm relative overflow-hidden">
            <h3 className="font-display text-2xl text-primary mb-4 flex items-center gap-3">
              <Eye className="h-6 w-6 text-gold" /> Our Vision
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To be the most trusted and value-driven professional services firm, recognized for integrity, excellence, and tech-enabled business solutions that foster long-term client growth.
            </p>
          </div>
          <div className="border border-border p-8 bg-card shadow-sm relative overflow-hidden">
            <h3 className="font-display text-2xl text-primary mb-4 flex items-center gap-3">
              <Target className="h-6 w-6 text-gold" /> Our Mission
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To deliver practical, high-quality, and compliant financial, taxation, and consulting services. We empower businesses from startups to established corporates with strategic clarity and operational efficiency.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading eyebrow="Leadership" title="Leadership Team" />
          <p className="text-sm text-muted-foreground mt-2 mb-10 max-w-xl">
            Our firm is led by experienced Chartered Accountants bringing years of cumulative advisory expertise in taxation, audits, and business consultancy.
          </p>
          <div className="grid gap-8 lg:grid-cols-2">
            {team.map((partner) => (
              <div key={partner.name} className="flex flex-col gap-6 border border-border bg-card p-8 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-primary/10 border border-primary/20 font-display text-2xl text-primary font-bold">
                    {partner.initials}
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-primary font-bold">{partner.name}</h3>
                    <p className="text-sm text-gold font-medium">{t(partner.role)}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed min-h-[72px]">
                  {t(partner.bio)}
                </p>
                <div className="border-t border-border/60 pt-4 mt-auto">
                  <dl className="grid grid-cols-3 gap-4 text-[11px]">
                    <div>
                      <dt className="uppercase tracking-wider text-muted-foreground">Cumulative Exp.</dt>
                      <dd className="mt-1 font-display text-lg text-primary font-semibold">{partner.years}+ Years</dd>
                    </div>
                    <div>
                      <dt className="uppercase tracking-wider text-muted-foreground">Membership No.</dt>
                      <dd className="mt-1 font-display text-lg text-primary font-semibold">
                        {partner.name.includes("Jibin") ? "[M. No.]" : "238806"}
                      </dd>
                    </div>
                    <div>
                      <dt className="uppercase tracking-wider text-muted-foreground">Firm FRN</dt>
                      <dd className="mt-1 font-display text-lg text-primary font-semibold">
                        028551S
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-primary px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-primary-foreground hover:bg-navy-deep transition"
            >
              {t(ui.cta.book)}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
