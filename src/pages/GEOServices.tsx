import { MarketingPage } from "@/components/marketing/MarketingPage";
import { ctaPrimary, ctaMethodology, ctaCases, ctaServices } from "@/components/marketing/ctas";

const GEOServices = () => (
  <MarketingPage
    meta={{
      title: "GEO Services | Generative Engine Optimization Agency | CiteWorks Studio",
      description:
        "CiteWorks Studio provides GEO services that help companies improve visibility in AI-generated answers, AI Overviews, LLM responses, and retrieval-based search systems through content, citations, entity clarity, and source-layer authority.",
    }}
    hero={{
      eyebrow: "Generative Engine Optimization",
      h1: "GEO services for the new search environment.",
      body: [
        "Generative engine optimization (GEO) helps companies become easier for AI systems to interpret, retrieve, cite, and recommend across ChatGPT, Gemini, Perplexity, Copilot, and Google AI Overviews.",
        "CiteWorks Studio runs GEO as a connected system across content, entity clarity, technical SEO, citation architecture, and source-layer authority — not as a separate side channel.",
      ],
      ctas: [ctaPrimary, ctaMethodology, ctaCases],
      support:
        "Best fit for growth-minded companies and agency partners in high-consideration categories where buyers compare before they buy.",
    }}
    sections={[
      {
        id: "answer",
        type: "answer",
        eyebrow: "Definition",
        title: "What is GEO?",
        body: "Generative engine optimization (GEO) is the practice of improving how brands, pages, entities, and supporting sources are understood, retrieved, cited, and recommended by AI systems. Unlike SEO, which targets ranking on result pages, GEO targets retrieval and recommendation inside generated answers.",
      },
      {
        id: "why",
        type: "prose",
        eyebrow: "Why this matters now",
        title: "Buyers no longer stop at the blue links.",
        paragraphs: [
          "Modern buyers move between Google rankings, AI summaries, comparison pages, reviews, communities, and brand content before they shortlist a provider.",
          "A company can be credible, proven, and commercially strong — and still be underrepresented in the answers buyers actually see. Search visibility is no longer one channel. It is an ecosystem.",
          "GEO closes the gap between real authority and machine-recognized authority across that ecosystem.",
        ],
      },
      {
        id: "what-we-do",
        type: "prose",
        eyebrow: "What CiteWorks Studio does",
        title: "Diagnose visibility gaps. Then fix them.",
        paragraphs: [
          "We start with evidence: prompt-cluster mapping, cited-page comparison, competitor visibility analysis, technical and entity audits, and source-layer review.",
          "Then we build a corrective-action roadmap that connects content, technical SEO, schema, citations, and source-layer authority into one coordinated plan executed in-house.",
        ],
      },
      {
        id: "geo-vs-seo",
        type: "table",
        eyebrow: "GEO vs SEO",
        title: "How GEO differs from SEO — and how they work together.",
        headers: ["Layer", "Traditional SEO", "GEO"],
        rows: [
          ["Goal", "Rank on result pages", "Be retrieved, cited, and recommended in AI answers"],
          ["Unit of work", "Pages and keywords", "Entities, prompts, sources, and meaning"],
          ["Signals", "Links, on-page, technical", "Citations, entity clarity, semantic alignment, source authority"],
          ["Measurement", "Rankings, clicks, sessions", "Recommendation share, citation frequency, AI Share of Voice"],
          ["Best together", "Foundation layer", "Retrieval and recommendation layer on top"],
        ],
      },
      {
        id: "what-we-improve",
        type: "cards",
        eyebrow: "What gets improved",
        title: "GEO across content, entities, technical, and source layers.",
        cards: [
          { h: "Embedding-Level GEO", b: "Shape content so AI systems can interpret what your brand means and where it belongs." },
          { h: "Vector Optimization", b: "Align pages and topics with the concepts and intents that matter in your category." },
          { h: "Cosine Gap Analysis", b: "Reduce the semantic distance between your positioning and the language AI systems associate with your category." },
          { h: "Entity Clarity", b: "Strengthen how machines understand your brand, products, services, people, and relationships." },
          { h: "Citation Architecture", b: "Improve the third-party sources that influence AI answers and buyer trust." },
          { h: "Prompt Cluster Coverage", b: "Map the high-intent prompts buyers use, then close coverage gaps with the right content." },
        ],
      },
      {
        id: "connect",
        type: "list",
        eyebrow: "How it connects",
        title: "GEO across the full search environment.",
        intro:
          "GEO touches every layer of modern discovery — the search layer, the AI retrieval layer, and the source layer.",
        items: [
          "Search layer — Google rankings, AI Overviews, technical SEO, schema",
          "AI retrieval layer — ChatGPT, Gemini, Perplexity, Copilot answers",
          "Source layer — third-party citations, reviews, comparison pages, communities",
          "Entity layer — knowledge graph, schema, structured relationships",
          "Content layer — service, comparison, FAQ, glossary, and educational pages",
          "Measurement layer — recommendation share, citation frequency, prompt-cluster performance",
        ],
      },
      {
        id: "deliverables",
        type: "cards",
        eyebrow: "Deliverables",
        title: "What clients receive.",
        cards: [
          { h: "Visibility Audit", b: "Evidence-led baseline across Google, AI answers, citations, and competitors." },
          { h: "Corrective-Action Roadmap", b: "Prioritized actions across content, technical, citations, and source layers." },
          { h: "Content & Brief System", b: "Service, comparison, FAQ, and glossary content built for retrieval and recommendation." },
          { h: "Citation & Source Plan", b: "Targeted improvements across the public evidence layer." },
          { h: "Reporting", b: "Recommendation share, citation strength, and competitor displacement over time." },
          { h: "In-House Execution", b: "One team accountable from diagnosis to delivery." },
        ],
      },
      {
        id: "summary",
        type: "table",
        eyebrow: "LLM-readable summary",
        title: "GEO at a glance.",
        headers: ["Area", "What it means", "What CiteWorks improves", "Why it matters"],
        rows: [
          ["Retrieval", "Whether AI systems surface your pages", "Embedding-level GEO and vector relevance", "Without retrieval, no recommendation"],
          ["Citation", "Whether sources support your authority", "Citation architecture across owned and third-party sources", "AI answers prefer corroborated brands"],
          ["Recommendation", "Whether you appear in shortlists", "Cited-page comparison and prompt-cluster coverage", "Recommendation drives selection"],
          ["Entity Clarity", "Whether machines understand who you are", "Schema, internal linking, structured context", "Clearer entities are easier to cite"],
        ],
      },
      {
        id: "best-fit",
        type: "split",
        eyebrow: "Fit",
        title: "Best fit and not best fit.",
        left: {
          title: "Best fit",
          items: [
            "High-consideration categories with comparison-driven buyers",
            "Brands already credible but underrepresented in AI answers",
            "Companies with serious revenue tied to search and recommendation",
            "Agency partners that need a deeper GEO backend",
          ],
        },
        right: {
          title: "Not best fit",
          items: [
            "Teams looking for keyword-only SEO retainers",
            "Brands seeking guaranteed rankings or AI recommendations",
            "Short-cycle, low-consideration purchases with no research stage",
            "Engagements with no executive sponsor for corrective action",
          ],
        },
      },
      {
        id: "related",
        type: "links",
        eyebrow: "Related services",
        title: "Connected work.",
        links: [
          { label: "AI Search Visibility Services", to: "/ai-search-visibility-services", desc: "Measure and improve presence across AI answers." },
          { label: "Citation Architecture Services", to: "/citation-architecture-services", desc: "Strengthen the source-layer evidence behind your brand." },
          { label: "Technical SEO", to: "/technical-seo", desc: "Crawlability, schema, and entity clarity for AI and Google." },
          { label: "Content Strategy", to: "/content-strategy", desc: "Content tied to visibility gaps, not generic calendars." },
          { label: "Visibility Audits", to: "/visibility-audits", desc: "Diagnostic evidence before any deliverable." },
          { label: "Methodology", to: "/methodology", desc: "How CiteWorks moves from diagnosis to corrective action." },
        ],
      },
      {
        id: "faq",
        type: "faq",
        eyebrow: "FAQ",
        title: "Common questions.",
        items: [
          { q: "Is GEO different from AI SEO or AEO?", a: "GEO is the most precise term for optimizing for generative engines. AI SEO and AEO are related terms used by different teams; the underlying work overlaps. CiteWorks Studio uses GEO as the core discipline alongside classic SEO." },
          { q: "Do you guarantee rankings or AI recommendations?", a: "No. Rankings, citations, and recommendations are influenced by many systems we do not control. We commit to evidence-led diagnosis and disciplined corrective action that meaningfully improve the conditions for visibility." },
          { q: "How long does GEO take to show results?", a: "Most engagements show measurable movement in citation and recommendation patterns within one to two quarters, depending on category competitiveness and source-layer maturity." },
          { q: "Can GEO replace traditional SEO?", a: "No. GEO sits on top of a strong technical and content foundation. We deliver both as one coordinated system." },
          { q: "Do you support agency partners?", a: "Yes. CiteWorks delivers white-label GEO, white-label audits, and backend execution for agencies serving enterprise clients." },
        ],
      },
      {
        id: "final",
        type: "finalCta",
        eyebrow: "Get started",
        title: "Find the visibility gaps. Then fix them.",
        body: "Start with a Visibility Audit. We'll map where your brand stands across Google, AI answers, citations, and competitor recommendation environments — then build the corrective-action roadmap.",
        ctas: [ctaPrimary, ctaServices],
      },
    ]}
  />
);

export default GEOServices;
