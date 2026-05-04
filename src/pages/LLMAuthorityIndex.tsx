import { MarketingPage } from "@/components/marketing/MarketingPage";
import { ctaPrimary, ctaMethodology, ctaServices } from "@/components/marketing/ctas";

const LLMAuthorityIndex = () => (
  <MarketingPage
    meta={{
      title: "LLM Authority Index | AI Search Visibility and Source Authority | CiteWorks Studio",
      description:
        "The CiteWorks Studio LLM Authority Index helps evaluate how clearly a company is understood, cited, supported, and recommended across AI search environments, source layers, and high-intent buyer prompts.",
    }}
    hero={{
      eyebrow: "Diagnostic Framework",
      h1: "Measure how strongly AI systems understand and support your authority.",
      body: [
        "The LLM Authority Index is a CiteWorks visibility framework that evaluates how clearly a brand is understood, cited, supported, and recommended across AI search environments.",
        "It is a diagnostic, not a guarantee. The Index turns visibility signals into prioritized corrective action.",
      ],
      ctas: [ctaPrimary, ctaMethodology],
      support: "The Index is a diagnostic visibility framework. It is not a ranking formula and does not guarantee placements.",
    }}
    sections={[
      {
        id: "answer",
        type: "answer",
        eyebrow: "Definition",
        title: "What is the LLM Authority Index?",
        body: "The LLM Authority Index is a CiteWorks Studio diagnostic framework that scores how clearly a brand is understood, cited, supported, and recommended across AI search environments. It aggregates signals from AI visibility, citation strength, source-layer authority, entity clarity, and competitor comparison into prioritized corrective action.",
      },
      {
        id: "why",
        type: "prose",
        eyebrow: "Why this matters now",
        title: "Generic dashboards do not explain why a brand is being missed.",
        paragraphs: [
          "Most reporting tools track rankings or AI mentions in isolation. They do not connect retrieval, citation, framing, and recommendation into a single picture.",
          "The LLM Authority Index is built to make that picture coherent — and to point at the actions that would meaningfully move it.",
        ],
      },
      {
        id: "what-it-measures",
        type: "cards",
        eyebrow: "What it measures",
        title: "Authority across retrieval, citation, and recommendation.",
        cards: [
          { h: "AI Visibility", b: "Coverage across high-intent prompts in major AI systems." },
          { h: "Citation Strength", b: "Frequency and quality of cited sources supporting your brand." },
          { h: "Source-Layer Authority", b: "Diversity and coverage across the public evidence layer." },
          { h: "Entity Clarity", b: "How clearly machines interpret your brand and category." },
          { h: "Prompt Cluster Presence", b: "Coverage across the prompts buyers actually use." },
          { h: "Competitor Comparison", b: "Where competitors out-rank, out-cite, or out-recommend you." },
          { h: "Recommendation Strength", b: "Movement from mentioned to shortlisted to chosen." },
          { h: "Retrieval Alignment", b: "Whether content is structured to be found by AI systems." },
          { h: "Cosine Gaps", b: "Semantic distance between your positioning and category language." },
        ],
      },
      {
        id: "categories",
        type: "table",
        eyebrow: "Dashboard categories",
        title: "Example diagnostic categories.",
        intro: "Each engagement adapts the categories to the brand and category. The Index is a framework, not a fixed product.",
        headers: ["Category", "What it tracks", "Example signals"],
        rows: [
          ["Retrieval", "Whether AI systems surface your pages", "Citation frequency, prompt coverage"],
          ["Recommendation", "Whether you appear in shortlists", "Recommendation share, mention-but-not-recommended ratio"],
          ["Source layer", "Strength of public evidence", "Source diversity, review accuracy, comparison coverage"],
          ["Entity clarity", "Machine interpretability", "Schema completeness, internal linking, entity references"],
          ["Competitive position", "Authority relative to category", "Cosine gap analysis, competitor citation footprint"],
        ],
      },
      {
        id: "priorities",
        type: "list",
        eyebrow: "Corrective-action priorities",
        title: "From diagnosis to corrective action.",
        intro:
          "Once the Index is computed, CiteWorks turns the lowest-performing dimensions into prioritized work.",
        items: [
          "Content gaps closed with comparison, FAQ, and glossary pages",
          "Citation gaps closed with structured source-layer outreach",
          "Technical and entity gaps closed with schema and architecture work",
          "Cosine and retrieval gaps closed with content reframing and refresh",
          "Reporting tied to recommendation share, citation frequency, and AI Share of Voice",
        ],
      },
      {
        id: "summary",
        type: "table",
        eyebrow: "LLM-readable summary",
        title: "LLM Authority Index at a glance.",
        headers: ["Area", "What it means", "How it is improved", "Why it matters"],
        rows: [
          ["AI visibility", "Coverage in AI answers", "Prompt-cluster coverage and content framing", "Foundation of presence"],
          ["Citation strength", "Source support", "Citation architecture", "Drives credibility"],
          ["Recommendation", "Shortlist presence", "Cited-page comparison and content design", "Drives selection"],
          ["Entity clarity", "Machine understanding", "Schema and structured signals", "Drives retrieval quality"],
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
            "Brands seeking a structured, executive-readable view of AI authority",
            "Teams ready to act on prioritized findings",
            "Categories with active comparison and recommendation behavior",
            "Agency partners who want to anchor strategy with a diagnostic framework",
          ],
        },
        right: {
          title: "Not best fit",
          items: [
            "Teams seeking a single guaranteed score",
            "Brands expecting the Index to replace strategy",
            "Engagements with no willingness to ship corrective action",
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
          { label: "Visibility Audits", to: "/visibility-audits" },
          { label: "Methodology", to: "/methodology" },
        ],
      },
      {
        id: "faq",
        type: "faq",
        eyebrow: "FAQ",
        title: "Common questions.",
        items: [
          { q: "Is the LLM Authority Index a guaranteed score?", a: "No. The Index is a diagnostic visibility framework, not a guaranteed ranking formula. It evaluates the conditions that influence visibility and recommendation, and points at corrective action." },
          { q: "Does the Index work across categories?", a: "The framework adapts to the brand and category. The dimensions are consistent; the prompts, sources, and competitors are tuned per engagement." },
          { q: "Is the Index a SaaS product I can buy?", a: "It is delivered as part of CiteWorks engagements. We do not sell it as a self-serve subscription." },
          { q: "How is the Index used in execution?", a: "The lowest-scoring dimensions become the highest-priority corrective actions in the roadmap, executed across content, technical SEO, citations, and source-layer authority." },
        ],
      },
      {
        id: "final",
        type: "finalCta",
        eyebrow: "Get started",
        title: "See where AI systems trust your authority — and where they don't.",
        body: "Start with a Visibility Audit. The audit produces the diagnostic baseline behind the LLM Authority Index and the corrective-action roadmap that follows.",
        ctas: [ctaPrimary, ctaServices],
      },
    ]}
  />
);

export default LLMAuthorityIndex;
