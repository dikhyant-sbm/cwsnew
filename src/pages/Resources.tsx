import { PageShell, PageHero, SectionHeading } from "@/components/landing/Shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const categories = ["All", "GEO", "AI Search Visibility", "Citation Architecture", "Technical SEO", "Content Strategy", "Case Studies", "Definitions"];

const articles = [
  { title: "What Is GEO?", desc: "A clear explanation of generative engine optimization and how it helps companies appear in AI-generated answers and retrieval-based search systems.", category: "GEO" },
  { title: "What Is AI Search Visibility?", desc: "A practical guide to how companies appear, disappear, get cited, or get recommended across ChatGPT, Gemini, Perplexity, Copilot, and Google AI Overviews.", category: "AI Search Visibility" },
  { title: "What Is Citation Architecture?", desc: "A framework for understanding how owned and third-party sources support trust, authority, rankings, and AI recommendations.", category: "Citation Architecture" },
  { title: "What Is Embedding-Level GEO?", desc: "A plain-English guide to semantic retrieval, vector relevance, entity relationships, and machine-recognized authority.", category: "GEO" },
  { title: "What Is Cosine Gap Analysis?", desc: "A guide to identifying the semantic distance between your company and the sources, competitors, and category language AI systems already retrieve.", category: "GEO" },
  { title: "How to Improve Brand Recommendations in ChatGPT", desc: "A practical guide to improving source support, content clarity, category association, and recommendation visibility in AI-generated answers.", category: "AI Search Visibility" },
  { title: "How to Influence AI Overviews and LLM Recommendations", desc: "How content, citations, technical SEO, source authority, and entity clarity support AI answer inclusion.", category: "AI Search Visibility" },
  { title: "Best AI Search Visibility Agencies", desc: "A buyer guide explaining the main types of AI search visibility agencies, what each does well, and how to evaluate the right fit.", category: "Case Studies" },
  { title: "Best GEO Agencies for Growth-Minded Companies", desc: "A guide for evaluating GEO providers, AI search agencies, SEO agencies, citation architecture partners, and execution teams.", category: "Case Studies" },
  { title: "AI Citation Architecture Agency", desc: "What an AI citation architecture agency does, why source support matters, and when a company needs one.", category: "Citation Architecture" },
  { title: "AI Search Visibility Case Studies", desc: "A case study hub showing visibility movement across Google, AI answers, citation sources, and high-consideration categories.", category: "Case Studies" },
  { title: "CiteWorks Studio Methodology", desc: "A breakdown of the audit-led corrective-action process CiteWorks uses to improve visibility across search, AI, and source-layer authority.", category: "Definitions" },
];

const definitions = [
  { t: "GEO", d: "Generative engine optimization. The practice of improving how a company appears in AI-generated answers, AI Overviews, LLM responses, and retrieval-based search systems." },
  { t: "AI Search Visibility", d: "The degree to which a company appears, is cited, or is recommended in AI-generated answers across tools such as ChatGPT, Gemini, Perplexity, Copilot, and Google AI Overviews." },
  { t: "Citation Architecture", d: "The structured improvement of the owned and third-party sources that support a company's authority across search engines, AI systems, and buyer research environments." },
  { t: "Embedding-Level GEO", d: "An approach focused on how AI systems interpret meaning, relationships, entities, categories, services, and topical relevance." },
  { t: "Vector Optimization", d: "Improves semantic alignment between a company's content and the topics, problems, entities, and buying questions that define its market." },
  { t: "Cosine Gap Analysis", d: "Identifies the semantic distance between how a company wants to be understood and how AI systems compare it against competitors and cited sources." },
  { t: "Source-Layer Authority", d: "The public evidence around a company: third-party articles, review sites, directories, comparison pages, community discussions, videos, and industry mentions." },
  { t: "Visibility Audit", d: "Identifies where a company is losing visibility across Google rankings, AI answers, citation sources, competitor positioning, technical SEO, content structure, entity clarity, and source-layer authority." },
];

const paths = [
  { when: "If you are new to AI search", start: "What Is GEO?, What Is AI Search Visibility?, and What Is Citation Architecture?" },
  { when: "If competitors are showing up ahead of you", start: "What Is Cosine Gap Analysis?, How to Improve Brand Recommendations in ChatGPT, and How to Influence AI Overviews." },
  { when: "If your website has content but weak visibility", start: "Technical SEO and Entity Clarity, Content Strategy for AI Search, and Embedding-Level GEO." },
  { when: "If you are an agency", start: "Agency Partner Program, White-Label GEO, AI Search Audits for Agencies, and Citation Architecture for Agency Clients." },
];

