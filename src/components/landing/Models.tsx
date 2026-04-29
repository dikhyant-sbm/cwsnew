const surfaces = [
  "ChatGPT", "Gemini", "Perplexity", "Copilot", "Google AI Overviews",
  "Claude", "Reddit", "YouTube", "Review Sites", "Comparison Pages",
  "Industry Publications", "Directories",
];

export const Models = () => (
  <section className="py-16 border-y border-border/40">
    <div className="mx-auto max-w-7xl px-6">
      <p className="eyebrow text-center mb-10">Surfaces we monitor and improve</p>
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {surfaces.map((s) => (
          <span
            key={s}
            className="px-4 py-2 rounded-full border border-border/70 bg-card/50 text-sm text-foreground/80 hover:border-primary/40 hover:text-foreground transition-colors"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  </section>
);
