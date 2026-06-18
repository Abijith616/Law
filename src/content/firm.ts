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
  name: "JA & Associates Chartered Accountants",
  shortName: "JA & Associates",
  tagline: {
    en: "Precision in Compliance. Confidence in Every Decision.",
    ml: "കംപ്ലയൻസിലെ കൃത്യത. ഓരോ തീരുമാനത്തിലും ആത്മവിശ്വാസം.",
  },
  established: 2012,
  city: { en: "Angamaly, Ernakulam, Kerala", ml: "അങ്കമാലി, എറണാകുളം, കേരളം" },
  leadAdvocate: {
    name: "Joseph Antony, FCA",
    barCouncilNo: "FRN 015234S", // Reusing this key to prevent breaking references in code
    aibe: "M. No. 214532", // Reusing this key to prevent breaking references in code
    yearsOfPractice: 24,
  },
  contact: {
    phone: "+91 96526 33511",
    phoneHref: "+919652633511",
    whatsapp: "919652633511",
    email: "mail.jaandassociates@gmail.com",
    address: {
      en: "4/496K, First Floor, Menachery Plaza, Near KSRTC Bus Stand, Angamaly, Ernakulam - 683572",
      ml: "4/496കെ, ഒന്നാം നില, മേനാച്ചേരി പ്ലാസ, കെ.എസ്.ആർ.ടി.സി ബസ് സ്റ്റാൻഡിന് സമീപം, അങ്കമാലി, എറണാകുളം - 683572",
    },
    hours: { en: "Mon–Sat · 9:30 AM – 6:30 PM", ml: "തിങ്കൾ–ശനി · 9:30 AM – 6:30 PM" },
  },
  courts: [
    "Income Tax Appellate Tribunal (ITAT)",
    "GST Appellate Tribunal (GSTAT)",
    "National Company Law Tribunal (NCLT)",
    "Ministry of Corporate Affairs (MCA)",
  ],
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.2343881084224!2d76.3860002!3d10.1983056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08064cfb036cb5%3A0xe54d92ee242a9693!2sMenachery%20Plaza!5e0!3m2!1sen!2sin!4v1718610000000!5m2!1sen!2sin",
  consultation: {
    en: "Free 15-minute initial consultation",
    ml: "സൗജന്യ 15-മിനിറ്റ് പ്രാരംഭ ഉപദേശം",
  },
} as const;

