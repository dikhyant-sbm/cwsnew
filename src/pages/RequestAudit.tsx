import { PageShell, PageHero, SectionHeading } from "@/components/landing/Shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { useState, FormEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, Mail, MessageCircle } from "lucide-react";
import { z } from "zod";

const auditSchema = z.object({
  name: z.string().trim().nonempty("Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Enter a valid work email").max(255),
  company: z.string().trim().nonempty("Company is required").max(150),
  website: z.string().trim().max(255).optional().or(z.literal("")),
  describes: z.string().min(1, "Tell us what describes you"),
  improving: z.array(z.string()).min(1, "Select at least one focus area"),
  concern: z.string().trim().max(2000).optional().or(z.literal("")),
  competitors: z.string().trim().max(1000).optional().or(z.literal("")),
  support: z.string().min(1, "Select a support type"),
  other: z.string().trim().max(2000).optional().or(z.literal("")),
});

const improveOptions = [
  "Google search visibility",
  "AI answer visibility",
  "ChatGPT / Gemini / Perplexity recommendations",
  "Google AI Overviews visibility",
  "Citation architecture",
  "Technical SEO",
  "Content strategy",
  "Competitor visibility",
  "Agency client delivery",
  "Not sure yet",
];

const auditAreas = [
  {
    n: "01",
    title: "Google Search Visibility",
    items: [
      "Organic rankings",
      "High-intent keyword clusters",
      "Search intent",
      "Page-one competitors",
      "Owned-page performance",
      "Third-party pages ranking for your category",
      "Comparison and review results",
      "Content gaps",
      "Search opportunity strength",
    ],
    why: "Google still shapes buyer discovery. If competitors, directories, review sites, or comparison pages dominate the search results, your company needs to know where and why.",
  },
  {
    n: "02",
    title: "AI Answer Visibility",
    items: [
      "AI-generated answers",
      "ChatGPT-style responses",
      "Gemini-style responses",
      "Perplexity-style cited answers",
      "Google AI Overviews",
      "Copilot-style answers",
      "Brand mentions",
      "Recommendation placement",
      "Competitor mentions",
      "Prompt clusters",
      "Cited sources",
    ],
    why: "Buyers increasingly ask AI systems for options, explanations, comparisons, and recommendations. The audit shows whether your company is being surfaced, ignored, cited, or out-positioned.",
  },
  {
    n: "03",
    title: "Citation Architecture",
    items: [
      "Third-party articles",
      "Directories",
      "Review platforms",
      "Comparison pages",
      "Industry sources",
      "YouTube videos",
      "Social profiles",
      "Reddit and community discussions",
      "Public mentions",
      "Competitor source footprint",
      "Citation gaps",
    ],
    why: "AI systems and buyers rarely rely on your website alone. Strong citation architecture helps validate your authority across the public sources that shape trust.",
  },
  {
    n: "04",
    title: "Technical SEO and Site Structure",
    items: [
      "Crawlability",
      "Indexation",
      "Site architecture",
      "Internal linking",
      "Schema",
      "Metadata",
      "Page structure",
      "Content hierarchy",
      "Core page quality",
      "Conversion paths",
      "Machine-readable context",
    ],
    why: "If your website is difficult to crawl, structure, or interpret, search engines and AI-influencing systems may not understand your company clearly enough.",
  },
  {
    n: "05",
    title: "Entity Clarity and Semantic Alignment",
    items: [
      "Brand entity clarity",
      "Service and product entities",
      "Category associations",
      "Topic relationships",
      "Terminology consistency",
      "Internal linking signals",
      "Structured content",
      "Semantic gaps",
      "Vector relevance",
      "Cosine gaps",
    ],
    why: "Your company needs to be clearly associated with the right services, categories, problems, solutions, locations, and buyer questions. Weak semantic alignment can make your brand harder to retrieve or recommend.",
  },
  {
    n: "06",
    title: "Competitor Visibility",
    items: [
      "Competitor rankings",
      "Competitor AI mentions",
      "Competitor recommendation placement",
      "Competitor cited sources",
      "Competitor content structures",
      "Competitor third-party mentions",
      "Competitor category associations",
      "Competitor source-layer authority",
    ],
    why: "Visibility is relative. The audit shows where competitors are stronger and which gaps are most important to close.",
  },
];

