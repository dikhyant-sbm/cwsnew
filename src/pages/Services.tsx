import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { StickyAuditCTA } from "@/components/landing/StickyAuditCTA";
import { DashboardShowcase } from "@/components/landing/DashboardShowcase";
import { TrustPledges } from "@/components/landing/TrustPledges";
import { BestFit } from "@/components/landing/BestFit";
import { SectionNav } from "@/components/landing/SectionNav";
import { ServicesMatrix } from "@/components/landing/ServicesMatrix";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import { useEffect } from "react";

const servicesNav = [
  { id: "intro", label: "Connected system" },
  { id: "core", label: "Core services" },
  { id: "detail", label: "Service detail" },
  { id: "engagements", label: "Engagement paths" },
  { id: "matrix", label: "Service matrix" },
  { id: "why", label: "Why CiteWorks" },
  { id: "fit", label: "Best fit" },
  { id: "faq", label: "FAQ" },
];

const coreServices = [
  "GEO and AI search visibility strategy",
  "SEO auditing and search opportunity mapping",
  "AI search auditing and recommendation analysis",
  "Embedding-level GEO and cosine gap analysis",
  "Technical SEO, schema, and on-site optimization",
  "Entity clarity and semantic content structure",
  "Citation architecture and source-layer authority strategy",
  "AI market research intelligence",
  "Content strategy, production, and refreshes",
  "Social, video, and discussion-led visibility support",
  "Ongoing corrective-action retainers",
  "White-label search visibility services for agencies",
];

