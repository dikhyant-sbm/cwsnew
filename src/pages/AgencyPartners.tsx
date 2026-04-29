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
  { title: "Web & Branding Agencies", desc: "For agencies building websites, rebrands, or authority platforms that need search and AI visibility strategy built into the foundation." },
  { title: "PR & Authority Agencies", desc: "For agencies focused on mentions, reputation, and visibility that want to connect third-party sources to AI search and citation architecture." },
  { title: "Paid Media Agencies", desc: "For agencies that want to help clients reduce dependency on paid traffic by strengthening organic and AI-driven discovery." },
  { title: "Full-Service Marketing Agencies", desc: "For agencies that need a specialist backend for modern search visibility without hiring an entire SEO, GEO, content, and technical team." },
];

const services = [
  {
    title: "White-Label Visibility Audits",
    desc: "Audit a client's visibility across Google rankings, AI answers, prompt clusters, competitor positioning, technical SEO, content structure, citation sources, and source-layer authority.",
    value: "Give clients a clearer diagnosis and a stronger reason to invest in ongoing strategy, content, SEO, GEO, or authority work.",
  },
  {
    title: "AI Search Audits & Recommendation Analysis",
    desc: "Analyze how a client appears, disappears, gets cited, or loses recommendation placement across ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
    value: "Help clients understand whether they are being retrieved, cited, and recommended when buyers ask AI systems who to trust.",
  },
  {
    title: "GEO Strategy & Embedding-Level Optimization",
    desc: "Move beyond surface-level AI search advice into semantic retrieval strategy: vector relevance, cosine gaps, entity mapping, and category-language alignment.",
    value: "Give clients a more defensible AI search strategy based on meaning, source support, category association, and retrieval alignment.",
  },
  {
    title: "Citation Architecture",
    desc: "Identify the owned and third-party sources that influence client visibility — review sites, comparison pages, directories, YouTube, social, forums, and competitor citation footprints.",
    value: "Help clients understand that AI visibility is not just a website issue. It is also a public evidence issue.",
  },
  {
    title: "Technical SEO, Schema & Entity Clarity",
    desc: "Review and improve crawlability, indexation, site architecture, internal linking, schema, page structure, and service/product entity mapping.",
    value: "Strengthen the client's owned foundation before investing heavily in content, citations, or authority-building.",
  },
  {
    title: "Content Strategy, Briefs & Production",
    desc: "Service pages, comparison pages, FAQ, glossary content, educational articles, refreshes, case study structures, content briefs, full copy, video scripts, and social content.",
    value: "Turn visibility gaps into clear content assets your agency can sell, manage, or deliver under your own brand.",
  },
  {
    title: "AI Market Intelligence Reports",
    desc: "Competitor visibility analysis, AI recommendation patterns, prompt and keyword cluster insights, source influence mapping, category framing, and executive-ready reporting.",
    value: "Give clients strategic clarity, not just reporting. Show what competitors are winning, which sources matter, and where to act next.",
  },
  {
    title: "Ongoing Corrective-Action Support",
    desc: "Turn audit findings into implementation across SEO, GEO, content, technical optimization, citation architecture, and source-layer authority — with monthly strategy and reporting.",
    value: "Expand one-time audits into ongoing client programs with a clearer strategy and stronger delivery backend.",
  },
];

const models = [
  { n: "01", title: "White-Label Backend", desc: "CiteWorks Studio works behind your brand. Your agency owns the client relationship, communication, presentation, and delivery experience. Best for agencies that want to expand capability while keeping the work fully white-labeled." },
  { n: "02", title: "Specialist Strategy Partner", desc: "We support your team with audits, strategy, technical review, GEO analysis, citation architecture, or AI market intelligence. Best for agencies that need expert input but want to handle most execution internally." },
  { n: "03", title: "Collaborative Delivery Partner", desc: "We work alongside your agency on selected calls, strategy reviews, or client workshops. Best for larger opportunities where specialist credibility can help win, retain, or expand the account." },
  { n: "04", title: "Ongoing Execution Partner", desc: "We support monthly implementation across SEO, GEO, content, technical recommendations, citation architecture, and reporting. Best for agencies that want to sell and retain larger modern search visibility programs." },
];