const deliverables = [
  { t: "Visibility Baseline", d: "A clear view of where your company currently appears across Google, AI answers, cited sources, and high-intent search environments." },
  { t: "Competitor Gap Review", d: "A comparison of where competitors are outranking, out-cited, or out-recommended against your company." },
  { t: "Prompt and Keyword Cluster Map", d: "A map of the buyer questions, search terms, and AI prompts that matter most in your category." },
  { t: "Citation Source Review", d: "A review of the owned and third-party sources supporting or weakening your authority." },
  { t: "Technical and Entity Clarity Findings", d: "A review of the structural, schema, content, and entity issues that may limit machine understanding." },
  { t: "Retrieval and Cosine Gap Findings", d: "A review of where your company appears semantically distant from the sources, competitors, and category language AI systems already associate with your market." },
  { t: "Corrective-Action Roadmap", d: "A prioritized plan showing what should be fixed, refreshed, created, clarified, cited, or supported next." },
];

const outcomeQuestions = [
  "Why are competitors showing up ahead of us?",
  "Why are we not appearing in AI answers?",
  "Why are we mentioned but not recommended?",
  "Which third-party sources are influencing our category?",
  "Is our website clear enough for search engines and AI systems?",
  "Do we have weak citation support?",
  "Are we publishing the wrong content?",
  "What should we fix first?",
];

const processSteps = [
  ["01", "Submit your request", "Tell us about your company, website, competitors, and visibility concerns."],
  ["02", "We review fit", "We review whether CiteWorks Studio is the right fit based on your category, goals, current visibility, and likely scope."],
  ["03", "We define the audit scope", "If there is a fit, we confirm the focus areas: Google visibility, AI search visibility, citation architecture, technical SEO, content, competitors, or agency partner needs."],
  ["04", "We run the audit", "CiteWorks Studio reviews your visibility across search, AI answers, sources, competitors, technical structure, content, and entity signals."],
  ["05", "We deliver findings and priorities", "You receive a clear diagnosis and corrective-action roadmap."],
  ["06", "We discuss next steps", "Some clients use the audit internally. Others continue with CiteWorks Studio for strategy, execution, content, technical SEO, citation architecture, or ongoing visibility improvement."],
];

const bestFit = [
  "Growth-minded companies",
  "High-consideration brands",
  "Category challengers",
  "Established companies in competitive markets",
  "Companies losing visibility to competitors",
  "Companies underrepresented in AI answers",
  "Companies with complex buyer journeys",
  "Companies where trust and comparison shape buying decisions",
  "Agencies serving higher-value clients",
];

const notFit = [
  "Companies looking for cheap SEO tasks",
  "Businesses that only want isolated blog posts",
  "Teams unwilling to improve their website, content, or source footprint",
  "Companies that want reporting but no corrective action",
  "Companies looking for guaranteed rankings or guaranteed AI recommendations",
];

const problems = [
  { t: "Competitors appear in AI answers, but you do not.", d: "The audit identifies whether the issue is weak source support, unclear category association, missing content, poor citations, or stronger competitor signals." },
  { t: "Your rankings exist, but they are not driving enough trust.", d: "The audit reviews whether your search presence is supported by comparison pages, reviews, citations, third-party mentions, and buyer validation sources." },
  { t: "Your company is mentioned but not recommended.", d: "The audit looks at recommendation-stage prompts, answer framing, competitor positioning, and source evidence." },
  { t: "Your website has content, but visibility is weak.", d: "The audit reviews content structure, topical coverage, internal linking, entity clarity, technical SEO, and semantic alignment." },
  { t: "Your category is changing because of AI search.", d: "The audit maps how AI-generated answers are shaping discovery, comparison, and recommendation behavior in your market." },
  { t: "Your agency client needs a stronger search visibility strategy.", d: "The audit can help agencies diagnose client opportunities across SEO, GEO, citation architecture, content, and source-layer authority." },
];

const afterAuditItems = [
  "Technical SEO improvements",
  "Schema and entity clarity",
  "Content strategy",
  "Service page copy",
  "Comparison pages",
  "FAQ and glossary content",
  "Content refreshes",
  "Citation architecture",
  "Source-layer authority",
  "AI visibility improvement",
  "Prompt and keyword cluster tracking",
  "Social and video support",
  "Ongoing reporting",
  "Monthly execution retainers",
  "Agency partner delivery",
];

