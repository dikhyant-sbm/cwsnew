import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowLeft, Check, Quote, Sparkles, Target, Network, Search, BarChart3 } from "lucide-react";
import { PageShell } from "@/components/landing/Shell";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImage from "@/assets/job-board-ai-hero.jpg";

const snapshot = [
  { label: "Primary Metric", value: "100+" },
  { label: "Focus", value: "AI Visibility" },
  { label: "Tracked Outcomes", value: "5" },
  { label: "Core Theme", value: "Brand discovery was moving to AI, without them" },
];

const toc = [
  { id: "results", label: "Results" },
  { id: "market-context", label: "Market Context" },
  { id: "challenge", label: "The Challenge" },
  { id: "approach", label: "Our Approach" },
  { id: "outcome", label: "The Outcome" },
  { id: "next-step", label: "Next Step" },
  { id: "learn-more", label: "Learn More" },
];

const headlineStats = [
  { value: "100+", label: "cited pages influenced, strengthening the brand's presence in the sources AI systems refer to" },
  { value: "2,791", label: "keywords ranked in Google's top 10" },
  { value: "71%", label: "increase in brand mentions in AI Overviews" },
];

const measurement = [
  { h: "AI Share of Voice", b: "The brand's share of appearances relative to tracked competitors across AI answers." },
  { h: "Citations", b: "The URLs and sources AI platforms reference while generating responses, including online community forums where real users discuss pain points and comparisons." },
  { h: "Brand Mentions", b: "How often the brand is named in AI-generated answers." },
];

const approach = [
  {
    n: "01",
    icon: Search,
    title: "Mapped AI Visibility and Citation Sources",
    body: "We assessed how AI platforms referenced the brand and which sources most consistently influenced those answers. Our reporting tracked citation and mention patterns across AI Overviews, ChatGPT, Gemini, AI Mode, Perplexity, and Copilot, identifying the domains and discussion environments shaping AI-generated recommendations in the category.",
  },
  {
    n: "02",
    icon: BarChart3,
    title: "Tracked Momentum Month-Over-Month",
    body: "We tracked month-over-month movement to understand whether new activity increased brand mentions in AI answers and by how much. This helped identify which topics, discussion formats, and source types were being referenced more frequently across AI Overviews, ChatGPT, and Gemini. We also monitored whether citations were consolidating around more accurate, higher trust sources over time. Based on performance, we scaled what delivered measurable lift and paused approaches that didn't.",
  },
  {
    n: "03",
    icon: Network,
    title: "Focused on the Channels LLMs Were Already Pulling From",
    body: "In the employment sector, conversation volume is enormous. Popular social forums were among the brand's top cited domains, so we focused our efforts on building positive perception on these platforms to influence the way LLMs talked about the brand. Instead of producing run-of-the-mill blog posts, CiteWorks Studio implemented an AI citation strategy focused on improving the brand's representation in high-intent, public discussions tied to top employment queries. By strengthening high-authority community conversations and references, we shifted the sources LLMs drew from when generating answers about the client. Over time, these discussions became the most trusted context LLMs surfaced, helping shape brand perception more positively.",
  },
];

const outcomes = [
  "~400 citation-bearing engagements delivered in 4 months",
  "#6 average ranking position for all high-intent keywords in the Google SERPs",
  "71% increase in brand mentions in AI Overviews in a month, measured across 30,000+ tracked prompts",
  "2,791 keywords appearing in the top 10 results for priority queries",
  "100+ high-authority pages and discussion sources with improved citation context influencing AI answers",
];

const auditCards = [
  { icon: Target, title: "Measurable, Repeatable Programme", body: "Build a durable foundation of credible citations that compounds over time and continues to influence AI answers as new queries emerge." },
  { icon: Network, title: "Citation Architecture Review", body: "Identify which high-authority community sources are and aren't working in your favour across AI platforms." },
  { icon: Sparkles, title: "AI Visibility Audit", body: "Understand exactly how LLMs are referencing your brand today and which sources are shaping those answers." },
];

