import { cv, type CVEntry } from "../data/generated";
import GlassPanel from "./ui/GlassPanel";
import Skills from "./Skills";
import SectionReveal from "./ui/SectionReveal";

function CVEntryCard({ entry }: { entry: CVEntry }) {
  const thesisLabel = entry.thesisLabel?.trim() || "View thesis";
  return (
    <article className="cv-entry">
      <GlassPanel hoverable>
        <p className="cv-entry-period">{entry.period}</p>
        <h4 className="cv-entry-title">{entry.title}</h4>
        <p className="cv-entry-org">{entry.org}</p>
        {entry.description && <p className="cv-entry-desc">{entry.description}</p>}
        {entry.thesisUrl && (
          <p className="cv-entry-thesis">
            <a
              href={entry.thesisUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-entry-thesis-link"
            >
              {thesisLabel} ↗
            </a>
          </p>
        )}
      </GlassPanel>
    </article>
  );
}

export default function CV() {
  return (
    <section id="resume">
      <SectionReveal>
        <h2>Resume</h2>

        <h3>Education</h3>
        {cv.education.map((entry, i) => (
          <CVEntryCard key={i} entry={entry} />
        ))}

        <h3>Experience</h3>
        {cv.experience.map((entry, i) => (
          <CVEntryCard key={i} entry={entry} />
        ))}

        {cv.secondaryExperience && cv.secondaryExperience.length > 0 && (
          <>
            <h3>Other experience (seasonal)</h3>
            {cv.secondaryExperience.map((entry, i) => (
              <CVEntryCard key={`secondary-${i}`} entry={entry} />
            ))}
          </>
        )}

        <Skills />
      </SectionReveal>
    </section>
  );
}
