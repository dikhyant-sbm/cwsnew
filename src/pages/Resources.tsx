import { PageShell, PageHero, SectionHeading } from "@/components/landing/Shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const categories = [
  "All",
  "GEO",
  "AI Search Visibility",
  "Citation Architecture",
  "Technical SEO",
  "Content Strategy",
  "Case Studies",
  "Agency Partners",
  "Definitions",
];

type Article = { title: string; desc: string; category: string; cta: string; href?: string; featured?: boolean };
const articles: Article[] = [
  { title: "Embedding-Level GEO Explained", desc: "How brands become retrievable, trusted, and recommended inside AI retrieval systems. Vector optimization and cosine gap engineering, explained for enterprise teams.", category: "GEO", cta: "READ ARTICLE", href: "/resources/embedding-level-geo", featured: true },
  { title: "What Is GEO?", desc: "A clear explanation of generative engine optimization and how it helps companies appear in AI-generated answers and retrieval-based search systems.", category: "GEO", cta: "READ RESOURCE" },
  { title: "What Is AI Search Visibility?", desc: "A practical guide to how companies appear, disappear, get cited, or get recommended across ChatGPT, Gemini, Perplexity, Copilot, and Google AI Overviews.", category: "AI Search Visibility", cta: "READ RESOURCE" },
  { title: "What Is Citation Architecture?", desc: "A framework for understanding how owned and third-party sources support trust, authority, rankings, and AI recommendations.", category: "Citation Architecture", cta: "READ RESOURCE" },
  { title: "What Is Embedding-Level GEO?", desc: "A plain-English guide to semantic retrieval, vector relevance, entity relationships, and machine-recognized authority.", category: "GEO", cta: "READ RESOURCE" },
  { title: "What Is Cosine Gap Analysis?", desc: "A guide to identifying the semantic distance between your company and the sources, competitors, and category language AI systems already retrieve.", category: "Technical SEO", cta: "READ RESOURCE" },
  { title: "How to Improve Brand Recommendations in ChatGPT", desc: "A practical guide to improving source support, content clarity, category association, and recommendation visibility in AI-generated answers.", category: "AI Search Visibility", cta: "READ RESOURCE" },
  { title: "How to Influence AI Overviews and LLM Recommendations", desc: "A guide explaining how content, citations, technical SEO, source authority, and entity clarity support AI answer inclusion.", category: "AI Search Visibility", cta: "READ RESOURCE" },
  { title: "Best AI Search Visibility Agencies", desc: "A buyer guide explaining the main types of AI search visibility agencies, what each does well, and how to evaluate the right fit.", category: "Agency Partners", cta: "READ RESOURCE" },
  { title: "Best GEO Agencies for Growth-Minded Companies", desc: "A guide for evaluating GEO providers, AI search agencies, SEO agencies, citation architecture partners, and execution teams.", category: "Agency Partners", cta: "READ RESOURCE" },
  { title: "AI Citation Architecture Agency", desc: "A commercial authority page explaining what an AI citation architecture agency does, why source support matters, and when a company needs one.", category: "Citation Architecture", cta: "READ RESOURCE" },
  { title: "AI Search Visibility Case Studies", desc: "A case study hub showing visibility movement across Google, AI answers, citation sources, and high-consideration categories.", category: "Case Studies", cta: "VIEW CASE STUDIES" },
  { title: "CiteWorks Studio Methodology", desc: "A breakdown of the audit-led corrective-action process CiteWorks uses to improve visibility across search, AI, and source-layer authority.", category: "Definitions", cta: "READ METHODOLOGY" },
];

const topics = [
  { t: "GEO and AI Search Visibility", d: "Learn how generative engine optimization works, how AI systems surface brands, and what companies can do to improve visibility in AI-generated answers." },
  { t: "Citation Architecture", d: "Learn how owned and third-party sources support authority across Google, AI answers, and buyer research environments." },
  { t: "Embedding-Level GEO and Cosine Gap Analysis", d: "Learn how semantic alignment, vector relevance, and cosine gaps influence whether AI systems retrieve, compare, and recommend a company." },
  { t: "Technical SEO and Entity Clarity", d: "Learn how website structure, schema, crawlability, internal linking, and entity clarity support both traditional search and AI visibility." },
  { t: "Content Strategy for AI Search", d: "Learn how content should be structured for rankings, retrieval, citations, topical authority, and buyer decision-making." },
  { t: "Case Studies and Proof", d: "See how visibility changes across Google, AI answers, source environments, and high-consideration categories." },
  { t: "Agency Partner Resources", d: "Resources for agencies that want to offer GEO, AI search visibility, citation architecture, technical SEO, and AI market intelligence to clients." },
];

