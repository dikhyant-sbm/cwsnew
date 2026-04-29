import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { DashboardShowcase } from "@/components/landing/DashboardShowcase";
import { ResultsChart } from "@/components/landing/ResultsChart";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState, useMemo } from "react";

const FILTERS = [
  "All",
  "B2B SaaS",
  "Finance",
  "Insurance",
  "Ecommerce",
  "Home Services",
  "Apps",
  "Agency Use Cases",
  "AI Visibility",
  "Google Visibility",
  "Citation Architecture",
] as const;
type Filter = typeof FILTERS[number];

const movement = [
  "Google search rankings",
  "AI-generated answers",
  "AI Overview mentions",
  "ChatGPT brand mentions",
  "Citation footprint",
  "Third-party source visibility",
  "Recommendation-stage queries",
  "High-intent keyword coverage",
  "Buyer trust environments",
  "Estimated branded visibility value",
];

const results = [
  {
    cat: "Tax Relief",
    ai: "112.5% increase in AI Overview brand mentions across 19 high-intent tax queries",
    search: "#6 average ranking position; 9,984 keywords in Google's top 10",
    source: "500+ high-impact community sources and cited pages strengthened",
  },
  {
    cat: "Household Appliance",
    ai: "400% increase in ChatGPT brand mentions across 100+ high-intent queries",
    search: "#7 average ranking; 13,679 keywords in Google's top 10",
    source: "100 high-impact community sources and cited pages strengthened",
  },
  {
    cat: "Crypto Wallet",
    ai: "120% increase in AI Overview brand mentions across 80 high-intent crypto wallet queries",
    search: "#6 average ranking; 4,136 keywords in Google's top 10",
    source: "300+ high-impact cited pages and discussion sources strengthened",
  },
  {
    cat: "Pest Control",
    ai: "64 cited pages influenced in 5 days for ChatGPT and AI Overviews",
    search: "520 high-value keywords reached Google's top 10",
    source: "23 high-authority citation opportunities activated",
  },
];

