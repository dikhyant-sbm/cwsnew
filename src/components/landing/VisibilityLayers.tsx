import { Search, Sparkles, Network } from "lucide-react";

const LAYERS = [
  {
    n: "01",
    label: "Search Visibility",
    sub: "How your website performs in Google, organic rankings, indexed pages, technical SEO, schema, and high-intent search results.",
    Icon: Search,
    items: ["Rankings", "Indexation", "Schema", "Technical SEO"],
    glowClass: "from-[hsl(var(--accent-blue)/0.35)]",
  },
  {
    n: "02",
    label: "AI Visibility",
    sub: "How your company appears in AI-generated answers, AI Overviews, LLM recommendations, prompt responses, citations, and comparison-style outputs.",
    Icon: Sparkles,
    items: ["AI Overviews", "ChatGPT", "Gemini", "Perplexity"],
    glowClass: "from-[hsl(var(--accent-violet)/0.35)]",
  },
  {
    n: "03",
    label: "Source Visibility",
    sub: "How your company is represented across articles, directories, review platforms, Reddit, YouTube, social, industry sites, comparison pages, and trusted third-party mentions.",
    Icon: Network,
    items: ["Reviews", "Reddit", "YouTube", "Comparisons"],
    glowClass: "from-[hsl(var(--accent-cyan)/0.35)]",
  },
];

/**
 * VisibilityLayers — three connected layers (Search / AI / Source).
 * Reused on Home + Methodology. Memorable, calm, layered visual.
 */
export const VisibilityLayers = ({
  variant = "full",
}: {
  variant?: "full" | "compact";
}) => {
  return (
    <section
      className={`relative ${variant === "compact" ? "py-16" : "py-24"} border-t border-border/40`}
      aria-label="Three visibility layers"
    >
      <div className="mx-auto max-w-7xl px-6">
        {variant === "full" && (
          <div className="text-center max-w-3xl mx-auto reveal-on-scroll">
            <p className="eyebrow">Three layers of modern visibility</p>
            <h2 className="display text-4xl sm:text-5xl mt-4">
              Search. AI. Sources.
            </h2>
            <p className="mt-5 text-body leading-relaxed">
              Modern search visibility is no longer one channel. It is an ecosystem.
              CiteWorks Studio helps you improve all three layers that decide whether your company
              is found, cited, and recommended.
            </p>
          </div>
        )}

        {/* Stacked layered visual */}
        <div className="mt-14 relative max-w-5xl mx-auto reveal-on-scroll">
          <div className="space-y-5">
            {LAYERS.map((l, i) => {
              const Icon = l.Icon;
              return (
                <div
                  key={l.n}
                  className="group relative card-premium p-6 sm:p-7 overflow-hidden transition-transform"
                  style={{
                    transform: `translateX(${i * 14}px)`,
                  }}
                >
                  <div
                    className={`absolute -top-32 -right-20 w-72 h-72 rounded-full bg-gradient-radial ${l.glowClass} to-transparent opacity-60 blur-3xl pointer-events-none`}
                    aria-hidden="true"
                  />
                  <div className="relative grid sm:grid-cols-12 gap-5 items-center">
                    <div className="sm:col-span-5 flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-mono text-[13px] tracking-[0.16em] text-primary">
                          LAYER / {l.n}
                        </p>
                        <h3 className="display text-xl sm:text-2xl mt-1">{l.label}</h3>
                      </div>
                    </div>
                    <p className="sm:col-span-4 text-sm text-body leading-relaxed">
                      {l.sub}
                    </p>
                    <ul className="sm:col-span-3 flex flex-wrap gap-1.5 sm:justify-end">
                      {l.items.map((it) => (
                        <li
                          key={it}
                          className="text-[13px] font-mono tracking-wide px-2.5 py-1 rounded-full bg-card border border-border text-body"
                        >
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Connector hint */}
          <p className="mt-6 text-center font-mono text-[13px] tracking-[0.16em] text-body">
            MODERN SEARCH VISIBILITY IS AN ECOSYSTEM — A WEAKNESS IN ONE LAYER LIMITS THE OTHERS
          </p>
        </div>
      </div>
    </section>
  );
};
