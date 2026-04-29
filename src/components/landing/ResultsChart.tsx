type Result = {
  cat: string;
  ai: string;
  search: string;
  source: string;
};

interface ResultsChartProps {
  results: Result[];
}

// Extract a comparable numeric value from each result string for visualization.
const parseAi = (s: string) => {
  const m = s.match(/(\d+(?:\.\d+)?)\s*%/);
  return m ? parseFloat(m[1]) : null;
};
const parseSearch = (s: string) => {
  const m = s.match(/([\d,]+)\s*keywords?/i) || s.match(/([\d,]+)\s*high[- ]value/i);
  return m ? parseInt(m[1].replace(/,/g, ""), 10) : null;
};
const parseSource = (s: string) => {
  const m = s.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : null;
};

export const ResultsChart = ({ results }: ResultsChartProps) => {
  const aiValues = results.map((r) => parseAi(r.ai));
  const searchValues = results.map((r) => parseSearch(r.search));
  const sourceValues = results.map((r) => parseSource(r.source));

  const aiMax = Math.max(...aiValues.filter((v): v is number => v !== null), 1);
  const searchMax = Math.max(...searchValues.filter((v): v is number => v !== null), 1);
  const sourceMax = Math.max(...sourceValues.filter((v): v is number => v !== null), 1);

  const groups: { label: string; key: "ai" | "search" | "source"; unit: string; values: (number | null)[]; max: number; format: (v: number) => string }[] = [
    {
      label: "AI Visibility Movement",
      key: "ai",
      unit: "% lift",
      values: aiValues,
      max: aiMax,
      format: (v) => `${v}%`,
    },
    {
      label: "Search Visibility Movement",
      key: "search",
      unit: "keywords in top 10",
      values: searchValues,
      max: searchMax,
      format: (v) => v.toLocaleString(),
    },
    {
      label: "Source-Layer Movement",
      key: "source",
      unit: "sources strengthened",
      values: sourceValues,
      max: sourceMax,
      format: (v) => `${v}+`,
    },
  ];

  return (
    <div className="card-premium p-6 sm:p-8">
      <div className="flex items-baseline justify-between mb-8 flex-wrap gap-3">
        <div>
          <p className="font-mono text-[10px] tracking-[0.22em] text-primary mb-2">VISUAL COMPARISON</p>
          <h3 className="display text-xl sm:text-2xl">Movement across four featured verticals.</h3>
        </div>
        <p className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground">
          Indicative scale per metric, normalized within each row.
        </p>
      </div>

      {/* Vertical legend of categories */}
      <div className="flex flex-wrap gap-2 mb-6">
        {results.map((r, i) => (
          <span
            key={r.cat}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border text-xs text-foreground/85"
          >
            <span
              aria-hidden
              className="w-2 h-2 rounded-full"
              style={{ background: `hsl(var(--primary) / ${0.4 + i * 0.18})` }}
            />
            {r.cat}
          </span>
        ))}
      </div>

      <div className="space-y-8">
        {groups.map((g) => (
          <div key={g.key}>
            <div className="flex items-baseline justify-between mb-3">
              <p className="text-sm font-medium text-foreground">{g.label}</p>
              <p className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">{g.unit}</p>
            </div>
            <div className="space-y-2">
              {results.map((r, i) => {
                const v = g.values[i];
                const pct = v === null ? 0 : Math.max(6, (v / g.max) * 100);
                return (
                  <div key={r.cat} className="grid grid-cols-12 items-center gap-3">
                    <p className="col-span-3 sm:col-span-2 text-xs text-foreground/75 truncate">{r.cat}</p>
                    <div className="col-span-7 sm:col-span-8 h-7 rounded-md bg-card/60 border border-border overflow-hidden relative">
                      {v !== null ? (
                        <div
                          className="h-full rounded-md transition-all duration-700 ease-out"
                          style={{
                            width: `${pct}%`,
                            background: `linear-gradient(90deg, hsl(var(--primary) / ${0.35 + i * 0.15}), hsl(var(--primary) / ${0.6 + i * 0.1}))`,
                          }}
                          aria-label={`${r.cat}: ${g.format(v)}`}
                        />
                      ) : (
                        <div className="h-full flex items-center px-3 text-[10px] font-mono text-muted-foreground">
                          n/a
                        </div>
                      )}
                    </div>
                    <p className="col-span-2 text-right text-xs font-mono text-foreground/85">
                      {v !== null ? g.format(v) : "—"}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Detail rows below visualization */}
      <div className="mt-10 pt-6 border-t border-border grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {results.map((r) => (
          <div key={r.cat} className="rounded-xl border border-border bg-card/30 p-4">
            <p className="font-mono text-[10px] tracking-[0.2em] text-primary mb-2">{r.cat.toUpperCase()}</p>
            <p className="text-xs text-foreground/85 leading-relaxed mb-2">{r.ai}</p>
            <p className="text-xs text-foreground/65 leading-relaxed mb-2">{r.search}</p>
            <p className="text-xs text-foreground/65 leading-relaxed">{r.source}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
