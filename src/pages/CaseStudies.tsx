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

const pillars = [
  {
    icon: Map,
    label: "Benchmark-led market intelligence",
    title: "AI Market Discovery Action Reports",
    body:
      "Category-level analyses powered by LLM Authority Index. Each report summarizes how AI systems recommend a market, why it matters for buyer discovery, what's likely causing the gap, what CiteWorks Studio would prioritize fixing, and the actionable plays brands can implement to lift LLM visibility.",
    sectionHref: "#market-discovery",
    directoryHref: "/case-studies/ai-market-discovery",
    directoryLabel: "Explore all market reports",
  },
  {
    icon: CheckCircle2,
    label: "Real CiteWorks engagements",
    title: "Client Implementation Case Studies",
    body:
      "Documented CiteWorks Studio engagements with measurable outcomes across AI recommendation share, citation footprint, source authority, search visibility, and competitive positioning — the work delivered, the problem solved, and the metrics that moved.",
    sectionHref: "#client-results",
    directoryHref: "/case-studies/client-results",
    directoryLabel: "Explore all client case studies",
  },
  {
    icon: Building2,
    label: "Company-level readouts",
    title: "AI Company Market Strategy Reports",
    body:
      "Company-specific readouts built from the same LLM Authority Index benchmark data. Each report shows where a brand is visible, where it earns positive recommendations, where competitors intercept demand, and what CiteWorks would prioritize in a full engagement.",
    sectionHref: "#company-reports",
    directoryHref: "/case-studies/ai-company-reports",
    directoryLabel: "Explore all company reports",
  },
];

const anchors = [
  { id: "market-discovery", label: "AI Market Discovery Action Reports" },
  { id: "company-reports", label: "AI Company Market Strategy Reports" },
  { id: "client-results", label: "Client Implementation Case Studies" },
  { id: "methodology", label: "How to Read These Reports" },
];

const reportAnatomy = [
  {
    step: "01",
    title: "Benchmark summary",
    body:
      "The LLM Authority Index findings for the category — recommendation share, top-three capture, rank-one positions, sentiment, and platform-by-platform variance.",
  },
  {
    step: "02",
    title: "Why it matters for buyer discovery",
    body:
      "How those benchmark signals translate into commercial risk: where shortlists are being formed inside AI answers, and where buyer trust is being awarded or withheld.",
  },
  {
    step: "03",
    title: "Likely causes of the gap",
    body:
      "A diagnostic read on what's suppressing recommendation credit — content coverage, citation footprint, entity clarity, third-party authority, or prompt-cluster blind spots.",
  },
  {
    step: "04",
    title: "What CiteWorks would prioritize fixing",
    body:
      "The remediation sequence CiteWorks Studio would run first: the sources to build, the pages to rewrite, the citations to earn, and the prompt clusters to defend.",
  },
  {
    step: "05",
    title: "Actionable plays you can implement",
    body:
      "Concrete moves enterprise teams can ship in-house to lift LLM visibility — owned content patterns, third-party placements, schema, and recommendation-stage proof points.",
  },
];