const llmTable = [
  ["Google visibility", "Rankings, keywords, SERPs, competitors", "Shows where qualified search demand is being won or lost"],
  ["AI visibility", "AI answers, prompts, mentions, citations", "Shows whether your company is being retrieved or recommended"],
  ["Citation architecture", "Third-party sources, reviews, directories, comparisons", "Shows whether public evidence supports your authority"],
  ["Technical SEO", "Crawlability, indexation, schema, structure", "Helps machines access and understand your website"],
  ["Entity clarity", "Brand, services, products, categories, topics", "Helps search engines and AI systems classify your company"],
  ["Content structure", "Pages, headings, topical coverage, internal links", "Helps buyers and machines understand your expertise"],
  ["Competitor gaps", "Rankings, AI mentions, sources, positioning", "Shows where competitors have stronger visibility signals"],
  ["Corrective roadmap", "Prioritized next steps", "Turns findings into action"],
];

const faqs = [
  { q: "What is a Visibility Audit?", a: "A Visibility Audit is a diagnostic review of how your company appears across Google, AI answers, citation sources, competitors, technical SEO, content structure, entity clarity, and trusted source environments." },
  { q: "Is this an SEO audit?", a: "It includes SEO, but it is broader than a traditional SEO audit. The Visibility Audit also reviews AI search visibility, citation architecture, prompt clusters, competitor recommendations, source-layer authority, and semantic retrieval gaps." },
  { q: "Does the audit include AI search visibility?", a: "Yes. The audit reviews how your company appears in AI-generated answers, AI Overviews, prompt responses, cited sources, competitor mentions, and recommendation-style outputs." },
  { q: "What is citation architecture?", a: "Citation architecture is the structured improvement of the owned and third-party sources that support your company's authority. These sources may include website pages, articles, review sites, directories, comparison pages, videos, communities, and industry mentions." },
  { q: "What is a cosine gap?", a: "A cosine gap is the semantic distance between how your company wants to be understood and how AI systems appear to compare your company against competitors, cited sources, and category-defining content." },
  { q: "Do you execute after the audit?", a: "Yes. CiteWorks Studio can move from audit into ongoing corrective action across technical SEO, content, citation architecture, GEO, AI visibility, source-layer authority, reporting, and optimization." },
  { q: "Who is the audit best for?", a: "The audit is best for growth-minded companies, high-consideration brands, category challengers, established companies in competitive markets, and agency partners that need stronger visibility across Google, AI answers, and trusted source environments." },
  { q: "Do we need to be an enterprise company?", a: "No. CiteWorks Studio is not only for enterprise companies. The best fit is a company where visibility has meaningful business value and where improving Google, AI, and source-layer presence can support growth." },
  { q: "Can agencies request an audit for a client?", a: "Yes. Agencies can request white-label or collaborative Visibility Audits for clients that need stronger SEO, GEO, AI search visibility, citation architecture, content strategy, or market intelligence." },
  { q: "Will the audit guarantee rankings or AI recommendations?", a: "No. No agency can honestly guarantee rankings or AI recommendations. The audit identifies the gaps limiting visibility and provides a corrective-action roadmap for improving the signals that influence rankings, citations, retrieval, and recommendation strength." },
];

