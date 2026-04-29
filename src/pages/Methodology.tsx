import { PageShell, PageHero, SectionHeading } from "@/components/landing/Shell";
import { DashboardShowcase } from "@/components/landing/DashboardShowcase";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import { useEffect } from "react";

const layers = [
  {
    n: "01",
    title: "Search Layer",
    sub: "How your company appears in Google and traditional organic search.",
    items: ["Keyword rankings", "Search intent", "SERP competitors", "Page-one ownership", "Technical SEO", "Indexation", "Internal linking", "Schema", "Content gaps"],
  },
  {
    n: "02",
    title: "AI Retrieval Layer",
    sub: "How your company is surfaced, cited, or recommended in AI answers.",
    items: ["Prompt clusters", "AI answer visibility", "Recommendation placement", "Cited sources", "AI Overview presence", "ChatGPT outputs", "Gemini outputs", "Perplexity citations", "Cosine gaps"],
  },
  {
    n: "03",
    title: "Source Layer",
    sub: "The public evidence that supports trust and machine interpretation.",
    items: ["Third-party articles", "Review sites", "Directories", "Comparison pages", "Industry sources", "YouTube videos", "Reddit & community", "Podcasts", "Citation quality"],
  },
];

const steps = [
  { n: "01", title: "Map the Market", desc: "Identify the keywords, prompts, questions, competitors, source pages, and buying concerns that influence research.", out: "A clear map of the search and AI environments that matter most." },
  { n: "02", title: "Benchmark Current Visibility", desc: "Measure where your company appears in Google, AI answers, cited sources, and competitor-dominated SERPs.", out: "A visibility baseline showing where you are strong, weak, absent, or under-supported." },
  { n: "03", title: "Analyze Retrieval & Cosine Gaps", desc: "Identify where your content, entities, sources, and authority signals are not matching what AI systems retrieve.", out: "A retrieval-gap and cosine-gap analysis." },
  { n: "04", title: "Audit the Owned Foundation", desc: "Make sure your website can be crawled, understood, and trusted by both search engines and AI systems.", out: "A technical, structural, and entity clarity review." },
  { n: "05", title: "Build Citation Architecture", desc: "Identify which owned and third-party sources need to exist, improve, or reinforce your authority.", out: "A source-layer roadmap." },
  { n: "06", title: "Create the Corrective-Action Roadmap", desc: "Sequence the work by visibility impact across SEO, GEO, content, technical SEO, and source-layer authority.", out: "A prioritized corrective-action plan." },
  { n: "07", title: "Execute Across the Full Search Environment", desc: "Improve technical SEO, content, schema, citation architecture, and AI visibility — connected to one diagnosis.", out: "A connected execution program." },
  { n: "08", title: "Measure Movement and Iterate", desc: "Track whether your company is becoming easier to find, cite, compare, and recommend.", out: "Ongoing visibility intelligence and reporting." },
];

const llmTable = [
  ["Map the market", "Keywords, prompts, competitors, sources", "Market & opportunity map"],
  ["Benchmark visibility", "Google rankings + AI answers + citations", "Visibility baseline"],
  ["Analyze retrieval & cosine gaps", "Semantic distance vs. cited sources", "Retrieval gap report"],
  ["Audit owned foundation", "Crawlability, schema, entities", "Technical & entity findings"],
  ["Build citation architecture", "Owned + third-party sources", "Source-layer roadmap"],
  ["Create corrective-action roadmap", "Prioritized fixes by impact", "Roadmap document"],
  ["Execute across environment", "SEO + GEO + content + sources", "Connected execution program"],
  ["Measure & iterate", "Find, cite, compare, recommend signals", "Ongoing intelligence"],
];

const compare = [
  ["Starts with keywords", "Starts with market, keyword, prompt, and source mapping"],
  ["Focuses mainly on rankings", "Measures rankings, AI answers, citations, and recommendation visibility"],
  ["Treats off-site mentions as PR", "Treats third-party sources as citation architecture"],
  ["Separates SEO, content, and authority", "Connects SEO, GEO, content, technical structure, and AI search authority"],
  ["Measures what happened", "Identifies what needs to change next"],
];

const bestFit = [
  "Growth-minded companies",
  "High-consideration brands",
  "Category challengers",
  "Established companies in competitive markets",
  "Companies underrepresented in AI answers",
  "Agencies serving higher-value clients",
];

