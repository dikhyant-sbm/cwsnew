import { ArrowRight, Sparkles, Layers, Network, Database, FileText, Code2, LineChart } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Sparkles,
    title: "GEO & AI Search Visibility",
    desc: "Improve how your company appears across AI answers, Google AI Overviews, ChatGPT, Gemini, Perplexity, Copilot, and retrieval-based search.",
    span: "lg:col-span-2",
  },
  {
    icon: Layers,
    title: "Embedding-Level GEO",
    desc: "Improve how AI systems interpret meaning, entity relationships, and category language — not just keywords.",
    span: "lg:col-span-1",
  },
  {
    icon: Network,
    title: "Cosine Gap Analysis",
    desc: "Identify where your brand is semantically distant from the sources, competitors, and category language AI systems already retrieve.",
    span: "lg:col-span-1",
  },
  {
    icon: Database,
    title: "Citation Architecture",
    desc: "Strengthen the owned and third-party sources that support your authority: articles, directories, reviews, comparison pages, videos, and community discussions.",
    span: "lg:col-span-2",
  },
  {
    icon: Code2,
    title: "Technical SEO & Schema",
    desc: "Crawlability, indexation, structure, and entity-level schema so search engines and AI systems can understand your site.",
    span: "lg:col-span-2",
  },
  {
    icon: FileText,
    title: "Content Strategy",
    desc: "Service pages, comparison pages, FAQs, and educational content built for rankings, retrieval, and citation readiness.",
    span: "lg:col-span-1",
  },
  {
    icon: LineChart,
    title: "AI Market Intelligence",
    desc: "Prompt-cluster maps, competitor recommendation tracking, source influence analysis, and category-framing insight.",
    span: "lg:col-span-3",
  },
];

export const Features = () => (
  <section id="services" className="py-32 scroll-mt-20 relative">
    <div className="mx-auto max-w-7xl px-6">
      <div className="reveal-on-scroll text-center max-w-3xl mx-auto">
        <p className="eyebrow">Services</p>
        <h2 className="display text-4xl sm:text-6xl mt-4">
          We close the gap between real authority and machine-recognized authority.
        </h2>
        <p className="text-body mt-6 leading-relaxed">
          Machine systems rely on patterns. CiteWorks Studio improves those patterns so your company becomes easier for machines to understand and easier for buyers to trust.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-3 gap-5">
        {services.map((f, i) => {
          const Icon = f.icon;
          return (
            <article
              key={f.title}
              className={`reveal-on-scroll card-premium p-8 flex flex-col ${f.span}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/20">
                  <Icon className="size-4 text-primary" strokeWidth={1.5} />
                </div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-tertiary">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="display text-2xl mt-6">{f.title}</h3>
              <p className="text-sm text-body mt-3 leading-relaxed flex-1">{f.desc}</p>
              <Link
                to="/methodology"
                className="mt-6 inline-flex items-center gap-1 font-mono text-xs tracking-widest text-primary hover:gap-2 transition-all w-fit"
              >
                LEARN MORE <ArrowRight className="size-3" />
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);
