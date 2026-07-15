import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Users,
  Clock,
  MapPin,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { firm } from "@/content/firm";
import { useT, ui } from "@/lib/i18n";
import { SectionHeading } from "@/components/site/SectionHeading";
import { submitJobApplication } from "@/lib/careers.functions";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: `Careers — ${firm.name}` },
      {
        name: "description",
        content:
          "Join JA & Associates Chartered Accountants in Angamaly. Open positions for Article Trainees, GST Associates, and Audit Managers. Build your CA career with a firm known for mentorship and real-world exposure.",
      },
      { property: "og:title", content: `Careers — ${firm.name}` },
      {
        property: "og:description",
        content:
          "Build your CA career with a firm known for mentorship and real-world exposure in taxation, audit, and corporate advisory.",
      },
    ],
  }),
  component: Careers,
});

const openings = [
  {
    id: "article-trainee",
    title: "Article Trainee (CA Articleship)",
    type: "Full-time · Articleship",
    location: "Angamaly, Ernakulam",
    icon: GraduationCap,
    description:
      "A structured 3-year articleship covering all major areas of practice — statutory audit, income tax, GST filings, ROC compliance, and corporate advisory. You'll work directly under a partner on real client files from day one.",
    requirements: [
      "Registered with the ICAI for articleship",
      "Cleared CA Foundation or CPT",
      "Good command of Malayalam and English",
      "Proficiency in Tally or any accounting software is a plus",
      "Willing to commute to or relocate near Angamaly",
    ],
    perks: [
      "Full ICAI-compliant articleship with varied exposure",
      "Direct mentorship from senior partners",
      "Exposure to ITAT, GSTAT, and NCLT-level matters",
    ],
  },
  {
    id: "gst-associate",
    title: "GST & Indirect Tax Associate",
    type: "Full-time · Experienced",
    location: "Angamaly, Ernakulam",
    icon: Briefcase,
    description:
      "Manage end-to-end GST compliance for a portfolio of corporate and MSME clients. You'll handle return filings, reconciliations, notice responses, and advise clients on restructuring their supply chains for tax efficiency.",
    requirements: [
      "CA (Inter/Final) or equivalent with 1–3 years of GST practice",
      "Hands-on experience with GSTN portal and GSTR filings",
      "Ability to draft reply letters to show-cause notices",
      "Familiarity with e-way bills, e-invoicing, and ITC reconciliation",
      "Strong communication skills in Malayalam and English",
    ],
    perks: [
      "Competitive salary benchmarked to industry standards",
      "Exposure to diverse sectors — manufacturing, retail, services",
      "Direct client interaction from day one",
    ],
  },
  {
    id: "audit-manager",
    title: "Audit Manager",
    type: "Full-time · Senior",
    location: "Angamaly, Ernakulam",
    icon: Users,
    description:
      "Lead a team conducting statutory, tax, and internal audits for companies across Kerala. Manage client relationships, review audit files, supervise article clerks, and present findings directly to boards and management.",
    requirements: [
      "Qualified CA with 4+ years of post-qualification audit experience",
      "Experience signing statutory audit reports under Companies Act",
      "Strong knowledge of Indian Accounting Standards (Ind AS / AS)",
      "Ability to manage a team of 3–5 article trainees simultaneously",
      "Prior experience with manufacturing or NBFC clients is a strong plus",
    ],
    perks: [
      "Senior role with partner-track potential",
      "Performance bonus tied to client satisfaction and retention",
      "Flexible working hours on non-audit-season days",
    ],
  },
];

const culturePoints = [
  {
    icon: GraduationCap,
    title: "Real mentorship",
    body: "Partners are hands-on. You will discuss actual client files with them — not just be handed checklists.",
  },
  {
    icon: Briefcase,
    title: "Broad exposure",
    body: "From GST notices to NCLT hearings, our small team size means you handle the full lifecycle of each engagement.",
  },
  {
    icon: Clock,
    title: "Reasonable hours",
    body: "We believe in sustainable work. Peak season is intense — but the rest of the year we protect your time.",
  },
];

