import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";

export const Hero = () => (
  <section className="relative pt-40 pb-32 overflow-hidden ambient-glow">
    {/* Layered backdrops */}
    <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
    <div className="absolute inset-0 grid-bg-fine opacity-[0.18] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
    <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] conic-ring opacity-60 pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />

    <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
      {/* Eyebrow chip */}
      <div className="reveal inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-8">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 pulse-ring" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
        </span>
        <span className="font-mono text-[10px] tracking-[0.22em] text-body uppercase">
          GEO · AI Search · Citation Architecture
        </span>
      </div>

      <h1 className="reveal reveal-delay-1 display text-5xl sm:text-7xl md:text-[92px] leading-[0.95]">
        Get found, cited, and recommended{" "}
        <span className="text-gradient">where modern buyers search.</span>
      </h1>

      <p className="reveal reveal-delay-2 mt-8 mx-auto max-w-2xl text-base sm:text-lg text-body leading-relaxed">
        CiteWorks Studio is the corrective-action partner for modern search visibility — across
        Google, AI answers, and the trusted source environments that shape buyer decisions.
      </p>

      <div className="reveal reveal-delay-3 mt-10 flex flex-wrap justify-center gap-3">
        <Button asChild className="group rounded-full font-mono text-xs tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-12 shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.5)]">
          <Link to="/request-audit">
            REQUEST A VISIBILITY AUDIT
            <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Button>
        <Button asChild variant="outline" className="rounded-full font-mono text-xs tracking-widest border-foreground/30 hover:bg-foreground/5 hover:border-foreground/25 px-7 h-12 backdrop-blur">
          <Link to="/methodology">SEE THE METHODOLOGY</Link>
        </Button>
      </div>

      <p className="reveal reveal-delay-4 mt-10 text-sm text-tertiary max-w-xl mx-auto font-mono">
        Built for companies where visibility, trust, and recommendation strength directly affect revenue.
      </p>

      {/* Glass surfaces hint at product depth */}
      <div className="reveal reveal-delay-4 mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
        {[
          { k: "AI Overview lift", v: "112.5%" },
          { k: "ChatGPT mentions", v: "400%" },
          { k: "Top-10 keywords", v: "13,679" },
          { k: "Cited sources", v: "500+" },
        ].map((s, i) => (
          <div key={i} className="glass rounded-xl p-4 text-left border-gradient">
            <p className="font-mono text-[10px] tracking-widest text-subtle mb-2">{s.k.toUpperCase()}</p>
            <p className="display text-2xl text-gradient">{s.v}</p>
          </div>
        ))}
      </div>

      {/* Scroll cue */}
      <div className="mt-16 flex items-center justify-center gap-2 font-mono text-[10px] tracking-[0.3em] text-foreground/35">
        <Sparkles className="w-3 h-3" />
        SCROLL TO EXPLORE
      </div>
    </div>
  </section>
);
