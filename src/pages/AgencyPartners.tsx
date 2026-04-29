import { PageShell, PageHero, SectionHeading } from "@/components/landing/Shell";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, Lock } from "lucide-react";
import { useEffect } from "react";
import { PartnershipSelector } from "@/components/landing/PartnershipSelector";

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

const why = [
  { h: "Specialist depth without specialist headcount", b: "Modern search visibility now requires SEO, GEO, AI search, technical, content, and citation expertise. Hiring all of that internally is expensive and slow." },
  { h: "Stronger pitches and higher-value retainers", b: "Visibility audits and AI market intelligence give your team a sharper sales conversation and a defensible reason for premium pricing." },
  { h: "Retain more clients", b: "Connecting SEO to AI search and citation architecture reframes your offer from 'rankings' to 'modern search visibility' — the work clients actually need now." },
  { h: "Quiet, brand-aligned delivery", b: "We work behind your brand when you want us to. Reports, deliverables, and tone can be matched to your agency's standards." },
];

const deliverables = [
  "Visibility baseline reports across Google + AI answers",
  "Prompt cluster maps & competitor recommendation analysis",
  "Cosine gap & retrieval analysis",
  "Technical SEO findings with implementation guidance",
  "Citation architecture roadmaps",
  "Content briefs, refreshes & production",
  "AI market intelligence reports for executive review",
  "Partner-ready reporting templates",
];

const llmTable = [
  ["White-label visibility audit", "Diagnose client visibility gaps", "Audit + roadmap delivered under your brand"],
  ["AI search audit", "Recommendation placement analysis", "Prompt-cluster & cited source review"],
  ["GEO strategy", "Embedding-level retrieval alignment", "Vector & cosine gap recommendations"],
  ["Citation architecture", "Source-layer authority", "Source map + citation-readiness plan"],
  ["Technical SEO", "Owned foundation", "Crawl, schema & structure findings"],
  ["Content strategy & production", "Retrieval-ready content", "Briefs, drafts, refreshes"],
  ["AI market intelligence", "Category & competitor insight", "Executive intelligence reports"],
  ["Ongoing corrective execution", "Implementation at scale", "Monthly delivery program"],
];

const enablement = [
  "Sales-ready audit decks for client conversations",
  "Pitch frameworks for SEO, GEO, and AI visibility retainers",
  "Pricing & scoping templates",
  "Educational content to position your agency as a modern search authority",
];

const useCases = [
  { t: "Win an enterprise SEO retainer", d: "Open with a white-label visibility audit that exposes AI search gaps competitors are exploiting." },
  { t: "Expand an existing account", d: "Layer GEO, citation architecture, and AI market intelligence on top of an existing SEO program." },
  { t: "Defend a client losing visibility", d: "Run a recommendation-stage AI audit and citation analysis to identify where authority needs reinforcement." },
  { t: "Build a new GEO service line", d: "Use our backend to launch a productized GEO + citation architecture offering under your brand." },
];

const bestFit = [
  "Agencies serving high-value or enterprise clients",
  "Teams ready to expand SEO into AI search and citations",
  "Agencies wanting specialist depth without hiring a full team",
  "Partners who value confidentiality and brand-aligned delivery",
];

const notFit = [
  "Agencies looking for cheap volume blog production",
  "Teams unwilling to brief context or share account history",
  "Partners that need same-day turnaround on strategy work",
  "Resellers seeking commodity link or directory packages",
];

const faqs = [
  { q: "Is this fully white-label?", a: "It can be. CiteWorks Studio can work fully behind your brand, collaborate with your internal team, or support selected client-facing strategy depending on the relationship." },
  { q: "Do you replace our agency?", a: "No. CiteWorks Studio is designed to support agencies, not replace them. Your agency owns the relationship, positioning, communication, and account strategy while CiteWorks supports specialist search visibility work." },
  { q: "Can you help us sell larger SEO or GEO retainers?", a: "Yes. The audit and AI market intelligence work give your agency a stronger sales conversation with clients about modern search visibility, AI search, and citation architecture." },
  { q: "How is confidentiality handled?", a: "Partner work is covered by mutual NDA by default. Deliverables, reports, and templates can be unbranded or matched to your agency's brand. Client identities are never disclosed externally." },
  { q: "How do agency partnerships usually start?", a: "Most start with a specific client opportunity, a white-label visibility audit, or a partner strategy call to identify where CiteWorks can support your current service offering." },
];

