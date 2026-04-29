import { useTheme } from "./ThemeProvider";
import { Moon, Sun } from "lucide-react";

/**
 * Minimal, accessible theme toggle.
 * - Click toggles between light/dark and persists the choice.
 * - Respects system preference until the user explicitly chooses.
 */
export const ThemeToggle = ({ className = "" }: { className?: string }) => {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={[
        "relative inline-flex items-center justify-center h-9 w-9 rounded-full",
        "border border-border bg-card/60 hover:bg-card transition-colors",
        "text-foreground/80 hover:text-foreground focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      ].join(" ")}
    >
      <Sun
        className={`absolute h-4 w-4 transition-all duration-300 ${
          isDark ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
        }`}
        aria-hidden="true"
      />
      <Moon
        className={`absolute h-4 w-4 transition-all duration-300 ${
          isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"
        }`}
        aria-hidden="true"
      />
    </button>
  );
};