const learn = [
  { q: "What Is AI Citation Intelligence?", a: "AI citation intelligence is the process of measuring where AI platforms source their information and how frequently a brand is mentioned or referenced in AI-generated responses. Because LLMs synthesize across multiple sources, the sites and brands that appear repeatedly tend to influence how a topic or company is framed. This practice focuses on identifying which sources shape AI outputs and tracking brand visibility across different AI systems." },
  { q: "What Is Citation Architecture?", a: "Citation architecture describes the set of sources that consistently inform how AI systems talk about a brand, product, or topic. LLMs draw from websites, articles, forums, and public discussion, and the sources they rely on most often become the backbone of their answers. Building strong citation architecture means ensuring that accurate, credible, high-authority sources are the ones most likely to shape the way AI tools summarize and recommend a brand." },
  { q: "What Is Generative Engine Optimization?", a: "Generative engine optimization (GEO) is the practice of improving the chances that AI systems use and cite your brand or content when generating answers. While traditional SEO is centered on ranking pages in search results, GEO focuses on how LLMs retrieve, interpret, and combine information when responding to a question. The objective is to strengthen the content and sources AI systems rely on, so your brand is treated as a trusted reference in AI responses." },
  { q: "What Is AI Share of Voice?", a: "AI share of voice tracks how often a brand appears in AI-generated answers compared with competitors in the same category. It reflects visibility across AI platforms such as ChatGPT, Gemini, Claude, and Perplexity. Monitoring AI share of voice helps organizations see whether AI systems consistently include and recommend their brand for key queries — or whether competitor brands are showing up more often." },
];

const continueReading = [
  { title: "How AI Search Is Recommending Auto Care Brands in 2026", to: "/case-studies", excerpt: "How a leading auto care brand reshaped its citation footprint to be recommended by AI Overviews and ChatGPT." },
  { title: "How AI Search Is Recommending eCOM Collaboration Platforms", to: "/case-studies", excerpt: "Inside a B2B SaaS engagement that turned community discussions into the dominant context for AI answers." },
  { title: "How AI Search Is Recommending Auto Care Brands", to: "/case-studies", excerpt: "A walkthrough of an enterprise category where retrieval-layer authority decides shortlist presence." },
];

const author = {
  name: "Mark Huntley",
  initials: "MH",
  role: "AI Search & Citation Analyst, CiteWorks Studio",
  bio: "Mark Huntley analyzes how large language models surface, compare, and recommend brands across AI-generated answers. He specializes in citation architecture, embedding-level relevance, and translating AI visibility data into remediation plans that move recommendation share.",
};

