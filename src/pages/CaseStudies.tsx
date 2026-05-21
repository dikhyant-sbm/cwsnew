import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Map,
  CheckCircle2,
  Building2,
  ArrowRight,
  Database,
  Target,
  Layers,
  Compass,
  Quote,
} from "lucide-react";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { StickyAuditCTA } from "@/components/landing/StickyAuditCTA";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

/* ---------------- Data ---------------- */

const overviewCards = [
  {
    icon: Map,
    label: "Independent market analysis",
    title: "AI Market Strategy",
    body:
      "Industry-level analysis powered by benchmark data. These case studies examine how AI systems recommend companies across a category, which brands are gaining shortlist visibility, and where competitors are winning buyer-intent prompts.",
    cta: "View market case studies",
    href: "#market-discovery",
  },
  {
    icon: CheckCircle2,
    label: "Client work",
    title: "Client Implementation Case Studies",
    body:
      "Real CiteWorks Studio engagements and outcomes. These case studies show how CiteWorks Studio improves AI visibility, search presence, citation footprint, and competitive positioning through measurable, repeatable programs.",
    cta: "View client results",
    href: "#client-results",
  },
  {
    icon: Building2,
    label: "Public company report, not client work",
    title: "AI Company Discovery Reports",
    body:
      "Company-specific readouts from the market data. These reports show how individual companies appear across selected high-intent AI prompt clusters, including where they earn positive recommendations, where visibility does not convert into recommendation credit, and where competitors can intercept demand.",
    cta: "View company reports",
    href: "#company-reports",
  },
];

const anchors = [
  { id: "market-discovery", label: "AI Market Strategy" },
  { id: "company-reports", label: "AI Company Discovery Reports" },
  { id: "client-results", label: "Client Implementation Case Studies" },
  { id: "methodology", label: "How to Read These Reports" },
];

const marketCases = [
  {
    title: "How AI Search Is Recommending Tax Relief Companies in 2026",
    excerpt:
      "A benchmark-based analysis of how AI systems surface, compare, and recommend tax relief companies across high-intent discovery, comparison, and decision-stage prompts — with remediation priorities for brands losing recommendation share.",
    type: "AI Market Strategy",
    source: "LLM Authority Index benchmark data",
    status: "Independent market analysis",
    href: "/case-studies/tax-relief-ai-market-discovery",
  },
  {
    title: "How AI Search Is Recommending AI Work Collaboration Platforms",
    excerpt:
      "An industry-level look at how AI systems compare collaboration platforms, where recommendation strength drops across buyer stages, and which source, content, and citation gaps may be shaping shortlist visibility.",
    type: "AI Market Strategy",
    source: "LLM Authority Index benchmark data",
    status: "Independent market analysis",
    href: "/case-studies/ai-work-collaboration-ai-market-discovery",
  },
];

const benchmarkLeft = [
  "Which brands are visible?",
  "Which brands are actually recommended?",
  "Which competitors win top-three positions?",
  "Which buyer-stage prompts carry the most risk?",
  "Which platforms produce different recommendation patterns?",
];

const benchmarkRight = [
  "Which content gaps are suppressing recommendation credit?",
  "Which citation sources need to be built or strengthened?",
  "Which comparison and pricing prompts need better coverage?",
  "Which third-party authority signals are missing?",
  "Which AI visibility fixes should be prioritized first?",
];

const slackMetrics = [
  { label: "Recommended top-three rate", value: "15.84%" },
  { label: "Rank-one recommendation rate", value: "13.60%" },
  { label: "Positive visibility", value: "24.72%" },
  { label: "Pricing-stage positive capture", value: "0.00%" },
];

const clientCases = [
  {
    title:
      "How an Insurance Technology Brand Strengthened Its AI Visibility and Citation Footprint",
    excerpt:
      "A client implementation case study showing how CiteWorks Studio improved the brand's presence across AI recommendation environments, citation-bearing sources, and high-intent search visibility.",
    type: "Client Implementation Case Study",
    work: "AI visibility, citation architecture, search visibility",
    status: "Client result",
    href: "/case-studies/client-results/insurance-tech-ai-visibility",
  },
];

