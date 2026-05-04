export type JobSection =
  | { type: "prose"; eyebrow: string; title: string; paragraphs: string[] }
  | { type: "list"; eyebrow: string; title: string; intro?: string; items: string[]; outro?: string }
  | {
      type: "groupedList";
      eyebrow: string;
      title: string;
      groups: { label: string; items: string[] }[];
    }
  | {
      type: "cards";
      eyebrow: string;
      title: string;
      intro?: string;
      cards: { h: string; b: string }[];
    }
  | {
      type: "glossary";
      eyebrow: string;
      title: string;
      terms: { term: string; definition: string }[];
    };

export type Job = {
  slug: string;
  title: string;
  team: string;
  location: string;
  shortBlurb: string;
  intro: string[];
  sections: JobSection[];
};

export const jobs: Job[] = [
  {
    slug: "head-of-ai-visibility-product",
    title: "Head of AI Visibility Product",
    team: "Product",
    location: "Remote · United States preferred",
    shortBlurb:
      "Lead the product roadmap for AI visibility dashboards, recommendation tracking, citation tracking, prompt-cluster monitoring, competitor visibility reports, customer review intelligence, and executive reporting systems.",
    intro: [
      "CiteWorks Studio is hiring a Head of AI Visibility Product to lead the development of productized SaaS workflows for AI search visibility, generative engine optimization, citation intelligence, recommendation tracking, customer review intelligence, and executive brand visibility reporting.",
      "This leadership role focuses on turning CiteWorks Studio's agency methodology into scalable software systems that help enterprise brands understand where they appear, where competitors outperform them, which sources influence AI-generated answers, and what actions can improve visibility across Google, ChatGPT, Claude, Gemini, Perplexity, Google AI Overviews, Microsoft Copilot, and other generative search systems.",
      "The Head of AI Visibility Product will own the roadmap for AI visibility dashboards, recommendation tracking, citation tracking, prompt-cluster monitoring, competitor visibility reports, customer review and survey intelligence, and executive reporting systems.",
    ],
    sections: [
      {
        type: "list",
        eyebrow: "Overview",
        title: "What is AI visibility product leadership?",
        intro:
          "AI visibility product leadership is the practice of building software systems that measure, explain, and improve how brands appear across large language models, generative search systems, AI-generated answers, traditional search engines, citation environments, review ecosystems, and competitive recommendation surfaces. For modern enterprise brands, AI visibility often includes understanding:",
        items: [
          "how often a brand appears inside AI-generated answers",
          "where a brand is cited, recommended, compared, or excluded",
          "which trusted sources influence AI-generated answers",
          "how competitors are positioned across generative search systems",
          "how customer reviews, surveys, third-party mentions, and source authority affect brand visibility",
          "how prompt clusters reveal buyer intent across AI search environments",
          "how semantic gaps, entity gaps, and citation gaps affect whether a brand is surfaced by AI systems",
        ],
        outro:
          "AI visibility product leadership helps turn these complex signals into dashboards, workflows, reports, benchmarks, and recommendations that enterprise teams can use to improve discoverability, authority, and recommendation placement.",
      },
      {
        type: "list",
        eyebrow: "The role",
        title: "What does a Head of AI Visibility Product do?",
        intro:
          "A Head of AI Visibility Product leads the product strategy, roadmap, and execution systems for software that helps organizations understand and improve how they are discovered, cited, positioned, and recommended across AI search environments. The role focuses on building productized systems that track:",
        items: [
          "AI recommendation visibility",
          "AI citation frequency",
          "prompt-cluster performance",
          "competitor presence across large language models",
          "source attribution patterns",
          "customer review and survey signals",
          "semantic relevance gaps",
          "executive-level visibility trends",
          "corrective-action workflows for GEO, SEO, content, citations, and authority-building",
        ],
        outro:
          "This role is responsible for transforming CiteWorks Studio's strategic methodology into repeatable software workflows that clients can use to measure visibility, diagnose gaps, prioritize action, and track progress over time.",
      },
      {
        type: "list",
        eyebrow: "Role overview",
        title: "Role overview",
        intro:
          "The Head of AI Visibility Product will lead product strategy for CiteWorks Studio's AI visibility platform, dashboards, reporting systems, and SaaS workflows. This role will guide initiatives that productize:",
        items: [
          "AI visibility dashboards",
          "AI recommendation tracking",
          "citation and source attribution tracking",
          "prompt-cluster monitoring",
          "competitor visibility reports",
          "customer review intelligence",
          "customer survey intelligence",
          "semantic gap analysis",
          "executive reporting",
          "corrective-action recommendations",
          "roadmap prioritization for GEO, SEO, citations, reviews, and content systems",
        ],
        outro:
          "This role combines SaaS product leadership, AI search intelligence, enterprise SEO, analytics, customer insight systems, generative engine optimization, and executive-facing reporting.",
      },
      {
        type: "list",
        eyebrow: "Responsibilities",
        title: "Key responsibilities",
        intro:
          "The Head of AI Visibility Product will own the strategy, roadmap, and product development process for CiteWorks Studio's AI visibility product ecosystem. Responsibilities include:",
        items: [
          "leading the product roadmap for AI visibility dashboards, SaaS workflows, client portals, reporting systems, and intelligence products",
          "translating CiteWorks Studio's agency methodology into repeatable product features, dashboard modules, scoring systems, and client-facing workflows",
          "defining how the product tracks AI recommendation visibility, citation frequency, source attribution, prompt-cluster performance, and competitor visibility",
          "building product requirements for dashboards that show where brands appear, where competitors appear, which prompts matter, which sources influence answers, and what actions should happen next",
          "developing customer review and survey intelligence features that connect voice-of-customer data to AI visibility, semantic relevance, authority signals, and brand positioning",
          "working with engineering, data science, design, strategy, and research teams to turn AI search analysis into scalable software functionality",
          "designing workflows that help clients move from measurement to corrective action across SEO, GEO, citation architecture, content updates, authority-building, and review strategy",
          "creating executive reporting systems that communicate AI visibility trends, competitive movement, recommendation share, citation strength, and business-relevant outcomes",
          "defining product metrics for adoption, activation, retention, visibility improvement, reporting usefulness, and enterprise customer value",
          "supporting sales and customer success teams with product narratives, demo flows, use cases, and strategic explanations for enterprise buyers",
          "prioritizing features based on client needs, market opportunity, technical feasibility, and CiteWorks Studio's category-defining position in AI search visibility",
          "helping build the operating bridge between CiteWorks Studio's service delivery model and its future SaaS/Solutions product model",
        ],
      },
      {
        type: "prose",
        eyebrow: "Why it matters",
        title: "Why AI visibility product matters",
        paragraphs: [
          "Large language models do not simply return lists of websites. They generate answers, recommendations, comparisons, summaries, and citations that shape which brands buyers notice, trust, compare, and remember.",
          "As AI systems become a primary interface for information discovery, organizations need to understand whether they appear inside AI-generated answers, whether they are recommended when buyers ask high-intent questions, whether competitors are being cited more often, whether customer reviews reinforce or weaken brand authority, whether trusted sources describe the brand accurately, whether owned content is semantically aligned with the way AI systems retrieve information, and whether the brand's intended positioning matches how machine systems interpret it.",
          "AI visibility product systems help enterprise brands move beyond guesswork. They create a structured way to measure visibility, diagnose semantic gaps, identify citation gaps, monitor prompt clusters, track competitors, interpret customer review signals, and prioritize the actions most likely to improve discovery across Google, AI search, and the broader public evidence layer.",
        ],
      },
      {
        type: "cards",
        eyebrow: "Product areas",
        title: "Product areas this role will lead",
        cards: [
          { h: "AI Visibility Dashboards", b: "Building dashboards that show how brands appear across AI-generated answers, traditional search results, citation environments, and competitive recommendation surfaces." },
          { h: "Recommendation Tracking", b: "Measuring when, where, and how brands are recommended across ChatGPT, Gemini, Claude, Perplexity, Google AI Overviews, Microsoft Copilot, and other generative search systems." },
          { h: "Citation Tracking", b: "Tracking which sources, domains, articles, profiles, reviews, and third-party pages influence AI-generated answers and brand authority." },
          { h: "Prompt-Cluster Monitoring", b: "Organizing buyer questions into prompt clusters that reveal how people search, compare, validate, and choose providers through AI systems." },
          { h: "Competitor Visibility Reports", b: "Showing how competitors are cited, described, compared, recommended, and positioned across AI-generated answers and search environments." },
          { h: "Customer Review Intelligence", b: "Analyzing customer reviews for recurring themes, trust signals, objections, language patterns, feature-level praise, sentiment direction, and authority cues." },
          { h: "Customer Survey Intelligence", b: "Turning customer survey data into brand positioning insights, content opportunities, semantic alignment signals, and proof points that support AI visibility." },
          { h: "Executive Reporting", b: "Creating board-level and CMO-level reporting that explains visibility, competitive movement, recommendation share, citation strength, and corrective-action priorities." },
          { h: "Corrective-Action Workflows", b: "Helping clients understand what to do next across technical SEO, content strategy, citation architecture, review generation, authority-building, schema, and multi-channel visibility." },
        ],
      },
      {
        type: "groupedList",
        eyebrow: "Qualifications",
        title: "Qualifications",
        groups: [
          {
            label: "Required",
            items: [
              "8+ years of experience in SaaS product management, product leadership, search technology, analytics platforms, marketing intelligence, enterprise SEO, AI products, or related fields",
              "strong understanding of SaaS product strategy, roadmap development, user research, product analytics, and cross-functional execution",
              "experience building dashboards, reporting products, analytics workflows, intelligence platforms, or enterprise-facing software products",
              "familiarity with SEO, generative engine optimization, AI search visibility, content strategy, digital analytics, or enterprise marketing workflows",
              "ability to translate complex technical, analytical, and strategic concepts into product experiences that clients can understand and use",
              "experience working with engineering, design, data, strategy, customer success, and executive stakeholders",
              "strong understanding of enterprise buyer needs, especially around reporting, visibility, competitive intelligence, and measurable outcomes",
              "ability to lead from ambiguity and build product structure in a fast-moving category",
            ],
          },
          {
            label: "Preferred",
            items: [
              "experience building products in SEO, digital marketing, competitive intelligence, market intelligence, reputation management, analytics, review intelligence, or AI search",
              "familiarity with large language models, generative search systems, retrieval systems, AI-generated answers, citation behavior, and source attribution",
              "experience with customer review platforms, survey systems, voice-of-customer analytics, or reputation intelligence",
              "experience building executive dashboards, client portals, SaaS reporting systems, or enterprise intelligence products",
              "understanding of semantic search, embeddings, vector relevance, knowledge graphs, entity optimization, schema, or retrieval augmented generation",
              "background working with enterprise brands, agencies, or high-consideration buying categories",
              "ability to help define a new product category rather than simply manage an existing product line",
            ],
          },
        ],
      },
      {
        type: "list",
        eyebrow: "Who will thrive",
        title: "Who will thrive in this role",
        intro:
          "The right person for this role is a product leader who can think like a strategist, operator, analyst, and category builder. You may be a strong fit if you are energized by questions such as:",
        items: [
          "How should brands measure visibility inside AI-generated answers?",
          "How can citation patterns become a dashboard metric?",
          "How should prompt clusters be organized around buyer intent?",
          "How can customer reviews and surveys improve AI search visibility?",
          "How can semantic gaps become product recommendations?",
          "How can enterprise executives understand AI visibility without drowning in technical detail?",
          "How can an agency methodology become a scalable SaaS workflow?",
        ],
        outro:
          "This role is ideal for someone who understands that AI visibility is not only a reporting problem. It is a product, data, search, content, reputation, and enterprise decision-making problem.",
      },
      {
        type: "prose",
        eyebrow: "Why join",
        title: "Why join CiteWorks Studio",
        paragraphs: [
          "This role sits at the frontier of SaaS product strategy, AI search visibility, generative engine optimization, citation intelligence, customer review intelligence, and enterprise brand discovery.",
          "The Head of AI Visibility Product will help shape how CiteWorks Studio turns its methodology into scalable software, dashboards, workflows, and intelligence products.",
          "As generative search systems become a primary interface for information discovery, organizations will increasingly need systems that show how large language models interpret, cite, compare, and recommend brands. CiteWorks Studio is building for that future.",
          "This role is an opportunity to define the product layer for a new category: AI visibility intelligence connected directly to corrective action.",
        ],
      },
      {
        type: "glossary",
        eyebrow: "Key terms",
        title: "Key terms",
        terms: [
          { term: "AI Visibility", definition: "The measure of how often and how accurately a brand appears, is cited, is compared, or is recommended across AI-generated answers and generative search systems." },
          { term: "Generative Engine Optimization", definition: "GEO is the practice of improving how brands, pages, entities, and sources are understood, retrieved, cited, and recommended by AI systems." },
          { term: "AI Recommendation Tracking", definition: "The analysis of when and how large language models recommend a brand, product, service, or competitor in response to buyer-intent prompts." },
          { term: "Citation Tracking", definition: "The measurement of which sources appear inside or influence AI-generated answers, including owned pages, third-party articles, review sites, comparison pages, knowledge bases, and authority sources." },
          { term: "Prompt Cluster", definition: "A group of related AI search questions organized around a buyer intent, topic, category, competitor, objection, comparison, or decision stage." },
          { term: "Customer Review Intelligence", definition: "The analysis of customer reviews to identify sentiment, trust signals, objections, recurring language, feature-level strengths, and authority cues that may influence brand visibility and buyer decisions." },
          { term: "Customer Survey Intelligence", definition: "The use of structured customer feedback to understand why buyers choose a brand, what alternatives they considered, which proof points matter, and how customer language can improve positioning and content strategy." },
          { term: "Semantic Vector Optimization", definition: "Improving how closely a brand's content, entities, citations, and authority signals align with the meanings, topics, and intent patterns that AI retrieval systems use to surface information." },
          { term: "Cosine Gap Engineering", definition: "Identifying and reducing the distance between how a brand wants to be understood and how machine systems currently interpret, retrieve, and associate that brand in semantic space." },
          { term: "AI Share of Voice", definition: "A measurement of how often a brand appears inside AI-generated answers compared with competitors across large language models and generative search systems." },
        ],
      },
    ],
  },
  {
    slug: "semantic-retrieval-vector-optimization-engineer",
    title: "Semantic Retrieval / Vector Optimization Engineer",
    team: "Engineering",
    location: "Remote · United States preferred",
    shortBlurb:
      "Build semantic retrieval and vector optimization systems that analyze how brands, pages, entities, reviews, competitors, and authority signals sit in embedding space.",
    intro: [
      "CiteWorks Studio is hiring a Semantic Retrieval / Vector Optimization Engineer to build the systems that analyze how brands, pages, entities, reviews, competitors, and authority signals sit in embedding space.",
      "You will turn those insights into dashboard recommendations for AI visibility and generative engine optimization that enterprise teams can act on.",
    ],
    sections: [
      {
        type: "list",
        eyebrow: "What you'll do",
        title: "About the role",
        intro: "Detailed responsibilities will be shared during the interview process. At a high level, you will:",
        items: [
          "Design embedding pipelines that map brand, page, entity, and competitor positioning",
          "Build retrieval systems that mirror how generative engines surface answers",
          "Engineer cosine-gap analyses that translate vector distance into product recommendations",
          "Partner with data science and product to ship intelligence into dashboards",
        ],
      },
    ],
  },
  {
    slug: "ai-search-data-scientist",
    title: "AI Search Data Scientist",
    team: "Data Science",
    location: "Remote · United States preferred",
    shortBlurb:
      "Convert messy AI visibility signals into reliable metrics for AI Share of Voice, recommendation share, citation frequency, and competitor displacement.",
    intro: [
      "CiteWorks Studio is hiring an AI Search Data Scientist to convert messy AI visibility signals into reliable, repeatable metrics.",
      "You will define how we measure AI Share of Voice, AI Recommendation Share, citation frequency, brand inclusion rate, prompt-level win/loss, and competitor displacement.",
    ],
    sections: [
      {
        type: "list",
        eyebrow: "What you'll do",
        title: "About the role",
        intro: "Detailed responsibilities will be shared during the interview process. At a high level, you will:",
        items: [
          "Build measurement frameworks for AI visibility metrics across LLMs and AI search surfaces",
          "Design statistical methods that survive noisy generative outputs",
          "Track recommendation movement and competitor displacement over time",
          "Partner with product to make metrics legible for enterprise executives",
        ],
      },
    ],
  },
  {
    slug: "prompt-intelligence-analyst",
    title: "Prompt Intelligence Analyst",
    team: "Research",
    location: "Remote · United States preferred",
    shortBlurb:
      "Map how buyers ask AI systems questions before making decisions, then build the prompt libraries that power our visibility and recommendation tracking.",
    intro: [
      "CiteWorks Studio is hiring a Prompt Intelligence Analyst to map how buyers ask AI systems questions before they make decisions.",
      "You will build the prompt libraries and prompt clusters that power AI visibility dashboards, recommendation tracking, competitor analysis, and corrective-action workflows.",
    ],
    sections: [
      {
        type: "list",
        eyebrow: "What you'll do",
        title: "About the role",
        intro: "Detailed responsibilities will be shared during the interview process. At a high level, you will:",
        items: [
          "Research buyer intent across high-consideration B2B and consumer categories",
          "Construct prompt clusters that mirror real evaluation, comparison, and decision behavior",
          "Maintain libraries used across measurement, monitoring, and competitive analysis",
          "Translate findings into corrective-action recommendations for clients",
        ],
      },
    ],
  },
];

export const getJob = (slug: string) => jobs.find((j) => j.slug === slug);
