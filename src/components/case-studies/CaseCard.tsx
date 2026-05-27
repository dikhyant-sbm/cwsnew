import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { CaseEntry } from "@/data/caseStudies";

export const CaseCard = ({ c }: { c: CaseEntry }) => {
  const isLive = !!c.href;
  const inner = (
    <>
      <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
        <img
          src={c.image}
          alt={c.title}
          width={1280}
          height={720}
          loading="lazy"
          className={
            "h-full w-full object-cover transition-transform duration-700 " +
            (isLive ? "group-hover:scale-105" : "opacity-70")
          }
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span
            className={
              "font-mono text-[10.5px] tracking-[0.16em] uppercase rounded-full px-2.5 py-1 backdrop-blur-md " +
              (isLive
                ? "bg-primary text-primary-foreground"
                : "bg-background/70 text-tertiary border border-border")
            }
          >
            {c.badge}
          </span>
        </div>
      </div>

      <div className="p-7 flex flex-col flex-1">
        <h3 className="text-xl sm:text-[22px] font-semibold text-heading leading-snug tracking-tight">
          {c.title}
        </h3>
        <p className="mt-3 text-body leading-relaxed text-[14.5px] flex-1">
          {c.excerpt}
        </p>

        <dl className="mt-6 grid grid-cols-1 gap-2.5 border-t border-border pt-5">
          {c.meta.map((m) => (
            <div key={m.k} className="flex items-baseline gap-3 text-[12.5px]">
              <dt className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-tertiary shrink-0 min-w-[64px]">
                {m.k}
              </dt>
              <dd className="text-body leading-snug">{m.v}</dd>
            </div>
          ))}
        </dl>

        <span
          className={
            "mt-6 inline-flex items-center gap-1.5 font-mono text-[12px] font-semibold tracking-[0.14em] uppercase " +
            (isLive
              ? "text-primary group-hover:gap-2.5 transition-all"
              : "text-tertiary")
          }
        >
          {isLive ? (
            <>
              Read it now <ArrowUpRight className="size-3.5" />
            </>
          ) : (
            "Publishing soon"
          )}
        </span>
      </div>
    </>
  );

  const className =
    "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 " +
    (isLive
      ? "hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_hsl(var(--primary)/0.3)]"
      : "opacity-95 cursor-default");

  return isLive ? (
    <Link to={c.href as string} className={className}>
      {inner}
    </Link>
  ) : (
    <div className={className} aria-disabled="true">
      {inner}
    </div>
  );
};