const services = [
  {
    n: "01",
    title: "SEO Auditing & Search Opportunity Mapping",
    def: "SEO auditing identifies where your company is winning, losing, or missing visibility across Google search results, high-intent keywords, competitor pages, and buyer research environments.",
    body: "This is where many engagements begin. We identify the keyword clusters closest to revenue, benchmark your current rankings, analyze who owns the search results, and map where visibility is being won or lost across your category. But we do not stop at your website. We also review the surrounding search environment: best-of pages, comparison articles, review sites, directories, informational content, third-party publishers, and non-competitor pages shaping buyer decisions. This gives you a clearer view of where your company stands inside the full Google decision layer.",
    includes: [
      "High-intent keyword cluster mapping",
      "SERP benchmarking",
      "Competitor ranking analysis",
      "Page-one ownership review",
      "Third-party ranking environment analysis",
      "Best-of and comparison page review",
      "Search opportunity scoring",
      "Executive-ready findings",
    ],
    outcome: "You understand which search opportunities matter most, where competitors are stronger, and what needs to change to improve qualified visibility.",
  },
  {
    n: "02",
    title: "AI Search Auditing & Recommendation Analysis",
    def: "AI search auditing measures how your company appears, disappears, gets cited, or loses recommendation placement in AI-generated answers and retrieval-based search environments.",
    body: "AI visibility is not just about being mentioned. What matters is whether your company appears when buyers ask high-intent questions: who to trust, what to compare, which provider to choose, what alternatives exist, and which brands are recommended for a specific need. We convert your highest-value keyword clusters into prompt clusters and analyze how AI systems respond. We look at where your brand is present, where it is absent, where competitors are favored, what sources are being cited, and what language is shaping the answers. This work helps identify whether your company is visible in AI search, whether it is being recommended, and what must change to improve retrieval and recommendation strength.",
    includes: [
      "Prompt cluster mapping",
      "AI answer visibility review",
      "Recommendation placement analysis",
      "Competitor recommendation gap analysis",
      "Cited source review",
      "AI Overview visibility review",
      "ChatGPT, Gemini, Perplexity, Copilot analysis",
      "Priority recommendations for improvement",
    ],
    outcome: "You see where your company stands in AI-generated discovery and which gaps are limiting your ability to be retrieved, cited, and recommended.",
  },
  {
    n: "03",
    title: "Embedding-Level GEO & Cosine Gap Analysis",
    def: "Embedding-level GEO improves how AI systems understand your company, category, entities, services, and authority signals at the semantic retrieval level.",
    body: "Traditional SEO focuses heavily on keywords, rankings, pages, and links. Those still matter. But AI search also depends on how systems interpret meaning, relationships, source patterns, and topical relevance. CiteWorks Studio analyzes the semantic distance between your company and the sources, competitors, and category language AI systems already retrieve. This is where vector optimization and cosine gap analysis matter. We compare your content, entities, source footprint, and topical structure against the patterns that appear to influence AI answers. Then we identify what needs to be clarified, expanded, restructured, cited, or reinforced.",
    includes: [
      "Embedding-level GEO analysis",
      "Vector relevance review",
      "Cosine gap analysis",
      "Semantic content gap modeling",
      "Entity relationship review",
      "Topic and concept alignment",
      "Cited-page comparison",
      "Retrieval-alignment recommendations",
    ],
    outcome: "Your company becomes easier for AI systems to associate with the right topics, services, categories, comparisons, and buyer questions.",
  },
  {
    n: "04",
    title: "Technical SEO, Schema & On-Site Optimization",
    def: "Technical SEO improves how search engines and AI-influencing systems crawl, index, understand, and interpret your website.",
    body: "Before your company can improve how it is ranked, cited, and recommended, your owned site needs to send clear signals. We audit and improve the technical foundation of your website, including crawlability, indexation, site architecture, internal linking, schema, page structure, content hierarchy, and on-page optimization. This is classic SEO with a modern objective: make your website easier for Google, AI systems, and buyers to understand.",
    includes: [
      "Technical SEO audits",
      "Crawlability and indexation review",
      "Site architecture analysis",
      "Internal linking recommendations",
      "Schema review and recommendations",
      "On-page SEO review",
      "Content hierarchy analysis",
      "Core page optimization priorities",
      "Implementation guidance",
    ],
    outcome: "Your website becomes more accessible, structured, and machine-readable, supporting stronger performance across Google and AI-mediated discovery.",
  },
  {
    n: "05",
    title: "Entity Clarity & Semantic Content Structure",
    def: "Entity clarity helps search engines and AI systems understand who your company is, what you offer, who you serve, where you operate, and how your expertise connects to your market.",
    body: "AI systems do not understand your company the way a human sales prospect might. They rely on repeated signals, structured information, clear relationships, and consistent language across your website and the wider web. We improve the way your company, services, products, locations, people, categories, and proof points are represented across your digital presence. This helps reduce ambiguity and strengthens your association with the topics and buyer questions that matter most.",
    includes: [
      "Brand entity review",
      "Service and product entity mapping",
      "Category association analysis",
      "Internal linking recommendations",
      "Terminology consistency review",
      "Structured content recommendations",
      "Topic cluster refinement",
      "Machine-readable content improvements",
    ],
    outcome: "Your company becomes easier for search engines, AI systems, and buyers to understand, classify, and compare.",
  },
  {
    n: "06",
    title: "Citation Architecture & Authority Strategy",
    def: "Citation architecture is the structured improvement of the owned and third-party sources that support your company's authority.",
    body: "Search engines and AI systems do not rely on your website alone. They rely on the wider evidence layer around your company. That evidence layer may include third-party articles, review sites, directories, comparison pages, communities, YouTube videos, social profiles, podcasts, industry publications, and trusted brand mentions. We map the sources influencing your category, compare your source footprint against competitors, and identify where your authority needs stronger support. The goal is not random distribution. The goal is deliberate source architecture around the pages, platforms, and domains that shape search visibility, AI answers, and buyer confidence.",
    includes: [
      "Citation source mapping",
      "Third-party source review",
      "Competitor source comparison",
      "Authority domain prioritization",
      "Review and directory analysis",
      "Comparison page analysis",
      "Forum and community source review",
      "Source-layer gap analysis",
      "Citation-readiness recommendations",
    ],
    outcome: "Your company has stronger source support behind its claims, making it easier for AI systems and buyers to validate your authority.",
  },
  {
    n: "07",
    title: "AI Market Research Intelligence",
    def: "AI market research intelligence shows how your category is being framed across search results, AI answers, competitors, cited sources, and buyer research environments.",
    body: "Most reporting shows what already happened. We focus on what needs to change. Our AI market research reports show where your company appears, where competitors are gaining ground, which sources are shaping the category, which prompts and keywords matter most, and where the biggest recoverable opportunities exist. This gives leadership and marketing teams a clearer view of how the market is being interpreted by search engines, AI systems, and buyers.",
    includes: [
      "Competitive visibility analysis",
      "High-intent keyword and prompt prioritization",
      "AI recommendation risk analysis",
      "Category framing insights",
      "Source influence review",
      "Recoverability assessment",
      "Opportunity scoring",
      "Executive-ready reporting",
    ],
    outcome: "You get decision-grade visibility intelligence that helps prioritize budget, strategy, content, technical work, and authority-building.",
  },
  {
    n: "08",
    title: "Content Strategy, Production & Refreshes",
    def: "Content strategy improves the pages and assets that help your company rank, get retrieved, answer buyer questions, and support authority across search and AI environments.",
    body: "We create content based on what the market is rewarding, not based on a generic publishing calendar. That may include service pages, comparison pages, category education pages, case studies, FAQs, glossary pages, articles, content refreshes, social posts, video scripts, discussion-led assets, and source-supporting content. Every content recommendation is tied back to a visibility gap: a keyword gap, prompt gap, citation gap, entity gap, topical gap, or conversion gap.",
    includes: [
      "Website content strategy",
      "Service page copy",
      "Comparison and alternative pages",
      "Educational content",
      "FAQ and glossary content",
      "Content refreshes",
      "Case study development",
      "Social post copy",
      "Video scripts",
      "Discussion-led content assets",
      "Content briefs and production workflows",
    ],
    outcome: "Your content becomes more useful to buyers, easier for search engines to rank, and more aligned with AI retrieval patterns.",
  },
  {
    n: "09",
    title: "Social, Video & Discussion-Led Visibility",
    def: "Social, video, and discussion-led visibility strengthens the public evidence around your company across the platforms where buyers and AI-influencing sources gather context.",
    body: "Modern search does not stop at your website. Buyers look for proof across social platforms, video platforms, review environments, communities, and industry conversations. We help create and support assets that make your company more visible, understandable, and credible across those environments. This does not mean chasing every platform. It means identifying which public sources matter in your category and building the right support around them.",
    includes: [
      "Social content planning",
      "LinkedIn content support",
      "Short-form video concepts",
      "YouTube scripting",
      "Discussion-led content strategy",
      "Community and forum research",
      "Review environment recommendations",
      "Source-supporting content assets",
      "Authority amplification planning",
    ],
    outcome: "Your company becomes easier to validate outside your website, strengthening the evidence layer that influences both buyers and AI systems.",
  },
  {
    n: "10",
    title: "Ongoing Search Visibility Execution Retainers",
    def: "A search visibility retainer turns audit findings into ongoing corrective action across SEO, GEO, content, citations, technical improvements, and source-layer authority.",
    body: "Audits do not create growth by themselves. Execution does. Once the audit and strategy are complete, we build a coordinated monthly program around the keyword clusters, prompt environments, technical gaps, source gaps, and content opportunities that matter most. This is where CiteWorks Studio is different from tools and dashboards. We do not only report visibility problems. We help fix them.",
    includes: [
      "Monthly strategy leadership",
      "SEO optimization sprints",
      "Technical SEO support",
      "Content production and refreshes",
      "Citation architecture execution",
      "AI visibility improvements",
      "Source-layer support",
      "Reporting and iteration",
      "Competitor movement tracking",
      "Ongoing performance refinement",
    ],
    outcome: "Your visibility work becomes a connected program instead of a series of disconnected marketing tasks.",
  },
  {
    n: "11",
    title: "White-Label Search Visibility for Agencies",
    def: "White-label search visibility services help agencies offer GEO, AI search visibility, SEO auditing, citation architecture, content, and reporting without building the full backend in-house.",
    body: "CiteWorks Studio partners with agencies that want stronger Google and AI search capability under their own brand. We can support audits, strategy, reporting, content, technical SEO, citation architecture, AI search analysis, and ongoing execution. Depending on the relationship, we can work quietly behind the scenes or alongside your team. This helps agencies strengthen pitches, support higher-value retainers, retain clients with stronger strategy, and expand existing SEO accounts into AI search and authority work.",
    includes: [
      "White-label SEO audits",
      "White-label AI search audits",
      "Prompt and keyword cluster mapping",
      "Citation architecture strategy",
      "Technical SEO review",
      "Content briefs and production",
      "AI market intelligence reports",
      "Partner-ready reporting",
      "Backend execution support",
      "Ongoing delivery systems",
    ],
    outcome: "Your agency can deliver a more complete modern search visibility offering without hiring an entire in-house GEO, SEO, content, and AI search team.",
  },
];