const cases: { n: string; title: string; desc: string; best: string[]; categories: Filter[] }[] = [
  { n: "01", title: "Job Board AI Search Case Study", desc: "How a job board responded when AI-powered search began reshaping how employers discover job posting platforms.", best: ["B2B platforms", "Recruiting technology", "Marketplace visibility", "AI recommendation tracking"], categories: ["B2B SaaS", "AI Visibility"] },
  { n: "02", title: "Crypto Wallet AI Search Case Study", desc: "How a crypto wallet improved AI Overview brand mentions by 120% across 80 high-intent crypto wallet queries while strengthening cited pages and discussion sources.", best: ["Trust-sensitive categories", "Fintech", "Crypto", "Security-driven buyer journeys"], categories: ["Finance", "AI Visibility", "Citation Architecture"] },
  { n: "03", title: "Household Appliance AI Search Case Study", desc: "How a household appliance brand strengthened citation footprint and source context — a 400% MoM lift in ChatGPT brand mentions and 13,679 keywords in Google's top 10.", best: ["Consumer products", "Appliances", "Comparison-heavy ecommerce", "Product recommendation visibility"], categories: ["Ecommerce", "AI Visibility", "Google Visibility"] },
  { n: "04", title: "Kitchen Appliance AI Search Case Study", desc: "How a kitchen appliance brand built presence across high-intent decision environments as buyer research moved from product pages into communities, comparisons, and AI recommendations.", best: ["Consumer products", "Product-led SEO", "Community-driven buying", "AI recommendation visibility"], categories: ["Ecommerce", "AI Visibility"] },
  { n: "05", title: "Tax Relief AI Search Case Study", desc: "How a tax relief brand improved competitiveness across Google page-one results and AI-generated recommendations, including a 112.5% increase in AI Overview brand mentions.", best: ["Financial services", "High-trust categories", "Lead generation", "Reputation-sensitive search"], categories: ["Finance", "AI Visibility", "Google Visibility"] },
  { n: "06", title: "Budgeting App AI Search Case Study", desc: "How a budgeting app improved visibility across community threads, video tutorials, review platforms, and AI-generated answers that pull from public sources buyers already trust.", best: ["Apps", "Consumer fintech", "Review-led categories", "Community-driven discovery"], categories: ["Apps", "Finance", "Citation Architecture"] },
  { n: "07", title: "Insurance Technology AI Search Case Study", desc: "How an insurance technology company strengthened public discussions, authority channels, and third-party trust environments — 848 page-one keywords and 11 AI-referenced pages.", best: ["B2B technology", "Insurance technology", "Trust-led evaluation", "Longer buyer journeys"], categories: ["Insurance", "B2B SaaS", "Citation Architecture"] },
  { n: "08", title: "Language Learning App AI Search Case Study", desc: "How a language learning app strengthened its citation footprint across high-intent discovery surfaces and the sources AI systems reference when recommending tools.", best: ["Consumer apps", "Education technology", "App comparisons", "Recommendation-stage visibility"], categories: ["Apps", "Citation Architecture"] },
  { n: "09", title: "Mattress Company AI Search Case Study", desc: "How a mattress company strengthened citation footprint as buyers compared organic options through public reviews, sleep experts, and AI summaries before purchasing.", best: ["Consumer products", "Health-adjacent products", "Review-led ecommerce", "Comparison-stage buying"], categories: ["Ecommerce", "Citation Architecture"] },
  { n: "10", title: "Business Analytics Provider AI Search Case Study", desc: "How a B2B analytics provider increased AI recommendation visibility — 192 high-value keywords on page one and 35 pages with strengthened brand context referenced by AI systems.", best: ["B2B SaaS", "Business intelligence", "Vendor comparison searches", "Demo-driven buyer journeys"], categories: ["B2B SaaS", "AI Visibility", "Google Visibility"] },
  { n: "11", title: "Debt Relief AI Search Case Study", desc: "How a debt relief brand strengthened citation architecture across Google discovery and the sources AI systems reference when consumers compare providers.", best: ["Debt relief", "Financial services", "Trust-sensitive lead generation", "Reputation-heavy categories"], categories: ["Finance", "Citation Architecture"] },
  { n: "12", title: "Pet Insurance AI Search Case Study", desc: "How a pet insurance brand strengthened citation footprint as buyers increasingly used AI summaries and trusted third-party context before visiting provider websites.", best: ["Insurance", "Consumer finance", "Comparison searches", "Review-led buyer journeys"], categories: ["Insurance", "Citation Architecture"] },
  { n: "13", title: "Business Insurance AI Search Case Study", desc: "How a business insurance brand improved visibility across Google discovery and AI-led comparisons as small business owners used AI summaries and trusted proof points.", best: ["Commercial insurance", "B2B services", "Small business markets", "Trust-led comparison searches"], categories: ["Insurance", "B2B SaaS", "Google Visibility"] },
  { n: "14", title: "Pest Control AI Search Case Study", desc: "How a pest control brand strengthened citation footprint so it appeared more consistently across Google discovery and AI-generated recommendations during urgent searches.", best: ["Home services", "Urgent-intent categories", "Local-to-national operators", "Service comparison searches"], categories: ["Home Services", "Citation Architecture", "AI Visibility"] },
  { n: "15", title: "Home Services AI Search Case Study", desc: "How a home maintenance brand improved visibility across Google discovery and AI summaries people rely on when choosing urgent service providers.", best: ["Home services", "HVAC", "Plumbing", "High-intent local search"], categories: ["Home Services", "Google Visibility", "AI Visibility"] },
  { n: "16", title: "ID Theft Protection AI Search Case Study", desc: "How an identity theft protection brand strengthened citation footprint so it appeared more consistently during security comparisons and AI-generated recommendations.", best: ["Identity protection", "Cybersecurity", "Consumer security", "Trust-sensitive search"], categories: ["Apps", "Citation Architecture"] },
  { n: "17", title: "Eyewear AI Search Case Study", desc: "How an eyewear and sunglasses company strengthened citation footprint across public threads, creator reviews, and AI-generated comparisons.", best: ["Ecommerce", "Fashion", "Consumer products", "\"Is this legit?\" searches"], categories: ["Ecommerce", "Citation Architecture"] },
  { n: "18", title: "VA Mortgage Lender AI Search Case Study", desc: "How a VA mortgage lender strengthened citation footprint across Google discovery and lender-comparison answers as borrowers researched rates, eligibility, and trusted public guidance.", best: ["Mortgage lending", "Financial services", "Eligibility-driven search", "High-trust buyer journeys"], categories: ["Finance", "Google Visibility", "Citation Architecture"] },
  { n: "19", title: "Agency Partner Delivery", desc: "How an agency partner used CiteWorks Studio as a white-label backend to deliver GEO, AI search audits, and citation architecture to enterprise clients.", best: ["Agencies", "White-label delivery", "Multi-client programs", "Backend execution"], categories: ["Agency Use Cases", "AI Visibility", "Citation Architecture"] },
];

