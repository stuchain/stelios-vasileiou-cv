import { createContext, useContext, useEffect, type ReactNode } from "react";

export type TypographyPreset = "editorial" | "sans" | "monoAccent";

interface ThemeContextValue {
  preset: TypographyPreset;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const preset: TypographyPreset = "monoAccent";

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", "dark");
    root.setAttribute("data-typography", preset);
  }, [preset]);

  return (
    <ThemeContext.Provider value={{ preset }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
