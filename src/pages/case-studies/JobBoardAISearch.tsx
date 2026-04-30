import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowLeft, Check, Quote, Sparkles, Target, BarChart3, Network, Search } from "lucide-react";
import { PageShell } from "@/components/landing/Shell";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const heroStats = [
  { value: "$8.79M", label: "Total est. monthly branded value" },
  { value: "+71%", label: "Brand mentions in AI Overviews" },
  { value: "2,791", label: "Keywords in Google's top 10" },
  { value: "100+", label: "Cited pages influenced" },
];

const valueBreakdown = [
  { label: "Organic keyword value", value: "$4,629,347.18", pct: 52.6 },
  { label: "LLM-cited pages value", value: "$4,167,953.10", pct: 47.4 },
];

const approach = [
  {
    n: "01",
    icon: Search,
    title: "Mapped AI visibility and citation sources",
    body: "We assessed how AI platforms referenced the brand and which sources most consistently influenced those answers. Our reporting tracked citation and mention patterns across AI Overviews, ChatGPT, Gemini, AI Mode, Perplexity, and Copilot — identifying the domains and discussion environments shaping AI-generated recommendations in the category.",
  },
  {
    n: "02",
    icon: BarChart3,
    title: "Tracked momentum month-over-month",
    body: "We tracked month-over-month movement to understand whether new activity increased brand mentions in AI answers — and by how much. This helped identify which topics, discussion formats, and source types were referenced more frequently across AI Overviews, ChatGPT, and Gemini. We also monitored whether citations were consolidating around more accurate, higher-trust sources, scaled what delivered measurable lift, and paused approaches that didn't.",
  },
  {
    n: "03",
    icon: Network,
    title: "Focused on the channels LLMs were already pulling from",
    body: "In the employment sector, conversation volume is enormous. Popular social forums were among the brand's top cited domains, so we focused on building positive perception on these platforms to influence the way LLMs talked about the brand. Instead of producing run-of-the-mill blog posts, CiteWorks Studio implemented an AI citation strategy focused on improving the brand's representation in high-intent, public discussions tied to top employment queries. Over time, these discussions became the most trusted context LLMs surfaced.",
  },
];

const measurement = [
  { h: "AI Share of Voice", b: "The brand's share of appearances relative to tracked competitors across AI answers." },
  { h: "Citations", b: "The URLs and sources AI platforms reference while generating responses, including online community forums where real users discuss pain points and comparisons." },
  { h: "Brand Mentions", b: "How often the brand is named in AI-generated answers." },
];

const outcomes = [
  "~400 citation-bearing engagements delivered in 4 months",
  "#6 average ranking position for all high-intent keywords in the Google SERPs",
  "71% increase in brand mentions in AI Overviews in a month, measured across 30,000+ tracked prompts",
  "2,791 keywords appearing in the top 10 results for priority queries",
  "100+ high-authority pages and discussion sources with improved citation context influencing AI answers",
];

const learn = [
  {
    q: "What is AI Citation Intelligence?",
    a: "AI citation intelligence is the process of measuring where AI platforms source their information and how frequently a brand is mentioned or referenced in AI-generated responses. Because LLMs synthesize across multiple sources, the sites and brands that appear repeatedly tend to influence how a topic or company is framed. This practice focuses on identifying which sources shape AI outputs and tracking brand visibility across different AI systems.",
  },
  {
    q: "What is Citation Architecture?",
    a: "Citation architecture describes the set of sources that consistently inform how AI systems talk about a brand, product, or topic. LLMs draw from websites, articles, forums, and public discussion, and the sources they rely on most often become the backbone of their answers. Building strong citation architecture means ensuring that accurate, credible, high-authority sources are the ones most likely to shape the way AI tools summarize and recommend a brand.",
  },
  {
    q: "What is Generative Engine Optimization?",
    a: "Generative engine optimization (GEO) is the practice of improving the chances that AI systems use and cite your brand or content when generating answers. While traditional SEO is centered on ranking pages in search results, GEO focuses on how LLMs retrieve, interpret, and combine information when responding to a question. The objective is to strengthen the content and sources AI systems rely on, so your brand is treated as a trusted reference in AI responses.",
  },
  {
    q: "What is AI Share of Voice?",
    a: "AI share of voice tracks how often a brand appears in AI-generated answers compared with competitors in the same category. It reflects visibility across AI platforms such as ChatGPT, Gemini, Claude, and Perplexity. Monitoring AI share of voice helps organizations see whether AI systems consistently include and recommend their brand for key queries — or whether competitor brands are showing up more often.",
  },
];

