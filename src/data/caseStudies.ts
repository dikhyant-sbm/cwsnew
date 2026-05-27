import jobBoardImg from "@/assets/job-board-ai-hero.jpg";
import aiWorkCollabImg from "@/assets/ai-work-collab-hero.jpg";
import featuredClient from "@/assets/featured-client.jpg";
import featuredMarket from "@/assets/featured-market.jpg";
import featuredCompany from "@/assets/featured-company.jpg";

export type Pillar = "client" | "market" | "company";

export type CaseEntry = {
  slug: string;
  title: string;
  excerpt: string;
  status: "Published" | "Coming soon";
  href: string | null;
  image: string;
  badge: string;
  meta: { k: string; v: string }[];
};

/* ---------- Client Implementation Case Studies ---------- */
export const clientCases: CaseEntry[] = [
  {
    slug: "job-board-ai-search",
    title: "How a Job Posting Platform Secured a Place in AI's Shortlist for Employers",
    excerpt:
      "A 5-month, 480-engagement campaign that lifted brand mentions in AI Overviews by 71%, influenced 100+ cited pages, and put 2,791 keywords into Google's top 10 — by rebuilding the brand's citation footprint where LLMs were already looking.",
    status: "Published",
    href: "/case-studies/job-board-ai-search",
    image: jobBoardImg,
    badge: "Client Result",
    meta: [
      { k: "Type", v: "Client Implementation Case Study" },
      { k: "Work", v: "AI visibility, citation architecture" },
      { k: "Status", v: "Published" },
    ],
  },
  {
    slug: "insurance-technology-ai-visibility",
    title: "How an Insurance Technology Brand Strengthened Its AI Visibility and Citation Footprint",
    excerpt:
      "Inside a multi-quarter engagement that rebuilt source authority across AI recommendation environments, lifted citation-bearing presence, and recovered competitive shortlist position in a high-trust category.",
    status: "Coming soon",
    href: null,
    image: featuredClient,
    badge: "Coming Soon",
    meta: [
      { k: "Type", v: "Client Implementation Case Study" },
      { k: "Work", v: "AI visibility, citation architecture, search visibility" },
      { k: "Status", v: "Publishing soon" },
    ],
  },
  {
    slug: "tax-relief-ai-overview-lift",
    title: "How a Tax Relief Brand Lifted AI Overview Mentions Across High-Intent Queries",
    excerpt:
      "A 6-month consumer finance engagement that raised AI Overview brand mentions by 112.5% across 19 high-intent tax queries while pushing 9,984 keywords into Google's top 10.",
    status: "Coming soon",
    href: null,
    image: featuredClient,
    badge: "Coming Soon",
    meta: [
      { k: "Type", v: "Client Implementation Case Study" },
      { k: "Work", v: "AI visibility, content remediation" },
      { k: "Status", v: "Publishing soon" },
    ],
  },
  {
    slug: "household-appliance-chatgpt-mentions",
    title: "How a Household Appliance Brand 4x'd ChatGPT Brand Mentions",
    excerpt:
      "A consumer-products engagement that grew ChatGPT brand mentions by 400% across 100+ high-intent queries and strengthened 100 high-impact community sources.",
    status: "Coming soon",
    href: null,
    image: featuredClient,
    badge: "Coming Soon",
    meta: [
      { k: "Type", v: "Client Implementation Case Study" },
      { k: "Work", v: "Community authority, citation architecture" },
      { k: "Status", v: "Publishing soon" },
    ],
  },
];

