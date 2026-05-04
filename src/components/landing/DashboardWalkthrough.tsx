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
    title: "Model × Topic Matrix",
    body: "Spot visibility gaps by AI model and topic — see exactly where coverage is strong, mixed, or missing across AI Overviews, ChatGPT, Perplexity, Claude, and AI Mode.",
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
  const imageRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setActive(0);
      return;
    }

    let raf = 0;
    const compute = () => {
      raf = 0;
      // Activation line = top edge of the sticky image frame.
      // A step stays active until the NEXT step's marker scrolls past this line.
      const imgEl = imageRef.current;
      if (!imgEl) return;
      const lineY = imgEl.getBoundingClientRect().top;

      let next = 0;
      for (let i = 0; i < stepRefs.current.length; i++) {
        const el = stepRefs.current[i];
        if (!el) continue;
        // A step is "reached" once its top has crossed above the activation line.
        if (el.getBoundingClientRect().top <= lineY + 1) {
          next = i;
        } else {
          break;
        }
      }
      setActive(next);
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
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

        {/* Scrollytelling grid — right column drives section height; left column sticks centered.
            NO `items-start` here — we want the left column to STRETCH to match the steps column,
            giving the inner sticky element room to remain pinned through every step. */}
        <div className="mt-16 grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* LEFT — column stretches full grid-row height; inner div is sticky and centered. */}
          <div className="lg:col-span-8">
            <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:items-center lg:py-[6vh]">
              <figure className="relative w-full">
                {/* Ambient glow */}
                <div className="absolute -inset-x-16 -inset-y-12 -z-10 rounded-[2.5rem] bg-[radial-gradient(60%_60%_at_50%_50%,hsl(var(--accent-blue)/0.20),transparent_70%)] blur-3xl" />
                <div className="absolute -inset-x-24 -inset-y-16 -z-10 rounded-[2.5rem] bg-[radial-gradient(50%_50%_at_70%_50%,hsl(var(--accent-violet)/0.12),transparent_70%)] blur-3xl" />
                <div ref={imageRef} className="device-frame lift">
                  <div className="device-screen relative aspect-[16/9] overflow-hidden bg-black">
                    {STEPS.map((s, i) => {
                      const dash = DASHBOARDS[s.key] as any;
                      const isActive = i === active;
                      return (
                        <div
                          key={s.key}
                          className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                            isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                          }`}
                          aria-hidden={!isActive}
                        >
                          <img
                            src={dash.src}
                            alt={`${dash.label} — ${dash.caption}`}
                            loading="lazy"
                            decoding="async"
                            className="absolute inset-0 w-full h-full object-contain dark:opacity-100 opacity-0 transition-opacity duration-200"
                          />
                          {dash.srcDark && (
                            <img
                              src={dash.srcDark}
                              alt=""
                              aria-hidden="true"
                              loading="lazy"
                              decoding="async"
                              className="absolute inset-0 w-full h-full object-contain dark:opacity-0 opacity-100 transition-opacity duration-200"
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <figcaption className="mt-4 flex items-center justify-between font-mono text-[13px] tracking-[0.16em] uppercase text-tertiary">
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

          {/* RIGHT — scrolling step rail. Each step is ~one viewport tall so the sticky
              image stays pinned through every step. */}
          <ol className="lg:col-span-4 relative lg:pt-[10vh] lg:pb-[10vh]">
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
                    className="relative pl-12 py-10 lg:py-0 lg:min-h-[80vh] lg:flex lg:flex-col lg:justify-center"
                  >
                    {/* Marker */}
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 top-10 lg:top-1/2 lg:-translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full border transition-colors duration-300 ${
                        isActive
                          ? "bg-primary text-primary-foreground border-primary shadow-[0_0_0_4px_hsl(var(--primary)/0.12)]"
                          : "bg-card text-body border-border"
                      }`}
                    >
                      <span className="font-mono text-[13px] tracking-widest">
                        {s.number}
                      </span>
                    </span>

                    <p
                      className={`font-mono text-[13px] tracking-[0.16em] uppercase transition-colors ${
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
