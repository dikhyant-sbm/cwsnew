import { useState, KeyboardEvent } from "react";

type Step = { n: string; title: string; desc: string; out: string };

interface MethodologyTimelineProps {
  steps: Step[];
}

/**
 * Executive-friendly horizontal stepper for the 8-step methodology.
 * - Compact rail at top scannable in seconds.
 * - Active step expands inline with focus + output.
 * - Keyboard accessible (←/→ to move, Enter/Space to select).
 */
export const MethodologyTimeline = ({ steps }: MethodologyTimelineProps) => {
  const [active, setActive] = useState(0);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, idx: number) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setActive((idx + 1) % steps.length);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setActive((idx - 1 + steps.length) % steps.length);
    }
  };

  const current = steps[active];

  return (
    <div className="card-premium p-6 sm:p-8">
      {/* Rail */}
      <div
        role="tablist"
        aria-label="Methodology steps"
        className="relative flex gap-2 overflow-x-auto pb-3 -mx-1 px-1 snap-x snap-mandatory scroll-smooth"
      >
        {steps.map((s, i) => {
          const isActive = i === active;
          return (
            <button
              key={s.n}
              role="tab"
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
              className={`group relative flex-shrink-0 snap-start text-left rounded-xl border px-4 py-3 min-w-[160px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                isActive
                  ? "border-primary/60 bg-primary/5 shadow-[0_8px_30px_-12px_hsl(var(--primary)/0.35)]"
                  : "border-border bg-card/30 hover:border-primary/30 hover:bg-card/50"
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`flex items-center justify-center w-7 h-7 rounded-full font-mono text-[12px] tracking-wider transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-body group-hover:text-foreground"
                  }`}
                >
                  {s.n}
                </span>
                {i < steps.length - 1 && (
                  <span aria-hidden className={`hidden sm:block h-px flex-1 ${isActive ? "bg-primary/40" : "bg-border"}`} />
                )}
              </div>
              <p className={`mt-2 text-xs font-medium leading-snug ${isActive ? "text-foreground" : "text-body"}`}>
                {s.title}
              </p>
            </button>
          );
        })}
      </div>

      {/* Detail panel */}
      <div
        role="tabpanel"
        aria-live="polite"
        key={current.n}
        className="mt-8 grid lg:grid-cols-12 gap-8 animate-fade-in"
      >
        <div className="lg:col-span-5">
          <p className="font-mono text-[12px] tracking-[0.16em] text-primary">STEP {current.n}</p>
          <h3 className="display text-2xl sm:text-3xl mt-3 leading-tight">{current.title}</h3>
        </div>
        <div className="lg:col-span-7 space-y-5">
          <p className="text-body leading-relaxed">{current.desc}</p>
          <div className="rounded-xl border border-border bg-card/40 p-5">
            <p className="font-mono text-[12px] uppercase tracking-widest text-body mb-2">Output</p>
            <p className="text-sm text-foreground/90">{current.out}</p>
          </div>
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => setActive((active - 1 + steps.length) % steps.length)}
              className="font-mono text-[12px] tracking-[0.2em] text-body hover:text-foreground transition-colors"
              aria-label="Previous step"
            >
              ← PREV
            </button>
            <span className="font-mono text-[12px] text-body" aria-hidden>
              {active + 1} / {steps.length}
            </span>
            <button
              onClick={() => setActive((active + 1) % steps.length)}
              className="font-mono text-[12px] tracking-[0.2em] text-primary hover:text-primary/80 transition-colors"
              aria-label="Next step"
            >
              NEXT →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
