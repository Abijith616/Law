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
  name: "J A & Associates Chartered Accountants",
  shortName: "J A & Associates",
  tagline: {
    en: "Built on experience. Driven by innovation. Committed to your success.",
    ml: "അനുഭവസമ്പത്തിൽ പടുത്തുയർത്തിയത്. നവീകരണത്തിലൂടെ മുന്നോട്ട്. നിങ്ങളുടെ വിജയത്തിനായി പ്രതിജ്ഞാബദ്ധം.",
  },
  established: 2024,
  city: { en: "Angamaly, Ernakulam, Kerala", ml: "അങ്കമാലി, എറണാകുളം, കേരളം" },
  leadAdvocate: {
    name: "Jibin Jose, FCA",
    barCouncilNo: "FRN 028551S", // Reusing this key to prevent breaking references in code
    aibe: "M. No. [M. No.]", // Reusing this key to prevent breaking references in code
    yearsOfPractice: 12,
  },
  contact: {
    phone: "+91 9746 177 541",
    phoneHref: "+919746177541",
    whatsapp: "919746177541",
    email: "mail.jaandassociates@gmail.com",
    address: {
      en: "4/496K, First Floor, Menachery Plaza, Near KSRTC Bus Stand, Angamaly, Ernakulam - 683572",
      ml: "4/496കെ, ഒന്നാം നില, മേനാച്ചേരി പ്ലാസ, കെ.എസ്.ആർ.ടി.സി ബസ് സ്റ്റാൻഡിന് സമീപം, അങ്കമാലി, എറണാകുളം - 683572",
    },
    hours: { en: "Mon–Sat · 9:30 AM – 6:30 PM", ml: "തിങ്കൾ–ശനി · 9:30 AM – 6:30 PM" },
  },
  courts: [
    "Audit & Assurance",
    "GST, TDS & Regulatory Compliance",
    "Business Setup & Company Incorporation",
    "Project Finance & Loan Advisory",
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
    slug: "audit-assurance",
    icon: "audit-assurance",
    title: { en: "Audit & Assurance", ml: "ഓഡിറ്റ് & അഷ്വറൻസ്" },
    short: {
      en: "Statutory audits, tax audits, internal audits, and assurance services ensuring compliance with regulatory frameworks.",
      ml: "നിയമാനുസൃതമായ ഓഡിറ്റുകൾ, നികുതി ഓഡിറ്റുകൾ, ഇന്റേണൽ ഓഡിറ്റ് സേവനങ്ങൾ.",
    },
    body: {
      en: "Statutory audits under the Companies Act, tax audits under the Income Tax Act, and other specialized assurance services. We verify financial statements to ensure high accuracy and absolute compliance with accounting standards.",
      ml: "കമ്പനീസ് ആക്ട് പ്രകാരമുള്ള ഓഡിറ്റുകൾ, ടാക്സ് ഓഡിറ്റുകൾ, സാമ്പത്തിക കൃത്യത ഉറപ്പാക്കൽ.",
    },
  },
  {
    slug: "tax-litigation",
    icon: "tax-litigation",
    title: { en: "Tax Litigation & Representation", ml: "നികുതി വ്യവഹാരവും പ്രാതിനിധ്യവും" },
    short: {
      en: "Strategic advisory and representation before tax authorities and appellate tribunals for direct and indirect taxes.",
      ml: "നികുതി അതോറിറ്റികൾക്കും അപ്പീലുകൾക്കും മുന്നിലുള്ള കേസ് പ്രാതിനിധ്യം.",
    },
    body: {
      en: "Representing clients before the Income Tax Department, GST authorities, and Appellate Tribunals. We assist in resolving complex tax disputes, replying to show-cause notices, and representing assessments.",
      ml: "ആദായനികുതി വകുപ്പ്, GST അതോറിറ്റികൾ എന്നിവയ്ക്ക് മുന്നിൽ കേസുകൾ ഫലപ്രദമായി വാദിക്കുന്നു.",
    },
  },
  {
    slug: "gst-compliance",
    icon: "gst-compliance",
    title: { en: "GST, TDS & Regulatory Compliance Services", ml: "GST, TDS & അനുബന്ധ കംപ്ലയൻസുകൾ" },
    short: {
      en: "End-to-end GST filing, TDS compliance, and regulatory returns management for businesses.",
      ml: "ജിഎസ്ടി ഫയലിംഗ്, ടിഡിഎസ് റിട്ടേണുകൾ എന്നിവ ലളിതമായി കൈകാര്യം ചെയ്യുന്നു.",
    },
    body: {
      en: "Comprehensive GST returns, annual filings, TDS reconciliations, and regulatory compliance. We help businesses optimize tax credit structures and avoid penalties through timely compliance.",
      ml: "പ്രതിമാസ, വാർഷിക GST ഫയലിംഗുകൾ, TDS റീകൺസിലിയേഷൻ എന്നിവ കൃത്യസമയത്ത് പൂർത്തിയാക്കുന്നു.",
    },
  },
  {
    slug: "business-setup",
    icon: "business-setup",
    title: { en: "Business Setup & Company Incorporation", ml: "ബിസിനസ്സ് തുടക്കവും ഇൻകോർപ്പറേഷനും" },
    short: {
      en: "Incorporating Private Limited companies, LLPs, partnerships, and obtaining all necessary business licenses.",
      ml: "കമ്പനികൾ, LLP-കൾ എന്നിവയുടെ രജിസ്ട്രേഷനും ലൈസൻസ് സേവനങ്ങളും.",
    },
    body: {
      en: "End-to-end setup solutions including Private Limited company incorporation, LLP formation, partnership firm registration, and obtaining statutory registrations like PAN, TAN, GSTIN, and IE Code.",
      ml: "കമ്പനി ഇൻകോർപ്പറേഷൻ, എൽഎൽപി ഫോർമേഷൻ, പാൻ, ടാൻ രജിസ്ട്രേഷൻ സേവനങ്ങൾ.",
    },
  },
  {
    slug: "mca-compliance",
    icon: "mca-compliance",
    title: { en: "MCA Compliance & Secretarial Filings", ml: "MCA കംപ്ലയൻസ് & സെക്രെട്ടേറിയൽ ഫയലിംഗുകൾ" },
    short: {
      en: "ROC filings, board meeting compliance, share transfers, and maintenance of statutory registers.",
      ml: "ROC ഫയലിംഗുകൾ, ബോർഡ് മീറ്റിംഗുകൾ, കമ്പനി സെക്രട്ടറി അനുബന്ധ സേവനങ്ങൾ.",
    },
    body: {
      en: "Handling all filings with the Ministry of Corporate Affairs (MCA) and Registrar of Companies (ROC). We manage annual returns, director appointments, share transfers, and corporate secretarial records.",
      ml: "മിനിസ്ട്രി ഓഫ് കോർപ്പറേറ്റ് അഫയേഴ്സ് (MCA), ROC ഫയലിംഗുകൾ എന്നിവ നിയമാനുസൃതമായി ചെയ്യുന്നു.",
    },
  },
  {
    slug: "bookkeeping-accounting",
    icon: "bookkeeping-accounting",
    title: { en: "Bookkeeping & Accounting", ml: "ബുക്ക് കീപ്പിംഗ് & അക്കൗണ്ടിംഗ്" },
    short: {
      en: "Outsourced bookkeeping, financial statement preparation, and payroll management.",
      ml: "ബുക്ക് കീപ്പിംഗ്, ധനകാര്യ പ്രസ്താവനകൾ, ശമ്പള മാനേജ്മെന്റ്.",
    },
    body: {
      en: "Professional bookkeeping services for corporations, partnerships, and sole proprietors. We maintain ledgers, prepare financial statements, process payroll, and generate custom MIS reports.",
      ml: "ചെറുകിട, ഇടത്തരം സംരംഭങ്ങൾക്കായുള്ള പ്രൊഫഷണൽ അക്കൗണ്ടിംഗ് സേവനങ്ങൾ.",
    },
  },
  {
    slug: "project-finance",
    icon: "project-finance",
    title: { en: "Project Finance & Loan Advisory", ml: "പ്രൊജക്റ്റ് ഫിനാൻസ് & ലോൺ ഉപദേശം" },
    short: {
      en: "Project report preparation, CMA data formulation, and coordination with commercial banks.",
      ml: "പ്രൊജക്റ്റ് റിപ്പോർട്ടുകൾ, CMA ഡാറ്റ തയ്യാറാക്കൽ, ബാങ്ക് ലോൺ ഏകോപനം.",
    },
    body: {
      en: "Drafting bankable Project Reports and Credit Monitoring Arrangement (CMA) data. We assist businesses in structure design, working capital facility negotiation, and term loan syndication.",
      ml: "ബാങ്കുകൾക്ക് ആവശ്യമായ പ്രൊജക്റ്റ് റിപ്പോർട്ടുകൾ, വർക്കിംഗ് ക്യാപിറ്റൽ ലോൺ അനുബന്ധ സഹായങ്ങൾ.",
    },
  },
  {
    slug: "startup-advisory",
    icon: "startup-advisory",
    title: { en: "Startup & MSME Advisory", ml: "സ്റ്റാർട്ടപ്പ് & MSME ഉപദേശം" },
    short: {
      en: "DPIIT startup recognition, Udyam registration, and business plan modeling.",
      ml: "DPIIT സ്റ്റാർട്ടപ്പ് അംഗീകാരം, Udyam രജിസ്ട്രേഷൻ, ബിസിനസ്സ് പ്ലാൻ തയ്യാറാക്കൽ.",
    },
    body: {
      en: "Helping founders navigate startup registrations, DPIIT recognition, Udyam MSME certificate, government subsidy schemes, and seed-funding readiness with investor-grade projections.",
      ml: "ആദ്യമായി ബിസിനസ്സ് ആരംഭിക്കുന്നവർക്കായി DPIIT, Udyam രജിസ്ട്രേഷൻ, ബിസിനസ്സ് പ്ലാൻ, ഗവൺമെന്റ് സ്കീം ഉപദേശം.",
    },
  },
  {
    slug: "virtual-cfo",
    icon: "virtual-cfo",
    title: { en: "Virtual CFO & Financial Advisory", ml: "വിർച്വൽ സി.എഫ്.ഒ & സാമ്പത്തിക ഉപദേശം" },
    short: {
      en: "Strategic financial management, cash flow analysis, and corporate growth advisory.",
      ml: "സാമ്പത്തിക ആസൂത്രണം, ക്യാഷ് ഫ്ലോ മാനേജ്മെന്റ്, കോർപ്പറേറ്റ് ഗ്രോത്ത് അഡ്വൈസറി.",
    },
    body: {
      en: "Outsourced CFO services for growing businesses. We provide high-level financial strategy, cash flow planning, cost optimization analysis, budgeting, and performance management guidance.",
      ml: "കമ്പനികളുടെ സാമ്പത്തിക ആസൂത്രണം, ക്യാഷ് ഫ്ലോ മാനേജ്മെന്റ് എന്നിവയ്ക്ക് വിദഗ്ദ്ധ നേതൃത്വം നൽകുന്നു.",
    },
  },
  {
    slug: "due-diligence",
    icon: "due-diligence",
    title: { en: "Due Diligence & Business Valuation", ml: "ഡ്യൂ ഡിലിജൻസ് & ബിസിനസ്സ് മൂല്യനിർണ്ണയം" },
    short: {
      en: "Independent business valuation, transaction due diligence, and financial verification.",
      ml: "ബിസിനസ്സ് മൂല്യനിർണ്ണയം, ഇടപാട് സ്ഥിരീകരണം, സാമ്പത്തിക പരിശോധന സേവനങ്ങൾ.",
    },
    body: {
      en: "Comprehensive financial and tax due diligence for business acquisitions and mergers. We deliver independent valuation reports under the Companies Act and Income Tax Act.",
      ml: "ബിസിനസ്സ് ഏറ്റെടുക്കലുകൾ, ലയനങ്ങൾ എന്നിവയ്ക്കായുള്ള സാമ്പത്തിക പരിശോധനകളും മൂല്യനിർണ്ണയങ്ങളും.",
    },
  },
  {
    slug: "management-audit",
    icon: "management-audit",
    title: { en: "Management & Operational Audits", ml: "മാനേജ്മെന്റ് & ഓപ്പറേഷണൽ ഓഡിറ്റുകൾ" },
    short: {
      en: "Operational reviews, internal controls evaluation, and process optimization studies.",
      ml: "പ്രവർത്തന കാര്യക്ഷമത ഓഡിറ്റ്, ആഭ്യന്തര നിയന്ത്രണ സംവിധാനങ്ങളുടെ പരിശോധന.",
    },
    body: {
      en: "In-depth audit of company operations, management practices, resource utilization, and internal controls to enhance efficiency and detect operational risks.",
      ml: "സ്ഥാപനങ്ങളുടെ ആഭ്യന്തര നിയന്ത്രണ സംവിധാനങ്ങളുടെ ശക്തിയും പ്രവർത്തന കാര്യക്ഷമതയും വിലയിരുത്തൽ.",
    },
  },
  {
    slug: "data-analytics",
    icon: "data-analytics",
    title: { en: "Data Analytics & Management Reporting", ml: "ഡാറ്റാ അനലിറ്റിക്സ് & മാനേജ്മെന്റ് റിപ്പോർട്ടിംഗ്" },
    short: {
      en: "Advanced financial data modeling, MIS dashboards, and operational analysis.",
      ml: "സാമ്പത്തിക ഡാറ്റാ മോഡലിംഗ്, MIS ഡാഷ്‌ബോർഡുകൾ, റിപ്പോർട്ടിംഗ് സേവനങ്ങൾ.",
    },
    body: {
      en: "Designing MIS reporting systems and analytics dashboards. We transform raw financial data into actionable business intelligence to aid prompt management decisions.",
      ml: "സാമ്പത്തിക വിവരങ്ങൾ വിശകലനം ചെയ്ത് ബിസിനസ്സ് തീരുമാനങ്ങൾക്ക് സഹായിക്കുന്ന MIS റിപ്പോർട്ടുകൾ തയ്യാറാക്കുന്നു.",
    },
  },
];

