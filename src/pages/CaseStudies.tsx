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
  Compass,
} from "lucide-react";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { StickyAuditCTA } from "@/components/landing/StickyAuditCTA";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { CaseCard } from "@/components/case-studies/CaseCard";
import {
  clientCases,
  marketReports,
  companyReports,
  directoryPaths,
} from "@/data/caseStudies";

/* ---------------- Static copy ---------------- */

const pillars = [
  {
    icon: CheckCircle2,
    label: "Real CiteWorks engagements",
    title: "Client Implementation Case Studies",
    body:
      "Documented CiteWorks Studio engagements with measurable outcomes across AI recommendation share, citation footprint, source authority, search visibility, and competitive positioning.",
    sectionHref: "#client-results",
    directoryHref: directoryPaths.client,
  },
  {
    icon: Map,
    label: "Benchmark-led market intelligence",
    title: "AI Industry Market Discovery Reports",
    body:
      "Category-level analyses powered by LLM Authority Index. Each report shows how AI systems recommend a market, why it matters, what's likely causing the gap, and what CiteWorks would prioritize fixing.",
    sectionHref: "#market-discovery",
    directoryHref: directoryPaths.market,
  },
  {
    icon: Building2,
    label: "Company-level readouts",
    title: "AI Company Market Strategy Reports",
    body:
      "Company-specific readouts built from the same LLM Authority Index benchmark data. Each shows where a brand is visible, where it earns positive recommendations, and where competitors intercept demand.",
    sectionHref: "#company-reports",
    directoryHref: directoryPaths.company,
  },
];

const anchors = [
  { id: "client-results", label: "Client Implementation Case Studies" },
  { id: "market-discovery", label: "AI Industry Market Discovery Reports" },
  { id: "company-reports", label: "AI Company Market Strategy Reports" },
  { id: "methodology", label: "How to Read These Reports" },
];

const reportAnatomy = [
  { step: "01", title: "Benchmark summary", body: "LLM Authority Index findings for the category — recommendation share, top-three capture, rank-one positions, sentiment, and platform variance." },
  { step: "02", title: "Why it matters", body: "How those benchmark signals translate into commercial risk: where shortlists form in AI answers, and where buyer trust is awarded or withheld." },
  { step: "03", title: "Likely causes", body: "A diagnostic read on what's suppressing recommendation credit — content coverage, citations, entity clarity, third-party authority." },
  { step: "04", title: "What we'd fix", body: "The remediation sequence CiteWorks would run first: sources to build, pages to rewrite, citations to earn, prompt clusters to defend." },
  { step: "05", title: "Plays to ship", body: "Concrete moves enterprise teams can implement in-house — owned content, third-party placements, schema, and recommendation-stage proof points." },
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

const trustColumns = [
  { title: "Client results", body: "Client Implementation Case Studies describe actual CiteWorks Studio work and only include outcomes supported by client, campaign, search, AI visibility, or citation evidence." },
  { title: "Market intelligence", body: "AI Industry Market Discovery Reports are benchmark-based examinations of how AI systems recommend a category. They are independent market analyses, not client engagements." },
  { title: "Company readouts", body: "AI Company Market Strategy Reports are company-specific public readouts based on a limited scope of high-intent prompt clusters. They show directional patterns, not a replacement for a full audit." },
];

/* ---------------- Building Blocks ---------------- */

const SectionEyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="eyebrow mb-5">{children}</p>
);

const ViewAllRow = ({
  to,
  label,
  secondaryLabel = "REQUEST AN AI VISIBILITY AUDIT",
}: {
  to: string;
  label: string;
  secondaryLabel?: string;
}) => (
  <div className="mt-12 flex flex-wrap items-center gap-3">
    <Button
      asChild
      className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] btn-glow"
    >
      <Link to={to}>
        {label}
        <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
      </Link>
    </Button>
    <Button
      asChild
      variant="outline"
      className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em]"
    >
      <Link to="/request-audit">{secondaryLabel}</Link>
    </Button>
  </div>
);

/* ---------------- Page ---------------- */