/* ---------- AI Industry Market Discovery Reports ---------- */
export const marketReports: CaseEntry[] = [
  {
    slug: "ai-work-collaboration-platforms",
    title: "How AI Search Is Recommending AI Work Collaboration Platforms",
    excerpt:
      "An industry-level look at how AI systems compare collaboration platforms, where recommendation strength drops across buyer stages, and which source, content, and citation gaps may be shaping shortlist visibility.",
    status: "Published",
    href: "/ai-industry-market-discovery-reports/ai-work-collaboration-platforms",
    image: aiWorkCollabImg,
    badge: "Industry Report",
    meta: [
      { k: "Type", v: "AI Industry Market Discovery Report" },
      { k: "Source", v: "LLM Authority Index" },
      { k: "Status", v: "Published" },
    ],
  },
  {
    slug: "tax-relief-companies-2026",
    title: "How AI Search Is Recommending Tax Relief Companies in 2026",
    excerpt:
      "A benchmark analysis of how AI systems surface, compare, and recommend tax relief companies across discovery, comparison, and decision-stage prompts — with remediation priorities for brands losing recommendation share.",
    status: "Coming soon",
    href: null,
    image: featuredMarket,
    badge: "Coming Soon",
    meta: [
      { k: "Type", v: "AI Industry Market Discovery Report" },
      { k: "Source", v: "LLM Authority Index" },
      { k: "Status", v: "Publishing soon" },
    ],
  },
  {
    slug: "crypto-wallet-ai-recommendations",
    title: "How AI Search Is Recommending Crypto Wallets",
    excerpt:
      "A category-level look at how LLMs frame trust, security, and feature parity across the crypto wallet market — and which citation patterns shape AI shortlists.",
    status: "Coming soon",
    href: null,
    image: featuredMarket,
    badge: "Coming Soon",
    meta: [
      { k: "Type", v: "AI Industry Market Discovery Report" },
      { k: "Source", v: "LLM Authority Index" },
      { k: "Status", v: "Publishing soon" },
    ],
  },
  {
    slug: "telehealth-ai-discovery",
    title: "How AI Search Is Recommending Telehealth Platforms",
    excerpt:
      "Benchmark intelligence on how AI systems compare telehealth providers across condition-specific, insurance, and pricing prompts — and the source gaps suppressing recommendation share.",
    status: "Coming soon",
    href: null,
    image: featuredMarket,
    badge: "Coming Soon",
    meta: [
      { k: "Type", v: "AI Industry Market Discovery Report" },
      { k: "Source", v: "LLM Authority Index" },
      { k: "Status", v: "Publishing soon" },
    ],
  },
];

/* ---------- AI Company Market Strategy Reports ---------- */
export const companyReports: CaseEntry[] = [
  {
    slug: "slack-ai-company-market-strategy",
    title: "Slack — AI Company Market Strategy Report",
    excerpt:
      "Slack shows strong broad discovery signals, but the pricing-stage cluster shows neutral visibility without positive recommendation capture. A company-level readout based on the LLM Authority Index benchmark sample.",
    status: "Coming soon",
    href: null,
    image: featuredCompany,
    badge: "Coming Soon",
    meta: [
      { k: "Type", v: "AI Company Market Strategy Report" },
      { k: "Scope", v: "3 of 10 high-intent clusters" },
      { k: "Status", v: "Publishing soon" },
    ],
  },
  {
    slug: "notion-ai-company-readout",
    title: "Notion — AI Company Market Strategy Report",
    excerpt:
      "Where Notion is positioned by AI systems across knowledge-base, project, and collaboration prompts — and where competitor framing is intercepting recommendation credit.",
    status: "Coming soon",
    href: null,
    image: featuredCompany,
    badge: "Coming Soon",
    meta: [
      { k: "Type", v: "AI Company Market Strategy Report" },
      { k: "Scope", v: "3 of 10 high-intent clusters" },
      { k: "Status", v: "Publishing soon" },
    ],
  },
  {
    slug: "asana-ai-company-readout",
    title: "Asana — AI Company Market Strategy Report",
    excerpt:
      "A company-level look at where Asana wins recommendation framing, where it is seen but not endorsed, and what CiteWorks would prioritize in a full engagement.",
    status: "Coming soon",
    href: null,
    image: featuredCompany,
    badge: "Coming Soon",
    meta: [
      { k: "Type", v: "AI Company Market Strategy Report" },
      { k: "Scope", v: "3 of 10 high-intent clusters" },
      { k: "Status", v: "Publishing soon" },
    ],
  },
  {
    slug: "clickup-ai-company-readout",
    title: "ClickUp — AI Company Market Strategy Report",
    excerpt:
      "A focused company readout on how AI systems frame ClickUp as an all-in-one platform, where pricing-stage prompts dilute recommendation capture, and what to fix first.",
    status: "Coming soon",
    href: null,
    image: featuredCompany,
    badge: "Coming Soon",
    meta: [
      { k: "Type", v: "AI Company Market Strategy Report" },
      { k: "Scope", v: "3 of 10 high-intent clusters" },
      { k: "Status", v: "Publishing soon" },
    ],
  },
];

export const directoryPaths = {
  client: "/client-implementation-case-studies",
  market: "/ai-industry-market-discovery-reports",
  company: "/ai-company-market-strategy-reports",
} as const;
