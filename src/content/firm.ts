export type Locale = "en" | "ml";
export type Bi = { en: string; ml: string };

export type PracticeArea = {
  slug: string;
  title: Bi;
  short: Bi;
  body: Bi;
  icon: string;
};

export type Advocate = {
  name: string;
  role: Bi;
  bio: Bi;
  initials: string;
  years: number;
};

export type Testimonial = { quote: Bi; author: string; matter: Bi };

export type Article = {
  slug: string;
  title: Bi;
  excerpt: Bi;
  body: Bi;
  date: string;
  author: string;
};

export const firm = {
  name: "Menon & Partners Advocates",
  shortName: "Menon & Partners",
  tagline: {
    en: "Counsel you can call. Advocacy you can trust.",
    ml: "വിളിക്കാവുന്ന ഉപദേശം. വിശ്വസിക്കാവുന്ന വാദം.",
  },
  established: 1998,
  city: { en: "Ernakulam, Kerala", ml: "എറണാകുളം, കേരളം" },
  leadAdvocate: {
    name: "Adv. R. Menon",
    barCouncilNo: "KER/1234/2001",
    aibe: "AIBE-XV-0098",
    yearsOfPractice: 24,
  },
  contact: {
    phone: "+91 98470 12345",
    phoneHref: "+919847012345",
    whatsapp: "919847012345",
    email: "office@menonpartners.in",
    address: {
      en: "2nd Floor, Court Avenue, Banerji Road, Ernakulam, Kochi 682018",
      ml: "2-ാം നില, കോർട്ട് അവന്യൂ, ബാനർജി റോഡ്, എറണാകുളം, കൊച്ചി 682018",
    },
    hours: { en: "Mon–Sat · 9:30 AM – 6:30 PM", ml: "തിങ്കൾ–ശനി · 9:30 AM – 6:30 PM" },
  },
  courts: [
    "Ernakulam District Court",
    "Kerala High Court",
    "Supreme Court of India",
    "NCDRC, New Delhi",
  ],
  mapEmbed: "https://www.google.com/maps?q=Kerala+High+Court+Ernakulam&output=embed",
  consultation: {
    en: "Free 15-minute initial consultation",
    ml: "സൗജന്യ 15-മിനിറ്റ് പ്രാരംഭ ഉപദേശം",
  },
} as const;