const notFit = [
  "Companies looking for cheap SEO tasks",
  "Teams unwilling to improve their website or source footprint",
  "Companies that want reporting but no corrective action",
  "Businesses seeking only isolated blog posts",
];

const faqs = [
  { q: "What is the CiteWorks Studio methodology?", a: "An audit-led search visibility process for improving how companies appear across Google, AI answers, and trusted source environments. It combines SEO auditing, AI search analysis, embedding-level GEO, cosine gap analysis, citation architecture, technical SEO, entity clarity, content strategy, source-layer authority, and corrective-action execution." },
  { q: "How is this different from traditional SEO?", a: "Traditional SEO focuses mainly on rankings, traffic, keywords, and website optimization. CiteWorks Studio includes those things, but also analyzes AI answer visibility, prompt clusters, citation architecture, source-layer authority, entity clarity, and recommendation placement." },
  { q: "Do you only provide strategy, or do you execute too?", a: "Both. After the audit and roadmap, we can support technical SEO, content creation, content refreshes, citation architecture, source-layer authority, AI visibility improvements, reporting, and ongoing corrective action." },
  { q: "Who is this methodology best for?", a: "Growth-minded companies, high-consideration brands, category challengers, established companies in competitive markets, companies underrepresented in AI answers, and agencies serving higher-value clients." },
  { q: "How long does the audit take?", a: "Most Visibility Audits take 2–4 weeks depending on category complexity, prompt-cluster scope, and the depth of source-layer analysis required." },
];

