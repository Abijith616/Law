import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { firm } from "@/content/firm";
import { useT, ui } from "@/lib/i18n";
import { LanguageToggle } from "./LanguageToggle";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: ui.nav.home, exact: true },
  { to: "/about", label: ui.nav.about, exact: false },
  { to: "/practice-areas", label: ui.nav.practice, exact: false },
  { to: "/team", label: ui.nav.team, exact: false },
  { to: "/insights", label: ui.nav.insights, exact: false },
  { to: "/contact", label: ui.nav.contact, exact: false },
] as const;

export function Header() {
  const t = useT();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-ivory/85 backdrop-blur supports-[backdrop-filter]:bg-ivory/70">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:grid-cols-[auto_1fr_auto]">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label={firm.name}>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-primary font-display text-xl font-semibold text-primary-foreground">
            M
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-lg leading-tight text-primary">
              {firm.shortName}
            </span>
            <span className="block truncate text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Advocates · Est. {firm.established}
            </span>
          </span>
        </Link>

        <nav className="hidden justify-center lg:flex" aria-label="Primary">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.exact }}
                  className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:text-primary data-[status=active]:text-primary"
                >
                  <span className="relative">{t(item.label)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <a
            href={`tel:${firm.contact.phoneHref}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-navy-deep"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {firm.contact.phone}
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn("lg:hidden border-t border-border/70 bg-ivory", open ? "block" : "hidden")}
      >
        <nav aria-label="Mobile" className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
          <ul className="grid gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: item.exact }}
                  className="block rounded-md px-3 py-2.5 text-base font-medium text-foreground/90 hover:bg-secondary data-[status=active]:bg-secondary data-[status=active]:text-primary"
                >
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-between gap-3">
            <LanguageToggle />
            <a
              href={`tel:${firm.contact.phoneHref}`}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {firm.contact.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
