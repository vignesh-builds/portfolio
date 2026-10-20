import { about, profile, strengths } from "../data";
import { Icon, SectionHead } from "./Deco";

function About() {
  return (
    <section id="about" className="duo-col">
      <SectionHead icon="user" title="About Me" />
      <div className="about-text">
        {about.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <ul className="meta-row">
        <li>
          <Icon name="pin" size={26} />
          <div>
            <b>Location</b>
            <span>{profile.location}</span>
          </div>
        </li>
        <li>
          <Icon name="mail" size={26} />
          <div>
            <b>Email</b>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </li>
        <li>
          <Icon name="target" size={26} />
          <div>
            <b>Career Goal</b>
            <span>Java Full Stack Developer (Full-time)</span>
          </div>
        </li>
      </ul>

      <ul className="chips" aria-label="Strengths">
        {strengths.map((s) => (
          <li className="chip" key={s}>{s}</li>
        ))}
      </ul>
    </section>
  );
}

export default About;
