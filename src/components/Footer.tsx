import { social, profile } from "../data/generated";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-links">
        <a href={social.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <span className="footer-dot" aria-hidden="true" />
        <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <span className="footer-dot" aria-hidden="true" />
        <a href={social.email}>Email</a>
      </div>
      <p className="footer-copy">
        &copy; {year} {profile.name}
      </p>
    </footer>
  );
}