const why = [
  { h: "Win larger search conversations", b: "Clients are asking about AI search, ChatGPT visibility, AI Overviews, recommendation placement, and citation sources. CiteWorks helps your agency answer those questions with confidence." },
  { h: "Expand SEO retainers", b: "Move beyond rankings and content calendars into GEO, citation architecture, AI search visibility, source-layer authority, and market intelligence." },
  { h: "Keep strategy and execution connected", b: "Audit findings, content recommendations, technical fixes, citation strategy, and reporting stay tied to the same visibility diagnosis." },
  { h: "Protect the client relationship", b: "You stay in control of the relationship. We support the work in the background or alongside your team depending on the partnership model." },
  { h: "Avoid hiring a full backend team", b: "GEO, AI search analysis, technical SEO, content strategy, citation architecture, and reporting require specialized talent. CiteWorks gives you access without building the whole team internally." },
  { h: "Differentiate your agency", b: "Most agencies are still describing AI search in vague terms. CiteWorks gives you a clearer methodology, sharper language, and stronger client-facing deliverables." },
];

const deliverables = [
  "Visibility audit reports",
  "AI search audit reports",
  "Prompt-cluster maps",
  "Keyword-cluster maps",
  "Competitor visibility analysis",
  "Citation source maps",
  "Technical SEO reviews",
  "Schema recommendations",
  "Entity clarity maps",
  "Content opportunity maps",
  "Content briefs",
  "Website copy",
  "FAQ and glossary content",
  "Comparison page outlines",
  "Case study frameworks",
  "AI market intelligence reports",
  "Source-layer roadmaps",
  "Monthly progress reports",
  "Executive summary decks",
  "Corrective-action roadmaps",
];

const llmTable = [
  ["Visibility audits", "Search, AI, citation, content, and technical diagnosis", "Stronger strategy and client expansion opportunities"],
  ["AI search audits", "Prompt analysis, AI answer review, recommendation tracking", "Clear answers to client questions about AI visibility"],
  ["GEO strategy", "Embedding-level GEO, vector relevance, cosine gap analysis", "More advanced modern search positioning"],
  ["Citation architecture", "Source mapping and third-party authority strategy", "Stronger public evidence layer for clients"],
  ["Technical SEO", "Crawlability, indexation, schema, and structure review", "Better owned-site foundation"],
  ["Content strategy", "Content plans, briefs, refreshes, and production", "More targeted content tied to visibility gaps"],
  ["AI market intelligence", "Category, competitor, and source-layer analysis", "Executive-ready insight for higher-value clients"],
  ["Ongoing execution", "SEO, GEO, content, citations, and reporting support", "Scalable delivery without building the full team"],
];

const enablement = [
  "Where competitors are being recommended in AI answers",
  "Which third-party sources influence their category",
  "Where Google visibility and AI visibility overlap",
  "Why their content is not being retrieved",
  "Which citations are missing or weak",
  "Where technical SEO is limiting machine understanding",
  "What source-layer support should be built next",
  "How the client can become easier to find, cite, compare, and recommend",
];

const confidentialityPoints = [
  "White-label delivery available",
  "Partner-branded reports available",
  "Behind-the-scenes strategy support available",
  "Client-facing support available by agreement",
  "No public client disclosure without permission",
  "Flexible communication structure",
  "Clear scopes and deliverables",
];

const useCases = [
  { t: "“Why are competitors showing up in ChatGPT and we are not?”", d: "CiteWorks can run an AI search audit, map prompt clusters, identify cited sources, compare competitor visibility, and produce an improvement roadmap." },
  { t: "A client wants SEO, but the category is now shaped by AI answers", d: "CiteWorks can expand the strategy from traditional SEO into GEO, citation architecture, entity clarity, and source-layer authority." },
  { t: "Your agency is pitching a larger account", d: "CiteWorks can support the pitch with market visibility analysis, category insights, audit findings, or a more advanced search visibility framework." },
  { t: "Your team needs content briefs tied to AI and search visibility", d: "CiteWorks can turn keyword, prompt, citation, and cosine gaps into page briefs, content plans, refresh recommendations, and production-ready copy." },
  { t: "Your client needs reporting that leadership will understand", d: "CiteWorks can help translate rankings, AI visibility, citations, competitors, and source-layer gaps into executive-ready strategy." },
];

const bestFit = [
  "Agencies serving growth-minded companies",
  "Agencies with clients in competitive categories",
  "Agencies managing higher-value retainers",
  "Agencies expanding from SEO into GEO",
  "Agencies that need AI search visibility capability",
  "Agencies that value strategy before deliverables",
  "Agencies with clients asking about ChatGPT, Gemini, Perplexity, or AI Overviews",
  "Agencies that want deeper reporting and stronger corrective-action plans",
];

const notFit = [
  "Agencies looking for low-cost bulk SEO packages",
  "Agencies selling isolated blog posts with no strategy",
  "Agencies that only want dashboards without implementation",
  "Agencies unwilling to improve client websites, content, or source footprint",
  "Agencies that need instant guarantees instead of evidence-led improvement",
];