const trustColumns = [
  {
    title: "Market intelligence",
    body:
      "AI Market Strategy analyses are benchmark-based examinations of how AI systems recommend, compare, and frame companies in a category. They are independent market analyses and should not be read as client engagements.",
  },
  {
    title: "Company readouts",
    body:
      "AI Company Discovery Reports are company-specific public readouts based on a limited scope of high-intent prompt clusters. They are designed to show directional recommendation patterns, not replace a full AI visibility audit.",
  },
  {
    title: "Client results",
    body:
      "Client Implementation Case Studies describe actual CiteWorks Studio work and should only include outcomes supported by client data, campaign data, search data, AI visibility data, or citation evidence.",
  },
];

/* ---------------- Building Blocks ---------------- */

const SectionEyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="eyebrow mb-5">{children}</p>
);

const Metadata = ({ items }: { items: { k: string; v: string }[] }) => (
  <dl className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-border pt-5">
    {items.map((i) => (
      <div key={i.k}>
        <dt className="font-mono text-[11px] tracking-[0.18em] uppercase text-tertiary">
          {i.k}
        </dt>
        <dd className="text-sm text-body mt-1.5 leading-snug">{i.v}</dd>
      </div>
    ))}
  </dl>
);

/* ---------------- Hero Visual ---------------- */

