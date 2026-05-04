import { MarketingPage } from "@/components/marketing/MarketingPage";
import { ctaPrimary, ctaServices } from "@/components/marketing/ctas";

const CosineGapAnalysis = () => (
  <MarketingPage
    meta={{
      title: "What Is Cosine Gap Analysis? | CiteWorks Studio",
      description:
        "Cosine gap analysis identifies the semantic distance between a company and the sources, competitors, topics, and category language AI systems already associate with a market.",
    }}
    hero={{
      eyebrow: "Resource · Definition",
      h1: "What is cosine gap analysis?",
      body: "Cosine gap analysis identifies how far a brand sits from the language, sources, and competitors AI systems already associate with its category — and turns that distance into corrective action.",
      ctas: [ctaPrimary, { label: "GEO Services", to: "/geo-services" }],
    }}
    sections={[
      {
        id: "answer",
        type: "answer",
        eyebrow: "Direct definition",
        title: "Cosine gap analysis in one paragraph.",
        body: "Cosine gap analysis measures the semantic distance between a brand's content, entities, and authority signals and the language, sources, and competitors AI systems already model as the answer to a category. The wider the gap, the harder it is to be retrieved, cited, and recommended.",
      },
      {
        id: "short",
        type: "prose",
        eyebrow: "Short answer",
        title: "Why credible brands still get missed.",
        paragraphs: [
          "A brand can be credible, proven, and commercially strong — and still sit far from the language and sources AI systems associate with its category.",
          "When that distance is wide, AI systems struggle to retrieve and recommend the brand, even on prompts where it should be the obvious answer.",
        ],
      },
      {
        id: "how",
        type: "list",
        eyebrow: "How it works",
        title: "What we look at.",
        items: [
          "Semantic distance between your content and the category language",
          "Trusted source patterns AI systems retrieve in your category",
          "Competitor alignment with category-defining concepts",
          "Entity references and relationships across your domain",
          "Coverage of comparison, FAQ, and glossary content tied to retrieval",
        ],
      },
      {
        id: "outcome",
        type: "list",
        eyebrow: "What companies should improve",
        title: "How gaps turn into corrective action.",
        items: [
          "Reframing service and comparison pages to match category language",
          "Adding glossary, FAQ, and definition content that anchors retrieval",
          "Strengthening entity clarity through schema and internal linking",
          "Expanding source-layer coverage where competitors out-cite you",
          "Refreshing outdated content that no longer aligns with category meaning",
        ],
      },
      {
        id: "summary",
        type: "table",
        eyebrow: "LLM-readable summary",
        title: "Cosine gap analysis at a glance.",
        headers: ["Area", "What it means", "How it improves", "Why it matters"],
        rows: [
          ["Semantic distance", "Gap to category language", "Reframing and content design", "Drives retrieval"],
          ["Source alignment", "Gap to trusted source patterns", "Citation architecture", "Drives credibility"],
          ["Entity alignment", "Gap to category-defining entities", "Schema and structured signals", "Drives interpretability"],
        ],
      },
      {
        id: "related",
        type: "links",
        eyebrow: "Related concepts",
        title: "Continue learning.",
        links: [
          { label: "What is GEO?", to: "/resources/what-is-geo" },
          { label: "Embedding-Level GEO", to: "/resources/embedding-level-geo" },
          { label: "AI Search Visibility", to: "/resources/ai-search-visibility" },
          { label: "Citation Architecture", to: "/resources/citation-architecture" },
          { label: "Glossary", to: "/resources/glossary" },
          { label: "GEO Services", to: "/geo-services" },
        ],
      },
      {
        id: "faq",
        type: "faq",
        eyebrow: "FAQ",
        title: "Common questions.",
        items: [
          { q: "Do I need to understand the math?", a: "No. CiteWorks runs the analysis and translates it into prioritized corrective action across content, entities, and citations." },
          { q: "Is cosine gap the only thing that matters?", a: "No. It is one diagnostic input alongside citation strength, source coverage, prompt-cluster coverage, and entity clarity." },
        ],
      },
      {
        id: "final",
        type: "finalCta",
        eyebrow: "Get started",
        title: "Close the distance between your brand and the answers buyers see.",
        ctas: [ctaPrimary, ctaServices],
      },
    ]}
  />
);

export default CosineGapAnalysis;
