const posts = [
  {
    img: "https://higoodie.com/wp-content/uploads/2026/04/GDE_0427_MostCitedDomainsinLLMsIndustryBreakdown_Cover.webp",
    title: "The Most Cited Domains in AI Search: Full Breakdown [58M Citations Analyzed]",
    date: "APR 27, 2026",
    author: "Michael Saltz",
  },
  {
    img: "https://higoodie.com/wp-content/uploads/2026/04/GDE_TheConceptofNetInformationGain__Cover.webp",
    title: "The Concept of Net Information Gain: Break Through the Mediocrity & Homogeny of AI Content",
    date: "APR 24, 2026",
    author: "Daria Erzakova",
  },
  {
    img: "https://higoodie.com/wp-content/uploads/2026/04/GDE_0420_HowtoDoContentMarketingWhenAIIstheDiscoveryLayer_Cover.webp",
    title: "How to Do Content Marketing Strategy When AI Is the Discovery Layer",
    date: "APR 20, 2026",
    author: "Mostafa Elbermawy",
  },
];

export const Blog = () => (
  <section className="py-28 border-t border-border/40">
    <div className="mx-auto max-w-7xl px-6">
      <p className="eyebrow text-center">News, Research, and Product Updates</p>
      <h2 className="display text-4xl sm:text-6xl text-center mt-4">What's New in AI Search</h2>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <a href="#" key={p.title} className="group rounded-2xl border border-border/60 bg-card overflow-hidden hover:border-primary/40 transition-colors">
            <div className="aspect-[16/10] overflow-hidden bg-secondary/30">
              <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="display text-lg leading-snug group-hover:text-primary transition-colors">{p.title}</h3>
              <div className="mt-4 flex items-center gap-3 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                <span>{p.date}</span>
                <span>·</span>
                <span>{p.author}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);
