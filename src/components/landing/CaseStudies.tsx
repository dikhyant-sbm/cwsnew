import { ArrowRight } from "lucide-react";

const cases = [
  {
    logo: "https://higoodie.com/wp-content/uploads/2026/02/696a6e58c09608021ef29353_dermalogica20logo-200x29.webp",
    alt: "Dermalogica",
    text: "Leading skincare brand Dermalogica saw a 127% increase in AI conversions, as well as an overall 2.5x visibility improvement compared to competitive averages.",
  },
  {
    logo: "https://higoodie.com/wp-content/uploads/2026/02/6809ae5edd186bc8f85bf553_Logos.svg",
    alt: "NoGood",
    text: "NoGood saw a 335% increase in traffic from AI sources, secured \"top-of-answer\" spots, unlocked lead flow, and positioned themselves as an undisputed leader in their industry.",
  },
  {
    logo: "https://higoodie.com/wp-content/uploads/2026/02/697275ef4d9eb6feec89b089_rathbones20logo20final-200x21.webp",
    alt: "Rathbones",
    text: "UK wealth management firm Rathbones saw a 106% increase in total AI citations, including 113% growth in visibility for sustainable and ethical investing topics.",
  },
  {
    logo: "https://higoodie.com/wp-content/uploads/2026/02/6809a95ef4894fb9798081e7_Steelseries_logo.svg",
    alt: "SteelSeries",
    text: "Read about how gaming brand SteelSeries saw a 3.2x AI search conversion increase in just 6 months, becoming the most retrieved gaming brand across 3 major LLMs.",
  },
];

export const CaseStudies = () => (
  <section className="py-28 border-t border-border/40">
    <div className="mx-auto max-w-7xl px-6">
      <p className="eyebrow text-center">Case studies</p>
      <h2 className="display text-4xl sm:text-6xl text-center mt-4 max-w-3xl mx-auto">
        The Proof Is in the Performance
      </h2>
      <p className="text-center text-muted-foreground mt-6 max-w-2xl mx-auto">
        See how leading brands across Finance, Retail, SaaS, and beyond use Goodie to dominate AI search, scale their presence, and measure the growth that follows.
      </p>

      <div className="mt-16 grid sm:grid-cols-2 gap-6">
        {cases.map((c) => (
          <div key={c.alt} className="rounded-2xl border border-border/60 bg-card p-8 hover:border-primary/40 transition-colors">
            <img
              src={c.logo}
              alt={c.alt}
              loading="lazy"
              className="h-7"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="text-foreground/90 mt-6 leading-relaxed">{c.text}</p>
            <a href="#" className="mt-6 inline-flex items-center gap-1 font-mono text-xs tracking-widest text-primary hover:gap-2 transition-all">
              READ FULL CASE STUDY <ArrowRight className="size-3" />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);
