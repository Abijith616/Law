import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Bi, Locale } from "@/content/firm";

type Ctx = { locale: Locale; setLocale: (l: Locale) => void };
const I18nContext = createContext<Ctx>({ locale: "en", setLocale: () => {} });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("locale");
      if (saved === "en" || saved === "ml") setLocaleState(saved);
    } catch {
      // Ignore storage access failures in private or restricted browser contexts.
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem("locale", l);
    } catch {
      // Ignore storage access failures in private or restricted browser contexts.
    }
  };

  return <I18nContext.Provider value={{ locale, setLocale }}>{children}</I18nContext.Provider>;
}

export function useLocale() {
  return useContext(I18nContext);
}

export function useT() {
  const { locale } = useLocale();
  return (b: Bi) => b[locale];
}

/** Static UI strings dictionary */
export const ui = {
  nav: {
    home: { en: "Home", ml: "ഹോം" },
    about: { en: "About", ml: "ഞങ്ങളെക്കുറിച്ച്" },
    practice: { en: "Practice Areas", ml: "പ്രാക്ടീസ് മേഖലകൾ" },
    team: { en: "Team", ml: "ടീം" },
    insights: { en: "Insights", ml: "ലേഖനങ്ങൾ" },
    contact: { en: "Contact", ml: "ബന്ധപ്പെടുക" },
  },
  cta: {
    book: { en: "Book Free Consultation", ml: "സൗജന്യ ഉപദേശം ബുക്ക് ചെയ്യുക" },
    whatsapp: { en: "WhatsApp Us", ml: "വാട്സ്ആപ്പിൽ ബന്ധപ്പെടുക" },
    call: { en: "Call Now", ml: "ഇപ്പോൾ വിളിക്കുക" },
    learnMore: { en: "Read more", ml: "കൂടുതൽ വായിക്കുക" },
    allAreas: { en: "View all practice areas", ml: "എല്ലാ മേഖലകളും" },
    allInsights: { en: "All insights", ml: "എല്ലാ ലേഖനങ്ങളും" },
  },
  sections: {
    practiceAreas: { en: "Practice Areas", ml: "പ്രാക്ടീസ് മേഖലകൾ" },
    whyUs: { en: "Why clients choose us", ml: "ക്ലയന്റുകൾ ഞങ്ങളെ തിരഞ്ഞെടുക്കുന്നത് എന്തുകൊണ്ട്" },
    testimonials: { en: "Client testimonials", ml: "ക്ലയന്റ് അഭിപ്രായങ്ങൾ" },
    insights: { en: "Recent Insights", ml: "സമീപകാല ലേഖനങ്ങൾ" },
    leadAdvocate: { en: "Lead Partner", ml: "മുഖ്യ പങ്കാളി" },
    courts: { en: "Appellate Tribunals", ml: "ഞങ്ങൾ ഹാജരാകുന്ന ട്രൈബ്യൂണലുകൾ" },
  },
} as const;
