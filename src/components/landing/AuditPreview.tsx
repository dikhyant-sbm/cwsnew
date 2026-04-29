import { FileBarChart, Users, MessagesSquare, Quote, Wrench, Radar, Map } from "lucide-react";

const SECTIONS = [
  {
    n: "01",
    Icon: FileBarChart,
    t: "Visibility Baseline",
    d: "Where your company appears today across Google, AI answers, cited sources, and high-intent search environments.",
  },
  {
    n: "02",
    Icon: Users,
    t: "Competitor Gap Review",
    d: "Where competitors are outranking, out-cited, or out-recommended against your brand.",
  },
  {
    n: "03",
    Icon: MessagesSquare,
    t: "Prompt Cluster Map",
    d: "The prompts, buyer questions, and keyword clusters shaping your category.",
  },
  {
    n: "04",
    Icon: Quote,
    t: "Citation Source Review",
    d: "The owned and third-party sources supporting (or limiting) your authority footprint.",
  },
  {
    n: "05",
    Icon: Wrench,
    t: "Technical & Entity Findings",
    d: "Crawlability, schema, content structure, and entity signals limiting machine understanding.",
  },
  {
    n: "06",
    Icon: Radar,
    t: "Retrieval & Cosine Gaps",
    d: "Where your content is semantically distant from sources and language AI systems retrieve.",
  },
  {
    n: "07",
    Icon: Map,
    t: "Corrective-Action Roadmap",
    d: "A prioritized plan: what to fix, refresh, create, clarify, cite, or support next — sequenced by impact.",
  },
];

export const AuditPreview = () => (
  <section className="py-20 border-t border-border/40" aria-label="What's inside a Visibility Audit">
    <div className="mx-auto max-w-7xl px-6">
      <div className="text-center max-w-3xl mx-auto reveal-on-scroll">
        <p className="eyebrow">What's inside the audit</p>
        <h2 className="display text-4xl sm:text-5xl mt-4">
          A premium, executive-ready Visibility Audit.
        </h2>
        <p className="mt-5 text-body leading-relaxed">
          Every audit follows the same structured format — calibrated to your category, competitors,
          and search environment.
        </p>
      </div>

      {/* Mock report frame */}
      <div className="mt-14 reveal-on-scroll">
        <div className="device-frame max-w-6xl mx-auto">
          <div className="device-screen bg-background p-6 sm:p-10">
            {/* Mock report header */}
            <div className="flex items-center justify-between flex-wrap gap-3 pb-6 border-b border-border">
              <div>
                <p className="font-mono text-[12px] tracking-[0.16em] text-primary">
                  CITEWORKS STUDIO / VISIBILITY AUDIT
                </p>
                <p className="display text-xl sm:text-2xl mt-2">
                  Executive Findings & Corrective-Action Roadmap
                </p>
              </div>
              <div className="text-right">
                <p className="font-mono text-[12px] tracking-[0.16em] text-body">
                  PREPARED FOR
                </p>
                <p className="text-sm text-foreground/85 mt-1">[Client Company]</p>
              </div>
            </div>

            {/* Sections grid */}
            <ol className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SECTIONS.map((s) => {
                const Icon = s.Icon;
                return (
                  <li
                    key={s.n}
                    className="card-premium p-5 hover:border-primary/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-[12px] tracking-[0.16em] text-primary">
                        SECTION / {s.n}
                      </p>
                      <Icon className="w-4 h-4 text-body" aria-hidden="true" />
                    </div>
                    <p className="display text-base mt-3">{s.t}</p>
                    <p className="text-xs text-body mt-2 leading-relaxed">{s.d}</p>
                  </li>
                );
              })}
            </ol>

            {/* Mock footer */}
            <div className="mt-8 pt-6 border-t border-border flex items-center justify-between flex-wrap gap-3">
              <p className="font-mono text-[12px] tracking-[0.16em] text-body">
                DELIVERY · 2–4 WEEKS · WHITE-LABEL AVAILABLE
              </p>
              <p className="font-mono text-[12px] tracking-[0.16em] text-body">
                CONFIDENTIAL · CLIENT USE ONLY
              </p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-body">
          Illustrative preview. Actual audit content is tailored to your category and competitive set.
        </p>
      </div>
    </div>
  </section>
);
