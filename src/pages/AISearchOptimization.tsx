import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Check,
  Search,
  FileSearch,
  Layers,
  Wrench,
  Network,
  FileText,
  Workflow,
  Compass,
  ListChecks,
  GitCompare,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { PageShell } from "@/components/landing/Shell";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionNav, type SectionNavItem } from "@/components/landing/SectionNav";

const onThisPage: SectionNavItem[] = [
  { id: "what-is", label: "What is AI search optimization?" },
  { id: "vs-seo", label: "AI search optimization vs SEO" },
  { id: "services", label: "What services include" },
  { id: "approach", label: "How CiteWorks works" },
  { id: "in-house-vs-agency", label: "In-house vs agency" },
  { id: "faqs", label: "FAQs" },
  { id: "audit", label: "Start with the audit" },
];

const fourPillars = [
  {
    icon: Compass,
    h: "Interpretation",
    b: "How clearly your site explains what you do, who you serve, and where you belong in the market.",
  },
  {
    icon: Search,
    h: "Retrieval",
    b: "How well your pages align with the concepts, entities, and phrasing buyers actually use.",
  },
  {
    icon: ShieldCheck,
    h: "Support",
    b: "How strong the public evidence layer around your brand is across third-party sources.",
  },
  {
    icon: Sparkles,
    h: "Recommendation",
    b: "How often your brand moves from mention into shortlist and selection-stage visibility.",
  },
];

const seoCol = [
  "Rankings",
  "Crawlability and indexation",
  "On-page optimization",
  "Technical SEO",
  "Organic traffic",
];

const aiCol = [
  "Prompt-cluster analysis",
  "Cited-page comparison",
  "Recommendation placement",
  "Source support and citation readiness",
  "Content framing for answer retrieval",
  "Visibility across Google, AI systems, and authority sources",
];

const services = [
  {
    n: "01",
    icon: ListChecks,
    title: "High-intent keyword and prompt-cluster mapping",
    body:
      "We identify the searches closest to revenue, then translate those keyword clusters into high-intent prompt clusters tied to comparisons, alternatives, reviews, best options, trust, pricing, and selection-stage buying behavior.",
  },
  {
    n: "02",
    icon: FileSearch,
    title: "AI search audits and recommendation gap analysis",
    body:
      "We analyze where your brand appears, where it's absent, where competitors are being favored, and where recommendation placement is being lost across the prompts that matter most.",
  },
  {
    n: "03",
    icon: GitCompare,
    title: "Cited-page review and content-gap modeling",
    body:
      "We compare your pages against the pages AI systems are already citing, weighting, and reusing — surfacing missing concepts, weak framing, thin support, and the gaps limiting recommendation strength.",
  },
  {
    n: "04",
    icon: Wrench,
    title: "Technical SEO, schema, and on-site optimization",
    body:
      "We strengthen crawlability, site architecture, internal linking, schema, on-page clarity, content hierarchy, and entity signals so your owned site sends stronger signals to both search engines and AI systems.",
  },
  {
    n: "05",
    icon: Network,
    title: "Citation architecture and authority strategy",
    body:
      "We map the third-party sources shaping your category — editorial pages, review sites, forums, community threads, directories, videos — then define what needs to be improved, supported, or added.",
  },
  {
    n: "06",
    icon: FileText,
    title: "Content refreshes and net-new page creation",
    body:
      "We improve the pages you already have, build the ones you're missing, and expand content around the exact topics, comparisons, and decision-stage questions AI systems keep surfacing.",
  },
  {
    n: "07",
    icon: Workflow,
    title: "In-house execution and reporting",
    body:
      "Research, strategy, production, and implementation stay connected under one team. That makes it easier to move from diagnosis to action without losing the original logic behind the work.",
  },
];

