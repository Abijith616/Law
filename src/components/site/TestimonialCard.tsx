import type { Testimonial } from "@/content/firm";
import { useT } from "@/lib/i18n";

export function TestimonialCard({ t: item }: { t: Testimonial }) {
  const tr = useT();
  return (
    <figure className="flex h-full flex-col justify-between border border-border bg-card p-7">
      <span className="font-display text-5xl leading-none text-gold" aria-hidden>
        "
      </span>
      <blockquote className="mt-3 font-display text-xl leading-snug text-primary">
        {tr(item.quote)}
      </blockquote>
      <figcaption className="mt-6 border-t border-border pt-4 text-sm">
        <div className="font-medium text-foreground">{item.author}</div>
        <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {tr(item.matter)}
        </div>
      </figcaption>
    </figure>
  );
}
