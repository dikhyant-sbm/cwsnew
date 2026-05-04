import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Mail, Shield } from "lucide-react";
import { PageShell } from "@/components/landing/Shell";
import { SectionNav, type SectionNavItem } from "@/components/landing/SectionNav";

const LAST_UPDATED = "Dec 4, 2025";
const CONTACT_EMAIL = "mark@citeworksstudio.com";

type Section = {
  id: string;
  num: string;
  title: string;
  blocks: ({ type: "p"; text: string } | { type: "ul"; items: string[] } | { type: "h3"; text: string })[];
};

const sections: Section[] = [
  {
    id: "contact",
    num: "01",
    title: "Who we are and how to contact us",
    blocks: [
      { type: "p", text: "CiteWorks Studio is a digital marketing and social media services company that helps brands increase their online presence and engagement, including on platforms such as Reddit and other social networks." },
      { type: "p", text: "If you have any questions about this Policy or how we handle your data, you can contact us at:" },
      { type: "ul", items: ["Company name: CiteWorks Studio", `Email: ${CONTACT_EMAIL}`, "Website: citeworksstudio.com"] },
    ],
  },
  {
    id: "scope",
    num: "02",
    title: "Scope — who this policy applies to",
    blocks: [
      { type: "p", text: "This Privacy Policy applies to:" },
      { type: "ul", items: [
        "Website visitors",
        "Prospective clients and leads",
        "Clients and their representatives",
        "People whose information we process in the course of providing Services to our clients (e.g., social media users we interact with on behalf of clients)",
      ]},
      { type: "p", text: "When we handle personal data on behalf of our clients (for example, interacting with their audiences on social media), we generally act as a processor/service provider, and the client's own privacy policy and instructions govern how that data is ultimately used." },
      { type: "p", text: "If you believe a brand we work with has shared your data with us, you may also need to contact that brand directly to exercise your rights." },
    ],
  },
  {
    id: "info-collected",
    num: "03",
    title: "Information we collect",
    blocks: [
      { type: "p", text: "The information we collect depends on how you interact with us." },
      { type: "h3", text: "3.1 Information you provide directly" },
      { type: "p", text: "You may provide personal information to us when you:" },
      { type: "ul", items: [
        "Fill out a contact or inquiry form on our Site",
        "Request a proposal or sign a Service Agreement",
        "Subscribe to a newsletter or updates",
        "Communicate with us by email, phone, or social media",
        "Provide access to your social media or advertising accounts so we can manage them on your behalf",
        "Make payments for our Services",
      ]},
      { type: "p", text: "This may include contact details (name, business name, job title, email, phone, country); account and access details (usernames, page IDs, roles or permissions on platforms such as Reddit and other social networks, advertising platforms, and analytics tools); business information (company, products or services, target audience, marketing goals, brand guidelines); billing information (invoicing details, billing address, tax information — payment card details are typically processed by third-party payment processors and we do not store full card details); and content and communications (emails, messages, files you upload such as briefs, customer lists, or content)." },
      { type: "h3", text: "3.2 Information we collect automatically" },
      { type: "p", text: "When you visit our Site or interact with our Services, we may automatically collect certain information using cookies and similar technologies (see Section 9). This can include usage data (pages visited, links clicked, time spent on pages, referring URLs) and device and technical data (IP address, browser type and version, device type, operating system, approximate location, and other technical identifiers). We use this information to maintain and improve our Site, understand how visitors use it, and secure our systems." },
      { type: "h3", text: "3.3 Information we receive from third parties" },
      { type: "p", text: "We may receive information about you from clients (if you are an employee, representative, or customer of one of our clients); from social media and advertising platforms when you connect or grant us access (e.g., Reddit, Facebook, Instagram, LinkedIn, Google, X), including account-related data, analytics, and engagement metrics as allowed by the platform's APIs and your permissions; and from partners and service providers such as analytics providers, CRM tools, or lead sources." },
    ],
  },
  {
    id: "use",
    num: "04",
    title: "How we use your information",
    blocks: [
      { type: "p", text: "We use personal information to provide and manage our Services (setting up and managing client accounts; planning, executing, and optimizing marketing campaigns and social media activities; creating and publishing content, including AI-assisted content subject to your approvals and instructions; monitoring and reporting performance); to communicate with you (responding to inquiries, sending service-related notifications, sending administrative information, invoices, and reminders); to operate, improve, and secure our Site and Services (analyzing how visitors use our Site; troubleshooting and improving functionality; detecting and preventing fraud and security incidents); to market our Services (newsletters and promotional communications where permitted by law; case studies and testimonials with appropriate consent); and to comply with legal obligations and enforce rights." },
    ],
  },
  {
    id: "legal-bases",
    num: "05",
    title: "Legal bases for processing (where applicable)",
    blocks: [
      { type: "p", text: "If you are in a region that requires a legal basis for processing (such as the European Economic Area or UK), we rely on one or more of the following:" },
      { type: "ul", items: [
        "Performance of a contract — when processing is necessary to provide the Services or take steps at your request before entering into a contract.",
        "Legitimate interests — for example, to manage relationships with clients, improve our Services, secure our systems, and carry out marketing activities in a proportionate and privacy-respecting way.",
        "Consent — where required by law (e.g., certain marketing communications or non-essential cookies). You can withdraw consent at any time.",
        "Legal obligations — where processing is necessary to comply with applicable laws and regulations.",
      ]},
    ],
  },
  {
    id: "sharing",
    num: "06",
    title: "How we share personal information",
    blocks: [
      { type: "p", text: "We do not sell your personal information. We may share it in the following limited situations:" },
      { type: "ul", items: [
        "Service providers and vendors — trusted third parties that perform services for us, such as hosting and infrastructure, analytics, CRM, email tools, payment processing, and collaboration tools. They may only process personal information as necessary to provide services to us and must protect it appropriately.",
        "Clients (when acting as a processor) — when we process information on behalf of a client, we may share relevant data and reports with that client in accordance with our contract and their instructions.",
        "Social media and advertising platforms — when we manage your presence or campaigns on third-party platforms, information may be shared with those platforms as needed, according to their own terms and privacy policies.",
        "Business transfers — if we are involved in a merger, acquisition, restructuring, or sale of assets, personal information may be transferred as part of that transaction, subject to appropriate confidentiality protections.",
        "Legal and safety reasons — to comply with laws or court orders, respond to lawful requests from authorities, protect rights, property, or safety, and detect or investigate fraud, abuse, or security incidents.",
      ]},
    ],
  },
  {
    id: "transfers",
    num: "07",
    title: "International data transfers",
    blocks: [
      { type: "p", text: "Because we work with clients and service providers in different countries, your personal information may be transferred to, stored, and processed in jurisdictions other than your own, which may have different data protection laws." },
      { type: "p", text: "Where required by law, we take steps to ensure that appropriate safeguards are in place for such transfers, such as contractual protections (e.g., standard contractual clauses) and/or transfers to countries recognized as providing an adequate level of protection." },
    ],
  },
  {
    id: "retention",
    num: "08",
    title: "Data retention",
    blocks: [
      { type: "p", text: "We retain personal information for as long as reasonably necessary to provide the Services to you or our clients, fulfill the purposes described in this Privacy Policy, comply with legal, tax, and accounting requirements, and resolve disputes and enforce our agreements. When no longer needed, we will take reasonable steps to delete or anonymize the information. The specific retention period may vary depending on the type of data and our legal obligations." },
    ],
  },
  {
    id: "cookies",
    num: "09",
    title: "Cookies and similar technologies",
    blocks: [
      { type: "p", text: "We may use cookies, pixels, and similar technologies on our Site to remember your preferences and settings, analyze how visitors use and navigate the Site, and improve our Site and marketing efforts." },
      { type: "p", text: "The types of cookies we may use include:" },
      { type: "ul", items: [
        "Strictly necessary cookies — required for basic Site functionality.",
        "Analytics/performance cookies — help us understand Site usage and improve performance.",
        "Functionality cookies — remember your choices and preferences.",
        "Advertising/marketing cookies — help us or partners show more relevant ads (if used).",
      ]},
      { type: "p", text: "You can usually control cookies through your browser settings or cookie banners (where provided), including blocking or deleting them. However, if you disable certain cookies, some parts of the Site may not function properly." },
    ],
  },
  {
    id: "rights",
    num: "10",
    title: "Your rights and choices",
    blocks: [
      { type: "p", text: "Depending on your location and applicable law, you may have some or all of the following rights regarding your personal information:" },
      { type: "ul", items: [
        "Access — obtain confirmation of whether we process your personal data and receive a copy.",
        "Correction — request correction of inaccurate or incomplete information.",
        "Deletion — request that we delete your personal data, subject to certain exceptions.",
        "Restriction — request that we limit the processing of your information in certain circumstances.",
        "Objection — object to processing based on our legitimate interests or for direct marketing.",
        "Data portability — receive personal data in a structured, commonly used, machine-readable format and have it transferred to another controller, where technically feasible.",
        "Withdraw consent — where we rely on consent, you can withdraw it at any time.",
      ]},
      { type: "p", text: `To exercise your rights, please contact us at ${CONTACT_EMAIL}. We may need to verify your identity before responding. If you receive marketing emails from us, you can opt out at any time by using the unsubscribe link in the email or contacting us directly. If you are in the EEA/UK and believe we have not handled your data properly, you also have the right to lodge a complaint with your local data protection authority.` },
    ],
  },
  {
    id: "children",
    num: "11",
    title: "Children's privacy",
    blocks: [
      { type: "p", text: "Our Site and Services are intended primarily for business users and are not directed to children under the age of 16 (or the age required by your local law). We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us, and we will take appropriate steps to delete such information." },
    ],
  },
  {
    id: "security",
    num: "12",
    title: "Security",
    blocks: [
      { type: "p", text: "We use reasonable technical and organizational measures to protect personal information from accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access. However, no method of transmission over the internet or method of electronic storage is completely secure. While we strive to protect your information, we cannot guarantee absolute security." },
      { type: "p", text: "If you believe your interaction with us is no longer secure (for example, you suspect your account access with us has been compromised), please contact us immediately." },
    ],
  },
  {
    id: "third-parties",
    num: "13",
    title: "Third-party websites and services",
    blocks: [
      { type: "p", text: "Our Site or communications may contain links to third-party websites, services, or social media platforms. We are not responsible for the privacy practices of those third parties. We encourage you to review the privacy policies of any third-party sites or services you use." },
    ],
  },
  {
    id: "processor",
    num: "14",
    title: "Acting on behalf of our clients (processor role)",
    blocks: [
      { type: "p", text: "When we provide Services to clients, we may process personal data (for example, social media usernames, comments, or other engagement data) strictly on their instructions. In these situations the client is usually the controller of the personal data, and we act as a processor/service provider under our contract with them." },
      { type: "p", text: "If you are an end user or customer of one of our clients and have questions or requests about your personal information, please contact the relevant client directly. We will support them, as appropriate, in responding to your requests." },
    ],
  },
  {
    id: "changes",
    num: "15",
    title: "Changes to this privacy policy",
    blocks: [
      { type: "p", text: 'We may update this Privacy Policy from time to time. When we do, we will post the updated Policy on this page with a new "Last updated" date. If the changes are material, we may also provide additional notice (e.g., by email or via the Site), where required by law.' },
      { type: "p", text: "Your continued use of the Site or Services after any changes become effective means you accept the updated Policy." },
    ],
  },
];

