import { Check, Minus } from "lucide-react";

const bestFit = [
  "High-consideration brands and complex categories",
  "Companies where AI recommendations and source trust affect revenue",
  "Category challengers and growth-minded teams",
  "Established brands with declining or plateauing visibility",
  "Agency partners needing white-label GEO and audit capacity",
  "Executive teams that want diagnosis before execution",
];

const notBestFit = [
  "Companies looking for guaranteed rankings or AI placements",
  "Pure low-cost SEO with no interest in source-layer authority",
  "Teams that want execution without diagnosis",
  "Spammy link-building or volume-only content programs",
  "Categories where visibility, trust, and recommendation are not commercial drivers",
];

export const BestFit = () => (
  <section className="py-24 border-t border-border/40">
    <div className="mx-auto max-w-7xl px-6">
      <div className="reveal-on-scroll text-center max-w-3xl mx-auto">
        <p className="eyebrow">Qualification</p>
        <h2 className="display text-4xl sm:text-5xl mt-4">
          Is CiteWorks Studio the right partner for you?
        </h2>
        <p className="mt-6 text-body leading-relaxed">
          We work best with companies and agencies that treat search visibility as an evidence-led system — not a tactical checklist.
        </p>
      </div>

      <div className="mt-14 grid lg:grid-cols-2 gap-5">
        <div className="card-premium p-8 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1">
            <Check className="size-3.5 text-primary" strokeWidth={2} />
            <span className="font-mono text-[12px] tracking-[0.16em] uppercase text-primary">
              Best fit
            </span>
          </div>
          <h3 className="display text-2xl mt-5">Companies and teams we serve well</h3>
          <ul className="mt-6 space-y-3">
            {bestFit.map((b) => (
              <li key={b} className="flex gap-3 text-sm text-foreground/85">
                <Check className="size-4 text-primary mt-0.5 shrink-0" strokeWidth={1.75} />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-premium p-8 reveal-on-scroll" style={{ transitionDelay: "80ms" }}>
          <div className="inline-flex items-center gap-2 rounded-full bg-foreground/5 border border-border px-3 py-1">
            <Minus className="size-3.5 text-muted-fg" strokeWidth={2} />
            <span className="font-mono text-[12px] tracking-[0.16em] uppercase text-muted-fg">
              Not the right fit
            </span>
          </div>
          <h3 className="display text-2xl mt-5">When we'll politely decline</h3>
          <ul className="mt-6 space-y-3">
            {notBestFit.map((b) => (
              <li key={b} className="flex gap-3 text-sm text-body">
                <Minus className="size-4 text-tertiary mt-0.5 shrink-0" strokeWidth={1.75} />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