const CaseStudies = () => {
  useScrollReveal();

  useEffect(() => {
    document.title =
      "Case Studies, AI Industry Market Discovery & Company Reports | CiteWorks Studio";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Three CiteWorks Studio libraries: Client Implementation Case Studies, AI Industry Market Discovery Reports powered by LLM Authority Index, and AI Company Market Strategy Reports."
      );
  }, []);

  // Featured = first 2 per pillar
  const featuredClient = clientCases.slice(0, 2);
  const featuredMarket = marketReports.slice(0, 2);
  const featuredCompany = companyReports.slice(0, 2);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* ---------- 1. HERO ---------- */}
      <section className="relative pt-40 pb-24 overflow-hidden ambient-glow">
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
              Client engagements, benchmark-led market intelligence, and
              company-level readouts — built to show enterprise teams exactly how
              AI systems recommend their category and what to fix next.
            </p>
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

      {/* ---------- 3. CLIENT IMPLEMENTATION ---------- */}
      <section id="client-results" className="py-28 scroll-mt-32 bg-card/30">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 mb-14">
            <div>
              <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-primary mb-5">
                Pillar 01 · Client engagements
              </p>
              <h2 className="display text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-tight">
                Client Implementation Case Studies
              </h2>
              <p className="mt-6 text-body text-lg leading-relaxed">
                What CiteWorks Studio builds, improves, and measures.
              </p>
            </div>
            <div className="space-y-5 text-body leading-relaxed">
              <p>
                These are documented CiteWorks Studio engagements: real
                execution, real measurement, and outcomes tied to client data.
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

          <div className="grid md:grid-cols-2 gap-6">
            {featuredClient.map((c) => (
              <CaseCard key={c.slug} c={c} />
            ))}
          </div>

          <ViewAllRow
            to={directoryPaths.client}
            label="VIEW ALL CLIENT IMPLEMENTATION CASE STUDIES"
            secondaryLabel="DISCUSS YOUR ENGAGEMENT"
          />
        </div>
      </section>

      {/* ---------- 4. AI INDUSTRY MARKET DISCOVERY ---------- */}
      <section
        id="market-discovery"
        className="py-28 scroll-mt-32 border-t border-border"
      >
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 mb-14">
            <div>
              <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-primary mb-5">
                Pillar 02 · Market intelligence
              </p>
              <h2 className="display text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-tight">
                AI Industry Market Discovery Reports
              </h2>
              <p className="mt-6 text-body text-lg leading-relaxed">
                Benchmark intelligence, translated into the fixes that move
                recommendation share.
              </p>
            </div>
            <div className="space-y-5 text-body leading-relaxed">
              <p>
                Each report takes the LLM Authority Index benchmark for a
                category and turns it into a decision document — what AI systems
                are recommending today, why that matters for buyer discovery,
                what's most likely causing the gap, and the remediation work
                that closes it.
              </p>
              <p>
                Built for enterprise teams who need a clear read on category
                dynamics and a prioritized action list they can hand to
                marketing, content, and SEO leadership.
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

          <div className="grid md:grid-cols-2 gap-6">
            {featuredMarket.map((c) => (
              <CaseCard key={c.slug} c={c} />
            ))}
          </div>

          <ViewAllRow
            to={directoryPaths.market}
            label="VIEW ALL AI INDUSTRY MARKET DISCOVERY REPORTS"
          />

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
                  LLM Authority Index identifies how AI systems are recommending
                  a market. CiteWorks Studio translates those findings into the
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
      <section
        id="company-reports"
        className="py-28 scroll-mt-32 border-t border-border bg-card/30"
      >
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 mb-14">
            <div>
              <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-primary mb-5">
                Pillar 03 · Company readouts
              </p>
              <h2 className="display text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-tight">
                AI Company Market Strategy Reports
              </h2>
              <p className="mt-6 text-body text-lg leading-relaxed">
                Company-level readouts from the same benchmark data.
              </p>
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
                with broader sampling and deeper citation tracing reserved for
                paid engagements.
              </p>
              <span className="inline-flex font-mono text-[11px] tracking-[0.18em] uppercase text-primary border border-primary/30 bg-primary/5 rounded-full px-3 py-1 mt-2">
                Public market report · Not client work · Not a full audit
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredCompany.map((c) => (
              <CaseCard key={c.slug} c={c} />
            ))}
          </div>

          <ViewAllRow
            to={directoryPaths.company}
            label="VIEW ALL AI COMPANY MARKET STRATEGY REPORTS"
          />
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
              Each library serves a different purpose. Here's how they fit
              together — and how to use them.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {trustColumns.map((t) => (
              <div
                key={t.title}
                className="rounded-2xl border border-border bg-card p-7"
              >
                <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-primary">
                  {t.title}
                </p>
                <p className="mt-4 text-body leading-relaxed text-[15px]">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <StickyAuditCTA />
    </div>
  );
};

export default CaseStudies;