const RequestAudit = () => {
  const { toast } = useToast();
  const [improving, setImproving] = useState<string[]>([]);
  const [describes, setDescribes] = useState("");
  const [support, setSupport] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Request a Visibility Audit | CiteWorks Studio";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Request a CiteWorks Studio Visibility Audit to identify where your company is losing visibility across Google, AI answers, citation sources, technical SEO, content structure, entity clarity, and competitor positioning.");
  }, []);

  const toggleImprove = (v: string) =>
    setImproving((prev) => (prev.includes(v) ? prev.filter((p) => p !== v) : [...prev, v]));

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      company: String(fd.get("company") || ""),
      website: String(fd.get("website") || ""),
      describes,
      improving,
      concern: String(fd.get("concern") || ""),
      competitors: String(fd.get("competitors") || ""),
      support,
      other: String(fd.get("other") || ""),
    };

    const result = auditSchema.safeParse(payload);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((iss) => {
        const key = String(iss.path[0]);
        if (!fieldErrors[key]) fieldErrors[key] = iss.message;
      });
      setErrors(fieldErrors);
      toast({ title: "Please review the form", description: "A few fields need attention.", variant: "destructive" });
      const firstKey = Object.keys(fieldErrors)[0];
      if (firstKey) {
        const el = document.querySelector<HTMLElement>(`[name="${firstKey}"]`);
        el?.focus();
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setErrors({});
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 600));
      setSubmitted(true);
      window.scrollTo({ top: document.getElementById("audit-form")?.offsetTop ?? 0, behavior: "smooth" });
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setImproving([]);
    setDescribes("");
    setSupport("");
    setErrors({});
  };

  return (
    <PageShell>
      <PageHero
        eyebrow="Request a Visibility Audit"
        title="Find out where your visibility is breaking down."
        body="Your company may already have strong expertise, useful content, and real authority. The question is whether Google, AI systems, third-party sources, and buyers can clearly recognize it. A CiteWorks Studio Visibility Audit shows where your company stands across Google rankings, AI answers, citation sources, competitor positioning, technical SEO, content structure, entity clarity, and source-layer authority. Then we show what needs to change next."
        ctas={
          <>
            <Button asChild className="group rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-14 shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.5)]">
              <a href="#audit-form">REQUEST A VISIBILITY AUDIT <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
            </Button>
            <Button asChild variant="outline" className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] border-foreground/30 hover:bg-foreground/5 px-7 h-14">
              <a href="#what-included">SEE WHAT'S INCLUDED</a>
            </Button>
          </>
        }
      />

      <div className="mx-auto max-w-4xl px-6 -mt-8">
        <p className="text-center text-sm text-body italic">
          Built for growth-minded companies where search visibility, trust, comparison, and recommendation strength affect revenue.
        </p>
      </div>

      {/* Form FIRST */}
      <section id="audit-form" className="py-16 scroll-mt-24">
        <div className="mx-auto max-w-3xl px-6">
          {submitted ? (
            <div
              role="status"
              aria-live="polite"
              className="rounded-2xl border-gradient glass-strong p-10 sm:p-12 text-center"
            >
              <div className="mx-auto w-14 h-14 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                <Check className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <p className="eyebrow mt-6">Request received</p>
              <h2 className="display text-3xl sm:text-4xl mt-4 leading-tight">
                Thanks — your audit request is in.
              </h2>
              <p className="mt-5 text-body leading-relaxed max-w-xl mx-auto">
                A senior strategist will personally review your submission and respond within
                <span className="text-foreground"> one business day</span> with next steps,
                scoping questions, or a scheduling link for a 30-minute fit call.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <Button asChild variant="outline" className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] border-foreground/30 hover:bg-foreground/5 px-6 h-12">
                  <Link to="/methodology">EXPLORE THE METHODOLOGY</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] border-foreground/30 hover:bg-foreground/5 px-6 h-12">
                  <Link to="/case-studies">SEE CASE STUDIES</Link>
                </Button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] text-body hover:text-foreground px-4 h-11 transition-colors"
                >
                  SUBMIT ANOTHER
                </button>
              </div>
            </div>
          ) : (
          <form onSubmit={onSubmit} noValidate className="rounded-2xl border-gradient glass-strong p-8 sm:p-10 space-y-7">
            <div>
              <p className="eyebrow">Audit request</p>
              <h2 className="display text-2xl sm:text-3xl mt-3">Tell us what you want to improve.</h2>
              <p className="text-sm text-body mt-3">
                Complete the form below and we'll review whether a Visibility Audit is the right starting point for your company or agency client.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input id="name" name="name" required maxLength={100} aria-invalid={!!errors.name} />
                {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Work Email *</Label>
                <Input id="email" name="email" type="email" required maxLength={255} aria-invalid={!!errors.email} />
                {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company *</Label>
                <Input id="company" name="company" required maxLength={150} aria-invalid={!!errors.company} />
                {errors.company && <p className="text-xs text-destructive">{errors.company}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input id="website" name="website" type="url" placeholder="https://" maxLength={255} />
              </div>
            </div>

            <div className="space-y-2">
              <Label>What best describes you? *</Label>
              <Select value={describes} onValueChange={setDescribes}>
                <SelectTrigger aria-invalid={!!errors.describes}><SelectValue placeholder="Select one" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="company">Growth-minded company</SelectItem>
                  <SelectItem value="agency">Agency partner</SelectItem>
                  <SelectItem value="founder">Founder / owner</SelectItem>
                  <SelectItem value="marketing">Marketing leader</SelectItem>
                  <SelectItem value="seo">SEO or content lead</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.describes && <p className="text-xs text-destructive">{errors.describes}</p>}
            </div>

            <div className="space-y-3">
              <Label>What are you trying to improve? *</Label>
              <div className="grid sm:grid-cols-2 gap-2">
                {improveOptions.map((o) => (
                  <label key={o} className="flex items-start gap-3 p-3 rounded-lg border border-border hover:border-primary/40 cursor-pointer transition-colors">
                    <Checkbox
                      checked={improving.includes(o)}
                      onCheckedChange={() => toggleImprove(o)}
                      className="mt-0.5"
                    />
                    <span className="text-sm">{o}</span>
                  </label>
                ))}
              </div>
              {errors.improving && <p className="text-xs text-destructive">{errors.improving}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="concern">What is your biggest visibility concern right now?</Label>
              <Textarea id="concern" name="concern" rows={4} maxLength={2000} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="competitors">Are there specific competitors you care about?</Label>
              <Textarea id="competitors" name="competitors" rows={3} maxLength={1000} />
            </div>

            <div className="space-y-2">
              <Label>What type of support are you looking for? *</Label>
              <Select value={support} onValueChange={setSupport}>
                <SelectTrigger aria-invalid={!!errors.support}><SelectValue placeholder="Select one" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="audit">One-time audit</SelectItem>
                  <SelectItem value="roadmap">Audit plus roadmap</SelectItem>
                  <SelectItem value="ongoing">Ongoing execution support</SelectItem>
                  <SelectItem value="partner">Agency partner support</SelectItem>
                  <SelectItem value="unsure">Not sure yet</SelectItem>
                </SelectContent>
              </Select>
              {errors.support && <p className="text-xs text-destructive">{errors.support}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="other">Anything else we should know?</Label>
              <Textarea id="other" name="other" rows={3} maxLength={2000} />
            </div>

            <Button
              type="submit"
              disabled={submitting}
              aria-busy={submitting}
              className="w-full group rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 h-12 shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.5)] disabled:opacity-70"
            >
              {submitting ? "SUBMITTING…" : (
                <>REQUEST VISIBILITY AUDIT <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></>
              )}
            </Button>

            <p className="text-xs text-body text-center">
              We review every request manually. CiteWorks Studio is best suited for companies and agency partners ready to improve search visibility across Google, AI answers, and trusted source environments.
            </p>
          </form>
          )}

          {/* Contact info */}
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            <a href="mailto:hello@citeworksstudio.com" className="flex items-center gap-3 rounded-xl border border-border bg-card/30 p-4 hover:border-primary/40 transition-colors">
              <Mail className="w-4 h-4 text-primary" />
              <div>
                <p className="font-mono text-[13px] tracking-[0.16em] text-body">EMAIL</p>
                <p className="text-sm text-body">hello@citeworksstudio.com</p>
              </div>
            </a>
            <div className="flex items-center gap-3 rounded-xl border border-border bg-card/30 p-4">
              <MessageCircle className="w-4 h-4 text-primary" />
              <div>
                <p className="font-mono text-[13px] tracking-[0.16em] text-body">RESPONSE</p>
                <p className="text-sm text-body">Within one business day</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Written copy starts here, all below the form & contact === */}

      {/* What is a Visibility Audit */}
      <section className="py-24 border-t border-border/40">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            eyebrow="What it is"
            title="What is a Visibility Audit?"
            align="left"
          />
          <div className="glass-strong rounded-2xl p-6 sm:p-8 mt-8">
            <p className="font-mono text-[13px] tracking-[0.16em] text-primary mb-3">ANSWER CAPSULE</p>
            <p className="text-body leading-relaxed">
              A CiteWorks Studio Visibility Audit is a diagnostic review of how your company appears
              across Google, AI answers, citation sources, competitors, technical SEO, content
              structure, entity signals, and trusted source environments. The audit identifies where
              your company is visible, where it is missing, where competitors are stronger, and what
              should be fixed first to improve search visibility, AI visibility, citation support,
              and recommendation strength.
            </p>
          </div>
          <div className="mt-8 space-y-5 text-body text-lg leading-relaxed">
            <p>
              Most companies do not need more random content. They need to know why they are not
              being found, cited, compared, or recommended often enough.
            </p>
            <p>
              The Visibility Audit gives you that diagnosis. It shows whether your visibility
              problem is coming from weak rankings, unclear content, missing citations, technical
              SEO issues, poor entity clarity, weak source-layer authority, competitor dominance, or
              AI retrieval gaps.
            </p>
          </div>
        </div>
      </section>

      {/* Why start with audit */}
      <section className="py-20 border-t border-border/40 bg-card/30">
        <div className="mx-auto max-w-4xl px-6">
          <p className="eyebrow">Why start with an audit</p>
          <h2 className="display text-3xl sm:text-5xl mt-5 leading-tight">
            Before you invest in more marketing, know what is actually limiting visibility.
          </h2>
          <p className="mt-6 text-body text-lg leading-relaxed">
            Many companies invest in SEO, content, PR, social, or paid media without understanding
            where the real visibility breakdown is happening.
          </p>
          <ul className="mt-6 space-y-3 text-body leading-relaxed">
            {[
              "Sometimes the website is technically weak.",
              "Sometimes the content does not match how buyers search.",
              "Sometimes AI systems understand the competitors better.",
              "Sometimes the company has weak third-party source support.",
              "Sometimes reviews, directories, comparison pages, Reddit threads, YouTube results, or industry sources are shaping the market more than the company realizes.",
            ].map((p) => (
              <li key={p} className="flex gap-3">
                <span className="text-primary mt-1">·</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-body text-lg leading-relaxed">
            The audit helps separate assumptions from evidence.
          </p>
          <p className="mt-6 font-mono text-[13px] tracking-[0.14em] text-primary uppercase">
            Once the gaps are clear, the corrective-action plan becomes much sharper.
          </p>
        </div>
      </section>

      {/* What the audit reviews — 6 areas */}
      <section id="what-included" className="py-24 border-t border-border/40 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="What the audit reviews"
            title="The Visibility Audit reviews the full search environment."
            body="Modern visibility does not live in one place. CiteWorks Studio reviews the search, AI, and source environments that influence how buyers discover and evaluate companies."
            align="left"
          />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {auditAreas.map((a) => (
              <article key={a.n} className="card-premium p-7">
                <p className="font-mono text-xs text-primary">{a.n}</p>
                <h3 className="display text-2xl mt-2">{a.title}</h3>
                <p className="font-mono text-[12px] tracking-[0.16em] uppercase text-body mt-5 mb-3">What we review</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {a.items.map((i) => (
                    <li key={i} className="flex gap-2 text-sm text-body items-start">
                      <Check className="w-3.5 h-3.5 text-primary mt-1 flex-shrink-0" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4 border-t border-border">
                  <p className="font-mono text-[12px] tracking-[0.16em] uppercase text-primary mb-2">Why it matters</p>
                  <p className="text-sm text-body leading-relaxed">{a.why}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What you receive */}
      <section className="py-24 border-t border-border/40 bg-card/30">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="What you receive"
            title="What you get from the Visibility Audit."
            align="left"
          />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {deliverables.map((d) => (
              <div key={d.t} className="card-premium p-7">
                <h3 className="display text-lg text-primary">{d.t}</h3>
                <p className="text-sm text-body mt-3 leading-relaxed">{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit outcomes */}
      <section className="py-24 border-t border-border/40">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            eyebrow="Outcomes"
            title="The goal is clarity before execution."
            body="The Visibility Audit helps answer the questions growth-minded companies are already asking:"
            align="left"
          />
          <ul className="mt-10 grid sm:grid-cols-2 gap-3">
            {outcomeQuestions.map((q) => (
              <li key={q} className="border border-border rounded-xl p-4 bg-card/30 flex gap-3 items-start text-sm text-body">
                <span className="text-primary mt-0.5">?</span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-body text-lg leading-relaxed max-w-3xl">
            By the end of the audit, you should have a clearer understanding of where visibility is
            breaking down and what actions are most likely to improve search visibility, AI
            visibility, citation strength, and buyer trust.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 border-t border-border/40 bg-card/30">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Process" title="How the Visibility Audit process works." align="left" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map(([n, t, d]) => (
              <div key={n} className="card-premium p-6 bg-background">
                <p className="font-mono text-xs text-primary">{n}</p>
                <h3 className="display text-lg mt-2">{t}</h3>
                <p className="text-sm text-body mt-2 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best fit / not best fit */}
      <section className="py-24 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Best fit"
            title="Who should request a Visibility Audit?"
            body="The Visibility Audit is best for companies where search visibility, AI recommendations, trusted sources, and buyer confidence matter to growth. You do not need to be an enterprise company. You do need to be ready to act on what the audit finds."
            align="left"
          />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="border border-border rounded-2xl p-8 bg-card/30">
              <p className="font-mono text-[13px] tracking-[0.16em] text-primary mb-5">BEST FIT</p>
              <ul className="space-y-3">
                {bestFit.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-body">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-border rounded-2xl p-8 bg-card/30">
              <p className="font-mono text-[13px] tracking-[0.16em] text-body mb-5">NOT THE BEST FIT</p>
              <ul className="space-y-3">
                {notFit.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-muted-fg">
                    <span className="text-body mt-0.5">—</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common visibility problems */}
      <section className="py-24 border-t border-border/40 bg-card/30">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Common visibility problems"
            title="Common reasons companies request an audit."
            align="left"
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {problems.map((p, i) => (
              <article key={i} className="card-premium p-7 bg-background">
                <p className="font-mono text-[13px] tracking-[0.16em] text-primary mb-3">PROBLEM / 0{i + 1}</p>
                <h3 className="display text-lg mb-3">{p.t}</h3>
                <p className="text-sm text-body leading-relaxed">{p.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What happens after the audit */}
      <section className="py-24 border-t border-border/40">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="After the audit"
            title="The audit is the starting point, not the finish line."
            body="A Visibility Audit gives you the diagnosis. The next step is corrective action. Depending on what the audit finds, CiteWorks Studio can help with:"
            align="left"
          />
          <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {afterAuditItems.map((a) => (
              <li key={a} className="border border-border rounded-xl p-4 bg-card/30 flex gap-3 items-start text-sm text-body">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 font-mono text-[13px] tracking-[0.14em] text-primary uppercase">
            The work depends on the gap. That is why the audit comes first.
          </p>
        </div>
      </section>

      {/* LLM-readable summary table */}
      <section className="py-24 border-t border-border/40 bg-card/30">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="LLM-readable summary"
            title="Visibility Audit at a glance."
            align="left"
          />
          <div className="mt-12 card-premium overflow-hidden bg-background">
            <div className="grid grid-cols-12 font-mono text-[13px] tracking-[0.16em] uppercase text-body bg-card/60 px-6 py-4 border-b border-border">
              <div className="col-span-3">Audit Area</div>
              <div className="col-span-4">What It Reviews</div>
              <div className="col-span-5 text-primary">Why It Matters</div>
            </div>
            {llmTable.map(([k, f, w], i) => (
              <div key={i} className={`grid grid-cols-12 px-6 py-5 text-sm gap-4 ${i < llmTable.length - 1 ? "border-b border-border" : ""}`}>
                <div className="col-span-3 font-medium text-primary">{k}</div>
                <div className="col-span-4 text-body">{f}</div>
                <div className="col-span-5 text-body">{w}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-border/40">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow="FAQ" title="Common questions about the Visibility Audit." align="left" />
          <Accordion type="single" collapsible className="mt-12">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`q-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-lg font-medium hover:text-primary hover:no-underline py-6">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-body leading-relaxed pb-6">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 border-t border-border/40 text-center grid-bg">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="display text-4xl sm:text-6xl">Request your Visibility Audit.</h2>
          <p className="mt-6 text-body text-lg">
            Find out where your company is being found, where it is being ignored, where competitors
            are stronger, and what needs to change next. CiteWorks Studio helps growth-minded
            companies close the gap between what they publish and what Google, AI systems, trusted
            sources, and buyers actually recognize.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild className="group rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-14 shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.5)]">
              <a href="#audit-form">REQUEST A VISIBILITY AUDIT <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
            </Button>
            <Button asChild variant="outline" className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] border-foreground/30 hover:bg-foreground/5 px-7 h-14">
              <Link to="/methodology">EXPLORE THE METHODOLOGY</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default RequestAudit;
