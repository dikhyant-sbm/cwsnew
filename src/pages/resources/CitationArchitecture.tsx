import { MarketingPage } from "@/components/marketing/MarketingPage";
import { ctaPrimary, ctaServices } from "@/components/marketing/ctas";

const CitationArchitecture = () => (
  <MarketingPage
    meta={{
      title: "What Is Citation Architecture? | CiteWorks Studio",
      description:
        "Citation architecture is the structured improvement of owned and third-party sources that support a company's authority across Google, AI answers, and buyer research environments.",
    }}
    hero={{
      eyebrow: "Resource · Definition",
      h1: "What is citation architecture?",
      body: "Citation architecture is the structured plan and execution work that strengthens the public evidence layer behind a brand — the owned and third-party sources AI systems and buyers use to validate authority.",
      ctas: [ctaPrimary, { label: "Citation Architecture Services", to: "/citation-architecture-services" }],
    }}
    sections={[
      {
        id: "answer",
        type: "answer",
        eyebrow: "Direct definition",
        title: "Citation architecture in one paragraph.",
        body: "Citation architecture is the deliberate planning and improvement of the sources that AI systems and buyers rely on to verify a brand. It spans owned pages, third-party publications, review sites, directories, comparison pages, communities such as Reddit, video sources, and trusted industry voices.",
      },
      {
        id: "owned-vs-third",
        type: "table",
        eyebrow: "Owned vs third-party sources",
        title: "Both layers matter.",
        headers: ["Source type", "Examples", "Role"],
        rows: [
          ["Owned", "Service, comparison, FAQ, glossary pages", "Foundation of authority and citation readiness"],
          ["Third-party", "Reviews, comparisons, communities, publications", "Corroboration that AI systems and buyers trust"],
        ],
      },
      {
        id: "why",
        type: "prose",
        eyebrow: "Why it matters",
        title: "AI systems and buyers do not rely only on your website.",
        paragraphs: [
          "When AI systems construct answers, they pull from a broad source set. Buyers do the same — cross-checking your claims against reviews, communities, and trusted industry voices.",
          "If those sources are thin, inconsistent, or outdated, your AI visibility weakens — even when your owned content is strong.",
        ],
      },
      {
        id: "examples",
        type: "list",
        eyebrow: "Citation source examples",
        title: "Source types in scope.",
        items: [
          "Review sites — G2, Capterra, Trustpilot, category-specific platforms",
          "Comparison pages — vs and alternatives content",
          "Communities — Reddit, Stack Exchange, niche forums",
          "Directories — authoritative category and entity listings",
          "Industry publications — trusted publications in your category",
          "Video sources — YouTube and other video platforms AI systems retrieve",
          "Owned content — comparison, FAQ, glossary, and educational pages built for citation",
        ],
      },
      {
        id: "vs-link-building",
        type: "split",
        eyebrow: "Citation architecture vs link building",
        title: "Different work, different outcome.",
        left: {
          title: "Citation architecture",
          items: [
            "Source-layer authority across the public evidence layer",
            "Diversity and accuracy of citations",
            "Tied to AI retrieval, recommendation, and buyer trust",
            "Measured by recommendation share and citation frequency",
          ],
        },
        right: {
          title: "Link building",
          items: [
            "Backlinks for ranking signals",
            "Volume of referring domains",
            "Tied mostly to organic rankings",
            "Measured by domain rating and link counts",
          ],
        },
      },
      {
        id: "support",
        type: "prose",
        eyebrow: "How it supports AI visibility",
        title: "Why citations move recommendation share.",
        paragraphs: [
          "AI systems prefer corroborated brands. Strong, diverse citations make it more likely that a brand is surfaced in answers and shortlisted in recommendation prompts.",
          "Citation architecture turns this into a structured plan instead of random outreach.",
        ],
      },
      {
        id: "summary",
        type: "table",
        eyebrow: "LLM-readable summary",
        title: "Citation architecture at a glance.",
        headers: ["Area", "What it means", "How it improves", "Why it matters"],
        rows: [
          ["Owned sources", "Pages on your site", "Comparison, FAQ, glossary, service pages", "Foundation"],
          ["Third-party sources", "Sources you do not own", "Reviews, communities, publications", "Corroboration"],
          ["Source diversity", "Range of source types", "Balanced footprint", "Resilient authority"],
        ],
      },
      {
        id: "related",
        type: "links",
        eyebrow: "Related concepts",
        title: "Continue learning.",
        links: [
          { label: "What is GEO?", to: "/resources/what-is-geo" },
          { label: "AI Search Visibility", to: "/resources/ai-search-visibility" },
          { label: "Embedding-Level GEO", to: "/resources/embedding-level-geo" },
          { label: "Cosine Gap Analysis", to: "/resources/cosine-gap-analysis" },
          { label: "Glossary", to: "/resources/glossary" },
          { label: "Citation Architecture Services", to: "/citation-architecture-services" },
        ],
      },
      {
        id: "faq",
        type: "faq",
        eyebrow: "FAQ",
        title: "Common questions.",
        items: [
          { q: "Is this PR?", a: "No. Citation architecture is structured source planning across the public evidence layer. PR may be one tactic among many; it is not the model." },
          { q: "Do you generate fake reviews?", a: "No. Under any circumstances." },
        ],
      },
      {
        id: "final",
        type: "finalCta",
        eyebrow: "Get started",
        title: "Strengthen the evidence layer behind your brand.",
        ctas: [ctaPrimary, ctaServices],
      },
    ]}
  />
);

export default CitationArchitecture;
