const models = [
  { src: "https://higoodie.com/wp-content/uploads/2026/03/ChatGPT-2.svg", alt: "ChatGPT" },
  { src: "https://higoodie.com/wp-content/uploads/2026/03/Gemini-3.svg", alt: "Gemini" },
  { src: "https://higoodie.com/wp-content/uploads/2026/03/Claude-1.svg", alt: "Claude" },
  { src: "https://higoodie.com/wp-content/uploads/2026/03/Perplexity-1-1.svg", alt: "Perplexity" },
  { src: "https://higoodie.com/wp-content/uploads/2026/03/Grok-1.svg", alt: "Grok" },
  { src: "https://higoodie.com/wp-content/uploads/2026/03/Meta-1.svg", alt: "Meta AI" },
  { src: "https://higoodie.com/wp-content/uploads/2026/03/Rufus-2.svg", alt: "Amazon Rufus" },
  { src: "https://higoodie.com/wp-content/uploads/2026/03/Copilot-2.svg", alt: "Microsoft Copilot" },
  { src: "https://higoodie.com/wp-content/uploads/2026/03/AI-Overview-2.svg", alt: "AI Overview" },
  { src: "https://higoodie.com/wp-content/uploads/2026/03/Google-1.svg", alt: "Google AI Mode" },
  { src: "https://higoodie.com/wp-content/uploads/2026/03/DeepSeek-1.svg", alt: "DeepSeek" },
];

export const Models = () => (
  <section className="py-16">
    <div className="mx-auto max-w-7xl px-6">
      <p className="eyebrow text-center mb-10">Tracking all major AI models:</p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {models.map((m) => (
          <img
            key={m.alt}
            src={m.src}
            alt={m.alt}
            loading="lazy"
            className="h-7 opacity-80 hover:opacity-100 transition-opacity"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        ))}
      </div>
    </div>
  </section>
);
