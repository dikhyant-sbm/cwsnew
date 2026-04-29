import { useState, useMemo } from "react";
import { Check } from "lucide-react";

type Service = {
  n: string;
  title: string;
  def: string;
  body: string;
  includes: string[];
  outcome: string;
};

const CATEGORIES = ["All", "Diagnose", "Optimize", "Build Authority", "Execute"] as const;
type Category = typeof CATEGORIES[number];

// Map each service number to a category — preserves original copy untouched.
const CATEGORY_MAP: Record<string, Exclude<Category, "All">> = {
  "01": "Diagnose",        // SEO Auditing
  "02": "Diagnose",        // AI Search Auditing
  "03": "Optimize",        // Embedding-Level GEO
  "04": "Optimize",        // Technical SEO
  "05": "Optimize",        // Entity Clarity
  "06": "Build Authority", // Citation Architecture
  "07": "Diagnose",        // AI Market Intelligence
  "08": "Build Authority", // Content Strategy
  "09": "Build Authority", // Social, Video, Discussion
  "10": "Execute",         // Ongoing Retainers
  "11": "Execute",         // White-Label
};

interface ServicesMatrixProps {
  services: Service[];
}

export const ServicesMatrix = ({ services }: ServicesMatrixProps) => {
  const [active, setActive] = useState<Category>("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (active === "All") return services;
    return services.filter((s) => CATEGORY_MAP[s.n] === active);
  }, [active, services]);

  return (
    <div>
      {/* Category filter */}
      <div role="tablist" aria-label="Service categories" className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((c) => {
          const isActive = active === c;
          const count = c === "All" ? services.length : services.filter((s) => CATEGORY_MAP[s.n] === c).length;
          return (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                isActive
                  ? "bg-primary text-primary-foreground border-transparent"
                  : "border-border text-body hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {c.toUpperCase()} <span className={`ml-1.5 ${isActive ? "opacity-80" : "opacity-50"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <p className="font-mono text-[12px] tracking-[0.16em] text-body mb-5" aria-live="polite">
        SHOWING {filtered.length} OF {services.length}
      </p>

      {/* Grid of service tiles */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((s) => {
          const isOpen = openId === s.n;
          return (
            <article
              key={s.n}
              className={`group rounded-2xl border bg-background p-6 transition-all flex flex-col animate-fade-in ${
                isOpen ? "border-primary/60 sm:col-span-2 lg:col-span-3 shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.3)]" : "border-border hover:border-primary/40"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-[12px] tracking-[0.2em] text-primary">{CATEGORY_MAP[s.n].toUpperCase()}</span>
                    <span className="font-mono text-[12px] text-body">/ {s.n}</span>
                  </div>
                  <h3 className="text-lg font-semibold leading-snug">{s.title}</h3>
                </div>
              </div>

              {!isOpen && (
                <p className="text-sm text-body mt-4 leading-relaxed line-clamp-3 flex-1">{s.def}</p>
              )}

              {isOpen && (
                <div className="mt-5 grid lg:grid-cols-12 gap-6 animate-fade-in">
                  <div className="lg:col-span-7 space-y-4">
                    <p className="text-foreground/90">{s.def}</p>
                    <p className="text-sm text-body">{s.body}</p>
                    <div className="rounded-xl border border-border bg-card/40 p-4">
                      <p className="font-mono text-[12px] uppercase tracking-widest text-body mb-2">Outcome</p>
                      <p className="text-sm text-foreground/90">{s.outcome}</p>
                    </div>
                  </div>
                  <div className="lg:col-span-5">
                    <p className="font-mono text-[12px] uppercase tracking-widest text-body mb-3">Includes</p>
                    <ul className="space-y-2">
                      {s.includes.map((it) => (
                        <li key={it} className="flex gap-2 text-sm text-body">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              <button
                onClick={() => setOpenId(isOpen ? null : s.n)}
                aria-expanded={isOpen}
                aria-controls={`service-${s.n}`}
                className="mt-5 inline-flex items-center gap-1 font-mono text-[13px] font-semibold tracking-[0.14em] text-primary hover:gap-2 transition-all w-fit"
              >
                {isOpen ? "COLLAPSE −" : "EXPAND DETAIL +"}
              </button>
            </article>
          );
        })}
      </div>
    </div>
  );
};
