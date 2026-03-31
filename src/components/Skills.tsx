import { skills } from "../data/generated";
import SectionReveal from "./ui/SectionReveal";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionReveal>
        <header className="section-header">
          <h2 className="section-title">Skills</h2>
        </header>
        <div className="skills-grid">
          {skills.map((cat, i) => (
            <div key={i}>
              <h3 className="skills-group-title">{cat.category}</h3>
              <ul className="skills-list">
                {cat.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
