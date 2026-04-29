import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { ReactNode } from "react";

export const PageShell = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-background text-foreground">
    <Nav />
    <main id="main">{children}</main>
    <Footer />
  </div>
);

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
  <div className={align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}>
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
    <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] conic-ring opacity-40 pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />

    <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
      <div className="reveal inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-7">
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

