import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Users,
  Target,
  Zap,
  TrendingUp,
  Globe,
  Sparkles,
} from "lucide-react";
import { PageShell } from "@/components/landing/Shell";
import { Button } from "@/components/ui/button";
import { SectionNav, type SectionNavItem } from "@/components/landing/SectionNav";
import { jobs } from "@/data/jobs";

const HR_EMAIL = "hr@citeworksstudio.com";

const onThisPage: SectionNavItem[] = [
  { id: "intro", label: "Why CiteWorks" },
  { id: "why", label: "Why join us" },
  { id: "roles", label: "Open roles" },
  { id: "apply", label: "How to apply" },
];

const benefits = [
  {
    icon: Users,
    h: "Founder-Level Access",
    b: "Work directly with founder-level and senior executives on high-impact strategy and research.",
  },
  {
    icon: Target,
    h: "Enterprise-Level Impact",
    b: "Ship on high-stakes projects that shape how enterprise brands are discovered and recommended across AI and search.",
  },
  {
    icon: Zap,
    h: "Outcomes Over Process",
    b: "An environment that rewards outcomes and results over micromanagement and ceremony.",
  },
  {
    icon: TrendingUp,
    h: "Continuous Growth",
    b: "Room to continuously learn and grow, with high ownership and autonomy over your work.",
  },
  {
    icon: Globe,
    h: "Flexible Work Setup",
    b: "Remote-first roles with the flexibility to work from wherever you do your best thinking.",
  },
  {
    icon: Sparkles,
    h: "Frontier Problem Set",
    b: "Operate at the intersection of search intelligence, AI retrieval systems, and enterprise strategy.",
  },
];

const roles = jobs.map((j) => ({
  slug: j.slug,
  title: j.title,
  location: j.location,
  team: j.team,
  blurb: j.shortBlurb,
}));


