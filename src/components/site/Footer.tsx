import { Link } from "@tanstack/react-router";
import { firm, practiceAreas } from "@/content/firm";
import { useT, ui } from "@/lib/i18n";

export function Footer() {
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-ivory p-1">
              <img
                src="/icon-transparent.png"
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
            <span className="font-display text-xl text-ivory font-semibold">{firm.shortName}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-primary-foreground/75">{t(firm.tagline)}</p>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-gold">
            ICAI FRN {firm.leadAdvocate.barCouncilNo}
          </p>
        </div>

        <div>
          <h4 className="font-display text-base text-gold">{t(ui.nav.practice)}</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            {practiceAreas.slice(0, 6).map((p) => (
              <li key={p.slug}>
                <Link
                  to="/practice-areas/$slug"
                  params={{ slug: p.slug }}
                  className="hover:text-gold"
                >
                  {t(p.title)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base text-gold">Firm</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>
              <Link to="/about" className="hover:text-gold">
                {t(ui.nav.about)}
              </Link>
            </li>
            <li>
              <Link to="/team" className="hover:text-gold">
                {t(ui.nav.team)}
              </Link>
            </li>
            <li>
              <Link to="/insights" className="hover:text-gold">
                {t(ui.nav.insights)}
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-gold">
                {t(ui.nav.careers)}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold">
                {t(ui.nav.contact)}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base text-gold">{t(ui.nav.contact)}</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>
              <a className="hover:text-gold" href={`tel:${firm.contact.phoneHref}`}>
                {firm.contact.phone}
              </a>
            </li>
            <li>
              <a
                className="hover:text-gold"
                href={`https://wa.me/${firm.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp · {firm.contact.phone}
              </a>
            </li>
            <li>
              <a className="hover:text-gold" href={`mailto:${firm.contact.email}`}>
                {firm.contact.email}
              </a>
            </li>
            <li className="pt-2 text-primary-foreground/70">{t(firm.contact.address)}</li>
            <li className="text-primary-foreground/60">{t(firm.contact.hours)}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {firm.name}. All rights reserved.
          </p>
          <p className="max-w-xl text-[11px] leading-relaxed">
            As per Institute of Chartered Accountants of India (ICAI) guidelines, this website is for informational purposes only and
            does not constitute solicitation, advertisement or professional advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
