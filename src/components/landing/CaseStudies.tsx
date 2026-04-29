// Replaces the original "case studies" section with CiteWorks' methodology preview
const steps = [
  { n: "01", title: "Map the market", desc: "Identify the keywords, prompts, questions, topics, competitors, and sources shaping your category." },
  { n: "02", title: "Benchmark current visibility", desc: "Analyze where your company appears, disappears, ranks, gets cited, or loses recommendation placement." },
  { n: "03", title: "Analyze retrieval gaps", desc: "Identify where your content, entities, sources, and authority signals do not match what AI systems retrieve." },
  { n: "04", title: "Measure cosine gaps", desc: "Compare your semantic positioning against competitors, trusted sources, and category-defining content." },
  { n: "05", title: "Build citation architecture", desc: "Identify which owned and third-party sources need to exist, improve, or reinforce your authority." },
  { n: "06", title: "Execute the corrective-action plan", desc: "Improve technical SEO, content, schema, internal linking, source support, social proof, and authority signals." },
  { n: "07", title: "Measure movement", desc: "Track whether your company is becoming easier to find, cite, compare, and recommend." },
];

export const CaseStudies = () => (
  <section className="py-28 border-t border-border/40">
    <div className="mx-auto max-w-7xl px-6">
      <p className="eyebrow text-center">Methodology</p>
      <h2 className="display text-4xl sm:text-6xl text-center mt-4 max-w-3xl mx-auto">
        We find the visibility gaps. Then we fix them.
      </h2>
      <p className="text-center text-muted-foreground mt-6 max-w-2xl mx-auto">
        Most companies do not need another disconnected tactic. They need to know why competitors are being found, cited, ranked, compared, and recommended ahead of them.
      </p>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {steps.map((s) => (
          <div key={s.n} className="card-premium p-6 hover:border-primary/40 transition-colors">
            <p className="font-mono text-xs text-primary">{s.n}</p>
            <h3 className="display text-lg mt-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
