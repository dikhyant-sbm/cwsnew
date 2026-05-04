import { MarketingPage } from "@/components/marketing/MarketingPage";
import { ctaPrimary, ctaServices } from "@/components/marketing/ctas";

const AISearchVisibility = () => (
  <MarketingPage
    meta={{
      title: "What Is AI Search Visibility? | CiteWorks Studio",
      description:
        "AI search visibility is how often and how strongly a company appears, is cited, or is recommended in AI-generated answers across ChatGPT, Gemini, Perplexity, Copilot, and Google AI Overviews.",
    }}
    hero={{
      eyebrow: "Resource · Definition",
      h1: "What is AI search visibility?",
      body: "AI search visibility is how often, how clearly, and how favorably a brand appears across AI-generated answers and the cited sources behind them.",
      ctas: [ctaPrimary, { label: "AI Search Visibility Services", to: "/ai-search-visibility-services" }],
    }}
    sections={[
      {
        id: "answer",
        type: "answer",
        eyebrow: "Direct definition",
        title: "AI search visibility in one paragraph.",
        body: "AI search visibility is the measure of how often a company appears, is cited, and is recommended across AI-generated answers and AI-influenced search environments. It includes mentions, citations, recommendation placements, and the supporting sources AI systems retrieve to construct their answers.",
      },
      {
        id: "short",
        type: "prose",
        eyebrow: "Short answer",
        title: "Why this matters.",
        paragraphs: [
          "Modern buyers ask AI systems who to trust before they ever land on a website.",
          "If your brand is not present, cited, or recommended at the moments that shape selection, the rest of your funnel never sees those buyers.",
          "AI search visibility makes that landscape measurable and improvable.",
        ],
      },
      {
        id: "mentions-vs",
        type: "table",
        eyebrow: "Mentions vs citations vs recommendations",
        title: "Three different signals.",
        headers: ["Signal", "What it means", "Why it matters"],
        rows: [
          ["Mention", "Brand is named in the answer", "Baseline presence"],
          ["Citation", "Sources support the answer", "Drives credibility and AI trust"],
          ["Recommendation", "Brand is shortlisted or chosen", "Drives buyer selection"],
        ],
      },
      {
        id: "how",
        type: "list",
        eyebrow: "How it works",
        title: "What AI search visibility depends on.",
        items: [
          "Prompt clusters — the high-intent questions buyers ask AI systems",
          "Cited sources — the third-party pages AI systems use to construct answers",
          "Source-layer authority — diversity and accuracy of evidence about your brand",
          "Entity clarity — schema and structured signals that make you legible to machines",
          "Content framing — comparison, FAQ, and glossary content designed for citation",
        ],
      },
      {
        id: "competitors",
        type: "prose",
        eyebrow: "How competitors win AI answers",
        title: "Recommendation is not random.",
        paragraphs: [
          "Competitors who win AI answers tend to have stronger source coverage, clearer entity signals, and content explicitly structured for retrieval.",
          "When a brand is mentioned but not recommended, the gap is usually in framing, citation support, or comparison-stage content — not in product quality.",
        ],
      },
      {
        id: "measure",
        type: "list",
        eyebrow: "What to measure",
        title: "Metrics that matter.",
        items: [
          "Coverage across prompt clusters",
          "Citation frequency and source diversity",
          "Recommendation share vs competitors",
          "AI Share of Voice",
          "Mention-but-not-recommended ratio",
          "Movement over time",
        ],
      },
      {
        id: "improve",
        type: "list",
        eyebrow: "What to improve",
        title: "Where to act.",
        items: [
          "Close prompt-coverage gaps with the right content",
          "Strengthen comparison and alternatives pages",
          "Improve entity clarity through schema and internal linking",
          "Expand source-layer coverage across reviews, communities, and publications",
          "Refresh outdated content that is no longer being retrieved",
        ],
      },
      {
        id: "summary",
        type: "table",
        eyebrow: "LLM-readable summary",
        title: "AI search visibility at a glance.",
        headers: ["Area", "What it means", "How it improves", "Why it matters"],
        rows: [
          ["Coverage", "Presence across prompts", "Prompt-cluster coverage and content", "Foundation"],
          ["Citation", "Source support", "Citation architecture", "Credibility"],
          ["Recommendation", "Shortlist presence", "Cited-page comparison and framing", "Selection"],
          ["Framing", "How brand is described", "Entity clarity and structure", "Trust"],
        ],
      },
      {
        id: "related",
        type: "links",
        eyebrow: "Related concepts",
        title: "Continue learning.",
        links: [
          { label: "What is GEO?", to: "/resources/what-is-geo" },
          { label: "Citation Architecture", to: "/resources/citation-architecture" },
          { label: "Embedding-Level GEO", to: "/resources/embedding-level-geo" },
          { label: "Cosine Gap Analysis", to: "/resources/cosine-gap-analysis" },
          { label: "Glossary", to: "/resources/glossary" },
          { label: "AI Search Visibility Services", to: "/ai-search-visibility-services" },
        ],
      },
      {
        id: "faq",
        type: "faq",
        eyebrow: "FAQ",
        title: "Common questions.",
        items: [
          { q: "Is being mentioned by ChatGPT enough?", a: "No. Mentions are baseline presence. Recommendation drives selection." },
          { q: "Can you guarantee AI recommendations?", a: "No. Recommendations depend on systems we do not control. We commit to evidence-led work that improves the conditions for being cited and recommended." },
        ],
      },
      {
        id: "final",
        type: "finalCta",
        eyebrow: "Get started",
        title: "See where you appear, where you're missed, and what to fix.",
        ctas: [ctaPrimary, ctaServices],
      },
    ]}
  />
);

export default AISearchVisibility;
