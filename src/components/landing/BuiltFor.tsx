const items = [
  {
    n: "01",
    title: "Audit-led, not template-led",
    desc: "We start with evidence — Google rankings, AI answers, citation sources, technical SEO, entity clarity, and source-layer authority — before recommending any work.",
  },
  {
    n: "02",
    title: "SEO + GEO under one methodology",
    desc: "Traditional SEO, embedding-level GEO, citation architecture, and source-layer authority connect into a single visibility system.",
  },
  {
    n: "03",
    title: "Built for growth-minded companies",
    desc: "Established companies, funded startups, category challengers, high-consideration brands, B2B firms, and the agencies that serve them.",
  },
];

export const BuiltFor = () => (
  <section className="py-28 border-t border-border/40">
    <div className="mx-auto max-w-7xl px-6">
      <p className="eyebrow">Why CiteWorks Studio</p>
      <h2 className="display text-4xl sm:text-6xl max-w-3xl mt-4">
        Built for the search environment buyers actually use today.
      </h2>

      <div className="mt-16 grid md:grid-cols-3 gap-10">
        {items.map((it) => (
          <div key={it.n} className="border-t border-border pt-6">
            <p className="font-mono text-xs text-primary">{it.n}</p>
            <h3 className="display text-xl mt-4">{it.title}</h3>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
