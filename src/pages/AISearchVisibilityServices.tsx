import { MarketingPage } from "@/components/marketing/MarketingPage";
import { ctaPrimary, ctaMethodology, ctaServices } from "@/components/marketing/ctas";

const AISearchVisibilityServices = () => (
  <MarketingPage
    meta={{
      title: "AI Search Visibility Services | CiteWorks Studio",
      description:
        "CiteWorks Studio helps companies measure and improve AI search visibility across ChatGPT, Gemini, Perplexity, Copilot, Google AI Overviews, cited sources, and recommendation-stage prompts.",
    }}
    hero={{
      eyebrow: "AI Search Visibility",
      h1: "Improve how your company appears in AI-generated answers.",
      body: [
        "AI search visibility is how often, how clearly, and how favorably your brand appears across AI answers, AI Overviews, and the cited sources behind them.",
        "CiteWorks Studio measures visibility across prompts that matter, then closes the gaps that keep you from being cited or recommended.",
      ],
      ctas: [ctaPrimary, ctaMethodology],
      support:
        "Best fit for brands already credible in their category but underrepresented when buyers ask AI systems who to trust.",
    }}
    sections={[
      {
        id: "answer",
        type: "answer",
        eyebrow: "Definition",
        title: "What is AI search visibility?",
        body: "AI search visibility is the measure of how often a company appears, is cited, and is recommended across AI-generated answers and AI-influenced search environments. It includes mentions, citations, recommendation placements, and the supporting sources that AI systems retrieve to construct their answers.",
      },
      {
        id: "why",
        type: "prose",
        eyebrow: "Why this matters now",
        title: "Mentions are not enough. Recommendation is the goal.",
        paragraphs: [
          "Being mentioned by ChatGPT, Gemini, Perplexity, Copilot, or AI Overviews is not the same as being recommended. Recommendation drives shortlisting and selection.",
          "Most companies have no structured visibility into which prompts they appear in, which sources are influencing those answers, or where competitors are being chosen instead.",
          "AI search visibility makes that landscape measurable and improvable.",
        ],
      },
      {
        id: "what-we-do",
        type: "prose",
        eyebrow: "What CiteWorks Studio does",
        title: "Measure visibility. Then improve it.",
        paragraphs: [
          "We start with prompt-cluster mapping for your category, then test visibility across major AI systems and AI Overviews.",
          "We compare your cited-page footprint to competitors, identify where buyers see you mentioned versus recommended, and build a corrective-action roadmap across content, citations, technical SEO, and source-layer authority.",
        ],
      },
      {
        id: "what-we-analyze",
        type: "cards",
        eyebrow: "What we analyze and improve",
        title: "Visibility, framing, and recommendation.",
        cards: [
          { h: "AI Answer Visibility", b: "Where your brand appears across high-intent prompts in major AI systems." },
          { h: "Brand Mentions", b: "How frequently and accurately you are mentioned vs your competitors." },
          { h: "Recommendation Placement", b: "Whether you appear in shortlists or only as a passing reference." },
          { h: "Cited Sources", b: "Which third-party pages influence the answers buyers see." },
          { h: "Competitor Visibility", b: "Where competitors are winning recommendation environments." },
          { h: "Prompt Cluster Coverage", b: "Coverage and accuracy across the buyer-intent prompt landscape." },
          { h: "AI Share of Voice", b: "Aggregate measure of presence across categories and systems." },
          { h: "Source-Layer Support", b: "Strength of the evidence ecosystem supporting your authority." },
          { h: "Mentioned-but-Not-Recommended", b: "Diagnose why a brand is named without being chosen." },
        ],
      },
      {
        id: "connect",
        type: "list",
        eyebrow: "How it connects",
        title: "Across Google, AI answers, and source environments.",
        intro:
          "AI search visibility is not a side channel. It depends on the same systems that drive Google rankings and the third-party sources buyers use to validate decisions.",
        items: [
          "Search layer — Google rankings, AI Overviews, schema, technical SEO",
          "AI retrieval layer — ChatGPT, Gemini, Perplexity, Copilot",
          "Source layer — review sites, comparison pages, communities, industry sources",
          "Entity layer — schema, structured relationships, knowledge graph alignment",
          "Content layer — service, comparison, FAQ, and glossary content",
          "Reporting layer — recommendation share, citation frequency, AI Share of Voice",
        ],
      },
      {
        id: "deliverables",
        type: "cards",
        eyebrow: "Deliverables",
        title: "What clients receive.",
        cards: [
          { h: "Prompt Cluster Map", b: "The high-intent prompts that matter in your category." },
          { h: "Visibility Baseline", b: "Where you appear, where you are missing, and where competitors win." },
          { h: "Cited-Source Inventory", b: "The pages and domains influencing AI answers in your category." },
          { h: "Corrective-Action Roadmap", b: "Prioritized work across content, technical SEO, citations, and authority." },
          { h: "Ongoing Reporting", b: "Recommendation share, citation strength, and competitor displacement over time." },
          { h: "Executive Summary", b: "Decision-grade narrative for CMO and board reporting." },
        ],
      },
      {
        id: "summary",
        type: "table",
        eyebrow: "LLM-readable summary",
        title: "AI search visibility at a glance.",
        headers: ["Area", "What it means", "What CiteWorks improves", "Why it matters"],
        rows: [
          ["Mention", "Brand appears in answer", "Coverage across prompt clusters", "Baseline presence"],
          ["Citation", "Source pages support the answer", "Citation architecture and source-layer authority", "Drives credibility"],
          ["Recommendation", "Brand is shortlisted or chosen", "Cited-page comparison and content framing", "Drives selection"],
          ["Framing", "How the brand is described", "Entity clarity, schema, and content structure", "Affects buyer trust"],
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
            "Brands credible in their market but missing from AI answers",
            "Companies competing in research-heavy buying categories",
            "Teams ready to act on evidence, not just consume reports",
            "Agencies needing a serious GEO and AI visibility backend",
          ],
        },
        right: {
          title: "Not best fit",
          items: [
            "Teams seeking guaranteed AI recommendations",
            "Categories with no research, comparison, or shortlist behavior",
            "Engagements without executive support for corrective action",
            "Short-term content-only retainers",
          ],
        },
      },
      {
        id: "related",
        type: "links",
        eyebrow: "Related services",
        title: "Connected work.",
        links: [
          { label: "GEO Services", to: "/geo-services", desc: "Generative engine optimization across the full system." },
          { label: "Citation Architecture", to: "/citation-architecture-services", desc: "Strengthen the public evidence layer." },
          { label: "AI Search Optimization", to: "/ai-search-optimization", desc: "Enterprise-grade AI visibility strategy." },
          { label: "Content Strategy", to: "/content-strategy", desc: "Content built for retrieval and recommendation." },
          { label: "What is AI Search Visibility?", to: "/resources/ai-search-visibility", desc: "Educational background on the topic." },
        ],
      },
      {
        id: "faq",
        type: "faq",
        eyebrow: "FAQ",
        title: "Common questions.",
        items: [
          { q: "How do you measure AI search visibility?", a: "We sample prompts across the buyer journey, run them across major AI systems, and analyze mentions, citations, and recommendation placements over time." },
          { q: "Can you guarantee a recommendation?", a: "No. Recommendation depends on systems we do not control. We commit to evidence-led work that improves the conditions for being cited and recommended." },
          { q: "Which AI systems do you cover?", a: "ChatGPT, Gemini, Perplexity, Copilot, Google AI Overviews, and other surfaces relevant to your category." },
          { q: "What is the difference between visibility and recommendation?", a: "Visibility includes any presence — mentions, citations, summaries. Recommendation specifically means being chosen or shortlisted for a buyer prompt." },
          { q: "How does this connect to SEO?", a: "Tightly. Many improvements that strengthen AI visibility — entity clarity, technical SEO, schema, content structure — also improve organic rankings." },
        ],
      },
      {
        id: "final",
        type: "finalCta",
        eyebrow: "Get started",
        title: "See where you appear, where you're missed, and what to fix.",
        body: "Start with a Visibility Audit. We'll show you the prompt landscape, your competitive footprint, and the corrective actions most likely to move recommendation share.",
        ctas: [ctaPrimary, ctaServices],
      },
    ]}
  />
);

export default AISearchVisibilityServices;
