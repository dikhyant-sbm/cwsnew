import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export const AuditCTA = () => (
  <section className="py-20 border-t border-border/40">
    <div className="mx-auto max-w-6xl px-6">
      <div className="relative glass-strong rounded-3xl border-gradient p-10 sm:p-14 overflow-hidden">
        <div className="absolute -top-32 -right-20 w-96 h-96 conic-ring opacity-50 pointer-events-none" />
        <div className="relative grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <p className="eyebrow">Visibility Audit</p>
            <h2 className="display text-3xl sm:text-5xl mt-5 leading-[1.05]">
              Start with a Visibility Audit.
            </h2>
            <p className="mt-5 text-body text-lg max-w-2xl leading-relaxed">
              Before you invest in more content, more SEO, or more authority-building, find out
              where your visibility is actually breaking down — across Google rankings, AI answers,
              citation sources, competitor positioning, technical SEO, content structure, entity
              clarity, and source authority. Then we turn the findings into a practical roadmap for
              improving visibility, retrieval, and recommendation strength.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Button
              asChild
              className="group rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-14 shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.5)]"
            >
              <Link to="/request-audit">
                REQUEST A VISIBILITY AUDIT
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