const approachSteps = [
  {
    n: "01",
    h: "Audit the market first",
    b: "We benchmark your keyword clusters, review the recommendation environment around them, and analyze where your brand is being outperformed.",
  },
  {
    n: "02",
    h: "Turn keyword demand into prompt demand",
    b: "We map the commercial prompts that matter most, then study how AI systems answer them and which pages are being cited.",
  },
  {
    n: "03",
    h: "Compare your pages to the pages already winning",
    b: "We analyze the competitor and publisher pages being surfaced, reused, and relied on — then identify the exact gaps that keep your brand from moving from mention to recommendation.",
  },
  {
    n: "04",
    h: "Fix the owned-site foundation",
    b: "We improve the technical, structural, and content-level signals that help search engines and AI systems interpret your brand more accurately.",
  },
  {
    n: "05",
    h: "Strengthen the citation architecture",
    b: "We define where your supporting evidence needs to improve beyond the website itself so your brand is more strongly backed across the public sources that influence category understanding.",
  },
  {
    n: "06",
    h: "Execute in house",
    b: "We handle strategy, content, optimization, and support-layer execution under one roof so the work stays tied to the original diagnosis.",
  },
];

const proof = [
  {
    cat: "Household Appliance",
    metric: "+400%",
    label: "ChatGPT brand mentions across 100+ high-intent queries",
  },
  {
    cat: "Crypto Wallet",
    metric: "+120%",
    label: "AI Overview mentions across 80 high-intent queries (2 months)",
  },
  {
    cat: "Tax Relief",
    metric: "+112.5%",
    label: "AI Overview brand mentions across 19 high-intent queries (1 month)",
  },
];

const relatedServices = [
  {
    h: "Generative Engine Optimization (GEO)",
    b: "Improve retrieval and recommendation visibility in generative search environments.",
  },
  {
    h: "Answer Engine Optimization (AEO)",
    b: "Strengthen performance in answer-first discovery moments.",
  },
  {
    h: "AI SEO Services",
    b: "Connect classic SEO and AI-mediated search under one strategy.",
  },
  {
    h: "SEO for ChatGPT",
    b: "Improve how your brand is surfaced in ChatGPT-related research and recommendation flows.",
  },
  {
    h: "AI Content Optimization",
    b: "Make owned content easier for search engines and AI systems to interpret, retrieve, and reuse.",
  },
];

const inHouseVsAgency = {
  inHouse: [
    "You already have strong SEO and technical coverage in-house",
    "Internal content strategy and analytics are mature",
    "You have headcount and time to build market intelligence",
    "Cross-team accountability is already clearly owned",
  ],
  agency: [
    "Category is high-consideration and trust-led",
    "Buying decisions are shaped by comparison and proof",
    "Competitors are already winning recommendation environments",
    "You need decision-grade intelligence before expanding headcount",
    "You want one team accountable for diagnosis and execution",
  ],
};

const faqs = [
  {
    q: "What is AI search optimization in simple terms?",
    a: "AI search optimization is the work of making your brand easier to retrieve, cite, and recommend across AI-influenced search environments. It extends SEO into the places where buyers ask AI systems who to trust, what to compare, and which brand to choose.",
  },
  {
    q: "How is AI search optimization different from SEO?",
    a: "SEO focuses on rankings and organic traffic. AI search optimization includes SEO, but also looks at citation visibility, prompt-cluster performance, recommendation placement, source support, and how your brand is interpreted across AI-mediated discovery.",
  },
  {
    q: "Is AI search optimization the same as GEO, AEO, or AI SEO?",
    a: "Not exactly. We use AI search optimization as the umbrella term. Under that umbrella, GEO refers to generative engine optimization, AEO refers to answer engine optimization, and AI SEO refers to the overlap between traditional SEO and AI-influenced search behavior. The right strategy often uses all of them together.",
  },
  {
    q: "How do companies increase visibility in AI search?",
    a: "They improve the owned-site foundation, publish clearer decision-stage content, align pages to real prompt clusters, strengthen entity and schema signals, compare against the pages AI systems already cite, and build stronger support across the third-party sources shaping category trust.",
  },
  {
    q: "What strategies improve AI search rankings or citations?",
    a: "Stronger technical SEO and site structure; clearer page-level positioning; exact-match coverage for high-intent queries; better comparison, service, and FAQ content; cited-page comparison and content-gap analysis; stronger supporting evidence across authority sources; and ongoing measurement of prompt-cluster performance and recommendation gaps.",
  },
  {
    q: "Who offers AI search optimization services?",
    a: "Some SEO agencies are beginning to offer AI search services, but many still treat SEO, AI, content, and authority work as separate conversations. CiteWorks Studio offers AI search optimization services as part of a broader search visibility system designed for enterprise brands and agency partners.",
  },
  {
    q: "Can you help with ChatGPT, Google AI Overviews, Gemini, Perplexity, and Copilot?",
    a: "Yes. Our work is built around the broader search environment, including Google and the AI systems influencing comparison, evaluation, and recommendation behavior in your market.",
  },
  {
    q: "What should I look for when comparing the best agencies for AI search optimization?",
    a: "A partner that can connect classic SEO and AI search under one strategy; start with audit and evidence (not random deliverables); analyze cited pages and recommendation environments; improve both your owned content and your supporting evidence layer; and execute in house so the work stays tied to the original diagnosis.",
  },
];

