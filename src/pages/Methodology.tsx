import { PageShell, PageHero, SectionHeading } from "@/components/landing/Shell";
import { DashboardShowcase } from "@/components/landing/DashboardShowcase";
import { TrustPledges } from "@/components/landing/TrustPledges";
import { VisibilityLayers } from "@/components/landing/VisibilityLayers";
import { VisibilityLoop } from "@/components/landing/VisibilityLoop";
import { MethodologyTimeline } from "@/components/landing/MethodologyTimeline";
import { SectionNav } from "@/components/landing/SectionNav";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import { useEffect } from "react";

const methodologyNav = [
  { id: "summary", label: "Summary" },
  { id: "principle", label: "Core principle" },
  { id: "layers", label: "Three layers" },
  { id: "loop", label: "Visibility loop" },
  { id: "process", label: "Process" },
  { id: "table", label: "At a glance" },
  { id: "different", label: "What's different" },
  { id: "comparison", label: "vs. Traditional SEO" },
  { id: "fit", label: "Best fit" },
  { id: "audit", label: "Visibility Audit" },
  { id: "faq", label: "FAQ" },
];

const principleSignals = [
  "Google rankings",
  "AI-generated answers",
  "AI Overviews",
  "ChatGPT-style recommendation behavior",
  "Perplexity-style cited answers",
  "Competitor visibility",
  "Technical SEO",
  "Schema and entity clarity",
  "Citation sources",
  "Review and comparison environments",
  "Social and video surfaces",
  "Content structure",
  "Source-layer authority",
];

const steps = [
  { n: "01", title: "Map the Market", desc: "Identify the high-intent keywords, buyer questions, prompt clusters, competitors, category language, comparison topics, review environments, trusted industry sources, decision-stage content, and search and AI answer patterns shaping your category.", out: "A clear map of the search and AI environments that matter most to your company." },
  { n: "02", title: "Benchmark Current Visibility", desc: "Measure how your company appears in Google, AI-generated answers, AI Overviews, brand and competitor mentions, recommendation placement, cited source patterns, traffic-driving pages, high-intent SERPs, and owned and third-party visibility.", out: "A visibility baseline showing where your company is strong, weak, absent, or under-supported." },
  { n: "03", title: "Analyze Retrieval & Cosine Gaps", desc: "Analyze embedding-level GEO signals, vector relevance, semantic alignment, entity relationships, topical coverage, cited-page patterns, competitor content structures, category-defining language, missing concepts, and weak associations.", out: "A retrieval-gap and cosine-gap analysis showing where your company needs stronger semantic alignment." },
  { n: "04", title: "Audit the Owned Foundation", desc: "Audit technical SEO, crawlability, indexation, schema, internal linking, page structure, service page clarity, content hierarchy, metadata, entity signals, conversion paths, and content quality.", out: "A prioritized list of technical, structural, and on-page improvements." },
  { n: "05", title: "Build the Citation Architecture", desc: "Identify the third-party articles, directories, review platforms, comparison pages, YouTube results, social profiles, industry publications, community discussions, and competitor source support that influence your visibility.", out: "A source-layer roadmap showing where your company needs stronger public evidence." },
  { n: "06", title: "Create the Corrective-Action Roadmap", desc: "Sequence pages to create or refresh, technical fixes, schema improvements, sources to pursue, content to restructure, social and video assets, AI visibility gaps, prompt-cluster targeting, and reporting priorities — by visibility impact.", out: "A prioritized corrective-action plan tied to visibility impact." },
  { n: "07", title: "Execute Across the Full Search Environment", desc: "Support technical SEO implementation, schema, content production and refreshes, service page optimization, citation architecture execution, source-layer research, social and video content, AI visibility improvements, internal linking, and reporting.", out: "A connected execution program across Google, AI answers, and trusted source environments." },
  { n: "08", title: "Measure Movement and Iterate", desc: "Track Google rankings, high-intent keyword movement, AI answer visibility, recommendation placement, brand mentions, cited sources, competitor movement, citation strength, content performance, qualified traffic, source-layer improvements, and prompt-cluster visibility.", out: "A clearer view of what changed, what still needs work, and what to improve next." },
];

