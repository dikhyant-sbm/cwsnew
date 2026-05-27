import { PageShell } from "@/components/landing/Shell";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, BookOpen, Calendar, Clock, Copy, Check, FileText, Linkedin, Twitter, Link as LinkIcon } from "lucide-react";
import heroImage from "@/assets/resource-embedding-geo-hero.jpg";

const toc = [
  { id: "intro", label: "Introduction" },
  { id: "definition", label: "Definition" },
  { id: "why-now", label: "Why this matters now" },
  { id: "fix", label: "What it fixes" },
  { id: "process", label: "The CiteWorks process" },
  { id: "vs-seo", label: "Embedding GEO vs SEO" },
  { id: "what-changes", label: "What changes" },
  { id: "case-studies", label: "Case study evidence" },
  { id: "research", label: "Research basis" },
  { id: "summary", label: "On-site summary" },
  { id: "closing", label: "Closing view" },
  { id: "key-takeaways", label: "Key takeaways" },
  { id: "glossary", label: "Glossary" },
  { id: "faq", label: "FAQ" },
  { id: "next", label: "Next steps" },
];

const takeaways = [
  "AI search retrieves semantically — visibility is now a representation problem, not just a ranking problem.",
  "Embedding-level GEO optimizes how content sits inside vector space, not just what the page says on the surface.",
  "Cosine gap engineering closes the semantic distance between your brand and the prompts, comparisons, and recommendations you want to win.",
  "Third-party evidence (reviews, forums, comparisons, editorial) shapes retrieval as much as your owned pages.",
  "Recommendation placement — not raw mentions — is the KPI that maps to revenue.",
];

const glossary = [
  { t: "Embedding-level GEO", d: "Optimizing how your brand and content are represented inside the semantic vector space AI retrieval systems use." },
  { t: "Cosine gap", d: "The semantic distance between your content and the prompts, comparisons, and cited sources AI systems already favor." },
  { t: "Retrieval alignment", d: "Ensuring your pages match the semantic shape of high-intent prompts and the evidence patterns retrieval systems prefer." },
  { t: "Citation architecture", d: "The structured improvement of owned and third-party sources that support authority across search engines and AI systems." },
  { t: "Recommendation placement", d: "Whether AI systems include your brand as a recommended choice in answers tied to high-intent buyer questions." },
];

const faqs = [
  { q: "Is embedding-level GEO a replacement for SEO?", a: "No. Technical SEO, schema, content hierarchy, and on-page structure still matter. Embedding-level GEO treats those as part of a larger machine-interpretation system rather than an isolated ranking problem." },
  { q: "How is this different from writing content for AI?", a: "Writing for AI is a surface tactic. Embedding-level GEO is a discipline built around semantic alignment, retrieval-layer comparison, evidence quality, and the third-party source environment that retrieval systems pull from." },
  { q: "What does cosine gap engineering actually change?", a: "It identifies why competing pages are retrieved over yours and prescribes the content, entity, and evidence changes needed to close that semantic distance — so your brand becomes more retrievable, more comparable, and more recommendation-eligible." },
  { q: "How long before embedding-level work shows results?", a: "Most engagements show measurable movement in citation density and recommendation placement within 60 to 120 days, depending on category competitiveness and the strength of the existing source environment." },
  { q: "Who is this work best suited for?", a: "Enterprise brands, high-consideration categories, and category challengers that already invest in SEO and content but are losing visibility inside AI answers, comparisons, and recommendation environments." },
];

const related = [
  { title: "What Is Cosine Gap Analysis?", desc: "Identify the semantic distance between your brand and the sources AI systems already retrieve." },
  { title: "What Is Citation Architecture?", desc: "How owned and third-party sources support trust and authority across Google and AI." },
  { title: "How to Improve Brand Recommendations in ChatGPT", desc: "Practical guide to improving source support and recommendation visibility." },
];