export const practiceAreas: PracticeArea[] = [
  {
    slug: "property-disputes",
    icon: "🏛️",
    title: { en: "Property Disputes & Land Law", ml: "ഭൂമി തർക്കങ്ങൾ & ലാൻഡ് നിയമം" },
    short: {
      en: "Title verification, partition suits, encroachment and revenue matters across Kerala.",
      ml: "ടൈറ്റിൽ പരിശോധന, പങ്കിടൽ കേസുകൾ, അതിക്രമം, റവന്യൂ കാര്യങ്ങൾ.",
    },
    body: {
      en: "Three decades of property litigation experience covering title disputes, partition suits, specific performance, injunctions, revenue mutation, and land acquisition compensation. We handle matters from sub-registrar offices to the Kerala High Court.",
      ml: "ടൈറ്റിൽ തർക്കങ്ങൾ, പങ്കിടൽ, പ്രത്യേക നടപ്പാക്കൽ, ഇൻജംഗ്ഷൻ, റവന്യൂ മ്യൂട്ടേഷൻ, ഭൂമി ഏറ്റെടുക്കൽ നഷ്ടപരിഹാരം എന്നിവയിലുള്ള മൂന്നു പതിറ്റാണ്ടിന്റെ പരിചയം.",
    },
  },
  {
    slug: "matrimonial-divorce",
    icon: "⚖️",
    title: { en: "Matrimonial & Divorce", ml: "വൈവാഹിക & വിവാഹമോചനം" },
    short: {
      en: "Mutual and contested divorce, maintenance, custody and domestic-violence matters.",
      ml: "പരസ്പര സമ്മതവും തർക്കവുമുള്ള വിവാഹമോചനം, ജീവനാംശം, കസ്റ്റഡി, ഗാർഹിക പീഡനം.",
    },
    body: {
      en: "Discreet, compassionate representation in family court for divorce (mutual and contested), maintenance under Section 125 CrPC, child custody, restitution of conjugal rights, and DV Act proceedings.",
      ml: "കുടുംബ കോടതിയിൽ വിവാഹമോചനം, ജീവനാംശം, കുട്ടികളുടെ കസ്റ്റഡി, ഗാർഹിക പീഡന നിയമം എന്നിവയിൽ വിശ്വസനീയമായ പ്രാതിനിധ്യം.",
    },
  },
  {
    slug: "criminal-defence-bail",
    icon: "🛡️",
    title: { en: "Criminal Defence & Bail", ml: "ക്രിമിനൽ പ്രതിരോധം & ജാമ്യം" },
    short: {
      en: "Anticipatory and regular bail, trial defence and quashing petitions.",
      ml: "മുൻകൂർ ജാമ്യം, സാധാരണ ജാമ്യം, വിചാരണ പ്രതിരോധം, റദ്ദാക്കൽ ഹർജികൾ.",
    },
    body: {
      en: "Twenty-four-hour response for arrest and remand, anticipatory bail applications, trial representation in Sessions Court, and quashing petitions under Section 482 CrPC before the Kerala High Court.",
      ml: "അറസ്റ്റ്, റിമാന്റ്, മുൻകൂർ ജാമ്യം, സെഷൻസ് കോടതിയിൽ വിചാരണ പ്രതിനിധാനം, റദ്ദാക്കൽ ഹർജികൾ.",
    },
  },
  {
    slug: "consumer-ncdrc",
    icon: "🧾",
    title: { en: "Consumer Court / NCDRC", ml: "ഉപഭോക്തൃ കോടതി / NCDRC" },
    short: {
      en: "Builder, banking, insurance and e-commerce disputes at all three forums.",
      ml: "ബിൽഡർ, ബാങ്കിംഗ്, ഇൻഷുറൻസ്, ഇ-കൊമേഴ്സ് തർക്കങ്ങൾ.",
    },
    body: {
      en: "Complaints before District Commission, State Commission and NCDRC. Particular focus on real-estate delivery defaults, insurance repudiation and banking deficiency-of-service matters.",
      ml: "ജില്ലാ കമ്മീഷൻ, സംസ്ഥാന കമ്മീഷൻ, NCDRC എന്നിവിടങ്ങളിലെ പരാതികൾ.",
    },
  },
  {
    slug: "labour-service",
    icon: "🧑\u200d⚖️",
    title: { en: "Labour & Service Matters", ml: "തൊഴിൽ & സർവീസ് കാര്യങ്ങൾ" },
    short: {
      en: "Industrial disputes, departmental enquiries and KAT/CAT representations.",
      ml: "വ്യാവസായിക തർക്കങ്ങൾ, ഡിപ്പാർട്ട്മെൻറൽ അന്വേഷണങ്ങൾ, KAT/CAT.",
    },
    body: {
      en: "Representation before Labour Courts, Industrial Tribunals, Kerala Administrative Tribunal and Central Administrative Tribunal in promotions, terminations, pension and disciplinary matters.",
      ml: "ലേബർ കോടതി, വ്യാവസായിക ട്രൈബ്യൂണൽ, KAT, CAT എന്നിവിടങ്ങളിലെ പ്രാതിനിധ്യം.",
    },
  },
  {
    slug: "gst-tax",
    icon: "📊",
    title: { en: "GST & Tax Disputes", ml: "GST & നികുതി തർക്കങ്ങൾ" },
    short: {
      en: "Show-cause notices, adjudication, appeals and writs.",
      ml: "കാരണം കാണിക്കൽ നോട്ടീസുകൾ, അദ്ജുഡിക്കേഷൻ, അപ്പീലുകൾ, റിട്ടുകൾ.",
    },
    body: {
      en: "End-to-end representation in GST adjudication, appeals before Commissioner (Appeals) and GSTAT, and writ petitions before the Kerala High Court on tax matters.",
      ml: "GST അദ്ജുഡിക്കേഷൻ, അപ്പീലുകൾ, റിട്ട് ഹർജികൾ.",
    },
  },
  {
    slug: "motor-accident-claims",
    icon: "🚗",
    title: { en: "Motor Accident Claims", ml: "മോട്ടോർ അപകട ക്ലെയിമുകൾ" },
    short: {
      en: "MACT compensation claims with maximum statutory recovery.",
      ml: "MACT നഷ്ടപരിഹാര ക്ലെയിമുകൾ.",
    },
    body: {
      en: "Compensation claims before the Motor Accidents Claims Tribunal. We handle documentation, witness examination and insurance company appeals.",
      ml: "മോട്ടോർ അപകട നഷ്ടപരിഹാര ട്രൈബ്യൂണൽ ക്ലെയിമുകൾ.",
    },
  },
  {
    slug: "corporate-commercial",
    icon: "🏢",
    title: { en: "Corporate & Commercial", ml: "കോർപ്പറേറ്റ് & വാണിജ്യം" },
    short: {
      en: "Contracts, shareholder disputes, NCLT and commercial arbitration.",
      ml: "കരാറുകൾ, ഷെയർഹോൾഡർ തർക്കങ്ങൾ, NCLT, വാണിജ്യ മധ്യസ്ഥത.",
    },
    body: {
      en: "Advisory and litigation on commercial contracts, shareholder oppression, NCLT proceedings, and domestic commercial arbitration under the 1996 Act.",
      ml: "വാണിജ്യ കരാറുകൾ, ഷെയർഹോൾഡർ പീഡനം, NCLT, വാണിജ്യ മധ്യസ്ഥത.",
    },
  },
];