const HeroVisual = () => {
  const layers = [
    {
      eyebrow: "Layer 01 · Source",
      title: "LLM Authority Benchmark Data",
      chips: ["Recommendation signals", "Ranking signals", "Sentiment signals"],
    },
    {
      eyebrow: "Layer 02 · Interpretation",
      title: "CiteWorks Market Interpretation",
      chips: ["Citation footprint", "Buyer-stage prompts", "Competitive gaps"],
    },
    {
      eyebrow: "Layer 03 · Action",
      title: "Remediation & Implementation Priorities",
      chips: ["Content gaps", "Source authority", "Prompt coverage"],
    },
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-8 conic-ring opacity-30 pointer-events-none" />
      <div className="relative glass-strong rounded-2xl p-6 sm:p-7">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-primary" />
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-subtle">
              AI Discovery Intelligence
            </span>
          </div>
          <span className="font-mono text-[11px] text-tertiary">v.2026.Q1</span>
        </div>

        <div className="space-y-3">
          {layers.map((l, i) => (
            <div
              key={l.title}
              className="relative rounded-xl border border-border bg-card/70 p-4 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-primary">
                  {l.eyebrow}
                </span>
                <span className="font-mono text-[10.5px] text-tertiary">0{i + 1}</span>
              </div>
              <p className="text-[15px] font-semibold text-heading leading-snug">
                {l.title}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {l.chips.map((c) => (
                  <span
                    key={c}
                    className="font-mono text-[10.5px] tracking-wide text-body bg-secondary/70 border border-border rounded-full px-2 py-0.5"
                  >
                    {c}
                  </span>
                ))}
              </div>
              {i < layers.length - 1 && (
                <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 z-10">
                  <div className="size-5 rounded-full bg-background border border-border grid place-items-center">
                    <ArrowRight className="size-2.5 text-primary rotate-90" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            { k: "Prompts tracked", v: "1,240" },
            { k: "Citation sources", v: "8.6K" },
            { k: "Platforms", v: "6" },
          ].map((s) => (
            <div
              key={s.k}
              className="rounded-lg border border-border bg-background/60 p-3"
            >
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-tertiary">
                {s.k}
              </p>
              <p className="display text-xl mt-1">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ---------------- Page ---------------- */

const CaseStudies = () => {
  useScrollReveal();

  useEffect(() => {
    document.title =
      "AI Market Strategy & Client Results | CiteWorks Studio";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Explore CiteWorks Studio case studies, AI Market Strategy analyses, and company-level AI recommendation reports showing how brands appear across search, AI answers, citations, and buyer-intent prompts."
      );
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* ---------- 1. HERO ---------- */}
      <section className="relative pt-32 pb-24 overflow-hidden ambient-glow">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-[1400px] px-6">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-14 items-center">
            <div>
              <p className="eyebrow mb-6">/ Case Studies & AI Market Discovery</p>
              <h1 className="display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02]">
                Case Studies &{" "}
                <span className="text-gradient">AI Market Discovery</span> Reports
              </h1>
              <div className="mt-8 space-y-5 max-w-2xl text-body text-lg leading-relaxed">
                <p>
                  Buyers now discover brands in two places at once: traditional search
                  results and AI-generated recommendations.
                </p>
                <p>
                  This library shows both sides of that shift. Explore benchmark-based
                  AI Market Discovery Case Studies that reveal how entire industries are
                  being recommended, compared, and framed by AI systems — and client
                  implementation case studies that show how CiteWorks Studio helps
                  brands improve visibility, citation architecture, and
                  recommendation-stage presence.
                </p>
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] btn-glow"
                >
                  <a href="#market-discovery">
                    EXPLORE AI MARKET DISCOVERY CASE STUDIES
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em]"
                >
                  <a href="#client-results">VIEW CLIENT IMPLEMENTATION CASE STUDIES</a>
                </Button>
              </div>
              <p className="mt-8 text-sm text-subtle max-w-xl">
                Built for brands competing across search, AI answers, citations, and
                buyer-intent prompts.
              </p>
            </div>
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* ---------- 2. OVERVIEW ---------- */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="max-w-3xl">
            <SectionEyebrow>Content Library</SectionEyebrow>
            <h2 className="display text-3xl sm:text-4xl md:text-5xl leading-[1.08]">
              Three ways to understand AI discovery performance.
            </h2>
            <p className="mt-6 text-body text-lg leading-relaxed">
              CiteWorks Studio separates market intelligence from client results, so
              each asset has a clear purpose.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {overviewCards.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.title}
                  href={c.href}
                  className="card-premium p-8 flex flex-col group"
                >
                  <div className="flex items-center justify-between mb-7">
                    <div className="size-11 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center text-primary">
                      <Icon className="size-5" />
                    </div>
                    <span className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-tertiary text-right max-w-[55%]">
                      {c.label}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-heading leading-snug">
                    {c.title}
                  </h3>
                  <p className="mt-4 text-body leading-relaxed text-[15px] flex-1">
                    {c.body}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-1.5 font-mono text-[12px] font-semibold tracking-[0.14em] text-primary group-hover:gap-2.5 transition-all uppercase">
                    {c.cta} <ArrowUpRight className="size-3.5" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- 3. STICKY ANCHOR NAV ---------- */}
      <nav
        aria-label="Page sections"
        className="sticky top-16 z-30 border-y border-border bg-background/85 backdrop-blur-md"
      >
        <div className="mx-auto max-w-[1400px] px-6">
          <ul className="flex gap-1 overflow-x-auto no-scrollbar py-2">
            {anchors.map((a) => (
              <li key={a.id} className="shrink-0">
                <a
                  href={`#${a.id}`}
                  className="block px-4 py-2 rounded-full font-mono text-[11.5px] tracking-[0.14em] uppercase text-body hover:bg-secondary hover:text-heading transition-colors whitespace-nowrap"
                >
                  {a.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ---------- 4. AI MARKET DISCOVERY ---------- */}
      <section id="market-discovery" className="py-28 scroll-mt-32">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 mb-14">
            <div>
              <SectionEyebrow>AI Market Discovery Case Studies</SectionEyebrow>
              <h2 className="display text-3xl sm:text-4xl md:text-5xl leading-[1.08]">
                How AI systems are recommending entire markets.
              </h2>
            </div>
            <div className="space-y-5 text-body leading-relaxed">
              <p>
                AI search is changing how buyers form shortlists. In many categories,
                buyers are no longer moving directly from Google to a brand website.
                They are asking ChatGPT, Gemini, Perplexity, Copilot, Google AI Mode,
                and AI Overviews to compare providers, summarize reputation, explain
                pricing, and recommend the best fit.
              </p>
              <p>
                CiteWorks Studio AI Market Discovery Case Studies use benchmark data
                from LLM Authority Index to show what those recommendation environments
                mean commercially for companies in a category.
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 pt-3 text-[15px]">
                {[
                  "which companies are visible",
                  "which companies are actually recommended",
                  "which brands earn top-three and rank-one positions",
                  "how sentiment and framing affect buyer trust",
                  "which prompt clusters carry the most competitive risk",
                  "where citation architecture may influence AI answers",
                  "what brands need to fix to improve recommendation visibility",
                ].map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <span className="mt-2 size-1 rounded-full bg-primary shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-primary border border-primary/30 bg-primary/5 rounded-full px-3 py-1">
                  Independent market analysis · Not client work
                </span>
              </div>

              <div className="pt-4">
                <Button
                  asChild
                  className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] btn-glow"
                >
                  <Link to="/request-audit">SEE HOW AI IS RECOMMENDING YOUR MARKET</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {marketCases.map((c) => (
              <Link
                key={c.title}
                to={c.href}
                className="card-premium p-8 group flex flex-col"
              >
                <div className="flex items-center gap-2 mb-6">
                  <span className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-primary border border-primary/30 bg-primary/5 rounded-full px-2.5 py-1">
                    Market Discovery
                  </span>
                  <span className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-tertiary">
                    Benchmark-based
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-heading leading-tight">
                  {c.title}
                </h3>
                <p className="mt-4 text-body leading-relaxed text-[15px] flex-1">
                  {c.excerpt}
                </p>
                <Metadata
                  items={[
                    { k: "Type", v: c.type },
                    { k: "Source", v: c.source },
                    { k: "Status", v: c.status },
                  ]}
                />
                <span className="mt-6 inline-flex items-center gap-1.5 font-mono text-[12px] font-semibold tracking-[0.14em] text-primary group-hover:gap-2.5 transition-all uppercase">
                  Read case study <ArrowUpRight className="size-3.5" />
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-8 text-sm text-subtle font-mono">
            This analysis is based on benchmark data published by{" "}
            <a
              href="#"
              className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
              LLM Authority Index
            </a>
            .
          </p>
        </div>
      </section>

      {/* ---------- 5. BENCHMARK → REMEDIATION ---------- */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="relative rounded-3xl overflow-hidden border border-border bg-card">
            <div className="absolute inset-0 grid-bg-fine opacity-30 pointer-events-none" />
            <div className="absolute -top-32 -right-32 size-[500px] conic-ring opacity-40 pointer-events-none" />
            <div className="relative z-10 p-8 sm:p-12 lg:p-16">
              <div className="max-w-3xl">
                <SectionEyebrow>From Benchmark to Remediation</SectionEyebrow>
                <h2 className="display text-3xl sm:text-4xl md:text-5xl leading-[1.08]">
                  From benchmark insight to remediation priorities.
                </h2>
                <p className="mt-6 text-body text-lg leading-relaxed">
                  LLM Authority Index identifies how AI systems are recommending a
                  market. CiteWorks Studio translates those findings into the
                  commercial questions brands need to answer:
                </p>
              </div>

              <div className="mt-12 grid md:grid-cols-2 gap-5">
                <div className="rounded-2xl border border-border bg-background/60 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="size-9 rounded-lg bg-secondary border border-border grid place-items-center">
                      <Database className="size-4 text-primary" />
                    </div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-subtle">
                      Benchmark signals
                    </p>
                  </div>
                  <ul className="space-y-3.5">
                    {benchmarkLeft.map((b) => (
                      <li key={b} className="flex gap-3 text-body text-[15px]">
                        <Compass className="size-4 text-primary mt-1 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-primary/30 bg-primary/[0.04] p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="size-9 rounded-lg bg-primary/10 border border-primary/30 grid place-items-center">
                      <Target className="size-4 text-primary" />
                    </div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-primary">
                      CiteWorks remediation lens
                    </p>
                  </div>
                  <ul className="space-y-3.5">
                    {benchmarkRight.map((b) => (
                      <li key={b} className="flex gap-3 text-body text-[15px]">
                        <CheckCircle2 className="size-4 text-primary mt-1 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <Button
                  asChild
                  className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] btn-glow"
                >
                  <Link to="/request-audit">REQUEST AN AI VISIBILITY AUDIT</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 6. COMPANY REPORTS ---------- */}
      <section id="company-reports" className="py-28 scroll-mt-32 border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 mb-14">
            <div>
              <SectionEyebrow>AI Company Discovery Reports</SectionEyebrow>
              <h2 className="display text-3xl sm:text-4xl md:text-5xl leading-[1.08]">
                Company-level readouts from the same benchmark data.
              </h2>
            </div>
            <div className="space-y-5 text-body leading-relaxed">
              <p>
                Industry benchmarks show how a market is being recommended. AI Company
                Discovery Reports show how a specific company is positioned inside that
                market.
              </p>
              <p>
                Each report applies the same recommendation-quality lens to a limited
                public scope. The free version clearly states that it covers 3 of 10
                high-intent clusters, with broader prompt sampling, deeper citation
                tracing, and more complete platform analysis reserved for full
                engagements.
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 pt-3 text-[15px]">
                {[
                  "where it is visible",
                  "where it is positively recommended",
                  "where it is seen but not endorsed",
                  "where competitors win comparison or pricing prompts",
                  "which buyer-stage clusters need remediation",
                  "what CiteWorks would prioritize in a full engagement",
                ].map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <span className="mt-2 size-1 rounded-full bg-primary shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <span className="inline-flex font-mono text-[11px] tracking-[0.18em] uppercase text-primary border border-primary/30 bg-primary/5 rounded-full px-3 py-1 mt-2">
                Public market report · Not client work · Not a full audit
              </span>
            </div>
          </div>

          <Link
            to="/ai-company-reports/slack"
            className="card-premium p-8 sm:p-10 block group"
          >
            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-primary border border-primary/30 bg-primary/5 rounded-full px-2.5 py-1">
                    Company Discovery Report
                  </span>
                  <span className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-tertiary">
                    Public readout
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-heading leading-tight">
                  Slack AI Company Discovery Report
                </h3>
                <p className="mt-5 text-body leading-relaxed text-[16px]">
                  Slack shows strong broad discovery signals, but the pricing-stage
                  cluster shows neutral visibility without positive recommendation
                  capture. In the sample report, Slack had 15.84% recommended top-three
                  rate, 13.60% rank-one recommendation rate, and 24.72% positive
                  visibility, while the pricing cluster showed 11.43% neutral
                  visibility and 0.00% positive recommendation capture.
                </p>
                <Metadata
                  items={[
                    { k: "Type", v: "AI Company Discovery Report" },
                    { k: "Scope", v: "3 of 10 high-intent clusters" },
                    { k: "Status", v: "Public market readout" },
                  ]}
                />
                <span className="mt-7 inline-flex items-center gap-1.5 font-mono text-[12px] font-semibold tracking-[0.14em] text-primary group-hover:gap-2.5 transition-all uppercase">
                  View company report <ArrowUpRight className="size-3.5" />
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 content-start">
                {slackMetrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-border bg-background/70 p-5"
                  >
                    <p className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-tertiary leading-snug min-h-[28px]">
                      {m.label}
                    </p>
                    <p className="display text-3xl mt-2 text-gradient">{m.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ---------- 7. CLIENT IMPLEMENTATION ---------- */}
      <section
        id="client-results"
        className="py-28 scroll-mt-32 border-t border-border bg-card/30"
      >
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 mb-14">
            <div>
              <SectionEyebrow>Client Implementation Case Studies</SectionEyebrow>
              <h2 className="display text-3xl sm:text-4xl md:text-5xl leading-[1.08]">
                What CiteWorks Studio builds, improves, and measures.
              </h2>
            </div>
            <div className="space-y-5 text-body leading-relaxed">
              <p>
                These are the traditional CiteWorks Studio case studies: real
                engagements, real execution, and measurable outcomes.
              </p>
              <p>
                Where AI Market Discovery Case Studies show how a market is behaving,
                client implementation case studies show how CiteWorks Studio helps
                brands respond. These pages focus on the work delivered, the visibility
                problem being solved, and the measurable movement across AI
                recommendations, citations, source quality, search performance, and
                competitive positioning.
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 pt-3 text-[15px]">
                {[
                  "What changed in the market?",
                  "What did the brand need?",
                  "What did CiteWorks Studio do?",
                  "Which metrics improved?",
                  "What was the commercial takeaway?",
                ].map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Button
                  asChild
                  className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] btn-glow"
                >
                  <Link to="/request-audit">SEE HOW CITEWORKS IMPROVES AI DISCOVERY</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {clientCases.map((c) => (
              <Link
                key={c.title}
                to={c.href}
                className="card-premium p-8 group flex flex-col bg-background"
              >
                <div className="flex items-center gap-2 mb-6">
                  <span className="font-mono text-[10.5px] tracking-[0.16em] uppercase bg-primary text-primary-foreground rounded-full px-2.5 py-1">
                    Client Result
                  </span>
                  <span className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-tertiary">
                    Implementation
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-heading leading-tight">
                  {c.title}
                </h3>
                <p className="mt-4 text-body leading-relaxed text-[15px] flex-1">
                  {c.excerpt}
                </p>
                <Metadata
                  items={[
                    { k: "Type", v: c.type },
                    { k: "Work", v: c.work },
                    { k: "Status", v: c.status },
                  ]}
                />
                <span className="mt-6 inline-flex items-center gap-1.5 font-mono text-[12px] font-semibold tracking-[0.14em] text-primary group-hover:gap-2.5 transition-all uppercase">
                  Read case study <ArrowUpRight className="size-3.5" />
                </span>
              </Link>
            ))}

            <div className="card-premium p-8 flex flex-col items-start justify-center bg-background/60 border-dashed">
              <Layers className="size-6 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-heading">
                More client case studies in production.
              </h3>
              <p className="mt-3 text-body leading-relaxed text-[15px]">
                Engagements across financial services, insurance technology, consumer
                products, and B2B SaaS are being prepared for publication.
              </p>
              <Link
                to="/request-audit"
                className="mt-6 inline-flex items-center gap-1.5 font-mono text-[12px] font-semibold tracking-[0.14em] text-primary hover:gap-2.5 transition-all uppercase"
              >
                Discuss your engagement <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 8. METHODOLOGY / TRUST ---------- */}
      <section id="methodology" className="py-28 scroll-mt-32 border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="max-w-3xl mb-12">
            <SectionEyebrow>Methodology & Trust</SectionEyebrow>
            <h2 className="display text-3xl sm:text-4xl md:text-5xl leading-[1.08]">
              How to read these reports.
            </h2>
            <p className="mt-6 text-body text-lg leading-relaxed">
              CiteWorks Studio separates market intelligence from client results.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-2">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
              {trustColumns.map((t) => (
                <div key={t.title} className="p-7">
                  <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-primary mb-4">
                    {t.title}
                  </p>
                  <p className="text-body leading-relaxed text-[15px]">{t.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex gap-4 items-start max-w-4xl">
            <Quote className="size-5 text-primary mt-1 shrink-0" />
            <p className="text-subtle leading-relaxed text-[15px]">
              Recommendation metrics should be interpreted carefully. Mention volume is
              not the same as recommendation share, citation frequency is not the same
              as endorsement, and modeled commercial value is not realized revenue.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- 9. BOTTOM CTA ---------- */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="relative rounded-3xl overflow-hidden border border-border bg-gradient-to-br from-card via-background to-card">
            <div className="absolute inset-0 grid-bg-fine opacity-20 pointer-events-none" />
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 size-[700px] conic-ring opacity-50 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />

            <div className="relative z-10 p-8 sm:p-14 lg:p-20 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
              <div>
                <SectionEyebrow>Get Started</SectionEyebrow>
                <h2 className="display text-3xl sm:text-4xl md:text-5xl leading-[1.05]">
                  Want to know how AI systems are{" "}
                  <span className="text-gradient">recommending your brand?</span>
                </h2>
                <p className="mt-7 text-body text-lg leading-relaxed max-w-2xl">
                  CiteWorks Studio helps brands understand and improve how they appear
                  across AI-generated recommendations, search results, comparison
                  prompts, and citation-bearing sources.
                </p>
                <p className="mt-5 text-body leading-relaxed">
                  Request an AI Visibility Audit to see:
                </p>
                <ul className="mt-4 space-y-2.5 text-body text-[15px]">
                  {[
                    "where your brand appears",
                    "where competitors are recommended instead",
                    "which prompts carry the most commercial risk",
                    "which sources are shaping AI answers",
                    "what needs to change to improve recommendation-stage visibility",
                  ].map((i) => (
                    <li key={i} className="flex gap-2.5">
                      <ArrowRight className="size-4 text-primary mt-1 shrink-0" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-9 flex flex-wrap gap-3">
                  <Button
                    asChild
                    className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] btn-glow"
                  >
                    <Link to="/request-audit">REQUEST AN AI VISIBILITY AUDIT</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em]"
                  >
                    <a href="#market-discovery">
                      EXPLORE AI MARKET DISCOVERY CASE STUDIES
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="space-y-3">
                  {[
                    {
                      step: "01",
                      label: "Brand visibility",
                      body: "Where you appear across AI answers, citations, and search.",
                    },
                    {
                      step: "02",
                      label: "Recommendation gaps",
                      body: "Where competitors capture buyer-intent prompts.",
                    },
                    {
                      step: "03",
                      label: "Remediation plan",
                      body: "Prioritized fixes across content, citations, and sources.",
                    },
                  ].map((s, i) => (
                    <div
                      key={s.step}
                      className="glass rounded-2xl p-5 flex items-center gap-5 hover:border-primary/40 transition-colors"
                    >
                      <span className="font-mono text-[11px] tracking-[0.18em] text-primary">
                        {s.step}
                      </span>
                      <div className="flex-1">
                        <p className="font-semibold text-heading text-[15px]">
                          {s.label}
                        </p>
                        <p className="text-subtle text-[13.5px] mt-0.5 leading-snug">
                          {s.body}
                        </p>
                      </div>
                      {i < 2 && (
                        <ArrowRight className="size-4 text-primary shrink-0 rotate-90" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <StickyAuditCTA />
    </div>
  );
};

export default CaseStudies;