const faqs = [
  { q: "What does CiteWorks Studio do for agencies?", a: "CiteWorks Studio helps agencies deliver GEO, AI search visibility, SEO audits, AI search audits, citation architecture, technical SEO, content strategy, AI market intelligence, reporting, and ongoing corrective-action support for their clients." },
  { q: "Is this fully white-label?", a: "It can be. CiteWorks Studio can work fully behind your brand, collaborate with your internal team, or support selected client-facing strategy depending on the relationship." },
  { q: "Do you replace our agency?", a: "No. CiteWorks Studio is designed to support agencies, not replace them. Your agency can own the relationship, positioning, communication, and account strategy while CiteWorks supports specialist search visibility work." },
  { q: "Can you help us sell larger SEO or GEO retainers?", a: "Yes. Visibility audits, AI search analysis, citation architecture, and market intelligence can help agencies create stronger strategy, clearer roadmaps, and more compelling ongoing programs." },
  { q: "Do you only do AI search work?", a: "No. CiteWorks Studio connects AI search visibility with SEO, technical optimization, content strategy, entity clarity, citation architecture, source-layer authority, and reporting." },
  { q: "Can you produce content too?", a: "Yes. CiteWorks Studio can support content strategy, content briefs, service pages, comparison pages, FAQs, glossary content, educational articles, case study frameworks, refreshes, social content, and video scripts." },
  { q: "Can you support technical SEO?", a: "Yes. CiteWorks Studio can review crawlability, indexation, site structure, schema, internal linking, page hierarchy, on-page optimization, and entity clarity." },
  { q: "What types of clients are best for this partnership?", a: "The best clients are growth-minded companies in categories where search visibility, trust, comparison, and recommendation placement matter. This may include B2B, SaaS, finance-adjacent, healthcare-adjacent, legal, ecommerce, home services, insurance, professional services, and other competitive categories." },
  { q: "How do agency partnerships usually start?", a: "Most agency partnerships start with a specific client opportunity, a white-label visibility audit, or a partner strategy call to identify where CiteWorks can support your current service offering." },
];