export const team: Advocate[] = [
  {
    name: "Adv. R. Menon",
    initials: "RM",
    role: { en: "Managing Partner", ml: "മാനേജിംഗ് പാർട്ണർ" },
    bio: {
      en: "Senior advocate with 24 years at the Kerala High Court bar. Specialises in property, constitutional and tax litigation.",
      ml: "കേരള ഹൈക്കോടതിയിൽ 24 വർഷത്തെ പരിചയം. ഭൂമി, ഭരണഘടന, നികുതി കേസുകളിൽ വൈദഗ്ധ്യം.",
    },
    years: 24,
  },
  {
    name: "Adv. Priya Krishnan",
    initials: "PK",
    role: { en: "Partner — Family & Civil", ml: "പാർട്ണർ — കുടുംബം & സിവിൽ" },
    bio: {
      en: "Leads the family law practice. Trained mediator with sixteen years' experience in matrimonial and custody matters.",
      ml: "കുടുംബ നിയമ വിഭാഗത്തിന് നേതൃത്വം. പരിശീലനം ലഭിച്ച മധ്യസ്ഥ.",
    },
    years: 16,
  },
  {
    name: "Adv. Anand Pillai",
    initials: "AP",
    role: { en: "Partner — Criminal Defence", ml: "പാർട്ണർ — ക്രിമിനൽ പ്രതിരോധം" },
    bio: {
      en: "Twelve years of trial-court experience across Ernakulam and Kottayam districts. Handles bail and white-collar defence.",
      ml: "എറണാകുളം, കോട്ടയം ജില്ലകളിലെ പന്ത്രണ്ടു വർഷത്തെ വിചാരണ പരിചയം.",
    },
    years: 12,
  },
  {
    name: "Adv. Meera Joseph",
    initials: "MJ",
    role: { en: "Associate — Corporate", ml: "അസോസിയേറ്റ് — കോർപ്പറേറ്റ്" },
    bio: {
      en: "Corporate advisory and GST litigation. Company secretary turned advocate, with strong commercial drafting practice.",
      ml: "കോർപ്പറേറ്റ് ഉപദേശം, GST വ്യവഹാരം.",
    },
    years: 7,
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: {
      en: "Adv. Menon's team got my partition suit decided after eleven years of delay. They were reachable on WhatsApp every single week.",
      ml: "11 വർഷത്തെ കാലതാമസത്തിന് ശേഷം എന്റെ പങ്കിടൽ കേസ് അവർ തീർപ്പാക്കി. ഓരോ ആഴ്ചയും വാട്സ്ആപ്പിൽ ലഭ്യമായിരുന്നു.",
    },
    author: "Sajeev T., Aluva",
    matter: { en: "Partition Suit", ml: "പങ്കിടൽ കേസ്" },
  },
  {
    quote: {
      en: "Fee structure was clear from the first meeting. No surprise bills. That alone is rare in this profession.",
      ml: "ആദ്യ കൂടിക്കാഴ്ച മുതൽ ഫീസ് വ്യക്തമായിരുന്നു. അപ്രതീക്ഷിത ബില്ലുകളൊന്നുമില്ല.",
    },
    author: "Rekha N., Kochi",
    matter: { en: "Consumer Complaint", ml: "ഉപഭോക്തൃ പരാതി" },
  },
  {
    quote: {
      en: "Got anticipatory bail within 72 hours. Adv. Pillai handled the entire matter with composure and clarity.",
      ml: "72 മണിക്കൂറിനുള്ളിൽ മുൻകൂർ ജാമ്യം ലഭിച്ചു. ശാന്തമായും വ്യക്തമായും കാര്യങ്ങൾ കൈകാര്യം ചെയ്തു.",
    },
    author: "Anonymous, Thrissur",
    matter: { en: "Anticipatory Bail", ml: "മുൻകൂർ ജാമ്യം" },
  },
];