const llmTable = [
  ["Market mapping", "Category understanding", "Shows where buyers and AI systems look for answers"],
  ["Visibility benchmarking", "Search and AI baseline", "Shows where your company appears or disappears"],
  ["Retrieval gap analysis", "AI visibility", "Identifies why your company may not be retrieved or recommended"],
  ["Cosine gap analysis", "Semantic alignment", "Shows where competitors are better aligned with category language"],
  ["Owned-site audit", "Website clarity", "Helps search engines and AI systems understand your site"],
  ["Citation architecture", "Source support", "Strengthens the evidence layer around your company"],
  ["Corrective-action roadmap", "Prioritization", "Shows what to fix first"],
  ["Full-environment execution", "Visibility improvement", "Turns findings into real changes"],
  ["Measurement and iteration", "Ongoing progress", "Tracks whether visibility is improving"],
];

const compare = [
  ["Starts with keywords", "Starts with market, keyword, prompt, and source mapping"],
  ["Focuses mainly on rankings", "Measures rankings, AI answers, citations, and recommendation visibility"],
  ["Builds content calendars", "Builds corrective-action roadmaps from visibility gaps"],
  ["Treats third-party mentions as PR", "Treats third-party sources as citation architecture"],
  ["Reports traffic and rankings", "Reports search visibility, AI visibility, citation support, and competitor gaps"],
  ["Optimizes for pages", "Optimizes for pages, entities, sources, semantic alignment, and retrieval"],
  ["Separates SEO and AI search", "Connects SEO, GEO, AI search, content, and authority signals"],
];

const bestFit = [
  "Growth-minded companies",
  "High-consideration brands",
  "Category challengers",
  "Established companies in competitive markets",
  "Companies underrepresented in AI answers",
  "Companies losing visibility to competitors",
  "Companies with complex buyer journeys",
  "Agencies serving higher-value clients",
];

const notFit = [
  "Companies looking for cheap SEO tasks",
  "Businesses that only want isolated blog posts",
  "Teams unwilling to improve their website, content, or source footprint",
  "Companies that want reporting without corrective action",
];

const auditIncludes = [
  "Google visibility review",
  "AI answer visibility review",
  "Prompt and keyword cluster mapping",
  "Competitor visibility analysis",
  "Citation source review",
  "Technical SEO review",
  "Schema and entity clarity review",
  "Content structure analysis",
  "Cosine and retrieval gap analysis",
  "Source-layer authority review",
  "Corrective-action roadmap",
];

const faqs = [
  { q: "What is the CiteWorks Studio methodology?", a: "The CiteWorks Studio methodology is an audit-led process for improving visibility across Google, AI answers, and trusted source environments. It combines SEO auditing, AI search analysis, embedding-level GEO, citation architecture, technical SEO, content strategy, and corrective-action execution." },
  { q: "Why do you start with a Visibility Audit?", a: "We start with a Visibility Audit because modern search visibility can break in many places. The issue may be rankings, technical SEO, content structure, AI retrieval, weak citations, unclear entities, competitor source strength, or missing authority signals. The audit shows what needs to be fixed first." },
  { q: "What is a retrieval gap?", a: "A retrieval gap is the difference between where your company should appear and where search engines or AI systems actually retrieve it. Retrieval gaps often happen because of unclear content, weak source support, missing entities, poor category association, or stronger competitor signals." },
  { q: "What is a cosine gap?", a: "A cosine gap is the semantic distance between how your company wants to be understood and how AI systems appear to compare your company against competitors, cited sources, and category-defining content." },
  { q: "How is this different from traditional SEO?", a: "Traditional SEO focuses mainly on rankings, traffic, keywords, and website optimization. CiteWorks Studio includes those things, but also analyzes AI answer visibility, prompt clusters, citation architecture, source-layer authority, entity clarity, and recommendation placement." },
  { q: "Do you only provide strategy, or do you execute too?", a: "CiteWorks Studio can provide both strategy and execution. After the audit and roadmap, we can support technical SEO, content creation, content refreshes, citation architecture, source-layer authority, AI visibility improvements, reporting, and ongoing corrective action." },
  { q: "Who is this methodology best for?", a: "This methodology is best for growth-minded companies, high-consideration brands, category challengers, established companies in competitive markets, and agency partners that need stronger visibility across Google, AI answers, and trusted source environments." },
];