const engagementPaths = [
  { title: "Visibility Audit", body: "A focused diagnostic that identifies where your company is losing visibility and what should be fixed first." },
  { title: "Strategy & Roadmap", body: "A prioritized plan across SEO, GEO, content, technical structure, citation architecture, and source-layer authority." },
  { title: "Execution Retainer", body: "An ongoing monthly program that turns findings into improvements across your website, content, technical SEO, citations, and authority environments." },
  { title: "Agency Partnership", body: "White-label or collaborative support for agencies that need modern search visibility capability for higher-value clients." },
];

const matrix = [
  ["SEO auditing", "Google visibility & search opportunity", "Identifies where qualified demand is being won or lost"],
  ["AI search auditing", "AI answer presence & recommendation placement", "Shows whether your company appears when buyers ask AI systems who to trust"],
  ["Embedding-level GEO", "Semantic retrieval alignment", "Helps AI systems associate your company with the right topics and questions"],
  ["Cosine gap analysis", "Competitive semantic distance", "Shows where competitors are better aligned with trusted source patterns"],
  ["Technical SEO", "Crawlability, indexation & structure", "Helps search systems access and understand your site"],
  ["Schema", "Machine-readable context", "Clarifies entities, services, pages, and relationships"],
  ["Entity clarity", "Brand & category understanding", "Helps machines understand who you are and what you do"],
  ["Citation architecture", "Source support & authority validation", "Strengthens the evidence layer around your brand"],
  ["Content strategy", "Topical authority & buyer education", "Supports rankings, AI retrieval, and conversion"],
  ["Source-layer authority", "Public trust signals", "Helps buyers and AI systems validate your credibility"],
  ["AI market intelligence", "Strategic prioritization", "Shows what to fix first and where competitors are gaining ground"],
  ["Execution retainers", "Ongoing improvement", "Turns findings into measurable progress"],
];

