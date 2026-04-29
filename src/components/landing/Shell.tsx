import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

/** Scroll to top on route change. */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
};

export const PageShell = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  // Re-bind scroll-reveal observers each route change
  useScrollReveal([pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollToTop />
      <Nav />
      {/* key forces page-enter animation on route change */}
      <main id="main" key={pathname} className="page-enter">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="eyebrow text-center">{children}</p>
);

export const SectionHeading = ({
  eyebrow,
  title,
  body,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "center" | "left";
}) => (
  <div className={align === "center" ? "text-center mx-auto max-w-3xl reveal-on-scroll" : "max-w-3xl reveal-on-scroll"}>
    {eyebrow && <p className={`eyebrow ${align === "center" ? "text-center" : ""}`}>{eyebrow}</p>}
    <h2 className="display text-4xl sm:text-5xl md:text-6xl mt-4">{title}</h2>
    {body && <p className="mt-6 text-muted-foreground leading-relaxed">{body}</p>}
  </div>
);

export const PageHero = ({
  eyebrow,
  title,
  body,
  ctas,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  ctas?: ReactNode;
}) => (
  <section className="relative pt-40 pb-28 overflow-hidden ambient-glow">
    <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
    <div className="absolute inset-0 grid-bg-fine opacity-[0.15] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
    <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] conic-ring opacity-40 pointer-events-none float-y-slow" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />

    <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
      <div className="reveal inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-7">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 pulse-ring" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
        </span>
        <span className="font-mono text-[10px] tracking-[0.22em] text-foreground/80 uppercase">
          / {eyebrow}
        </span>
      </div>
      <h1 className="reveal reveal-delay-1 display text-4xl sm:text-6xl md:text-7xl leading-[0.98]">
        {title}
      </h1>
      {body && (
        <p className="reveal reveal-delay-2 mt-8 mx-auto max-w-2xl text-base sm:text-lg text-foreground/70 leading-relaxed">
          {body}
        </p>
      )}
      {ctas && (
        <div className="reveal reveal-delay-3 mt-10 flex flex-wrap justify-center gap-3">
          {ctas}
        </div>
      )}
    </div>
  </section>
);
