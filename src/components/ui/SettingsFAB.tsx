import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  useTheme,
  ACCENT_MAP,
  ACCENT_LABELS,
  FONT_LABELS,
  BG_LABELS,
  type AccentColor,
  type FontFamily,
  type ThemeMode,
  type BackgroundStyle,
} from "../../contexts/ThemeContext";

export default function SettingsFAB() {
  const [open, setOpen] = useState(false);
  const { mode, accent, font, background, setMode, setAccent, setFont, setBackground } = useTheme();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className="settings-fab" ref={ref}>
      <AnimatePresence>
        {open && (
          <motion.div
            className="settings-panel"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="settings-section">
              <div className="settings-label">Theme</div>
              <div className="theme-toggle-pill">
                {(["dark", "light"] as ThemeMode[]).map((m) => (
                  <button
                    key={m}
                    className={`theme-toggle-opt${mode === m ? " theme-toggle-opt--active" : ""}`}
                    onClick={() => setMode(m)}
                  >
                    {m === "dark" ? "Dark" : "Light"}
                  </button>
                ))}
              </div>
            </div>

            <div className="settings-section">
              <div className="settings-label">Accent</div>
              <div className="settings-row">
                {(Object.keys(ACCENT_MAP) as AccentColor[]).map((key) => (
                  <button
                    key={key}
                    className={`accent-swatch${accent === key ? " accent-swatch--active" : ""}`}
                    style={{ background: ACCENT_MAP[key] }}
                    onClick={() => setAccent(key)}
                    aria-label={ACCENT_LABELS[key]}
                    title={ACCENT_LABELS[key]}
                  />
                ))}
              </div>
            </div>

            <div className="settings-section">
              <div className="settings-label">Background</div>
              <div className="settings-row">
                {(Object.keys(BG_LABELS) as BackgroundStyle[]).map((key) => (
                  <button
                    key={key}
                    className={`font-option${background === key ? " font-option--active" : ""}`}
                    onClick={() => setBackground(key)}
                  >
                    {BG_LABELS[key]}
                  </button>
                ))}
              </div>
            </div>

            <div className="settings-section">
              <div className="settings-label">Font</div>
              <div className="settings-row">
                {(Object.keys(FONT_LABELS) as FontFamily[]).map((key) => (
                  <button
                    key={key}
                    className={`font-option${font === key ? " font-option--active" : ""}`}
                    onClick={() => setFont(key)}
                  >
                    {FONT_LABELS[key]}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="settings-fab-btn"
        onClick={() => setOpen((o) => !o)}
        aria-label="Customize appearance"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        ⚙
      </motion.button>
    </div>
  );
}
