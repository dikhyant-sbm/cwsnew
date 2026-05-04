import { MarketingPage } from "@/components/marketing/MarketingPage";
import { ctaPrimary, ctaMethodology, ctaServices } from "@/components/marketing/ctas";

const TechnicalSEO = () => (
  <MarketingPage
    meta={{
      title: "Technical SEO Services for AI and Search Visibility | CiteWorks Studio",
      description:
        "CiteWorks Studio improves technical SEO, crawlability, indexation, site architecture, schema, internal linking, page structure, and machine-readable context for stronger Google and AI search visibility.",
    }}
    hero={{
      eyebrow: "Technical SEO",
      h1: "Technical SEO built for Google, AI systems, and buyer clarity.",
      body: [
        "Modern technical SEO is more than crawl health and meta tags. It is the foundation that makes your site interpretable by search engines, AI retrieval systems, and the source layer behind generated answers.",
        "CiteWorks Studio combines classic technical SEO discipline with the entity clarity and structured context required for AI search visibility.",
      ],
      ctas: [ctaPrimary, ctaMethodology],
    }}
    sections={[
      {
        id: "answer",
        type: "answer",
        eyebrow: "Definition",
        title: "What is technical SEO for AI and modern search?",
        body: "Technical SEO is the work that makes a site easy for search engines and AI systems to crawl, index, interpret, and trust. For AI-influenced search, it also includes entity clarity, schema, machine-readable context, and structural signals that help retrieval systems understand who you are and what you do.",
      },
      {
        id: "why",
        type: "prose",
        eyebrow: "Why this matters now",
        title: "Weak technical foundations cost both rankings and AI visibility.",
        paragraphs: [
          "AI systems and search engines need to crawl, parse, and interpret your site reliably. Broken architecture, missing structured data, and ambiguous entity signals all reduce both ranking and retrieval quality.",
          "Strong technical SEO does not guarantee visibility, but weak technical SEO almost guarantees the loss of it.",
        ],
      },
      {
        id: "what-we-do",
        type: "prose",
        eyebrow: "What CiteWorks Studio does",
        title: "Diagnose, prioritize, and execute the technical foundation.",
        paragraphs: [
          "We run a structured technical audit across crawlability, indexation, architecture, schema, internal linking, and entity clarity.",
          "We then ship the corrective-action roadmap with engineering-ready recommendations and in-house execution where appropriate.",
        ],
      },
      {
        id: "what-we-improve",
        type: "cards",
        eyebrow: "What gets improved",
        title: "Technical SEO across crawl, structure, and meaning.",
        cards: [
          { h: "Crawlability", b: "Make sure search engines and AI systems can access the right pages." },
          { h: "Indexation", b: "Manage what is indexed, what is excluded, and why." },
          { h: "Site Architecture", b: "Logical, scalable structure that supports topical authority." },
          { h: "Internal Linking", b: "Distribute authority and clarify entity relationships." },
          { h: "Schema", b: "Structured data that strengthens entity clarity and AI retrieval." },
          { h: "Metadata", b: "Titles, descriptions, and canonical signals aligned to intent." },
          { h: "Page Structure", b: "Hierarchies, headings, and components that scan well for humans and machines." },
          { h: "Content Hierarchy", b: "Topic clusters and supporting pages that reinforce authority." },
          { h: "Machine-Readable Context", b: "Signals that help AI systems interpret your category and offering." },
          { h: "Core Page Quality", b: "Performance, accessibility, and content depth on revenue pages." },
        ],
      },
      {
        id: "connect",
        type: "list",
        eyebrow: "How it connects",
        title: "Technical SEO across Google, AI answers, and source environments.",
        items: [
          "Search layer — rankings, indexation, schema, and core page quality",
          "AI retrieval layer — entity clarity, structured signals, and content interpretability",
          "Source layer — schema and structure improve how third-party sources reference your brand",
          "Content layer — strong structure makes service, comparison, and FAQ content easier to retrieve",
          "Reporting layer — clean technical baseline makes performance data actually trustworthy",
        ],
      },
      {
        id: "deliverables",
        type: "cards",
        eyebrow: "Deliverables",
        title: "What clients receive.",
        cards: [
          { h: "Technical Audit", b: "Crawl, index, architecture, schema, and entity findings." },
          { h: "Engineering-Ready Tickets", b: "Prioritized fixes with clear scope and impact." },
          { h: "Schema Plan", b: "Entity, organization, product, FAQ, and HowTo schema where appropriate." },
          { h: "Internal Linking Plan", b: "Cluster structure and authority routing." },
          { h: "Content Hierarchy Map", b: "Topic clusters that support GEO and AI visibility." },
          { h: "Corrective-Action Roadmap", b: "Sequenced fixes connected to the broader visibility plan." },
        ],
      },
      {
        id: "summary",
        type: "table",
        eyebrow: "LLM-readable summary",
        title: "Technical SEO at a glance.",
        headers: ["Area", "What it means", "What CiteWorks improves", "Why it matters"],
        rows: [
          ["Crawl & index", "Search engine access", "Robots, sitemaps, canonicalization", "Foundation for everything else"],
          ["Architecture", "Site structure", "Topic clusters and authority routing", "Supports topical authority"],
          ["Schema", "Structured data", "Entity, organization, product, FAQ schema", "Improves AI interpretability"],
          ["Entity clarity", "How machines understand you", "Internal linking, structured context, references", "Drives retrieval and citation"],
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
            "Sites with technical debt blocking visibility",
            "Brands launching or relaunching key product lines",
            "Companies expanding into AI-influenced search",
            "Agency partners that need a serious technical backend",
          ],
        },
        right: {
          title: "Not best fit",
          items: [
            "Teams with no engineering capacity to ship fixes",
            "Engagements expecting visibility before fixing the foundation",
            "Brands looking for one-time audits with no execution",
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
          { label: "Citation Architecture", to: "/citation-architecture-services" },
          { label: "Content Strategy", to: "/content-strategy" },
          { label: "AI Search Visibility Services", to: "/ai-search-visibility-services" },
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
          { q: "Do you replace our internal SEO team?", a: "We work alongside internal teams. We bring structured diagnosis, prioritization, and execution support, not turf." },
          { q: "Do you ship code?", a: "We deliver engineering-ready tickets and partner with your team or platform vendor to ship. We can support implementation in-house where the stack allows." },
          { q: "Is schema enough for AI visibility?", a: "Schema helps, but it is one input among many. Entity clarity, content structure, and source-layer authority are equally important." },
          { q: "How long does technical SEO take to show results?", a: "Indexation and crawl improvements show up quickly. Architectural and schema changes compound over one to two quarters." },
        ],
      },
      {
        id: "final",
        type: "finalCta",
        eyebrow: "Get started",
        title: "Set the foundation for both Google and AI visibility.",
        body: "Start with a Visibility Audit. We'll diagnose the technical gaps holding back rankings and AI retrieval, then build the corrective-action roadmap.",
        ctas: [ctaPrimary, ctaServices],
      },
    ]}
  />
);

export default TechnicalSEO;