export const practiceAreas: PracticeArea[] = [
  {
    slug: "taxation-gst",
    icon: "📊",
    title: { en: "Taxation & GST Compliance", ml: "നികുതി & GST കംപ്ലയൻസ്" },
    short: {
      en: "Direct and indirect tax filings, GST compliance, and representation before tax authorities.",
      ml: "നികുതി ഫയലിംഗുകൾ, GST കംപ്ലയൻസ്, നികുതി അതോറിറ്റി പ്രാതിനിധ്യം.",
    },
    body: {
      en: "Comprehensive tax planning and compliance services. We handle corporate and individual tax filings, GST returns, audits, show-cause notices, and representation before the Income Tax and GST Appellate Tribunals.",
      ml: "നികുതി ആസൂത്രണവും ഫയലിംഗും. ആദായനികുതി, GST റിട്ടേണുകൾ, ഓഡിറ്റുകൾ, അപ്പീലുകൾ എന്നിവ കൈകാര്യം ചെയ്യുന്നു.",
    },
  },
  {
    slug: "statutory-audit",
    icon: "📋",
    title: { en: "Statutory & Internal Audit", ml: "സ്റ്റാറ്റ്യൂട്ടറി & ഇന്റേണൽ ഓഡിറ്റ്" },
    short: {
      en: "Independently verifying financial records to ensure compliance with Indian accounting standards.",
      ml: "ഇന്ത്യൻ അക്കൗണ്ടിംഗ് മാനണ്ഡങ്ങൾ അനുസരിച്ച് സാമ്പത്തിക രേഖകൾ ഓഡിറ്റ് ചെയ്യുന്നു.",
    },
    body: {
      en: "Statutory audits under the Companies Act, tax audits under the Income Tax Act, and internal audits to evaluate operational efficiency and internal controls. We ensure accurate financial reporting.",
      ml: "കമ്പനീസ് ആക്ട് പ്രകാരമുള്ള ഓഡിറ്റുകൾ, ടാക്സ് ഓഡിറ്റുകൾ, ആന്തരിക നിയന്ത്രണ വിലയിരുത്തലുകൾ.",
    },
  },
  {
    slug: "company-incorporation",
    icon: "🏢",
    title: { en: "Business Setup & Incorporation", ml: "ബിസിനസ്സ് തുടക്കവും ഇൻകോർപ്പറേഷനും" },
    short: {
      en: "Incorporation of Private Limited companies, LLPs, partnerships, and MSME registrations.",
      ml: "പ്രൈവറ്റ് ലിമിറ്റഡ് കമ്പനികൾ, LLP-കൾ, പാർട്ണർഷിപ്പുകൾ, MSME രജിസ്ട്രേഷൻ.",
    },
    body: {
      en: "End-to-end support for starting a business in India. We assist with Pvt Ltd company incorporation, LLP formation, partnership deeds, startup registration, and obtaining all necessary statutory licenses.",
      ml: "ഇന്ത്യയിൽ പുതിയ ബിസിനസ്സ് ആരംഭിക്കുന്നതിനുള്ള സഹായം. രജിസ്ട്രേഷൻ മുതൽ ലൈസൻസുകൾ വരെ.",
    },
  },
  {
    slug: "bookkeeping-accounting",
    icon: "💼",
    title: { en: "Bookkeeping & Accounting", ml: "ബുക്ക് കീപ്പിംഗ് & അക്കൗണ്ടിംഗ്" },
    short: {
      en: "Outsourced bookkeeping, financial statement preparation, and payroll management.",
      ml: "ബാഹ്യ ബുക്ക് കീപ്പിംഗ്, ധനകാര്യ പ്രസ്താവനകൾ, ശമ്പള മാനേജ്മെന്റ്.",
    },
    body: {
      en: "Professional accounting services for small and medium enterprises. We maintain general ledgers, prepare balance sheets and profit & loss statements, handle payroll compliance, and generate MIS reports.",
      ml: "ചെറുകിട, ഇടത്തരം സംരംഭങ്ങൾക്കായുള്ള പ്രൊഫഷണൽ അക്കൗണ്ടിംഗ് സേവനങ്ങൾ.",
    },
  },
  {
    slug: "corporate-advisory",
    icon: "🤝",
    title: { en: "Corporate Law & FEMA Advisory", ml: "കോർപ്പറേറ്റ് നിയമവും ഫെമ ഉപദേശവും" },
    short: {
      en: "ROC compliance, annual filing, board meeting minutes, and foreign investment advisory.",
      ml: "ROC കംപ്ലയൻസ്, വാർഷിക ഫയലിംഗ്, ബോർഡ് മീറ്റിംഗ് മിനിറ്റ്സ്, വിദേശ നിക്ഷേപ ഉപദേശം.",
    },
    body: {
      en: "Assisting companies in meeting regulatory requirements under the Companies Act and FEMA. We manage annual filings, share transfers, director changes, and advise on foreign direct investment compliance.",
      ml: "കമ്പനീസ് ആക്ട്, ഫെമ വ്യവസ്ഥകൾ പ്രകാരമുള്ള വാർഷിക ഫയലിംഗും അനുബന്ധ സേവനങ്ങളും.",
    },
  },
  {
    slug: "project-reports",
    icon: "📈",
    title: {
      en: "Project Reports & Loan Syndication",
      ml: "പ്രൊജക്റ്റ് റിപ്പോർട്ടുകൾ & ലോൺ ഫെസിലിറ്റേഷൻ",
    },
    short: {
      en: "Detailed project report drafting, CMA data preparation, and bank loan coordination.",
      ml: "പ്രൊജക്റ്റ് റിപ്പോർട്ടുകൾ, CMA ഡാറ്റ തയ്യാറാക്കൽ, ബാങ്ക് ലോൺ ഏകോപനം.",
    },
    body: {
      en: "Drafting Bankable Project Reports and Credit Monitoring Arrangement (CMA) data for working capital loans, term loans, and project finance. We assist in presentation and coordination with commercial banks.",
      ml: "വർക്കിംഗ് ക്യാപിറ്റൽ ലോണുകൾ, പ്രൊജക്റ്റ് ഫിനാൻസ് എന്നിവയ്ക്കായുള്ള പ്രൊജക്റ്റ് റിപ്പോർട്ടുകൾ.",
    },
  },
  {
    slug: "internal-audit",
    icon: "🛡️",
    title: { en: "Internal Audit & Risk Advisory", ml: "ഇന്റേണൽ ഓഡിറ്റ് & റിസ്ക് അഡ്വൈസറി" },
    short: {
      en: "Evaluating internal controls, operational audit, and fraud risk assessments.",
      ml: "ആഭ്യന്തര നിയന്ത്രണങ്ങൾ വിലയിരുത്തൽ, പ്രവർത്തന ഓഡിറ്റ്, സാമ്പത്തിക റിസ്ക് വിശകലനം.",
    },
    body: {
      en: "Evaluating the effectiveness of internal controls, compliance with policies, operational efficiency, and risk mitigation strategies. We design custom internal audit frameworks.",
      ml: "സ്ഥാപനങ്ങളുടെ ആഭ്യന്തര നിയന്ത്രണ സംവിധാനങ്ങളുടെ ശക്തിയും കാര്യക്ഷമതയും വിലയിരുത്തൽ.",
    },
  },
  {
    slug: "nclt-arbitration",
    icon: "⚖️",
    title: { en: "Insolvency & NCLT Representation", ml: "ഇൻസോൾവൻസി & NCLT പ്രാതിനിധ്യം" },
    short: {
      en: "Assisting in insolvency filings, corporate debt restructuring, and NCLT hearings.",
      ml: "ഇൻസോൾവൻസി ഫയലിംഗുകൾ, ഡെറ്റ് റീസ്ട്രക്ചറിംഗ്, NCLT കേസ് പ്രാതിനിധ്യം.",
    },
    body: {
      en: "Professional services for debt restructuring, bankruptcy proceedings, and representing corporate debtors or creditors in insolvency cases before the National Company Law Tribunal.",
      ml: "സാമ്പത്തിക പുനഃക്രമീകരണം, കമ്പനി ലിക്വിഡേഷൻ, NCLT കേസുകളിലെ പ്രതിനിധാനം.",
    },
  },
  {
    slug: "nri-taxation",
    icon: "🌏",
    title: { en: "NRI Taxation & FEMA Repatriation", ml: "NRI നികുതിയും FEMA റിപ്പേട്രിയേഷനും" },
    short: {
      en: "Income tax filing for NRIs, DTAA relief, repatriation of funds, and FEMA compliance for overseas Indians.",
      ml: "NRI-കൾക്കുള്ള ആദായനികുതി ഫയലിംഗ്, DTAA ആനുകൂല്യം, ഫണ്ട് റിപ്പേട്രിയേഷൻ, FEMA കംപ്ലയൻസ്.",
    },
    body: {
      en: "Comprehensive tax and compliance services tailored for Non-Resident Indians. We handle NRI income tax returns, tax residency certificates, Double Taxation Avoidance Agreement (DTAA) relief claims, repatriation of rental income and sale proceeds, NRO/NRE account advisory, and FEMA compliance filings. Kerala's large diaspora trusts us to manage their Indian financial affairs smoothly.",
      ml: "NRI-കൾക്കായി ആദായനികുതി, FEMA, DTAA ക്ലെയിമുകൾ, NRO/NRE അക്കൗണ്ട് ഉപദേശം, ഫണ്ട് ട്രാൻസ്ഫർ സേവനങ്ങൾ.",
    },
  },
  {
    slug: "startup-advisory",
    icon: "🚀",
    title: { en: "Startup & MSME Advisory", ml: "സ്റ്റാർട്ടപ്പ് & MSME ഉപദേശം" },
    short: {
      en: "End-to-end advisory for new entrepreneurs — DPIIT startup recognition, Udyam registration, seed funding readiness, and business plan preparation.",
      ml: "പുതിയ സംരംഭകർക്കായി DPIIT അംഗീകാരം, Udyam രജിസ്ട്രേഷൻ, ബിസിനസ്സ് പ്ലാൻ തയ്യാറാക്കൽ.",
    },
    body: {
      en: "We guide first-time founders from idea to compliance. Services include DPIIT startup recognition, Udyam (MSME) registration, business plan and financial projection preparation, seed-round investor-ready documentation, government scheme advisory (MUDRA, CGTMSE), and ongoing compliance management so founders can focus on building.",
      ml: "ആദ്യമായി ബിസിനസ്സ് ആരംഭിക്കുന്നവർക്കായി DPIIT, Udyam രജിസ്ട്രേഷൻ, ബിസിനസ്സ് പ്ലാൻ, ഗവൺമെന്റ് സ്കീം ഉപദേശം.",
    },
  },
  {
    slug: "valuation-advisory",
    icon: "🔍",
    title: { en: "Valuation & Financial Advisory", ml: "വാല്യൂവേഷൻ & ഫിനാൻഷ്യൽ അഡ്വൈസറി" },
    short: {
      en: "Professional business valuations, asset valuations, and financial due diligence for transactions.",
      ml: "ബിസിനസ്സ് മൂല്യനിർണ്ണയം, അസറ്റ് വാല്യൂവേഷൻ, സാമ്പത്തിക പരിശോധന സേവനങ്ങൾ.",
    },
    body: {
      en: "We provide independent valuation services under the Companies Act, Income Tax Act, and Insolvency and Bankruptcy Code (IBC). Our reports support mergers, acquisitions, joint ventures, and regulatory compliances.",
      ml: "കമ്പനീസ് ആക്ട്, ആദായനികുതി നിയമം എന്നിവയ്ക്ക് കീഴിലുള്ള ബിസിനസ്സ് മൂല്യനിർണ്ണയവും പരിശോധനയും.",
    },
  },
  {
    slug: "customs-ftp",
    icon: "🌐",
    title: { en: "Customs & Foreign Trade", ml: "കസ്റ്റംസ് & വിദേശ വ്യാപാരം" },
    short: {
      en: "Import-export registrations, customs compliance, and foreign trade policy advisory.",
      ml: "ഇറക്കുമതി-കയറ്റുമതി രജിസ്ട്രേഷനുകൾ, കസ്റ്റംസ് കംപ്ലയൻസ്, വ്യാപാര ഉപദേശം.",
    },
    body: {
      en: "Advising on import-export regulations, customs duties, and export incentives under the Foreign Trade Policy. We assist in obtaining Import Export Codes (IEC), setting up SEZ/STPI units, and representation before the DGFT.",
      ml: "വിദേശ വ്യാപാര നയം, ഇറക്കുമതി-കയറ്റുമതി കോഡുകൾ, SEZ/STPI യൂണിറ്റ് സ്ഥാപിക്കൽ എന്നിവയ്ക്കുള്ള സഹായം.",
    },
  },
];

