import { PageShell, PageHero, SectionHeading } from "@/components/landing/Shell";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

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
  { n: "03", title: "Analyze Retrieval Gaps", desc: "Identify where your content, entities, sources, and authority signals are not matching what AI systems retrieve.", out: "A retrieval-gap and cosine-gap analysis." },
  { n: "04", title: "Audit the Owned Foundation", desc: "Make sure your website can be crawled, understood, and trusted by both search engines and AI systems.", out: "A technical, structural, and entity clarity review." },
  { n: "05", title: "Build Citation Architecture", desc: "Identify which owned and third-party sources need to exist, improve, or reinforce your authority.", out: "A source-layer roadmap." },
  { n: "06", title: "Prioritize Corrective Action", desc: "Sequence the work by visibility impact across SEO, GEO, content, technical SEO, and source-layer authority.", out: "A prioritized corrective-action plan." },
  { n: "07", title: "Execute Across the Full Search Environment", desc: "Improve technical SEO, content, schema, citation architecture, and AI visibility — connected to one diagnosis.", out: "A connected execution program." },
  { n: "08", title: "Measure Movement and Iterate", desc: "Track whether your company is becoming easier to find, cite, compare, and recommend.", out: "Ongoing visibility intelligence and reporting." },
];

const compare = [
  ["Starts with keywords", "Starts with market, keyword, prompt, and source mapping"],
  ["Focuses mainly on rankings", "Measures rankings, AI answers, citations, and recommendation visibility"],
  ["Treats off-site mentions as PR", "Treats third-party sources as citation architecture"],
  ["Separates SEO, content, and authority", "Connects SEO, GEO, content, technical structure, and AI search authority"],
  ["Measures what happened", "Identifies what needs to change next"],
];

const faqs = [
  { q: "What is the CiteWorks Studio methodology?", a: "An audit-led search visibility process for improving how companies appear across Google, AI answers, and trusted source environments. It combines SEO auditing, AI search analysis, embedding-level GEO, cosine gap analysis, citation architecture, technical SEO, entity clarity, content strategy, source-layer authority, and corrective-action execution." },
  { q: "How is this different from traditional SEO?", a: "Traditional SEO focuses mainly on rankings, traffic, keywords, and website optimization. CiteWorks Studio includes those things, but also analyzes AI answer visibility, prompt clusters, citation architecture, source-layer authority, entity clarity, and recommendation placement." },
  { q: "Do you only provide strategy, or do you execute too?", a: "Both. After the audit and roadmap, we can support technical SEO, content creation, content refreshes, citation architecture, source-layer authority, AI visibility improvements, reporting, and ongoing corrective action." },
  { q: "Who is this methodology best for?", a: "Growth-minded companies, high-consideration brands, category challengers, established companies in competitive markets, companies underrepresented in AI answers, and agencies serving higher-value clients." },
];

const Methodology = () => (
  <PageShell>
    <PageHero
      eyebrow="Methodology"
      title="We find the visibility gaps. Then we fix them."
      body="Our methodology starts with evidence — Google rankings, AI answers, citation sources, competitor positioning, technical SEO, entity clarity, content structure, and source-layer authority. Then we build the corrective-action plan."
      ctas={
        <>
          <Button asChild className="rounded-full font-mono text-xs tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-12">
            <Link to="/request-audit">REQUEST A VISIBILITY AUDIT</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full font-mono text-xs tracking-widest border-foreground/20 hover:bg-foreground/5 px-7 h-12">
            <Link to="/#services">EXPLORE SERVICES</Link>
          </Button>
        </>
      }
    />

    <section className="py-20 border-t border-border/40">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Core principle"
          title="Audit first. Strategy second. Execution third."
          body="A good visibility program should not begin with a content calendar, link-building package, or generic SEO checklist. It should begin with evidence."
        />
      </div>
    </section>

    <section className="py-20 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="The three-layer model"
          title="We analyze visibility across three connected layers."
          body="Search is no longer just a website ranking problem. Buyers and AI systems both rely on a wider evidence layer."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {layers.map((l) => (
            <div key={l.n} className="rounded-2xl border border-border/60 bg-card p-8 hover:border-primary/40 transition-colors">
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
          body="Every engagement is shaped by your market, category, competition, and the specific gaps we find. The core methodology follows a consistent process."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border/60 bg-card p-8 hover:border-primary/40 transition-colors">
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

    <section className="py-28 border-t border-border/40">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Comparison"
          title="Traditional SEO process vs. CiteWorks Studio methodology"
        />
        <div className="mt-12 rounded-2xl border border-border/60 bg-card overflow-hidden">
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

    <section className="py-28 border-t border-border/40">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions about the methodology"
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

    <section className="py-32 border-t border-border/40 text-center">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="display text-4xl sm:text-6xl">Ready to see where visibility is breaking down?</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button asChild className="rounded-full font-mono text-xs tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-12">
            <Link to="/request-audit">REQUEST A VISIBILITY AUDIT</Link>
          </Button>
        </div>
      </div>
    </section>
  </PageShell>
);

export default Methodology;
