import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, X } from "lucide-react";
import { PageShell } from "@/components/landing/Shell";
import { Button } from "@/components/ui/button";
import { SectionNav, type SectionNavItem } from "@/components/landing/SectionNav";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect } from "react";

export type CTA = { label: string; to: string; primary?: boolean };

export type MarketingSection =
  | { id: string; type: "answer"; eyebrow: string; title: string; body: string }
  | {
      id: string;
      type: "prose";
      eyebrow: string;
      title: string;
      paragraphs: string[];
      ctas?: CTA[];
    }
  | {
      id: string;
      type: "list";
      eyebrow: string;
      title: string;
      intro?: string;
      items: string[];
      outro?: string;
    }
  | {
      id: string;
      type: "cards";
      eyebrow: string;
      title: string;
      intro?: string;
      cards: { h: string; b: string }[];
    }
  | {
      id: string;
      type: "table";
      eyebrow: string;
      title: string;
      intro?: string;
      headers: string[];
      rows: string[][];
    }
  | {
      id: string;
      type: "split";
      eyebrow: string;
      title: string;
      intro?: string;
      left: { title: string; items: string[] };
      right: { title: string; items: string[] };
    }
  | {
      id: string;
      type: "faq";
      eyebrow: string;
      title: string;
      items: { q: string; a: string }[];
    }
  | {
      id: string;
      type: "links";
      eyebrow: string;
      title: string;
      intro?: string;
      links: { label: string; to: string; desc?: string }[];
    }
  | {
      id: string;
      type: "finalCta";
      eyebrow: string;
      title: string;
      body?: string;
      ctas: CTA[];
    };

export type MarketingPageProps = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    h1: string;
    body: string | string[];
    ctas: CTA[];
    support?: string;
  };
  sections: MarketingSection[];
};

const renderCta = (cta: CTA, key: string) => {
  const isExternal = /^https?:/.test(cta.to);
  const inner = (
    <>
      {cta.label.toUpperCase()}
      <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
    </>
  );
  const className = cta.primary
    ? "rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 btn-glow px-7 h-14"
    : "rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] border-foreground/35 hover:bg-foreground/5 px-7 h-14";

  return (
    <Button key={key} asChild variant={cta.primary ? "default" : "outline"} className={className}>
      {isExternal ? (
        <a href={cta.to} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      ) : (
        <Link to={cta.to}>{inner}</Link>
      )}
    </Button>
  );
};

