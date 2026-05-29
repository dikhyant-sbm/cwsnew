import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Layers,
  MessageSquare,
  Workflow,
  FileText,
  AlertTriangle,
  Quote,
  Compass,
  Database,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { PageShell } from "@/components/landing/Shell";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/ai-work-collab-hero.jpg";

const reportMeta = [
  { label: "Report Type", value: "AI Industry Market Discovery" },
  { label: "Category", value: "AI Work Collaboration Platforms" },
  { label: "Benchmark Source", value: "LLM Authority Index" },
  { label: "Published", value: "May 26, 2026" },
];

const toc = [
  { id: "summary", label: "Opening Summary" },
  { id: "findings", label: "Key Findings" },
  { id: "shift", label: "What Changed in the Market" },
  { id: "benchmark", label: "What the Benchmark Found" },
  { id: "visibility-gap", label: "Why Visibility Is Not Enough" },
  { id: "citations", label: "The Citation Layer" },
  { id: "fixes", label: "What Brands Need to Fix" },
  { id: "how-we-help", label: "How CiteWorks Helps" },
  { id: "takeaway", label: "Commercial Takeaway" },
];

const keyFindings = [
  {
    n: "01",
    title: "Recommendation power is concentrated",
    body: "A small group of multi-functional platforms — ClickUp, Asana, Notion, Slack, Microsoft Teams, Jira, Monday.com, Trello, and Zoom — captures most AI-generated shortlist slots across the category.",
  },
  {
    n: "02",
    title: "ClickUp leads cross-cluster framing",
    body: "Repeatedly positioned as “all-in-one” and “feature-rich” across project management, scheduling, workflow coordination, and operational planning prompts.",
  },
  {
    n: "03",
    title: "Asana wins on semantic legibility",
    body: "Durable recommendation eligibility across structured workflow, accountability, timelines, task management, and OKR-adjacent prompts. Easy for AI systems to classify and compare.",
  },
  {
    n: "04",
    title: "Slack and Microsoft Teams own communication",
    body: "Slack is framed as “best overall for messaging.” Microsoft Teams benefits from Microsoft 365 ecosystem context — a recurring AI framing advantage.",
  },
  {
    n: "05",
    title: "Notion expands recommendation surface area",
    body: "Not always ranked first, but flexible workspace positioning across docs, databases, notes, and tasks increases eligibility across many prompt types.",
  },
];

const leaders = [
  {
    icon: Workflow,
    tag: "Workflow OS",
    title: "ClickUp",
    body:
      "Strongest cross-cluster performer. AI systems repeatedly framed ClickUp as all-in-one, feature-rich, and operationally central — language that maps cleanly to broad, high-intent prompts.",
    chips: ["All-in-one", "Project mgmt", "Scheduling"],
  },
  {
    icon: Layers,
    tag: "Structured work",
    title: "Asana",
    body:
      "Durable coverage across workflow structure, accountability, timelines, team visibility, task management, and OKR alignment. Strength comes from portability, not a single prompt type.",
    chips: ["Workflows", "Accountability", "OKRs"],
  },
  {
    icon: MessageSquare,
    tag: "Communication",
    title: "Slack · Microsoft Teams · Zoom",
    body:
      "Slack frames as best for messaging and remote teams. Microsoft Teams benefits from Microsoft 365 ecosystem framing. AI systems often recommend in ecosystem context, not as standalone products.",
    chips: ["Messaging", "Ecosystem", "Remote work"],
  },
  {
    icon: FileText,
    tag: "Flexible workspace",
    title: "Notion",
    body:
      "Semantic flexibility wins. AI systems frame Notion as workspace-centric — combining docs, tasks, databases, and notes — which expands eligibility across many adjacent prompts.",
    chips: ["Docs", "Databases", "Notes"],
  },
];

const oldWorld = [
  "Communication in one tool",
  "Projects in another",
  "Docs somewhere else",
  "OKRs and planning in their own layer",
];

const newWorld = [
  "“What is the best project management software?”",
  "“Best software for remote teams?”",
  "“Best communication platform for work?”",
  "“What tool should we use to coordinate projects?”",
];