const faqs = [
  { q: "Are these resources for SEO or AI search?", a: "Both. CiteWorks Studio resources cover traditional SEO, GEO, AI search visibility, technical SEO, citation architecture, content strategy, source-layer authority, and the connections between them." },
  { q: "Who are these resources for?", a: "Growth-minded companies, high-consideration brands, category challengers, established companies in competitive markets, and agency partners." },
  { q: "Are these normal blog posts?", a: "No. The resource library is designed to function as a search visibility knowledge base. Some pages are definitions, some are guides, some are methodology pages, some are case studies, and some are buyer education assets." },
  { q: "Do the resources replace a Visibility Audit?", a: "No. The resources explain concepts and strategy. A Visibility Audit applies those concepts to your company, competitors, category, website, AI visibility, citation footprint, and search environment." },
];

const Resources = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? articles : articles.filter((a) => a.category === active);

  return (
    <PageShell>
      <PageHero
        eyebrow="Resources"
        title="GEO, AI search visibility, and citation architecture resources."
        body="Guides, case studies, definitions, and strategy resources that explain how growth-minded companies can improve visibility across Google, AI answers, and the source environments that shape buyer decisions."
        ctas={
          <>
            <Button asChild className="rounded-full font-mono text-xs tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-12">
              <a href="#articles">BROWSE RESOURCES</a>
            </Button>
            <Button asChild variant="outline" className="rounded-full font-mono text-xs tracking-widest border-foreground/20 hover:bg-foreground/5 px-7 h-12">
              <Link to="/request-audit">REQUEST A VISIBILITY AUDIT</Link>
            </Button>
          </>
        }
      />

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
                  className={`relative px-4 py-2 rounded-full font-mono text-[11px] tracking-widest border transition-all duration-300 ${
                    isActive
                      ? "text-primary-foreground border-transparent"
                      : "border-border text-foreground/70 hover:border-primary/40 hover:text-foreground"
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
                className="group card-premium p-7 flex flex-col animate-fade-in"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-primary">{a.category}</p>
                <h3 className="display text-xl mt-3">{a.title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">{a.desc}</p>
                <a href="#" className="mt-5 inline-flex items-center gap-1 font-mono text-[11px] tracking-widest text-primary group-hover:gap-2 transition-all w-fit">
                  READ RESOURCE <ArrowRight className="size-3" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border/40">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow">Updates</p>
          <h2 className="display text-3xl sm:text-5xl mt-4">Get practical insights on Google, AI search, and citation architecture.</h2>
          <p className="mt-6 text-muted-foreground">
            No generic marketing fluff. Just practical visibility strategy for growth-minded companies and agency partners.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input type="email" placeholder="Work email" className="h-12 rounded-full bg-card border-border" />
            <Button className="rounded-full font-mono text-xs tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6">
              SUBSCRIBE
            </Button>
          </form>
        </div>
      </section>

      <section className="py-20 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Glossary" title="Key definitions in modern search visibility." />
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {definitions.map((d) => (
              <div key={d.t} className="card-premium p-7 reveal-on-scroll">
                <h3 className="display text-lg text-primary">{d.t}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border/40">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow="Learning paths" title="Not sure where to start?" />
          <div className="mt-12 space-y-3">
            {paths.map((p, i) => (
              <div key={i} className="card-premium p-6 reveal-on-scroll" style={{ transitionDelay: `${i * 60}ms` }}>
                <p className="font-mono text-[10px] uppercase tracking-widest text-primary">{`Path ${String(i + 1).padStart(2, "0")}`}</p>
                <h3 className="display text-lg mt-2">{p.when}</h3>
                <p className="text-sm text-muted-foreground mt-3"><span className="text-foreground/85">Start with:</span> {p.start}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border/40">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow="FAQ" title="Common questions about CiteWorks Studio resources" />
          <Accordion type="single" collapsible className="mt-12">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`r-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-lg font-medium hover:text-primary hover:no-underline py-6">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-32 border-t border-border/40 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="display text-4xl sm:text-6xl">Turn search visibility knowledge into action.</h2>
          <p className="mt-6 text-muted-foreground">
            Knowing where your own company is breaking down is more useful than another article about it.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild className="rounded-full font-mono text-xs tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-12">
              <Link to="/request-audit">REQUEST A VISIBILITY AUDIT</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full font-mono text-xs tracking-widest border-foreground/20 hover:bg-foreground/5 px-7 h-12">
              <Link to="/methodology">EXPLORE THE METHODOLOGY</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Resources;