const patterns = [
  { n: "01", h: "AI visibility depends on public evidence.", b: "AI systems do not rely only on a company's website. They summarize, compare, and recommend using public sources, third-party references, reviews, discussions, and cited pages." },
  { n: "02", h: "Citation footprint matters.", b: "Brands improved visibility when their presence became stronger and clearer across the sources that shape buyer trust and AI-generated answers." },
  { n: "03", h: "High-intent queries beat generic awareness.", b: "The strongest opportunities came from decision-stage searches, comparison prompts, buyer questions, and category-specific recommendation moments." },
  { n: "04", h: "Category context changes the strategy.", b: "Trust-led, urgent-intent, and comparison-heavy categories do not behave the same way. Each requires a different source-layer and content strategy." },
  { n: "05", h: "Rankings and AI visibility work together.", b: "The case studies show movement across both traditional Google visibility and AI-shaped discovery — but not always through the same metric or surface." },
];

const measurement = [
  "Google rankings", "Top-10 keyword coverage", "Average ranking position",
  "AI Overview brand mentions", "ChatGPT brand mentions", "AI Share of Voice",
  "Cited pages", "Citation source strength", "Third-party source visibility",
  "Prompt-cluster visibility", "Competitor visibility", "Estimated branded visibility value",
];

const faqs = [
  { q: "Why are the case studies anonymized?", a: "Some CiteWorks Studio work is performed under white-label or confidential client arrangements. The public case studies preserve vertical-level detail, engagement type, and reported outcomes without disclosing client names." },
  { q: "What do these case studies measure?", a: "Google rankings, AI Overview mentions, ChatGPT brand mentions, AI Share of Voice, cited pages, source visibility, keyword coverage, average ranking position, competitor visibility, and estimated branded visibility value." },
  { q: "Are the monetary values revenue numbers?", a: "No. Published monetary values are directional estimates based on tracked keyword visibility and modeled paid-equivalent value. They should not be read as exact revenue attribution." },
  { q: "Are all case studies measured the same way?", a: "No. Different categories, AI surfaces, timelines, and campaign types require different measurement frameworks. The case studies should be compared descriptively, not blended into one universal benchmark." },
  { q: "What is the main pattern across the case studies?", a: "Visibility improves when companies strengthen both search presence and source-layer authority. Rankings matter, but so do citations, public discussions, trusted sources, third-party context, and AI-generated recommendation environments." },
  { q: "Who are these case studies most relevant for?", a: "Growth-minded companies in categories where buyers compare options, validate trust, read third-party sources, and increasingly use AI-generated answers before making a decision." },
];

