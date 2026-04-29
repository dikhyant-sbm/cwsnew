import { PageShell } from "@/components/landing/Shell";
import { Hero } from "@/components/landing/Hero";
import { WhatWeDo } from "@/components/landing/WhatWeDo";
import { Problem } from "@/components/landing/Problem";
import { ThreeLayers } from "@/components/landing/ClosedLoop";
import { Differentiation } from "@/components/landing/Differentiation";
import { CoreConcepts } from "@/components/landing/CoreConcepts";
import { CaseStudies as MethodologyPreview } from "@/components/landing/CaseStudies";
import { Features } from "@/components/landing/Features";
import { Outcomes } from "@/components/landing/Outcomes";
import { UseCases } from "@/components/landing/UseCases";
import { AuditCTA } from "@/components/landing/AuditCTA";
import { SeoVsCiteworks } from "@/components/landing/SeoVsCiteworks";
import { CasesPreview } from "@/components/landing/CasesPreview";
import { AgencyPreview } from "@/components/landing/AgencyPreview";
import { Models } from "@/components/landing/Models";
import { Blog } from "@/components/landing/Blog";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title =
      "CiteWorks Studio | GEO, AI Search Visibility & Citation Architecture Agency";
    const meta = document.querySelector('meta[name="description"]');
    const desc =
      "CiteWorks Studio helps growth-minded companies improve visibility across Google, AI answers, and trusted source environments through GEO, AI search audits, citation architecture, technical SEO, and corrective-action retainers.";
    if (meta) meta.setAttribute("content", desc);
  }, []);

  return (
    <PageShell>
      <Hero />
      <WhatWeDo />
      <Problem />
      <ThreeLayers />
      <Differentiation />
      <CoreConcepts />
      <MethodologyPreview />
      <Features />
      <Outcomes />
      <UseCases />
      <AuditCTA />
      <SeoVsCiteworks />
      <CasesPreview />
      <AgencyPreview />
      <Models />
      <Blog />
      <FAQ />
      <FinalCTA />
    </PageShell>
  );
};

export default Index;