const why = [
  { h: "We connect Google, AI, and the source layer.", b: "Modern search visibility is shaped by more than your website. We connect organic search, AI answers, cited sources, technical structure, content, and authority signals into one strategy." },
  { h: "We are built for corrective action.", b: "We do not stop at dashboards or reports. We identify the gaps and help execute the work required to close them." },
  { h: "We make advanced GEO practical.", b: "Embedding-level GEO, vector optimization, and cosine gap analysis only matter if they help your company become easier to find, cite, compare, and choose." },
  { h: "We keep strategy and execution connected.", b: "Research, technical recommendations, content, citation architecture, reporting, and optimization stay tied to the same visibility diagnosis." },
  { h: "We support direct clients and agency partners.", b: "CiteWorks Studio can serve as your primary search visibility partner, a specialist extension of your marketing team, or a white-label backend for agency delivery." },
];

const bestFit = [
  "Growth-minded companies",
  "High-consideration brands",
  "Category challengers",
  "Established companies in competitive markets",
  "Companies underrepresented in AI answers",
  "Companies losing qualified search visibility",
  "Companies with complex buyer journeys",
  "Agencies serving higher-value clients",
];

const notFit = [
  "Companies looking for cheap SEO tasks",
  "Businesses that only want isolated blog posts",
  "Teams unwilling to improve their website, content, or source footprint",
  "Companies that want reporting but no corrective action",
];

