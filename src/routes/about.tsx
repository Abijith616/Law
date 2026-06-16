import { createFileRoute, Link } from "@tanstack/react-router";
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
            A Kerala firm built on plain advice
            <br className="hidden sm:block" />
            and patient court-room work.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            {firm.name} was established in {firm.established} in {t(firm.city)}. For over two
            decades we have represented individuals and businesses across property, family,
            criminal, tax and commercial matters — from the sub-divisional magistrate's court to the
            Supreme Court of India.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading eyebrow="Our values" title="Discipline. Discretion. Direct access." />
          <ul className="grid gap-8">
            {[
              {
                title: "Plain language",
                body: "We explain the law in the language the client speaks. No latin without a translation.",
              },
              {
                title: "Documented fees",
                body: "Every engagement begins with a written fee note. We don't bill outside of it.",
              },
              {
                title: "Court-first practice",
                body: "We are litigators. Drafting, evidence and oral advocacy are our craft, not an afterthought.",
              },
              {
                title: "Long-term relationships",
                body: "Most of our work comes from past clients and their families. We earn that trust matter by matter.",
              },
            ].map((v) => (
              <li key={v.title} className="border-l-2 border-gold pl-5">
                <h3 className="font-display text-2xl text-primary">{v.title}</h3>
                <p className="mt-2 text-muted-foreground">{v.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading eyebrow={t(ui.sections.leadAdvocate)} title={firm.leadAdvocate.name} />
          <div className="mt-10 grid gap-10 lg:grid-cols-[280px_1fr] lg:items-start">
            <div className="grid aspect-square w-full max-w-[280px] place-items-center bg-primary font-display text-7xl text-primary-foreground">
              RM
            </div>
            <div>
              <p className="text-lg text-foreground">
                {team[0].bio.en /* show english here; switch via t for bilingual */ &&
                  t(team[0].bio)}
              </p>
              <dl className="mt-8 grid gap-6 sm:grid-cols-3">
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    Years at the bar
                  </dt>
                  <dd className="mt-1 font-display text-2xl text-primary">
                    {firm.leadAdvocate.yearsOfPractice}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    Bar Council Reg.
                  </dt>
                  <dd className="mt-1 font-display text-2xl text-primary">
                    {firm.leadAdvocate.barCouncilNo}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    AIBE
                  </dt>
                  <dd className="mt-1 font-display text-2xl text-primary">
                    {firm.leadAdvocate.aibe}
                  </dd>
                </div>
              </dl>
              <h3 className="mt-10 font-display text-xl text-primary">{t(ui.sections.courts)}</h3>
              <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                {firm.courts.map((c) => (
                  <li key={c} className="flex items-center gap-2">
                    <span className="h-1 w-3 bg-gold" />
                    {c}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-primary px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-primary-foreground hover:bg-navy-deep"
                >
                  {t(ui.cta.book)}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
