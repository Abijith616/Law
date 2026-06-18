import { createFileRoute } from "@tanstack/react-router";
import { firm, team } from "@/content/firm";
import { useT, ui } from "@/lib/i18n";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: `Our Team — ${firm.name}` },
      {
        name: "description",
        content:
          "Meet the partners and associates at JA & Associates Chartered Accountants, Angamaly.",
      },
      { property: "og:title", content: `Our Team — ${firm.name}` },
      {
        property: "og:description",
        content: "Meet the partners and associates at JA & Associates Chartered Accountants.",
      },
    ],
  }),
  component: Team,
});

function Team() {
  const t = useT();
  return (
    <div>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-gold">
            <span className="h-px w-10 bg-gold" /> {t(ui.nav.team)}
          </div>
          <h1 className="max-w-3xl font-display text-4xl leading-tight text-primary sm:text-6xl">
            A team of Chartered Accountants with deep professional experience.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <ul className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <li key={m.name} className="flex flex-col bg-background p-6 sm:p-8">
              <div className="grid aspect-square w-full place-items-center bg-primary font-display text-5xl text-primary-foreground">
                {m.initials}
              </div>
              <div className="mt-5">
                <h3 className="font-display text-xl text-primary">{m.name}</h3>
                <p className="text-xs uppercase tracking-[0.18em] text-gold">{t(m.role)}</p>
                <p className="mt-3 text-sm text-muted-foreground">{t(m.bio)}</p>
                <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {m.years} years of practice
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
