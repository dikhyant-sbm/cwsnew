import { useEffect, useRef, useState } from "react";
import { DASHBOARDS, type DashboardKey } from "./DashboardShowcase";

type Step = {
  key: DashboardKey;
  number: string;
  title: string;
  body: string;
};

/**
 * Default walkthrough steps — mapped to existing CiteWorks dashboards.
 * Replace `key`, `title`, and `body` per real screenshot in a follow-up prompt.
 */
const STEPS: Step[] = [
  {
    key: "ai-visibility",
    number: "01",
    title: "AI Visibility Overview",
    body: "Track Share of Voice and Recommendation Strength across ChatGPT, Gemini, Perplexity, Copilot, and Google AI Overviews — in one executive view.",
  },
  {
    key: "prompt-clusters",
    number: "02",
    title: "Prompt Cluster Tracking",
    body: "See visibility scored by buyer-intent cluster — present, cited, recommended, or absent — benchmarked against the category.",
  },
  {
    key: "citation-architecture",
    number: "03",
    title: "Citation Architecture",
    body: "Map owned, third-party, review, comparison, community, video, and industry sources with live citation gap status.",
  },
  {
    key: "competitor-matrix",
    number: "04",
    title: "Competitor Visibility Matrix",
    body: "Side-by-side scoring across Google, AI answers, Source-Layer Authority, citation strength, and recommendation presence.",
  },
  {
    key: "corrective-action",
    number: "05",
    title: "Corrective Action Roadmap",
    body: "A prioritized roadmap across Technical SEO, content, citation sources, and entity clarity — Planned → In Progress → Live → Measuring.",
  },
  {
    key: "executive-report",
    number: "06",
    title: "Executive Visibility Report",
    body: "Leadership-ready snapshot: visibility baseline, movement, top risks, recoverable opportunities, and recommended next actions.",
  },
  {
    key: "closed-loop",
    number: "07",
    title: "Closed-Loop Methodology",
    body: "Map · Benchmark · Analyze · Build · Execute · Measure — a continuous visibility system that compounds over time.",
  },
];

export const DashboardWalkthrough = () => {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const io = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to viewport center
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const idx = Number((visible[0].target as HTMLElement).dataset.idx);
          if (!Number.isNaN(idx)) setActive(idx);
        }
      },
      {
        // Activate when step crosses the middle band of viewport
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    stepRefs.current.forEach((el) => el && io.observe(el));
    if (reduce) setActive(0);
    return () => io.disconnect();
  }, []);

  const current = STEPS[active];

  return (
    <section
      className="relative py-24 sm:py-32 border-t border-border/40"
      aria-labelledby="walkthrough-title"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto reveal-on-scroll">
          <p className="eyebrow">Inside the platform</p>
          <h2
            id="walkthrough-title"
            className="display text-4xl sm:text-5xl mt-4"
          >
            One platform. Every layer of visibility.
          </h2>
          <p className="mt-5 text-body leading-relaxed">
            Scroll to see how each dashboard works together — from diagnosis to
            execution to measurement.
          </p>
        </div>

        {/* Scrollytelling grid */}
        <div className="mt-16 grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* LEFT — sticky changing image */}
          <div className="lg:col-span-7">
            <div className="lg:sticky lg:top-28">
              <figure className="relative">
                {/* Ambient glow */}
                <div className="absolute -inset-x-10 -inset-y-8 -z-10 rounded-[2rem] bg-[radial-gradient(60%_60%_at_50%_50%,hsl(var(--accent-blue)/0.18),transparent_70%)] blur-2xl" />
                <div className="device-frame lift">
                  <div className="device-screen relative aspect-[16/10] overflow-hidden">
                    {STEPS.map((s, i) => (
                      <img
                        key={s.key}
                        src={DASHBOARDS[s.key].src}
                        alt={`${DASHBOARDS[s.key].label} — ${DASHBOARDS[s.key].caption}`}
                        loading="lazy"
                        decoding="async"
                        className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ease-out ${
                          i === active ? "opacity-100" : "opacity-0"
                        }`}
                        aria-hidden={i !== active}
                      />
                    ))}
                  </div>
                </div>
                <figcaption className="mt-4 flex items-center justify-between font-mono text-[10px] tracking-[0.22em] uppercase text-tertiary">
                  <span>{DASHBOARDS[current.key].label}</span>
                  <span aria-live="polite">
                    {String(active + 1).padStart(2, "0")} / {String(STEPS.length).padStart(2, "0")}
                  </span>
                </figcaption>

                {/* Progress bar */}
                <div
                  className="mt-3 h-px w-full bg-border overflow-hidden rounded-full"
                  aria-hidden="true"
                >
                  <div
                    className="h-full bg-primary transition-all duration-500 ease-out"
                    style={{
                      width: `${((active + 1) / STEPS.length) * 100}%`,
                    }}
                  />
                </div>
              </figure>
            </div>
          </div>

          {/* RIGHT — scrolling step rail */}
          <ol className="lg:col-span-5 relative">
            {/* Vertical guide line */}
            <span
              className="absolute left-[15px] top-2 bottom-2 w-px bg-border hidden sm:block"
              aria-hidden="true"
            />
            {STEPS.map((s, i) => {
              const isActive = i === active;
              return (
                <li key={s.key}>
                  <div
                    ref={(el) => (stepRefs.current[i] = el)}
                    data-idx={i}
                    className="relative pl-12 py-10 sm:py-14 first:pt-0"
                  >
                    {/* Marker */}
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 top-10 sm:top-14 first:top-0 flex items-center justify-center w-8 h-8 rounded-full border transition-colors duration-300 ${
                        isActive
                          ? "bg-primary text-primary-foreground border-primary shadow-[0_0_0_4px_hsl(var(--primary)/0.12)]"
                          : "bg-card text-body border-border"
                      }`}
                    >
                      <span className="font-mono text-[10px] tracking-widest">
                        {s.number}
                      </span>
                    </span>

                    <p
                      className={`font-mono text-[10px] tracking-[0.22em] uppercase transition-colors ${
                        isActive ? "text-primary" : "text-body"
                      }`}
                    >
                      Step {s.number}
                    </p>
                    <h3
                      className={`display text-2xl sm:text-3xl mt-3 leading-tight transition-colors ${
                        isActive ? "text-foreground" : "text-subtle"
                      }`}
                    >
                      {s.title}
                    </h3>
                    <p
                      className={`mt-4 leading-relaxed transition-colors ${
                        isActive ? "text-body" : "text-body/80"
                      }`}
                    >
                      {s.body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};