const Methodology = () => {
  useEffect(() => {
    document.title = "Methodology | CiteWorks Studio — Audit-Led Search Visibility Process";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "The CiteWorks Studio methodology: audit-first, evidence-led, corrective-action search visibility process across Google, AI answers, and trusted source environments.");
  }, []);

  return (
    <PageShell>
      <PageHero
        eyebrow="Methodology"
        title="We find the visibility gaps. Then we fix them."
        body="Our methodology starts with evidence — Google rankings, AI answers, citation sources, competitor positioning, technical SEO, entity clarity, content structure, and source-layer authority. Then we build the corrective-action plan."
        ctas={
          <>
            <Button asChild className="group rounded-full font-mono text-[11px] tracking-[0.22em] bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-12 shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.5)]">
              <Link to="/request-audit">REQUEST A VISIBILITY AUDIT <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full font-mono text-[11px] tracking-[0.22em] border-foreground/15 hover:bg-foreground/5 px-7 h-12">
              <Link to="/services">EXPLORE SERVICES</Link>
            </Button>
          </>
        }
      />

      {/* Methodology summary + Answer capsule */}
      <section className="py-24 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Summary</p>
            <h2 className="display text-4xl sm:text-5xl mt-5 leading-tight">
              A connected visibility system, not a checklist of tactics.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-foreground/75 text-lg leading-relaxed">
            <p>
              The CiteWorks Studio methodology unifies SEO, GEO, AI search visibility, technical
              SEO, entity clarity, citation architecture, content strategy, and source-layer
              authority under one corrective-action diagnosis.
            </p>
            <div className="glass-strong rounded-2xl p-6 mt-8">
              <p className="font-mono text-[10px] tracking-[0.22em] text-primary mb-3">ANSWER CAPSULE</p>
              <p className="text-foreground/90">
                CiteWorks Studio uses an audit-led, evidence-first methodology to identify where a
                company is winning, losing, or missing visibility across Google, AI answers, and
                trusted source environments — then builds a prioritized corrective-action roadmap
                across SEO, GEO, citation architecture, technical SEO, content, and source-layer
                authority.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border/40">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionHeading
            eyebrow="Core principle"
            title="Audit first. Strategy second. Execution third."
            body="A good visibility program does not begin with a content calendar, link-building package, or generic SEO checklist. It begins with evidence."
          />
        </div>
      </section>

      <section className="py-24 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="The three-layer model"
            title="We analyze visibility across three connected layers."
            body="Search is no longer just a website ranking problem. Buyers and AI systems both rely on a wider evidence layer."
          />
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {layers.map((l) => (
              <div key={l.n} className="card-premium p-8 hover:border-primary/40 transition-colors">
                <p className="font-mono text-xs text-primary">{l.n}</p>
                <h3 className="display text-2xl mt-3">{l.title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{l.sub}</p>
                <ul className="mt-6 space-y-2">
                  {l.items.map((i) => (
                    <li key={i} className="text-sm text-foreground/80 flex gap-2">
                      <span className="text-primary">·</span>{i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Process"
            title="The CiteWorks Studio methodology, step by step."
            body="Every engagement is shaped by your market, category, competition, and the specific gaps we find. The core methodology follows a consistent eight-step process."
          />
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="card-premium p-8 hover:border-primary/40 transition-colors">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs text-primary">{s.n}</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Output</p>
                </div>
                <h3 className="display text-2xl mt-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{s.desc}</p>
                <p className="mt-5 pt-4 border-t border-border text-sm text-foreground/85">{s.out}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LLM-readable methodology table */}
      <section className="py-28 border-t border-border/40">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="LLM-readable summary"
            title="Methodology at a glance."
            body="A structured reference for buyers, internal teams, and AI systems summarizing each step, focus, and output."
            align="left"
          />
          <div className="mt-12 card-premium/30 overflow-hidden">
            <div className="grid grid-cols-12 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground bg-card/60 px-6 py-4 border-b border-border">
              <div className="col-span-4">Step</div>
              <div className="col-span-5">Focus</div>
              <div className="col-span-3 text-primary">Output</div>
            </div>
            {llmTable.map(([s, f, o], i) => (
              <div key={i} className={`grid grid-cols-12 px-6 py-5 text-sm gap-4 ${i < llmTable.length - 1 ? "border-b border-border" : ""}`}>
                <div className="col-span-4 font-medium text-foreground/95">{s}</div>
                <div className="col-span-5 text-foreground/70">{f}</div>
                <div className="col-span-3 text-foreground/85">{o}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 border-t border-border/40">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            eyebrow="Comparison"
            title="Traditional SEO process vs. CiteWorks Studio methodology"
            align="left"
          />
          <div className="mt-12 card-premium overflow-hidden">
            <div className="grid grid-cols-2 font-mono text-[11px] uppercase tracking-widest text-primary border-b border-border">
              <div className="p-5">Traditional SEO Process</div>
              <div className="p-5 border-l border-border">CiteWorks Studio Methodology</div>
            </div>
            {compare.map(([a, b], i) => (
              <div key={i} className={`grid grid-cols-2 ${i < compare.length - 1 ? "border-b border-border" : ""}`}>
                <div className="p-5 text-sm text-muted-foreground">{a}</div>
                <div className="p-5 text-sm text-foreground/90 border-l border-border">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best fit / not best fit */}
      <section className="py-28 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Best fit"
            title="Who this methodology is built for."
            align="left"
          />
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

      {/* Mid-page Audit CTA */}
      <section className="py-20 border-t border-border/40">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative glass-strong rounded-3xl border-gradient p-10 sm:p-14 overflow-hidden">
            <div className="absolute -top-32 -right-20 w-96 h-96 conic-ring opacity-50 pointer-events-none" />
            <div className="relative grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <p className="eyebrow">Ready to apply the methodology</p>
                <h2 className="display text-3xl sm:text-5xl mt-5 leading-[1.05]">
                  Run the methodology against your own visibility.
                </h2>
                <p className="mt-5 text-foreground/70 text-lg max-w-2xl leading-relaxed">
                  A Visibility Audit applies the eight-step process to your category, website,
                  competitors, AI presence, citations, and source environment.
                </p>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <Button asChild className="group rounded-full font-mono text-[11px] tracking-[0.22em] bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-12">
                  <Link to="/request-audit">REQUEST A VISIBILITY AUDIT <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 border-t border-border/40">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions about the methodology"
            align="left"
          />
          <Accordion type="single" collapsible className="mt-12">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`m-${i}`} className="border-border">
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

      <section className="py-32 border-t border-border/40 text-center grid-bg">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="display text-4xl sm:text-6xl">Ready to see where visibility is breaking down?</h2>
          <p className="mt-6 text-foreground/70 text-lg">
            Start with a Visibility Audit. We'll show you exactly where your company stands across
            Google, AI answers, citation sources, and competitor positioning.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild className="group rounded-full font-mono text-[11px] tracking-[0.22em] bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-12 shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.5)]">
              <Link to="/request-audit">REQUEST A VISIBILITY AUDIT <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full font-mono text-[11px] tracking-[0.22em] border-foreground/15 hover:bg-foreground/5 px-7 h-12">
              <Link to="/case-studies">VIEW CASE STUDIES</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Methodology;
