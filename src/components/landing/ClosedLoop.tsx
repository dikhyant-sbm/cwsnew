const layers = [
  {
    n: "01",
    title: "Search Visibility",
    desc: "How your website performs in Google: organic rankings, indexed pages, technical SEO, schema, and high-intent search results.",
  },
  {
    n: "02",
    title: "AI Visibility",
    desc: "How your company appears in AI-generated answers, AI Overviews, LLM recommendations, prompt responses, citations, and comparisons.",
  },
  {
    n: "03",
    title: "Source Visibility",
    desc: "How you are represented across the public sources buyers and AI systems use: articles, directories, reviews, Reddit, YouTube, and industry mentions.",
  },
];

export const ThreeLayers = () => (
  <section className="py-28 border-t border-border/40">
    <div className="mx-auto max-w-7xl px-6">
      <p className="eyebrow text-center">The visibility ecosystem</p>
      <h2 className="display text-4xl sm:text-6xl text-center mt-4 max-w-3xl mx-auto">
        Three layers of modern visibility.
      </h2>
      <p className="text-center text-body mt-6 max-w-2xl mx-auto">
        Modern search visibility is no longer one channel. It is an ecosystem. CiteWorks Studio helps you improve every layer of it.
      </p>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {layers.map((l) => (
          <div key={l.n} className="card-premium p-8 hover:border-primary/40 transition-colors">
            <p className="font-mono text-xs text-primary">{l.n}</p>
            <h3 className="display text-2xl mt-3">{l.title}</h3>
            <p className="text-sm text-body mt-4 leading-relaxed">{l.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
