import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";

const links = [
  { label: "PRODUCT", hasMenu: true },
  { label: "USE CASE", hasMenu: true },
  { label: "RESOURCES", hasMenu: true },
  { label: "PRICING", hasMenu: false },
  { label: "ABOUT", hasMenu: false },
];

export const Nav = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
      <div className="mx-auto max-w-[1400px] px-6 h-16 flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1 font-mono text-xs tracking-widest text-foreground/90">
          {links.map((l, i) => (
            <div key={l.label} className="flex items-center">
              <button className="px-4 py-2 hover:text-primary transition-colors flex items-center gap-1">
                {l.label}
                {l.hasMenu && <ChevronDown className="size-3" />}
              </button>
              {i < links.length - 1 && <span className="text-muted-foreground/40">·</span>}
            </div>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" className="rounded-full font-mono text-xs tracking-widest border-foreground/20 hover:bg-foreground/5">
            LOG IN
          </Button>
          <Button className="rounded-full font-mono text-xs tracking-widest bg-primary text-primary-foreground hover:bg-primary/90">
            GET A DEMO
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon"><Menu /></Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-border">
            <div className="flex flex-col gap-4 mt-8 font-mono text-sm">
              {links.map((l) => (
                <a key={l.label} href="#" className="py-2 border-b border-border">{l.label}</a>
              ))}
              <Button variant="outline" className="rounded-full mt-4">LOG IN</Button>
              <Button className="rounded-full bg-primary text-primary-foreground">GET A DEMO</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
