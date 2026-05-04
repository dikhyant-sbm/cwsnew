import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Mail, MapPin, Briefcase, Check } from "lucide-react";
import { PageShell } from "@/components/landing/Shell";
import { Button } from "@/components/ui/button";
import { SectionNav, type SectionNavItem } from "@/components/landing/SectionNav";
import { getJob, jobs, type JobSection } from "@/data/jobs";
import NotFound from "@/pages/NotFound";

const HR_EMAIL = "hr@citeworksstudio.com";

const slugifySection = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const SectionRenderer = ({ section, id }: { section: JobSection; id: string }) => {
  const Header = (
    <>
      <p className="eyebrow mb-4">/ {section.eyebrow}</p>
      <h2 className="display text-3xl sm:text-4xl leading-[1.08] tracking-tight">
        {section.title}
      </h2>
    </>
  );

  switch (section.type) {
    case "prose":
      return (
        <section id={id} className="scroll-mt-28">
          {Header}
          <div className="mt-8 space-y-5 text-body text-lg leading-relaxed max-w-3xl">
            {section.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
      );

    case "list":
      return (
        <section id={id} className="scroll-mt-28">
          {Header}
          {section.intro && (
            <p className="mt-8 text-body text-lg leading-relaxed max-w-3xl">{section.intro}</p>
          )}
          <ul className="mt-8 space-y-3 max-w-3xl">
            {section.items.map((item, i) => (
              <li
                key={i}
                className="flex gap-4 p-4 rounded-lg border border-border/50 bg-card/30 hover:border-primary/40 transition-colors"
              >
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-body leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          {section.outro && (
            <p className="mt-8 text-body text-lg leading-relaxed max-w-3xl">{section.outro}</p>
          )}
        </section>
      );

    case "groupedList":
      return (
        <section id={id} className="scroll-mt-28">
          {Header}
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {section.groups.map((g) => (
              <div key={g.label} className="card-premium p-7">
                <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-primary mb-5">
                  / {g.label}
                </p>
                <ul className="space-y-3">
                  {g.items.map((it, i) => (
                    <li key={i} className="flex gap-3 text-sm text-body leading-relaxed">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      );

    case "cards":
      return (
        <section id={id} className="scroll-mt-28">
          {Header}
          {section.intro && (
            <p className="mt-8 text-body text-lg leading-relaxed max-w-3xl">{section.intro}</p>
          )}
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {section.cards.map((c) => (
              <div
                key={c.h}
                className="card-premium p-6 hover:border-primary/40 transition-colors"
              >
                <h3 className="display text-lg leading-tight">{c.h}</h3>
                <p className="mt-3 text-sm text-body leading-relaxed">{c.b}</p>
              </div>
            ))}
          </div>
        </section>
      );

    case "glossary":
      return (
        <section id={id} className="scroll-mt-28">
          {Header}
          <dl className="mt-10 grid md:grid-cols-2 gap-x-8 gap-y-6">
            {section.terms.map((t) => (
              <div key={t.term} className="border-l-2 border-primary/40 pl-5">
                <dt className="display text-lg leading-tight">{t.term}</dt>
                <dd className="mt-2 text-sm text-body leading-relaxed">{t.definition}</dd>
              </div>
            ))}
          </dl>
        </section>
      );
  }
};

const JobPosting = () => {
  const { slug = "" } = useParams();
  const job = getJob(slug);

  useEffect(() => {
    if (!job) return;
    document.title = `${job.title} | Careers at CiteWorks Studio`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", job.shortBlurb);
  }, [job]);

  if (!job) return <NotFound />;

  const onThisPage: SectionNavItem[] = [
    { id: "overview", label: "Overview" },
    ...job.sections.map((s) => ({
      id: slugifySection(s.eyebrow),
      label: s.title.length > 32 ? s.title.slice(0, 30) + "…" : s.title,
    })),
    { id: "apply", label: "Apply" },
  ];

  const mailto = `mailto:${HR_EMAIL}?subject=${encodeURIComponent(`Application — ${job.title}`)}`;

  return (
    <PageShell>
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden ambient-glow">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] conic-ring opacity-30 pointer-events-none float-y-slow" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6">
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.16em] uppercase text-body hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Careers
          </Link>

          <div className="reveal inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-7">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 pulse-ring" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
            </span>
            <span className="font-mono text-[13px] tracking-[0.16em] text-body uppercase">
              / Career Opening
            </span>
          </div>

          <h1 className="reveal reveal-delay-1 display text-4xl sm:text-5xl md:text-6xl leading-[1] tracking-tight max-w-5xl">
            {job.title}
          </h1>

          <div className="reveal reveal-delay-2 mt-6 flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-mono text-[12px] tracking-[0.14em] uppercase text-primary px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <Briefcase className="w-3.5 h-3.5" /> {job.team}
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[12px] text-body">
              <MapPin className="w-3.5 h-3.5" /> {job.location}
            </span>
          </div>

          <div className="reveal reveal-delay-2 mt-8 max-w-3xl space-y-5 text-lg text-body leading-relaxed">
            {job.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-3">
            <Button
              asChild
              className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 btn-glow px-7 h-14"
            >
              <a href={mailto}>
                APPLY NOW
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] border-foreground/35 hover:bg-foreground/5 px-7 h-14"
            >
              <Link to="/careers">VIEW ALL ROLES</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <div className="mx-auto max-w-[1400px] px-6 py-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-3">
          <SectionNav items={onThisPage} />
          <div className="hidden lg:block sticky top-[calc(theme(spacing.24)+340px)] mt-8 card-premium p-5">
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-primary mb-3">
              / Apply
            </p>
            <p className="text-sm text-body leading-relaxed mb-4">
              Send your resume and a short note. Mention the role in your subject line.
            </p>
            <Button
              asChild
              size="sm"
              className="w-full rounded-full font-mono text-[12px] tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href={mailto}>
                EMAIL HR
                <ArrowUpRight className="w-3 h-3 ml-1" />
              </a>
            </Button>
          </div>
        </div>

        <div className="lg:col-span-9 space-y-24">
          <section id="overview" className="scroll-mt-28">
            <p className="eyebrow mb-4">/ About CiteWorks Studio</p>
            <h2 className="display text-3xl sm:text-4xl leading-[1.08] tracking-tight">
              About CiteWorks Studio
            </h2>
            <div className="mt-8 space-y-5 text-body text-lg leading-relaxed max-w-3xl">
              <p>
                CiteWorks Studio is a full-service search visibility agency for enterprise brands
                and agency partners. We help brands improve where they rank, where they are cited,
                and where they are recommended by combining SEO auditing, AI search analysis,
                technical optimization, citation architecture, market intelligence, and in-house
                execution.
              </p>
              <p>
                Our work is built around a simple market reality: buyers no longer discover brands
                through one channel. They move between Google, AI-generated answers, review pages,
                comparison articles, community discussions, videos, social platforms, and brand
                content before deciding who to trust.
              </p>
              <p>
                CiteWorks Studio is moving toward a stronger SaaS and solutions model — turning
                agency intelligence, methodology, audits, dashboards, and corrective-action systems
                into scalable products.
              </p>
            </div>
          </section>

          {job.sections.map((s) => (
            <SectionRenderer key={s.eyebrow} section={s} id={slugifySection(s.eyebrow)} />
          ))}

          {/* APPLY */}
          <section id="apply" className="scroll-mt-28">
            <div className="card-premium p-10 sm:p-14 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-[400px] h-[400px] conic-ring opacity-30 pointer-events-none" />
              <div className="relative max-w-2xl">
                <Mail className="w-8 h-8 text-primary mb-6" />
                <h2 className="display text-3xl sm:text-4xl leading-[1.1] tracking-tight">
                  Apply for this role
                </h2>
                <p className="mt-5 text-body leading-relaxed">
                  Send your resume, work samples, or portfolio along with a note on why you'd be
                  the perfect fit. Include "{job.title}" in your subject line.
                </p>
                <p className="mt-4 font-mono text-sm text-primary">{HR_EMAIL}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    asChild
                    className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 btn-glow px-7 h-14"
                  >
                    <a href={mailto}>
                      EMAIL APPLICATION
                      <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] border-foreground/35 hover:bg-foreground/5 px-7 h-14"
                  >
                    <Link to="/careers">VIEW ALL ROLES</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* OTHER ROLES */}
          <section className="scroll-mt-28">
            <p className="eyebrow mb-4">/ Other openings</p>
            <h2 className="display text-2xl sm:text-3xl leading-tight tracking-tight">
              Explore other roles
            </h2>
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              {jobs
                .filter((j) => j.slug !== job.slug)
                .map((j) => (
                  <Link
                    key={j.slug}
                    to={`/careers/${j.slug}`}
                    className="card-premium p-6 hover:border-primary/40 transition-colors group block"
                  >
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-primary">
                      / {j.team}
                    </p>
                    <h3 className="display text-lg mt-3 leading-tight">{j.title}</h3>
                    <p className="mt-3 text-sm text-body leading-relaxed line-clamp-2">
                      {j.shortBlurb}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 font-mono text-[12px] tracking-[0.14em] text-primary group-hover:gap-2 transition-all">
                      VIEW ROLE <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </Link>
                ))}
            </div>
          </section>
        </div>
      </div>
    </PageShell>
  );
};

export default JobPosting;
