import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";

const points = [
  "White-label visibility audits & AI search audits",
  "GEO strategy & embedding-level optimization",
  "Citation architecture for high-value clients",
  "Backend execution without hiring an in-house team",
];

export const AgencyPreview = () => (
  <section className="py-28 border-t border-border/40">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <p className="eyebrow">Agency partners</p>
          <h2 className="display text-4xl sm:text-5xl mt-5 leading-[1.05]">
            Give clients GEO and AI search capability without building the backend in-house.
          </h2>
          <p className="mt-6 text-body text-lg leading-relaxed">
            CiteWorks Studio supports white-label and collaborative delivery for agencies serving
            high-value clients. Strengthen pitches, expand SEO accounts into AI search, and retain
            clients with stronger strategy.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              className="group rounded-full font-mono text-[13px] tracking-[0.16em] bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-12"
            >
              <Link to="/agency-partners">
                EXPLORE AGENCY PARTNERSHIPS
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="glass border-gradient rounded-2xl p-8">
            <p className="font-mono text-[12px] tracking-[0.16em] text-primary mb-5">
              PARTNER CAPABILITIES
            </p>
            <ul className="space-y-4">
              {points.map((p) => (
                <li key={p} className="flex gap-3 items-start">
                  <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground/85">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);
