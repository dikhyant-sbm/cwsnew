import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { label: "SERVICES", to: "/services" },
  { label: "CASE STUDIES", to: "/case-studies" },
  { label: "METHODOLOGY", to: "/methodology" },
  { label: "AGENCY PARTNERS", to: "/agency-partners" },
  { label: "RESOURCES", to: "/resources" },
];

export const Nav = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
      <div className="mx-auto max-w-[1400px] px-6 h-16 flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1 font-mono text-[11px] tracking-[0.18em] text-foreground/85">
          {links.map((l, i) => (
            <div key={l.label} className="flex items-center">
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `px-4 py-2 transition-colors hover:text-primary ${isActive ? "text-primary" : ""}`
                }
              >
                {l.label}
              </NavLink>
              {i < links.length - 1 && <span className="text-muted-foreground/40">·</span>}
            </div>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button asChild className="rounded-full font-mono text-[11px] tracking-[0.18em] bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/request-audit">REQUEST A VISIBILITY AUDIT</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon"><Menu /></Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-border">
            <div className="flex flex-col gap-4 mt-8 font-mono text-sm">
              {links.map((l) => (
                <Link key={l.label} to={l.to} className="py-2 border-b border-border">{l.label}</Link>
              ))}
              <Button asChild className="rounded-full mt-4 bg-primary text-primary-foreground">
                <Link to="/request-audit">REQUEST A VISIBILITY AUDIT</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