const keyTakeaways = [
  "Brand discovery was shifting to AI answers without the platform appearing — visibility, not awareness, was the gap.",
  "Targeting the community and editorial sources LLMs already cited lifted AI Overview brand mentions by 71%.",
  "A durable citation footprint put 2,791 keywords in Google's top 10 and influenced 100+ cited pages.",
];
const JobBoardAISearch = () => {
  const [activeSection, setActiveSection] = useState<string>(toc[0]?.id ?? "");

  useEffect(() => {

    document.title = "Job Board AI Search Case Study | CiteWorks Studio";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "How a job posting platform secured a place in AI's shortlist for employers — 100+ cited pages influenced, 2,791 keywords in Google's top 10, and a 71% lift in AI Overview brand mentions."
      );
    }

    const pageUrl =
      "https://cwsnew.lovable.app/case-studies/job-board-ai-search";
    const ld = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          headline:
            "How a Job Posting Platform Secured a Place in AI's Shortlist for Employers",
          description:
            "100+ cited pages influenced, 2,791 keywords in Google's top 10, and a 71% lift in AI Overview brand mentions.",
          datePublished: "2026-05-26",
          author: {
            "@type": "Person",
            name: author.name,
            jobTitle: author.role,
          },
          publisher: { "@type": "Organization", name: "CiteWorks Studio" },
          mainEntityOfPage: pageUrl,
        },
        {
          "@type": "FAQPage",
          mainEntity: learn.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://cwsnew.lovable.app/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Case Studies",
              item: "https://cwsnew.lovable.app/case-studies",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Job Board AI Search Case Study",
              item: pageUrl,
            },
          ],
        },
      ],

    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "jobboard-jsonld";
    script.text = JSON.stringify(ld);
    document.head.appendChild(script);

    return () => {
      document.getElementById("jobboard-jsonld")?.remove();
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    const els = toc
      .map((t) => document.getElementById(t.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);



  return (
    <PageShell>
      {/* HERO */}
      <section className="relative pt-32 pb-12">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute -top-40 right-[-10%] w-[700px] h-[700px] conic-ring opacity-30 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.18em] text-body hover:text-foreground transition-colors mb-8 uppercase"
          >
            <ArrowLeft className="size-3.5" /> All Case Studies
          </Link>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8">
              <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-primary mb-5">
                / Client Implementation Case Study
              </p>
              <h1 className="display text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-tight">
                Job Board AI Search <span className="text-gradient">Case Study</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-body leading-relaxed max-w-3xl">
                How a Job Posting Platform Secured a Place in AI's Shortlist for Employers.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-primary font-mono text-[13px] font-semibold tracking-[0.08em] ring-1 ring-primary/30">
                    {author.initials}
                  </span>
                  <span className="text-sm leading-tight">
                    <span className="block text-foreground font-medium">
                      By {author.name}
                    </span>
                    <span className="block text-body text-[13px]">
                      {author.role}
                    </span>
                  </span>
                </div>
                <span className="hidden sm:block h-8 w-px bg-border" />
                <span className="font-mono text-[12px] tracking-[0.04em] text-subtle uppercase">
                  9 min read
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 btn-glow px-7 h-12"
                >
                  <Link to="/request-audit">
                    REQUEST AN ENTERPRISE AUDIT
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] border-foreground/30 hover:bg-foreground/5 px-7 h-12"
                >
                  <a href="#results">JUMP TO RESULTS</a>
                </Button>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="card-premium overflow-hidden">
                <div className="relative h-32 overflow-hidden border-b border-border">
                  <img
                    src={heroImage}
                    alt="AI search interface overlay above a laptop, illustrating how large language models surface citations and recommendations."
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent pointer-events-none" />
                </div>
                <div className="p-6">
                  <p className="font-mono text-[12px] tracking-[0.18em] text-subtle uppercase mb-5">
                    Engagement Snapshot
                  </p>
                  <dl className="space-y-4 text-sm">
                    {snapshot.map((row, i) => (
                      <div
                        key={row.label}
                        className={`flex justify-between gap-4 ${i < snapshot.length - 1 ? "border-b border-border pb-3" : ""}`}
                      >
                        <dt className="text-body shrink-0">{row.label}</dt>
                        <dd className="text-foreground font-medium text-right">{row.value}</dd>
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
        {/* TOC */}
        <aside className="lg:col-span-3">
          <div className="lg:sticky lg:top-28">
            <p className="font-mono text-[12px] tracking-[0.18em] text-subtle uppercase mb-4">
              On this page
            </p>
            <nav aria-label="On this page">
              <ul className="space-y-1.5 text-sm border-l border-border">
                {toc.map((t) => {
                  const isActive = activeSection === t.id;
                  return (
                    <li key={t.id}>
                      <a
                        href={`#${t.id}`}
                        aria-current={isActive ? "true" : undefined}
                        className={`block -ml-px border-l pl-4 py-1 transition-colors ${
                          isActive
                            ? "border-primary text-primary font-medium"
                            : "border-transparent text-body hover:text-primary"
                        }`}
                      >
                        {t.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

          </div>
        </aside>

        {/* CONTENT */}
        <div className="lg:col-span-9 space-y-24">
          {/* KEY TAKEAWAYS / TL;DR */}
          <section className="scroll-mt-28">
            <div className="card-premium p-7 sm:p-8 border-primary/30 bg-primary/[0.04]">
              <div className="flex items-center gap-2 mb-5">
                <Sparkles className="size-4 text-primary" />
                <p className="font-mono text-[12px] tracking-[0.18em] text-primary uppercase">
                  Key Takeaways
                </p>
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {keyTakeaways.map((t) => (
                  <li
                    key={t}
                    className="flex gap-3 text-[14.5px] text-body leading-relaxed"
                  >
                    <Check className="size-4 text-primary mt-1 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* RESULTS */}

          <section id="results" className="scroll-mt-28">
            <h2 className="font-mono text-[12px] tracking-[0.18em] uppercase text-primary mb-4">
              / Key Outcomes
            </h2>
            <p className="display text-3xl sm:text-4xl leading-tight tracking-tight text-foreground">
              Results at a glance.
            </p>

            <p className="mt-4 text-body">
              Top metrics from a 5-month long campaign with 480 engagements:
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {headlineStats.map((s) => (
                <div
                  key={s.value}
                  className="card-premium p-6 hover:border-primary/40 transition-colors"
                >
                  <p className="display text-5xl text-gradient leading-none">{s.value}</p>
                  <p className="text-sm text-body mt-4 leading-relaxed">{s.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* MARKET CONTEXT */}
          <section id="market-context" className="scroll-mt-28">
            <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-primary mb-4">
              / Market Context
            </p>
            <h2 className="display text-3xl sm:text-4xl leading-[1.1] tracking-tight max-w-2xl">
              Brand discovery was moving to AI, without them.
            </h2>
            <div className="mt-8 space-y-5 text-body text-base sm:text-lg leading-relaxed">
              <p>
                When it comes to hiring, trust issues surface fast and public conversations about
                fake listings, scams, and poor candidate experiences can spread widely.
              </p>
              <p>
                That made the platform's citation footprint — the sources AI systems relied on to
                summarize and compare brands — a real risk point at the decision moment, when
                employers were choosing where to post roles.
              </p>
              <p>
                Employers increasingly turned to tools like Google AI Overviews, Gemini, and ChatGPT
                when choosing a job posting platform. These systems don't just rank pages; they
                synthesize recommendations from across the web, drawing heavily on high-authority
                public forums and online communities.
              </p>
              <p>
                The platform recognized a structural risk: even a handful of prominent negative
                threads could disproportionately shape what AI systems repeated. Meanwhile, positive
                sentiment buried in low-visibility corners of the internet had no influence at all.
              </p>
              <p className="text-foreground font-medium">
                The core problem wasn't brand reputation in the traditional sense. It was citation
                architecture — which sources were being pulled into AI answers, and what those
                sources said.
              </p>
            </div>
          </section>

          {/* CHALLENGE */}
          <section id="challenge" className="scroll-mt-28">
            <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-primary mb-4">
              / The Challenge
            </p>
            <h2 className="display text-3xl sm:text-4xl leading-[1.1] tracking-tight max-w-2xl">
              A reliable way to measure and strengthen AI visibility.
            </h2>
            <p className="mt-6 text-body text-lg leading-relaxed">
              The team needed a repeatable measurement framework to track:
            </p>
            <div className="mt-8 grid md:grid-cols-3 gap-4">
              {measurement.map((m) => (
                <div key={m.h} className="card-premium p-6">
                  <h3 className="display text-lg leading-tight">{m.h}</h3>
                  <p className="mt-3 text-sm text-body leading-relaxed">{m.b}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-body leading-relaxed">
              This could help the brand remain a top choice for employers and hiring managers. The
              final requirement was identifying an agency partner that could deliver this as a
              measurable, repeatable program.
            </p>
          </section>

          {/* APPROACH */}
          <section id="approach" className="scroll-mt-28">
            <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-primary mb-4">
              / Our Approach
            </p>
            <h2 className="display text-3xl sm:text-4xl leading-tight tracking-tight">
              What we did.
            </h2>
            <div className="mt-8 space-y-4">
              {approach.map((step) => {
                const Icon = step.icon;
                return (
                  <article
                    key={step.n}
                    className="card-premium p-7 sm:p-8 hover:border-primary/40 transition-colors"
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <span className="font-mono text-[12px] tracking-[0.18em] text-primary uppercase">
                        STEP / {step.n}
                      </span>
                      <span className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-background">
                        <Icon className="size-4 text-primary" />
                      </span>
                    </div>
                    <h3 className="display text-xl sm:text-2xl leading-tight">{step.title}</h3>
                    <p className="mt-4 text-body leading-relaxed">{step.body}</p>
                  </article>
                );
              })}
            </div>

            {/* Pull quote */}
            <figure className="mt-12 card-premium p-8 sm:p-10">
              <Quote className="size-8 text-primary mb-5" aria-hidden="true" />
              <blockquote className="display text-xl sm:text-2xl leading-[1.25] tracking-tight">
                "The shift wasn't just in our rankings but in what AI systems were recommending when
                employers searched without knowing our name. That was a different kind of
                visibility, and it's the kind that matters now."
              </blockquote>
              <figcaption className="mt-6 font-mono text-[12px] tracking-[0.18em] text-body uppercase">
                — VP of Marketing, Job Posting Platform
              </figcaption>
            </figure>
          </section>

          {/* OUTCOME */}
          <section id="outcome" className="scroll-mt-28">
            <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-primary mb-4">
              / The Outcome
            </p>
            <h2 className="display text-3xl sm:text-4xl leading-tight tracking-tight">
              Measurable, Compounding Results.
            </h2>
            <div className="mt-6 space-y-4 text-body leading-relaxed">
              <p>
                The campaign delivered results across both traditional search and AI-generated
                discovery, reflecting how closely the two are now intertwined.
              </p>
              <p>
                Importantly, the gains were not a one-time spike. By building a durable base of
                credible citations, the firm now has a self-reinforcing foundation, one that
                continues to influence AI answers as new queries emerge.
              </p>
            </div>
            <ul className="mt-8 card-premium p-2 divide-y divide-border">
              {outcomes.map((o) => (
                <li key={o} className="flex items-start gap-4 p-5">
                  <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="size-4" />
                  </span>
                  <p className="text-foreground leading-relaxed">{o}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button
                asChild
                className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 btn-glow px-7 h-12"
              >
                <Link to="/request-audit">
                  REQUEST AN ENTERPRISE AUDIT
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </Button>
            </div>
          </section>

          {/* NEXT STEP */}
          <section id="next-step" className="scroll-mt-28">
            <div className="relative glass-strong rounded-3xl border-gradient p-8 sm:p-10 overflow-hidden">
              <div className="absolute -top-32 -right-20 w-96 h-96 conic-ring opacity-40 pointer-events-none" />
              <div className="relative">
                <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-primary mb-4">
                  / Take the next step
                </p>
                <h2 className="display text-3xl sm:text-4xl leading-tight tracking-tight max-w-2xl">
                  Want to Understand Your AI Citation Footprint?
                </h2>
                <p className="mt-4 text-body text-lg max-w-2xl">
                  We start every engagement with a full audit.
                </p>
                <div className="mt-8 grid md:grid-cols-3 gap-4">
                  {auditCards.map((c) => {
                    const Icon = c.icon;
                    return (
                      <div
                        key={c.title}
                        className="rounded-2xl border border-border bg-background/60 backdrop-blur-sm p-5 hover:border-primary/40 transition-colors"
                      >
                        <span className="inline-flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                          <Icon className="size-4" />
                        </span>
                        <h3 className="text-sm font-semibold leading-snug">{c.title}</h3>
                        <p className="mt-2 text-sm text-body leading-relaxed">{c.body}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-8">
                  <Button
                    asChild
                    className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 btn-glow px-7 h-12"
                  >
                    <Link to="/request-audit">
                      REQUEST AN ENTERPRISE AUDIT
                      <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* LEARN MORE */}
          <section id="learn-more" className="scroll-mt-28">
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-5">
                <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-primary mb-4">
                  / Learn More
                </p>
                <h2 className="display text-3xl sm:text-4xl leading-tight tracking-tight">
                  Understanding AI search visibility.
                </h2>
                <p className="mt-5 text-body leading-relaxed">
                  AI search experiences create answers by pulling information from many places
                  online and summarizing it into a single response.
                </p>
              </div>
              <div className="md:col-span-7">
                <Accordion type="single" collapsible className="w-full">
                  {learn.map((l, i) => (
                    <AccordionItem
                      key={l.q}
                      value={`item-${i}`}
                      className="border-b border-border last:border-0"
                    >
                      <AccordionTrigger className="text-left text-base sm:text-lg font-semibold py-5 hover:no-underline">
                        {l.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-body leading-relaxed pb-5 pr-4">
                        {l.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          {/* AUTHOR */}
          <section>
            <div className="card-premium p-8 flex flex-col sm:flex-row gap-6 items-start">
              <div className="shrink-0 size-20 rounded-full bg-gradient-to-br from-primary to-foreground/60 flex items-center justify-center text-2xl font-semibold text-primary-foreground">
                MH
              </div>
              <div>
                <p className="font-mono text-[12px] tracking-[0.18em] text-subtle uppercase mb-2">
                  / About The Author
                </p>
                <h3 className="display text-2xl">Mark Huntley</h3>
                <p className="text-sm text-body mt-1">Founder &amp; CEO</p>
                <p className="mt-4 text-body leading-relaxed">
                  Mark Huntley, J.D. is the founder of CiteWorks Studio, a strategic advisory
                  focused on visibility, authority, and recommendation presence in AI-shaped search
                  environments. His work centers on embedding-level GEO, vector optimization, and
                  cosine gap engineering — helping brands align their digital presence with the
                  retrieval systems that increasingly shape discovery, interpretation, and choice.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* CONTINUE READING */}
      <section className="py-20 border-t border-border/40">
        <div className="mx-auto max-w-[1280px] px-6">
          <h2 className="display text-2xl sm:text-3xl mb-8">Continue Reading</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {continueReading.map((c) => (
              <Link
                key={c.title}
                to={c.to}
                className="card-premium p-6 hover:border-primary/40 transition-colors group block"
              >
                <h3 className="display text-lg leading-snug group-hover:text-primary transition-colors">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm text-body leading-relaxed">{c.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-[12px] tracking-[0.16em] text-primary uppercase">
                  Read more <ArrowUpRight className="size-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER NAV */}
      <section className="py-12 border-t border-border/40">
        <div className="mx-auto max-w-[1280px] px-6 flex flex-wrap items-center justify-between gap-6">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.18em] text-body hover:text-foreground transition-colors uppercase"
          >
            <ArrowLeft className="size-3.5" /> All Case Studies
          </Link>
          <Link
            to="/request-audit"
            className="group inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.18em] text-primary uppercase"
          >
            Request an Enterprise Audit
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
};

export default JobBoardAISearch;