export const team: Advocate[] = [
  {
    name: "Joseph Antony, FCA",
    initials: "JA",
    role: { en: "Founder & Managing Partner", ml: "സ്ഥാപകനും മാനേജിംഗ് പാർട്ണറും" },
    bio: {
      en: "Senior Chartered Accountant with 24 years of experience. Specializes in statutory audit, corporate taxation, and financial advisory.",
      ml: "24 വർഷത്തെ പരിചയമുള്ള സീനിയർ ചാർട്ടേഡ് അക്കൗണ്ടന്റ്. ഓഡിറ്റിംഗ്, കോർപ്പറേറ്റ് നികുതി എന്നിവയിൽ വൈദഗ്ധ്യം.",
    },
    years: 24,
  },
  {
    name: "Priya Krishnan, ACA",
    initials: "PK",
    role: { en: "Partner — GST & Indirect Tax", ml: "പാർട്ണർ — GST & പരോക്ഷ നികുതി" },
    bio: {
      en: "Trained GST consultant with sixteen years of experience in indirect tax compliance and representation.",
      ml: "GST കൺസൾട്ടേഷനിൽ 16 വർഷത്തെ പരിചയമുള്ള പാർട്ണർ.",
    },
    years: 16,
  },
  {
    name: "Anand Pillai, ACA",
    initials: "AP",
    role: { en: "Partner — Corporate Law & ROC", ml: "പാർട്ണർ — കോർപ്പറേറ്റ് നിയമം & ROC" },
    bio: {
      en: "Twelve years of experience in corporate law, FEMA regulations, and business startup advisory.",
      ml: "കോർപ്പറേറ്റ് നിയമം, ഫെമ ചട്ടങ്ങൾ, പുതിയ ബിസിനസ്സ് ആരംഭം എന്നിവയിൽ 12 വർഷത്തെ പരിചയം.",
    },
    years: 12,
  },
  {
    name: "Meera Joseph, ACA",
    initials: "MJ",
    role: { en: "Partner — Internal Audit", ml: "പാർട്ണർ — ഇന്റേണൽ ഓഡിറ്റ്" },
    bio: {
      en: "Specializes in internal audits, management audits, and designing internal financial control frameworks.",
      ml: "ഇന്റേണൽ ഓഡിറ്റ്, സാമ്പത്തിക നിയന്ത്രണങ്ങൾ എന്നിവയിൽ വൈദഗ്ധ്യം.",
    },
    years: 7,
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: {
      en: "JA & Associates streamlined our entire GST filing process. We can reach them on WhatsApp anytime.",
      ml: "ഞങ്ങളുടെ GST ഫയലിംഗ് പ്രക്രിയ ലളിതമാക്കി തന്നു. എപ്പോഴും വാട്സ്ആപ്പിൽ ബന്ധപ്പെടാം.",
    },
    author: "Sajeev T., Aluva",
    matter: { en: "GST Compliance", ml: "GST കംപ്ലയൻസ്" },
  },
  {
    quote: {
      en: "Their audit fees were clear from day one. Very professional and helpful team.",
      ml: "ഫീസ് തുടക്കം മുതലേ വ്യക്തമായിരുന്നു. വളരെ പ്രൊഫഷണലായ സമീപനം.",
    },
    author: "Rekha N., Kochi",
    matter: { en: "Statutory Audit", ml: "ഓഡിറ്റിംഗ്" },
  },
  {
    quote: {
      en: "Helped incorporate our private limited company within 5 days. Truly fast and reliable.",
      ml: "5 ദിവസത്തിനുള്ളിൽ ഞങ്ങളുടെ കമ്പനി രജിസ്റ്റർ ചെയ്തു തന്നു. വളരെ വേഗതയുള്ള സേവനം.",
    },
    author: "Anonymous, Angamaly",
    matter: { en: "Company Registration", ml: "കമ്പനി രജിസ്ട്രേഷൻ" },
  },
];

