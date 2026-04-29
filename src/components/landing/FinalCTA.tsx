import { Button } from "@/components/ui/button";

export const FinalCTA = () => (
  <section className="relative py-32 overflow-hidden border-t border-border/40">
    <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/15 blur-[120px] rounded-full" />

    <div className="relative mx-auto max-w-4xl px-6 text-center">
      <img
        src="https://higoodie.com/wp-content/uploads/2026/02/goodie-signet-3000px-scaled-unsmushed.webp"
        alt="Goodie 3D logo"
        loading="lazy"
        className="w-40 h-40 mx-auto"
      />
      <h2 className="display text-4xl sm:text-6xl mt-8">
        Gain Your Edge in AI Discoverability
      </h2>
      <div className="mt-10 flex justify-center">
        <Button className="rounded-full font-mono text-xs tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12">
          GET A DEMO
        </Button>
      </div>
    </div>
  </section>
);
