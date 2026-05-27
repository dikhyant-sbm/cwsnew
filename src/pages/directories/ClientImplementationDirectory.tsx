import { DirectoryPage } from "@/components/case-studies/DirectoryPage";
import { clientCases } from "@/data/caseStudies";

const ClientImplementationDirectory = () => (
  <DirectoryPage
    eyebrow="Client Implementation Case Studies"
    title="Client Implementation"
    highlight="Case Studies."
    subtitle="Documented CiteWorks Studio engagements — the work delivered, the visibility problem solved, and the metrics that moved."
    description="Where AI Industry Market Discovery Reports show how a market is behaving, client implementation case studies show how CiteWorks Studio helps brands respond — backed by client, campaign, search, AI visibility, and citation evidence."
    bullets={[
      "What changed in the market and what the brand needed",
      "What CiteWorks Studio built, fixed, or strengthened",
      "Which AI visibility and search metrics moved",
      "The commercial takeaway and what came next",
    ]}
    entries={clientCases}
    documentTitle="Client Implementation Case Studies | CiteWorks Studio"
    metaDescription="Documented CiteWorks Studio client engagements with measurable outcomes across AI recommendation share, citation footprint, source authority, and search visibility."
  />
);

export default ClientImplementationDirectory;
