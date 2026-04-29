import { PageShell } from "@/components/landing/Shell";
import { Hero } from "@/components/landing/Hero";
import { ProductShot } from "@/components/landing/ProductShot";
import { Models } from "@/components/landing/Models";
import { ThreeLayers } from "@/components/landing/ClosedLoop";
import { Features } from "@/components/landing/Features";
import { CaseStudies } from "@/components/landing/CaseStudies";
import { BuiltFor } from "@/components/landing/BuiltFor";
import { UseCases } from "@/components/landing/UseCases";
import { Blog } from "@/components/landing/Blog";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";

const Index = () => (
  <PageShell>
    <Hero />
    <ProductShot />
    <Models />
    <ThreeLayers />
    <Features />
    <CaseStudies />
    <BuiltFor />
    <UseCases />
    <Blog />
    <FAQ />
    <FinalCTA />
  </PageShell>
);

export default Index;
