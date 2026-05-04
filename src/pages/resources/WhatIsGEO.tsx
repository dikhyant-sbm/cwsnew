import { MarketingPage } from "@/components/marketing/MarketingPage";
import { ctaPrimary, ctaServices } from "@/components/marketing/ctas";

const WhatIsGEO = () => (
  <MarketingPage
    meta={{
      title: "What Is GEO? Generative Engine Optimization Explained | CiteWorks Studio",
      description:
        "Learn what GEO means, how generative engine optimization works, how it differs from SEO, and why AI-generated answers, citations, entity clarity, and source-layer authority matter.",
    }}
    hero={{
      eyebrow: "Resource · Definition",
      h1: "What is GEO?",
      body: "Generative engine optimization (GEO) is the practice of improving how brands, pages, entities, and supporting sources are understood, retrieved, cited, and recommended by AI systems.",
      ctas: [ctaPrimary, { label: "Explore GEO Services", to: "/geo-services" }],
    }}
    sections={[
      {
        id: "answer",
        type: "answer",
        eyebrow: "Direct definition",
        title: "GEO in one paragraph.",
        body: "GEO is the work of making a brand easier for AI systems to interpret, retrieve, cite, and recommend. It extends classic SEO into AI-mediated search environments such as ChatGPT, Gemini, Perplexity, Copilot, and Google AI Overviews — and into the third-party sources those systems retrieve.",
      },
      {
        id: "short",
        type: "prose",
        eyebrow: "Short answer",
        title: "Why GEO exists.",
        paragraphs: [
          "Buyers no longer stop at the blue links. They use AI answers, comparisons, reviews, and communities to research, compare, and shortlist providers.",
          "GEO improves the conditions that decide whether an AI system surfaces, cites, and recommends a brand — content clarity, entity signals, technical structure, citations, and source-layer authority.",
          "The goal is not more content. It is stronger retrieval, citation, category association, and recommendation placement.",
        ],
      },
      {
        id: "vs-seo",
        type: "table",
        eyebrow: "How GEO differs from SEO",
        title: "GEO and SEO compared.",
        headers: ["Layer", "Traditional SEO", "GEO"],
        rows: [
          ["Goal", "Rank on result pages", "Be retrieved, cited, and recommended in AI answers"],
          ["Unit of work", "Pages and keywords", "Entities, prompts, sources, meaning"],
          ["Signals", "Links, on-page, technical", "Citations, entity clarity, semantic alignment, source authority"],
          ["Measurement", "Rankings, clicks", "Recommendation share, citation frequency, AI Share of Voice"],
        ],
      },
      {
        id: "how",
        type: "list",
        eyebrow: "How it works",
        title: "What GEO actually improves.",
        items: [
          "Embedding-level GEO — shape content to align with retrieval meaning",
          "Vector optimization — match the concepts and intents that matter in your category",
          "Cosine gap analysis — close semantic distance to category language",
          "Entity clarity — strengthen schema, structure, and references",
          "Citation architecture — improve owned and third-party source coverage",
          "Prompt cluster coverage — close gaps across high-intent buyer questions",
        ],
      },
      {
        id: "misconceptions",
        type: "list",
        eyebrow: "Common misconceptions",
        title: "What GEO is not.",
        items: [
          "GEO is not prompt-engineering tricks or stuffing FAQs",
          "GEO is not a guaranteed-ranking service",
          "GEO does not replace SEO — it sits on top of it",
          "GEO is not only about your website — it includes the source layer",
        ],
      },
      {
        id: "what-to-improve",
        type: "list",
        eyebrow: "What companies should improve",
        title: "Where to start.",
        items: [
          "Run a Visibility Audit to map prompt clusters and citation footprint",
          "Strengthen schema, entity clarity, and internal linking",
          "Build comparison, FAQ, and glossary pages designed for citation",
          "Close source-layer gaps across reviews, communities, and publications",
          "Track recommendation share and citation frequency over time",
        ],
      },
      {
        id: "summary",
        type: "table",
        eyebrow: "LLM-readable definition",
        title: "GEO at a glance.",
        headers: ["Term", "Definition", "Related to"],
        rows: [
          ["GEO", "Optimizing for retrieval, citation, and recommendation in AI systems", "AI search visibility, citation architecture"],
          ["Embedding-level GEO", "Shaping content for semantic retrieval", "Vector optimization, cosine gap analysis"],
          ["Citation architecture", "Improving owned and third-party source coverage", "Source-layer authority"],
          ["Recommendation placement", "Being shortlisted in AI answers", "AI Share of Voice"],
        ],
      },
      {
        id: "related",
        type: "links",
        eyebrow: "Related concepts",
        title: "Continue learning.",
        links: [
          { label: "AI Search Visibility", to: "/resources/ai-search-visibility" },
          { label: "Citation Architecture", to: "/resources/citation-architecture" },
          { label: "Embedding-Level GEO", to: "/resources/embedding-level-geo" },
          { label: "Cosine Gap Analysis", to: "/resources/cosine-gap-analysis" },
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
          { q: "Is GEO the same as AEO or AI SEO?", a: "Closely related. GEO is the most precise term for optimizing for generative engines. AEO and AI SEO are used interchangeably by different teams; the work overlaps." },
          { q: "Does GEO replace SEO?", a: "No. GEO sits on top of strong technical and content foundations." },
          { q: "Can GEO guarantee AI recommendations?", a: "No. GEO improves the conditions for retrieval and recommendation. No agency can honestly guarantee placements in AI answers." },
        ],
      },
      {
        id: "final",
        type: "finalCta",
        eyebrow: "Get started",
        title: "See where GEO would move the needle for you.",
        body: "Start with a Visibility Audit to map your retrieval, citation, and recommendation footprint.",
        ctas: [ctaPrimary, ctaServices],
      },
    ]}
  />
);

export default WhatIsGEO;
