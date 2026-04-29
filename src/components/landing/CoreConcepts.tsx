const concepts = [
  {
    n: "01",
    title: "Embedding-Level GEO",
    desc: "Improves how AI systems interpret meaning, entity relationships, category language, and topical relevance — not just keyword matches.",
  },
  {
    n: "02",
    title: "Vector Optimization",
    desc: "Strengthens semantic alignment between your content and the topics, problems, entities, and buying questions that define your market.",
  },
  {
    n: "03",
    title: "Cosine Gap Analysis",
    desc: "Identifies the semantic distance between how your company wants to be understood and how AI systems compare you against competitors and cited sources.",
  },
  {
    n: "04",
    title: "Citation Architecture",
    desc: "The structured improvement of the owned and third-party sources that support your authority across search engines, AI systems, and buyer research environments.",
  },
];

export const CoreConcepts = () => (
  <section className="py-28 border-t border-border/40">
    <div className="mx-auto max-w-7xl px-6">
      <div className="max-w-3xl">
        <p className="eyebrow">Four core concepts</p>
        <h2 className="display text-4xl sm:text-5xl mt-5 leading-[1.05]">
          The vocabulary of modern search visibility.
        </h2>
        <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
          Advanced GEO, vector optimization, and cosine gap analysis only matter if they help your
          company become easier to find, cite, compare, and choose. Here is how we apply them.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-4">
        {concepts.map((c) => (
          <article
            key={c.n}
            className="group relative card-premium/40 p-8 hover:border-primary/40 transition-all overflow-hidden"
          >
            <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-start gap-6">
              <p className="font-mono text-xs text-primary mt-1.5">{c.n}</p>
              <div>
                <h3 className="display text-2xl">{c.title}</h3>
                <p className="text-foreground/65 mt-3 leading-relaxed">{c.desc}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
