import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { ArrowUpRight, Menu } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

type NavGroup = {
  label: string;
  to: string;
};

const groups: NavGroup[] = [
  { label: "SERVICES", to: "/services" },
  { label: "CASE STUDIES", to: "/case-studies" },
  { label: "METHODOLOGY", to: "/methodology" },
  { label: "AGENCY PARTNERS", to: "/agency-partners" },
  { label: "RESOURCES", to: "/resources" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

        <nav className="hidden lg:flex items-center font-mono text-[13px] font-semibold tracking-[0.14em] text-body">
          {groups.map((g) => (
            <NavLink
              key={g.label}
              to={g.to}
              className={({ isActive }) =>
                `inline-flex items-center gap-1 px-4 py-2 transition-colors hover:text-primary ${
                  isActive ? "text-primary" : ""
                }`
              }
            >
              {g.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Button
            asChild
            className="group rounded-full font-mono text-[13px] font-semibold tracking-[0.14em] bg-primary text-primary-foreground hover:bg-primary/90 btn-glow h-9 px-5"
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
