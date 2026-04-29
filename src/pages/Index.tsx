import { PageShell } from "@/components/landing/Shell";
import { Hero } from "@/components/landing/Hero";
import { ProductShot } from "@/components/landing/ProductShot";
import { TrustedBy } from "@/components/landing/TrustedBy";
import { WhatWeDo } from "@/components/landing/WhatWeDo";
import { Problem } from "@/components/landing/Problem";
import { VisibilityLayers } from "@/components/landing/VisibilityLayers";
import { VisibilityLoop } from "@/components/landing/VisibilityLoop";
import { CoverageStrip } from "@/components/landing/CoverageStrip";
import { Differentiation } from "@/components/landing/Differentiation";
import { CoreConcepts } from "@/components/landing/CoreConcepts";
import { Features } from "@/components/landing/Features";
import { Outcomes } from "@/components/landing/Outcomes";
import { UseCases } from "@/components/landing/UseCases";
import { AuditCTA } from "@/components/landing/AuditCTA";
import { SeoVsCiteworks } from "@/components/landing/SeoVsCiteworks";
import { CasesPreview } from "@/components/landing/CasesPreview";
import { AgencyPreview } from "@/components/landing/AgencyPreview";
import { Blog } from "@/components/landing/Blog";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { DashboardShowcase } from "@/components/landing/DashboardShowcase";
import { DashboardWalkthrough } from "@/components/landing/DashboardWalkthrough";
import { TrustPledges } from "@/components/landing/TrustPledges";
import { BestFit } from "@/components/landing/BestFit";
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
      <ProductShot />
      <CoverageStrip />
      <TrustedBy />
      <WhatWeDo />
      <Problem />
      <VisibilityLayers />
      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-6">
          <DashboardShowcase dashboard="competitor-matrix" size="lg" showCaption className="reveal-on-scroll" />
        </div>
      </section>
      <Differentiation />
      <CoreConcepts />
      <VisibilityLoop />
      <Features />
      <Outcomes />
      <DashboardWalkthrough />
      <UseCases />
      <AuditCTA />
      <SeoVsCiteworks />
      <TrustPledges />
      <CasesPreview />
      <AgencyPreview />
      <BestFit />
      <Blog />
      <FAQ />
      <FinalCTA />
    </PageShell>
  );
};

export default Index;
