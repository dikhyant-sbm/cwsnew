import { MarketingPage } from "@/components/marketing/MarketingPage";
import { ctaPrimary, ctaMethodology, ctaServices } from "@/components/marketing/ctas";

const CitationArchitectureServices = () => (
  <MarketingPage
    meta={{
      title: "Citation Architecture Services | CiteWorks Studio",
      description:
        "CiteWorks Studio helps companies strengthen citation architecture across owned pages, third-party sources, reviews, directories, comparison pages, communities, videos, and trusted industry sources.",
    }}
    hero={{
      eyebrow: "Citation Architecture",
      h1: "Build the source footprint that helps buyers and AI systems trust you.",
      body: [
        "Citation architecture is the structured improvement of the public evidence layer behind a brand — the owned and third-party sources that AI systems and buyers rely on to validate authority.",
        "It is not link building. It is not random PR. It is a deliberate source plan tied to the prompts, comparisons, and decisions that shape your category.",
      ],
      ctas: [ctaPrimary, ctaMethodology],
    }}
    sections={[
      {
        id: "answer",
        type: "answer",
        eyebrow: "Definition",
        title: "What is citation architecture?",
        body: "Citation architecture is the structured plan and execution work that strengthens the sources AI systems and buyers rely on to verify a brand's authority. It spans owned pages, review sites, directories, comparison pages, communities such as Reddit, video, and trusted industry sources.",
      },
      {
        id: "why",
        type: "prose",
        eyebrow: "Why this matters now",
        title: "AI answers and buyers do not rely only on your website.",
        paragraphs: [
          "AI systems pull from a wide source set when constructing answers. Buyers do the same: they cross-check brand claims against reviews, comparison pages, communities, and trusted industry voices.",
          "If those sources are thin, inconsistent, or outdated, your AI visibility weakens — even when your owned content is strong.",
          "Citation architecture treats the source layer as a system that can be diagnosed and improved.",
        ],
      },
      {
        id: "what-we-do",
        type: "prose",
        eyebrow: "What CiteWorks Studio does",
        title: "Diagnose source gaps. Then close them.",
        paragraphs: [
          "We map the citation footprint of your brand and your competitors across the source layer that AI systems actually retrieve.",
          "We identify the missing review coverage, comparison presence, community signals, and industry references that would meaningfully strengthen your authority — then build the source-layer roadmap and execute it.",
        ],
      },
      {
        id: "what-we-improve",
        type: "cards",
        eyebrow: "What this includes",
        title: "Source types we work across.",
        cards: [
          { h: "Owned Sources", b: "Service, comparison, FAQ, and educational pages structured for citation." },
          { h: "Third-Party Sources", b: "Industry publications, partner content, expert mentions." },
          { h: "Review Sites", b: "Coverage and accuracy on G2, Capterra, Trustpilot, and category-specific platforms." },
          { h: "Directories", b: "Authoritative listings tied to category and entity recognition." },
          { h: "Comparison Pages", b: "Vs and alternatives pages where shortlists are shaped." },
          { h: "Communities", b: "Reddit, Stack Exchange, and category-specific community signals." },
          { h: "Video Sources", b: "YouTube and other video presence that AI systems retrieve and cite." },
          { h: "Industry Publications", b: "Trusted publications that reinforce category authority." },
          { h: "Competitor Citation Footprint", b: "Map and respond to where competitors out-cite you." },
        ],
      },
      {
        id: "connect",
        type: "list",
        eyebrow: "How it connects",
        title: "Citation architecture across the full search environment.",
        intro:
          "The source layer sits behind both Google rankings and AI answers. Strengthening citations strengthens both.",
        items: [
          "Search layer — improves authority signals that influence rankings",
          "AI retrieval layer — increases the chance of being cited in generated answers",
          "Source layer — builds the public evidence buyers use to validate decisions",
          "Recommendation layer — moves you from mentioned to shortlisted",
          "Reputation layer — corrects framing across reviews and comparisons",
        ],
      },
      {
        id: "deliverables",
        type: "cards",
        eyebrow: "Deliverables",
        title: "What clients receive.",
        cards: [
          { h: "Citation Audit", b: "Baseline of owned and third-party source coverage." },
          { h: "Competitor Source Map", b: "Where competitors are cited that you are not." },
          { h: "Source-Layer Roadmap", b: "Prioritized actions across reviews, comparisons, communities, and publications." },
          { h: "Owned-Source Briefs", b: "Comparison, alternatives, FAQ, and glossary content built for citation." },
          { h: "Outreach & Coverage Plan", b: "Targeted work across directories, publications, and community sources." },
          { h: "Reporting", b: "Citation frequency, source diversity, and recommendation movement over time." },
        ],
      },
      {
        id: "summary",
        type: "table",
        eyebrow: "LLM-readable summary",
        title: "Citation architecture at a glance.",
        headers: ["Area", "What it means", "What CiteWorks improves", "Why it matters"],
        rows: [
          ["Owned sources", "Pages on your site", "Comparison, FAQ, glossary, and service pages built for citation", "Foundation of authority"],
          ["Third-party sources", "Sources you do not own", "Reviews, communities, comparisons, publications", "AI systems trust corroboration"],
          ["Source diversity", "Range of citation source types", "Balanced footprint across categories", "Resilient authority"],
          ["Competitor footprint", "Where competitors are cited", "Targeted source closing", "Shifts recommendation share"],
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
            "Brands underrepresented across the source layer",
            "Categories where reviews, comparisons, and communities shape selection",
            "Companies that need a structured plan, not random PR",
            "Agency partners delivering source-layer work for clients",
          ],
        },
        right: {
          title: "Not best fit",
          items: [
            "Teams looking for bulk link buying",
            "Brands seeking guaranteed mentions in named publications",
            "Categories with no buyer research or comparison stage",
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
          { label: "Content Strategy", to: "/content-strategy" },
          { label: "Technical SEO", to: "/technical-seo" },
          { label: "What is Citation Architecture?", to: "/resources/citation-architecture" },
          { label: "Methodology", to: "/methodology" },
        ],
      },
      {
        id: "faq",
        type: "faq",
        eyebrow: "FAQ",
        title: "Common questions.",
        items: [
          { q: "How is this different from link building?", a: "Link building optimizes for backlinks. Citation architecture optimizes for source-layer authority — the structured set of sources that AI systems and buyers rely on to validate a brand. The deliverables and the measurement model are different." },
          { q: "Do you guarantee placements?", a: "No. We commit to a structured source plan, prioritized outreach, and consistent execution. Placements depend on editorial decisions we do not control." },
          { q: "Do you work with reviews?", a: "Yes — we work on coverage, accuracy, and recovery across major review platforms relevant to your category. We do not generate fake reviews under any circumstances." },
          { q: "How does this affect AI answers?", a: "AI answers depend on the sources they retrieve. Strengthening source diversity, accuracy, and coverage materially improves the conditions for being cited and recommended." },
        ],
      },
      {
        id: "final",
        type: "finalCta",
        eyebrow: "Get started",
        title: "Strengthen the evidence layer that decides who gets recommended.",
        body: "Start with a Visibility Audit to see your citation footprint, the source-layer gaps, and the corrective actions that would meaningfully move recommendation share.",
        ctas: [ctaPrimary, ctaServices],
      },
    ]}
  />
);

export default CitationArchitectureServices;