const Careers = () => {
  useEffect(() => {
    document.title = "Careers at CiteWorks Studio | Build the Future of AI Search";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Join CiteWorks Studio. Remote-first careers in AI visibility, semantic retrieval, vector optimization, and prompt intelligence for enterprise brands.",
      );
    }
  }, []);

  const mailtoFor = (role: string) =>
    `mailto:${HR_EMAIL}?subject=${encodeURIComponent(`Application — ${role}`)}`;

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
              / Careers · We're hiring
            </span>
          </div>

          <h1 className="reveal reveal-delay-1 display text-4xl sm:text-6xl md:text-7xl leading-[0.98] tracking-tight max-w-5xl">
            Shape how brands are{" "}
            <span className="text-gradient">discovered and recommended</span> by AI.
          </h1>

          <p className="reveal reveal-delay-2 mt-8 max-w-3xl text-lg text-body leading-relaxed">
            CiteWorks Studio is building the future of search visibility across Google and AI. We
            are looking for sharp, curious people who want to work at the intersection of{" "}
            <strong className="text-foreground">
              search intelligence, AI retrieval systems, and enterprise strategy
            </strong>
            .
          </p>

          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-3">
            <Button
              asChild
              className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 btn-glow px-7 h-14"
            >
              <a href="#roles">
                VIEW OPEN ROLES
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] border-foreground/35 hover:bg-foreground/5 px-7 h-14"
            >
              <a href={`mailto:${HR_EMAIL}`}>
                <Mail className="w-4 h-4 mr-1" />
                {HR_EMAIL}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <div className="mx-auto max-w-[1400px] px-6 py-24 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-3">
          <SectionNav items={onThisPage} />
        </div>

        <div className="lg:col-span-9 space-y-28">
          {/* INTRO */}
          <section id="intro" className="scroll-mt-28">
            <p className="eyebrow mb-4">/ Who thrives here</p>
            <h2 className="display text-3xl sm:text-5xl leading-[1.05] tracking-tight max-w-3xl">
              Operators, researchers, and builders working on a frontier problem.
            </h2>
            <p className="mt-8 text-body text-lg leading-relaxed max-w-3xl">
              We hire people who care about precision, take ownership end-to-end, and want their
              work to matter for enterprise brands operating in high-stakes categories.
            </p>
          </section>

          {/* WHY */}
          <section id="why" className="scroll-mt-28">
            <p className="eyebrow mb-4">/ Why join us</p>
            <h2 className="display text-3xl sm:text-5xl leading-[1.05] tracking-tight">
              What makes working here different.
            </h2>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.h}
                    className="card-premium p-6 hover:border-primary/40 transition-colors"
                  >
                    <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="display text-lg leading-tight">{b.h}</h3>
                    <p className="mt-3 text-sm text-body leading-relaxed">{b.b}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ROLES */}
          <section id="roles" className="scroll-mt-28">
            <p className="eyebrow mb-4">/ Open roles</p>
            <h2 className="display text-3xl sm:text-5xl leading-[1.05] tracking-tight">
              Current openings.
            </h2>
            <p className="mt-6 text-body text-lg leading-relaxed max-w-3xl">
              We are hiring across research, strategy, and intelligence roles. Every position is
              built around high ownership and meaningful work.
            </p>

            <div className="mt-10 space-y-4">
              {roles.map((r) => (
                <article
                  key={r.slug}
                  className="card-premium p-7 hover:border-primary/40 transition-colors group"
                >
                  <div className="grid lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-8">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-primary px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
                          {r.team}
                        </span>
                        <span className="inline-flex items-center gap-1.5 font-mono text-[12px] text-body">
                          <MapPin className="w-3.5 h-3.5" /> {r.location}
                        </span>
                      </div>
                      <Link to={`/careers/${r.slug}`} className="block mt-4 hover:text-primary transition-colors">
                        <h3 className="display text-2xl leading-tight">{r.title}</h3>
                      </Link>
                      <p className="mt-3 text-body text-sm leading-relaxed">{r.blurb}</p>
                    </div>
                    <div className="lg:col-span-4 flex flex-col lg:items-end gap-2">
                      <Button
                        asChild
                        className="rounded-full font-mono text-[12px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 btn-glow h-12 px-6"
                      >
                        <Link to={`/careers/${r.slug}`}>
                          VIEW ROLE
                          <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                      </Button>
                      <a
                        href={mailtoFor(r.title)}
                        className="font-mono text-[11px] tracking-[0.16em] uppercase text-body hover:text-primary transition-colors"
                      >
                        Quick apply →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* APPLY */}
          <section id="apply" className="scroll-mt-28">
            <p className="eyebrow mb-4">/ How to apply</p>
            <h2 className="display text-3xl sm:text-5xl leading-[1.05] tracking-tight">
              Ready to join the team?
            </h2>
            <p className="mt-6 text-body text-lg leading-relaxed max-w-3xl">
              Send your resume, work samples, or portfolio along with a short note on why you'd be
              the perfect fit for CiteWorks Studio.
            </p>

            <div className="mt-10 grid md:grid-cols-2 gap-4">
              <div className="card-premium p-7">
                <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-primary">
                  / Step 01
                </p>
                <h3 className="display text-xl mt-3">Mention the role in your subject line</h3>
                <p className="mt-3 text-body text-sm leading-relaxed">
                  Include the title of the position you are applying for so we can route your
                  application to the right team.
                </p>
              </div>
              <div className="card-premium p-7">
                <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-primary">
                  / Step 02
                </p>
                <h3 className="display text-xl mt-3">Don't see the right role?</h3>
                <p className="mt-3 text-body text-sm leading-relaxed">
                  Tell us in no more than 200 words why the role you have in mind would help us —
                  and why you are the right person for it.
                </p>
              </div>
            </div>

            <div className="mt-10 card-premium p-10 sm:p-14 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-[400px] h-[400px] conic-ring opacity-30 pointer-events-none" />
              <div className="relative max-w-2xl">
                <Mail className="w-8 h-8 text-primary mb-6" />
                <h3 className="display text-3xl sm:text-4xl leading-[1.1] tracking-tight">
                  Send your application to{" "}
                  <span className="text-gradient">{HR_EMAIL}</span>
                </h3>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    asChild
                    className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 btn-glow px-7 h-14"
                  >
                    <a href={`mailto:${HR_EMAIL}?subject=${encodeURIComponent("Application — CiteWorks Studio")}`}>
                      EMAIL HR
                      <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] border-foreground/35 hover:bg-foreground/5 px-7 h-14"
                  >
                    <Link to="/about">LEARN ABOUT US</Link>
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

export default Careers;
