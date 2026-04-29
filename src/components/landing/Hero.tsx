import { Button } from "@/components/ui/button";

export const Hero = () => (
  <section className="relative pt-40 pb-24 overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" />

    <div className="relative mx-auto max-w-5xl px-6 text-center">
      <h1 className="display text-5xl sm:text-7xl md:text-8xl text-foreground leading-[0.95]">
        Unlock AI Search Growth
      </h1>
      <p className="mt-8 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
        The pioneering end-to-end answer engine optimize platform to monitor,
        analyze, optimize your brand and product presence across LLMs and AI search platforms.
      </p>
      <div className="mt-10 flex justify-center">
        <Button className="rounded-full font-mono text-xs tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12">
          GET A DEMO
        </Button>
      </div>
    </div>
  </section>
);
