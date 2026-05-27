import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { StickyAuditCTA } from "@/components/landing/StickyAuditCTA";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { CaseCard } from "@/components/case-studies/CaseCard";
import type { CaseEntry } from "@/data/caseStudies";

type Props = {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle: string;
  description: string;
  bullets: string[];
  entries: CaseEntry[];
  documentTitle: string;
  metaDescription: string;
};

export const DirectoryPage = ({
  eyebrow,
  title,
  highlight,
  subtitle,
  description,
  bullets,
  entries,
  documentTitle,
  metaDescription,
}: Props) => {
  useScrollReveal();
  useEffect(() => {
    document.title = documentTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", metaDescription);
  }, [documentTitle, metaDescription]);

  const publishedCount = entries.filter((e) => e.href).length;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative pt-36 pb-20 overflow-hidden ambient-glow">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] conic-ring opacity-30 pointer-events-none float-y-slow" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.18em] text-body hover:text-foreground transition-colors mb-8 uppercase"
          >
            <ArrowLeft className="size-3.5" /> All Case Studies
          </Link>

          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-6">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 pulse-ring" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                </span>
                <span className="font-mono text-[12px] tracking-[0.16em] text-body uppercase">
                  / {eyebrow}
                </span>
              </div>
              <h1 className="display text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-tight">
                {title}{" "}
                {highlight && <span className="text-gradient">{highlight}</span>}
              </h1>
              <p className="mt-6 text-body text-lg leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            </div>
            <div className="space-y-5">
              <p className="text-body leading-relaxed">{description}</p>
              <ul className="grid gap-2 text-[14.5px]">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-2.5 text-body">
                    <span className="mt-2 size-1 rounded-full bg-primary shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] tracking-[0.16em] uppercase text-tertiary pt-2">
                <span>{publishedCount} published</span>
                <span className="text-border">/</span>
                <span>{entries.length - publishedCount} in production</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-16 border-t border-border bg-card/30">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {entries.map((c) => (
              <CaseCard key={c.slug} c={c} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="relative rounded-3xl overflow-hidden border border-border bg-card">
            <div className="absolute inset-0 grid-bg-fine opacity-30 pointer-events-none" />
            <div className="absolute -top-32 -right-32 size-[500px] conic-ring opacity-40 pointer-events-none" />
            <div className="relative z-10 p-10 sm:p-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="max-w-2xl">
                <p className="eyebrow mb-4">Bring this to your own market</p>
                <h2 className="display text-3xl sm:text-4xl leading-[1.08]">
                  Want the same lens applied to your category or company?
                </h2>
                <p className="mt-5 text-body leading-relaxed">
                  Request an AI Visibility Audit and we'll show you where AI
                  systems are recommending — and overlooking — your brand, and
                  what to fix first.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] btn-glow"
                >
                  <Link to="/request-audit">
                    REQUEST AN AI VISIBILITY AUDIT
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em]"
                >
                  <Link to="/case-studies">BACK TO CASE STUDIES</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <StickyAuditCTA />
    </div>
  );
};
