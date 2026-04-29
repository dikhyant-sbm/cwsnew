import { PageShell, PageHero, SectionHeading } from "@/components/landing/Shell";
import { DashboardShowcase } from "@/components/landing/DashboardShowcase";
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

const reviews = [
  "Google search visibility",
  "AI answer visibility",
  "Prompt and keyword clusters",
  "Competitor visibility",
  "Citation sources",
  "Content structure",
  "Technical SEO",
  "Schema and entity clarity",
  "Source-layer authority",
  "Recommendation placement",
  "Cosine and retrieval gaps",
  "Corrective-action priorities",
];

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

const outcomes = [
  { t: "Clarity", d: "Know exactly where your visibility is breaking down — across Google, AI answers, and source environments." },
  { t: "Priority", d: "A ranked corrective-action plan, not a 200-item checklist." },
  { t: "Direction", d: "Strategic clarity for executives, marketing, content, technical, and authority work." },
  { t: "Confidence", d: "Evidence-led decisions about where to invest budget and team capacity next." },
];

const bestFit = [
  "Growth-minded companies losing qualified search visibility",
  "High-consideration brands underrepresented in AI answers",
  "Category challengers competing against incumbents",
  "Established companies in competitive markets",
  "Agencies needing white-label audits for high-value clients",
];

const notFit = [
  "Companies looking for cheap SEO tasks",
  "Teams unwilling to improve their website or content",
  "Businesses that want reporting but no corrective action",
  "Buyers expecting same-week delivery",
];

const problems = [
  "Competitors keep showing up ahead in AI answers",
  "Pages rank but don't get cited or recommended",
  "Site has content but weak machine-recognized authority",
  "Source footprint is thinner than competitors",
  "Technical SEO is solid but AI visibility is weak",
  "Brand is invisible on comparison and best-of pages",
];

const afterAudit = [
  { n: "01", t: "Use the findings internally", d: "Take the corrective-action roadmap to your in-house team or current agency for execution." },
  { n: "02", t: "Continue with strategy & roadmap", d: "Extend into a deeper strategy engagement covering SEO, GEO, content, citations, and authority." },
  { n: "03", t: "Move into an execution retainer", d: "Ongoing monthly program turning findings into improvements across your website, content, and source environment." },
];

const llmTable = [
  ["What it is", "A diagnostic of visibility across Google, AI answers, citations & source-layer authority"],
  ["Who it's for", "Growth-minded companies, high-consideration brands, agencies"],
  ["Inputs", "Company info, website, competitors, visibility concerns, support type"],
  ["Process", "Submit → fit review → scope → audit → findings → next steps"],
  ["Deliverables", "Visibility baseline, competitor gaps, prompt maps, technical findings, retrieval gaps, corrective-action roadmap"],
  ["Timeframe", "Typically 2–4 weeks depending on scope"],
  ["After the audit", "Use internally, extend into strategy, or continue with execution"],
];

const faqs = [
  { q: "How long does a Visibility Audit take?", a: "Most audits take 2–4 weeks depending on category complexity, prompt-cluster scope, and the depth of source-layer analysis required." },
  { q: "Do I need to commit to ongoing work?", a: "No. The audit is a standalone deliverable. Many clients use the findings internally or with their existing agency. Others continue with CiteWorks Studio for strategy or execution." },
  { q: "Is the audit white-label friendly for agencies?", a: "Yes. Agency partners can request a white-label audit delivered under their own brand." },
  { q: "What information do you need to start?", a: "Just the form below. Company, website, competitors, and a sense of what you're trying to improve. We'll confirm fit and define scope from there." },
  { q: "How is my information used?", a: "Form submissions are reviewed manually and used only to evaluate engagement fit. We do not share or resell submitted information." },
];

