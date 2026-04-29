const SURFACES = [
  "Google",
  "Google AI Overviews",
  "ChatGPT",
  "Gemini",
  "Perplexity",
  "Copilot",
  "Claude",
  "YouTube",
  "Reddit",
  "Review Sites",
  "Comparison Pages",
  "Industry Sources",
];

/**
 * Subtle marquee strip showing every environment CiteWorks analyzes.
 * Reduced-motion users see a static wrapped list.
 */
export const CoverageStrip = () => (
  <section
    className="relative py-10 border-y border-border/40 bg-card/30 overflow-hidden"
    aria-label="Environments CiteWorks Studio analyzes"
  >
    <div className="mx-auto max-w-7xl px-6">
      <p className="eyebrow text-center mb-6">Environments we analyze</p>

      {/* Marquee for motion users */}
      <div
        className="marquee-pause overflow-hidden motion-reduce:hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        aria-hidden="true"
      >
        <div className="marquee-track flex gap-3 w-max">
          {[...SURFACES, ...SURFACES].map((s, i) => (
            <span
              key={`${s}-${i}`}
              className="px-4 py-2 rounded-full border border-border/70 bg-card text-sm text-body whitespace-nowrap"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Static fallback */}
      <ul className="hidden motion-reduce:flex flex-wrap items-center justify-center gap-2.5">
        {SURFACES.map((s) => (
          <li
            key={s}
            className="px-4 py-2 rounded-full border border-border/70 bg-card text-sm text-body"
          >
            {s}
          </li>
        ))}
      </ul>
    </div>
  </section>
);
