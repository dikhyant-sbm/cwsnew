export const Logo = ({ className = "" }: { className?: string }) => (
  <a href="#" className={`flex items-center gap-2 ${className}`} aria-label="Goodie home">
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2L29 9.5V22.5L16 30L3 22.5V9.5L16 2Z" stroke="hsl(var(--primary))" strokeWidth="1.6" />
      <path d="M16 2L29 9.5L16 17L3 9.5L16 2Z" fill="hsl(var(--primary) / 0.15)" stroke="hsl(var(--primary))" strokeWidth="1.6" />
      <path d="M16 17V30" stroke="hsl(var(--primary))" strokeWidth="1.6" />
    </svg>
    <span className="text-xl font-semibold tracking-tight text-foreground">goodie</span>
  </a>
);
