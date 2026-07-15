import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Scale, ShieldCheck, MessageCircle, Star } from "lucide-react";
import { firm, team, practiceAreas, testimonials, insights, reviews } from "@/content/firm";
import { useT, ui, useLocale } from "@/lib/i18n";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PracticeCard } from "@/components/site/PracticeCard";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { TrustStrip } from "@/components/site/TrustStrip";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${firm.name} — Chartered Accountants in Angamaly, Ernakulam` },
      {
        name: "description",
        content:
          "Professional Chartered Accountant firm in Angamaly, Ernakulam, Kerala. Expert auditing, taxation, GST compliance, company registration, and corporate financial advisory.",
      },
      {
        property: "og:title",
        content: `${firm.name} — Chartered Accountants in Angamaly, Ernakulam`,
      },
      {
        property: "og:description",
        content:
          "Precision in Compliance. Confidence in Every Decision. Free 15-minute consultation, direct WhatsApp access.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: firm.name,
          telephone: firm.contact.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: firm.contact.address.en,
            addressLocality: "Angamaly",
            addressRegion: "Kerala",
            addressCountry: "IN",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: reviews.rating,
            reviewCount: reviews.count,
          },
        }),
      },
    ],
  }),
  component: Home,
});

const slides = [
  {
    image: "/images/hero-audit.png",
    tagline: { en: "Assurance & Auditing", ml: "ഓഡിറ്റും അഷ്വറൻസും" },
    title: { en: "Rigorous Standards. Absolute Integrity.", ml: "കർശനമായ മാനദണ്ഡങ്ങൾ. പൂർണ്ണമായ സമഗ്രത." },
    description: {
      en: "Delivering world-class auditing, compliance, and corporate financial health reporting to foster absolute trust.",
      ml: "പൂർണ്ണമായ വിശ്വാസം വളർത്തിയെടുക്കുന്നതിന് ലോകോത്തര നിലവാരത്തിലുള്ള ഓഡിറ്റിംഗും റിപ്പോർട്ടിംഗും നൽകുന്നു.",
    },
  },
  {
    image: "/images/hero-tax.png",
    tagline: { en: "Taxation & Regulatory", ml: "നികുതിയും നിയമപരമായ സേവനങ്ങളും" },
    title: { en: "Navigating Complexity with Precision.", ml: "സങ്കീർണ്ണമായ നികുതി രീതികൾ കൃത്യതയോടെ കൈകാര്യം ചെയ്യുന്നു." },
    description: {
      en: "Expert direct and indirect tax strategies, GST compliance, and NRI taxation structures customized for your needs.",
      ml: "നിങ്ങളുടെ ആവശ്യങ്ങൾക്കനുസരിച്ച് തയ്യാറാക്കിയ വിദഗ്ദ്ധ നികുതി തന്ത്രങ്ങളും ജിഎസ്ടി കംപ്ലയൻസും.",
    },
  },
  {
    image: "/images/hero-advisory.png",
    tagline: { en: "Corporate Advisory", ml: "കോർപ്പറേറ്റ് അഡ്വൈസറി" },
    title: { en: "Strategic Growth. Compliant Foundations.", ml: "തന്ത്രപരമായ വളർച്ച. സുരക്ഷിതമായ അടിത്തറ." },
    description: {
      en: "Helping startups and established enterprises scale safely with robust corporate governance and corporate advisory.",
      ml: "ശക്തമായ കോർപ്പറേറ്റ് ഗവേണൻസോടെ സ്റ്റാർട്ടപ്പുകളെയും സ്ഥാപനങ്ങളെയും സുരക്ഷിതമായി വളരാൻ സഹായിക്കുന്നു.",
    },
  },
];

function Home() {
  const t = useT();
  const { locale } = useLocale();
  const waHref = `https://wa.me/${firm.contact.whatsapp}`;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* SLIDESHOW HERO */}
      <section className="relative w-full overflow-hidden bg-navy-deep h-[500px] sm:h-[600px] lg:h-[650px] border-b border-border">
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {/* Slide Image with Slow Zoom-in */}
            <motion.img
              key={currentSlide}
              src={slides[currentSlide].image}
              alt={t(slides[currentSlide].title)}
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* Blue Shadow/Tint Overlay for Seamless Integration */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy/40 to-transparent mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-navy/15" />
            <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(11,30,63,0.8)]" />

            {/* Content Overlay - Grid Aligned */}
            <div className="absolute inset-0 flex flex-col justify-end pb-12 sm:pb-16 lg:pb-20 text-white">
              <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="max-w-2xl"
                >
                  <span className="mb-4 inline-block text-xs uppercase tracking-[0.25em] text-gold font-medium">
                    {t(slides[currentSlide].tagline)}
                  </span>
                  <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4">
                    {t(slides[currentSlide].title)}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-300 font-sans max-w-lg">
                    {t(slides[currentSlide].description)}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots / Indicators - Grid Aligned */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 w-full max-w-7xl px-5 sm:px-8 flex justify-end gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === idx ? "w-8 bg-gold" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* HERO DETAILS */}
      <section className="relative overflow-hidden bg-background">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M48 0H0V48" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="text-primary" />
          </svg>
        </div>
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pt-12 pb-20 sm:px-8 sm:pt-16 sm:pb-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pt-20 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-10 bg-gold" />
              Est. {firm.established} · {t(firm.city)}
            </div>
            <h1 className="font-display text-[2.6rem] leading-[1.05] text-primary sm:text-6xl md:text-7xl">
              {locale === "en" ? (
                <>
                  Precision in <span className="italic text-gold">Compliance</span>.
                  <br className="hidden sm:block" />
                  Confidence in Every Decision.
                </>
              ) : (
                <>
                  കൃത്യതയാർന്ന <span className="italic text-gold">കംപ്ലയൻസ്</span>.
                  <br className="hidden sm:block" />
                  ആത്മവിശ്വാസമുള്ള തീരുമാനങ്ങൾ.
                </>
              )}
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              {t(ui.home.hero.subtitle)}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-medium uppercase tracking-[0.18em] text-primary-foreground transition hover:bg-navy-deep"
              >
                {t(ui.cta.book)}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-primary px-6 py-3.5 text-sm font-medium uppercase tracking-[0.18em] text-primary transition hover:bg-primary hover:text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" />
                {t(ui.cta.whatsapp)}
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span>ICAI FRN {firm.leadAdvocate.barCouncilNo}</span>
              <span className="inline-flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 fill-gold text-gold" />
                {reviews.rating} on Google · {reviews.count} reviews
              </span>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            {(() => {
              const partners = [
                {
                  name: "Jibin Jose, FCA",
                  initials: "JJ",
                  role: t(ui.sections.leadAdvocate),
                  years: t({ en: "12+ years", ml: "12+ വർഷം" }),
                  membershipNo: "[M. No.]",
                  phone: team[0].phone,
                  phoneHref: team[0].phoneHref,
                },
                {
                  name: "Anoop Antony, FCA",
                  initials: "AA",
                  role: t(ui.sections.leadAdvocate),
                  years: t({ en: "12+ years", ml: "12+ വർഷം" }),
                  membershipNo: "238806",
                  phone: team[1].phone,
                  phoneHref: team[1].phoneHref,
                },
              ];

              return (
                <div className="relative border border-border bg-card p-8 shadow-[0_30px_60px_-30px_rgba(11,30,63,0.35)]">
                  <div className="absolute -top-3 left-8 bg-gold px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-primary">
                    {t(firm.consultation)}
                  </div>
                  <div className="flex flex-col gap-5">
                    {partners.map((partner, index) => (
                      <div key={partner.name}>
                        <div className="flex items-start gap-4">
                          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-primary/20 bg-primary/10 font-display text-xl font-bold text-primary">
                            {partner.initials}
                          </div>
                          <div className="min-w-0">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                              {partner.role}
                            </p>
                            <p className="mt-0.5 font-display text-lg font-semibold text-primary">
                              {partner.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {partner.years} · M. No. {partner.membershipNo}
                            </p>
                            <p className="mt-1 text-xs font-medium text-primary">{partner.phone}</p>
                            <a
                              href={`tel:${partner.phoneHref}`}
                              className="mt-3 inline-flex items-center justify-center gap-2 bg-primary px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground transition hover:bg-navy-deep"
                            >
                              <Phone className="h-3.5 w-3.5" />
                              {partner.phone}
                            </a>
                          </div>
                        </div>
                        {index === 0 ? <div className="my-5 h-px bg-border/60" /> : null}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </motion.aside>
        </div>
      </section>

      <TrustStrip />

      {/* PRACTICE AREAS */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow={t(ui.sections.practiceAreas)}
          title={t(ui.home.practiceAreas.title)}
          subtitle={t(ui.home.practiceAreas.subtitle)}
        />
        <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {practiceAreas.slice(0, 4).map((p) => (
            <PracticeCard key={p.slug} area={p} />
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/practice-areas"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-primary hover:text-gold"
          >
            {t(ui.cta.allAreas)} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-10 bg-gold" />
              {t(ui.sections.whyUs)}
            </div>
            <h2 className="font-display text-3xl leading-tight sm:text-5xl">
              {locale === "en" ? (
                <>
                  Old-school discipline.
                  <br />
                  Modern access.
                </>
              ) : (
                <>
                  പരമ്പരാഗത അച്ചടക്കം.
                  <br />
                  ആധുനികമായ ഇടപെടൽ.
                </>
              )}
            </h2>
            <p className="mt-5 max-w-md text-primary-foreground/75">
              {t(ui.home.whyUs.subtitle)}
            </p>
          </div>
          <ul className="grid gap-px bg-white/15 sm:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: t(ui.home.whyUs.feature1Title),
                body: t(ui.home.whyUs.feature1Body),
              },
              {
                icon: MessageCircle,
                title: t(ui.home.whyUs.feature2Title),
                body: t(ui.home.whyUs.feature2Body),
              },
              {
                icon: Scale,
                title: t(ui.home.whyUs.feature3Title),
                body: t(ui.home.whyUs.feature3Body),
              },
            ].map((f) => (
              <li key={f.title} className="bg-primary p-7">
                <f.icon className="h-6 w-6 text-gold" aria-hidden />
                <h3 className="mt-4 font-display text-xl">{f.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/75">{f.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading eyebrow={t(ui.home.testimonials.eyebrow)} title={t(ui.sections.testimonials)} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((it, i) => (
            <TestimonialCard key={i} t={it} />
          ))}
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="flex items-end justify-between gap-6">
            <SectionHeading
              eyebrow={t(ui.sections.insights)}
              title={t(ui.home.insights.title)}
            />
            <Link
              to="/insights"
              className="hidden shrink-0 items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-primary hover:text-gold sm:inline-flex"
            >
              {t(ui.cta.allInsights)} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {insights.slice(0, 3).map((a) => (
              <Link
                key={a.slug}
                to="/insights/$slug"
                params={{ slug: a.slug }}
                className="group flex flex-col border-t-2 border-primary pt-5"
              >
                <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {new Date(a.date).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}{" "}
                  · {a.author}
                </span>
                <h3 className="mt-3 font-display text-2xl leading-snug text-primary group-hover:text-gold">
                  {t(a.title)}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{t(a.excerpt)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="grid gap-8 border border-gold bg-card p-8 sm:p-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2 className="font-display text-3xl leading-tight text-primary sm:text-5xl">
                {t(ui.home.cta.title)}
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                {t(ui.home.cta.subtitle)}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 bg-[#25D366] px-6 py-4 text-sm font-medium uppercase tracking-[0.18em] text-white"
              >
                <MessageCircle className="h-4 w-4" /> {locale === "en" ? "WhatsApp" : "വാട്സ്ആപ്പ്"} · {firm.contact.phone}
              </a>
              <a
                href={`tel:${firm.contact.phoneHref}`}
                className="inline-flex flex-1 items-center justify-center gap-2 bg-primary px-6 py-4 text-sm font-medium uppercase tracking-[0.18em] text-primary-foreground"
              >
                <Phone className="h-4 w-4" /> {firm.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
