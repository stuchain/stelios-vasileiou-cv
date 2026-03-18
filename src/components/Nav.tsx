import { motion, AnimatePresence } from "framer-motion";
import { social } from "../data/generated";
import { useTheme } from "../contexts/ThemeContext";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#resume", label: "Resume" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

interface NavProps {
  activeSectionId?: string;
}

export default function Nav({ activeSectionId }: NavProps) {
  const { mode, toggleMode } = useTheme();

  return (
    <nav className="nav-bar" aria-label="Main navigation">
      <ul className="nav-list">
        {navLinks.map(({ href, label }) => {
          const sectionId = href.slice(1);
          const isActive = activeSectionId === sectionId;
          return (
            <li key={href} style={{ position: "relative" }}>
              <a
                href={href}
                className={`nav-link${isActive ? " nav-link--active" : ""}`}
              >
                {label}
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      className="nav-active-bg"
                      layoutId="nav-active"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </AnimatePresence>
              </a>
            </li>
          );
        })}
        <li>
          <a
            href={social.github}
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <button
            className="nav-theme-toggle"
            onClick={toggleMode}
            aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
          >
            {mode === "dark" ? "☀" : "☾"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
