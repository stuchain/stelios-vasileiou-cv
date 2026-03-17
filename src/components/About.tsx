import { bio } from "../data/bio";
import PixelPanel from "./ui/PixelPanel";

/** Supports bio as string or string[] (BUILD §4.2). */
function getParagraphs(content: string | string[]): string[] {
  if (Array.isArray(content)) {
    return content;
  }
  return content ? content.split(/\n\n+/).filter(Boolean) : [];
}

export default function About() {
  const paragraphs = getParagraphs(bio);

  return (
    <section id="about">
      <h2>About</h2>
      <PixelPanel className="about-content">
        {paragraphs.length > 0 ? (
          paragraphs.map((para, i) => <p key={i}>{para}</p>)
        ) : (
          <p>About me.</p>
        )}
      </PixelPanel>
    </section>
  );
}