const citationSources = [
  "Editorial software comparisons",
  "SaaS review environments",
  "Workflow roundups",
  "Reddit & community discussions",
  "Official product pages",
  "Ecosystem integration narratives",
];

const fixes = [
  {
    n: "01",
    title: "Expand recommendation eligibility across workflows",
    body:
      "Brands narrowly positioned around one operational function risk losing visibility in broader AI-led discovery. Show cross-workflow relevance across communication, projects, tasks, docs, planning, scheduling, and accountability.",
  },
  {
    n: "02",
    title: "Improve semantic clarity",
    body:
      "AI systems reward companies that are easy to classify and compare. Clear language around workflows, project visibility, coordination, remote collaboration, accountability, integrations, and execution improves portability across prompt clusters.",
  },
  {
    n: "03",
    title: "Strengthen the public evidence layer",
    body:
      "Editorial comparisons, review environments, integration pages, community discussions, and owned content shape the citation layer. Without citation-bearing comparisons and consistent third-party framing, visibility rarely converts into valid recommendations.",
  },
];

const howWeHelp = [
  {
    title: "Map AI recommendation visibility",
    body:
      "Track prompts, platforms, presence, valid recommendations, top-three and rank-one performance, framing, and citation sources.",
  },
  {
    title: "Identify the sources shaping AI answers",
    body:
      "Find the editorial, review, forum, government, directory, owned, and search-visible sources that influence brand framing.",
  },
  {
    title: "Build the citation architecture plan",
    body:
      "Strengthen the public evidence layer so AI systems have more accurate, consistent, and persuasive source material to synthesize.",
  },
];

const continueReading = [
  {
    title: "How AI Search Is Recommending Tax Relief Companies in 2026",
    to: "/case-studies",
    excerpt:
      "A benchmark-based look at AI shortlists in a high-trust consumer finance category.",
  },
  {
    title: "Job Board AI Search Case Study",
    to: "/case-studies/job-board-ai-search",
    excerpt:
      "How a job posting platform secured a place in AI's shortlist for employers.",
  },
];

const author = {
  name: "Mark Huntley",
  initials: "MH",
  role: "AI Search & Citation Analyst, CiteWorks Studio",
  bio: "Mark Huntley analyzes how large language models surface, compare, and recommend brands across AI-generated answers. He specializes in citation architecture, embedding-level relevance, and translating LLM Authority Index benchmark data into remediation plans that move recommendation share.",
};

const heroStats = [
  { v: "9", k: "platforms capture most AI shortlist slots" },
  { v: "ClickUp", k: "strongest cross-cluster AI framing" },
  { v: "Citations", k: "decide valid recommendations, not visibility" },
];

const keyTakeaways = [
  "AI compresses the category into a small recommendation set led by ClickUp, Asana, Notion, Slack, and Microsoft Teams.",
  "Being visible to AI is not enough — only citation-backed framing converts into valid recommendations.",
  "Brands win by expanding workflow eligibility, improving semantic clarity, and strengthening their public evidence layer.",
];

const faqs = [
  {
    q: "Which work collaboration platforms does AI recommend most?",
    a: "A small group of multi-functional platforms — ClickUp, Asana, Notion, Slack, Microsoft Teams, Jira, Monday.com, Trello, and Zoom — captures most AI-generated shortlist slots, with ClickUp leading cross-cluster framing and Asana winning on semantic legibility.",
  },
  {
    q: "Why is AI visibility not enough to win recommendations?",
    a: "AI systems only convert visibility into valid recommendations when citation-bearing sources — editorial comparisons, review environments, and community discussions — consistently support a brand's framing. Without that citation layer, a brand can appear without being recommended.",
  },
  {
    q: "What should brands fix to improve AI recommendation share?",
    a: "Expand recommendation eligibility across multiple workflows, improve semantic clarity so AI can classify and compare the brand, and strengthen the public evidence layer with citation-bearing comparisons and consistent third-party framing.",
  },
  {
    q: "What data is this report based on?",
    a: "This is a benchmark-based industry analysis powered by the LLM Authority Index, with market interpretation and remediation framing provided by CiteWorks Studio.",
  },
];

