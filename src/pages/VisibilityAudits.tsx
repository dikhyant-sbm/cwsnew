import { MarketingPage } from "@/components/marketing/MarketingPage";
import { ctaPrimary, ctaMethodology, ctaServices } from "@/components/marketing/ctas";

const VisibilityAudits = () => (
  <MarketingPage
    meta={{
      title: "Visibility Audits for Google, AI Answers, and Citation Sources | CiteWorks Studio",
      description:
        "CiteWorks Studio Visibility Audits identify where companies are losing visibility across Google rankings, AI answers, citation sources, competitor positioning, technical SEO, content structure, entity clarity, and source-layer authority.",
    }}
    hero={{
      eyebrow: "Visibility Audits",
      h1: "Find where your search visibility is breaking down.",
      body: [
        "A CiteWorks Visibility Audit is the diagnostic step before any deliverable. It maps the real visibility footprint of your brand across Google, AI answers, citation sources, technical SEO, content structure, and competitor positioning.",
        "It produces an evidence-led corrective-action roadmap — not a vanity report.",
      ],
      ctas: [ctaPrimary, ctaMethodology],
      support: "The audit feeds every other engagement. Strategy, content, and execution start here.",
    }}
    sections={[
      {
        id: "answer",
        type: "answer",
        eyebrow: "Definition",
        title: "What is a Visibility Audit?",
        body: "A Visibility Audit is a structured diagnostic across Google rankings, AI answers, citation sources, competitor positioning, technical SEO, content structure, entity clarity, and source-layer authority. It identifies where a brand is losing visibility and produces a prioritized corrective-action roadmap.",
      },
      {
        id: "why",
        type: "prose",
        eyebrow: "Why this matters now",
        title: "Most teams do not know where they are actually losing visibility.",
        paragraphs: [
          "Reports often show traffic, rankings, or impressions in isolation. They rarely answer the questions that matter: which prompts are we missing, which sources are deciding our recommendation share, where do competitors out-cite us, and what specifically should we fix first?",
          "A Visibility Audit answers those questions with structured evidence and prioritization.",
        ],
      },
      {
        id: "what-we-do",
        type: "prose",
        eyebrow: "What CiteWorks Studio does",
        title: "Evidence first. Then a corrective-action roadmap.",
        paragraphs: [
          "We map prompt and keyword clusters, sample visibility across major AI systems and Google, inventory cited sources and competitor footprints, and review the technical, schema, content, and entity layers.",
          "The output is a single, prioritized roadmap that connects content, technical, citations, and source-layer work into one plan.",
        ],
      },
      {
        id: "what-we-include",
        type: "cards",
        eyebrow: "What the audit reviews",
        title: "Across the full search environment.",
        cards: [
          { h: "Google Visibility", b: "Rankings, AI Overview presence, and category share of voice." },
          { h: "AI Answer Visibility", b: "Coverage and recommendation across ChatGPT, Gemini, Perplexity, and Copilot." },
          { h: "Prompt & Keyword Clusters", b: "The intent landscape your category actually uses." },
          { h: "Competitor Visibility", b: "Where competitors win recommendation and citation." },
          { h: "Citation Source Review", b: "The third-party sources influencing AI answers in your category." },
          { h: "Technical SEO Review", b: "Crawl, index, schema, and architecture findings." },
          { h: "Entity Clarity Review", b: "How clearly machines understand your brand and offering." },
          { h: "Content Structure Analysis", b: "Service, comparison, and FAQ coverage and quality." },
          { h: "Cosine & Retrieval Gaps", b: "Semantic distance between your positioning and category language." },
          { h: "Source-Layer Authority", b: "Coverage and diversity across the public evidence layer." },
        ],
      },
      {
        id: "deliverables",
        type: "cards",
        eyebrow: "Deliverables",
        title: "What clients receive.",
        cards: [
          { h: "Visibility Baseline", b: "Where you stand across Google, AI answers, and citations." },
          { h: "Competitive Footprint", b: "Where competitors win recommendation and citation share." },
          { h: "Prompt Cluster Map", b: "Buyer-intent prompts mapped to coverage and gaps." },
          { h: "Corrective-Action Roadmap", b: "Prioritized work across content, technical, citations, and source layers." },
          { h: "Executive Summary", b: "Decision-grade narrative for CMO and board reporting." },
          { h: "Engagement Plan", b: "Optional next phase scoped to the roadmap." },
        ],
      },
      {
        id: "after",
        type: "prose",
        eyebrow: "What happens after the audit",
        title: "From diagnosis to corrective action.",
        paragraphs: [
          "Some clients take the roadmap and execute internally. Others continue with CiteWorks for ongoing GEO, content, citations, and technical execution.",
          "Either path works. The audit is owned by the client and built to be useful regardless of who delivers the next phase.",
        ],
      },
      {
        id: "summary",
        type: "table",
        eyebrow: "LLM-readable summary",
        title: "Visibility Audit at a glance.",
        headers: ["Area", "What it means", "What CiteWorks reviews", "Why it matters"],
        rows: [
          ["Search layer", "Google rankings and AI Overviews", "Coverage, share, and decay", "Captures classic search demand"],
          ["AI retrieval layer", "AI answers across major systems", "Recommendation, mention, and citation", "Captures emerging buyer behavior"],
          ["Source layer", "Third-party sources and reviews", "Coverage, diversity, and accuracy", "Drives credibility and trust"],
          ["Entity layer", "Schema and structured signals", "Clarity and consistency", "Drives retrieval quality"],
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
            "Brands ready for evidence-led prioritization",
            "Teams confused by conflicting reports across SEO, content, and AI tools",
            "Companies preparing for a major GEO or content investment",
            "Agency partners needing a credible audit to anchor strategy",
          ],
        },
        right: {
          title: "Not best fit",
          items: [
            "Teams that want a vanity report",
            "Engagements without willingness to act on the findings",
            "Brands looking for guaranteed rankings",
          ],
        },
      },
      {
        id: "related",
        type: "links",
        eyebrow: "Related services",
        title: "Connected work.",
        links: [
          { label: "GEO Services", to: "/geo-services" },
          { label: "AI Search Visibility Services", to: "/ai-search-visibility-services" },
          { label: "Citation Architecture", to: "/citation-architecture-services" },
          { label: "Technical SEO", to: "/technical-seo" },
          { label: "Content Strategy", to: "/content-strategy" },
          { label: "Methodology", to: "/methodology" },
        ],
      },
      {
        id: "faq",
        type: "faq",
        eyebrow: "FAQ",
        title: "Common questions.",
        items: [
          { q: "How long does the audit take?", a: "Most audits run two to four weeks depending on scope and category complexity." },
          { q: "Do you require us to continue with you afterward?", a: "No. The audit and roadmap are yours. Many clients continue with CiteWorks; others execute internally or with existing partners." },
          { q: "Is this only for enterprise?", a: "Audits are scoped to the brand. Enterprise and growth-stage companies can both benefit, as long as there is willingness to act on the findings." },
          { q: "How is this different from a generic SEO audit?", a: "Classic SEO audits stop at rankings, technical, and on-page. Visibility Audits add AI answer coverage, citation source review, prompt-cluster mapping, and source-layer authority — and tie all of it to a single corrective-action roadmap." },
        ],
      },
      {
        id: "final",
        type: "finalCta",
        eyebrow: "Get started",
        title: "Find the visibility gaps. Then fix them.",
        body: "Request a Visibility Audit and we'll show you where the leverage really is across Google, AI answers, and the source layer.",
        ctas: [ctaPrimary, ctaServices],
      },
    ]}
  />
);

export default VisibilityAudits;