const AISearchOptimization = () => {
  useEffect(() => {
    document.title =
      "AI Search Optimization Services for Enterprise Brands | CiteWorks Studio";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Enterprise AI search optimization services from CiteWorks Studio. Improve how your brand is retrieved, cited, framed, and recommended across Google, ChatGPT, AI Overviews, Gemini, Perplexity, and Copilot."
      );
    }
  }, []);

  return (
    <PageShell>
      {/* HERO */}
      <section className="relative pt-36 pb-24 overflow-hidden ambient-glow">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] conic-ring opacity-40 pointer-events-none float-y-slow" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6">
          <div className="reveal inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-7">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 pulse-ring" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
            </span>
            <span className="font-mono text-[13px] tracking-[0.16em] text-body uppercase">
              / AI Search Optimization · Enterprise
            </span>
          </div>

          <h1 className="reveal reveal-delay-1 display text-4xl sm:text-6xl md:text-7xl leading-[0.98] tracking-tight max-w-5xl">
            AI Search Optimization Services for{" "}
            <span className="text-gradient">Enterprise Brands</span>.
          </h1>

          <div className="reveal reveal-delay-2 mt-8 max-w-3xl space-y-5 text-lg text-body leading-relaxed">
            <p>
              AI search optimization helps enterprise brands improve how they are{" "}
              <strong className="text-foreground">retrieved, cited, framed, and recommended</strong>{" "}
              when buyers use Google, AI answers, and AI-shaped discovery tools to research who to
              trust.
            </p>
            <p>
              CiteWorks Studio treats AI search optimization as part of the full search environment
              — improving rankings, owned-site signals, citation strength, and recommendation
              eligibility together. Not as a separate side channel.
            </p>
          </div>

          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-3">
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
              <a href="#approach">EXPLORE OUR PROCESS</a>
            </Button>
          </div>

          <p className="mt-10 text-sm text-body max-w-2xl font-mono">
            Best fit for enterprise brands and white-label agency partners in high-consideration
            categories where buyers compare before they buy.
          </p>
        </div>
      </section>

      {/* RELATED SERVICES STRIP */}
      <section className="py-16 border-t border-border/40 bg-card/30">
        <div className="mx-auto max-w-[1400px] px-6">
          <p className="eyebrow mb-6">/ Related services within this work</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {relatedServices.map((s) => (
              <div
                key={s.h}
                className="card-premium p-5 hover:border-primary/40 transition-colors"
              >
                <h3 className="text-sm font-semibold leading-snug text-foreground">{s.h}</h3>
                <p className="mt-3 text-xs text-body leading-relaxed">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT WITH SECTION NAV */}
      <div className="mx-auto max-w-[1400px] px-6 py-24 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-3">
          <SectionNav items={onThisPage} />
        </div>

        <div className="lg:col-span-9 space-y-28">
          {/* WHAT IS */}
          <section id="what-is" className="scroll-mt-28">
            <p className="eyebrow mb-4">/ Definition</p>
            <h2 className="display text-3xl sm:text-5xl leading-[1.05] tracking-tight">
              What is AI search optimization?
            </h2>
            <div className="mt-8 space-y-5 text-body text-lg leading-relaxed max-w-3xl">
              <p>
                AI search optimization is the practice of improving how your brand appears in
                AI-influenced search and answer environments. Some teams call it AI search engine
                optimization, AI search SEO, AI optimization, or artificial intelligence
                optimization. The goal is the same:{" "}
                <strong className="text-foreground">
                  make your brand easier for intelligent systems to understand, retrieve, support,
                  and recommend
                </strong>{" "}
                when commercial intent is high.
              </p>
              <p>
                For enterprise brands, AI search optimization matters because search behavior no
                longer stops at the blue links. Buyers move between rankings, AI summaries, reviews,
                comparison pages, community discussions, and brand content before they shortlist
                providers. A brand can be credible, proven, and commercially strong — and still be
                underrepresented in the answers buyers actually see.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {fourPillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.h}
                    className="card-premium p-6 hover:border-primary/40 transition-colors"
                  >
                    <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="display text-xl">{p.h}</h3>
                    <p className="mt-3 text-sm text-body leading-relaxed">{p.b}</p>
                  </div>
                );
              })}
            </div>

            <p className="mt-8 text-body leading-relaxed max-w-3xl">
              This is not about chasing one model or gaming one platform. It is about building a
              stronger retrieval and recommendation footprint across the environments that shape
              real buying decisions.
            </p>
          </section>

          {/* VS SEO */}
          <section id="vs-seo" className="scroll-mt-28">
            <p className="eyebrow mb-4">/ Comparison</p>
            <h2 className="display text-3xl sm:text-5xl leading-[1.05] tracking-tight">
              AI search optimization vs traditional SEO.
            </h2>
            <p className="mt-6 text-body text-lg leading-relaxed max-w-3xl">
              Traditional SEO focuses on helping your pages rank in search results. AI search
              optimization includes that, but it also looks at how your brand is interpreted,
              cited, and reused in AI-mediated discovery.
            </p>

            <div className="mt-10 grid md:grid-cols-2 gap-4">
              <div className="card-premium p-7">
                <p className="font-mono text-[13px] tracking-[0.16em] text-subtle uppercase mb-5">
                  Traditional SEO
                </p>
                <ul className="space-y-3">
                  {seoCol.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-body">
                      <span className="mt-2 size-1.5 rounded-full bg-foreground/40 shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-premium p-7 border-primary/30">
                <p className="font-mono text-[13px] tracking-[0.16em] text-primary uppercase mb-5">
                  AI Search Optimization adds
                </p>
                <ul className="space-y-3">
                  {aiCol.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground">
                      <Check className="size-4 text-primary mt-1 shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 card-premium p-7 sm:p-9">
              <p className="font-mono text-[13px] tracking-[0.16em] text-subtle uppercase mb-4">
                The simplest way to think about it
              </p>
              <ul className="space-y-3 text-foreground text-lg">
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-primary mt-1 shrink-0" /> SEO helps you{" "}
                  <strong>rank</strong>.
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-primary mt-1 shrink-0" /> AI search optimization
                  helps you <strong>rank, get cited, and get recommended</strong>.
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-primary mt-1 shrink-0" /> The strongest programs do
                  both under one coordinated strategy.
                </li>
              </ul>
            </div>

            <p className="mt-8 text-body leading-relaxed max-w-3xl">
              AI search optimization is also not the same thing as simply using AI tools to speed
              up SEO tasks. It is about improving how your brand performs in the environments where
              buyers ask AI what to choose, who to trust, and how to compare options.
            </p>
          </section>

          {/* SERVICES INCLUDE */}
          <section id="services" className="scroll-mt-28">
            <p className="eyebrow mb-4">/ Scope</p>
            <h2 className="display text-3xl sm:text-5xl leading-[1.05] tracking-tight">
              What AI search optimization services include.
            </h2>
            <p className="mt-6 text-body text-lg leading-relaxed max-w-3xl">
              A serious AI search optimization program should not start with random deliverables.
              It should start with evidence.
            </p>

            <div className="mt-12 space-y-4">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <article
                    key={s.n}
                    className="card-premium p-7 sm:p-8 grid lg:grid-cols-12 gap-6 items-start hover:border-primary/40 transition-colors"
                  >
                    <div className="lg:col-span-3 flex items-center gap-4">
                      <span className="font-mono text-[13px] tracking-[0.16em] text-primary">
                        {s.n}
                      </span>
                      <span className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-background">
                        <Icon className="size-5 text-primary" />
                      </span>
                    </div>
                    <div className="lg:col-span-9">
                      <h3 className="display text-xl sm:text-2xl leading-tight">{s.title}</h3>
                      <p className="mt-3 text-body leading-relaxed">{s.body}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            <p className="mt-8 text-body leading-relaxed max-w-3xl">
              If you're comparing AI search optimization services, look for a partner that can
              connect SEO, AI search, content, technical foundations, and authority-building under
              one system. If those pieces are split across multiple vendors, the strategy usually
              becomes fragmented.
            </p>

            <div className="mt-10">
              <Button
                asChild
                className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 btn-glow px-7 h-14"
              >
                <Link to="/request-audit">
                  REQUEST AN ENTERPRISE AUDIT
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </Button>
            </div>
          </section>

          {/* APPROACH */}
          <section id="approach" className="scroll-mt-28">
            <p className="eyebrow mb-4">/ Our approach</p>
            <h2 className="display text-3xl sm:text-5xl leading-[1.05] tracking-tight">
              How CiteWorks improves citation and recommendation visibility.
            </h2>
            <p className="mt-6 text-body text-lg leading-relaxed max-w-3xl">
              We approach AI search optimization as a full search environment problem, not a
              publishing-only problem. That means we start by finding the real bottleneck:
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 max-w-3xl">
              {[
                "Are you losing rankings on the keyword layer?",
                "Are competitors being recommended ahead of you in AI prompts?",
                "Is your site too weak technically or structurally?",
                "Is your content missing the concepts AI systems keep retrieving?",
                "Is the wider evidence layer around your brand too thin?",
              ].map((q) => (
                <li
                  key={q}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card/40 p-4 text-sm text-body"
                >
                  <Layers className="size-4 text-primary mt-0.5 shrink-0" />
                  {q}
                </li>
              ))}
            </ul>

            <p className="mt-10 font-mono text-[13px] tracking-[0.16em] text-subtle uppercase">
              Our approach usually follows this path
            </p>
            <ol className="mt-6 relative border-l border-border pl-8 space-y-8">
              {approachSteps.map((s) => (
                <li key={s.n} className="relative">
                  <span className="absolute -left-[42px] top-0 inline-flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-mono text-[12px] font-semibold">
                    {s.n}
                  </span>
                  <h3 className="display text-xl sm:text-2xl leading-tight">{s.h}</h3>
                  <p className="mt-2 text-body leading-relaxed max-w-3xl">{s.b}</p>
                </li>
              ))}
            </ol>

            {/* Proof */}
            <div className="mt-14">
              <p className="eyebrow mb-6">/ Proof across Google and AI</p>
              <div className="grid sm:grid-cols-3 gap-4">
                {proof.map((p) => (
                  <div key={p.cat} className="card-premium p-7">
                    <p className="font-mono text-[13px] tracking-[0.16em] text-subtle uppercase mb-5">
                      {p.cat}
                    </p>
                    <p className="display text-5xl text-gradient leading-none">{p.metric}</p>
                    <p className="mt-4 text-sm text-body leading-relaxed">{p.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-1.5 font-mono text-[13px] font-semibold tracking-[0.14em] text-primary hover:gap-2.5 transition-all"
                >
                  EXPLORE FULL CASE STUDIES <ArrowUpRight className="size-3" />
                </Link>
              </div>
            </div>
          </section>

          {/* IN-HOUSE VS AGENCY */}
          <section id="in-house-vs-agency" className="scroll-mt-28">
            <p className="eyebrow mb-4">/ Decision framework</p>
            <h2 className="display text-3xl sm:text-5xl leading-[1.05] tracking-tight">
              In-house vs agency for AI search optimization.
            </h2>
            <p className="mt-6 text-body text-lg leading-relaxed max-w-3xl">
              For some brands, an in-house team can own part of AI search optimization. For
              others, fragmented ownership across SEO, content, AI, and authority-building means
              nobody is accountable for how the pieces connect.
            </p>

            <div className="mt-10 grid md:grid-cols-2 gap-4">
              <div className="card-premium p-7">
                <p className="font-mono text-[13px] tracking-[0.16em] text-subtle uppercase mb-5">
                  In-house can be the right answer when
                </p>
                <ul className="space-y-3">
                  {inHouseVsAgency.inHouse.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-body">
                      <Check className="size-4 text-foreground/60 mt-1 shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-premium p-7 border-primary/30">
                <p className="font-mono text-[13px] tracking-[0.16em] text-primary uppercase mb-5">
                  Agency support is usually better when
                </p>
                <ul className="space-y-3">
                  {inHouseVsAgency.agency.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground">
                      <Check className="size-4 text-primary mt-1 shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 card-premium p-7 sm:p-9">
              <p className="text-body leading-relaxed">
                Many clients use CiteWorks in a{" "}
                <strong className="text-foreground">hybrid model</strong>: we provide the audit,
                intelligence layer, strategy, and specialist execution while collaborating closely
                with the internal marketing team or existing agency.
              </p>
              <p className="mt-4 text-body leading-relaxed">
                If you're asking whether it's worth hiring an agency for AI search optimization,
                the practical question is simpler: do you need faster clarity on where visibility
                is being lost — and a tighter plan for fixing it?
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 btn-glow px-7 h-14"
                >
                  <Link to="/request-audit">
                    START WITH THE AUDIT
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] border-foreground/35 hover:bg-foreground/5 px-7 h-14"
                >
                  <Link to="/agency-partners">TALK WHITE-LABEL</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section id="faqs" className="scroll-mt-28">
            <p className="eyebrow mb-4">/ FAQs</p>
            <h2 className="display text-3xl sm:text-5xl leading-[1.05] tracking-tight">
              Frequently asked questions.
            </h2>

            <Accordion type="single" collapsible className="mt-10 w-full">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${i}`}
                  className="border-b border-border last:border-0"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold py-6 hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-body leading-relaxed pb-6 pr-8">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </div>

      {/* FINAL AUDIT CTA */}
      <section id="audit" className="py-20 border-t border-border/40 scroll-mt-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative glass-strong rounded-3xl border-gradient p-10 sm:p-14 overflow-hidden">
            <div className="absolute -top-32 -right-20 w-96 h-96 conic-ring opacity-50 pointer-events-none" />
            <div className="relative">
              <p className="eyebrow">/ Visibility Audit</p>
              <h2 className="display text-3xl sm:text-5xl mt-5 leading-[1.05]">
                Start with the audit.
              </h2>
              <p className="mt-5 text-body text-lg max-w-2xl leading-relaxed">
                We'll show you where your brand stands across Google rankings, AI recommendation
                environments, citation sources, technical SEO, and competitor positioning — then
                turn that into a practical roadmap for growth.
              </p>
              <p className="mt-4 text-sm text-subtle max-w-2xl">
                Best fit for enterprise brands and agency partners that need serious strategy, not
                surface-level reporting.
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
                  <Link to="/agency-partners">TALK WHITE-LABEL</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default AISearchOptimization;