function OpeningCard({
  opening,
  formRef,
}: {
  opening: (typeof openings)[0];
  formRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [expanded, setExpanded] = useState(false);
  const Icon = opening.icon;

  const scrollToForm = () => {
    (document.getElementById("role-select") as HTMLSelectElement | null)!.value = opening.id;
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border border-border bg-card"
    >
      <div className="p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center bg-primary/10">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-xl text-primary">{opening.title}</h3>
              <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Briefcase className="h-3.5 w-3.5" /> {opening.type}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" /> {opening.location}
                </span>
              </div>
            </div>
          </div>
          <button
            type="button"
            aria-label={expanded ? "Collapse" : "Expand"}
            onClick={() => setExpanded((v) => !v)}
            className="mt-1 shrink-0 text-muted-foreground hover:text-primary"
          >
            {expanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">{opening.description}</p>
      </div>

      {expanded && (
        <div className="border-t border-border px-7 pb-7 pt-5">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                What we need
              </p>
              <ul className="mt-3 space-y-2">
                {opening.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                What you get
              </p>
              <ul className="mt-3 space-y-2">
                {opening.perks.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button
            type="button"
            onClick={scrollToForm}
            className="mt-6 inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-primary-foreground transition hover:bg-navy-deep"
          >
            Apply for this role <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </motion.div>
  );
}

function Careers() {
  const t = useT();
  const formRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [fileName, setFileName] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");
    setIsSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const role = data.get("role") as string;
    const phone = data.get("phone") as string;
    const message = data.get("message") as string;

    const fileInput = document.getElementById("careers-resume") as HTMLInputElement | null;
    const file = fileInput?.files?.[0];

    if (!file) {
      setErrorMsg("Please select a resume file.");
      setIsSubmitting(false);
      return;
    }

    try {
      const reader = new FileReader();
      reader.onload = async () => {
        const base64String = reader.result as string;
        try {
          const res = await submitJobApplication({
            data: {
              name,
              phone,
              role,
              message,
              resumeFileName: file.name,
              resumeBase64: base64String,
            },
          });

          if (res.ok) {
            setSubmitted(true);
          } else {
            setErrorMsg("Something went wrong. Please try again.");
          }
        } catch (err: any) {
          console.error(err);
          setErrorMsg(err?.message || "Failed to submit application. Please try again.");
        } finally {
          setIsSubmitting(false);
        }
      };
      reader.readAsDataURL(file);
    } catch (err: any) {
      console.error(err);
      setErrorMsg("Failed to read the selected file.");
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-careers" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M48 0H0V48" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-careers)" className="text-white" />
          </svg>
        </div>
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-10 bg-gold" />
              {t(ui.nav.careers)} · {t(firm.city)}
            </div>
            <h1 className="max-w-4xl font-display text-4xl leading-[1.05] sm:text-6xl md:text-7xl">
              Grow your career where <span className="italic text-gold">every file matters.</span>
            </h1>
            <p className="mt-6 max-w-xl text-primary-foreground/75 sm:text-lg">
              We're a mid-sized CA firm in Angamaly with a strong practice in GST, audit, and
              corporate advisory. Our size means you get real responsibility — fast.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() =>
                  formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="inline-flex items-center gap-2 bg-gold px-6 py-3.5 text-sm font-medium uppercase tracking-[0.18em] text-primary transition hover:brightness-105"
              >
                See open positions <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border border-white/30 px-6 py-3.5 text-sm font-medium uppercase tracking-[0.18em] text-primary-foreground/80 transition hover:border-white/60 hover:text-white"
              >
                About the firm
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CULTURE */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Why join us"
          title="A firm that invests in its people."
          subtitle="We're not a factory. Every person who joins JA & Associates gets real exposure, real mentorship, and the chance to build a genuine career in finance."
        />
        <div className="mt-12 grid gap-px bg-border sm:grid-cols-3">
          {culturePoints.map((c) => (
            <div key={c.title} className="bg-background p-8">
              <c.icon className="h-8 w-8 text-gold" />
              <h3 className="mt-5 font-display text-xl text-primary">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="Open positions"
            title="Current openings at JA & Associates."
            subtitle="We hire for attitude and train for skill. If you're hardworking, curious, and want to build a serious career in accounting, we want to hear from you."
          />
          <div className="mt-12 grid gap-4">
            {openings.map((o) => (
              <OpeningCard key={o.id} opening={o} formRef={formRef} />
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Don't see a role that fits?{" "}
            <button
              type="button"
              onClick={() =>
                formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="font-medium text-primary hover:text-gold underline"
            >
              Send us a general application
            </button>{" "}
            and we'll keep it on file.
          </p>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28" ref={formRef}>
          <SectionHeading
            eyebrow="Apply"
            title="Send your application."
            subtitle="Fill in the details below and upload your CV/resume to apply directly to our firm."
          />

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-12 border border-gold bg-card p-10 text-center"
            >
              <CheckCircle className="mx-auto h-12 w-12 text-gold" />
              <h3 className="mt-4 font-display text-2xl text-primary">Application Submitted!</h3>
              <p className="mt-2 text-muted-foreground">
                Thank you for applying. Your details and resume <strong>({fileName})</strong> have been securely uploaded to our database.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Our team will review your application and contact you within 5 working days.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-12 grid gap-6">
              {errorMsg && (
                <div className="border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-500">
                  {errorMsg}
                </div>
              )}
              
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="careers-name"
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-primary"
                  >
                    Full Name *
                  </label>
                  <input
                    id="careers-name"
                    name="name"
                    type="text"
                    required
                    disabled={isSubmitting}
                    placeholder="Joseph Varghese"
                    className="border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none disabled:opacity-50"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="careers-phone"
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-primary"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="careers-phone"
                    name="phone"
                    type="tel"
                    required
                    disabled={isSubmitting}
                    placeholder="+91 98765 43210"
                    className="border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="role-select"
                  className="text-xs font-semibold uppercase tracking-[0.18em] text-primary"
                >
                  Role You're Applying For *
                </label>
                <select
                  id="role-select"
                  name="role"
                  required
                  disabled={isSubmitting}
                  defaultValue=""
                  className="border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none disabled:opacity-50"
                >
                  <option value="" disabled>
                    Select a role…
                  </option>
                  {openings.map((o) => (
                    <option key={o.id} value={o.id}>
                      {o.title}
                    </option>
                  ))}
                  <option value="general">General Application</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="careers-message"
                  className="text-xs font-semibold uppercase tracking-[0.18em] text-primary"
                >
                  Cover Note *
                </label>
                <textarea
                  id="careers-message"
                  name="message"
                  required
                  disabled={isSubmitting}
                  rows={5}
                  placeholder="Tell us a little about yourself, your current qualifications, and why you'd like to join JA & Associates…"
                  className="resize-none border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none disabled:opacity-50"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="careers-resume"
                  className="text-xs font-semibold uppercase tracking-[0.18em] text-primary"
                >
                  Upload Resume / CV *
                </label>
                <div className="relative flex items-center border border-border bg-background hover:border-primary transition">
                  <input
                    id="careers-resume"
                    name="resume"
                    type="file"
                    required
                    disabled={isSubmitting}
                    accept=".pdf,.doc,.docx"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      setFileName(file ? file.name : "");
                    }}
                  />
                  <div className="flex w-full items-center justify-between px-4 py-3 text-sm">
                    <span
                      className={fileName ? "text-foreground font-medium" : "text-muted-foreground"}
                    >
                      {fileName || "Select PDF, DOC, or DOCX file…"}
                    </span>
                    <span className="bg-primary/10 px-3 py-1 text-xs font-medium text-primary uppercase tracking-wider">
                      Browse
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-sm border border-border/60 bg-card px-4 py-3 text-xs text-muted-foreground">
                <strong className="text-foreground">Note:</strong> Your application details and resume file will be securely uploaded directly to our database for review.
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 bg-primary px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-primary-foreground transition hover:bg-navy-deep disabled:bg-primary/50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting Application…" : "Submit Application"} <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}

          <div className="mt-10 border-t border-border pt-8 text-sm text-muted-foreground">
            <p>
              Have questions before applying?{" "}
              <a
                href={`mailto:${firm.contact.email}`}
                className="font-medium text-primary hover:text-gold"
              >
                {firm.contact.email}
              </a>{" "}
              or call us at{" "}
              <a
                href={`tel:${firm.contact.phoneHref}`}
                className="font-medium text-primary hover:text-gold"
              >
                {firm.contact.phone}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
