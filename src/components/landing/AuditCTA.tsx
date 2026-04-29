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
              Find out where your visibility is breaking down.
            </h2>
            <p className="mt-5 text-foreground/70 text-lg max-w-2xl leading-relaxed">
              A focused diagnostic showing where your company is winning, losing, or missing
              visibility across Google, AI answers, citation sources, and competitor positioning —
              with a corrective-action roadmap.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Button
              asChild
              className="group rounded-full font-mono text-[11px] tracking-[0.22em] bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-12 shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.5)]"
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
