import { PageShell, PageHero, SectionHeading } from "@/components/landing/Shell";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const fits = [
  { title: "SEO Agencies", desc: "For agencies that already offer SEO but need stronger GEO, AI search visibility, citation architecture, and source-layer strategy." },
  { title: "Content Agencies", desc: "For agencies that create content but need better visibility intelligence, prompt mapping, entity clarity, and AI retrieval alignment." },
  { title: "Web & Branding Agencies", desc: "For agencies building websites and rebrands that need search and AI visibility strategy built into the foundation." },
  { title: "PR & Authority Agencies", desc: "For agencies focused on mentions and reputation that want to connect third-party sources to AI search and citation architecture." },
  { title: "Paid Media Agencies", desc: "For agencies that want to help clients reduce dependency on paid traffic by strengthening organic and AI-driven discovery." },
  { title: "Full-Service Marketing Agencies", desc: "For agencies that need a specialist backend for modern search visibility without hiring an entire SEO, GEO, content, and technical team." },
];

const services = [
  { title: "White-Label Visibility Audits", desc: "Audit a client's visibility across Google rankings, AI answers, prompt clusters, competitor positioning, technical SEO, content, citation sources, and source-layer authority.", value: "Give clients a clearer diagnosis and a stronger reason to invest in ongoing strategy." },
  { title: "AI Search Audits & Recommendation Analysis", desc: "Analyze how a client appears, disappears, gets cited, or loses recommendation placement across AI-generated search environments.", value: "Help clients understand whether they are being retrieved, cited, and recommended when buyers ask AI systems who to trust." },
  { title: "GEO Strategy & Embedding-Level Optimization", desc: "Move beyond surface-level AI search advice into semantic retrieval strategy: vector relevance, cosine gaps, entity mapping, and category-language alignment.", value: "Give clients a defensible AI search strategy based on meaning and source support." },
  { title: "Citation Architecture", desc: "Identify the owned and third-party sources that influence client visibility across AI answers, Google, and buyer research environments.", value: "Strengthen the public evidence layer that supports trust and AI recommendations." },
  { title: "Technical SEO & Site Structure", desc: "Crawlability, indexation, internal linking, schema, page structure, and entity mapping for service and product pages.", value: "Strengthen the client's owned foundation before investing heavily in content or citations." },
  { title: "Content Strategy, Briefs & Production", desc: "Service pages, comparison pages, FAQ, glossary content, educational articles, and content refreshes built for rankings, retrieval, and citation readiness.", value: "Replace 'content calendars' with content tied to retrieval and recommendation goals." },
  { title: "AI Market Intelligence", desc: "Prompt-cluster insights, source influence mapping, category framing analysis, recoverability assessment, and executive-ready reporting.", value: "Strategic clarity, not just reporting." },
  { title: "Ongoing Corrective-Action Support", desc: "Turn audit findings into implementation across SEO, GEO, content, technical optimization, citation architecture, and source-layer authority.", value: "Scalable delivery without building the full team." },
];

const models = [
  { n: "01", title: "White-Label Backend", desc: "CiteWorks Studio works behind your brand. Your agency owns the client relationship, communication, presentation, and delivery experience." },
  { n: "02", title: "Specialist Strategy Partner", desc: "We support your team with audits, strategy, technical review, GEO analysis, citation architecture, or AI market intelligence." },
  { n: "03", title: "Collaborative Delivery Partner", desc: "We share execution with your internal team — joining selected client conversations only when useful." },
];

const faqs = [
  { q: "Is this fully white-label?", a: "It can be. CiteWorks Studio can work fully behind your brand, collaborate with your internal team, or support selected client-facing strategy depending on the relationship." },
  { q: "Do you replace our agency?", a: "No. CiteWorks Studio is designed to support agencies, not replace them. Your agency owns the relationship, positioning, communication, and account strategy while CiteWorks supports specialist search visibility work." },
  { q: "Can you help us sell larger SEO or GEO retainers?", a: "Yes. The audit and AI market intelligence work give your agency a stronger sales conversation with clients about modern search visibility, AI search, and citation architecture." },
  { q: "How do agency partnerships usually start?", a: "Most start with a specific client opportunity, a white-label visibility audit, or a partner strategy call to identify where CiteWorks can support your current service offering." },
];

const AgencyPartners = () => (
  <PageShell>
    <PageHero
      eyebrow="Agency Partners"
      title="Give your clients GEO and AI search capability without building the backend in-house."
      body="CiteWorks Studio supports white-label and collaborative delivery across GEO, AI search audits, citation architecture, technical SEO, content strategy, market intelligence, source-layer research, reporting, and ongoing corrective action."
      ctas={
        <>
          <Button asChild className="rounded-full font-mono text-xs tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-12">
            <Link to="/request-audit">REQUEST A PARTNER STRATEGY CALL</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full font-mono text-xs tracking-widest border-foreground/20 hover:bg-foreground/5 px-7 h-12">
            <a href="#partner-services">SEE PARTNER SERVICES</a>
          </Button>
        </>
      }
    />

    <section className="py-20 border-t border-border/40">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="eyebrow">Positioning</p>
        <h2 className="display text-3xl sm:text-5xl mt-4">This is not generic SEO fulfillment.</h2>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          Many white-label SEO providers are built for volume: keyword lists, blog packages, link orders, dashboards, and templated reports. CiteWorks Studio is built for agencies that need deeper capability across traditional search, AI-generated answers, citation sources, technical SEO, content structure, entity clarity, and authority environments.
        </p>
      </div>
    </section>

    <section className="py-20 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Best fit" title="Built for agencies that want to move beyond traditional SEO." />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fits.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border/60 bg-card p-8 hover:border-primary/40 transition-colors">
              <h3 className="display text-xl">{f.title}</h3>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="partner-services" className="py-28 border-t border-border/40 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Partner services"
          title="What agencies use CiteWorks Studio to deliver."
          body="Support a single client audit, a strategic roadmap, an implementation sprint, or an ongoing white-label visibility program."
        />
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <article key={s.title} className="rounded-2xl border border-border/60 bg-card p-8 hover:border-primary/40 transition-colors">
              <p className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="display text-2xl mt-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{s.desc}</p>
              <div className="mt-5 pt-4 border-t border-border">
                <p className="font-mono text-[10px] uppercase tracking-widest text-primary">Agency value</p>
                <p className="text-sm text-foreground/85 mt-2">{s.value}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="py-28 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Partnership models" title="Flexible engagement, clear scope." />
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {models.map((m) => (
            <div key={m.n} className="rounded-2xl border border-border/60 bg-card p-8 hover:border-primary/40 transition-colors">
              <p className="font-mono text-xs text-primary">{m.n}</p>
              <h3 className="display text-xl mt-3">{m.title}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-28 border-t border-border/40">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="FAQ" title="Common questions from agency partners" />
        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`a-${i}`} className="border-border">
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
        <h2 className="display text-4xl sm:text-6xl">Give your agency a stronger modern search backend.</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button asChild className="rounded-full font-mono text-xs tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-12">
            <Link to="/request-audit">REQUEST A PARTNER STRATEGY CALL</Link>
          </Button>
        </div>
      </div>
    </section>
  </PageShell>
);

export default AgencyPartners;