const auditCards = [
  {
    icon: Target,
    title: "Measurable, Repeatable Programme",
    body: "Build a durable foundation of credible citations that compounds over time and continues to influence AI answers as new queries emerge.",
  },
  {
    icon: Network,
    title: "Citation Architecture Review",
    body: "Identify which high-authority community sources are — and aren't — working in your favour across AI platforms.",
  },
  {
    icon: Sparkles,
    title: "AI Visibility Audit",
    body: "Understand exactly how LLMs are referencing your brand today and which sources are shaping those answers.",
  },
];

const JobBoardAISearch = () => {
  useEffect(() => {
    document.title = "Job Board AI Search Case Study | CiteWorks Studio";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "How a job posting platform secured a place in AI's shortlist for employers — a 5-month, 480-engagement campaign delivering an estimated $8.79M in monthly branded value, +71% AI Overview mentions, and 2,791 keywords in Google's top 10."
      );
    }
  }, []);

  return (
    <PageShell>
      {/* HERO */}
      <section className="relative pt-36 pb-24 overflow-hidden ambient-glow">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute -top-40 right-[-10%] w-[700px] h-[700px] conic-ring opacity-40 pointer-events-none float-y-slow" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 font-mono text-[13px] tracking-[0.14em] text-body hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="size-3.5" /> ALL CASE STUDIES
          </Link>

          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-6">
                <span className="font-mono text-[13px] tracking-[0.16em] text-body uppercase">
                  / Case Study · B2B SaaS · AI Visibility
                </span>
              </div>
              <p className="font-mono text-[13px] tracking-[0.16em] text-primary mb-4">CASE / 01</p>
              <h1 className="display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.98] tracking-tight">
                How a Job Posting Platform Secured a Place in{" "}
                <span className="text-gradient">AI's Shortlist</span> for Employers
              </h1>
              <p className="mt-8 text-lg text-body max-w-2xl leading-relaxed">
                In a 5-month campaign with close to 500 engagements, this program generated an
                estimated <strong className="text-foreground">$8,797,300.28</strong> in total monthly
                branded value — including $4.63M in organic keyword value and $4.17M in LLM-cited
                pages value.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 btn-glow px-7 h-14"
                >
                  <Link to="/request-audit">
                    REQUEST AN ENTERPRISE AUDIT
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] border-foreground/35 hover:bg-foreground/5 px-7 h-14"
                >
                  <a href="#results">JUMP TO RESULTS</a>
                </Button>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="card-premium p-6">
                <p className="font-mono text-[13px] tracking-[0.16em] text-subtle uppercase mb-5">
                  Engagement Snapshot
                </p>
                <dl className="space-y-4 text-sm">
                  <div className="flex justify-between gap-4 border-b border-border pb-3">
                    <dt className="text-body">Industry</dt>
                    <dd className="text-foreground font-medium text-right">Job Board / HR Tech</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-border pb-3">
                    <dt className="text-body">Duration</dt>
                    <dd className="text-foreground font-medium text-right">5 months</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-border pb-3">
                    <dt className="text-body">Engagements</dt>
                    <dd className="text-foreground font-medium text-right">~480</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-border pb-3">
                    <dt className="text-body">Surfaces</dt>
                    <dd className="text-foreground font-medium text-right">
                      AI Overviews, ChatGPT, Gemini, Perplexity, Google
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-body">Outcome</dt>
                    <dd className="text-foreground font-medium text-right">~$8.79M est. monthly value</dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* KEY OUTCOMES BAND */}
      <section id="results" className="py-16 border-t border-border/40">
        <div className="mx-auto max-w-[1400px] px-6">
          <p className="eyebrow mb-3">/ Key Outcomes</p>
          <h2 className="display text-3xl sm:text-4xl leading-tight tracking-tight max-w-3xl">
            Results at a glance.
          </h2>
          <p className="mt-4 text-body max-w-2xl">
            Top metrics from a 5-month campaign with 480 engagements.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {heroStats.map((s) => (
              <div
                key={s.label}
                className="relative card-premium p-7 overflow-hidden hover:border-primary/40 transition-all"
              >
                <div className="absolute -top-16 -right-10 w-40 h-40 conic-ring opacity-30 pointer-events-none" />
                <p className="display text-5xl text-gradient leading-none">{s.value}</p>
                <p className="text-sm text-body mt-4 leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Value breakdown bar */}
          <div className="mt-10 card-premium p-7">
            <div className="flex items-end justify-between flex-wrap gap-4 mb-6">
              <div>
                <p className="font-mono text-[13px] tracking-[0.16em] text-subtle uppercase">
                  Estimated monthly branded value
                </p>
                <p className="display text-3xl mt-2">$8,797,300.28</p>
              </div>
              <p className="text-xs text-body max-w-md font-mono">
                Directional estimate — tracked keyword visibility × combined monthly search volume,
                benchmarked against paid search value. Not exact attribution.
              </p>
            </div>
            <div className="flex h-3 w-full overflow-hidden rounded-full border border-border">
              <div
                className="bg-primary"
                style={{ width: `${valueBreakdown[0].pct}%` }}
                aria-label={valueBreakdown[0].label}
              />
              <div
                className="bg-foreground/70"
                style={{ width: `${valueBreakdown[1].pct}%` }}
                aria-label={valueBreakdown[1].label}
              />
            </div>
            <div className="mt-4 grid sm:grid-cols-2 gap-4 text-sm">
              {valueBreakdown.map((v, i) => (
                <div key={v.label} className="flex items-center gap-3">
                  <span
                    className={`size-2.5 rounded-full ${i === 0 ? "bg-primary" : "bg-foreground/70"}`}
                  />
                  <span className="text-body">{v.label}</span>
                  <span className="ml-auto font-medium text-foreground">{v.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MARKET CONTEXT */}
      <section className="py-24 border-t border-border/40">
        <div className="mx-auto max-w-[1400px] px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">/ Market Context</p>
            <h2 className="display text-3xl sm:text-5xl leading-[1.05]">
              Brand discovery was moving to AI — without them.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-body text-lg leading-relaxed">
            <p>
              When it comes to hiring, trust issues surface fast. Public conversations about fake
              listings, scams, and poor candidate experiences spread widely — making the platform's
              citation footprint a real risk point at the decision moment.
            </p>
            <p>
              Employers increasingly turned to Google AI Overviews, Gemini, and ChatGPT when
              choosing a job posting platform. These systems don't just rank pages — they synthesize
              recommendations from across the web, drawing heavily on high-authority public forums
              and online communities.
            </p>
            <p>
              The team recognized a structural risk: even a handful of prominent negative threads
              could disproportionately shape what AI systems repeated. Meanwhile, positive sentiment
              buried in low-visibility corners of the internet had no influence at all.
            </p>
            <p className="text-foreground font-medium">
              The core problem wasn't brand reputation in the traditional sense. It was citation
              architecture — which sources were being pulled into AI answers, and what those sources
              said.
            </p>
          </div>
        </div>
      </section>

      {/* THE CHALLENGE — measurement framework */}
      <section className="py-24 border-t border-border/40 bg-card/30">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">/ The Challenge</p>
            <h2 className="display text-3xl sm:text-5xl leading-[1.05]">
              A reliable way to measure and strengthen AI visibility.
            </h2>
            <p className="mt-6 text-body text-lg leading-relaxed">
              The team needed a repeatable measurement framework — and a partner that could deliver
              it as a measurable, repeatable program.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-4">
            {measurement.map((m) => (
              <div key={m.h} className="card-premium p-7">
                <h3 className="display text-xl leading-tight">{m.h}</h3>
                <p className="mt-4 text-sm text-body leading-relaxed">{m.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-24 border-t border-border/40">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="max-w-3xl mb-14">
            <p className="eyebrow mb-4">/ Our Approach</p>
            <h2 className="display text-3xl sm:text-5xl leading-[1.05]">What we did.</h2>
          </div>

          <div className="space-y-4">
            {approach.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.n}
                  className="card-premium p-8 sm:p-10 grid lg:grid-cols-12 gap-8 items-start hover:border-primary/40 transition-colors"
                >
                  <div className="lg:col-span-3 flex items-center gap-4">
                    <span className="font-mono text-[13px] tracking-[0.16em] text-primary">
                      STEP / {step.n}
                    </span>
                    <span className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-background">
                      <Icon className="size-5 text-primary" />
                    </span>
                  </div>
                  <div className="lg:col-span-9">
                    <h3 className="display text-2xl sm:text-3xl leading-tight">{step.title}</h3>
                    <p className="mt-4 text-body leading-relaxed">{step.body}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="py-24 border-t border-border/40 bg-card/30">
        <div className="mx-auto max-w-5xl px-6">
          <Quote className="size-10 text-primary mb-6" aria-hidden="true" />
          <blockquote className="display text-2xl sm:text-4xl leading-[1.15] tracking-tight">
            “The shift wasn't just in our rankings — it was in what AI systems were recommending
            when employers searched without knowing our name. That was a different kind of
            visibility, and it's the kind that matters now.”
          </blockquote>
          <footer className="mt-8 font-mono text-[13px] tracking-[0.16em] text-body uppercase">
            — VP of Marketing, Job Posting Platform
          </footer>
        </div>
      </section>

      {/* THE OUTCOME */}
      <section className="py-24 border-t border-border/40">
        <div className="mx-auto max-w-[1400px] px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">/ The Outcome</p>
            <h2 className="display text-3xl sm:text-5xl leading-[1.05]">
              Measurable, compounding results.
            </h2>
            <p className="mt-6 text-body leading-relaxed">
              The campaign delivered results across both traditional search and AI-generated
              discovery, reflecting how closely the two are now intertwined.
            </p>
            <p className="mt-4 text-body leading-relaxed">
              Importantly, the gains were not a one-time spike. By building a durable base of
              credible citations, the firm now has a self-reinforcing foundation — one that
              continues to influence AI answers as new queries emerge.
            </p>
            <Button
              asChild
              className="mt-8 rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 btn-glow px-7 h-14"
            >
              <Link to="/request-audit">
                REQUEST AN ENTERPRISE AUDIT
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            </Button>
          </div>
          <div className="lg:col-span-7">
            <ul className="card-premium p-2 divide-y divide-border">
              {outcomes.map((o) => (
                <li key={o} className="flex items-start gap-4 p-6">
                  <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="size-4" />
                  </span>
                  <p className="text-base text-foreground leading-relaxed">{o}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* AUDIT CTA SECTION (mid-page conversion) */}
      <section className="py-20 border-t border-border/40">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="relative glass-strong rounded-3xl border-gradient p-10 sm:p-14 overflow-hidden">
            <div className="absolute -top-32 -right-20 w-96 h-96 conic-ring opacity-50 pointer-events-none" />
            <div className="relative">
              <p className="eyebrow">/ Take the next step</p>
              <h2 className="display text-3xl sm:text-5xl mt-5 leading-[1.05] max-w-3xl">
                Want to understand your AI citation footprint?
              </h2>
              <p className="mt-5 text-body text-lg max-w-2xl">
                We start every enterprise engagement with a full audit. Three deliverables, one
                clear roadmap.
              </p>

              <div className="mt-10 grid md:grid-cols-3 gap-4">
                {auditCards.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div
                      key={c.title}
                      className="rounded-2xl border border-border bg-background/60 backdrop-blur-sm p-6 hover:border-primary/40 transition-colors"
                    >
                      <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                        <Icon className="size-5" />
                      </span>
                      <h3 className="text-base font-semibold leading-snug">{c.title}</h3>
                      <p className="mt-3 text-sm text-body leading-relaxed">{c.body}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 btn-glow px-7 h-14"
                >
                  <Link to="/request-audit">
                    REQUEST AN ENTERPRISE AUDIT
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] border-foreground/35 hover:bg-foreground/5 px-7 h-14"
                >
                  <Link to="/methodology">SEE THE METHODOLOGY</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEARN MORE */}
      <section className="py-24 border-t border-border/40 bg-card/30">
        <div className="mx-auto max-w-[1400px] px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4">/ Learn More</p>
            <h2 className="display text-3xl sm:text-4xl leading-tight tracking-tight">
              Understanding AI search visibility.
            </h2>
            <p className="mt-5 text-body leading-relaxed">
              AI search experiences create answers by pulling information from many places online
              and summarizing it into a single response. The concepts below explain how
              organizations track and improve how often they appear inside those AI-generated
              answers and recommendations.
            </p>
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {learn.map((l, i) => (
                <AccordionItem
                  key={l.q}
                  value={`item-${i}`}
                  className="border-b border-border last:border-0"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold py-6 hover:no-underline">
                    {l.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-body leading-relaxed pb-6 pr-8">
                    {l.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* AUTHOR */}
      <section className="py-20 border-t border-border/40">
        <div className="mx-auto max-w-5xl px-6">
          <div className="card-premium p-8 sm:p-10 flex flex-col sm:flex-row gap-8 items-start">
            <div className="shrink-0 size-20 rounded-full bg-gradient-to-br from-primary to-foreground/60 flex items-center justify-center text-2xl font-semibold text-primary-foreground">
              MH
            </div>
            <div>
              <p className="font-mono text-[13px] tracking-[0.16em] text-subtle uppercase mb-2">
                / About the Author
              </p>
              <h3 className="display text-2xl">Mark Huntley</h3>
              <p className="text-sm text-body mt-1">Founder &amp; Head of Agency, CiteWorks Studio</p>
              <p className="mt-5 text-body leading-relaxed">
                Mark Huntley, J.D. is the founder of CiteWorks Studio, a strategic advisory focused
                on visibility, authority, and recommendation presence in AI-shaped search
                environments. His work centers on embedding-level GEO, vector optimization, and
                cosine gap engineering — helping brands align their digital presence with the
                retrieval systems that increasingly shape discovery, interpretation, and choice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED / NAV */}
      <section className="py-16 border-t border-border/40">
        <div className="mx-auto max-w-[1400px] px-6 flex flex-wrap items-center justify-between gap-6">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 font-mono text-[13px] tracking-[0.14em] text-body hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-3.5" /> ALL CASE STUDIES
          </Link>
          <Link
            to="/request-audit"
            className="group inline-flex items-center gap-2 font-mono text-[13px] tracking-[0.14em] text-primary"
          >
            REQUEST AN ENTERPRISE AUDIT
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
};

export default JobBoardAISearch;