const faqs = [
  { q: "What services does CiteWorks Studio offer?", a: "CiteWorks Studio offers GEO, AI search visibility, SEO auditing, AI search auditing, technical SEO, schema, entity clarity, citation architecture, content strategy, AI market intelligence, social and video support, source-layer authority strategy, execution retainers, and white-label agency services." },
  { q: "Are you an SEO agency or a GEO agency?", a: "CiteWorks Studio is both, but the better description is search visibility agency. We help companies improve visibility across Google, AI answers, and the sources that shape both." },
  { q: "Do your services replace traditional SEO?", a: "No. GEO and AI search visibility do not replace SEO. They build on it. Technical SEO, content quality, crawlability, schema, internal linking, authority signals, and third-party sources all matter in modern search." },
  { q: "What is the difference between AI search auditing and AI market intelligence?", a: "AI search auditing looks at how your company appears in AI answers, prompts, citations, and recommendation-style results. AI market intelligence turns that information into broader category insight: competitor movement, source influence, market framing, recoverability, and strategic priorities." },
  { q: "What is citation architecture?", a: "Citation architecture is the structured improvement of the sources that support your company's authority. It includes owned content, third-party articles, review sites, directories, comparison pages, videos, communities, and industry mentions." },
  { q: "Do you execute the recommendations?", a: "Yes. CiteWorks Studio can move from audit and strategy into ongoing corrective-action retainers covering technical SEO, content, citation architecture, AI visibility, source-layer support, and reporting." },
  { q: "Do you work with agencies?", a: "Yes. CiteWorks Studio offers white-label and collaborative support for agencies that want to provide GEO, AI search visibility, SEO audits, citation architecture, content, reporting, and execution without building the full backend internally." },
  { q: "How do clients usually start?", a: "Most clients start with a Visibility Audit. The audit identifies where visibility is breaking down and what should be fixed first." },
];