const marketCases = [
  {
    title: "How AI Search Is Recommending Tax Relief Companies in 2026",
    excerpt:
      "A benchmark-based analysis of how AI systems surface, compare, and recommend tax relief companies across high-intent discovery, comparison, and decision-stage prompts — with remediation priorities for brands losing recommendation share.",
    type: "AI Market Discovery Action Report",
    source: "LLM Authority Index benchmark data",
    status: "Independent market analysis",
    href: "/case-studies/tax-relief-ai-market-discovery",
  },
  {
    title: "How AI Search Is Recommending AI Work Collaboration Platforms",
    excerpt:
      "An industry-level look at how AI systems compare collaboration platforms, where recommendation strength drops across buyer stages, and which source, content, and citation gaps may be shaping shortlist visibility.",
    type: "AI Market Discovery Action Report",
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
      "AI Market Discovery Action Reports are benchmark-based examinations of how AI systems recommend, compare, and frame companies in a category. They are independent market analyses and should not be read as client engagements.",
  },
  {
    title: "Company readouts",
    body:
      "AI Company Market Strategy Reports are company-specific public readouts based on a limited scope of high-intent prompt clusters. They show directional recommendation patterns, not a replacement for a full AI visibility audit.",
  },
  {
    title: "Client results",
    body:
      "Client Implementation Case Studies describe actual CiteWorks Studio work and only include outcomes supported by client data, campaign data, search data, AI visibility data, or citation evidence.",
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

/* ---------------- Page ---------------- */

const CaseStudies = () => {
  useScrollReveal();

  useEffect(() => {
    document.title =
      "AI Market Discovery Action Reports, Client Case Studies & Company Reports | CiteWorks Studio";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Three content libraries from CiteWorks Studio: AI Market Discovery Action Reports powered by LLM Authority Index, Client Implementation Case Studies, and AI Company Market Strategy Reports — built to diagnose, prioritize, and remediate AI recommendation gaps."
      );
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* ---------- 1. HERO ---------- */}
      <section className="relative pt-40 pb-28 overflow-hidden ambient-glow">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute inset-0 grid-bg-fine opacity-[0.15] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] conic-ring opacity-40 pointer-events-none float-y-slow" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="reveal inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-7">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 pulse-ring" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
              </span>
              <span className="font-mono text-[13px] tracking-[0.16em] text-body uppercase">
                / Case Studies &amp; AI Market Discovery
              </span>
            </div>
            <h1 className="reveal reveal-delay-1 display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.98]">
              Three libraries.{" "}
              <span className="text-gradient">One AI discovery system.</span>
            </h1>
            <p className="reveal reveal-delay-2 mt-8 mx-auto max-w-2xl text-base sm:text-lg text-body leading-relaxed">
              Benchmark-led market intelligence, real client engagements, and
              company-level readouts — built to show enterprise teams exactly how
              AI systems recommend their category and what to fix next.
            </p>
            <div className="reveal reveal-delay-3 mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-[11.5px] tracking-[0.16em] uppercase text-tertiary">
              <span>Powered by LLM Authority Index</span>
              <span className="hidden sm:inline text-border">/</span>
              <span>Independent benchmark data</span>
              <span className="hidden sm:inline text-border">/</span>
              <span>Enterprise-grade analysis</span>
            </div>
          </div>

          <div className="reveal reveal-delay-3 mt-16 grid md:grid-cols-3 gap-5">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <a
                  key={p.title}
                  href={p.sectionHref}
                  className="card-premium p-8 flex flex-col group relative overflow-hidden hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-center justify-between mb-8">
                    <div className="size-12 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center text-primary group-hover:bg-primary/15 group-hover:scale-105 transition-all">
                      <Icon className="size-5" />
                    </div>
                    <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-tertiary">
                      0{idx + 1}
                    </span>
                  </div>

                  <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-primary mb-3">
                    {p.label}
                  </p>
                  <h2 className="text-2xl font-semibold text-heading leading-[1.2] tracking-tight">
                    {p.title}
                  </h2>
                  <p className="mt-4 text-[14.5px] text-body leading-relaxed flex-1">
                    {p.body}
                  </p>

                  <div className="mt-7 pt-5 border-t border-border flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[12px] font-semibold tracking-[0.14em] text-primary group-hover:gap-2.5 transition-all uppercase">
                      Jump to section <ArrowRight className="size-3.5" />
                    </span>
                    <Link
                      to={p.directoryHref}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 font-mono text-[11px] tracking-[0.14em] text-tertiary hover:text-heading transition-colors uppercase whitespace-nowrap"
                    >
                      View all <ArrowUpRight className="size-3" />
                    </Link>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- 2. STICKY ANCHOR NAV ---------- */}
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

      {/* ---------- 3. AI MARKET DISCOVERY ACTION REPORTS ---------- */}
      <section id="market-discovery" className="py-28 scroll-mt-32">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 mb-14">
            <div>
              <SectionEyebrow>AI Market Discovery Action Reports</SectionEyebrow>
              <h2 className="display text-3xl sm:text-4xl md:text-5xl leading-[1.08]">
                Benchmark intelligence, translated into the fixes that move recommendation share.
              </h2>
            </div>
            <div className="space-y-5 text-body leading-relaxed">
              <p>
                AI Market Discovery Action Reports take the LLM Authority Index
                benchmark for a category and turn it into a decision document —
                what AI systems are recommending today, why that matters for
                buyer discovery, what's most likely causing the gap, and the
                remediation work that closes it.
              </p>
              <p>
                Each report is built for enterprise teams who need a clear
                read on category dynamics and a prioritized action list they
                can hand to marketing, content, and SEO leadership.
              </p>
            </div>
          </div>

          {/* Anatomy rail */}
          <div className="mb-14">
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-primary mb-5">
              What's inside every report
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {reportAnatomy.map((a) => (
                <div
                  key={a.step}
                  className="rounded-2xl border border-border bg-card/60 p-6 flex flex-col"
                >
                  <p className="font-mono text-[11px] tracking-[0.18em] text-primary">
                    {a.step}
                  </p>
                  <h3 className="mt-3 text-[15.5px] font-semibold text-heading leading-snug">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-[13.5px] text-body leading-relaxed">
                    {a.body}
                  </p>
                </div>
              ))}
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
                    Market Discovery Action
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
                  Read report <ArrowUpRight className="size-3.5" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button
              asChild
              className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] btn-glow"
            >
              <Link to="/case-studies/ai-market-discovery">
                VIEW ALL MARKET DISCOVERY REPORTS
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em]"
            >
              <Link to="/request-audit">REQUEST AN AI VISIBILITY AUDIT</Link>
            </Button>
          </div>

          <p className="mt-8 text-sm text-subtle font-mono">
            Benchmark data published by{" "}
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

      {/* ---------- 4. BENCHMARK → REMEDIATION ---------- */}
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

      {/* ---------- 5. COMPANY REPORTS ---------- */}
      <section id="company-reports" className="py-28 scroll-mt-32 border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 mb-14">
            <div>
              <SectionEyebrow>AI Company Market Strategy Reports</SectionEyebrow>
              <h2 className="display text-3xl sm:text-4xl md:text-5xl leading-[1.08]">
                Company-level readouts from the same benchmark data.
              </h2>
            </div>
            <div className="space-y-5 text-body leading-relaxed">
              <p>
                Industry benchmarks show how a market is being recommended. AI
                Company Market Strategy Reports show how a specific company is
                positioned inside that market.
              </p>
              <p>
                Each report applies the same recommendation-quality lens to a
                limited public scope — 3 of 10 high-intent prompt clusters —
                with broader sampling, deeper citation tracing, and full
                platform analysis reserved for paid engagements.
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 pt-3 text-[15px]">
                {[
                  "where the brand is visible",
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
                    Company Market Strategy Report
                  </span>
                  <span className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-tertiary">
                    Public readout
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-heading leading-tight">
                  Slack AI Company Market Strategy Report
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
                    { k: "Type", v: "AI Company Market Strategy Report" },
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

          <div className="mt-10 flex flex-wrap gap-3">
            <Button
              asChild
              className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] btn-glow"
            >
              <Link to="/case-studies/ai-company-reports">
                VIEW ALL COMPANY MARKET STRATEGY REPORTS
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em]"
            >
              <Link to="/request-audit">REQUEST AN AI VISIBILITY AUDIT</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ---------- 6. CLIENT IMPLEMENTATION ---------- */}
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
                These are the documented CiteWorks Studio engagements: real
                execution, real measurement, and outcomes tied to client data.
              </p>
              <p>
                Where AI Market Discovery Action Reports show how a market is
                behaving, client implementation case studies show how CiteWorks
                Studio helps brands respond — the work delivered, the visibility
                problem solved, and the measurable movement across AI
                recommendations, citations, source quality, search performance,
                and competitive positioning.
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

          <div className="mt-10 flex flex-wrap gap-3">
            <Button
              asChild
              className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] btn-glow"
            >
              <Link to="/case-studies/client-results">
                VIEW ALL CLIENT CASE STUDIES
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em]"
            >
              <Link to="/request-audit">SEE HOW CITEWORKS IMPROVES AI DISCOVERY</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ---------- 7. METHODOLOGY / TRUST ---------- */}
      <section id="methodology" className="py-28 scroll-mt-32 border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="max-w-3xl mb-12">
            <SectionEyebrow>Methodology &amp; Trust</SectionEyebrow>
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
              not the same as recommendation credit, and benchmark snapshots reflect a
              point-in-time view of the AI systems sampled.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- 8. FINAL CTA ---------- */}
      <section className="py-28 border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="rounded-3xl border border-border bg-card p-10 sm:p-14 lg:p-20 text-center">
            <SectionEyebrow>Next Step</SectionEyebrow>
            <h2 className="display text-3xl sm:text-4xl md:text-6xl leading-[1.05] max-w-3xl mx-auto">
              See how AI is recommending your category — and what to fix first.
            </h2>
            <p className="mt-6 text-body text-lg leading-relaxed max-w-2xl mx-auto">
              Request an AI Visibility Audit and get a prioritized plan grounded
              in the same benchmark data behind every CiteWorks Studio report.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
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
                <Link to="/methodology">EXPLORE THE METHODOLOGY</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <StickyAuditCTA />
      <Footer />
    </div>
  );
};

export default CaseStudies;
