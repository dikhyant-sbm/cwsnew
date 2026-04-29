const steps = [
  {
    n: "01",
    title: "Research",
    desc: "Understand real customer prompts, search volume patterns, and visibility opportunities.",
    img: "https://higoodie.com/wp-content/uploads/2026/03/research_new_closed_loop_3x.webp",
  },
  {
    n: "02",
    title: "Monitor",
    desc: "Track mentions, citations, sentiment, and competitive share.",
    img: "https://higoodie.com/wp-content/uploads/2026/03/monitor_closed_loop_3x.webp",
  },
  {
    n: "03",
    title: "Action",
    desc: "Identify optimization gaps and execute improvements across owned and earned assets.",
    img: "https://higoodie.com/wp-content/uploads/2026/03/action_closed_loop_3x.webp",
  },
  {
    n: "04",
    title: "Measure",
    desc: "Prove ROI with attribution that connects visibility to business outcomes.",
    img: "https://higoodie.com/wp-content/uploads/2026/03/measure_closed_loop_3x.webp",
  },
];

export const ClosedLoop = () => (
  <section className="py-28 border-t border-border/40">
    <div className="mx-auto max-w-7xl px-6">
      <p className="eyebrow text-center">The closed loop</p>
      <h2 className="display text-4xl sm:text-6xl text-center mt-4 max-w-3xl mx-auto">
        The End-to-End AEO Platform
      </h2>

      <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s) => (
          <div key={s.n} className="rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/40 transition-colors">
            <div className="aspect-square rounded-xl bg-secondary/40 overflow-hidden mb-6 flex items-center justify-center">
              <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <p className="font-mono text-xs text-primary">{s.n}</p>
            <h3 className="display text-2xl mt-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
