import { Logo } from "./Logo";

const cols = [
  { title: "Product", links: ["Prompt Research", "Visibility Monitoring", "Optimization Actions", "AEO Writer", "Agentic Commerce", "Crawlers & Agents", "Analytics"] },
  { title: "Use Cases", links: ["Agencies", "Travel & Hospitality", "Fintech", "Enterprise", "SaaS", "Commerce & Retail"] },
  { title: "Resources", links: ["Blog", "Case Studies", "Guides", "Glossary"] },
  { title: "Company", links: ["About", "Pricing", "Careers", "Contact"] },
];

export const Footer = () => (
  <footer className="border-t border-border/40 py-16">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            The end-to-end AEO platform.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">{c.title}</p>
            <ul className="space-y-3">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted-foreground font-mono">
        <p>© 2026 GOODIE. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">PRIVACY</a>
          <a href="#" className="hover:text-foreground">TERMS</a>
        </div>
      </div>
    </div>
  </footer>
);
