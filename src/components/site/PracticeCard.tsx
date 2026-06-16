import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { PracticeArea } from "@/content/firm";
import { useT } from "@/lib/i18n";

export function PracticeCard({ area }: { area: PracticeArea }) {
  const t = useT();
  return (
    <Link
      to="/practice-areas/$slug"
      params={{ slug: area.slug }}
      className="group relative flex h-full flex-col justify-between gap-6 border-t-2 border-gold bg-card p-6 transition hover:bg-primary hover:text-primary-foreground sm:p-8"
    >
      <div>
        <div className="text-3xl" aria-hidden>
          {area.icon}
        </div>
        <h3 className="mt-5 font-display text-2xl leading-snug text-primary transition group-hover:text-primary-foreground">
          {t(area.title)}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground transition group-hover:text-primary-foreground/80">
          {t(area.short)}
        </p>
      </div>
      <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.18em] text-primary transition group-hover:text-gold">
        <span>Read more</span>
        <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}
