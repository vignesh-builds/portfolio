import { education } from "../data";
import { Icon, SectionHead } from "./Deco";

function Education() {
  return (
    <section id="education" className="duo-col">
      <SectionHead icon="cap" title="Education" />
      <div className="stack">
        {education.map((e) => (
          <article className="card edu-card" key={e.title}>
            <span className="skill-icon"><Icon name="cap" size={34} /></span>
            <div>
              <h3>{e.title}</h3>
              <p>{e.place}</p>
              <p className="edu-period">{e.period}</p>
              {e.note && <p className="edu-note">{e.note}</p>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
