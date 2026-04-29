import { Logo } from "./Logo";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail } from "lucide-react";

const cols = [
  {
    title: "Services",
    links: [
      { label: "GEO & AI Search Visibility", to: "/services" },
      { label: "Citation Architecture", to: "/services" },
      { label: "Technical SEO & Schema", to: "/services" },
      { label: "Content Strategy", to: "/services" },
      { label: "AI Market Intelligence", to: "/services" },
      { label: "Execution Retainers", to: "/services" },
    ],
  },
  {
    title: "Pages",
    links: [
      { label: "Methodology", to: "/methodology" },
      { label: "Case Studies", to: "/case-studies" },
      { label: "Services", to: "/services" },
      { label: "Resources", to: "/resources" },
      { label: "Request an Audit", to: "/request-audit" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "What is GEO?", to: "/resources" },
      { label: "AI Search Visibility", to: "/resources" },
      { label: "Citation Architecture", to: "/resources" },
      { label: "Embedding-Level GEO", to: "/resources" },
      { label: "Cosine Gap Analysis", to: "/resources" },
      { label: "Glossary", to: "/resources" },
    ],
  },
  {
    title: "Agency Partners",
    links: [
      { label: "Partner Program", to: "/agency-partners" },
      { label: "White-Label GEO", to: "/agency-partners" },
      { label: "White-Label Audits", to: "/agency-partners" },
      { label: "Backend Execution", to: "/agency-partners" },
      { label: "Discuss Partnership", to: "/agency-partners" },
    ],
  },
];

export const Footer = () => (
  <footer className="border-t border-border/40" role="contentinfo">
    {/* Top CTA band */}
    <div className="border-b border-border/40 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-12 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8">
          <p className="eyebrow">Ready when you are</p>
          <h3 className="display text-2xl sm:text-4xl mt-3 leading-tight">
            See what's limiting your visibility — across Google, AI, and the source layer.
          </h3>
        </div>
        <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-3">
          <Button
            asChild
            className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 px-6 h-12"
          >
            <Link to="/request-audit">
              REQUEST A VISIBILITY AUDIT{" "}
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" aria-hidden="true" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] border-foreground/30 hover:bg-foreground/5 px-6 h-12"
          >
            <Link to="/agency-partners">DISCUSS AGENCY PARTNERSHIP</Link>
          </Button>
        </div>
      </div>
    </div>

    {/* Main footer */}
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid lg:grid-cols-12 gap-12">
        {/* Brand column */}
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-5 text-base text-body leading-relaxed max-w-sm">
            Visibility across Google, AI answers, and the sources that shape buyer decisions.
          </p>
          <p className="mt-5 text-sm text-body leading-relaxed max-w-sm">
            CiteWorks Studio is a GEO, AI search visibility, and citation architecture agency for
            growth-minded companies.
          </p>
          <a
            href="mailto:hello@citeworksstudio.com"
            className="mt-6 inline-flex items-center gap-2 text-sm text-body hover:text-foreground transition-colors"
          >
            <Mail className="w-4 h-4 text-primary" aria-hidden="true" />
            hello@citeworksstudio.com
          </a>
        </div>

        {/* Link columns */}
        <nav
          aria-label="Footer"
          className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {cols.map((c) => (
            <div key={c.title}>
              <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-primary mb-4">
                {c.title}
              </p>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-body hover:text-foreground transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between gap-4 text-[13px] text-body font-mono tracking-widest">
        <p>© 2026 CITEWORKS STUDIO. ALL RIGHTS RESERVED.</p>
        <div className="flex flex-wrap gap-6">
          <a
            href="mailto:hello@citeworksstudio.com"
            className="hover:text-foreground transition-colors"
          >
            CONTACT
          </a>
          <Link to="/request-audit" className="hover:text-foreground transition-colors">
            REQUEST AUDIT
          </Link>
          <Link to="/agency-partners" className="hover:text-foreground transition-colors">
            AGENCY PARTNERS
          </Link>
        </div>
      </div>
    </div>
  </footer>
);