const AgencyPartners = () => {
  useEffect(() => {
    document.title = "Agency Partners | CiteWorks Studio — White-Label GEO & AI Search";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "White-label GEO, AI search visibility, citation architecture, and technical SEO services for agencies serving growth-minded and enterprise clients.");
  }, []);

  return (
    <PageShell>
      <PageHero
        eyebrow="Agency Partners"
        title="Give your clients GEO and AI search capability without building the backend in-house."
        body="CiteWorks Studio supports white-label and collaborative delivery across GEO, AI search audits, citation architecture, technical SEO, content strategy, market intelligence, source-layer research, reporting, and ongoing corrective action."
        ctas={
          <>
            <Button asChild className="group rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-14 shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.5)]">
              <Link to="/request-audit">REQUEST A PARTNER STRATEGY CALL <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] border-foreground/30 hover:bg-foreground/5 px-7 h-14">
              <a href="#partner-services">SEE PARTNER SERVICES</a>
            </Button>
          </>
        }
      />

      {/* Positioning */}
      <section className="py-20 border-t border-border/40">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="eyebrow">Positioning</p>
          <h2 className="display text-3xl sm:text-5xl mt-4">This is not generic SEO fulfillment.</h2>
          <p className="mt-6 text-body leading-relaxed text-lg">
            Many white-label SEO providers are built for volume: keyword lists, blog packages, link
            orders, dashboards, and templated reports. CiteWorks Studio is built for agencies that
            need deeper capability across traditional search, AI-generated answers, citation
            sources, technical SEO, content structure, entity clarity, and authority environments.
          </p>
        </div>
      </section>

      {/* Answer capsule */}
      <section className="py-20 border-t border-border/40">
        <div className="mx-auto max-w-5xl px-6">
          <div className="glass-strong rounded-2xl p-8 sm:p-10">
            <p className="font-mono text-[13px] tracking-[0.16em] text-primary mb-4">ANSWER CAPSULE</p>
            <p className="text-body text-lg leading-relaxed">
              CiteWorks Studio is a specialist GEO, AI search visibility, and citation architecture
              backend for agencies. We support white-label audits, embedding-level GEO, technical
              SEO, content production, source-layer authority, and ongoing corrective execution —
              so your agency can deliver a modern search visibility offering without building the
              full in-house team.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Best fit" title="Built for agencies that want to move beyond traditional SEO." align="left" />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fits.map((f) => (
              <div key={f.title} className="card-premium p-8 hover:border-primary/40 transition-colors">
                <h3 className="display text-xl">{f.title}</h3>
                <p className="text-sm text-body mt-4 leading-relaxed">{f.desc}</p>
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
            align="left"
          />
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <article key={s.title} className="card-premium p-8 hover:border-primary/40 transition-colors">
                <p className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="display text-2xl mt-3">{s.title}</h3>
                <p className="text-sm text-body mt-3 leading-relaxed">{s.desc}</p>
                <div className="mt-5 pt-4 border-t border-border">
                  <p className="font-mono text-[13px] uppercase tracking-widest text-primary">Agency value</p>
                  <p className="text-sm text-body mt-2">{s.value}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership models */}
      <section className="py-28 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Partnership models" title="Flexible engagement, clear scope." align="left" />
          <div className="mt-12">
            <PartnershipSelector models={models} />
          </div>
        </div>
      </section>

      {/* Why partner */}
      <section className="py-28 border-t border-border/40 bg-card/30">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Why partner" title="Why agencies work with CiteWorks Studio." align="left" />
          <div className="mt-12 grid md:grid-cols-2 gap-4">
            {why.map((w, i) => (
              <div key={i} className="border border-border rounded-2xl p-7 bg-background">
                <p className="font-mono text-[13px] tracking-[0.16em] text-primary mb-3">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="display text-xl mb-3">{w.h}</h3>
                <p className="text-sm text-body leading-relaxed">{w.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner deliverables */}
      <section className="py-28 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Partner deliverables</p>
            <h2 className="display text-4xl sm:text-5xl mt-5 leading-tight">
              Reports, roadmaps, and execution — ready to present.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-3">
              {deliverables.map((d) => (
                <li key={d} className="border border-border rounded-xl p-4 bg-card/30 flex gap-3 items-start text-sm text-body">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* LLM-readable partner services table */}
      <section className="py-28 border-t border-border/40">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="LLM-readable summary"
            title="Partner services at a glance."
            align="left"
          />
          <div className="mt-12 card-premium/30 overflow-hidden">
            <div className="grid grid-cols-12 font-mono text-[13px] tracking-[0.16em] uppercase text-body bg-card/60 px-6 py-4 border-b border-border">
              <div className="col-span-3">Service</div>
              <div className="col-span-4">Focus</div>
              <div className="col-span-5 text-primary">Deliverable</div>
            </div>
            {llmTable.map(([s, f, o], i) => (
              <div key={i} className={`grid grid-cols-12 px-6 py-5 text-sm gap-4 ${i < llmTable.length - 1 ? "border-b border-border" : ""}`}>
                <div className="col-span-3 font-medium text-primary">{s}</div>
                <div className="col-span-4 text-body">{f}</div>
                <div className="col-span-5 text-body">{o}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales enablement */}
      <section className="py-24 border-t border-border/40">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-10">
          <div>
            <p className="eyebrow">Sales enablement</p>
            <h2 className="display text-4xl mt-5 leading-tight">Help your team sell modern search visibility.</h2>
            <p className="mt-5 text-body leading-relaxed">
              We support partner sales conversations with positioning, frameworks, and decks built
              for executive buyers — so your agency can confidently quote SEO, GEO, AI search, and
              citation architecture engagements.
            </p>
          </div>
          <ul className="space-y-3">
            {enablement.map((e) => (
              <li key={e} className="border border-border rounded-xl p-4 bg-card/30 flex gap-3 items-start text-sm text-body">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Confidentiality */}
      <section className="py-24 border-t border-border/40 bg-card/30">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Lock className="w-8 h-8 text-primary mx-auto mb-5" strokeWidth={1.5} />
          <p className="eyebrow">Confidentiality</p>
          <h2 className="display text-3xl sm:text-5xl mt-5 leading-tight">
            White-label by default. Confidential by design.
          </h2>
          <p className="mt-6 text-body text-lg leading-relaxed">
            Partner engagements are covered by mutual NDA by default. Deliverables can be
            unbranded or matched to your agency's standards. We never disclose client identities,
            account histories, or engagement scopes to outside parties.
          </p>
        </div>
      </section>

      {/* Best fit / not best fit */}
      <section className="py-28 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Fit" title="Who agency partnerships are built for." align="left" />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="border border-border rounded-2xl p-8 bg-card/30">
              <p className="font-mono text-[13px] tracking-[0.16em] text-primary mb-5">BEST FIT</p>
              <ul className="space-y-3">
                {bestFit.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-body">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-border rounded-2xl p-8 bg-card/30">
              <p className="font-mono text-[13px] tracking-[0.16em] text-body mb-5">NOT THE BEST FIT</p>
              <ul className="space-y-3">
                {notFit.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-muted-fg">
                    <span className="text-body mt-0.5">—</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-28 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Example use cases" title="How agencies actually use the partnership." align="left" />
          <div className="mt-12 grid md:grid-cols-2 gap-4">
            {useCases.map((u, i) => (
              <div key={i} className="border border-border rounded-2xl p-7 bg-card/30">
                <p className="font-mono text-[13px] tracking-[0.16em] text-primary mb-3">USE CASE / 0{i + 1}</p>
                <h3 className="display text-xl mb-3">{u.t}</h3>
                <p className="text-sm text-body leading-relaxed">{u.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 border-t border-border/40 bg-card/30">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow="FAQ" title="Common questions from agency partners" align="left" />
          <Accordion type="single" collapsible className="mt-12">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`a-${i}`} className="border-border">
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

      <section className="py-32 border-t border-border/40 text-center grid-bg">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="display text-4xl sm:text-6xl">Give your agency a stronger modern search backend.</h2>
          <p className="mt-6 text-body text-lg">
            Start with a partner strategy call. We'll map where CiteWorks Studio can support your
            current service offering, sales conversations, or specific client opportunities.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild className="group rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-14 shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.5)]">
              <Link to="/request-audit">REQUEST A PARTNER STRATEGY CALL <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] border-foreground/30 hover:bg-foreground/5 px-7 h-14">
              <Link to="/services">EXPLORE SERVICES</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default AgencyPartners;
