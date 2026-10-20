import { achievements } from "../data";
import { Icon, SectionHead } from "./Deco";

function Achievements() {
  return (
    <section id="achievements" className="duo-col">
      <SectionHead icon="trophy" title="Achievements" />
      <ul className="ach-list">
        {achievements.map((a) => (
          <li className="card ach" key={a.title}>
            <Icon name="check" size={20} />
            <div>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
              {a.link && (
                <a className="text-link" href={a.link.url} target="_blank" rel="noreferrer">
                  {a.link.label} <Icon name="arrow-right" size={14} />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Achievements;
