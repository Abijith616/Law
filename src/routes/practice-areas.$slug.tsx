import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { firm, practiceAreas } from "@/content/firm";
import { useT, ui } from "@/lib/i18n";
import { PracticeIcon } from "@/components/site/PracticeIcon";

export const Route = createFileRoute("/practice-areas/$slug")({
  loader: ({ params }) => {
    const area = practiceAreas.find((p) => p.slug === params.slug);
    if (!area) throw notFound();
    return { area };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.area;
    const title = a ? `${a.title.en} — ${firm.name}` : firm.name;
    const desc = a?.short.en ?? "";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-5 py-24 text-center">
      <h1 className="font-display text-4xl text-primary">Practice area not found</h1>
      <Link
        to="/practice-areas"
        className="mt-6 inline-block text-sm uppercase tracking-[0.18em] text-gold"
      >
        ← All practice areas
      </Link>
    </div>
  ),
  component: AreaDetail,
});

function AreaDetail() {
  const t = useT();
  const { area } = Route.useLoaderData();
  const others = practiceAreas.filter((p) => p.slug !== area.slug).slice(0, 4);

  return (
    <article>
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
          <Link
            to="/practice-areas"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> {t(ui.nav.practice)}
          </Link>
          <div className="mt-6" aria-hidden>
            <PracticeIcon name={area.icon} className="h-12 w-12 text-gold" />
          </div>
          <h1 className="mt-4 font-display text-4xl leading-tight text-primary sm:text-6xl">
            {t(area.title)}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{t(area.short)}</p>
        </div>
      </header>

      <section className="mx-auto grid max-w-5xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.5fr_1fr]">
        <div className="prose prose-lg max-w-none text-foreground">
          <p className="text-lg leading-relaxed">{t(area.body)}</p>
          <p className="mt-6 text-base text-muted-foreground">
            Engagements begin with a written fee note. We accept payments by bank transfer, UPI and
            cheque. For urgent filing queries, reach us on WhatsApp during business hours.
          </p>
        </div>
        <aside className="border border-gold bg-card p-7">
          <p className="text-xs uppercase tracking-[0.18em] text-gold">{t(firm.consultation)}</p>
          <h3 className="mt-2 font-display text-2xl text-primary">Talk to a partner</h3>
          <p className="mt-2 text-sm text-muted-foreground">Honest first opinion, no obligation.</p>
          <div className="mt-5 flex flex-col gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 text-sm font-medium uppercase tracking-[0.18em] text-primary-foreground hover:bg-navy-deep"
            >
              {t(ui.cta.book)}
            </Link>
            <a
              href={`https://wa.me/${firm.contact.whatsapp}?text=${encodeURIComponent(`Hello, I have a query regarding ${area.title.en}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-primary px-5 py-3 text-sm font-medium uppercase tracking-[0.18em] text-primary hover:bg-primary hover:text-primary-foreground"
            >
              {t(ui.cta.whatsapp)}
            </a>
          </div>
        </aside>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="font-display text-2xl text-primary">Other services</h2>
          <ul className="mt-6 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {others.map((p) => (
              <li key={p.slug} className="bg-background">
                <Link
                  to="/practice-areas/$slug"
                  params={{ slug: p.slug }}
                  className="group flex h-full items-center justify-between gap-4 p-5"
                >
                  <span className="font-display text-lg text-primary group-hover:text-gold">
                    {t(p.title)}
                  </span>
                  <ArrowRight className="h-4 w-4 text-gold opacity-0 transition group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
