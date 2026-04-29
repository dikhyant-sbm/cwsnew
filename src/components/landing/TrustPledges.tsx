import { ShieldCheck, ScrollText, Layers, Lock, BarChart3, AlertTriangle } from "lucide-react";

const pledges = [
  {
    icon: ScrollText,
    title: "Audit-led corrective action",
    body: "Every engagement begins with diagnosis — not a templated content calendar or generic SEO checklist.",
  },
  {
    icon: Layers,
    title: "Google + AI answers + Source-Layer Authority",
    body: "We measure and improve visibility across all three layers as one connected system.",
  },
  {
    icon: BarChart3,
    title: "Executive-ready reporting",
    body: "Board-grade visibility movement, top risks, recoverable opportunities, and recommended next actions.",
  },
  {
    icon: Lock,
    title: "White-label and confidential delivery",
    body: "Available for agency partners. Your brand stays in front of the client. We stay invisible.",
  },
  {
    icon: AlertTriangle,
    title: "No guaranteed rankings or AI recommendations",
    body: "Search and AI systems are probabilistic. We commit to evidence-led improvement, not promises we can't keep.",
  },
  {
    icon: ShieldCheck,
    title: "Built for revenue-critical visibility",
    body: "For companies where visibility, trust, comparison, and recommendation strength directly affect revenue.",
  },
];

export const TrustPledges = () => (
  <section className="py-24 border-t border-border/40">
    <div className="mx-auto max-w-7xl px-6">
      <div className="reveal-on-scroll text-center max-w-3xl mx-auto">
        <p className="eyebrow">How we work</p>
        <h2 className="display text-4xl sm:text-5xl mt-4">
          What you can expect from CiteWorks Studio.
        </h2>
        <p className="mt-6 text-body leading-relaxed">
          Six commitments that define how we engage, deliver, and report — for executive teams and agency partners.
        </p>
      </div>

      <ul className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {pledges.map(({ icon: Icon, title, body }, i) => (
          <li
            key={title}
            className="card-premium p-6 reveal-on-scroll"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/20">
              <Icon className="size-4 text-primary" strokeWidth={1.5} aria-hidden />
            </div>
            <h3 className="display text-lg mt-5">{title}</h3>
            <p className="text-sm text-body mt-3 leading-relaxed">{body}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