const definitions = [
  { t: "GEO", d: "GEO means generative engine optimization. It is the practice of improving how a company appears in AI-generated answers, AI Overviews, LLM responses, and retrieval-based search systems." },
  { t: "AI Search Visibility", d: "AI search visibility is the degree to which a company appears, is cited, or is recommended in AI-generated answers across tools such as ChatGPT, Gemini, Perplexity, Copilot, and Google AI Overviews." },
  { t: "Citation Architecture", d: "Citation architecture is the structured improvement of the owned and third-party sources that support a company's authority across search engines, AI systems, and buyer research environments." },
  { t: "Embedding-Level GEO", d: "Embedding-level GEO focuses on how AI systems interpret meaning, relationships, entities, categories, services, and topical relevance." },
  { t: "Vector Optimization", d: "Vector optimization improves semantic alignment between a company's content and the topics, problems, entities, and buying questions that define its market." },
  { t: "Cosine Gap Analysis", d: "Cosine gap analysis identifies the semantic distance between how a company wants to be understood and how AI systems appear to compare that company against competitors, cited sources, and category-defining content." },
  { t: "Source-Layer Authority", d: "Source-layer authority is the public evidence around a company, including third-party articles, review sites, directories, comparison pages, community discussions, videos, social profiles, and industry mentions." },
  { t: "Visibility Audit", d: "A Visibility Audit identifies where a company is losing visibility across Google rankings, AI answers, citation sources, competitor positioning, technical SEO, content structure, entity clarity, and source-layer authority." },
];

const paths = [
  { when: "If you are new to AI search", start: "What Is GEO?, What Is AI Search Visibility?, and What Is Citation Architecture?" },
  { when: "If competitors are showing up ahead of you", start: "What Is Cosine Gap Analysis?, How to Improve Brand Recommendations in ChatGPT, and How to Influence AI Overviews and LLM Recommendations." },
  { when: "If your website has content but weak visibility", start: "Technical SEO and Entity Clarity, Content Strategy for AI Search, and Embedding-Level GEO." },
  { when: "If you are an agency", start: "Agency Partner Program, White-Label GEO Services, AI Search Audits for Agencies, and Citation Architecture for Agency Clients." },
];

const faqs = [
  { q: "Are these resources for SEO or AI search?", a: "Both. CiteWorks Studio resources cover traditional SEO, GEO, AI search visibility, technical SEO, citation architecture, content strategy, source-layer authority, and the connections between them." },
  { q: "Who are these resources for?", a: "These resources are for growth-minded companies, high-consideration brands, category challengers, established companies in competitive markets, and agency partners that want stronger visibility across Google, AI answers, and trusted source environments." },
  { q: "Are these normal blog posts?", a: "No. The resource library is designed to function as a search visibility knowledge base. Some pages are definitions, some are guides, some are methodology pages, some are case studies, and some are buyer education assets." },
  { q: "Do the resources replace a Visibility Audit?", a: "No. The resources explain concepts and strategy. A Visibility Audit applies those concepts to your company, competitors, category, website, AI visibility, citation footprint, and search environment." },
];