export const insights: Article[] = [
  {
    slug: "title-search-kerala-2026",
    date: "2026-04-12",
    author: "Adv. R. Menon",
    title: {
      en: "Title search in Kerala: the seven documents every buyer must verify",
      ml: "കേരളത്തിലെ ടൈറ്റിൽ പരിശോധന: വാങ്ങുന്നയാൾ പരിശോധിക്കേണ്ട ഏഴ് രേഖകൾ",
    },
    excerpt: {
      en: "A practical checklist of patta, thandaper, possession certificate, encumbrance certificate and four more, with the order in which to ask for them.",
      ml: "പട്ടാ, തണ്ടപ്പേർ, പൊസെഷൻ സർട്ടിഫിക്കറ്റ്, എൻകംബ്രൻസ് സർട്ടിഫിക്കറ്റ് — ചോദിക്കേണ്ട ക്രമത്തിൽ.",
    },
    body: {
      en: "Buying property in Kerala is a paperwork exercise as much as a price negotiation. This note walks through the seven core documents — patta, thandaper, possession certificate, location sketch, encumbrance certificate (35 years), prior title deeds, and the building permit — and explains why the order in which you collect them matters more than most buyers realise.",
      ml: "കേരളത്തിൽ വസ്തു വാങ്ങൽ വിലപേശലിനൊപ്പം ഒരു രേഖാപരിശോധനയും കൂടിയാണ്. ഈ കുറിപ്പ് ഏഴ് പ്രധാന രേഖകളിലൂടെ കടന്നുപോകുന്നു.",
    },
  },
  {
    slug: "anticipatory-bail-kerala-hc",
    date: "2026-03-02",
    author: "Adv. Anand Pillai",
    title: {
      en: "Anticipatory bail at the Kerala High Court: what to prepare in 48 hours",
      ml: "കേരള ഹൈക്കോടതിയിലെ മുൻകൂർ ജാമ്യം: 48 മണിക്കൂറിൽ തയ്യാറാക്കേണ്ടത്",
    },
    excerpt: {
      en: "The documents, affidavits and procedural steps a first-time applicant should line up before approaching counsel.",
      ml: "ആദ്യമായി ജാമ്യം ആവശ്യപ്പെടുന്നയാൾ വക്കീലിനെ സമീപിക്കും മുൻപ് തയ്യാറാക്കേണ്ടത്.",
    },
    body: {
      en: "An anticipatory bail application succeeds or fails on documentation. The most common mistake is approaching counsel with only the FIR copy. This article lists the additional materials — identification, residence proof, employment record, character references and a draft affidavit — that materially improve outcomes.",
      ml: "മുൻകൂർ ജാമ്യ ഹർജി രേഖകളിലാണ് വിജയിക്കുകയും പരാജയപ്പെടുകയും ചെയ്യുന്നത്.",
    },
  },
  {
    slug: "gst-notice-do-not-ignore",
    date: "2026-02-14",
    author: "Adv. Meera Joseph",
    title: {
      en: "Got a GST show-cause notice? The first 30 days are everything",
      ml: "GST കാരണം കാണിക്കൽ നോട്ടീസ് ലഭിച്ചോ? ആദ്യ 30 ദിവസമാണ് നിർണ്ണായകം",
    },
    excerpt: {
      en: "Why ignoring an SCN under Section 73 or 74 is the most expensive mistake small businesses make.",
      ml: "Section 73, 74 പ്രകാരമുള്ള SCN അവഗണിക്കുന്നത് എന്തുകൊണ്ടാണ് ചെലവേറിയ തെറ്റ്.",
    },
    body: {
      en: "A show-cause notice is the department's first formal step. Treat it as a deadline document. Drafting a measured reply within thirty days, supported by reconciliation working papers, dramatically narrows the demand at the adjudication stage.",
      ml: "SCN ഒരു ഡെഡ്‌ലൈൻ രേഖയായി കണക്കാക്കണം.",
    },
  },
  {
    slug: "maintenance-125-crpc",
    date: "2026-01-09",
    author: "Adv. Priya Krishnan",
    title: {
      en: "Maintenance under Section 125 CrPC: what Kerala family courts actually award",
      ml: "Section 125 CrPC പ്രകാരം ജീവനാംശം: കേരള കുടുംബ കോടതികൾ വാസ്തവത്തിൽ നൽകുന്നത്",
    },
    excerpt: {
      en: "An honest look at quantum, timelines and enforcement, based on recent orders from the Ernakulam family court.",
      ml: "എറണാകുളം കുടുംബ കോടതിയിലെ സമീപകാല ഉത്തരവുകളെ അടിസ്ഥാനമാക്കിയുള്ള തുക, സമയക്രമം, നടപ്പാക്കൽ.",
    },
    body: {
      en: "Section 125 awards in Kerala have become more realistic over the past five years. This article reviews quantum trends, the role of income affidavits, and enforcement options when the respondent defaults.",
      ml: "കേരളത്തിലെ Section 125 തുകകൾ കഴിഞ്ഞ അഞ്ച് വർഷത്തിനുള്ളിൽ കൂടുതൽ യാഥാർത്ഥ്യബോധമുള്ളതായി മാറി.",
    },
  },
];

export const reviews = {
  rating: 4.9,
  count: 187,
  items: [
    {
      author: "Jithin S.",
      stars: 5,
      text: "Got my property partition resolved after years of delay. Highly recommend.",
    },
    {
      author: "Aleena M.",
      stars: 5,
      text: "Clear communication and fair fees. Adv. Krishnan handled my case with care.",
    },
    {
      author: "Rahul V.",
      stars: 5,
      text: "Available on WhatsApp at every step. Made a stressful matter manageable.",
    },
  ],
} as const;
