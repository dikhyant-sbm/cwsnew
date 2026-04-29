import { DashboardShowcase } from "./DashboardShowcase";

export const ProductShot = () => (
  <section className="relative pb-32 pt-4 overflow-hidden" aria-label="CiteWorks Studio AI Visibility Overview dashboard">
    <div className="relative mx-auto px-6">
      <div className="reveal-on-scroll">
        <DashboardShowcase dashboard="ai-visibility" size="lg" priority className="float-y-slow" />
      </div>
      <p className="mt-8 text-center font-mono text-[12px] tracking-[0.16em] uppercase text-tertiary">
        AI Visibility Overview · CiteWorks Studio
      </p>
    </div>
  </section>
);
