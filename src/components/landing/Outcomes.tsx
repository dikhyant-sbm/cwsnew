const outcomes = [
  { metric: "Better AI Visibility", desc: "Show up more often when buyers ask AI systems for options, explanations, comparisons, and recommendations." },
  { metric: "Stronger Google Performance", desc: "Improve the technical, content, and authority signals that support organic rankings and qualified traffic." },
  { metric: "Stronger Recommendation Placement", desc: "Move beyond passive brand mentions toward stronger inclusion in answer sets, shortlist moments, and buyer-choice queries." },
  { metric: "Better Citation Support", desc: "Build a stronger source footprint so AI systems and buyers have credible evidence to associate with your company." },
  { metric: "Clearer Category Association", desc: "Make it easier for machines and people to understand what your company does, who you help, and why you should be considered." },
  { metric: "More Durable Visibility", desc: "Build visibility that is supported by content, technical structure, citations, source authority, and repeated market signals." },
];

export const Outcomes = () => (
  <section className="py-28 border-t border-border/40">
    <div className="mx-auto max-w-7xl px-6">
      <div className="text-center max-w-3xl mx-auto">
        <p className="eyebrow">Outcomes</p>
        <h2 className="display text-4xl sm:text-6xl mt-5 leading-[1.05]">
          Become easier to find, cite, compare, and choose.
        </h2>
        <p className="mt-6 text-lg text-body leading-relaxed">
          CiteWorks Studio helps growth-minded companies improve the signals that influence both
          human buyers and machine retrieval systems.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
        {outcomes.map((o, i) => (
          <div key={i} className="bg-background p-8 hover:bg-card/50 transition-colors">
            <p className="font-mono text-[13px] tracking-[0.16em] text-primary mb-5">
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