const onThisPage: SectionNavItem[] = sections.map((s) => ({
  id: s.id,
  label: `${s.num}. ${s.title}`,
}));

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | CiteWorks Studio";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "How CiteWorks Studio collects, uses, discloses, and safeguards personal information across our Site and Services.",
      );
    }
  }, []);

  return (
    <PageShell>
      {/* HERO */}
      <section className="relative pt-36 pb-16 overflow-hidden ambient-glow">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] conic-ring opacity-30 pointer-events-none float-y-slow" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6">
          <div className="reveal inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-7">
            <Shield className="w-3.5 h-3.5 text-primary" />
            <span className="font-mono text-[13px] tracking-[0.16em] text-body uppercase">
              / Legal
            </span>
          </div>

          <h1 className="reveal reveal-delay-1 display text-4xl sm:text-6xl md:text-7xl leading-[0.98] tracking-tight">
            Privacy Policy
          </h1>

          <p className="reveal reveal-delay-2 mt-6 font-mono text-[13px] tracking-[0.14em] uppercase text-body">
            Last updated: {LAST_UPDATED}
          </p>

          <div className="reveal reveal-delay-2 mt-8 max-w-3xl space-y-5 text-body leading-relaxed">
            <p>
              This Privacy Policy explains how CiteWorks Studio ("CiteWorks Studio", "we", "us", or
              "our") collects, uses, discloses, and safeguards personal information when you visit
              our website citeworksstudio.com ("Site"), communicate with us (e.g., by email,
              contact forms, or social media), or use our marketing, social media, community
              management, AI-powered, and related services (collectively, the "Services").
            </p>
            <p>
              By using our Site or Services, you agree to the practices described in this Privacy
              Policy. If you do not agree, please do not use the Site or Services.
            </p>
            <p className="text-sm italic text-body/80">
              This Privacy Policy is for general information only and does not constitute legal
              advice.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <div className="mx-auto max-w-[1400px] px-6 py-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-3">
          <SectionNav items={onThisPage} />
        </div>

        <div className="lg:col-span-9 space-y-16">
          {sections.map((s) => (
            <section
              key={s.id}
              id={s.id}
              className="scroll-mt-28 border-t border-border/50 pt-10 first:border-t-0 first:pt-0"
            >
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-mono text-[12px] tracking-[0.18em] text-primary">
                  / {s.num}
                </span>
                <h2 className="display text-2xl sm:text-3xl leading-tight tracking-tight">
                  {s.title}
                </h2>
              </div>
              <div className="space-y-5 max-w-3xl">
                {s.blocks.map((b, i) => {
                  if (b.type === "p")
                    return (
                      <p key={i} className="text-body leading-relaxed">
                        {b.text}
                      </p>
                    );
                  if (b.type === "h3")
                    return (
                      <h3
                        key={i}
                        className="font-mono text-[13px] tracking-[0.14em] uppercase text-foreground pt-2"
                      >
                        {b.text}
                      </h3>
                    );
                  return (
                    <ul key={i} className="space-y-2">
                      {b.items.map((it, j) => (
                        <li key={j} className="flex gap-3 text-body leading-relaxed">
                          <span className="text-primary mt-2 shrink-0">·</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  );
                })}
              </div>
            </section>
          ))}

          {/* Contact CTA */}
          <section className="card-premium p-10 mt-8">
            <Mail className="w-7 h-7 text-primary mb-5" />
            <h2 className="display text-2xl sm:text-3xl leading-tight tracking-tight">
              Questions about this policy?
            </h2>
            <p className="mt-4 text-body leading-relaxed max-w-2xl">
              Reach out to our team and we'll respond promptly.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 items-center">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-mono text-sm text-primary hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              <Link
                to="/about"
                className="font-mono text-[12px] tracking-[0.16em] uppercase text-body hover:text-foreground transition-colors"
              >
                About CiteWorks →
              </Link>
            </div>
          </section>
        </div>
      </div>
    </PageShell>
  );
};

export default PrivacyPolicy;
