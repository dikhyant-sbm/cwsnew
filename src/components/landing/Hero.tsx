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
        <span className="font-mono text-[12px] tracking-[0.16em] text-body uppercase">
          GEO · AI Search · Citation Architecture
        </span>
      </div>

      <h1 className="reveal reveal-delay-1 display max-w-5xl mx-auto text-[clamp(2.625rem,7vw,5.75rem)] leading-[0.98]">
        Get found, cited, and recommended{" "}
        <span className="text-gradient">where modern buyers search.</span>
      </h1>

      <p className="reveal reveal-delay-2 hero-lead mt-8 mx-auto text-center">
        CiteWorks Studio is the corrective-action partner for modern search visibility — across
        Google, AI answers, and the trusted source environments that shape buyer decisions.
      </p>

      <div className="reveal reveal-delay-3 mt-12 flex flex-wrap justify-center gap-3">
        <Button asChild className="group rounded-full font-sans text-[15px] font-bold tracking-[0.02em] bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-14 shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.5)]">
          <Link to="/request-audit">
            Request a visibility audit
            <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Button>
        <Button asChild variant="outline" className="rounded-full font-sans text-[15px] font-bold tracking-[0.02em] border-foreground/35 hover:border-foreground/50 px-7 h-14 backdrop-blur">
          <Link to="/methodology">See the methodology</Link>
        </Button>
      </div>

      <p className="reveal reveal-delay-4 meta mt-10 mx-auto max-w-xl">
        Built for companies where visibility, trust, and recommendation strength directly affect revenue.
      </p>

      <div className="reveal reveal-delay-4 mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {[
          { k: "AI Overview lift", v: "112.5%" },
          { k: "ChatGPT mentions", v: "400%" },
          { k: "Top-10 keywords", v: "13,679" },
          { k: "Cited sources", v: "500+" },
        ].map((s, i) => (
          <div key={i} className="glass rounded-xl p-5 text-left border-gradient">
            <p className="font-mono text-[13px] tracking-[0.14em] uppercase text-subtle mb-2 font-semibold">{s.k}</p>
            <p className="display text-3xl text-gradient">{s.v}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex items-center justify-center gap-2 font-mono text-[13px] tracking-[0.18em] text-tertiary">
        <Sparkles className="w-3.5 h-3.5" />
        SCROLL TO EXPLORE
      </div>
    </div>
  </section>
);
