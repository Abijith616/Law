import { useT, ui } from "@/lib/i18n";

export function TrustStrip() {
  const t = useT();
  return (
    <section aria-label="Trust signals" className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-y divide-border sm:grid-cols-4 sm:divide-x sm:divide-y-0">
        <Item value="24+" label={t(ui.stats.experience)} />
        <Item value="60+" label={t(ui.stats.corporate)} />
        <Item value="100+" label={t(ui.stats.nonCorporate)} />
        <Item value="12+" label={t(ui.stats.verticals)} />
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
