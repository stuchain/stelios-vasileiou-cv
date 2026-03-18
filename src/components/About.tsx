import { bio } from "../data/generated";
import GlassPanel from "./ui/GlassPanel";
import SectionReveal from "./ui/SectionReveal";

function getParagraphs(content: string | string[]): string[] {
  if (Array.isArray(content)) return content;
  return content ? content.split(/\n\n+/).filter(Boolean) : [];
}

export default function About() {
  const paragraphs = getParagraphs(bio);

  return (
    <section id="about">
      <SectionReveal>
        <h2>About</h2>
        <GlassPanel className="about-content">
          {paragraphs.length > 0 ? (
            paragraphs.map((para, i) => <p key={i}>{para}</p>)
          ) : (
            <p>About me.</p>
          )}
        </GlassPanel>
      </SectionReveal>
    </section>
  );
}
