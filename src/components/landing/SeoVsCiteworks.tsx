const rows = [
  ["Focus", "Mainly Google rankings", "Google + AI answers + cited sources + recommendation placement"],
  ["Starting point", "Keyword lists & content briefs", "Market, prompt, source, and competitor mapping"],
  ["Authority strategy", "Off-site mentions treated as PR", "Third-party sources treated as citation architecture"],
  ["Channels", "SEO, content, links — separate", "SEO, GEO, content, technical, and source-layer authority — connected"],
  ["AI search", "Often an afterthought", "Embedding-level GEO, cosine gaps, retrieval alignment"],
  ["Reporting", "What already happened", "What needs to change next"],
  ["Output", "Tasks and checklists", "Corrective-action roadmap tied to visibility evidence"],
];

export const SeoVsCiteworks = () => (
  <section className="py-28 border-t border-border/40">
    <div className="mx-auto max-w-6xl px-6">
      <div className="max-w-3xl">
        <p className="eyebrow">Comparison</p>
        <h2 className="display text-4xl sm:text-5xl mt-5 leading-[1.05]">
          Traditional SEO vs. CiteWorks Studio.
        </h2>
        <p className="mt-5 text-body text-lg leading-relaxed">
          GEO does not replace SEO. It builds on it. Here is how a search visibility agency differs
          from a traditional SEO agency.
        </p>
      </div>

      <div className="mt-12 card-premium/30 overflow-hidden">
        <div className="grid grid-cols-12 font-mono text-[10px] tracking-[0.22em] uppercase text-body bg-card/60 px-6 py-4 border-b border-border">
          <div className="col-span-3">Dimension</div>
          <div className="col-span-4">Traditional SEO</div>
          <div className="col-span-5 text-primary">CiteWorks Studio</div>
        </div>
        {rows.map(([dim, a, b], i) => (
          <div
            key={i}
            className={`grid grid-cols-12 px-6 py-5 text-sm gap-4 ${i < rows.length - 1 ? "border-b border-border" : ""}`}
          >
            <div className="col-span-3 font-medium text-foreground/90">{dim}</div>
            <div className="col-span-4 text-subtle">{a}</div>
            <div className="col-span-5 text-foreground/95">{b}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
