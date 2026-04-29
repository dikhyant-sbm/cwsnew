import { useState } from "react";
import { Check } from "lucide-react";

type Model = { n: string; title: string; desc: string };

interface PartnershipSelectorProps {
  models: Model[];
}

// Static enrichment per model — keeps original copy intact and adds executive-grade context.
const ENRICH: Record<string, { ownsClient: string; citeworksDoes: string; bestWhen: string[] }> = {
  "01": {
    ownsClient: "Your agency",
    citeworksDoes: "Operates fully behind your brand",
    bestWhen: [
      "You want to launch a GEO/AI search line under your brand",
      "Client expects single point of contact",
      "You need scalable, brand-aligned delivery",
    ],
  },
  "02": {
    ownsClient: "Your agency",
    citeworksDoes: "Specialist support on audits, GEO, citations",
    bestWhen: [
      "Your team handles delivery but needs depth",
      "You want strategic input on specific accounts",
      "You need credible AI search expertise on call",
    ],
  },
  "03": {
    ownsClient: "Shared",
    citeworksDoes: "Joins selected client conversations",
    bestWhen: [
      "Account is large or strategically important",
      "Client wants visible specialist presence",
      "Execution is split across both teams",
    ],
  },
};

export const PartnershipSelector = ({ models }: PartnershipSelectorProps) => {
  const [active, setActive] = useState(models[0]?.n ?? "01");
  const current = models.find((m) => m.n === active) ?? models[0];
  const enriched = ENRICH[current.n];

  return (
    <div className="grid lg:grid-cols-12 gap-6">
      {/* Selector rail */}
      <div role="tablist" aria-label="Partnership models" className="lg:col-span-4 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible">
        {models.map((m) => {
          const isActive = m.n === active;
          return (
            <button
              key={m.n}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(m.n)}
              className={`group text-left rounded-2xl border p-5 transition-all flex-shrink-0 lg:flex-shrink min-w-[240px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                isActive
                  ? "border-primary/60 bg-primary/5 shadow-[0_10px_30px_-12px_hsl(var(--primary)/0.35)]"
                  : "border-border bg-card/30 hover:border-primary/30"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span
                  className={`flex items-center justify-center w-8 h-8 rounded-full font-mono text-[13px] ${
                    isActive ? "bg-primary text-primary-foreground" : "bg-card border border-border text-body"
                  }`}
                >
                  {m.n}
                </span>
                <p className={`font-medium ${isActive ? "text-foreground" : "text-body"}`}>{m.title}</p>
              </div>
              <p className="text-xs text-body leading-relaxed line-clamp-2">{m.desc}</p>
            </button>
          );
        })}
      </div>

      {/* Detail panel */}
      <div
        role="tabpanel"
        key={current.n}
        className="lg:col-span-8 card-premium p-7 sm:p-9 animate-fade-in"
      >
        <p className="font-mono text-[13px] tracking-[0.16em] text-primary">MODEL {current.n}</p>
        <h3 className="display text-2xl sm:text-3xl mt-3 leading-tight">{current.title}</h3>
        <p className="mt-4 text-body leading-relaxed">{current.desc}</p>

        {enriched && (
          <>
            <div className="mt-7 grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-card/40 p-5">
                <p className="font-mono text-[13px] uppercase tracking-widest text-body mb-2">Owns the client</p>
                <p className="text-sm text-foreground">{enriched.ownsClient}</p>
              </div>
              <div className="rounded-xl border border-border bg-card/40 p-5">
                <p className="font-mono text-[13px] uppercase tracking-widest text-body mb-2">CiteWorks Studio role</p>
                <p className="text-sm text-foreground">{enriched.citeworksDoes}</p>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-border bg-card/40 p-5">
              <p className="font-mono text-[13px] uppercase tracking-widest text-body mb-3">Best when</p>
              <ul className="space-y-2">
                {enriched.bestWhen.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-body">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
