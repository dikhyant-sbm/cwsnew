import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { ArrowUpRight, Menu } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

type NavLinkItem = {
  label: string;
  to: string;
  description?: string;
};

type NavGroup = {
  label: string;
  to?: string;
  children?: NavLinkItem[];
};

const groups: NavGroup[] = [
  {
    label: "SERVICES",
    to: "/services",
    children: [
      { label: "GEO & AI Search Visibility", to: "/services", description: "AI Overviews, ChatGPT, Gemini, Perplexity." },
      { label: "Citation Architecture", to: "/services", description: "Owned + third-party source environment." },
      { label: "Technical SEO & Schema", to: "/services", description: "Crawlability, indexation, entity-level schema." },
      { label: "Content Strategy", to: "/services", description: "Pages built for ranking, retrieval, citation." },
      { label: "AI Market Intelligence", to: "/services", description: "Prompt clusters, source influence, framing." },
    ],
  },
  { label: "CASE STUDIES", to: "/case-studies" },
  { label: "METHODOLOGY", to: "/methodology" },
  { label: "AGENCY PARTNERS", to: "/agency-partners" },
  {
    label: "RESOURCES",
    to: "/resources",
    children: [
      { label: "Library", to: "/resources", description: "Guides, definitions, and case studies." },
      { label: "Glossary", to: "/resources", description: "GEO, citation architecture, embeddings." },
      { label: "Learning paths", to: "/resources", description: "Where to start, by situation." },
    ],
  },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdowns on navigation
  useEffect(() => setOpenIdx(null), [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border/60 shadow-[0_8px_30px_-12px_hsl(0_0%_0%/0.5)]"
          : "backdrop-blur-md bg-background/40 border-b border-border/30"
      }`}
    >
      <div
        className={`mx-auto max-w-[1400px] px-6 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-14" : "h-16"
        }`}
      >
        <Logo />

        <nav
          className="hidden lg:flex items-center font-mono text-[11px] tracking-[0.18em] text-foreground/85"
          onMouseLeave={() => setOpenIdx(null)}
        >
          {groups.map((g, i) => {
            const hasMenu = !!g.children?.length;
            return (
              <div
                key={g.label}
                className="relative"
                onMouseEnter={() => setOpenIdx(hasMenu ? i : null)}
              >
                <NavLink
                  to={g.to ?? "#"}
                  className={({ isActive }) =>
                    `inline-flex items-center gap-1 px-4 py-2 transition-colors hover:text-primary ${
                      isActive ? "text-primary" : ""
                    }`
                  }
                >
                  {g.label}
                </NavLink>

                {hasMenu && (
                  <div
                    className={`absolute left-0 top-full pt-3 transition-all duration-300 ${
                      openIdx === i
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-1 pointer-events-none"
                    }`}
                  >
                    <div className="w-[360px] glass rounded-2xl p-2 border-gradient">
                      {g.children!.map((c) => (
                        <Link
                          key={c.label}
                          to={c.to}
                          className="group block rounded-xl px-4 py-3 hover:bg-foreground/5 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-sans text-sm tracking-normal text-foreground">
                              {c.label}
                            </span>
                            <ArrowUpRight className="size-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                          </div>
                          {c.description && (
                            <p className="font-sans text-xs tracking-normal text-muted-foreground mt-1">
                              {c.description}
                            </p>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Button
            asChild
            className="group rounded-full font-mono text-[11px] tracking-[0.18em] bg-primary text-primary-foreground hover:bg-primary/90 btn-glow h-9 px-5"
          >
            <Link to="/request-audit">
              REQUEST A VISIBILITY AUDIT
              <ArrowUpRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu"><Menu /></Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-border">
              <div className="flex flex-col gap-1 mt-8 font-mono text-sm">
                {groups.map((g) => (
                  <SheetClose asChild key={g.label}>
                    <Link
                      to={g.to ?? "#"}
                      className="py-3 border-b border-border/60 hover:text-primary transition-colors"
                    >
                      {g.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild className="rounded-full mt-6 bg-primary text-primary-foreground btn-glow">
                    <Link to="/request-audit">REQUEST A VISIBILITY AUDIT</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
