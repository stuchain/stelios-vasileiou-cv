import { cv, type CVEntry } from '../data/generated'
import PixelPanel from './ui/PixelPanel'
import Skills from './Skills'
import { useInView } from '../hooks/useInView'

function CVEntryCard({ entry }: { entry: CVEntry }) {
  const thesisLabel = entry.thesisLabel?.trim() || 'View thesis'
  return (
    <article className="cv-entry">
      <PixelPanel>
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
      </PixelPanel>
    </article>
  )
}

export default function CV() {
  const { ref, isInView } = useInView()

  return (
    <section id="resume">
      <div ref={ref} className={`fade-in-up${isInView ? ' is-visible' : ''}`}>
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
      </div>
    </section>
  )
}
