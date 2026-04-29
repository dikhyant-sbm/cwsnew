import { DashboardShowcase } from "./DashboardShowcase";

export const ProductShot = () => (
  <section className="relative pb-32 pt-4 overflow-hidden">
    <div className="relative mx-auto px-6">
      <div className="reveal-on-scroll">
        <DashboardShowcase dashboard="ai-visibility" size="lg" className="float-y-slow" />
      </div>
      <p className="mt-8 text-center font-mono text-[10px] tracking-[0.22em] uppercase text-foreground/45">
        AI Visibility Overview · CiteWorks Studio
      </p>
    </div>
  </section>
);
