const items = [
  {
    n: "01",
    title: "AI-native and model-agnostic from day one",
    desc: "With the most robust model coverage in the space, we track ChatGPT, Gemini, Perplexity, Claude, AI Overview, Meta AI, Amazon Rufus, and any emerging models.",
  },
  {
    n: "02",
    title: "Enterprise scalability with vertical depth",
    desc: "Enterprise-grade architecture handles thousands of pages, SKUs, and prompts. Deep domain expertise embedded across retail, SaaS, fintech, travel, and healthcare.",
  },
  {
    n: "03",
    title: "Built by the experts who saw this shift coming",
    desc: "Founded by search veterans, growth marketing leaders, and observability scientists.",
  },
];

export const BuiltFor = () => (
  <section className="py-28 border-t border-border/40">
    <div className="mx-auto max-w-7xl px-6">
      <h2 className="display text-4xl sm:text-6xl max-w-3xl">
        Built for the LLMs That Now Control Brand Discovery
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