const SectionInner = ({ section }: { section: MarketingSection }): ReactNode => {
  const Header = (title: string, eyebrow: string) => (
    <>
      <p className="eyebrow mb-4">/ {eyebrow}</p>
      <h2 className="display text-3xl sm:text-4xl leading-[1.08] tracking-tight">{title}</h2>
    </>
  );

  switch (section.type) {
    case "answer":
      return (
        <div className="card-premium p-8 sm:p-10 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg-fine opacity-15 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
          <div className="relative">
            <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-primary mb-4">
              / {section.eyebrow}
            </p>
            <h2 className="display text-2xl sm:text-3xl leading-tight tracking-tight">
              {section.title}
            </h2>
            <p className="mt-5 text-body text-lg leading-relaxed max-w-3xl">{section.body}</p>
          </div>
        </div>
      );

    case "prose":
      return (
        <>
          {Header(section.title, section.eyebrow)}
          <div className="mt-8 space-y-5 text-body text-lg leading-relaxed max-w-3xl">
            {section.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {section.ctas && (
            <div className="mt-8 flex flex-wrap gap-3">
              {section.ctas.map((c, i) => renderCta(c, String(i)))}
            </div>
          )}
        </>
      );

    case "list":
      return (
        <>
          {Header(section.title, section.eyebrow)}
          {section.intro && (
            <p className="mt-8 text-body text-lg leading-relaxed max-w-3xl">{section.intro}</p>
          )}
          <ul className="mt-8 grid sm:grid-cols-2 gap-3 max-w-4xl">
            {section.items.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 p-4 rounded-lg border border-border/50 bg-card/30 hover:border-primary/40 transition-colors"
              >
                <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                <span className="text-sm text-body leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          {section.outro && (
            <p className="mt-8 text-body text-lg leading-relaxed max-w-3xl">{section.outro}</p>
          )}
        </>
      );

    case "cards":
      return (
        <>
          {Header(section.title, section.eyebrow)}
          {section.intro && (
            <p className="mt-8 text-body text-lg leading-relaxed max-w-3xl">{section.intro}</p>
          )}
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {section.cards.map((c) => (
              <div key={c.h} className="card-premium p-6 hover:border-primary/40 transition-colors">
                <h3 className="display text-lg leading-tight">{c.h}</h3>
                <p className="mt-3 text-sm text-body leading-relaxed">{c.b}</p>
              </div>
            ))}
          </div>
        </>
      );

    case "table":
      return (
        <>
          {Header(section.title, section.eyebrow)}
          {section.intro && (
            <p className="mt-8 text-body text-lg leading-relaxed max-w-3xl">{section.intro}</p>
          )}
          <div className="mt-8 overflow-x-auto rounded-xl border border-border/60 bg-card/30">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="bg-card/60 border-b border-border/60">
                  {section.headers.map((h) => (
                    <th
                      key={h}
                      className="text-left px-5 py-4 font-mono text-[11px] tracking-[0.16em] uppercase text-primary"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row, i) => (
                  <tr key={i} className="border-b border-border/40 last:border-b-0">
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`px-5 py-4 align-top text-body leading-relaxed ${
                          j === 0 ? "text-foreground font-medium" : ""
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      );

    case "split":
      return (
        <>
          {Header(section.title, section.eyebrow)}
          {section.intro && (
            <p className="mt-8 text-body text-lg leading-relaxed max-w-3xl">{section.intro}</p>
          )}
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            <div className="card-premium p-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="w-4 h-4" />
                </span>
                <h3 className="display text-lg">{section.left.title}</h3>
              </div>
              <ul className="space-y-3">
                {section.left.items.map((it, i) => (
                  <li key={i} className="flex gap-3 text-sm text-body leading-relaxed">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-premium p-7 opacity-95">
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex size-8 items-center justify-center rounded-full bg-foreground/10 text-foreground/70">
                  <X className="w-4 h-4" />
                </span>
                <h3 className="display text-lg">{section.right.title}</h3>
              </div>
              <ul className="space-y-3">
                {section.right.items.map((it, i) => (
                  <li key={i} className="flex gap-3 text-sm text-body leading-relaxed">
                    <X className="w-4 h-4 text-foreground/40 shrink-0 mt-1" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      );

    case "faq":
      return (
        <>
          {Header(section.title, section.eyebrow)}
          <div className="mt-8 max-w-4xl">
            <Accordion type="single" collapsible className="space-y-3">
              {section.items.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="card-premium px-5 border-border/50"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5 text-base font-semibold text-foreground">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-body leading-relaxed pb-5 pt-0">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </>
      );

    case "links":
      return (
        <>
          {Header(section.title, section.eyebrow)}
          {section.intro && (
            <p className="mt-8 text-body text-lg leading-relaxed max-w-3xl">{section.intro}</p>
          )}
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {section.links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="card-premium p-5 hover:border-primary/40 transition-colors group flex items-start justify-between gap-4"
              >
                <div>
                  <p className="display text-base leading-tight">{l.label}</p>
                  {l.desc && <p className="mt-2 text-sm text-body leading-relaxed">{l.desc}</p>}
                </div>
                <ArrowUpRight className="w-4 h-4 text-primary shrink-0 mt-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </div>
        </>
      );

    case "finalCta":
      return (
        <div className="card-premium p-10 sm:p-14 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] conic-ring opacity-30 pointer-events-none" />
          <div className="relative max-w-2xl">
            <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-primary mb-4">
              / {section.eyebrow}
            </p>
            <h2 className="display text-3xl sm:text-4xl leading-[1.1] tracking-tight">
              {section.title}
            </h2>
            {section.body && (
              <p className="mt-5 text-body leading-relaxed">{section.body}</p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              {section.ctas.map((c, i) => renderCta(c, String(i)))}
            </div>
          </div>
        </div>
      );
  }
};

export const MarketingPage = ({ meta, hero, sections }: MarketingPageProps) => {
  useEffect(() => {
    document.title = meta.title;
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", meta.description);
  }, [meta.title, meta.description]);

  const navItems: SectionNavItem[] = sections.map((s) => {
    const t = s.type === "finalCta" ? "Get started" : s.title;
    return { id: s.id, label: t.length > 32 ? t.slice(0, 30) + "…" : t };
  });

  const heroBody = Array.isArray(hero.body) ? hero.body : [hero.body];

  return (
    <PageShell>
      {/* HERO */}
      <section className="relative pt-36 pb-20 overflow-hidden ambient-glow">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] conic-ring opacity-30 pointer-events-none float-y-slow" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6">
          <div className="reveal inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-7">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 pulse-ring" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
            </span>
            <span className="font-mono text-[13px] tracking-[0.16em] text-body uppercase">
              / {hero.eyebrow}
            </span>
          </div>
          <h1 className="reveal reveal-delay-1 display text-4xl sm:text-6xl md:text-7xl leading-[0.98] tracking-tight max-w-5xl">
            {hero.h1}
          </h1>
          <div className="reveal reveal-delay-2 mt-8 max-w-3xl space-y-5 text-lg text-body leading-relaxed">
            {heroBody.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-3">
            {hero.ctas.map((c, i) => renderCta(c, String(i)))}
          </div>
          {hero.support && (
            <p className="mt-10 text-sm text-body max-w-2xl font-mono">{hero.support}</p>
          )}
        </div>
      </section>

      {/* MAIN */}
      <div className="mx-auto max-w-[1400px] px-6 py-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-3">
          <SectionNav items={navItems} />
        </div>

        <div className="lg:col-span-9 space-y-24">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-28">
              <SectionInner section={s} />
            </section>
          ))}
        </div>
      </div>
    </PageShell>
  );
};