const Services = () => {
  useEffect(() => {
    document.title = "CiteWorks Studio Services | GEO, AI Search Visibility, SEO, and Citation Architecture";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "CiteWorks Studio helps growth-minded companies improve visibility across Google, AI answers, and trusted source environments through GEO, AI search audits, technical SEO, citation architecture, content strategy, market intelligence, and corrective-action retainers.");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <SectionNav items={servicesNav} variant="floating" />

      {/* Hero */}
      <section className="relative pt-32 pb-24 grid-bg overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6">
          <p className="eyebrow mb-6">/ Services</p>
          <h1 className="display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight max-w-5xl">
            Search visibility services for Google, AI, and the sources that shape both.
          </h1>
          <div className="mt-10 max-w-3xl space-y-5 text-lg text-body">
            <p>CiteWorks Studio helps growth-minded companies become easier to find, cite, compare, and recommend across modern search environments.</p>
            <p>We combine GEO, AI search visibility, technical SEO, citation architecture, content strategy, source-layer authority, market intelligence, and execution into one coordinated system.</p>
            <p>The goal is not just more traffic. The goal is stronger visibility in the places where buyers search, compare options, validate trust, and ask AI systems who to choose.</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/request-audit">REQUEST A VISIBILITY AUDIT</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] border-border">
              <Link to="/agency-partners">EXPLORE AGENCY PARTNERSHIPS</Link>
            </Button>
          </div>
          <p className="mt-12 text-sm text-body max-w-2xl font-mono">
            Built for companies where search visibility, AI recommendations, trusted sources, and buyer confidence directly affect growth.
          </p>
        </div>
      </section>

      {/* Dashboard: AI Visibility Overview */}
      <section className="relative py-12">
        <div className="mx-auto max-w-[1400px] px-6 reveal-on-scroll">
          <DashboardShowcase dashboard="ai-visibility" size="lg" showCaption />
        </div>
      </section>

      {/* Intro */}
      <section id="intro" className="py-24 border-t border-border scroll-mt-24">
        <div className="mx-auto max-w-[1400px] px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6">/ A connected system</p>
            <h2 className="display text-4xl md:text-5xl leading-tight tracking-tight">
              Modern visibility is not one service. It is a connected system.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-body text-lg">
            <p>Most agencies still separate SEO, content, social, digital PR, technical optimization, and AI search into different conversations. CiteWorks Studio does not.</p>
            <p>Search now works across connected environments. A buyer may search Google, ask ChatGPT, scan AI Overviews, compare brands in Perplexity, watch YouTube, read Reddit, check review sites, visit comparison pages, and then return to your website before making a decision.</p>
            <p>That means your company needs more than rankings. It needs clear entity signals, useful content, credible sources, technical structure, third-party support, and stronger retrieval alignment.</p>
            <p>Our services are designed to answer four questions:</p>
            <div className="pt-6 border-t border-border space-y-3 text-base">
              {[
                "Where are you losing high-intent visibility?",
                "Where are competitors being cited or recommended ahead of you?",
                "Which content, technical, semantic, and source gaps are limiting trust?",
                "What needs to be fixed next to improve rankings, AI visibility, citations, and qualified demand?",
              ].map((q, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="font-mono text-xs text-primary mt-1">0{i + 1}</span>
                  <p className="text-body">{q}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Capsule */}
      <section id="core" className="py-24 border-t border-border bg-card/30 scroll-mt-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <p className="eyebrow mb-6">/ What CiteWorks Studio does</p>
          <h2 className="display text-4xl md:text-5xl leading-tight tracking-tight max-w-4xl mb-6">
            A GEO, AI search visibility, and citation architecture agency for modern search.
          </h2>
          <p className="text-body text-lg max-w-3xl mb-10">
            CiteWorks Studio helps growth-minded companies improve how they appear across Google, ChatGPT, Gemini, Perplexity, Google AI Overviews, Copilot, organic search results, third-party sources, and buyer research environments.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {coreServices.map((s, i) => (
              <div key={i} className="bg-background p-6 flex items-start gap-4">
                <span className="font-mono text-[13px] text-primary mt-1">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-body">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Cards */}
      <section id="detail" className="py-24 border-t border-border scroll-mt-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <p className="eyebrow mb-6">/ Service detail</p>
          <h2 className="display text-4xl md:text-5xl leading-tight tracking-tight max-w-4xl mb-16">
            Eleven services. One coordinated visibility system.
          </h2>
          <ServicesMatrix services={services} />
        </div>
      </section>

      {/* Engagement Paths */}
      <section id="engagements" className="py-24 border-t border-border bg-card/30 scroll-mt-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <p className="eyebrow mb-6">/ How engagements work</p>
          <h2 className="display text-4xl md:text-5xl leading-tight tracking-tight max-w-4xl mb-6">
            Start with the visibility gaps. Build from the evidence.
          </h2>
          <p className="text-body max-w-2xl mb-12">
            Most clients start with a Visibility Audit. From there, we build a corrective-action roadmap. Some clients continue into a monthly execution retainer; others use the findings to support internal teams or agency partners.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {engagementPaths.map((p, i) => (
              <div key={p.title} className="border border-border rounded-xl p-6 bg-background hover:border-primary/40 transition-colors">
                <p className="font-mono text-[13px] text-primary mb-4">PATH / 0{i + 1}</p>
                <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
                <p className="text-sm text-body">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Matrix */}
      <section id="matrix" className="py-24 border-t border-border scroll-mt-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <p className="eyebrow mb-6">/ Service matrix</p>
          <h2 className="display text-4xl md:text-5xl leading-tight tracking-tight max-w-4xl mb-12">
            What each service improves.
          </h2>
          <div className="border border-border rounded-2xl overflow-hidden">
            <div className="hidden md:grid grid-cols-12 bg-card/50 px-6 py-4 font-mono text-[13px] tracking-wider text-body">
              <div className="col-span-3">SERVICE</div>
              <div className="col-span-4">WHAT IT IMPROVES</div>
              <div className="col-span-5">WHY IT MATTERS</div>
            </div>
            {matrix.map(([a, b, c], i) => (
              <div key={i} className="grid md:grid-cols-12 gap-2 px-6 py-5 border-t border-border text-sm">
                <div className="md:col-span-3 font-medium text-foreground">{a}</div>
                <div className="md:col-span-4 text-body">{b}</div>
                <div className="md:col-span-5 text-muted-fg">{c}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why CiteWorks */}
      <section id="why" className="py-24 border-t border-border bg-card/30 scroll-mt-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <p className="eyebrow mb-6">/ Why CiteWorks Studio</p>
          <h2 className="display text-4xl md:text-5xl leading-tight tracking-tight max-w-4xl mb-12">
            Why growth-minded companies work with us.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {why.map((w, i) => (
              <div key={i} className="border border-border rounded-xl p-6 bg-background">
                <p className="font-mono text-[13px] text-primary mb-3">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="text-lg font-semibold mb-3">{w.h}</h3>
                <p className="text-sm text-body">{w.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Fit */}
      <section id="fit" className="py-24 border-t border-border scroll-mt-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <p className="eyebrow mb-6">/ Best fit</p>
          <h2 className="display text-4xl md:text-5xl leading-tight tracking-tight max-w-4xl mb-12">
            Who these services are built for.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border rounded-2xl p-8 bg-card/30">
              <p className="font-mono text-[13px] text-primary mb-4">BEST FIT</p>
              <ul className="space-y-3">
                {bestFit.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-body">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-border rounded-2xl p-8 bg-card/30">
              <p className="font-mono text-[13px] text-body mb-4">NOT THE BEST FIT</p>
              <ul className="space-y-3">
                {notFit.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-muted-fg">
                    <span className="text-body mt-0.5">—</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 border-t border-border bg-card/30 scroll-mt-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <p className="eyebrow mb-6">/ FAQ</p>
          <h2 className="display text-4xl md:text-5xl leading-tight tracking-tight max-w-4xl mb-12">
            Common questions about our services.
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
            Find out what is limiting your visibility.
          </h2>
          <p className="mt-6 text-body text-lg max-w-2xl mx-auto">
            Your company may already have strong expertise, useful content, and real authority. The question is whether Google, AI systems, third-party sources, and buyers can clearly recognize it.
          </p>
          <p className="mt-4 text-body text-lg max-w-2xl mx-auto">
            CiteWorks Studio helps growth-minded companies close the gap between what they publish and what modern search systems actually retrieve, cite, and recommend.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 btn-glow">
              <Link to="/request-audit">REQUEST A VISIBILITY AUDIT <ArrowUpRight className="w-3 h-3 ml-1" /></Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] border-border">
              <Link to="/agency-partners">EXPLORE AGENCY PARTNERSHIPS</Link>
            </Button>
          </div>
          <p className="mt-6 text-xs text-body">
            No guaranteed rankings or AI recommendations. Evidence-led improvement, prioritized by revenue impact.
          </p>
        </div>
      </section>

      <Footer />
      <StickyAuditCTA />
    </div>
  );
};

export default Services;