const Resources = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? articles : articles.filter((a) => a.category === active);

  useEffect(() => {
    document.title = "Resources | CiteWorks Studio — GEO, AI Search Visibility, and Citation Architecture";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Explore guides, case studies, definitions, and strategy resources on GEO, AI search visibility, citation architecture, technical SEO, content strategy, and source-layer authority.");
  }, []);

  return (
    <PageShell>
      <PageHero
        eyebrow="Resources"
        title="Resources on GEO, AI search visibility, and citation architecture."
        body="Explore guides, case studies, definitions, and strategy resources that explain how growth-minded companies can improve visibility across Google, AI answers, and the source environments that shape buyer decisions."
        ctas={
          <>
            <Button asChild className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-14">
              <a href="#articles">BROWSE RESOURCES</a>
            </Button>
            <Button asChild variant="outline" className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] border-foreground/35 hover:bg-foreground/5 px-7 h-14">
              <Link to="/request-audit">REQUEST A VISIBILITY AUDIT</Link>
            </Button>
          </>
        }
      />

      {/* Featured Resources / Article Grid */}
      <section id="articles" className="py-20 border-t border-border/40 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Library"
            title="Start with the most useful resources."
            body="Browse practical guides, case studies, and definitions on GEO, AI search visibility, citation architecture, technical SEO, content strategy, and source-layer authority."
          />

          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {categories.map((c) => {
              const isActive = active === c;
              return (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`relative px-4 py-2 rounded-full font-mono text-[13px] tracking-widest border transition-all duration-300 ${
                    isActive
                      ? "text-primary-foreground border-transparent"
                      : "border-border text-body hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full bg-primary animate-scale-in"
                    />
                  )}
                  <span className="relative">{c.toUpperCase()}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((a, i) => (
              <article
                key={a.title + active}
                className={`group card-premium p-7 flex flex-col animate-fade-in transition-colors relative ${a.href ? "hover:border-primary/50 cursor-pointer" : ""} ${a.featured ? "ring-1 ring-primary/40 lg:col-span-2 bg-gradient-to-br from-primary/5 to-transparent" : ""}`}
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {a.featured && (
                  <p className="font-mono text-[11px] tracking-[0.18em] text-primary mb-2">★ FEATURED ARTICLE</p>
                )}
                <p className="font-mono text-[13px] uppercase tracking-widest text-primary">{a.category}</p>
                <h3 className={`display mt-3 ${a.featured ? "text-2xl sm:text-3xl" : "text-xl"}`}>{a.title}</h3>
                <p className="text-sm text-body mt-3 leading-relaxed flex-1">{a.desc}</p>
                {a.href ? (
                  <>
                    <span className="mt-5 inline-flex items-center gap-1 font-mono text-[13px] tracking-widest text-primary group-hover:gap-2 transition-all w-fit">
                      {a.cta} <ArrowRight className="size-3" />
                    </span>
                    <Link to={a.href} aria-label={a.title} className="absolute inset-0 rounded-[inherit] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
                  </>
                ) : (
                  <span className="mt-5 inline-flex items-center gap-1 font-mono text-[13px] tracking-widest text-body w-fit">
                    {a.cta} <ArrowRight className="size-3" />
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Updates CTA */}
      <section className="py-20 border-t border-border/40">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow">Updates</p>
          <h2 className="display text-3xl sm:text-5xl mt-4">Get practical insights on Google, AI search, and citation architecture.</h2>
          <p className="mt-6 text-body">
            Subscribe for updates on GEO, AI search visibility, citation architecture, technical SEO, content strategy, and the changing source environments that shape buyer decisions.
          </p>
          <p className="mt-3 text-body">
            No generic marketing fluff. Just practical visibility strategy for growth-minded companies and agency partners.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input type="email" placeholder="Work email" className="h-12 rounded-full bg-card border-border" />
            <Button className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6">
              SUBSCRIBE
            </Button>
          </form>
        </div>
      </section>

      {/* Bottom Educational / LLM Section */}
      <section className="py-20 border-t border-border/40">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow">Knowledge Base</p>
          <h2 className="display text-3xl sm:text-5xl mt-4">Learn how modern search visibility actually works.</h2>
          <p className="mt-6 text-body">
            The CiteWorks Studio resource library is built to help growth-minded companies understand how visibility is changing across Google, AI answers, and the source environments that shape buyer decisions.
          </p>
          <p className="mt-3 text-body">
            These resources are not generic blog posts. They are practical guides, definitions, case studies, methodology pages, and buyer education assets built around the new search environment.
          </p>
        </div>
      </section>

      {/* Explore Resources by Topic */}
      <section className="py-20 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="By topic" title="Explore resources by topic." />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {topics.map((t, i) => (
              <div key={t.t} className="card-premium p-7 reveal-on-scroll" style={{ transitionDelay: `${i * 60}ms` }}>
                <h3 className="display text-lg text-primary">{t.t}</h3>
                <p className="text-sm text-body mt-3 leading-relaxed">{t.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Definitions */}
      <section className="py-20 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Glossary" title="Key definitions in modern search visibility." />
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {definitions.map((d) => (
              <div key={d.t} className="card-premium p-7 reveal-on-scroll">
                <h3 className="display text-lg text-primary">{d.t}</h3>
                <p className="text-sm text-body mt-3 leading-relaxed">{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 border-t border-border/40">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow="Learning paths" title="Not sure where to start?" />
          <div className="mt-12 space-y-3">
            {paths.map((p, i) => (
              <div key={i} className="card-premium p-6 reveal-on-scroll" style={{ transitionDelay: `${i * 60}ms` }}>
                <p className="font-mono text-[13px] uppercase tracking-widest text-primary">{`Path ${String(i + 1).padStart(2, "0")}`}</p>
                <h3 className="display text-lg mt-2">{p.when}</h3>
                <p className="text-sm text-body mt-3"><span className="text-body">Start with:</span> {p.start}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-border/40">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow="FAQ" title="Common questions about CiteWorks Studio resources" />
          <Accordion type="single" collapsible className="mt-12">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`r-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-lg font-medium hover:text-primary hover:no-underline py-6">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-body leading-relaxed pb-6">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 border-t border-border/40 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="display text-4xl sm:text-6xl">Turn search visibility knowledge into action.</h2>
          <p className="mt-6 text-body">
            Learning how modern search works is useful. Knowing where your own company is breaking down is better.
          </p>
          <p className="mt-3 text-body">
            CiteWorks Studio helps growth-minded companies identify and fix the gaps that limit visibility across Google, AI answers, citation sources, competitor positioning, technical SEO, content structure, and source-layer authority.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-14">
              <Link to="/request-audit">REQUEST A VISIBILITY AUDIT</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] border-foreground/35 hover:bg-foreground/5 px-7 h-14">
              <Link to="/methodology">EXPLORE THE METHODOLOGY</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Resources;
