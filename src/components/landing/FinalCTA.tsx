import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import cube from "@/assets/cite-cube.jpg";

export const FinalCTA = () => (
  <section className="relative py-32 overflow-hidden border-t border-border/40">
    <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/15 blur-[120px] rounded-full" />

    <div className="relative mx-auto max-w-4xl px-6 text-center">
      <img
        src={cube}
        alt="CiteWorks Studio mark"
        loading="lazy"
        width={1024}
        height={1024}
        className="w-40 h-40 mx-auto rounded-2xl object-cover"
      />
      <h2 className="display text-4xl sm:text-6xl mt-8">
        Become easier to find, cite, compare, and choose.
      </h2>
      <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
        Close the gap between what you publish and what Google, AI systems, trusted sources, and buyers actually recognize.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Button asChild className="rounded-full font-mono text-xs tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-12">
          <Link to="/request-audit">REQUEST A VISIBILITY AUDIT</Link>
        </Button>
        <Button asChild variant="outline" className="rounded-full font-mono text-xs tracking-widest border-foreground/20 hover:bg-foreground/5 px-7 h-12">
          <Link to="/methodology">SEE THE METHODOLOGY</Link>
        </Button>
      </div>
    </div>
  </section>
);