const EmbeddingLevelGEO = () => {
  const [copied, setCopied] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.title = "Embedding-Level GEO Explained | CiteWorks Studio";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "How brands become retrievable, trusted, and recommended inside AI retrieval systems. Embedding-level GEO, vector optimization, and cosine gap engineering explained.");

    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <PageShell>
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-transparent z-40">
        <div className="h-full bg-primary transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>

      {/* Hero */}
      <section className="relative pt-32 pb-12 border-b border-border/40 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-6 grid lg:grid-cols-[minmax(0,1fr)_360px] gap-10 lg:gap-12 items-center">
          <div>
            <nav aria-label="Breadcrumb" className="font-mono text-[12px] tracking-widest text-body uppercase flex items-center gap-2">
              <Link to="/resources" className="hover:text-primary">Resources</Link>
              <span>/</span>
              <span className="text-primary">GEO</span>
            </nav>
            <p className="eyebrow mt-6">Long Read · Strategy</p>
            <h1 className="display text-4xl sm:text-5xl mt-5 leading-[1.05]">
              Embedding-Level GEO Explained: How Brands Become Retrievable, Trusted, and Recommended
            </h1>
            <p className="mt-6 text-base sm:text-lg text-body leading-relaxed">
              Traditional SEO optimizes pages for crawlers, rankings, and human readers. Embedding-level GEO goes one layer deeper — engineering the semantic conditions under which AI systems are most likely to choose your brand as the answer.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-mono uppercase tracking-widest text-body">
              <span className="inline-flex items-center gap-2"><BookOpen className="size-3.5" /> 14 min read</span>
              <span className="inline-flex items-center gap-2"><Calendar className="size-3.5" /> Updated April 2026</span>
              <span className="inline-flex items-center gap-2"><FileText className="size-3.5" /> By Mark Huntley, J.D.</span>
            </div>
          </div>

          <figure className="relative overflow-hidden rounded-2xl border border-border/60 aspect-[4/5] bg-secondary shadow-[0_20px_50px_-20px_hsl(var(--primary)/0.25)]">
            <img
              src={heroImage}
              alt="Abstract visualization of semantic vector space and AI retrieval"
              width={800}
              height={1000}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent" />
            <figcaption className="absolute bottom-3 left-4 right-4 font-mono text-[10.5px] tracking-[0.18em] uppercase text-foreground/90">
              Vector space · Retrieval layer
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Body with sticky TOC */}
      <section className="py-16">
        <div className="mx-auto max-w-[1400px] px-6 grid lg:grid-cols-12 gap-12">
          {/* Sticky left sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24">
              <p className="font-mono text-[13px] tracking-[0.16em] text-body mb-4">ON THIS PAGE</p>
              <TocList />

              <div className="mt-8 pt-6 border-t border-border">
                <p className="font-mono text-[12px] tracking-[0.16em] text-body mb-3">SHARE</p>
                <div className="flex items-center gap-2">
                  <a aria-label="Share on LinkedIn" href={`https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== "undefined" ? encodeURIComponent(window.location.href) : ""}`} target="_blank" rel="noreferrer" className="size-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                    <Linkedin className="size-4" />
                  </a>
                  <a aria-label="Share on X" href={`https://twitter.com/intent/tweet?url=${typeof window !== "undefined" ? encodeURIComponent(window.location.href) : ""}`} target="_blank" rel="noreferrer" className="size-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                    <Twitter className="size-4" />
                  </a>
                  <button aria-label="Copy link" onClick={copyLink} className="size-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                    {copied ? <Check className="size-4 text-primary" /> : <LinkIcon className="size-4" />}
                  </button>
                </div>
              </div>

              {/* Sidebar CTA */}
              <div className="mt-8 card-premium p-6">
                <p className="font-mono text-[12px] tracking-[0.16em] text-primary">ENTERPRISE AUDIT</p>
                <h3 className="display text-lg mt-2">See where your brand sits in vector space.</h3>
                <p className="text-sm text-body mt-3">A diagnostic across Google, AI answers, and citation sources.</p>
                <Button asChild className="mt-5 w-full rounded-full font-mono text-[12px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 h-11">
                  <Link to="/request-audit">REQUEST AUDIT</Link>
                </Button>
              </div>
            </div>
          </aside>

          {/* Article */}
          <article className="lg:col-span-9 max-w-3xl">
            {/* Key takeaways callout */}
            <div className="card-premium p-7 mb-12">
              <p className="font-mono text-[12px] tracking-[0.16em] text-primary">KEY TAKEAWAYS</p>
              <ul className="mt-4 space-y-2.5">
                {takeaways.map((t) => (
                  <li key={t} className="flex gap-3 text-sm text-body leading-relaxed">
                    <span className="mt-2 size-1.5 rounded-full bg-primary shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Section id="intro">
              <p>CiteWorks Studio's framing goes one layer deeper than traditional SEO. On its own site, the firm describes its work as centered on <em>embedding-level GEO, vector optimization, and cosine gap engineering</em>, and its process page says the methodology can include semantic vector indexing of cited pages, retrieval-alignment analysis, and cosine-gap comparison. In other words, CiteWorks is not only trying to improve what a page says on the surface. It is trying to improve how that page, and the brand behind it, are <strong>represented inside the semantic retrieval systems</strong> that increasingly shape AI answers and recommendations.</p>
              <p>That makes embedding-level GEO one of the clearest ways to explain what CiteWorks is actually doing in the AI search era. GEO — generative engine optimization — improves the chances that AI systems use and cite your brand or content. Embedding-level GEO extends that idea by focusing on the representation layer underneath retrieval: the vector relationships, semantic closeness, entity clarity, and evidence patterns that determine whether your content is merely present on the web or actually retrieved, trusted, and reused by AI systems.</p>
            </Section>

            <Section id="definition" title="Definition">
              <Pullquote>
                Embedding-level GEO optimizes how your brand's content, entities, evidence, and supporting third-party context sit inside the semantic vector space AI retrieval systems use to find relevant material.
              </Pullquote>
              <p>Instead of asking only whether a page ranks, it asks whether the page is <strong>semantically aligned</strong> with the kinds of prompts buyers ask, whether it is close enough in vector space to the competing documents already being surfaced, and whether the surrounding evidence layer makes the brand easy for AI systems to interpret and recommend. That framing is consistent with CiteWorks' published methodology, which starts with search demand and recommendation environments, then moves into prompt clusters, cited-page comparison, retrieval alignment, citation architecture, and cross-channel execution.</p>
            </Section>

            <Section id="why-now" title="Why this matters now">
              <p>Search discovery no longer happens on Google alone. Buyers move between search results, AI answers, reviews, community threads, videos, and comparison pages before deciding who to trust. Search visibility has become one connected system across Google, AI recommendation environments, and the public sources that shape both. If AI systems are summarizing from the broader evidence layer around a category, then winning only at the page-title level is not enough. Your brand has to be legible to the retrieval layer that chooses what gets pulled into the answer.</p>
              <p>The computer science behind this is well established. <strong>Retrieval-Augmented Generation (RAG)</strong> improved knowledge-intensive generation by combining a model with an external dense vector index of documents. <strong>Dense Passage Retrieval</strong> showed that dense representations can beat a strong BM25 baseline by 9–19% absolute on top-20 passage retrieval accuracy in open-domain QA. <strong>ColBERTv2</strong> pushed this further by showing retrieval quality improves when systems move from single-vector matching to multi-vector late interaction. The lesson is simple: if AI systems retrieve semantically, then semantic alignment is a visibility problem, not just a modeling detail.</p>
              <p>That is why <em>cosine gap engineering</em> is commercially useful. Sentence-BERT was built specifically to create sentence embeddings that can be compared using cosine similarity. When CiteWorks talks about cosine-gap modeling, the business meaning is that some brands are "farther away" than they should be from the prompt, comparison, or recommendation contexts they want to win. The goal is to close that semantic distance so the brand becomes more retrievable, more comparable, and more recommendation-eligible.</p>
            </Section>

            <Section id="fix" title="What embedding-level GEO is really trying to fix">
              <p>Classic on-page SEO often assumes that if the page contains the right terms, covers the topic, and earns authority, visibility will follow. In AI search, that is only part of the equation. AI systems increasingly synthesize answers from a mix of websites, reviews, forums, editorial explainers, and public discussion. A brand can have decent rankings and still lose if the semantic evidence layer around the brand is weak, competitor-skewed, or structurally easier for retrieval systems to use.</p>
              <p>So embedding-level GEO is not just "write for AI." It is a more exact discipline built around several questions:</p>
              <ul>
                <li>Are your most important pages clearly aligned with the high-intent prompt clusters that map to revenue?</li>
                <li>Are the pages AI systems already cite in your category semantically closer to the commercial questions than your pages are?</li>
                <li>Do the third-party sources shaping recommendations reinforce your intended authority, or teach the machine a weaker story?</li>
                <li>Is your site structurally clear enough — entities, hierarchy, schema, evidence — to be interpreted well by both search engines and retrieval systems?</li>
              </ul>
              <p>Those are not abstract questions. They are the operational layer of AI search visibility.</p>
            </Section>

            <InlineCTA />

            <Section id="process" title="The CiteWorks process behind embedding-level visibility">
              <p>This is not a one-off content tactic. The published process is audit-first and evidence-led.</p>
              <p>It begins with defining the highest-intent demand: mapping the keyword clusters closest to revenue, benchmarking current rankings, and identifying which domains already control page one. Then CiteWorks audits the recommendation environment around those searches — best-of pages, reviews, comparison pages, explainers, and other third-party content already influencing buyer decisions. After that comes the owned-site foundation audit: technical SEO, schema, crawlability, indexation, internal linking, content hierarchy, entity clarity, and site architecture.</p>
              <p>The next move is where embedding-level logic becomes explicit. CiteWorks turns keyword demand into AI prompt demand, studies how brands are surfaced in prompts tied to pricing, alternatives, trust, reviews, and "best" questions, then compares the pages AI systems are already citing against the client's pages. This stage can include deeper semantic indexing, cited-page comparison, retrieval-alignment analysis, and cosine-gap modeling to understand <em>why</em> certain pages are selected over others. That is the core of embedding-level GEO: diagnosing why the system is choosing one semantic representation over another.</p>
              <p>From there, CiteWorks builds the citation architecture — mapping the editorial domains, review sites, comparison pages, forums, community threads, social platforms, video surfaces, and trust sources shaping how the category is interpreted. Then it decides what needs to be improved, supported, added, or redistributed. Finally, it executes across the full visibility environment: on-site fixes, schema and technical work, content improvements, social and video support, discussion-led content, review-environment strategy, and authority-platform work — one coordinated system for Google, AI, and the sources that shape both.</p>
            </Section>

            <Section id="vs-seo" title="How embedding-level GEO differs from classic SEO">
              <p>The simplest distinction: traditional SEO tries to help pages get <em>found</em>; embedding-level GEO tries to help pages get <em>retrieved correctly, interpreted correctly, and reused correctly</em> inside AI-generated answers. That is not a replacement for SEO. Technical SEO, schema, on-page structure, and content hierarchy still matter. The difference is that those elements are treated as part of a larger machine-interpretation problem rather than an isolated ranking problem.</p>

              <div className="my-8 rounded-2xl border border-border overflow-hidden">
                <div className="grid grid-cols-2 bg-card/50 px-6 py-4 font-mono text-[12px] tracking-widest text-body">
                  <div>TRADITIONAL SEO</div>
                  <div>EMBEDDING-LEVEL GEO</div>
                </div>
                {[
                  ["Optimizes for crawlers and rankings", "Optimizes for retrieval systems and recommendation"],
                  ["Page-level keyword coverage", "Semantic alignment with prompt clusters"],
                  ["Backlinks as authority", "Citation architecture across the evidence layer"],
                  ["Reports rank position", "Reports recommendation placement and citation density"],
                  ["Owned-site focus", "Owned + third-party source environment"],
                ].map(([a, b], i) => (
                  <div key={i} className="grid grid-cols-2 px-6 py-4 border-t border-border text-sm">
                    <div className="text-body pr-4">{a}</div>
                    <div className="text-foreground">{b}</div>
                  </div>
                ))}
              </div>

              <p>Reporting also does not flatten everything into one visibility number. CiteWorks tracks high-intent keyword cluster rankings, recommendation placement in high-intent prompt clusters, movement from presence into recommendation, citation-source strength, competitor gap movement, and qualified traffic growth. The point is not simply to appear more often, but to become easier for machines to find, trust, compare, and choose.</p>
            </Section>

            <Section id="what-changes" title="What changes when you optimize at the embedding level">
              <p>When a brand starts optimizing for embedding-level AI search visibility, the work changes in several practical ways.</p>
              <ol>
                <li><strong>Content is judged by semantic shape, not topical coverage.</strong> Whether content matches the semantic shape of high-intent questions and provides the evidence retrieval systems favor — supported by RAG, DPR, and ColBERTv2 — matters more than length or keyword density.</li>
                <li><strong>Entity clarity becomes critical.</strong> Ambiguity at the representation layer reduces how well a site is interpreted by both classic and machine retrieval systems. Brand, product, category, and comparative claims become retrieval inputs, not just messaging choices.</li>
                <li><strong>Third-party context becomes inseparable from owned optimization.</strong> AI answers are often shaped by public sources surrounding the brand, not just the brand's pages. Authority-source strategy, citation architecture, and off-site reinforcement become part of the same visibility system.</li>
                <li><strong>Recommendation outcomes become a more meaningful KPI than raw mentions.</strong> Retrieval systems do not merely "notice" content — they assemble an answer hierarchy from selected evidence. The real question is whether your brand becomes one of the semantically supported choices the model recommends.</li>
              </ol>
            </Section>

            <Section id="case-studies" title="What the case studies suggest">
              <div className="grid sm:grid-cols-2 gap-4 my-8">
                <CaseStat label="Tax Relief" value="+112.5%" sub="AI Overviews brand mentions across 19 high-intent tax queries in one month" />
                <CaseStat label="Crypto Wallets" value="+120%" sub="AI Overviews mentions across 80 high-intent wallet queries in two months" />
                <CaseStat label="Household Appliances" value="+400%" sub="ChatGPT brand mentions across 100+ high-intent queries" />
                <CaseStat label="Pest Control" value="Page 1" sub="Visibility built where decision-stage discussions shape homeowner choice" />
              </div>
              <p>In <strong>tax relief</strong>, the firm analyzed how major AI tools described the brand and what sources they relied on, then tracked citation patterns across AI Overviews, ChatGPT, Gemini, AI Mode, Perplexity, and Copilot. The campaign focused on improving the quality and accuracy of brand context across the sources AI systems were already referencing — improve the supporting semantic evidence, then measure whether the brand becomes easier for systems to retrieve and frame favorably.</p>
              <p>In <strong>crypto wallets</strong>, public community forums were already among the brand's most-cited sources, so the work focused on strengthening accurate, positive brand context inside those environments instead of relying on generic blog production. 100+ citation-bearing engagements per month and 300+ high-impact cited pages with strengthened brand context. The logic is representation-first: improve the source set AI already relies on, and the brand's semantic footprint inside retrieval systems improves over time.</p>
              <p>In <strong>household appliances</strong>, shoppers were increasingly using online communities and AI summaries to compare products, so the brand needed visibility where recommendations were formed, not just on product pages. AI search visibility depends on the evidence environment surrounding the brand, not just its owned pages.</p>
              <p>In <strong>pest control</strong>, the challenge was to improve how consistently the brand appeared across the source environments influencing both traditional search and AI-generated answers — building visibility where practical questions turn into service decisions.</p>
              <div className="mt-6">
                <Link to="/case-studies" className="inline-flex items-center gap-2 font-mono text-[13px] tracking-widest text-primary hover:gap-3 transition-all">
                  EXPLORE ALL CASE STUDIES <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </Section>

            <Section id="research" title="The research basis for the concept">
              <p>Although "embedding-level GEO" is CiteWorks' own language, the underlying mechanics line up with established research:</p>
              <ul>
                <li><strong>Sentence-BERT</strong> showed that semantically meaningful sentence embeddings can be compared efficiently with cosine similarity — making similarity-based semantic matching practical at scale.</li>
                <li><strong>Dense Passage Retrieval (DPR)</strong> showed dense representations materially improve passage retrieval in open-domain QA.</li>
                <li><strong>ColBERTv2</strong> demonstrated multi-vector late interaction improves retrieval quality further by preserving finer-grained token-level relevance.</li>
                <li><strong>RAG</strong> established the now-standard pattern of combining a model with external retrieved evidence from a dense vector index.</li>
                <li><strong>Self-RAG, WebGPT, and ALCE</strong> reinforce the broader point that retrieval quality, citation support, and evidence-grounded generation improve factuality and verifiability.</li>
              </ul>
              <p>Together, those papers make the strategic rationale very strong: what matters is not only what is published, but how retrieval systems encode, find, compare, and support it.</p>
            </Section>

            <Section id="summary" title="The simplest way to explain it">
              <Pullquote>
                Embedding-level GEO is the practice of improving how your content and brand are represented inside the semantic retrieval systems AI platforms use to form answers.
              </Pullquote>
              <p>It goes beyond classic SEO by optimizing not just for rankings and readers, but for vector relevance, citation support, retrieval alignment, and the source architecture that determines whether your brand is surfaced, trusted, and recommended.</p>
            </Section>

            <Section id="closing" title="Closing view">
              <p>Traditional SEO asks whether your page can rank. Embedding-level GEO asks whether your brand can become <strong>machine-legible authority</strong> inside the retrieval layer that now shapes discovery, interpretation, and recommendation. The ambition is explicit: improve how brands rank, how they are cited, how they are framed, and how often they are recommended.</p>
              <p>Embedding-level AI search visibility is the deeper strategic name for that work. It is the move from page optimization to representation optimization — from publishing content to engineering the semantic conditions under which AI systems are most likely to choose your brand as the answer.</p>
            </Section>

            <Section id="key-takeaways" title="Key takeaways">
              <ul>
                {takeaways.map((t) => (<li key={t}>{t}</li>))}
              </ul>
            </Section>

            <Section id="glossary" title="Glossary">
              <dl className="space-y-5">
                {glossary.map((g) => (
                  <div key={g.t} className="border-l-2 border-primary/40 pl-5">
                    <dt className="font-mono text-[13px] tracking-widest text-primary uppercase">{g.t}</dt>
                    <dd className="mt-2 text-body">{g.d}</dd>
                  </div>
                ))}
              </dl>
            </Section>

            <Section id="faq" title="Frequently asked questions">
              <Accordion type="single" collapsible className="not-prose">
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`f-${i}`} className="border-border">
                    <AccordionTrigger className="text-left text-base font-medium hover:text-primary hover:no-underline py-5">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-body leading-relaxed pb-5">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Section>

            <Section id="next" title="Next steps">
              <p>If your brand is investing in SEO and content but losing visibility inside AI answers, comparisons, and recommendation environments, the gap is almost always at the representation layer — not the publishing layer. An enterprise audit identifies exactly where that gap sits and what needs to change.</p>
            </Section>

            {/* Author card */}
            <div className="mt-16 card-premium p-8">
              <p className="font-mono text-[12px] tracking-[0.16em] text-primary">ABOUT THE AUTHOR</p>
              <div className="mt-4 flex items-start gap-5">
                <div className="size-14 rounded-full bg-gradient-to-br from-primary/30 to-primary/5 border border-primary/30 flex items-center justify-center font-mono text-lg text-primary shrink-0">MH</div>
                <div>
                  <h3 className="display text-xl">Mark Huntley, J.D.</h3>
                  <p className="text-sm text-body mt-2 leading-relaxed">
                    Founder of CiteWorks Studio, a strategic advisory focused on visibility, authority, and recommendation presence in AI-shaped search environments. His work centers on embedding-level GEO, vector optimization, and cosine gap engineering — helping brands align their digital presence with the retrieval systems that increasingly shape discovery, interpretation, and choice.
                  </p>
                </div>
              </div>
            </div>

            {/* Final CTA block */}
            <div className="mt-12 rounded-3xl border border-border overflow-hidden bg-gradient-to-br from-primary/5 via-card to-card p-8 sm:p-10">
              <p className="font-mono text-[12px] tracking-[0.16em] text-primary">ENTERPRISE AUDIT</p>
              <h3 className="display text-2xl sm:text-3xl mt-3">See where your brand sits in the retrieval layer.</h3>
              <p className="mt-4 text-body max-w-2xl">
                We map your visibility across Google, AI recommendation environments, citation sources, technical SEO, and competitor positioning — then turn that into a practical roadmap.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-12">
                  <Link to="/request-audit">REQUEST AN ENTERPRISE AUDIT</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] border-foreground/35 hover:bg-foreground/5 px-7 h-12">
                  <Link to="/ai-search-optimization">EXPLORE AI SEARCH OPTIMIZATION</Link>
                </Button>
              </div>
            </div>

            {/* Related */}
            <div className="mt-16">
              <p className="font-mono text-[13px] tracking-[0.16em] text-body">RELATED RESOURCES</p>
              <div className="mt-5 grid sm:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link key={r.title} to="/resources" className="card-premium p-5 hover:border-primary/40 transition-colors group">
                    <h4 className="display text-base">{r.title}</h4>
                    <p className="text-xs text-body mt-2 leading-relaxed">{r.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-1 font-mono text-[12px] tracking-widest text-primary group-hover:gap-2 transition-all">
                      READ <ArrowUpRight className="size-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>
    </PageShell>
  );
};

