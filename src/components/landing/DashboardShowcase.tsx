import { ImgHTMLAttributes } from "react";
import { useTheme } from "@/components/theme/ThemeProvider";

/** Available CiteWorks dashboard mockups (eager-imported so Vite picks correct hashed URLs). */
import aiVisibility from "@/assets/dashboards/01-ai-visibility-overview.png";
import aiVisibilityDark from "@/assets/dashboards/01-ai-visibility-overview-dark.png";
import promptClusters from "@/assets/dashboards/02-prompt-cluster-tracking.png";
import promptClustersDark from "@/assets/dashboards/02-prompt-cluster-tracking-dark.png";
import citationMap from "@/assets/dashboards/03-citation-architecture-map.png";
import citationMapDark from "@/assets/dashboards/03-citation-architecture-map-dark.png";
import competitorMatrix from "@/assets/dashboards/04-competitor-visibility-matrix.png";
import competitorMatrixDark from "@/assets/dashboards/04-competitor-visibility-matrix-dark.png";
import roadmap from "@/assets/dashboards/05-corrective-action-roadmap.png";
import roadmapDark from "@/assets/dashboards/05-corrective-action-roadmap-dark.png";
import execReport from "@/assets/dashboards/06-executive-visibility-report.png";
import execReportDark from "@/assets/dashboards/06-executive-visibility-report-dark.png";
import closedLoop from "@/assets/dashboards/07-closed-loop-methodology.png";
import closedLoopDark from "@/assets/dashboards/07-closed-loop-methodology-dark.png";

export const DASHBOARDS = {
  "ai-visibility": { src: aiVisibility, srcDark: aiVisibilityDark, w: 1269, h: 740, wDark: 1269, hDark: 734, label: "AI Visibility Overview", caption: "Share of Voice, Recommendation Strength, and model coverage across ChatGPT, Gemini, Perplexity, Copilot, and Google AI Overviews." },
  "prompt-clusters": { src: promptClusters, srcDark: promptClustersDark, w: 1895, h: 982, wDark: 1882, hDark: 803, label: "Prompt Cluster Tracking", caption: "Visibility scored by buyer-intent cluster — present, cited, recommended, or absent — benchmarked against the category." },
  "citation-architecture": { src: citationMap, srcDark: citationMapDark, w: 1881, h: 1039, wDark: 1889, hDark: 1070, label: "Citation Architecture", caption: "Owned, third-party, review, comparison, community, video, and industry sources with live citation gap status." },
  "competitor-matrix": { src: competitorMatrix, srcDark: competitorMatrixDark, w: 1889, h: 616, wDark: 1880, hDark: 620, label: "Model × Topic Matrix", caption: "Spot visibility gaps by AI model and topic across AI Overviews, ChatGPT, Perplexity, Claude, and AI Mode." },
  "corrective-action": { src: roadmap, srcDark: roadmapDark, w: 1901, h: 1003, wDark: 1894, hDark: 1002, label: "Corrective Action", caption: "Prioritized roadmap across Technical SEO, content, citation sources, and entity clarity — Planned → In Progress → Live → Measuring." },
  "executive-report": { src: execReport, srcDark: execReportDark, w: 1608, h: 1093, wDark: 1581, hDark: 1090, label: "Executive Visibility Report", caption: "Leadership-ready snapshot: visibility baseline, movement, top risks, recoverable opportunities, and recommended next actions." },
  "closed-loop": { src: closedLoop, srcDark: closedLoopDark, w: 1379, h: 1049, wDark: 1395, hDark: 1055, label: "Closed-Loop Methodology", caption: "Map · Benchmark · Analyze · Build · Execute · Measure — a continuous visibility system." },
} as const;

export type DashboardKey = keyof typeof DASHBOARDS;

type Props = {
  dashboard: DashboardKey;
  /** Visual size — `lg` for hero, `md` for in-section, `sm` for inline. */
  size?: "sm" | "md" | "lg";
  showCaption?: boolean;
  /** When true, image loads eagerly with high fetch priority (use only for first paint). */
  priority?: boolean;
  className?: string;
} & Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt">;

const SIZE_MAX = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-6xl",
} as const;

/** Premium glass-framed dashboard mockup. Used across the site. */
export const DashboardShowcase = ({
  dashboard,
  size = "lg",
  showCaption = false,
  priority = false,
  className = "",
  ...imgProps
}: Props) => {
  const d = DASHBOARDS[dashboard] as any;
  const { theme } = useTheme();
  const useDark = theme === "light" && d.srcDark;
  const src = useDark ? d.srcDark : d.src;
  const w = (useDark && d.wDark) || d.w;
  const h = (useDark && d.hDark) || d.h;
  return (
    <figure className={`relative mx-auto ${SIZE_MAX[size]} ${className}`}>
      {/* Ambient glow behind the panel */}
      <div className="absolute -inset-x-10 -inset-y-8 -z-10 rounded-[2rem] bg-[radial-gradient(60%_60%_at_50%_50%,hsl(var(--accent-blue)/0.18),transparent_70%)] blur-2xl" />
      <div className="absolute -inset-x-20 -inset-y-12 -z-10 rounded-[2rem] bg-[radial-gradient(50%_50%_at_70%_50%,hsl(var(--accent-violet)/0.10),transparent_70%)] blur-2xl" />

      <div className="device-frame lift">
        <div className="device-screen" style={{ aspectRatio: `${w} / ${h}` }}>
          <img
            src={src}
            alt={`${d.label} — CiteWorks Studio dashboard mockup. ${d.caption}`}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            // @ts-expect-error fetchpriority is valid HTML, not yet in React types in all setups
            fetchpriority={priority ? "high" : "low"}
            width={w}
            height={h}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1100px"
            className="block w-full h-auto"
            {...imgProps}
          />
        </div>
      </div>

      {showCaption && (
        <figcaption className="mt-4 text-center font-mono text-[13px] tracking-[0.16em] uppercase text-tertiary">
          {d.label}
        </figcaption>
      )}
    </figure>
  );
};
