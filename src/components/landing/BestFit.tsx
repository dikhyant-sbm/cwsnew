import { Check, Minus } from "lucide-react";

const bestFit = [
  "Growth-minded companies that want stronger visibility across Google, AI answers, and the source environments buyers use",
  "High-consideration brands in categories where buyers research heavily and look for trusted recommendations",
  "Category challengers competing for attention, trust, and recommendation strength against better-known competitors",
  "Established companies entering more competitive markets that need clearer authority and source support",
  "Agency partners that need GEO, AI search visibility, citation architecture, technical SEO, content, and reporting support behind the scenes",
];

const notBestFit = [
  "Companies looking for cheap SEO tasks",
  "Businesses that only want isolated blog posts",
  "Teams unwilling to improve their website, content, or source footprint",
  "Companies that want dashboards but not corrective action",
];

export const BestFit = () => (
  <section className="py-24 border-t border-border/40">
    <div className="mx-auto max-w-7xl px-6">
      <div className="reveal-on-scroll text-center max-w-3xl mx-auto">
        <p className="eyebrow">Who we help</p>
        <h2 className="display text-4xl sm:text-5xl mt-4">
          Built for growth-minded companies where visibility drives growth.
        </h2>
        <p className="mt-6 text-body leading-relaxed">
          CiteWorks Studio is not only for enterprise companies. We work with companies that are
          ready to invest in stronger visibility because search, trust, comparison, and
          recommendation placement matter to their growth.
        </p>
      </div>

      <div className="mt-14 grid lg:grid-cols-2 gap-5">
        <div className="card-premium p-8 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1">
            <Check className="size-3.5 text-primary" strokeWidth={2} />
            <span className="font-mono text-[13px] tracking-[0.16em] uppercase text-primary">
              Best fit
            </span>
          </div>
          <h3 className="display text-2xl mt-5">Companies and teams we serve well</h3>
          <ul className="mt-6 space-y-3">
            {bestFit.map((b) => (
              <li key={b} className="flex gap-3 text-sm text-body">
                <Check className="size-4 text-primary mt-0.5 shrink-0" strokeWidth={1.75} />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-premium p-8 reveal-on-scroll" style={{ transitionDelay: "80ms" }}>
          <div className="inline-flex items-center gap-2 rounded-full bg-foreground/5 border border-border px-3 py-1">
            <Minus className="size-3.5 text-muted-fg" strokeWidth={2} />
            <span className="font-mono text-[13px] tracking-[0.16em] uppercase text-muted-fg">
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
