import { cv, type CVEntry } from "../data/generated";
import SectionReveal from "./ui/SectionReveal";

function CVEntryCard({ entry }: { entry: CVEntry }) {
  const thesisLabel = entry.thesisLabel?.trim() || "View thesis";
  return (
    <article className="cv-entry">
      <div className="cv-entry-header">
        <h4 className="cv-entry-title">{entry.title}</h4>
        <p className="cv-entry-period">{entry.period}</p>
      </div>
      <p className="cv-entry-org">{entry.org}</p>
      {entry.description && <p className="cv-entry-desc">{entry.description}</p>}
      {entry.thesisUrl && (
        <p className="cv-thesis">
          <a
            href={entry.thesisUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {thesisLabel} ↗
          </a>
        </p>
      )}
    </article>
  );
}

export default function CV() {
  return (
    <section id="resume" className="section">
      <SectionReveal>
        <header className="section-header">
          <h2 className="section-title">Resume</h2>
        </header>

        <h3 className="cv-section-heading">I. Education</h3>
        {cv.education.map((entry, i) => (
          <CVEntryCard key={i} entry={entry} />
        ))}

        <h3 className="cv-section-heading">II. Experience</h3>
        {cv.experience.map((entry, i) => (
          <CVEntryCard key={i} entry={entry} />
        ))}

        {cv.secondaryExperience && cv.secondaryExperience.length > 0 && (
          <>
            <h3 className="cv-section-heading">III. Other experience (seasonal)</h3>
            {cv.secondaryExperience.map((entry, i) => (
              <CVEntryCard key={`secondary-${i}`} entry={entry} />
            ))}
          </>
        )}

      </SectionReveal>
    </section>
  );
}
