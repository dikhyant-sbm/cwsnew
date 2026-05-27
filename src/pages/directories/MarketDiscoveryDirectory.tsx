import { DirectoryPage } from "@/components/case-studies/DirectoryPage";
import { marketReports } from "@/data/caseStudies";

const MarketDiscoveryDirectory = () => (
  <DirectoryPage
    eyebrow="AI Industry Market Discovery Reports"
    title="AI Industry Market"
    highlight="Discovery Reports."
    subtitle="Benchmark-led category analyses powered by LLM Authority Index — translated into the fixes that move recommendation share."
    description="Each report turns LLM Authority Index benchmark data into a decision document: what AI is recommending, why it matters for buyer discovery, what's likely causing the gap, and the remediation work that closes it."
    bullets={[
      "Benchmark summary across discovery, comparison, and decision prompts",
      "Likely causes of recommendation and visibility gaps",
      "What CiteWorks Studio would prioritize fixing",
      "Actionable plays enterprise teams can implement in-house",
    ]}
    entries={marketReports}
    documentTitle="AI Industry Market Discovery Reports | CiteWorks Studio"
    metaDescription="Benchmark-led category analyses powered by LLM Authority Index. Read how AI systems recommend, compare, and frame entire industries — and what to fix first."
  />
);

export default MarketDiscoveryDirectory;