export const team: Advocate[] = [
  {
    name: "Jibin Jose, FCA",
    initials: "JJ",
    role: { en: "Lead Partner | Chartered Accountant", ml: "മുഖ്യ പങ്കാളി | ചാർട്ടേഡ് അക്കൗണ്ടന്റ്" },
    bio: {
      en: "Established J Jose & Associates in Kanjirappally, Kottayam, developing extensive expertise in audit, taxation, and business advisory before co-founding J A & Associates.",
      ml: "കാഞ്ഞിരപ്പള്ളിയിൽ ജെ ജോസ് & അസോസിയേറ്റ്സ് സ്ഥാപിച്ചു. ഓഡിറ്റ്, നികുതി, ബിസിനസ്സ് അഡ്വൈസറി എന്നിവയിൽ വൈദഗ്ദ്ധൻ.",
    },
    years: 12,
  },
  {
    name: "Anoop Antony, FCA",
    initials: "AA",
    role: { en: "Lead Partner | Chartered Accountant", ml: "മുഖ്യ പങ്കാളി | ചാർട്ടേഡ് അക്കൗണ്ടന്റ്" },
    bio: {
      en: "Founded Anoop Antony & Co. in Kozhikode. Expert in tax litigation, business valuation, Virtual CFO, and management audits.",
      ml: "കോഴിക്കോട് അനൂപ് ആന്റണി & കോ സ്ഥാപിച്ചു. നികുതി വ്യവഹാരം, സാമ്പത്തിക റിപ്പോർട്ടിംഗ്, ഓഡിറ്റിംഗ് എന്നിവയിൽ വിദഗ്ദ്ധൻ.",
    },
    years: 12,
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
