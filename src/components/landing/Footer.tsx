import { Logo } from "./Logo";
import { Link } from "react-router-dom";

const cols = [
  {
    title: "Services",
    links: [
      { label: "GEO & AI Search Visibility", to: "/services" },
      { label: "Citation Architecture", to: "/services" },
      { label: "Technical SEO & Schema", to: "/services" },
      { label: "Content Strategy", to: "/services" },
      { label: "AI Market Intelligence", to: "/services" },
      { label: "Visibility Audits", to: "/request-audit" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Methodology", to: "/methodology" },
      { label: "Case Studies", to: "/case-studies" },
      { label: "Agency Partners", to: "/agency-partners" },
      { label: "Resources", to: "/resources" },
      { label: "Request an Audit", to: "/request-audit" },
    ],
  },
  {
    title: "Models Tracked",
    links: [
      { label: "ChatGPT", to: "/resources" },
      { label: "Gemini", to: "/resources" },
      { label: "Perplexity", to: "/resources" },
      { label: "Copilot", to: "/resources" },
      { label: "Google AI Overviews", to: "/resources" },
      { label: "Claude", to: "/resources" },
    ],
  },
  {
    title: "Topics",
    links: [
      { label: "What is GEO?", to: "/resources" },
      { label: "Embedding-Level GEO", to: "/resources" },
      { label: "Cosine Gap Analysis", to: "/resources" },
      { label: "Source-Layer Authority", to: "/resources" },
    ],
  },
];

export const Footer = () => (
  <footer className="border-t border-border/40 py-16">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
            Visibility across Google, AI answers, and the sources that shape buyer decisions.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary mb-4">{c.title}</p>
            <ul className="space-y-3">
              {c.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between gap-4 text-[11px] text-muted-foreground font-mono tracking-widest">
        <p>© 2026 CITEWORKS STUDIO. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6">
          <a href="mailto:hello@citeworksstudio.com" className="hover:text-foreground transition-colors">CONTACT</a>
          <Link to="/request-audit" className="hover:text-foreground transition-colors">REQUEST AUDIT</Link>
        </div>
      </div>
    </div>
  </footer>
);