const RequestAudit = () => {
  const { toast } = useToast();
  const [improving, setImproving] = useState<string[]>([]);
  const [describes, setDescribes] = useState("");
  const [support, setSupport] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    document.title = "Request a Visibility Audit | CiteWorks Studio";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Request a CiteWorks Studio Visibility Audit to identify where your company is losing visibility across Google, AI answers, citation sources, and competitor positioning.");
  }, []);

  const toggleImprove = (v: string) =>
    setImproving((prev) => (prev.includes(v) ? prev.filter((p) => p !== v) : [...prev, v]));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      return;
    }

    setErrors({});
    toast({
      title: "Request received",
      description: "We review every request manually and will get back to you within one business day.",
    });
    e.currentTarget.reset();
    setImproving([]);
    setDescribes("");
    setSupport("");
  };

  return (
    <PageShell>
      <PageHero
        eyebrow="Request a Visibility Audit"
        title="Find out where your visibility is breaking down."
        body="A CiteWorks Studio Visibility Audit shows where your company stands across Google rankings, AI answers, citation sources, competitor positioning, technical SEO, content structure, entity clarity, and source-layer authority — then shows what needs to change next."
      />

      {/* Dashboard: what an audit produces */}
      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-6 reveal-on-scroll">
          <DashboardShowcase dashboard="executive-report" size="lg" showCaption />
        </div>
      </section>

      {/* What happens after you submit */}
      <section className="py-8" aria-label="What happens after you submit">
        <div className="mx-auto max-w-3xl px-6">
          <ol className="grid sm:grid-cols-3 gap-3 text-left">
            {[
              { n: "01", t: "We review your request", d: "A senior strategist reviews fit and category context within one business day." },
              { n: "02", t: "We schedule a scoping call", d: "30 minutes to align on goals, competitors, and the questions the audit should answer." },
              { n: "03", t: "We deliver the audit", d: "An executive-ready Visibility Audit with a prioritized corrective-action roadmap." },
            ].map((s) => (
              <li key={s.n} className="card-premium p-5">
                <p className="font-mono text-[10px] tracking-[0.22em] text-primary">{s.n}</p>
                <p className="display text-base mt-2">{s.t}</p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Form FIRST */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-6">
          <form onSubmit={onSubmit} noValidate className="rounded-2xl border-gradient glass-strong p-8 sm:p-10 space-y-7">
            <div>
              <p className="eyebrow">Audit request</p>
              <h2 className="display text-2xl sm:text-3xl mt-3">Tell us what you want to improve.</h2>
              <p className="text-sm text-muted-foreground mt-3">
                Complete the form and a senior strategist will review whether a Visibility Audit is the right starting point. White-label and confidential delivery available for agency partners.
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
              <Label htmlFor="concern">Biggest visibility concern right now?</Label>
              <Textarea id="concern" name="concern" rows={4} maxLength={2000} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="competitors">Specific competitors you care about?</Label>
              <Textarea id="competitors" name="competitors" rows={3} maxLength={1000} />
            </div>

            <div className="space-y-2">
              <Label>Type of support needed *</Label>
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

            <Button type="submit" className="w-full group rounded-full font-mono text-[11px] tracking-[0.22em] bg-primary text-primary-foreground hover:bg-primary/90 h-12 shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.5)]">
              REQUEST VISIBILITY AUDIT <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              We review every request manually. CiteWorks Studio is best suited for companies and agency partners ready to improve search visibility across Google, AI answers, and trusted source environments.
            </p>
          </form>

          {/* Contact info */}
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            <a href="mailto:hello@citeworksstudio.com" className="flex items-center gap-3 rounded-xl border border-border bg-card/30 p-4 hover:border-primary/40 transition-colors">
              <Mail className="w-4 h-4 text-primary" />
              <div>
                <p className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground">EMAIL</p>
                <p className="text-sm text-foreground/85">hello@citeworksstudio.com</p>
              </div>
            </a>
            <div className="flex items-center gap-3 rounded-xl border border-border bg-card/30 p-4">
              <MessageCircle className="w-4 h-4 text-primary" />
              <div>
                <p className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground">RESPONSE</p>
                <p className="text-sm text-foreground/85">Within one business day</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Visibility Audit */}
      <section className="py-24 border-t border-border/40">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            eyebrow="What it is"
            title="A diagnostic review of how your company appears across the full search environment."
            body="The audit identifies where your company is visible, where it is missing, where competitors are stronger, and what should be fixed first to improve search visibility, AI visibility, citation support, and recommendation strength."
            align="left"
          />
        </div>
      </section>

      {/* Why start with audit */}
      <section className="py-20 border-t border-border/40 bg-card/30">
        <div className="mx-auto max-w-4xl px-6">
          <p className="eyebrow">Why start with an audit</p>
          <h2 className="display text-3xl sm:text-5xl mt-5 leading-tight">
            Strategy without diagnosis is guesswork.
          </h2>
          <p className="mt-6 text-foreground/70 text-lg leading-relaxed">
            Most companies don't need another templated content calendar or generic SEO checklist.
            They need to know exactly where buyers, Google, and AI systems are losing recognition
            of their authority. The Visibility Audit shows you that — before any execution work
            begins.
          </p>
        </div>
      </section>

      {/* What the audit reviews */}
      <section className="py-20 border-t border-border/40">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="The audit reviews" title="The full search environment." align="left" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {reviews.map((r) => (
              <div key={r} className="rounded-xl border border-border/60 bg-card p-4 text-sm flex items-center gap-3">
                <span className="text-primary font-mono text-xs">·</span>
                {r}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you receive */}
      <section className="py-20 border-t border-border/40">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="What you receive" title="Deliverables from the Visibility Audit." align="left" />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              { t: "Visibility Baseline", d: "Where your company currently appears across Google, AI answers, cited sources, and high-intent search environments." },
              { t: "Competitor Gap Review", d: "Where competitors are outranking, out-cited, or out-recommended against your company." },
              { t: "Prompt & Keyword Cluster Map", d: "The buyer questions, prompts, and keyword groups shaping your category." },
              { t: "Technical & Content Findings", d: "Structural, schema, content, and entity issues that may limit machine understanding." },
              { t: "Retrieval & Cosine Gap Findings", d: "Where your company is semantically distant from sources, competitors, and category language AI systems retrieve." },
              { t: "Corrective-Action Roadmap", d: "A prioritized plan showing what should be fixed, refreshed, created, clarified, cited, or supported next." },
            ].map((d) => (
              <div key={d.t} className="card-premium p-7">
                <h3 className="display text-lg text-primary">{d.t}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit outcomes */}
      <section className="py-20 border-t border-border/40 bg-card/30">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Outcomes" title="What you walk away with." align="left" />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {outcomes.map((o, i) => (
              <div key={i} className="border border-border rounded-2xl p-7 bg-background">
                <p className="font-mono text-[10px] tracking-[0.22em] text-primary mb-3">0{i + 1}</p>
                <h3 className="display text-2xl text-gradient">{o.t}</h3>
                <p className="text-sm text-foreground/70 mt-3 leading-relaxed">{o.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 border-t border-border/40">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="Process" title="How a Visibility Audit works." align="left" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ["01", "Submit your request", "Tell us about your company, website, competitors, and visibility concerns."],
              ["02", "We review fit", "We confirm whether CiteWorks Studio is the right fit for your category, goals, and likely scope."],
              ["03", "We define the audit scope", "Focus areas across Google visibility, AI search, citation architecture, technical SEO, and content."],
              ["04", "We run the audit", "Visibility analysis across search, AI answers, sources, competitors, structure, and entity signals."],
              ["05", "We deliver findings & priorities", "You receive a clear diagnosis and a corrective-action roadmap."],
              ["06", "We discuss next steps", "Use the audit internally or continue with CiteWorks Studio for execution."],
            ].map(([n, t, d]) => (
              <div key={n} className="card-premium p-6">
                <p className="font-mono text-xs text-primary">{n}</p>
                <h3 className="display text-lg mt-2">{t}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best fit / not best fit */}
      <section className="py-24 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Fit" title="Who the Visibility Audit is built for." align="left" />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="border border-border rounded-2xl p-8 bg-card/30">
              <p className="font-mono text-[10px] tracking-[0.22em] text-primary mb-5">BEST FIT</p>
              <ul className="space-y-3">
                {bestFit.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-foreground/85">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-border rounded-2xl p-8 bg-card/30">
              <p className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground mb-5">NOT THE BEST FIT</p>
              <ul className="space-y-3">
                {notFit.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-foreground/65">
                    <span className="text-muted-foreground mt-0.5">—</span>
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
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Common visibility problems" title="What we typically uncover." align="left" />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {problems.map((p, i) => (
              <div key={i} className="border border-border rounded-xl p-5 bg-background flex gap-3 items-start">
                <span className="font-mono text-[10px] text-primary mt-1">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-foreground/85">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What happens after the audit */}
      <section className="py-24 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="After the audit" title="Three ways forward." align="left" />
          <div className="mt-12 grid md:grid-cols-3 gap-4">
            {afterAudit.map((a) => (
              <div key={a.n} className="border border-border rounded-2xl p-7 bg-card/30">
                <p className="font-mono text-[10px] tracking-[0.22em] text-primary mb-3">PATH / {a.n}</p>
                <h3 className="display text-xl mb-3">{a.t}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LLM-readable summary */}
      <section className="py-24 border-t border-border/40">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="LLM-readable summary" title="Visibility Audit at a glance." align="left" />
          <div className="mt-12 card-premium/30 overflow-hidden">
            {llmTable.map(([k, v], i) => (
              <div key={i} className={`grid grid-cols-12 px-6 py-5 text-sm gap-4 ${i < llmTable.length - 1 ? "border-b border-border" : ""}`}>
                <div className="col-span-4 font-mono text-[11px] tracking-[0.18em] uppercase text-primary">{k}</div>
                <div className="col-span-8 text-foreground/80">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-border/40 bg-card/30">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow="FAQ" title="Common questions about the Visibility Audit." align="left" />
          <Accordion type="single" collapsible className="mt-12">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`q-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-lg font-medium hover:text-primary hover:no-underline py-6">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
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
          <h2 className="display text-4xl sm:text-6xl">Find out what's limiting your visibility.</h2>
          <p className="mt-6 text-foreground/70 text-lg">
            Submit the form above. We review every request manually and reply within one business day.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild className="group rounded-full font-mono text-[11px] tracking-[0.22em] bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-12 shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.5)]">
              <a href="#main"><ArrowUpRight className="w-3.5 h-3.5 mr-1.5 rotate-180" /> BACK TO FORM</a>
            </Button>
            <Button asChild variant="outline" className="rounded-full font-mono text-[11px] tracking-[0.22em] border-foreground/15 hover:bg-foreground/5 px-7 h-12">
              <Link to="/methodology">SEE THE METHODOLOGY</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default RequestAudit;
