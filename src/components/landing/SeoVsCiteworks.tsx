const rows = [
  ["Focus", "Mainly Google rankings", "Google, AI answers, citations, and recommendation visibility"],
  ["Page optimization", "Optimizes pages for keywords", "Optimizes content for keywords, entities, semantic retrieval, and source support"],
  ["Planning output", "Builds content calendars", "Builds corrective-action roadmaps based on visibility gaps"],
  ["Reporting", "Reports traffic and rankings", "Reports rankings, AI visibility, citations, competitor gaps, and recommendation movement"],
  ["Off-site mentions", "Treats off-site mentions as PR", "Treats third-party sources as citation architecture"],
  ["Channels", "Separates SEO, content, and AI search", "Connects SEO, GEO, content, technical structure, and authority signals"],
  ["Posture", "Measures what happened", "Identifies what needs to change next"],
];

export const SeoVsCiteworks = () => (
  <section className="py-28 border-t border-border/40">
    <div className="mx-auto max-w-6xl px-6">
      <div className="max-w-3xl">
        <p className="eyebrow">Comparison</p>
        <h2 className="display text-4xl sm:text-5xl mt-5 leading-[1.05]">
          How CiteWorks Studio is different from a traditional SEO agency.
        </h2>
        <p className="mt-5 text-body text-lg leading-relaxed">
          GEO does not replace SEO. It builds on it. Here is how a search visibility agency differs
          from a traditional SEO agency.
        </p>
      </div>

      <div className="mt-12 card-premium/30 overflow-hidden">
        <div className="grid grid-cols-12 font-mono text-[13px] tracking-[0.16em] uppercase text-body bg-card/60 px-6 py-4 border-b border-border">
          <div className="col-span-3">Dimension</div>
          <div className="col-span-4">Traditional SEO Agency</div>
          <div className="col-span-5 text-primary">CiteWorks Studio</div>
        </div>
        {rows.map(([dim, a, b], i) => (
          <div
            key={i}
            className={`grid grid-cols-12 px-6 py-5 text-sm gap-4 ${i < rows.length - 1 ? "border-b border-border" : ""}`}
          >
            <div className="col-span-3 font-medium text-body">{dim}</div>
            <div className="col-span-4 text-subtle">{a}</div>
            <div className="col-span-5 text-primary">{b}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
