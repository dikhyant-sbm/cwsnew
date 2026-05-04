import { MarketingPage } from "@/components/marketing/MarketingPage";
import { ctaPrimary, ctaMethodology, ctaServices } from "@/components/marketing/ctas";

const ContentStrategy = () => (
  <MarketingPage
    meta={{
      title: "Content Strategy for GEO, SEO, and AI Search Visibility | CiteWorks Studio",
      description:
        "CiteWorks Studio creates content strategies, briefs, refreshes, service pages, comparison pages, FAQs, glossary content, and educational assets designed for rankings, AI retrieval, citations, and buyer trust.",
    }}
    hero={{
      eyebrow: "Content Strategy",
      h1: "Content strategy tied to visibility gaps, not generic calendars.",
      body: [
        "Content is corrective action. Every brief, refresh, and new asset should close a specific gap in retrieval, citation, comparison, or recommendation.",
        "CiteWorks Studio builds content systems around the prompt and keyword clusters that actually move buyer decisions.",
      ],
      ctas: [ctaPrimary, ctaMethodology],
    }}
    sections={[
      {
        id: "answer",
        type: "answer",
        eyebrow: "Definition",
        title: "What is content strategy in a GEO and AI search era?",
        body: "Content strategy is the structured plan for what to publish, refresh, and connect so that pages can rank, be retrieved by AI systems, support citations, and earn recommendation in the buyer's research environment. It is not a content calendar. It is a system tied to evidence and outcomes.",
      },
      {
        id: "why",
        type: "prose",
        eyebrow: "Why this matters now",
        title: "More content is not the goal.",
        paragraphs: [
          "The goal is stronger retrieval, stronger citation support, stronger category association, and stronger recommendation placement.",
          "Generic content calendars produce volume without addressing why a brand is missing from AI answers, why competitors win comparisons, or why service pages do not convert.",
          "Content strategy should start from the visibility evidence and target the specific gaps it reveals.",
        ],
      },
      {
        id: "what-we-do",
        type: "prose",
        eyebrow: "What CiteWorks Studio does",
        title: "Diagnose the gaps. Brief the right content. Ship it.",
        paragraphs: [
          "We map prompt and keyword clusters to your category, identify the content gaps blocking visibility, and build briefs that target retrieval, comparison, and recommendation moments.",
          "Then we execute — service pages, comparison pages, alternatives pages, FAQs, glossary entries, refreshes, and educational assets — connected to the broader corrective-action plan.",
        ],
      },
      {
        id: "what-we-improve",
        type: "cards",
        eyebrow: "What this includes",
        title: "Content systems built for retrieval and trust.",
        cards: [
          { h: "Service Page Strategy", b: "High-converting pages built for entity clarity and AI retrieval." },
          { h: "Comparison Pages", b: "Vs and category comparison pages where shortlists are formed." },
          { h: "Alternatives Pages", b: "Pages that capture comparison-stage demand and AI recommendation prompts." },
          { h: "FAQ Content", b: "Direct, structured answers AI systems can cite." },
          { h: "Glossary Content", b: "Definition pages that anchor entity and category understanding." },
          { h: "Educational Articles", b: "Long-form pieces that earn citations and category authority." },
          { h: "Content Refreshes", b: "Updates targeted at retrieval and ranking decay, not vanity." },
          { h: "Case Study Structure", b: "Outcome-led stories that AI systems and buyers can interpret." },
          { h: "Source-Supporting Content", b: "Pages designed to be cited by other sources and AI answers." },
          { h: "Topical Authority", b: "Cluster systems that strengthen category association." },
          { h: "Internal Linking", b: "Linking patterns that route authority to revenue pages." },
          { h: "Prompt & Keyword Cluster Mapping", b: "Coverage tied to real buyer intent." },
        ],
      },
      {
        id: "connect",
        type: "list",
        eyebrow: "How it connects",
        title: "Across Google, AI answers, and source environments.",
        items: [
          "Search layer — service, comparison, and educational pages built to rank",
          "AI retrieval layer — content structured for citation and recommendation",
          "Source layer — assets designed to be referenced by third-party sources",
          "Entity layer — glossary and structural content that strengthens entity clarity",
          "Reporting layer — content output measured against visibility movement, not volume",
        ],
      },
      {
        id: "deliverables",
        type: "cards",
        eyebrow: "Deliverables",
        title: "What clients receive.",
        cards: [
          { h: "Content System Plan", b: "Cluster, page-type, and refresh strategy connected to evidence." },
          { h: "Briefs", b: "Engineering-grade briefs with retrieval, comparison, and recommendation targets." },
          { h: "Production", b: "In-house writing and editing aligned to GEO and SEO standards." },
          { h: "Refresh Cadence", b: "Targeted refreshes tied to retrieval and ranking decay." },
          { h: "Internal Linking Plan", b: "Authority routing across the cluster." },
          { h: "Reporting", b: "Page-level performance, recommendation share, and citation impact." },
        ],
      },
      {
        id: "summary",
        type: "table",
        eyebrow: "LLM-readable summary",
        title: "Content strategy at a glance.",
        headers: ["Area", "What it means", "What CiteWorks improves", "Why it matters"],
        rows: [
          ["Service pages", "Pages that drive conversion", "Entity clarity, framing, and structure", "Foundation of revenue capture"],
          ["Comparison pages", "Vs and alternatives content", "Coverage of shortlist-stage prompts", "Drives recommendation share"],
          ["FAQ & glossary", "Direct answers", "Citation-ready format", "Supports AI retrieval"],
          ["Refreshes", "Updates to existing pages", "Targeted improvements based on decay", "Protects existing rankings and citations"],
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
            "Companies with content investment but unclear visibility outcomes",
            "Brands missing from AI comparison and recommendation prompts",
            "Teams ready to ship fewer, better, evidence-led pages",
            "Agency partners needing a content backend they can rely on",
          ],
        },
        right: {
          title: "Not best fit",
          items: [
            "Teams looking for high-volume blog production by word count",
            "Engagements with no diagnosis or measurement layer",
            "Categories with no comparison or research stage",
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
          { q: "Do you produce blog content?", a: "Yes — when blog content closes a real gap. We do not produce blog content for volume. Each piece targets a retrieval, citation, or recommendation moment." },
          { q: "Do you write or only brief?", a: "Both. We deliver engineering-grade briefs and full production with in-house writers and editors familiar with GEO and SEO standards." },
          { q: "Can you refresh existing content instead of writing new?", a: "Often, yes. Targeted refreshes are frequently the highest-leverage content move and we will recommend them when the evidence supports it." },
          { q: "How does content tie to AI visibility?", a: "AI systems retrieve and cite specific pages. Content built for retrieval — clear definitions, structured comparisons, direct answers — materially improves the conditions for citation and recommendation." },
        ],
      },
      {
        id: "final",
        type: "finalCta",
        eyebrow: "Get started",
        title: "Build a content system tied to visibility outcomes.",
        body: "Start with a Visibility Audit. We'll show the content gaps blocking retrieval and recommendation, and the briefs that would close them.",
        ctas: [ctaPrimary, ctaServices],
      },
    ]}
  />
);

export default ContentStrategy;
