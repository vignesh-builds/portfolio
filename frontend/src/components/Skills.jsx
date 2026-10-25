import { skills } from "../data";
import { Icon, SectionHead } from "./Deco";

function Skills() {
  return (
    <section id="skills" className="duo-col">
      <SectionHead icon="code" title="Technical Skills" />
      <div className="skill-grid">
        {skills.map((g) => (
          <article className="card skill-card" key={g.group}>
            <span className="skill-icon">
              <Icon name={g.icon} size={34} />
            </span>
            <h3>{g.group}</h3>
            <ul>
              {g.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
