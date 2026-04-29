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
  <section className="relative pt-40 pb-24 overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" />
    <div className="relative mx-auto max-w-5xl px-6 text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="display text-4xl sm:text-6xl md:text-7xl text-foreground leading-[0.98] mt-6">
        {title}
      </h1>
      {body && (
        <p className="mt-8 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          {body}
        </p>
      )}
      {ctas && <div className="mt-10 flex flex-wrap justify-center gap-3">{ctas}</div>}
    </div>
  </section>
);
