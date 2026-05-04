import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Compass,
  Layers,
  GitCompare,
  Target,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { PageShell } from "@/components/landing/Shell";
import { Button } from "@/components/ui/button";
import { SectionNav, type SectionNavItem } from "@/components/landing/SectionNav";

const onThisPage: SectionNavItem[] = [
  { id: "intro", label: "About CiteWorks" },
  { id: "pov", label: "Our point of view" },
  { id: "different", label: "What makes us different" },
  { id: "disciplines", label: "Core disciplines" },
  { id: "who", label: "Who we work with" },
  { id: "believe", label: "What we believe" },
  { id: "leadership", label: "Leadership" },
  { id: "cta", label: "Work with us" },
];

const disciplines = [
  {
    icon: Layers,
    h: "Embedding-Level GEO",
    b: "We optimize for generative search at the representation layer — shaping content so AI systems can better interpret what your brand means, where it belongs, and when it should be retrieved.",
  },
  {
    icon: Target,
    h: "Vector Optimization",
    b: "We improve how your pages, topics, and supporting assets align with the concepts, comparisons, and intents that matter in your market.",
  },
  {
    icon: GitCompare,
    h: "Cosine Gap Engineering",
    b: "We reduce the semantic distance between your intended authority and the language retrieval systems actually associate with your category — moving your brand closer to the answers that influence real buying decisions.",
  },
];

const differentiators = [
  "Looking at the distance between your intended positioning and the way AI systems actually model your category.",
  "Understanding whether your authority is machine-legible.",
  "Whether your content aligns with decision-stage retrieval patterns.",
  "Whether your brand is structurally positioned to appear in the recommendation set.",
];

const leadership = [
  {
    name: "Mark Huntley",
    role: "Founder & Head of Agency",
    bio: "Mark Huntley is the founder of CiteWorks Studio and leads the firm's strategic direction across AI visibility, semantic positioning, and retrieval-focused growth strategy. With more than a decade of experience spanning performance media and global e-commerce, he helps brands strengthen how they are surfaced, interpreted, and recommended in AI-driven discovery environments.",
    initials: "MH",
  },
  {
    name: "Kaushal Malkan",
    role: "Chief Operating Officer",
    bio: "Kaushal Malkan is Chief Operating Officer at CiteWorks Studio. With a background in Computer Science and 9+ years of experience building and scaling digital businesses, he leads operational systems, delivery infrastructure, and execution across client engagements. His experience spans automation, organic growth systems, and scalable frameworks designed to support complex, high-stakes mandates.",
    initials: "KM",
  },
];