const AgencyPartners = () => {
  useEffect(() => {
    document.title = "Agency Partners | White-Label GEO, AI Search Visibility, and Citation Architecture";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "CiteWorks Studio helps agencies deliver GEO, AI search visibility, citation architecture, technical SEO, content strategy, and visibility audits for higher-value clients through white-label and collaborative agency partnerships.");
  }, []);

  return (
    <PageShell>
      <PageHero
        eyebrow="Agency Partners"
        title="Give your clients GEO and AI search capability without building the backend in-house."
        body="CiteWorks Studio partners with agencies that want to offer stronger search visibility services across Google, AI answers, and the source environments that shape buyer decisions. We support white-label and collaborative delivery across GEO, AI search audits, citation architecture, technical SEO, content strategy, market intelligence, source-layer research, reporting, and ongoing corrective action. Use CiteWorks Studio behind the scenes or alongside your team to help your agency serve higher-value clients with a more advanced modern search offering."
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

      <div className="mx-auto max-w-4xl px-6 -mt-8">
        <p className="text-center text-sm text-body italic">
          Built for agencies serving growth-minded companies, competitive categories, complex buyer journeys, and clients that need more than traditional SEO.
        </p>
      </div>

      {/* Positioning */}
      <section className="py-20 border-t border-border/40 mt-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="eyebrow">Positioning</p>
          <h2 className="display text-3xl sm:text-5xl mt-4">This is not generic SEO fulfillment.</h2>
          <p className="mt-6 text-body leading-relaxed text-lg">
            Many white-label SEO providers are built for volume: keyword lists, blog packages, link
            orders, dashboards, and templated reports. CiteWorks Studio is built for agencies that
            need deeper capability across traditional search, AI-generated answers, citation
            sources, technical SEO, content structure, entity clarity, and authority environments.
          </p>
          <p className="mt-6 text-body leading-relaxed">
            That means your agency can offer a stronger answer when clients ask:
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-left">
            {[
              "Why are competitors showing up in AI answers?",
              "Why are we not being cited?",
              "Why are rankings not turning into trust?",
              "Which sources are shaping our category?",
              "What should we fix first?",
              "How do we connect SEO, GEO, content, and authority into one strategy?",
            ].map((q) => (
              <li key={q} className="border border-border rounded-xl p-4 bg-card/30 text-sm text-body flex gap-3 items-start">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>{q}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 font-mono text-[13px] tracking-[0.14em] text-primary uppercase">
            CiteWorks Studio gives your agency a search visibility backend built for the new search environment.
          </p>
        </div>
      </section>

      {/* Answer capsule */}
      <section className="py-20 border-t border-border/40">
        <div className="mx-auto max-w-5xl px-6">
          <div className="glass-strong rounded-2xl p-8 sm:p-10">
            <p className="font-mono text-[13px] tracking-[0.16em] text-primary mb-4">WHAT IS THE AGENCY PARTNER PROGRAM?</p>
            <p className="text-body text-lg leading-relaxed">
              The CiteWorks Studio Agency Partner program helps agencies deliver GEO, AI search
              visibility, citation architecture, technical SEO, content strategy, AI market
              intelligence, and ongoing search visibility execution for their clients. Agencies can
              use CiteWorks Studio as a white-label backend, a specialist strategy partner, or a
              collaborative delivery team for clients that need stronger visibility across Google,
              AI answers, and trusted source environments.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Who this is for"
            title="Built for agencies that want to move beyond traditional SEO."
            body="Search has changed, and many agencies are being asked to answer questions traditional SEO retainers were not designed to answer. Clients want to know how they appear in ChatGPT, Gemini, Perplexity, Copilot, and Google AI Overviews — and why third-party sources, Reddit threads, YouTube videos, review sites, and comparison pages are shaping visibility. CiteWorks Studio helps your agency deliver those answers."
            align="left"
          />
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
            body="CiteWorks Studio can support a single client audit, a strategic roadmap, an implementation sprint, or an ongoing white-label visibility program. Our partner services are designed to help your agency add advanced search visibility capability while keeping client relationships under your control."
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
          <SectionHeading
            eyebrow="Partnership models"
            title="Flexible support behind your brand or beside your team."
            body="Different agencies need different levels of involvement. CiteWorks Studio can operate quietly behind the scenes, collaborate directly with your team, or support client-facing strategy when appropriate."
            align="left"
          />
          <div className="mt-12">
            <PartnershipSelector models={models} />
          </div>
        </div>
      </section>

      {/* Why partner */}
      <section className="py-28 border-t border-border/40 bg-card/30">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Why partner"
            title="Add modern search capability without rebuilding your agency."
            align="left"
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
              Partner deliverables your agency can use.
            </h2>
            <p className="mt-5 text-body leading-relaxed">
              CiteWorks Studio creates deliverables that agencies can use for strategy, client
              communication, sales expansion, implementation, and reporting.
            </p>
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
            title="Agency partner services at a glance."
            align="left"
          />
          <div className="mt-12 card-premium/30 overflow-hidden">
            <div className="grid grid-cols-12 font-mono text-[13px] tracking-[0.16em] uppercase text-body bg-card/60 px-6 py-4 border-b border-border">
              <div className="col-span-3">Partner Service</div>
              <div className="col-span-4">What CiteWorks Provides</div>
              <div className="col-span-5 text-primary">What Your Agency Gains</div>
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
            <h2 className="display text-4xl mt-5 leading-tight">
              Use CiteWorks Studio to strengthen pitches, retainers, and renewals.
            </h2>
            <p className="mt-5 text-body leading-relaxed">
              Modern search visibility gives agencies a new way to expand client conversations.
              Instead of only reporting rankings and traffic, your agency can show clients:
            </p>
            <p className="mt-6 font-mono text-[13px] tracking-[0.14em] text-primary uppercase">
              That creates a stronger path from audit to roadmap to monthly execution.
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
            Built for white-label and confidential delivery.
          </h2>
          <p className="mt-6 text-body text-lg leading-relaxed">
            CiteWorks Studio understands agency relationships. We can work under your brand, support
            your internal team, or join selected conversations when useful. We do not need public
            credit. We do not need to own the client relationship. We do not create confusion around
            who the client hired. The goal is simple: help your agency deliver stronger search
            visibility work while protecting the trust you have already built.
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-left">
            {confidentialityPoints.map((p) => (
              <li key={p} className="border border-border rounded-xl p-4 bg-background flex gap-3 items-start text-sm text-body">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Best fit / not best fit */}
      <section className="py-28 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Best fit"
            title="Who makes a strong agency partner?"
            body="CiteWorks Studio is best suited for agencies that want to deliver higher-quality search visibility work, not agencies looking for the cheapest SEO fulfillment option."
            align="left"
          />
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
          <SectionHeading eyebrow="Example use cases" title="Common ways agencies use CiteWorks Studio." align="left" />
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
          <SectionHeading eyebrow="FAQ" title="Common questions from agency partners." align="left" />
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
            Your clients are already asking harder questions about Google, AI search, citations, and
            recommendation visibility. CiteWorks Studio helps your agency answer those questions
            with a stronger methodology, deeper visibility intelligence, and execution support
            across SEO, GEO, content, technical optimization, citation architecture, and
            source-layer authority.
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
