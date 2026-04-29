import { useState, useId } from "react";
import { Map, Gauge, Radar, Wrench, Rocket, LineChart } from "lucide-react";

const STEPS = [
  {
    key: "map",
    label: "Map",
    title: "Map the Market",
    body: "Identify the keywords, prompts, competitors, and source pages that shape buyer research.",
    Icon: Map,
  },
  {
    key: "benchmark",
    label: "Benchmark",
    title: "Benchmark Visibility",
    body: "Measure where you appear across Google, AI answers, citations, and competitor SERPs.",
    Icon: Gauge,
  },
  {
    key: "analyze",
    label: "Analyze",
    title: "Analyze Retrieval & Cosine Gaps",
    body: "Find where content, entities, and sources don't match what AI systems retrieve.",
    Icon: Radar,
  },
  {
    key: "build",
    label: "Build",
    title: "Build Citation Architecture",
    body: "Strengthen owned and third-party sources that support trust and authority.",
    Icon: Wrench,
  },
  {
    key: "execute",
    label: "Execute",
    title: "Execute Across the Environment",
    body: "Improve technical SEO, content, schema, and AI visibility — connected to one diagnosis.",
    Icon: Rocket,
  },
  {
    key: "measure",
    label: "Measure",
    title: "Measure & Iterate",
    body: "Track whether the company is becoming easier to find, cite, compare, and recommend.",
    Icon: LineChart,
  },
] as const;

export const VisibilityLoop = ({ compact = false }: { compact?: boolean }) => {
  const [active, setActive] = useState<string>(STEPS[0].key);
  const reactId = useId();
  const current = STEPS.find((s) => s.key === active) ?? STEPS[0];

  return (
    <section
      className={`relative ${compact ? "py-16" : "py-24"} border-t border-border/40`}
      aria-labelledby={`${reactId}-title`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto reveal-on-scroll">
          <p className="eyebrow">The visibility loop</p>
          <h2 id={`${reactId}-title`} className="display text-4xl sm:text-5xl mt-4">
            A connected, six-step visibility loop.
          </h2>
          <p className="mt-5 text-body leading-relaxed">
            Hover or tap any step to see what happens. Each step feeds the next — and the loop never stops.
          </p>
        </div>

        {/* Loop */}
        <div className="mt-14 grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Step grid */}
          <div className="lg:col-span-7">
            <ol
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
              role="tablist"
              aria-label="Visibility loop steps"
            >
              {STEPS.map((s, i) => {
                const isActive = s.key === active;
                const Icon = s.Icon;
                return (
                  <li key={s.key}>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`${reactId}-panel`}
                      onMouseEnter={() => setActive(s.key)}
                      onFocus={() => setActive(s.key)}
                      onClick={() => setActive(s.key)}
                      className={`group relative w-full text-left card-premium p-5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                        isActive ? "border-primary/60 -translate-y-0.5" : ""
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[12px] tracking-[0.16em] text-primary">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <Icon
                          className={`w-4 h-4 transition-colors ${
                            isActive ? "text-primary" : "text-body"
                          }`}
                          aria-hidden="true"
                        />
                      </div>
                      <p className="display text-base mt-3">{s.label}</p>
                      <p className="text-xs text-body mt-1.5 leading-relaxed line-clamp-2">
                        {s.title}
                      </p>
                    </button>
                  </li>
                );
              })}
            </ol>
            {/* Loop indicator */}
            <p className="mt-5 text-center font-mono text-[12px] tracking-[0.16em] text-body">
              ↻ A CONTINUOUS LOOP — DIAGNOSE, EXECUTE, MEASURE
            </p>
          </div>

          {/* Detail panel */}
          <div
            id={`${reactId}-panel`}
            role="tabpanel"
            aria-live="polite"
            className="lg:col-span-5 glass-strong rounded-2xl p-8 border-gradient relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-16 w-72 h-72 conic-ring opacity-40 pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <current.Icon className="w-4 h-4 text-primary" aria-hidden="true" />
                </div>
                <p className="font-mono text-[12px] tracking-[0.16em] text-primary">
                  STEP / {current.label.toUpperCase()}
                </p>
              </div>
              <h3 className="display text-2xl sm:text-3xl mt-5 leading-tight">
                {current.title}
              </h3>
              <p className="mt-4 text-body leading-relaxed">{current.body}</p>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-mono text-[12px] tracking-[0.16em] text-body">
                  WHY IT MATTERS
                </p>
                <p className="text-sm text-body mt-2 leading-relaxed">
                  Each step closes a measurable gap. Together they make your company easier to
                  find, cite, compare, and recommend.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