const About = () => {
  useEffect(() => {
    document.title = "About CiteWorks Studio | AI Visibility & Retrieval Strategy";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "CiteWorks Studio is a strategic advisory helping enterprise brands close the gap between market authority and machine visibility across AI-shaped search environments.",
      );
    }
  }, []);

  return (
    <PageShell>
      {/* HERO */}
      <section className="relative pt-36 pb-24 overflow-hidden ambient-glow">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] conic-ring opacity-40 pointer-events-none float-y-slow" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6">
          <div className="reveal inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-7">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 pulse-ring" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
            </span>
            <span className="font-mono text-[13px] tracking-[0.16em] text-body uppercase">
              / About Us
            </span>
          </div>

          <h1 className="reveal reveal-delay-1 display text-4xl sm:text-6xl md:text-7xl leading-[0.98] tracking-tight max-w-5xl">
            We help brands close the gap between{" "}
            <span className="text-gradient">market authority</span> and machine visibility.
          </h1>

          <div className="reveal reveal-delay-2 mt-8 max-w-3xl space-y-5 text-lg text-body leading-relaxed">
            <p>
              CiteWorks Studio is a strategic advisory built for brands that need to be{" "}
              <strong className="text-foreground">found, understood, and recommended</strong> in
              AI-shaped search environments.
            </p>
          </div>

          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-3">
            <Button
              asChild
              className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 btn-glow px-7 h-14"
            >
              <Link to="/request-audit">
                WORK WITH US
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] border-foreground/35 hover:bg-foreground/5 px-7 h-14"
            >
              <Link to="/services">OUR SERVICES</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="mx-auto max-w-[1400px] px-6 py-24 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-3">
          <SectionNav items={onThisPage} />
        </div>

        <div className="lg:col-span-9 space-y-28">
          {/* INTRO */}
          <section id="intro" className="scroll-mt-28">
            <p className="eyebrow mb-4">/ Who we are</p>
            <h2 className="display text-3xl sm:text-5xl leading-[1.05] tracking-tight">
              Strategy for an AI-shaped search environment.
            </h2>
            <div className="mt-8 space-y-5 text-body text-lg leading-relaxed max-w-3xl">
              <p>
                Our work centers on{" "}
                <strong className="text-foreground">embedding-level GEO, vector optimization, and cosine gap engineering</strong>
                . We help companies align their content, authority signals, and digital presence with
                the retrieval systems that increasingly shape discovery, comparison, and buyer choice.
              </p>
              <p>
                In an internet increasingly influenced by AI-generated answers, visibility is no
                longer just a ranking problem. It is also a retrieval problem.
              </p>
              <p>
                A brand can be credible, proven, and commercially strong — and still be
                underrepresented in the answers buyers actually see. That gap is where we work.
              </p>
            </div>
          </section>

          {/* POV */}
          <section id="pov" className="scroll-mt-28">
            <p className="eyebrow mb-4">/ Our point of view</p>
            <h2 className="display text-3xl sm:text-5xl leading-[1.05] tracking-tight max-w-3xl">
              Modern visibility is not defined only by what you publish.
            </h2>
            <div className="mt-8 space-y-5 text-body text-lg leading-relaxed max-w-3xl">
              <p>
                It is defined by what machines can{" "}
                <strong className="text-foreground">interpret, retrieve, and reuse with confidence</strong>.
              </p>
              <p>
                AI systems do not recommend brands simply because they are good. They recommend
                brands whose signals are clear, corroborated, semantically aligned, and easy to
                surface inside generated answers.
              </p>
              <p>
                That is why our work goes deeper than traditional SEO and broader than generic AI
                content strategy. We help brands improve the underlying conditions that shape AI
                visibility: semantic structure, entity clarity, topical framing, citation readiness,
                and competitive alignment in vector space.
              </p>
            </div>
          </section>

          {/* DIFFERENTIATORS */}
          <section id="different" className="scroll-mt-28">
            <p className="eyebrow mb-4">/ What makes us different</p>
            <h2 className="display text-3xl sm:text-5xl leading-[1.05] tracking-tight max-w-3xl">
              We treat AI visibility as a <span className="text-gradient">systems problem</span>.
            </h2>
            <p className="mt-8 text-body text-lg leading-relaxed max-w-3xl">
              Most firms still treat AI visibility as a publishing problem. We do not. That means:
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {differentiators.map((d, i) => (
                <div
                  key={i}
                  className="card-premium p-6 hover:border-primary/40 transition-colors flex gap-4"
                >
                  <span className="font-mono text-[12px] tracking-widest text-primary shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-body leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-body text-lg leading-relaxed max-w-3xl">
              Our work is designed to close that distance.
            </p>
          </section>

          {/* DISCIPLINES */}
          <section id="disciplines" className="scroll-mt-28">
            <p className="eyebrow mb-4">/ Core disciplines</p>
            <h2 className="display text-3xl sm:text-5xl leading-[1.05] tracking-tight">
              How we approach the work.
            </h2>
            <div className="mt-10 space-y-4">
              {disciplines.map((d) => {
                const Icon = d.icon;
                return (
                  <div
                    key={d.h}
                    className="card-premium p-7 hover:border-primary/40 transition-colors grid sm:grid-cols-12 gap-6 items-start"
                  >
                    <div className="sm:col-span-3 flex items-center gap-3">
                      <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </span>
                      <h3 className="display text-xl leading-tight">{d.h}</h3>
                    </div>
                    <p className="sm:col-span-9 text-body leading-relaxed">{d.b}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* WHO */}
          <section id="who" className="scroll-mt-28">
            <p className="eyebrow mb-4">/ Who we work with</p>
            <h2 className="display text-3xl sm:text-5xl leading-[1.05] tracking-tight max-w-3xl">
              Research-heavy, high-consideration categories.
            </h2>
            <div className="mt-8 space-y-5 text-body text-lg leading-relaxed max-w-3xl">
              <p>
                We work with brands where{" "}
                <strong className="text-foreground">trust, comparison, and explanation</strong>{" "}
                shape the sale.
              </p>
              <p>
                These are markets where buyers do not simply click. They evaluate. They compare.
                They ask AI systems who to trust.
              </p>
              <p>
                In those moments, your brand should not be invisible, misread, or left out of the
                answer. It should be structurally positioned to be part of it.
              </p>
            </div>
          </section>

          {/* BELIEF */}
          <section id="believe" className="scroll-mt-28">
            <p className="eyebrow mb-4">/ What we believe</p>
            <div className="card-premium p-10 sm:p-14 relative overflow-hidden">
              <div className="absolute inset-0 grid-bg-fine opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
              <Sparkles className="relative w-8 h-8 text-primary mb-6" />
              <p className="relative display text-2xl sm:text-3xl leading-[1.2] tracking-tight">
                The future of search will not be won by brands that publish the most.
              </p>
              <p className="relative mt-6 display text-2xl sm:text-3xl leading-[1.2] tracking-tight text-body">
                It will be won by brands that are easiest for intelligent systems to{" "}
                <span className="text-foreground">understand, connect, trust, and recommend</span>.
              </p>
              <p className="relative mt-8 text-body text-base">
                That is the work we do at CiteWorks Studio.
              </p>
            </div>
          </section>

          {/* LEADERSHIP */}
          <section id="leadership" className="scroll-mt-28">
            <p className="eyebrow mb-4">/ Leadership</p>
            <h2 className="display text-3xl sm:text-5xl leading-[1.05] tracking-tight">
              The team behind the work.
            </h2>
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              {leadership.map((p) => (
                <article
                  key={p.name}
                  className="card-premium p-8 hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="size-14 rounded-full bg-gradient-to-br from-primary/30 to-primary/5 border border-primary/30 flex items-center justify-center font-mono text-sm tracking-widest text-foreground">
                      {p.initials}
                    </div>
                    <div>
                      <h3 className="display text-xl leading-tight">{p.name}</h3>
                      <p className="font-mono text-[12px] tracking-[0.14em] uppercase text-primary mt-1">
                        {p.role}
                      </p>
                    </div>
                  </div>
                  <p className="mt-6 text-body text-sm leading-relaxed">{p.bio}</p>
                </article>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section id="cta" className="scroll-mt-28">
            <div className="card-premium p-10 sm:p-14 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-[400px] h-[400px] conic-ring opacity-30 pointer-events-none" />
              <div className="relative max-w-2xl">
                <ShieldCheck className="w-8 h-8 text-primary mb-6" />
                <h2 className="display text-3xl sm:text-4xl leading-[1.1] tracking-tight">
                  Position your brand for the answer, not just the click.
                </h2>
                <p className="mt-5 text-body leading-relaxed">
                  Start with a visibility audit. We'll show you where your brand stands across
                  Google rankings, AI recommendation environments, citation sources, and competitor
                  positioning — then turn that into a practical roadmap.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    asChild
                    className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 btn-glow px-7 h-14"
                  >
                    <Link to="/request-audit">
                      REQUEST AN ENTERPRISE AUDIT
                      <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] border-foreground/35 hover:bg-foreground/5 px-7 h-14"
                  >
                    <Link to="/agency-partners">TALK WHITE-LABEL</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageShell>
  );
};

export default About;
