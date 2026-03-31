import { social } from "../data/generated";

const navLinks = [
  { href: "#resume", label: "Resume" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

interface NavProps {
  activeSectionId?: string;
}

export default function Nav({ activeSectionId }: NavProps) {
  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="nav-inner">
        <div className="nav-links">
          {navLinks.map(({ href, label }) => {
            const sectionId = href.slice(1);
            const isActive = activeSectionId === sectionId;
            return (
              <a
                key={href}
                href={href}
                className={`nav-link${isActive ? " nav-link--active" : ""}`}
              >
                {label}
              </a>
            );
          })}
          <a
            href={social.github}
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