const TocList = () => (
  <ul className="space-y-1.5 border-l border-border">
    {toc.map((i) => (
      <li key={i.id}>
        <a
          href={`#${i.id}`}
          className="block pl-4 -ml-px py-1.5 text-xs font-mono tracking-wide border-l border-transparent text-body hover:text-foreground hover:border-primary transition-colors"
        >
          {i.label}
        </a>
      </li>
    ))}
  </ul>
);

const Section = ({ id, title, children }: { id: string; title?: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-28 mt-14 first:mt-0">
    {title && <h2 className="display text-2xl sm:text-3xl mb-5">{title}</h2>}
    <div className="prose-article">{children}</div>
  </section>
);

const Pullquote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="my-7 border-l-2 border-primary pl-6 py-1 text-lg sm:text-xl text-foreground leading-relaxed font-medium not-italic">
    {children}
  </blockquote>
);

const CaseStat = ({ label, value, sub }: { label: string; value: string; sub: string }) => (
  <div className="card-premium p-6">
    <p className="font-mono text-[11px] tracking-widest text-primary uppercase">{label}</p>
    <p className="display text-3xl mt-2">{value}</p>
    <p className="text-xs text-body mt-2 leading-relaxed">{sub}</p>
  </div>
);

const InlineCTA = () => (
  <div className="my-12 rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-5">
    <div className="flex-1">
      <p className="font-mono text-[12px] tracking-[0.16em] text-primary">DIAGNOSTIC</p>
      <h3 className="display text-lg mt-1">Find your cosine gap before competitors close it.</h3>
    </div>
    <Button asChild className="rounded-full font-mono text-[12px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-6 shrink-0">
      <Link to="/request-audit">REQUEST AUDIT</Link>
    </Button>
  </div>
);

export default EmbeddingLevelGEO;
