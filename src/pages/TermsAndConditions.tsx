import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Mail } from "lucide-react";
import { PageShell } from "@/components/landing/Shell";
import { SectionNav, type SectionNavItem } from "@/components/landing/SectionNav";

const LAST_UPDATED = "Feb 6, 2026";
const CONTACT_EMAIL = "mark@citeworksstudio.com";

type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "h3"; text: string };

type Section = { id: string; num: string; title: string; blocks: Block[] };

const sections: Section[] = [
  {
    id: "who",
    num: "01",
    title: "Who we work with",
    blocks: [
      { type: "p", text: "Our Services are designed primarily for business clients (companies, brands, agencies, and other organizations)." },
      { type: "p", text: "By engaging our Services, you represent that you are at least 18 years old, and you are authorized to enter into contracts on behalf of the business or organization you represent." },
    ],
  },
  {
    id: "agreements",
    num: "02",
    title: "Relationship with other agreements",
    blocks: [
      { type: "p", text: "These Terms apply to all use of the Site and general provision of the Services." },
      { type: "p", text: "If you sign a separate written Service Agreement, Statement of Work (SOW), proposal, or order form with CiteWorks Studio, that document will govern the specific Services described in it. If there is any conflict between those written terms and these Terms, the written Service Agreement / SOW will prevail for the conflicting part." },
    ],
  },
  {
    id: "services",
    num: "03",
    title: "Services we provide",
    blocks: [
      { type: "p", text: "CiteWorks Studio offers a variety of digital marketing and social media services, such as (without limitation):" },
      { type: "ul", items: [
        "Social media strategy, account setup, and optimization",
        "Content planning, creation, and scheduling",
        "Community management, including engagement on platforms such as Reddit and other social networks",
        "AI-assisted content ideation and drafting",
        "Paid advertising campaign management",
        "Analytics, reporting, and performance optimization",
        "Reputation and brand visibility support",
      ]},
      { type: "p", text: "The specific Services you receive, including deliverables, timelines, platforms, and performance expectations, will be detailed in the Service Agreement / SOW we agree on with you. We may update or modify the Services we offer from time to time, but such changes will not affect a signed SOW except as agreed in writing." },
    ],
  },
  {
    id: "fees",
    num: "04",
    title: "Proposals, fees, and payment",
    blocks: [
      { type: "h3", text: "4.1 Proposals & SOWs" },
      { type: "p", text: "Any proposal, quote, or SOW we provide will describe scope of work; fees and billing model (e.g., retainer, project, performance-based, or hybrid); and expected timelines and milestones (if applicable). Proposals are generally valid only for the period stated in them. After that, we may change pricing or terms." },
      { type: "h3", text: "4.2 Fees & invoicing" },
      { type: "p", text: "Unless otherwise stated in the applicable Service Agreement: fees are exclusive of taxes, payment processor fees, and third-party platform costs (e.g., ad spend), which are your responsibility. We may invoice monthly in advance or as otherwise agreed. Payment terms are typically 7 days from the invoice date." },
      { type: "h3", text: "4.3 Late payments" },
      { type: "p", text: "If payment is late, we may suspend or limit Services until amounts are paid; and/or charge interest on overdue amounts at the maximum rate permitted by law, or 1.5% per month, whichever is lower." },
      { type: "h3", text: "4.4 No refunds (unless agreed)" },
      { type: "p", text: "Due to the nature of marketing and advertising work, fees are generally non-refundable once Services have been initiated, except as explicitly stated in the applicable Service Agreement or required by law." },
    ],
  },
  {
    id: "client-resp",
    num: "05",
    title: "Client responsibilities",
    blocks: [
      { type: "p", text: "To enable us to deliver good results, you agree to:" },
      { type: "ul", items: [
        "Provide accurate information — give us access to relevant brand guidelines, positioning, audience insights, and other information we reasonably request, and ensure that all information you provide is accurate, complete, and not misleading.",
        "Grant access to platforms — provide appropriate access (e.g., admin or partner access) to your social media accounts, ad accounts, analytics tools, website, or other systems as needed, and maintain up-to-date permissions during the engagement.",
        "Review and approve content — promptly review and approve or request changes to drafts, content calendars, and campaign plans. Where you ask us to publish without prior approval, you remain responsible for the content's accuracy and compliance.",
        "Comply with laws and platform rules — ensure your products, services, and offers are lawful in the regions and channels where you operate, and comply with the terms of any third-party platforms (social networks, forums such as Reddit, advertising platforms, etc.).",
        "Own your obligations to your customers — you (not CiteWorks Studio) are responsible for your relationship with your own customers, including support, billing, compliance, and product/service delivery.",
      ]},
    ],
  },
  {
    id: "ai",
    num: "06",
    title: "Use of AI and automation",
    blocks: [
      { type: "p", text: "We may use AI tools and automation (including, but not limited to, large language models and scheduling tools) to support content ideation and drafting, social media and community engagement (including on platforms such as Reddit), reporting and analytics, and internal workflows and quality checks." },
      { type: "p", text: "We use these tools to increase efficiency and scale, but final responsibility for content we publish on your behalf rests with you. You may choose whether drafts require your approval before publishing (subject to the Service Agreement). For regulated industries (e.g., healthcare, financial services), you are responsible for ensuring that content complies with applicable regulations and does not constitute professional advice or unauthorized claims." },
      { type: "p", text: "AI tools may occasionally produce inaccurate, incomplete, or outdated information. Our obligation is to exercise reasonable care, but we cannot guarantee error-free AI outputs." },
    ],
  },
  {
    id: "no-guarantees",
    num: "07",
    title: "No performance or revenue guarantees",
    blocks: [
      { type: "p", text: "Digital marketing, social media, and community engagement outcomes depend on many factors beyond our control, including platform algorithms, competition, budget, creative performance, market conditions, and more." },
      { type: "p", text: "Accordingly, we do not guarantee any particular results, rankings, engagement levels, revenue, or return on ad spend (ROAS). Any examples of past results are for illustrative purposes only and do not represent a promise or guarantee for your business." },
    ],
  },
  {
    id: "ip",
    num: "08",
    title: "Intellectual property",
    blocks: [
      { type: "h3", text: "8.1 Your materials" },
      { type: "p", text: 'You retain ownership of all content, trademarks, logos, brand assets, and other materials you provide to us ("Client Materials"). You grant CiteWorks Studio a non-exclusive, worldwide, royalty-free license to use, reproduce, distribute, display, and modify the Client Materials solely for the purpose of providing the Services. You represent and warrant that you have all rights necessary to grant this license and that our use of the Client Materials in accordance with these Terms will not infringe any third-party rights.' },
      { type: "h3", text: "8.2 Our materials & tools" },
      { type: "p", text: "We retain ownership of our pre-existing tools, templates, processes, methodologies, software, and know-how; and any generic components we develop that are not specific to your brand (e.g., internal frameworks, prompts, workflows). Unless otherwise agreed in writing, those remain our exclusive property." },
      { type: "h3", text: "8.3 Project deliverables" },
      { type: "p", text: "Unless otherwise agreed in the Service Agreement, upon full payment of all fees due, you receive a perpetual, non-exclusive license to use the final deliverables created specifically for you (e.g., content, reports, campaign assets) for your business purposes. We may retain a copy of such deliverables for internal records, portfolio use, and legal compliance, subject to the confidentiality section below." },
      { type: "h3", text: "8.4 Portfolio use" },
      { type: "p", text: "Unless you explicitly forbid it in writing, you grant us the right to reference your brand name and logo as a client, and to use non-confidential summaries of the work and results (where permitted) in our marketing materials, case studies, and pitches. We will not disclose confidential details such as proprietary strategies, unpublished features, or trade secrets without your consent." },
    ],
  },
  {
    id: "third-parties",
    num: "09",
    title: "Third-party platforms & accounts",
    blocks: [
      { type: "p", text: "Our Services often involve working on third-party platforms (e.g., Reddit, Facebook, Instagram, LinkedIn, X, and other websites or tools). You acknowledge that these platforms are operated by third parties, not by CiteWorks Studio; they may change their features, rules, or algorithms without notice; and they may suspend, restrict, or terminate accounts or remove content at their discretion." },
      { type: "p", text: "We are not responsible for platform downtime, bugs, or outages; algorithm changes that impact reach or performance; or account suspensions or penalties resulting from factors outside our control, including your past activities or platform policy changes." },
      { type: "p", text: "If your accounts are suspended or restricted, we can assist at your request where feasible, but we cannot guarantee reinstatement." },
    ],
  },
  {
    id: "confidentiality",
    num: "10",
    title: "Confidentiality & data protection",
    blocks: [
      { type: "h3", text: "10.1 Confidential information" },
      { type: "p", text: '"Confidential Information" means non-public information disclosed by either party to the other (verbally or in writing) that is reasonably understood to be confidential, including business plans, financial information, customer data, marketing strategies, and technical information.' },
      { type: "p", text: "Each party agrees to use the other party's Confidential Information only for purposes of the engagement, and to take reasonable measures to protect it from unauthorized use or disclosure." },
      { type: "p", text: "Exceptions apply where the information is already publicly known without breach of these obligations; independently developed without use of the other party's Confidential Information; lawfully received from a third party without confidentiality obligations; or required to be disclosed by law or court order (with notice where legally permitted)." },
      { type: "h3", text: "10.2 Data protection" },
      { type: "p", text: "If, in the course of delivering the Services, we process any personal data on your behalf, each party will comply with applicable data protection laws. If a formal data processing agreement is required under applicable law, we will enter into such an agreement separately." },
    ],
  },
  {
    id: "term",
    num: "11",
    title: "Term & termination",
    blocks: [
      { type: "p", text: "Unless otherwise specified in the applicable Service Agreement, the engagement starts on the effective date of the signed proposal / SOW or the date you first pay for Services (whichever is earlier). Either party may terminate an ongoing engagement by giving 30 days' written notice." },
      { type: "p", text: "We may terminate or suspend the Services immediately if you fail to pay amounts due within a reasonable period; you materially breach these Terms or the Service Agreement; or your use of the Services or content is unlawful or exposes us to potential legal or reputational risk." },
      { type: "p", text: "Upon termination, you must pay all fees due up to the effective termination date. We are not obliged to refund any amounts already paid, except as expressly provided in the Service Agreement or required by law. Any Sections that by their nature should survive (e.g., Intellectual Property, Confidentiality, Limitation of Liability, Indemnity, Governing Law) will continue to apply." },
    ],
  },
  {
    id: "disclaimers",
    num: "12",
    title: "Disclaimers",
    blocks: [
      { type: "p", text: "To the fullest extent permitted by law:" },
      { type: "ul", items: [
        'The Site and Services are provided on an "as is" and "as available" basis.',
        "We disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.",
        "We do not warrant that the Site or Services will be uninterrupted, secure, or error-free.",
      ]},
      { type: "p", text: "Where we provide strategic, marketing, or business recommendations, they are based on our expertise and available data at the time, but you remain responsible for your business decisions." },
    ],
  },
  {
    id: "liability",
    num: "13",
    title: "Limitation of liability",
    blocks: [
      { type: "p", text: "To the maximum extent permitted by law, CiteWorks Studio shall not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of profits, revenue, data, or goodwill, even if we have been advised of the possibility of such damages." },
      { type: "p", text: "Our total aggregate liability arising out of or related to the Site, the Services, or these Terms, whether in contract, tort, or otherwise, will be limited to the amount of fees you paid to CiteWorks Studio under the relevant Service Agreement in the 3 / 6 / 12 months immediately preceding the event giving rise to the claim." },
      { type: "p", text: "Some jurisdictions do not allow certain exclusions or limitations of liability, so some of the above may not apply to you. In such cases, our liability will be limited to the fullest extent permitted by applicable law." },
    ],
  },
  {
    id: "indemnification",
    num: "14",
    title: "Indemnification",
    blocks: [
      { type: "p", text: "You agree to indemnify, defend, and hold harmless CiteWorks Studio and its directors, officers, employees, and contractors from and against any claims, damages, liabilities, costs, and expenses (including reasonable legal fees) arising out of or related to:" },
      { type: "ul", items: [
        "Your breach of these Terms or any Service Agreement;",
        "Your use of the Site or Services;",
        "Any Client Materials or content we publish on your behalf at your direction or with your approval;",
        "Your violation of any third-party rights or applicable laws.",
      ]},
    ],
  },
  {
    id: "changes",
    num: "15",
    title: "Changes to these terms",
    blocks: [
      { type: "p", text: 'We may update these Terms from time to time. When we do, we will post the updated Terms on this page with a new "Last updated" date. If the changes are material, we may also provide additional notice (e.g., by email or through the Site).' },
      { type: "p", text: "Your continued use of the Site or Services after any changes become effective constitutes your acceptance of the updated Terms." },
    ],
  },
  {
    id: "contact",
    num: "16",
    title: "Contact us",
    blocks: [
      { type: "p", text: "If you have any questions about these Terms or our Services, please contact us at:" },
      { type: "ul", items: ["Company name: CiteWorks Studio", "Website: citeworksstudio.com", `Email: ${CONTACT_EMAIL}`] },
    ],
  },
];

