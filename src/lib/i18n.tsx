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
    practice: { en: "Services", ml: "സേവനങ്ങൾ" },
    team: { en: "Team", ml: "ടീം" },
    insights: { en: "Insights", ml: "ലേഖനങ്ങൾ" },
    careers: { en: "Careers", ml: "ജോലി" },
    contact: { en: "Contact", ml: "ബന്ധപ്പെടുക" },
  },
  cta: {
    book: { en: "Book Free Consultation", ml: "സൗജന്യ ഉപദേശം ബുക്ക് ചെയ്യുക" },
    whatsapp: { en: "WhatsApp Us", ml: "വാട്സ്ആപ്പിൽ ബന്ധപ്പെടുക" },
    call: { en: "Call Now", ml: "ഇപ്പോൾ വിളിക്കുക" },
    learnMore: { en: "Read more", ml: "കൂടുതൽ വായിക്കുക" },
    allAreas: { en: "View all services", ml: "എല്ലാ സേവനങ്ങളും" },
    allInsights: { en: "All insights", ml: "എല്ലാ ലേഖനങ്ങളും" },
    applyNow: { en: "Apply Now", ml: "അപേക്ഷിക്കുക" },
  },
  sections: {
    practiceAreas: { en: "Our Services", ml: "ഞങ്ങളുടെ സേവനങ്ങൾ" },
    whyUs: { en: "Why clients choose us", ml: "ക്ലയന്റുകൾ ഞങ്ങളെ തിരഞ്ഞെടുക്കുന്നത് എന്തുകൊണ്ട്" },
    testimonials: { en: "Client testimonials", ml: "ക്ലയന്റ് അഭിപ്രായങ്ങൾ" },
    insights: { en: "Recent Insights", ml: "സമീപകാല ലേഖനങ്ങൾ" },
    leadAdvocate: { en: "Lead Partner", ml: "മുഖ്യ പങ്കാളി" },
    courts: { en: "Areas of Expertise", ml: "പ്രധാന പ്രവർത്തന മേഖലകൾ" },
  },
  home: {
    hero: {
      title: {
        en: "Precision in Compliance. Confidence in Every Decision.",
        ml: "കൃത്യതയാർന്ന കംപ്ലയൻസ്. ആത്മവിശ്വാസമുള്ള തീരുമാനങ്ങൾ.",
      },
      subtitle: {
        en: "Professional accounting, taxation, audit, and corporate advisory services backed by experience and integrity.",
        ml: "അനുഭവസമ്പത്തിലും വിശ്വസ്തതയിലും അധിഷ്ഠിതമായ പ്രൊഫഷണൽ അക്കൗണ്ടിംഗ്, നികുതി, ഓഡിറ്റ്, കോർപ്പറേറ്റ് അഡ്വൈസറി സേവനങ്ങൾ.",
      },
    },
    practiceAreas: {
      title: {
        en: "Specialist counsel across the matters that affect Kerala the most.",
        ml: "കേരളത്തെ ഏറ്റവും ബാധിക്കുന്ന വിഷയങ്ങളിൽ വിദഗ്ദ്ധമായ സേവനം.",
      },
      subtitle: {
        en: "Twelve focused services. Each handled personally by a partner with deep experience.",
        ml: "പന്ത്രണ്ട് പ്രമുഖ സേവനങ്ങൾ. ഓരോന്നും കൈകാര്യം ചെയ്യുന്നത് വർഷങ്ങളുടെ അനുഭവസമ്പത്തുള്ള പങ്കാളികൾ നേരിട്ടാണ്.",
      },
    },
    whyUs: {
      title: { en: "Old-school discipline. Modern access.", ml: "പരമ്പരാഗത അച്ചടക്കം. ആധുനികമായ ഇടപെടൽ." },
      subtitle: {
        en: "We blend the rigour expected from a senior bar with the responsiveness clients in 2026 actually need.",
        ml: "പ്രൊഫഷണലുകളിൽ നിന്ന് പ്രതീക്ഷിക്കുന്ന കൃത്യതയും ക്ലയന്റുകൾക്കാവശ്യമായ വേഗത്തിലുള്ള മറുപടിയും ഞങ്ങൾ ഒന്നിപ്പിക്കുന്നു.",
      },
      feature1Title: { en: "Transparent fees", ml: "സുതാര്യമായ ഫീസ്" },
      feature1Body: { en: "Quoted upfront in writing. No surprise bills, no hidden disbursements.", ml: "എല്ലാ ഫീസും എഴുതിത്തയ്യാറാക്കി മുൻകൂട്ടി അറിയിക്കുന്നു. അപ്രതീക്ഷിത ബില്ലുകളോ മറഞ്ഞിരിക്കുന്ന ചെലവുകളോ ഇല്ല." },
      feature2Title: { en: "Direct WhatsApp", ml: "നേരിട്ടുള്ള വാട്സ്ആപ്പ് ബന്ധം" },
      feature2Body: { en: "The partner on your matter is reachable on WhatsApp during business hours.", ml: "പ്രവൃത്തിസമയങ്ങളിൽ നിങ്ങളുടെ കാര്യങ്ങൾ നോക്കുന്ന പങ്കാളിയെ നേരിട്ട് വാട്സ്ആപ്പിൽ ബന്ധപ്പെടാം." },
      feature3Title: { en: "Compliance-expert", ml: "കംപ്ലയൻസ് വിദഗ്ദ്ധർ" },
      feature3Body: {
        en: "12+ years of auditing, tax filings, and representation before financial authorities.",
        ml: "ഓഡിറ്റിംഗ്, ടാക്സ് ഫയലിംഗ്, ധനകാര്യ അതോറിറ്റികൾക്ക് മുന്നിലുള്ള പ്രാതിനിധ്യം എന്നിവയിൽ 12-ലധികം വർഷത്തെ പരിചയം.",
      },
    },
    testimonials: {
      eyebrow: { en: "Client voices", ml: "ക്ലയന്റുകളുടെ വാക്കുകൾ" },
    },
    insights: {
      title: { en: "Practical notes from our practice.", ml: "ഞങ്ങളുടെ പ്രവർത്തനങ്ങളിൽ നിന്നുള്ള പ്രായോഗിക കുറിപ്പുകൾ." },
    },
    cta: {
      title: {
        en: "Talk to a partner today. The first 15 minutes are on us.",
        ml: "ഇന്ന് തന്നെ ഒരു പങ്കാളിയുമായി സംസാരിക്കൂ. ആദ്യത്തെ 15 മിനിറ്റ് സൗജന്യമാണ്.",
      },
      subtitle: {
        en: "Describe your financial or tax needs in plain language. We'll tell you honestly how we can help — and what it will cost.",
        ml: "നിങ്ങളുടെ സാമ്പത്തിക അല്ലെങ്കിൽ നികുതി ആവശ്യങ്ങൾ ലളിതമായി വിശദീകരിക്കുക. ഞങ്ങൾക്ക് എങ്ങനെ സഹായിക്കാനാകും - അതിന് എത്ര ചെലവാകും എന്ന് ഞങ്ങൾ വ്യക്തമായി പറഞ്ഞുതരാം.",
      },
    },
  },
  header: {
    subtitle: { en: "Chartered Accountants · Est.", ml: "ചാർട്ടേഡ് അക്കൗണ്ടന്റ്സ് · Est." },
  },
  footer: {
    firmTitle: { en: "Firm", ml: "സ്ഥാപനം" },
    whatsappPrefix: { en: "WhatsApp · ", ml: "വാട്സ്ആപ്പ് · " },
    rightsReserved: { en: "All rights reserved.", ml: "എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം." },
    disclaimer: {
      en: "As per Institute of Chartered Accountants of India (ICAI) guidelines, this website is for informational purposes only and does not constitute solicitation, advertisement or professional advice.",
      ml: "ഇൻസ്റ്റിറ്റ്യൂട്ട് ഓഫ് ചാർട്ടേഡ് അക്കൗണ്ടന്റ്സ് ഓഫ് ഇന്ത്യ (ICAI) മാർഗ്ഗനിർദ്ദേശങ്ങൾ അനുസരിച്ച്, ഈ വെബ്സൈറ്റ് വിവരശേഖരണത്തിന് മാത്രമുള്ളതാണ്, ഇത് പരസ്യമോ ഔദ്യോഗിക ഉപദേശമോ ആയി കണക്കാക്കരുത്.",
    },
  },
  stats: {
    experience: { en: "Cumulative Experience", ml: "ആകെ പരിചയം" },
    corporate: { en: "Corporate Clients", ml: "കോർപ്പറേറ്റ് ക്ലയന്റുകൾ" },
    nonCorporate: { en: "Non-Corporate Clients", ml: "ഇതര ക്ലയന്റുകൾ" },
    verticals: { en: "Service Verticals", ml: "വിവിധ സേവനങ്ങൾ" },
  },
} as const;