const AIWorkCollaborationPlatforms = () => {
  useEffect(() => {
    document.title =
      "How AI Search Is Recommending AI Work Collaboration Platforms | CiteWorks Studio";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Benchmark-based industry analysis of how AI systems recommend, compare, and frame work collaboration platforms — including ClickUp, Asana, Notion, Slack, Microsoft Teams, and more. Powered by LLM Authority Index."
      );
    }
  }, []);

  return (
    <PageShell>
      {/* HERO */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute -top-40 right-[-10%] w-[700px] h-[700px] conic-ring opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
          <Link
            to="/ai-industry-market-discovery-reports"
            className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.18em] text-body hover:text-foreground transition-colors mb-8 uppercase"
          >
            <ArrowLeft className="size-3.5" /> All Industry Reports
          </Link>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-6">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 pulse-ring" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                </span>
                <span className="font-mono text-[12px] tracking-[0.16em] text-body uppercase">
                  / AI Industry Market Discovery Report
                </span>
              </div>
              <h1 className="display text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-tight">
                How AI Search Is Recommending{" "}
                <span className="text-gradient">AI Work Collaboration Platforms</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-body leading-relaxed max-w-3xl">
                Benchmark-based industry analysis powered by LLM Authority Index.
                A directional read on how AI systems compare collaboration software
                — and what's required to earn a place in the shortlist.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 btn-glow px-7 h-12"
                >
                  <Link to="/request-audit">
                    REQUEST AN AI VISIBILITY AUDIT
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] border-foreground/30 hover:bg-foreground/5 px-7 h-12"
                >
                  <a href="#findings">JUMP TO FINDINGS</a>
                </Button>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="card-premium overflow-hidden">
                <div className="relative h-32 overflow-hidden border-b border-border">
                  <img
                    src={heroImage}
                    alt="Abstract network of nodes representing AI-generated recommendation graphs across work collaboration platforms."
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent pointer-events-none" />
                </div>
                <div className="p-6">
                  <p className="font-mono text-[12px] tracking-[0.18em] text-subtle uppercase mb-5">
                    Report Card
                  </p>
                  <dl className="space-y-4 text-sm">
                    {reportMeta.map((row, i) => (
                      <div
                        key={row.label}
                        className={`flex justify-between gap-4 ${
                          i < reportMeta.length - 1 ? "border-b border-border pb-3" : ""
                        }`}
                      >
                        <dt className="text-body shrink-0">{row.label}</dt>
                        <dd className="text-foreground font-medium text-right">
                          {row.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* BODY WITH STICKY TOC */}
      <div className="mx-auto max-w-[1280px] px-6 py-16 grid lg:grid-cols-12 gap-12">
        <aside className="lg:col-span-3">
          <div className="lg:sticky lg:top-28">
            <p className="font-mono text-[12px] tracking-[0.18em] text-subtle uppercase mb-4">
              On this report
            </p>
            <nav>
              <ul className="space-y-2.5 text-sm">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a
                      href={`#${t.id}`}
                      className="text-body hover:text-primary transition-colors"
                    >
                      {t.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-8 p-5 rounded-2xl border border-primary/30 bg-primary/[0.04]">
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-primary mb-2">
                Methodology note
              </p>
              <p className="text-[13px] text-body leading-relaxed">
                Treats the safest vertical as AI work collaboration platforms.
                Framed as directional market analysis, not a definitive category
                ranking.
              </p>
            </div>
          </div>
        </aside>

        <div className="lg:col-span-9 space-y-24">
          {/* OPENING SUMMARY */}
          <section id="summary" className="scroll-mt-28">
            <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-primary mb-4">
              / Opening Summary
            </p>
            <h2 className="display text-3xl sm:text-4xl leading-[1.1] tracking-tight max-w-3xl">
              AI is compressing collaboration software into a much smaller
              recommendation environment.
            </h2>
            <div className="mt-8 space-y-5 text-body text-base sm:text-lg leading-relaxed">
              <p>
                Across prompts related to project management, team
                communication, task coordination, OKRs, remote work,
                scheduling, and operational planning, AI systems are collapsing
                historically separate SaaS categories into a small set of
                recommendation winners.
              </p>
              <p>
                Visibility alone is no longer enough. The platforms most often
                advanced into AI-generated shortlists are not always the most
                narrowly specialized tools. Recommendation leadership favors
                platforms with broad workflow utility, ecosystem integration,
                clear operational positioning, and a strong public evidence
                layer across editorial, comparison, official, and community
                sources.
              </p>
            </div>
          </section>

          {/* KEY FINDINGS */}
          <section id="findings" className="scroll-mt-28">
            <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-primary mb-4">
              / Key Findings
            </p>
            <h2 className="display text-3xl sm:text-4xl leading-tight tracking-tight">
              Five signals from the benchmark.
            </h2>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {keyFindings.map((f) => (
                <article
                  key={f.n}
                  className="card-premium p-7 hover:border-primary/40 transition-colors"
                >
                  <p className="font-mono text-[12px] tracking-[0.18em] text-primary uppercase">
                    Finding / {f.n}
                  </p>
                  <h3 className="mt-3 display text-xl leading-tight">{f.title}</h3>
                  <p className="mt-3 text-body text-[15px] leading-relaxed">
                    {f.body}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* WHAT CHANGED — BEFORE / AFTER */}
          <section id="shift" className="scroll-mt-28">
            <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-primary mb-4">
              / What Changed in the Market
            </p>
            <h2 className="display text-3xl sm:text-4xl leading-[1.1] tracking-tight max-w-3xl">
              The category is being reorganized around recommendation breadth,
              not product taxonomy.
            </h2>
            <p className="mt-6 text-body text-lg leading-relaxed">
              Collaboration software used to split into clean product categories.
              AI systems are now compressing those categories — and buyers ask
              outcome-oriented questions, not taxonomy ones.
            </p>

            <div className="mt-10 grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl border border-border bg-card/60 p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="size-9 rounded-lg bg-secondary border border-border grid place-items-center">
                    <Layers className="size-4 text-tertiary" />
                  </div>
                  <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-subtle">
                    Old discovery model
                  </p>
                </div>
                <ul className="space-y-3 text-body text-[15px]">
                  {oldWorld.map((o) => (
                    <li key={o} className="flex gap-3">
                      <span className="text-tertiary mt-1">—</span>
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-primary/30 bg-primary/[0.04] p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="size-9 rounded-lg bg-primary/10 border border-primary/30 grid place-items-center">
                    <Sparkles className="size-4 text-primary" />
                  </div>
                  <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-primary">
                    AI-led discovery
                  </p>
                </div>
                <ul className="space-y-3 text-body text-[15px]">
                  {newWorld.map((o) => (
                    <li key={o} className="flex gap-3">
                      <Quote className="size-4 text-primary mt-1 shrink-0" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-8 text-body leading-relaxed">
              Project management tools now compete directly with communication
              platforms, documentation systems, OKR tools, workflow hubs, async
              collaboration tools, and operational productivity suites.
            </p>
          </section>

          {/* BENCHMARK FOUND - LEADER CARDS */}
          <section id="benchmark" className="scroll-mt-28">
            <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-primary mb-4">
              / What the Benchmark Found
            </p>
            <h2 className="display text-3xl sm:text-4xl leading-tight tracking-tight">
              Recommendation leaders by workflow lens.
            </h2>
            <div className="mt-8 grid md:grid-cols-2 gap-5">
              {leaders.map((l) => {
                const Icon = l.icon;
                return (
                  <article
                    key={l.title}
                    className="card-premium p-7 sm:p-8 hover:border-primary/40 transition-colors flex flex-col"
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <span className="inline-flex size-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                        <Icon className="size-4 text-primary" />
                      </span>
                      <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-primary">
                        {l.tag}
                      </span>
                    </div>
                    <h3 className="display text-2xl leading-tight">{l.title}</h3>
                    <p className="mt-3 text-body text-[15px] leading-relaxed flex-1">
                      {l.body}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {l.chips.map((c) => (
                        <span
                          key={c}
                          className="font-mono text-[11px] tracking-[0.12em] uppercase text-body border border-border bg-background rounded-full px-3 py-1"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* VISIBILITY GAP */}
          <section id="visibility-gap" className="scroll-mt-28">
            <div className="relative rounded-3xl overflow-hidden border border-border bg-card">
              <div className="absolute inset-0 grid-bg-fine opacity-30 pointer-events-none" />
              <div className="relative z-10 p-8 sm:p-12">
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex size-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/30">
                    <AlertTriangle className="size-4 text-primary" />
                  </span>
                  <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-primary">
                    / Why Visibility Is Not Enough
                  </p>
                </div>
                <h2 className="display text-3xl sm:text-4xl leading-[1.1] tracking-tight max-w-3xl">
                  A brand can be visible in AI answers and still be weak at the
                  decision moment.
                </h2>
                <div className="mt-6 space-y-4 text-body text-base sm:text-lg leading-relaxed">
                  <p>
                    Several recognizable collaboration brands appeared inside
                    AI answers but failed to earn strong recommendation
                    positioning — ranked low in shortlists or surfaced only
                    inside narrow workflow contexts.
                  </p>
                  <p>
                    Raw mention presence, valid recommendation coverage,
                    top-three rate, rank-one rate, positive visibility, and
                    modeled monthly captured recommendation value are separate
                    metrics — and should not be treated interchangeably.
                  </p>
                </div>

                <div className="mt-8 grid sm:grid-cols-3 gap-3">
                  {[
                    "Mention presence",
                    "Valid recommendations",
                    "Top-three rate",
                    "Rank-one rate",
                    "Positive visibility",
                    "Captured value",
                  ].map((m) => (
                    <div
                      key={m}
                      className="rounded-xl border border-border bg-background/60 px-4 py-3 text-[13px] font-mono tracking-[0.08em] text-body"
                    >
                      {m}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CITATION LAYER */}
          <section id="citations" className="scroll-mt-28">
            <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-primary mb-4">
              / The Citation Layer
            </p>
            <h2 className="display text-3xl sm:text-4xl leading-[1.1] tracking-tight max-w-3xl">
              AI systems synthesize from the public evidence layer around the
              category.
            </h2>
            <p className="mt-6 text-body text-lg leading-relaxed">
              The strongest performers shared consistent category framing,
              broad use-case coverage, recurring editorial inclusion, clear
              ecosystem narratives, and operationally understandable
              positioning. Recommendation leadership was not tied solely to
              review volume or raw search visibility.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {citationSources.map((s) => (
                <div
                  key={s}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card/60 px-5 py-4"
                >
                  <Database className="size-4 text-primary shrink-0" />
                  <span className="text-[14.5px] text-body">{s}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-body leading-relaxed">
              This is the citation architecture problem. AI systems are not
              ranking webpages — they are synthesizing public evidence from
              multiple source environments to form recommendation shortlists.
            </p>
          </section>

          {/* WHAT BRANDS NEED TO FIX */}
          <section id="fixes" className="scroll-mt-28">
            <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-primary mb-4">
              / What Brands Need to Fix
            </p>
            <h2 className="display text-3xl sm:text-4xl leading-tight tracking-tight">
              Three priorities for recommendation eligibility.
            </h2>
            <div className="mt-8 space-y-4">
              {fixes.map((f) => (
                <article
                  key={f.n}
                  className="card-premium p-7 sm:p-8 hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="display text-3xl text-gradient leading-none">
                      {f.n}
                    </span>
                    <h3 className="display text-xl sm:text-2xl leading-tight">
                      {f.title}
                    </h3>
                  </div>
                  <p className="text-body text-[15.5px] leading-relaxed">
                    {f.body}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* HOW CITEWORKS HELPS */}
          <section id="how-we-help" className="scroll-mt-28">
            <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-primary mb-4">
              / How CiteWorks Studio Helps
            </p>
            <h2 className="display text-3xl sm:text-4xl leading-tight tracking-tight">
              From benchmark insight to remediation.
            </h2>
            <div className="mt-8 grid md:grid-cols-3 gap-4">
              {howWeHelp.map((h) => (
                <div key={h.title} className="card-premium p-6">
                  <CheckCircle2 className="size-5 text-primary mb-4" />
                  <h3 className="display text-lg leading-tight">{h.title}</h3>
                  <p className="mt-3 text-sm text-body leading-relaxed">{h.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* COMMERCIAL TAKEAWAY */}
          <section id="takeaway" className="scroll-mt-28">
            <div className="relative rounded-3xl overflow-hidden border border-primary/30 bg-primary/[0.04] p-8 sm:p-12">
              <Quote className="size-8 text-primary/60 mb-5" />
              <h2 className="display text-3xl sm:text-4xl leading-[1.1] tracking-tight">
                The emerging moat is not feature depth — it's recommendation
                breadth, supported by citation architecture.
              </h2>
              <div className="mt-6 space-y-4 text-body text-lg leading-relaxed">
                <p>
                  The collaboration software market is no longer competing
                  only inside traditional search results. It's competing
                  inside AI-generated shortlists, comparison answers,
                  recommendation summaries, and buyer-stage prompts.
                </p>
                <p>
                  The brands best positioned for AI-led discovery are the
                  brands that AI systems can clearly understand, confidently
                  compare, repeatedly cite, and recommend across multiple
                  workflow contexts.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="scroll-mt-28">
            <div className="rounded-3xl border border-border bg-card/60 p-8 sm:p-10 text-center">
              <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-primary mb-4">
                / Next Step
              </p>
              <h2 className="display text-3xl sm:text-4xl leading-tight tracking-tight max-w-2xl mx-auto">
                Want to know how AI systems are recommending your collaboration
                platform?
              </h2>
              <p className="mt-5 text-body leading-relaxed max-w-2xl mx-auto">
                CiteWorks Studio helps brands understand where they appear,
                where competitors are recommended instead, which prompts carry
                the most commercial risk, and which sources are shaping
                AI-generated answers.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Button
                  asChild
                  className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] btn-glow px-7 h-12"
                >
                  <Link to="/request-audit">REQUEST AN AI VISIBILITY AUDIT</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] border-foreground/30 px-7 h-12"
                >
                  <Link to="/request-audit">CITATION ARCHITECTURE REVIEW</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* BENCHMARK SOURCE */}
          <section className="scroll-mt-28">
            <div className="rounded-2xl border border-border bg-background p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <Compass className="size-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-primary mb-2">
                    Benchmark Source
                  </p>
                  <p className="text-[14.5px] text-body leading-relaxed">
                    This analysis is based on the AI Market Discovery benchmark
                    materials for AI Work Collaboration Platforms, powered by{" "}
                    <span className="text-foreground font-medium">
                      LLM Authority Index
                    </span>
                    . LLM Authority Index is the benchmark and research source;
                    CiteWorks Studio provides the market interpretation and
                    remediation framework.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CONTINUE READING */}
          <section className="scroll-mt-28">
            <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-primary mb-4">
              / Continue Reading
            </p>
            <h2 className="display text-2xl sm:text-3xl leading-tight tracking-tight">
              More from the case studies library.
            </h2>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              {continueReading.map((r) => (
                <Link
                  key={r.title}
                  to={r.to}
                  className="card-premium p-6 group hover:border-primary/40 transition-colors flex flex-col"
                >
                  <h3 className="display text-lg leading-tight">{r.title}</h3>
                  <p className="mt-3 text-sm text-body leading-relaxed flex-1">
                    {r.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-[12px] font-semibold tracking-[0.14em] uppercase text-primary group-hover:gap-2.5 transition-all">
                    Read <ArrowUpRight className="size-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageShell>
  );
};

export default AIWorkCollaborationPlatforms;
