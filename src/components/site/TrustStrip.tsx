import { firm, reviews } from "@/content/firm";
import { Star } from "lucide-react";

export function TrustStrip() {
  return (
    <section aria-label="Trust signals" className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-y divide-border sm:grid-cols-4 sm:divide-x sm:divide-y-0">
        <Item value={`${firm.leadAdvocate.yearsOfPractice}+`} label="Years of Practice" />
        <Item value="4" label="Tribunals & MCA Filings" />
        <Item
          value={
            <span className="inline-flex items-baseline gap-1">
              {reviews.rating.toFixed(1)}
              <Star className="h-4 w-4 fill-gold text-gold" aria-hidden />
            </span>
          }
          label={`${reviews.count} Client reviews`}
        />
        <Item value="ICAI" label="Registered · FRN 015234S" />
      </div>
    </section>
  );
}

function Item({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div className="px-5 py-6 text-center sm:px-8 sm:py-8">
      <div className="font-display text-3xl text-primary sm:text-4xl">{value}</div>
      <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
