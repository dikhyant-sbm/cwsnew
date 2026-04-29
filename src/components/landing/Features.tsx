import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "GEO & AI Search Visibility",
    desc: "Improve how your company appears across AI answers, Google AI Overviews, ChatGPT, Gemini, Perplexity, Copilot, and retrieval-based search.",
    span: "lg:col-span-2",
  },
  {
    title: "Embedding-Level GEO",
    desc: "Improve how AI systems interpret meaning, entity relationships, and category language — not just keywords.",
    span: "lg:col-span-1",
  },
  {
    title: "Cosine Gap Analysis",
    desc: "Identify where your brand is semantically distant from the sources, competitors, and category language AI systems already retrieve.",
    span: "lg:col-span-1",
  },
  {
    title: "Citation Architecture",
    desc: "Strengthen the owned and third-party sources that support your authority: articles, directories, reviews, comparison pages, videos, and community discussions.",
    span: "lg:col-span-2",
  },
  {
    title: "Technical SEO & Schema",
    desc: "Crawlability, indexation, structure, and entity-level schema so search engines and AI systems can understand your site.",
    span: "lg:col-span-2",
  },
  {
    title: "Content Strategy",
    desc: "Service pages, comparison pages, FAQs, and educational content built for rankings, retrieval, and citation readiness.",
    span: "lg:col-span-1",
  },
  {
    title: "AI Market Intelligence",
    desc: "Prompt-cluster maps, competitor recommendation tracking, source influence analysis, and category-framing insight.",
    span: "lg:col-span-3",
  },
];

export const Features = () => (
  <section id="services" className="py-28 scroll-mt-20">
    <div className="mx-auto max-w-7xl px-6">
      <p className="eyebrow text-center">Services</p>
      <h2 className="display text-4xl sm:text-6xl text-center mt-4 max-w-3xl mx-auto">
        We close the gap between real authority and machine-recognized authority.
      </h2>
      <p className="text-center text-muted-foreground mt-6 max-w-2xl mx-auto">
        Machine systems rely on patterns. CiteWorks Studio improves those patterns so your company becomes easier for machines to understand and easier for buyers to trust.
      </p>

      <div className="mt-16 grid lg:grid-cols-3 gap-6">
        {services.map((f) => (
          <article
            key={f.title}
            className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-card hover:border-primary/40 transition-all p-8 flex flex-col ${f.span}`}
          >
            <h3 className="display text-2xl">{f.title}</h3>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed flex-1">{f.desc}</p>
            <Link to="/methodology" className="mt-6 inline-flex items-center gap-1 font-mono text-xs tracking-widest text-primary hover:gap-2 transition-all w-fit">
              LEARN MORE <ArrowRight className="size-3" />
            </Link>
          </article>
        ))}
      </div>
    </div>
  </section>
);