const Methodology = () => {
  useEffect(() => {
    document.title = "CiteWorks Studio Methodology | GEO, AI Search Visibility, and Citation Architecture";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "See how CiteWorks Studio helps growth-minded companies improve visibility across Google, AI answers, and trusted source environments through visibility audits, GEO, citation architecture, technical SEO, content strategy, and corrective-action execution.");
  }, []);

  return (
    <PageShell>
      <PageHero
        eyebrow="Methodology"
        title="We find the visibility gaps. Then we fix them."
        body="CiteWorks Studio helps growth-minded companies improve how they are found, cited, compared, and recommended across Google, AI answers, and the source environments that shape buyer decisions. Our methodology starts with evidence — analyzing where your company stands across organic search, AI-generated answers, citation sources, competitor positioning, technical SEO, entity clarity, content structure, and source-layer authority. Then we build the corrective-action plan."
        ctas={
          <>
            <Button asChild className="group rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-14 shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.5)]">
              <Link to="/request-audit">REQUEST A VISIBILITY AUDIT <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] border-foreground/30 hover:bg-foreground/5 px-7 h-14">
              <Link to="/services">EXPLORE SERVICES</Link>
            </Button>
          </>
        }
      />

      <div className="mx-auto max-w-4xl px-6 -mt-8">
        <p className="text-center text-sm text-body italic">
          Built for companies where search visibility, trust, comparison, and recommendation strength directly affect growth.
        </p>
      </div>

      {/* Dashboard: Closed-Loop methodology */}
      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-6 reveal-on-scroll">
          <DashboardShowcase dashboard="closed-loop" size="lg" showCaption />
        </div>
      </section>

      {/* Body wrapper with sticky in-page nav */}
      <div className="mx-auto max-w-7xl px-6 lg:grid lg:grid-cols-12 lg:gap-10">
        <aside className="lg:col-span-3">
          <SectionNav items={methodologyNav} />
        </aside>

        <div className="lg:col-span-9 min-w-0">
          {/* Methodology summary + Answer capsule */}
          <section id="summary" className="py-20 border-t border-border/40 scroll-mt-24">
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5">
                <p className="eyebrow">Summary</p>
                <h2 className="display text-4xl sm:text-5xl mt-5 leading-tight">
                  Modern search visibility breaks in more than one place.
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-5 text-body text-lg leading-relaxed">
                <p>
                  Most companies do not lose visibility for one simple reason. Sometimes the issue
                  is technical SEO. Sometimes the content is not structured clearly enough.
                  Sometimes competitors have stronger third-party source support. Sometimes AI
                  systems recognize the company but do not recommend it. Sometimes the brand ranks
                  in Google but disappears from AI answers. Sometimes the company has real
                  authority, but machines cannot clearly interpret it.
                </p>
                <p>
                  That is why CiteWorks Studio does not start with random deliverables. We start by
                  diagnosing the full visibility environment, then build the work around the real
                  bottlenecks.
                </p>
                <div className="glass-strong rounded-2xl p-6 mt-8">
                  <p className="font-mono text-[13px] tracking-[0.16em] text-primary mb-3">ANSWER CAPSULE</p>
                  <p className="text-body">
                    The CiteWorks Studio methodology is an audit-led search visibility process for
                    improving how companies appear across Google, AI answers, and trusted source
                    environments. It combines SEO auditing, AI search analysis, embedding-level GEO,
                    cosine gap analysis, citation architecture, technical SEO, entity clarity,
                    content strategy, source-layer authority, and corrective-action execution. The
                    goal is to help companies become easier to find, cite, compare, and recommend.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="principle" className="py-20 border-t border-border/40 scroll-mt-24">
            <div className="max-w-3xl">
              <SectionHeading
                eyebrow="Core principle"
                title="Audit first. Strategy second. Execution third."
                body="A good visibility program should not begin with a content calendar, link-building package, or generic SEO checklist. It should begin with evidence. Before we recommend what to publish, optimize, cite, refresh, restructure, or promote, we need to understand where visibility is breaking down."
                align="left"
              />
            </div>
            <p className="mt-8 text-body leading-relaxed max-w-3xl">
              That means looking at the full search environment:
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {principleSignals.map((s) => (
                <li key={s} className="border border-border rounded-xl p-3 bg-card/30 flex gap-2 items-start text-sm text-body">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 font-mono text-[13px] tracking-[0.14em] text-primary uppercase">
              Once the evidence is clear, the execution plan becomes much sharper.
            </p>
          </section>

          {/* New: three-layer visual */}
          <section id="layers" className="border-t border-border/40 scroll-mt-24">
            <VisibilityLayers variant="compact" />
          </section>

          {/* New: interactive visibility loop */}
          <section id="loop" className="border-t border-border/40 scroll-mt-24">
            <VisibilityLoop compact />
          </section>

          <section id="process" className="py-24 border-t border-border/40 scroll-mt-24">
            <SectionHeading
              eyebrow="Process"
              title="The CiteWorks Studio methodology, step by step."
              body="Every engagement is shaped by the market, category, competition, and visibility gaps we find. But the core methodology follows a consistent eight-step process."
              align="left"
            />
            <div className="mt-12">
              <MethodologyTimeline steps={steps} />
            </div>
          </section>

          <section id="table" className="py-24 border-t border-border/40 scroll-mt-24">
            <SectionHeading
              eyebrow="LLM-readable summary"
              title="What each methodology step improves."
              body="A structured reference for buyers, internal teams, and AI systems summarizing each step, what it improves, and why it matters."
              align="left"
            />
            <div className="mt-10 card-premium overflow-hidden">
              <div className="grid grid-cols-12 font-mono text-[13px] tracking-[0.16em] uppercase text-body bg-card/60 px-6 py-4 border-b border-border">
                <div className="col-span-4">Methodology Step</div>
                <div className="col-span-3">What It Improves</div>
                <div className="col-span-5 text-primary">Why It Matters</div>
              </div>
              {llmTable.map(([s, f, o], i) => (
                <div key={i} className={`grid grid-cols-12 px-6 py-5 text-sm gap-4 ${i < llmTable.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="col-span-4 font-medium text-primary">{s}</div>
                  <div className="col-span-3 text-body">{f}</div>
                  <div className="col-span-5 text-body">{o}</div>
                </div>
              ))}
            </div>
          </section>

          <section id="different" className="py-24 border-t border-border/40 scroll-mt-24">
            <SectionHeading
              eyebrow="What's different"
              title="This is not just SEO. It is search visibility engineering."
              align="left"
            />
            <div className="mt-6 max-w-3xl space-y-5 text-body text-lg leading-relaxed">
              <p>
                Traditional SEO still matters. Rankings, technical structure, content quality, and
                site authority are still important. But modern search visibility is broader.
              </p>
              <p>
                Your company also needs to be understood by AI systems, supported by credible
                sources, associated with the right category language, and visible in the
                environments buyers use to validate decisions.
              </p>
              <p>
                That is why CiteWorks Studio connects SEO, GEO, citation architecture, content
                strategy, technical optimization, source-layer authority, and AI market intelligence
                under one methodology.
              </p>
            </div>
          </section>

          <section id="comparison" className="py-24 border-t border-border/40 scroll-mt-24">
            <SectionHeading
              eyebrow="Comparison"
              title="Traditional SEO process vs. CiteWorks Studio methodology."
              align="left"
            />
            <div className="mt-10 card-premium overflow-hidden">
              <div className="grid grid-cols-2 font-mono text-[13px] uppercase tracking-widest text-primary border-b border-border">
                <div className="p-5">Traditional SEO Process</div>
                <div className="p-5 border-l border-border">CiteWorks Studio Methodology</div>
              </div>
              {compare.map(([a, b], i) => (
                <div key={i} className={`grid grid-cols-2 ${i < compare.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="p-5 text-sm text-body">{a}</div>
                  <div className="p-5 text-sm text-body border-l border-border">{b}</div>
                </div>
              ))}
            </div>
          </section>

          <section id="fit" className="py-24 border-t border-border/40 scroll-mt-24">
            <SectionHeading
              eyebrow="Best fit"
              title="Who this methodology is built for."
              body="CiteWorks Studio is built for growth-minded companies and agency partners that need visibility to support real business growth. You do not need to be an enterprise company. You do need a market where search visibility, trust, comparison, and recommendation placement matter."
              align="left"
            />
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              <div className="border border-border rounded-2xl p-8 bg-card/30">
                <p className="font-mono text-[13px] tracking-[0.16em] text-primary mb-5">BEST FIT</p>
                <ul className="space-y-3">
                  {bestFit.map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-body">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
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
                      <span className="text-body mt-0.5" aria-hidden="true">—</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Visibility Audit CTA */}
          <section id="audit" className="py-16 border-t border-border/40 scroll-mt-24">
            <div className="relative glass-strong rounded-3xl border-gradient p-8 sm:p-12 overflow-hidden">
              <div className="absolute -top-32 -right-20 w-96 h-96 conic-ring opacity-50 pointer-events-none" />
              <div className="relative grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7">
                  <p className="eyebrow">Visibility Audit</p>
                  <h2 className="display text-3xl sm:text-4xl mt-5 leading-[1.05]">
                    Start with a Visibility Audit.
                  </h2>
                  <p className="mt-5 text-body leading-relaxed">
                    Before you invest in more content, SEO, GEO, or authority-building, find out
                    where your visibility is actually breaking down. The CiteWorks Visibility Audit
                    shows where your company stands across Google rankings, AI answers, citation
                    sources, competitor positioning, technical SEO, content structure, entity
                    clarity, source-layer authority, and retrieval alignment. Then we turn the
                    findings into a practical roadmap for improving visibility, retrieval, and
                    recommendation strength.
                  </p>
                  <Button asChild className="mt-8 group rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-14">
                    <Link to="/request-audit">REQUEST A VISIBILITY AUDIT <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" /></Link>
                  </Button>
                </div>
                <div className="lg:col-span-5">
                  <p className="font-mono text-[13px] tracking-[0.16em] text-primary mb-4">AUDIT INCLUDES</p>
                  <ul className="grid grid-cols-1 gap-2">
                    {auditIncludes.map((a) => (
                      <li key={a} className="flex gap-2 items-start text-sm text-body">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="faq" className="py-24 border-t border-border/40 scroll-mt-24">
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions about the CiteWorks Studio methodology."
              align="left"
            />
            <Accordion type="single" collapsible className="mt-10">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`m-${i}`} className="border-border">
                  <AccordionTrigger className="text-left text-lg font-medium hover:text-primary hover:no-underline py-6">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-body leading-relaxed pb-6">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </div>

      <TrustPledges />

      <section className="py-32 border-t border-border/40 text-center grid-bg">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="display text-4xl sm:text-6xl">Find out what is limiting your visibility.</h2>
          <p className="mt-6 text-body text-lg">
            Your company may already have strong expertise, useful content, and real authority. The
            question is whether Google, AI systems, third-party sources, and buyers can clearly
            recognize it. CiteWorks Studio helps growth-minded companies close the gap between what
            they publish and what modern search systems actually retrieve, cite, and recommend.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild className="group rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 btn-glow px-7 h-14">
              <Link to="/request-audit">REQUEST A VISIBILITY AUDIT <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] border-foreground/30 hover:bg-foreground/5 px-7 h-14">
              <Link to="/services">EXPLORE SERVICES</Link>
            </Button>
          </div>
          <p className="mt-6 text-xs text-body">
            Audit-led corrective action. No guaranteed rankings or AI placements — evidence-led improvement instead.
          </p>
        </div>
      </section>
    </PageShell>
  );
};

export default Methodology;
