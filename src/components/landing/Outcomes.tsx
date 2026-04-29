const outcomes = [
  { metric: "Easier to find", desc: "Across Google, AI answers, comparison environments, and category-defining queries." },
  { metric: "Easier to cite", desc: "By third-party publications, AI systems, review platforms, and trusted sources." },
  { metric: "Easier to compare", desc: "On comparison pages, best-of lists, and buyer-research surfaces." },
  { metric: "Easier to recommend", desc: "When AI tools, peers, and review platforms answer 'which provider should I choose?'" },
];

export const Outcomes = () => (
  <section className="py-28 border-t border-border/40">
    <div className="mx-auto max-w-7xl px-6">
      <div className="text-center max-w-3xl mx-auto">
        <p className="eyebrow">Outcomes</p>
        <h2 className="display text-4xl sm:text-6xl mt-5 leading-[1.05]">
          What changes when visibility becomes a system.
        </h2>
      </div>

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
        {outcomes.map((o, i) => (
          <div key={i} className="bg-background p-8 hover:bg-card/50 transition-colors">
            <p className="font-mono text-[12px] tracking-[0.16em] text-primary mb-5">
              0{i + 1} / OUTCOME
            </p>
            <h3 className="display text-2xl text-gradient">{o.metric}</h3>
            <p className="mt-4 text-sm text-muted-fg leading-relaxed">{o.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
