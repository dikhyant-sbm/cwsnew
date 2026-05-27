import { DirectoryPage } from "@/components/case-studies/DirectoryPage";
import { companyReports } from "@/data/caseStudies";

const CompanyStrategyDirectory = () => (
  <DirectoryPage
    eyebrow="AI Company Market Strategy Reports"
    title="AI Company Market"
    highlight="Strategy Reports."
    subtitle="Company-level readouts built from the same LLM Authority Index benchmark data used in our industry reports."
    description="Each report applies a recommendation-quality lens to a limited public scope — three of ten high-intent prompt clusters — with broader sampling, deeper citation tracing, and full platform analysis reserved for paid engagements."
    bullets={[
      "Where the brand is visible and where it is positively recommended",
      "Where it is seen but not endorsed",
      "Where competitors intercept comparison and pricing prompts",
      "What CiteWorks would prioritize in a full engagement",
    ]}
    entries={companyReports}
    documentTitle="AI Company Market Strategy Reports | CiteWorks Studio"
    metaDescription="Company-level readouts on AI recommendation positioning, built on LLM Authority Index benchmark data — including Slack, Notion, Asana, ClickUp, and more."
  />
);

export default CompanyStrategyDirectory;
