import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { TrustedBy } from "@/components/landing/TrustedBy";
import { ProductShot } from "@/components/landing/ProductShot";
import { Models } from "@/components/landing/Models";
import { ClosedLoop } from "@/components/landing/ClosedLoop";
import { Features } from "@/components/landing/Features";
import { CaseStudies } from "@/components/landing/CaseStudies";
import { BuiltFor } from "@/components/landing/BuiltFor";
import { UseCases } from "@/components/landing/UseCases";
import { Blog } from "@/components/landing/Blog";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Nav />
    <main id="main">
      <Hero />
      <TrustedBy />
      <ProductShot />
      <Models />
      <ClosedLoop />
      <Features />
      <CaseStudies />
      <BuiltFor />
      <UseCases />
      <Blog />
      <FAQ />
      <FinalCTA />
    </main>
    <Footer />
  </div>
);

export default Index;
