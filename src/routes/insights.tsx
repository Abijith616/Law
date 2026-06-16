import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { firm, insights } from "@/content/firm";
import { useT, ui } from "@/lib/i18n";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: `Insights — ${firm.name}` },
      {
        name: "description",
        content:
          "Practical legal notes from our practice — property, criminal defence, family, GST and corporate matters in Kerala.",
      },
      { property: "og:title", content: `Insights — ${firm.name}` },
      { property: "og:description", content: "Practical legal notes from our practice." },
    ],
  }),
  component: InsightsLayout,
});

function InsightsLayout() {
  const matches = useMatches();
  const t = useT();
  if (matches.some((m) => m.routeId === "/insights/$slug")) return <Outlet />;

  return (
    <div>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-gold">
            <span className="h-px w-10 bg-gold" /> {t(ui.nav.insights)}
          </div>
          <h1 className="max-w-3xl font-display text-4xl leading-tight text-primary sm:text-6xl">
            Notes from our practice. Written for clients, not for lawyers.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <ul className="divide-y divide-border border-t border-b border-border">
          {insights.map((a) => (
            <li key={a.slug}>
              <Link
                to="/insights/$slug"
                params={{ slug: a.slug }}
                className="group grid gap-4 py-8 sm:grid-cols-[180px_1fr] sm:gap-8"
              >
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground sm:pt-1">
                  {new Date(a.date).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                  <span className="mx-2 text-gold">·</span>
                  {a.author}
                </span>
                <div>
                  <h2 className="font-display text-2xl leading-snug text-primary group-hover:text-gold sm:text-3xl">
                    {t(a.title)}
                  </h2>
                  <p className="mt-2 text-muted-foreground">{t(a.excerpt)}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
