import { ArrowRight } from "lucide-react";

const cases = [
  { title: "Agencies", desc: "Deliver measurable AI search results for multiple clients with multi-domain dashboards, white-label reporting, and automated research workflows.", img: "https://higoodie.com/wp-content/uploads/2026/04/usecases_agencies_3x-2120x1079.webp" },
  { title: "Travel & Hospitality", desc: "Own AI travel discovery where billions plan trips, compare destinations, and book experiences through ChatGPT and Gemini.", img: "https://higoodie.com/wp-content/uploads/2026/04/usecases_travel_hospitality_3x-2120x1078.webp" },
  { title: "Fintech", desc: "Build trust and authority in AI search with compliance-ready optimization, accurate financial information, and credible brand positioning.", img: "https://higoodie.com/wp-content/uploads/2026/04/usecases_fintech_3x-2120x1078.webp" },
  { title: "Enterprise", desc: "Scale AEO across thousands of pages with enterprise-grade security, SOC 2 compliance, and the advanced controls global brands require.", img: "https://higoodie.com/wp-content/uploads/2026/04/usecases_enterprise_3x-2120x1078.webp" },
  { title: "SaaS", desc: "Capture high-intent B2B buyers researching solutions through AI search and position your product as the clear answer to their prompts.", img: "https://higoodie.com/wp-content/uploads/2026/04/usecases_saas_3x-2120x1079.webp" },
  { title: "Commerce & Retail", desc: "Optimize product visibility at scale across AI shopping agents and ensure your catalog dominates where customers discover and compare products.", img: "https://higoodie.com/wp-content/uploads/2026/04/usecases_commerce_3x-2120x1079.webp" },
];

export const UseCases = () => (
  <section className="py-28 border-t border-border/40">
    <div className="mx-auto max-w-7xl px-6">
      <p className="eyebrow text-center">Use cases</p>
      <h2 className="display text-4xl sm:text-6xl text-center mt-4 max-w-3xl mx-auto">
        Solutions Tailored to Your Vertical
      </h2>

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((c) => (
          <article key={c.title} className="group rounded-2xl border border-border/60 bg-card overflow-hidden hover:border-primary/40 transition-colors">
            <div className="aspect-[16/10] overflow-hidden bg-secondary/30">
              <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="display text-xl">{c.title}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{c.desc}</p>
              <a href="#" className="mt-5 inline-flex items-center gap-1 font-mono text-xs tracking-widest text-primary hover:gap-2 transition-all">
                LEARN MORE <ArrowRight className="size-3" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
