import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";

export type Theme = "light" | "dark";
type Stored = Theme | "system";

type Ctx = {
  theme: Theme;
  /** What the user explicitly chose (or "system" when following OS). */
  preference: Stored;
  setPreference: (p: Stored) => void;
  toggle: () => void;
};

const ThemeContext = createContext<Ctx | undefined>(undefined);
const STORAGE_KEY = "citeworks-theme";

const getSystem = (): Theme =>
  typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const readStored = (): Stored => {
  if (typeof window === "undefined") return "system";
  const v = window.localStorage.getItem(STORAGE_KEY);
  return v === "light" || v === "dark" || v === "system" ? v : "system";
};

const applyClass = (t: Theme) => {
  const root = document.documentElement;
  // Brief transition flag for smooth color swap, then removed to avoid
  // layering transitions onto every future style change.
  root.classList.add("theme-transition");
  root.classList.toggle("dark", t === "dark");
  root.style.colorScheme = t;
  window.setTimeout(() => root.classList.remove("theme-transition"), 400);
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [preference, setPrefState] = useState<Stored>(() => readStored());
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = readStored();
    return stored === "system" ? getSystem() : stored;
  });

  // Apply class + listen for system changes when "system" is selected
  useEffect(() => {
    applyClass(theme);
  }, [theme]);

  useEffect(() => {
    if (preference !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => setTheme(mq.matches ? "dark" : "light");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [preference]);

  const setPreference = useCallback((p: Stored) => {
    setPrefState(p);
    try {
      if (p === "system") window.localStorage.removeItem(STORAGE_KEY);
      else window.localStorage.setItem(STORAGE_KEY, p);
    } catch { /* storage may be unavailable */ }
    setTheme(p === "system" ? getSystem() : p);
  }, []);

  const toggle = useCallback(() => {
    setPreference(theme === "dark" ? "light" : "dark");
  }, [theme, setPreference]);

  return (
    <ThemeContext.Provider value={{ theme, preference, setPreference, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
