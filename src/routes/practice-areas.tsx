import { createFileRoute, Outlet, useMatches } from "@tanstack/react-router";
import { firm, practiceAreas } from "@/content/firm";
import { useT, ui } from "@/lib/i18n";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PracticeCard } from "@/components/site/PracticeCard";

export const Route = createFileRoute("/practice-areas")({
  head: () => ({
    meta: [
      { title: `Services — ${firm.name}` },
      {
        name: "description",
        content:
          "Taxation & GST compliance, statutory audit, bookkeeping, company registration, NRI taxation, startup advisory, corporate law, project reports, risk advisory, NCLT representation — handled by experienced partners.",
      },
      { property: "og:title", content: `Services — ${firm.name}` },
      {
        property: "og:description",
        content:
          "Twelve focused financial and compliance services, handled personally by a partner.",
      },
    ],
  }),
  component: PracticeAreasLayout,
});

function PracticeAreasLayout() {
  const matches = useMatches();
  const t = useT();
  const isChild = matches.some((m) => m.routeId === "/practice-areas/$slug");
  if (isChild) return <Outlet />;

  return (
    <div>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-gold">
            <span className="h-px w-10 bg-gold" /> {t(ui.nav.practice)}
          </div>
          <h1 className="max-w-3xl font-display text-4xl leading-tight text-primary sm:text-6xl">
            Twelve specialist services, one accountable partner per matter.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((p) => (
            <PracticeCard key={p.slug} area={p} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <SectionHeading
          eyebrow="Appellate Tribunals & MCA"
          title="Representing clients before taxation and corporate tribunals."
        />
        <ul className="mt-8 grid gap-3 text-base text-foreground sm:grid-cols-2">
          {firm.courts.map((c) => (
            <li key={c} className="flex items-center gap-3 border-b border-border pb-3">
              <span className="h-1.5 w-6 bg-gold" />
              {c}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