const CaseStudies = () => {
  const [filter, setFilter] = useState<Filter>("All");
  const filteredCases = useMemo(
    () => (filter === "All" ? cases : cases.filter((c) => c.categories.includes(filter))),
    [filter]
  );

  useEffect(() => {
    document.title = "Case Studies | CiteWorks Studio — AI Search & GEO Results";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-24 grid-bg overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6">
          <p className="eyebrow mb-6">/ Case Studies</p>
          <h1 className="display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight max-w-5xl">
            Proof across Google, AI answers, and the sources that shape buyer decisions.
          </h1>
          <div className="mt-10 max-w-3xl space-y-5 text-lg text-body">
            <p>CiteWorks Studio helps growth-minded companies improve how they are found, cited, compared, and recommended across modern search environments.</p>
            <p>These case studies show how visibility improves when companies strengthen more than rankings — across GEO, citation architecture, AI search visibility, technical SEO, content strategy, and source-layer authority.</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="#featured">VIEW FEATURED SYNTHESIS</a>
            </Button>
            <Button asChild variant="outline" className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] border-border">
              <Link to="/request-audit">REQUEST A VISIBILITY AUDIT</Link>
            </Button>
          </div>
          <p className="mt-12 text-sm text-body max-w-2xl font-mono">
            Anonymized case studies across high-consideration categories where search visibility, trust, comparison, and recommendation placement affect growth.
          </p>
        </div>
      </section>

      {/* Dashboard: Executive Visibility Report */}
      <section className="relative py-12">
        <div className="mx-auto max-w-[1400px] px-6 reveal-on-scroll">
          <DashboardShowcase dashboard="executive-report" size="lg" showCaption />
        </div>
      </section>

      {/* Proof Positioning */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6">/ Why this proof</p>
            <h2 className="display text-4xl md:text-5xl leading-tight tracking-tight">
              These are not traffic stories. They are visibility-system stories.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-body text-lg">
            <p>Modern buyers do not move through one search result. They search Google, ask AI systems, read comparison pages, check reviews, watch videos, scan public discussions, and validate brands through trusted third-party sources before deciding.</p>
            <p>The strongest visibility programs measure whether a company becomes easier to find, easier to validate, easier to cite, and easier to recommend.</p>
            <div className="grid grid-cols-2 gap-2 pt-6 border-t border-border">
              {movement.map((m, i) => (
                <div key={i} className="flex gap-3 items-start py-1">
                  <span className="font-mono text-[13px] text-primary mt-1.5">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-sm text-body">{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Synthesis */}
      <section id="featured" className="py-24 border-t border-border bg-card/30">
        <div className="mx-auto max-w-[1400px] px-6">
          <p className="eyebrow mb-6">/ Featured Analysis</p>
          <h2 className="display text-4xl md:text-5xl leading-tight tracking-tight max-w-4xl mb-6">
            AI visibility growth across four high-consideration verticals.
          </h2>
          <p className="text-body max-w-3xl mb-12">
            A structured comparison of four published CiteWorks Studio engagements — tax relief, household appliance, crypto wallet, and pest control — showing how citation footprint, brand context, and high-intent public-source visibility can improve alongside Google and AI visibility.
          </p>
          <div className="border border-primary/30 bg-background rounded-2xl p-8 lg:p-12">
            <p className="font-mono text-[13px] text-primary mb-4">FEATURED CASE</p>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 leading-tight">
              Cross-Case Synthesis: AI Visibility Growth Across Four Verticals
            </h3>
            <div className="mt-6 border-t border-border pt-6">
              <p className="font-mono text-[13px] text-body mb-3">KEY TAKEAWAY</p>
              <p className="text-body text-lg leading-relaxed">
                The pattern was not simply "rank higher and AI visibility follows." The stronger pattern: improve citation footprint, brand context, and high-intent presence across Google and public reference environments, and AI visibility can improve alongside traditional search.
              </p>
            </div>
            <Button className="mt-8 rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90">
              READ THE SYNTHESIS <ArrowUpRight className="w-3 h-3 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Results Snapshot */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6">
          <p className="eyebrow mb-6">/ Results snapshot</p>
          <h2 className="display text-4xl md:text-5xl leading-tight tracking-tight max-w-4xl mb-6">
            Published outcomes across AI search and Google visibility.
          </h2>
          <p className="text-body max-w-2xl mb-12">
            Each case uses its own measurement framework, category context, and timeframe. Read these as published case-study outcomes, not a universal benchmark.
          </p>
          <ResultsChart results={results} />
          <p className="mt-6 text-xs text-body max-w-3xl font-mono">
            Source note: published outcomes from the CiteWorks cross-case synthesis. Cases use different surfaces, timeframes, and metric types and should be compared descriptively rather than blended into a single benchmark.
          </p>
        </div>
      </section>

      {/* Case Study Grid */}
      <section id="cases" className="py-24 border-t border-border bg-card/30 scroll-mt-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <p className="eyebrow mb-6">/ The case studies</p>
          <h2 className="display text-4xl md:text-5xl leading-tight tracking-tight max-w-4xl mb-6">
            Explore the case studies.
          </h2>
          <p className="text-body max-w-2xl mb-10">
            The method changes by category, but the goal stays consistent: make the company easier to find, cite, compare, and recommend.
          </p>

          {/* Filter chips */}
          <div role="tablist" aria-label="Filter case studies" className="flex flex-wrap gap-2 mb-10">
            {FILTERS.map((f) => {
              const isActive = filter === f;
              const count = f === "All" ? cases.length : cases.filter((c) => c.categories.includes(f)).length;
              return (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    isActive
                      ? "bg-primary text-primary-foreground border-transparent"
                      : "border-border text-body hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {f.toUpperCase()} <span className={`ml-1.5 ${isActive ? "opacity-80" : "opacity-50"}`}>{count}</span>
                </button>
              );
            })}
          </div>

          <p className="font-mono text-[13px] tracking-[0.16em] text-body mb-6" aria-live="polite">
            SHOWING {filteredCases.length} OF {cases.length}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCases.map((c, i) => (
              <article
                key={c.n + filter}
                className="border border-border rounded-xl bg-background p-6 hover:border-primary/40 transition-colors group flex flex-col animate-fade-in"
                style={{ animationDelay: `${i * 30}ms` }}
              >
                <p className="font-mono text-[13px] text-primary mb-4">CASE / {c.n}</p>
                <h3 className="text-lg font-semibold mb-3 leading-snug group-hover:text-primary transition-colors">
                  {c.title}
                </h3>
                <p className="text-sm text-body mb-5 flex-grow">{c.desc}</p>
                <div className="border-t border-border pt-4">
                  <p className="font-mono text-[13px] text-body mb-2">BEST FOR</p>
                  <div className="flex flex-wrap gap-1.5">
                    {c.best.map((b) => (
                      <span key={b} className="text-[13px] px-2 py-1 rounded-full bg-card border border-border text-body">{b}</span>
                    ))}
                  </div>
                </div>
                <button className="mt-5 inline-flex items-center gap-1 font-mono text-[13px] font-semibold tracking-[0.14em] text-primary hover:gap-2 transition-all">
                  READ CASE STUDY <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                </button>
              </article>
            ))}
          </div>

          {filteredCases.length === 0 && (
            <div className="mt-10 text-center text-body">
              No case studies in this category yet. <button onClick={() => setFilter("All")} className="text-primary underline-offset-4 hover:underline">View all</button>.
            </div>
          )}
        </div>
      </section>

      {/* Patterns */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6">
          <p className="eyebrow mb-6">/ Patterns</p>
          <h2 className="display text-4xl md:text-5xl leading-tight tracking-tight max-w-4xl mb-12">
            What repeats across the case studies.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {patterns.map((p) => (
              <div key={p.n} className="border border-border rounded-xl p-6 bg-card/30">
                <p className="font-mono text-[13px] text-primary mb-3">PATTERN / {p.n}</p>
                <h3 className="text-lg font-semibold mb-3 leading-snug">{p.h}</h3>
                <p className="text-sm text-body">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Measurement */}
      <section className="py-24 border-t border-border bg-card/30">
        <div className="mx-auto max-w-[1400px] px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6">/ Measurement</p>
            <h2 className="display text-4xl md:text-5xl leading-tight tracking-tight">
              How we measure case study movement.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-body text-lg mb-8">
              CiteWorks Studio case studies are designed to show visibility movement across the search environments that influence buyers. Depending on category and engagement, measurement may include:
            </p>
            <div className="grid sm:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden border border-border">
              {measurement.map((m, i) => (
                <div key={i} className="bg-background p-4 flex items-center gap-3">
                  <span className="font-mono text-[13px] text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-sm text-body">{m}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-body font-mono">
              Disclosure: published monetary values are directional estimates based on tracked keyword visibility and modeled paid-equivalent value. They are not exact revenue attribution.
            </p>
          </div>
        </div>
      </section>

      {/* Why this proof matters */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6">
          <p className="eyebrow mb-6">/ Why this matters</p>
          <h2 className="display text-4xl md:text-5xl leading-tight tracking-tight max-w-4xl mb-8">
            Case studies should show more than "we got traffic."
          </h2>
          <p className="text-body text-lg max-w-3xl mb-10">
            Traffic alone does not explain whether a company is becoming easier to trust, compare, cite, or recommend. These case studies focus on the visibility signals that matter in modern search:
          </p>
          <div className="grid md:grid-cols-2 gap-3 max-w-4xl">
            {[
              "Is the company appearing in high-intent searches?",
              "Is the company being cited by AI systems?",
              "Is the brand present in comparison environments?",
              "Are third-party sources supporting its authority?",
              "Are competitors being recommended more often?",
              "Is the company easier for buyers to validate before they convert?",
            ].map((q, i) => (
              <div key={i} className="flex gap-4 items-start border border-border rounded-lg p-4 bg-card/30">
                <span className="font-mono text-xs text-primary mt-1">0{i + 1}</span>
                <p className="text-body">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-border bg-card/30">
        <div className="mx-auto max-w-[1400px] px-6">
          <p className="eyebrow mb-6">/ FAQ</p>
          <h2 className="display text-4xl md:text-5xl leading-tight tracking-tight max-w-4xl mb-12">
            Common questions about our case studies.
          </h2>
          <Accordion type="single" collapsible className="max-w-4xl">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-lg hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-body text-base">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 border-t border-border grid-bg">
        <div className="mx-auto max-w-[1400px] px-6 text-center">
          <h2 className="display text-4xl md:text-6xl leading-tight tracking-tight max-w-4xl mx-auto">
            Find out where your visibility is breaking down.
          </h2>
          <p className="mt-6 text-body text-lg max-w-2xl mx-auto">
            The strongest case studies start with a clear diagnosis. CiteWorks Studio helps growth-minded companies identify where they are losing visibility — then we build the corrective-action plan.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/request-audit">REQUEST A VISIBILITY AUDIT <ArrowUpRight className="w-3 h-3 ml-1" /></Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] border-border">
              <Link to="/methodology">EXPLORE THE METHODOLOGY</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
