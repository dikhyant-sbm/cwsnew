import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { DashboardShowcase } from "./DashboardShowcase";

export const FinalCTA = () => (
  <section className="relative py-32 overflow-hidden border-t border-border/40 ambient-glow">
    <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] conic-ring opacity-30 pointer-events-none float-y-slow" />

    <div className="relative mx-auto max-w-6xl px-6">
      <div className="text-center reveal-on-scroll">
        <p className="eyebrow">The corrective-action partner</p>
        <h2 className="display text-4xl sm:text-6xl mt-4">
          Become easier to find, cite, compare, and choose.
        </h2>
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
          Close the gap between what you publish and what Google, AI systems, trusted sources, and buyers actually recognize.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button asChild className="rounded-full font-mono text-xs tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 btn-glow px-7 h-12">
            <Link to="/request-audit">REQUEST A VISIBILITY AUDIT</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full font-mono text-xs tracking-widest border-foreground/20 hover:bg-foreground/5 px-7 h-12">
            <Link to="/methodology">SEE THE METHODOLOGY</Link>
          </Button>
        </div>
      </div>

      <div className="mt-16 reveal-on-scroll">
        <DashboardShowcase dashboard="corrective-action" size="lg" showCaption />
      </div>
    </div>
  </section>
);
