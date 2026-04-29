const defs = [
  {
    title: "What is GEO?",
    body: "GEO means generative engine optimization. It is the practice of improving how a company appears in AI-generated answers, AI Overviews, LLM responses, and retrieval-based search systems.",
  },
  {
    title: "What is AI search visibility?",
    body: "The degree to which a company appears, is cited, or is recommended in AI-generated answers across tools such as ChatGPT, Gemini, Perplexity, Copilot, and Google AI Overviews.",
  },
  {
    title: "What is embedding-level GEO?",
    body: "An approach focused on how AI systems interpret meaning, entity relationships, categories, services, and topical relevance — not just keyword matches.",
  },
  {
    title: "What is citation architecture?",
    body: "The structured improvement of the owned and third-party sources that support your authority across search engines, AI systems, and buyer research environments.",
  },
];

export const Blog = () => (
  <section className="py-28 border-t border-border/40">
    <div className="mx-auto max-w-7xl px-6">
      <p className="eyebrow text-center">Definitions</p>
      <h2 className="display text-4xl sm:text-6xl text-center mt-4">
        Definitions for the new search environment.
      </h2>

      <div className="mt-16 grid md:grid-cols-2 gap-6">
        {defs.map((d) => (
          <div key={d.title} className="card-premium p-8 hover:border-primary/40 transition-colors">
            <h3 className="display text-xl text-primary">{d.title}</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">{d.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
