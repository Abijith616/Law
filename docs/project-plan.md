## Project

A multi-page website for a fictional Kerala-based law firm, inspired structurally by gja.co.in (clean editorial layout, top nav, hero, featured services grid) but redesigned for a law firm with India-specific UX. All content is dummy data in a typed TypeScript content file you can edit later.

Note on stack: your project runs on **TanStack Start** (file-based routing, SSR, server functions) — not Next.js. Same React + TypeScript world; I'll build it here.

## Design direction

- Palette: deep navy `#0B1E3F`, ivory `#F7F4EC`, gold accent `#C9A24C`, charcoal text `#1A1A1A`.
- Typography: serif display (Cormorant Garamond) for headings + sans (Inter) for body — institutional but modern. Loaded via `<link>` in `__root.tsx`, registered as `--font-display` / `--font-sans` in `@theme`.
- Editorial layout: oversized headlines, generous whitespace, asymmetric grids, hairline gold dividers. No carousels, no stock gavel photos — illustrated/abstract placeholders only.
- Subtle Framer Motion: fade/slide on section enter, hover lift on cards. Nothing flashy.

## Pages (file-based routes)

```text
src/routes/
  __root.tsx              header + footer + WhatsApp FAB + lang context
  index.tsx               Home
  about.tsx               Firm story, values, lead advocate
  practice-areas.tsx      Grid of all areas
  practice-areas.$slug.tsx  Per-area detail page
  team.tsx                Advocates list
  insights.tsx            Articles/blog (dummy posts)
  insights.$slug.tsx      Article detail
  contact.tsx             Form + map + office details
```

Each route sets its own `head()` with unique title + meta + og tags. Single `<h1>` per page. Hairline JSON-LD `LegalService` on home + contact.

## Home page sections

1. Hero — firm name in serif display, one-line positioning, two CTAs ("Book Free Consultation", "WhatsApp Us"), advocate photo placeholder, Bar Council no. + years of practice badge.
2. Trust strip — court appearances (District / High Court / Supreme Court), AIBE, years, Google rating (dummy).
3. Practice areas — 6–8 cards in editorial grid with India-correct naming (Property Disputes, Matrimonial, Criminal Defence & Bail, Consumer/NCDRC, Labour & Service, GST & Tax, Motor Accident Claims, Corporate).
4. Why us — 3 columns: transparent fees, direct WhatsApp access, decades of court experience.
5. Lead advocate intro — photo placeholder, short bio, credentials.
6. Testimonials — 3 dummy client quotes.
7. Insights preview — 3 latest article cards.
8. Contact CTA band — "Free initial consultation" + WhatsApp + phone.

## India-specific features (non-negotiable)

- **Floating WhatsApp button** on every page (bottom-right, above mobile thumb zone), opens `https://wa.me/<number>?text=...`.
- **Click-to-call** phone link in header + footer.
- **Bar Council enrollment no.** in footer + about page.
- **Court appearances** listed (Ernakulam District, Kerala High Court, Supreme Court — dummy).
- **Fee transparency** line: "Free 15-minute initial consultation".
- **Google reviews** placeholder block with star rating + 3 dummy reviews + "View all on Google" link.
- **Office address + embedded Google Map** on contact page (static iframe with dummy coords).
- **Language toggle** EN ⇄ ML in header — React context + dictionary file (`src/content/i18n.ts`) with `en` and `ml` keys; all visible strings read from it. Default English.

## Content data shape (typed dummy data)

`src/content/firm.ts`:

```ts
export const firm = {
  name: "Menon & Partners Advocates",
  tagline: "Counsel you can call. Advocacy you can trust.",
  established: 1998,
  city: "Ernakulam, Kerala",
  leadAdvocate: {
    name: "...",
    barCouncilNo: "KER/1234/2009",
    aibe: "AIBE-XV-...",
    yearsOfPractice: 22,
  },
  contact: { phone: "+91 ...", whatsapp: "91...", email: "...", address: "..." },
  courts: ["Ernakulam District Court", "Kerala High Court", "Supreme Court of India"],
} as const;

export const practiceAreas: PracticeArea[] = [
  /* 8 items */
];
export const team: Advocate[] = [
  /* 4 dummy */
];
export const testimonials: Testimonial[] = [
  /* 3 */
];
export const insights: Article[] = [
  /* 4 */
];
```

All page components import from here. Slug routes look up by `params.slug` and call `notFound()` if missing.

## Components

`src/components/site/`: `Header.tsx`, `Footer.tsx`, `WhatsAppFab.tsx`, `LanguageToggle.tsx`, `PracticeCard.tsx`, `TestimonialCard.tsx`, `TrustStrip.tsx`, `SectionHeading.tsx`, `ContactForm.tsx` (client-side validation only, posts to a stub server function that logs + returns ok — no DB).

## Accessibility

- WCAG 2.1 AA contrast on the navy/ivory/gold palette (verified).
- Every image has alt text; icon-only buttons have `aria-label`.
- Keyboard focus rings preserved.
- Form labels + error messages wired with `aria-describedby`.
- One `<main>` per page (rendered in `__root.tsx` around `<Outlet />`).

## Out of scope (call out so you can ask later)

- Real backend / DB / auth — contact form is a stub.
- Real Google Reviews API — embedded block uses dummy data.
- Real Google Maps API key — uses a static iframe embed URL.
- Razorpay / payment — not included.
- Blog CMS — `insights` is dummy data in the content file.

## Technical details

- Stack: TanStack Start v1 + React 19 + Tailwind v4 + shadcn primitives already in repo + Framer Motion (add via `bun add framer-motion`).
- Design tokens added to `src/styles.css` under `:root` and mapped in `@theme inline` (navy, ivory, gold, plus `--font-display`, `--font-sans`).
- Fonts loaded via `<link rel="stylesheet" href="https://fonts.googleapis.com/...">` in `__root.tsx` `head().links`.
- Each route sets `head()` with title/description/og — no shared metadata fallback.
- `notFoundComponent` + `errorComponent` already present in `__root.tsx`; reused.
- Replace the placeholder `src/routes/index.tsx` entirely.
- Dynamic routes (`practice-areas.$slug.tsx`, `insights.$slug.tsx`) use `Route.useParams()` and look up from the content file in the loader.
- WhatsApp FAB and language toggle live in `__root.tsx` so they appear on every route.
- Bilingual content stored as `{ en: string; ml: string }`; a `useT()` hook returns the current locale's string. Locale persists in `localStorage`.

Ready for you to approve, after which I'll build it.