export const insights: Article[] = [
  {
    slug: "gst-notice-reply-2026",
    date: "2026-04-12",
    author: "Joseph Antony, FCA",
    title: {
      en: "Got a GST discrepancy notice? The first 30 days are everything",
      ml: "GST അപാകത നോട്ടീസ് ലഭിച്ചോ? ആദ്യ 30 ദിവസമാണ് നിർണ്ണായകം",
    },
    excerpt: {
      en: "A practical checklist to respond to GST notices under Section 73 or 74 to avoid heavy penalties.",
      ml: "വലിയ പിഴകൾ ഒഴിവാക്കാൻ സെക്ഷൻ 73, 74 പ്രകാരമുള്ള GST നോട്ടീസുകൾക്ക് മറുപടി നൽകേണ്ട വിധം.",
    },
    body: {
      en: "Receiving a GST show-cause notice can be stressful. We outline the key steps to analyze discrepancies, reconcile GSTR-2B with GSTR-3B, and draft a clean, legally-backed reply within the 30-day period.",
      ml: "GST നോട്ടീസുകൾക്ക് കൃത്യമായി മറുപടി നൽകേണ്ട രീതി വിശദീകരിക്കുന്നു.",
    },
  },
  {
    slug: "company-incorporation-checklist",
    date: "2026-03-02",
    author: "Anand Pillai, ACA",
    title: {
      en: "Incorporating a Pvt Ltd Company in Kerala: a step-by-step guide",
      ml: "കേരളത്തിൽ പ്രൈവറ്റ് ലിമിറ്റഡ് കമ്പനി രജിസ്റ്റർ ചെയ്യുന്നതിനുള്ള ഗൈഡ്",
    },
    excerpt: {
      en: "From obtaining DSC and DIN to name approval and spice+ form filing: what you need to prepare.",
      ml: "DSC, DIN മുതൽ പേര് അംഗീകാരം വരെ: നിങ്ങൾ തയ്യാറാക്കേണ്ട കാര്യങ്ങൾ.",
    },
    body: {
      en: "A comprehensive guide on starting a business in Kerala, detailing company name registration, board resolution templates, shareholder documentation, and getting the PAN/TAN within a week.",
      ml: "കേരളത്തിൽ കമ്പനി രജിസ്റ്റർ ചെയ്യുമ്പോൾ അറിഞ്ഞിരിക്കേണ്ട കാര്യങ്ങൾ.",
    },
  },
  {
    slug: "tax-planning-small-business",
    date: "2026-02-14",
    author: "Joseph Antony, FCA",
    title: {
      en: "Income Tax planning for small businesses and professionals in India",
      ml: "ചെറുകിട വ്യവസായങ്ങൾക്കും പ്രൊഫഷണലുകൾക്കുമുള്ള ആദായനികുതി ആസൂത്രണം",
    },
    excerpt: {
      en: "How to make use of Presumptive Taxation Schemes under Section 44AD and 44ADA to reduce tax liability.",
      ml: "സെക്ഷൻ 44AD, 44ADA പ്രകാരമുള്ള പ്രിസംപ്റ്റീവ് ടാക്സേഷൻ സ്കീമുകൾ ഉപയോഗിച്ച് നികുതി കുറയ്ക്കുന്ന വിധം.",
    },
    body: {
      en: "Presumptive taxation allows professionals and retailers to declare a flat net income percentage, saving significant audit costs and reducing tax liabilities. Learn how to opt in safely.",
      ml: "ആദായനികുതി ലളിതമായി ഫയൽ ചെയ്യാനുള്ള സ്കീമുകളെക്കുറിച്ചുള്ള ലേഖനം.",
    },
  },
  {
    slug: "msme-benefits-india",
    date: "2026-01-09",
    author: "Meera Joseph, ACA",
    title: {
      en: "Four major benefits of MSME registration for Kerala startups",
      ml: "കേരളത്തിലെ സ്റ്റാർട്ടപ്പുകൾക്ക് MSME രജിസ്ട്രേഷൻ കൊണ്ടുള്ള 4 ഗുണങ്ങൾ",
    },
    excerpt: {
      en: "Collateral-free loans, interest rate concessions, and priority payments under the MSMED Act.",
      ml: "പലിശ ഇളവുകൾ, സെക്യൂരിറ്റി ഇല്ലാത്ത ലോണുകൾ, തടസ്സമില്ലാത്ത പേയ്‌മെന്റുകൾ.",
    },
    body: {
      en: "Udyam registration offers immense benefits to micro, small, and medium enterprises. We explain how it protects businesses from delayed payments and unlocks interest rate concessions.",
      ml: "ചെറുകിട വ്യവസായങ്ങൾക്ക് ലഭിക്കുന്ന അനുകൂല്യങ്ങളെക്കുറിച്ചുള്ള ലേഖനം.",
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
      text: "Got my tax returns and auditing completed on time. Highly recommended.",
    },
    {
      author: "Aleena M.",
      stars: 5,
      text: "Clear communication and fair audit fees. Adv. Krishnan handled my GST query with care.",
    },
    {
      author: "Rahul V.",
      stars: 5,
      text: "Available on WhatsApp at every step. Made company incorporation look so simple.",
    },
  ],
} as const;
