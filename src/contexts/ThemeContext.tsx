import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type ThemeMode = "dark" | "light";
export type AccentColor = "blue" | "teal" | "purple" | "green" | "orange" | "pink";
export type FontFamily = "inter" | "plus-jakarta" | "dm-sans" | "jetbrains" | "system";
export type BackgroundStyle = "blobs" | "aurora" | "waves" | "grid" | "none";

interface ThemeContextValue {
  mode: ThemeMode;
  accent: AccentColor;
  font: FontFamily;
  background: BackgroundStyle;
  setMode: (m: ThemeMode) => void;
  setAccent: (a: AccentColor) => void;
  setFont: (f: FontFamily) => void;
  setBackground: (b: BackgroundStyle) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const ACCENT_MAP: Record<AccentColor, string> = {
  blue: "#007AFF",
  teal: "#5AC8FA",
  purple: "#AF52DE",
  green: "#30D158",
  orange: "#FF9500",
  pink: "#FF2D55",
};

export const ACCENT_LABELS: Record<AccentColor, string> = {
  blue: "Blue",
  teal: "Teal",
  purple: "Purple",
  green: "Green",
  orange: "Orange",
  pink: "Pink",
};

export const FONT_MAP: Record<FontFamily, string> = {
  inter: '"Inter", sans-serif',
  "plus-jakarta": '"Plus Jakarta Sans", sans-serif',
  "dm-sans": '"DM Sans", sans-serif',
  jetbrains: '"JetBrains Mono", monospace',
  system: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

export const FONT_LABELS: Record<FontFamily, string> = {
  inter: "Inter",
  "plus-jakarta": "Jakarta",
  "dm-sans": "DM Sans",
  jetbrains: "JetBrains",
  system: "System",
};

export const BG_LABELS: Record<BackgroundStyle, string> = {
  blobs: "Blobs",
  aurora: "Aurora",
  waves: "Waves",
  grid: "Grid",
  none: "None",
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>("dark");
  const [accent, setAccent] = useState<AccentColor>("blue");
  const [font, setFont] = useState<FontFamily>("inter");
  const [background, setBackground] = useState<BackgroundStyle>("blobs");

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", mode);
    root.setAttribute("data-accent", accent);
    root.setAttribute("data-font", font);
  }, [mode, accent, font]);

  const toggleMode = () => setMode((m) => (m === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider
      value={{ mode, accent, font, background, setMode, setAccent, setFont, setBackground, toggleMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