const onThisPage: SectionNavItem[] = sections.map((s) => ({
  id: s.id,
  label: `${s.num}. ${s.title}`,
}));

const TermsAndConditions = () => {
  useEffect(() => {
    document.title = "Terms and Conditions | CiteWorks Studio";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Terms of Service governing your access to and use of the CiteWorks Studio website and Services.",
      );
    }
  }, []);

  return (
    <PageShell>
      {/* HERO */}
      <section className="relative pt-32 pb-16 overflow-hidden ambient-glow">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] conic-ring opacity-30 pointer-events-none float-y-slow" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.16em] uppercase text-body hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>

          <div className="reveal inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-7">
            <FileText className="w-3.5 h-3.5 text-primary" />
            <span className="font-mono text-[13px] tracking-[0.16em] text-body uppercase">
              / Legal
            </span>
          </div>

          <h1 className="reveal reveal-delay-1 display text-4xl sm:text-6xl md:text-7xl leading-[0.98] tracking-tight">
            Terms and Conditions
          </h1>

          <p className="reveal reveal-delay-2 mt-6 font-mono text-[13px] tracking-[0.14em] uppercase text-body">
            Last updated: {LAST_UPDATED}
          </p>

          <div className="reveal reveal-delay-2 mt-8 max-w-3xl space-y-5 text-body leading-relaxed">
            <p>
              Welcome to CiteWorks Studio ("CiteWorks Studio", "we", "us", or "our"). These Terms
              of Service ("Terms") govern your access to and use of our website at
              citeworksstudio.com (the "Site"), and our marketing, advertising, social media,
              AI-powered engagement, consulting, and related services (collectively, the
              "Services").
            </p>
            <p>
              By using the Site, submitting an inquiry, or entering into a proposal, order form,
              or service agreement with us (each, a "Service Agreement"), you agree to be bound by
              these Terms. If you do not agree to these Terms, please do not use the Site or our
              Services.
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
              Questions about these terms?
            </h2>
            <p className="mt-4 text-body leading-relaxed max-w-2xl">
              Reach out and we'll respond promptly.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 items-center">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-mono text-sm text-primary hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              <Link
                to="/privacy-policy"
                className="font-mono text-[12px] tracking-[0.16em] uppercase text-body hover:text-foreground transition-colors"
              >
                Privacy Policy →
              </Link>
            </div>
          </section>
        </div>
      </div>
    </PageShell>
  );
};

export default TermsAndConditions;
