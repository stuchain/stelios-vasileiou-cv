import { bio } from "../data/generated";
import SectionReveal from "./ui/SectionReveal";

function getParagraphs(content: string | string[]): string[] {
  if (Array.isArray(content)) return content;
  return content ? content.split(/\n\n+/).filter(Boolean) : [];
}

export default function About() {
  const paragraphs = getParagraphs(bio);

  return (
    <section id="about" className="section">
      <SectionReveal>
        <header className="section-header">
          <h2 className="section-title">About</h2>
        </header>
        <div className="about-body">
          {paragraphs.length > 0 ? (
            paragraphs.map((para, i) => <p key={i}>{para}</p>)
          ) : (
            <p>About me.</p>
          )}
        </div>
      </SectionReveal>
    </section>
  );
}
