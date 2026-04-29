import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Prompt Research",
    desc: "Discover the exact prompts your customers use in AI search and prioritize high-volume, high-intent opportunities.",
    img: "https://higoodie.com/wp-content/uploads/2026/03/PromptsWebP-2120x1375.webp",
    span: "lg:col-span-2",
  },
  {
    title: "Visibility Monitoring",
    desc: "Monitor brand mentions, sentiment, and competitive positioning across ChatGPT, Gemini, Perplexity, Claude, and every major AI model.",
    img: "https://higoodie.com/wp-content/uploads/2026/03/Visibilty-Monitoring_BottomRight_3x-2120x1375.webp",
    span: "lg:col-span-1",
  },
  {
    title: "Optimization Actions",
    desc: "Get a prioritized playbook of what to fix, where to optimize, and which actions will move the needle most.",
    img: "https://higoodie.com/wp-content/uploads/2026/04/Optimize_HOLD_BottomLeft3x-2120x1375.webp",
    span: "lg:col-span-1",
  },
  {
    title: "AEO Writer",
    desc: "Generate AI-optimized content that maintains your brand voice while meeting the authority and structure standards LLMs require.",
    img: "https://higoodie.com/wp-content/uploads/2026/03/ContentWriter_HOLD_BottomRight3x-2120x1375.webp",
    span: "lg:col-span-2",
  },
  {
    title: "Agentic Commerce Suite",
    desc: "Track and optimize how your products appear in AI shopping experiences across ChatGPT, Amazon Rufus, Perplexity, and more.",
    img: "https://higoodie.com/wp-content/uploads/2026/03/AgenticCommerce_Left3x-2120x1375.webp",
    span: "lg:col-span-2",
  },
  {
    title: "Crawlers & Agents",
    desc: "Understand how AI crawlers experience your site and close technical gaps that prevent visibility before they cost you mentions.",
    img: "https://higoodie.com/wp-content/uploads/2026/03/Crawlers-Agents_BottomRight_3x-2120x1375.webp",
    span: "lg:col-span-1",
  },
  {
    title: "Analytics & Attribution",
    desc: "Connect AI visibility to revenue with attribution that shows exactly how much growth AI search is driving for your business.",
    img: "https://higoodie.com/wp-content/uploads/2026/03/Attribution_LeftBottomAligned3x-1-2120x1375.webp",
    span: "lg:col-span-3",
  },
];

export const Features = () => (
  <section className="py-28">
    <div className="mx-auto max-w-7xl px-6">
      <p className="eyebrow text-center">Features</p>
      <h2 className="display text-4xl sm:text-6xl text-center mt-4 max-w-3xl mx-auto">
        The Intelligence System Behind Your AI Search Growth
      </h2>

      <div className="mt-20 grid lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <article
            key={f.title}
            className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-card hover:border-primary/40 transition-all ${f.span}`}
          >
            <div className="aspect-[16/10] overflow-hidden bg-secondary/30">
              <img src={f.img} alt={f.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="display text-2xl">{f.title}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{f.desc}</p>
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
