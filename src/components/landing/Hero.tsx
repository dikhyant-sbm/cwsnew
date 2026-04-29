import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => (
  <section className="relative pt-40 pb-24 overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" />

    <div className="relative mx-auto max-w-5xl px-6 text-center">
      <p className="eyebrow">GEO · AI Search Visibility · Citation Architecture</p>
      <h1 className="display text-5xl sm:text-7xl md:text-[88px] text-foreground leading-[0.95] mt-6">
        Get found, cited, and recommended where modern buyers search.
      </h1>
      <p className="mt-8 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
        CiteWorks Studio helps growth-minded companies improve visibility across Google, AI answers, and the source environments that shape buyer decisions.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Button asChild className="rounded-full font-mono text-xs tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-12">
          <Link to="/request-audit">REQUEST A VISIBILITY AUDIT</Link>
        </Button>
        <Button asChild variant="outline" className="rounded-full font-mono text-xs tracking-widest border-foreground/20 hover:bg-foreground/5 px-7 h-12">
          <Link to="/methodology">SEE THE METHODOLOGY</Link>
        </Button>
      </div>
      <p className="mt-10 text-sm text-muted-foreground/70 max-w-xl mx-auto">
        Built for growth-minded companies where visibility, trust, and recommendation strength directly affect revenue.
      </p>
    </div>
  </section>
);
