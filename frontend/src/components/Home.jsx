import { profile, stats } from "../data";
import { Icon } from "./Deco";

const socials = [
  { label: "GitHub", icon: "github", url: profile.github.url },
  { label: "LinkedIn", icon: "linkedin", url: profile.linkedin.url },
  { label: "Email", icon: "mail", url: `mailto:${profile.email}` },
];

function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero-shapes" aria-hidden="true"></div>
      <div className="hero-laptop" aria-hidden="true"></div>

      <div className="wrap hero-inner">
        <div className="hero-text">
          <p className="hello rise" style={{ "--d": "0ms" }}>Hello, I'm</p>
          <h1 className="rise" style={{ "--d": "80ms" }}>
            {profile.firstName} <span className="dash" aria-hidden="true"></span>
          </h1>
          <p className="hero-role rise" style={{ "--d": "140ms" }}>
            <span>Java</span> Full Stack Developer
          </p>
          <p className="hero-summary rise" style={{ "--d": "200ms" }}>
            Final-year B.E. Computer Science Engineering student passionate
            about building real-world web applications using Java, Spring Boot,
            React and modern technologies.
          </p>

          <div className="hero-actions rise" style={{ "--d": "260ms" }}>
            <a href="#projects" className="btn btn--gold">
              View Projects <Icon name="arrow-right" size={18} />
            </a>
            <a href={profile.resume} className="btn btn--outline" download>
              Download Resume <Icon name="download" size={18} />
            </a>
          </div>

          <ul className="hero-socials rise" style={{ "--d": "320ms" }} aria-label="Profiles">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.url}
                  aria-label={s.label}
                  {...(s.url.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  <Icon name={s.icon} size={28} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual rise" style={{ "--d": "160ms" }}>
          <div className="photo-ring">
            <img src="/profile.jpg" alt={`Portrait of ${profile.name}`} width="260" height="260" />
          </div>
          <p className="script" aria-hidden="true">
            Code<br />Build<br />Grow
          </p>
          <div className="edu-badge">
            <Icon name="cap" size={34} />
            <div>
              <strong>B.E. Computer Science and Engineering</strong>
              <span>Anjalai Ammal – Mahalingam Engineering College</span>
              <span className="edu-badge-year">
                <Icon name="calendar" size={14} /> 2023 – 2027 (Final Year)
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap">
        <dl className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <dd>{s.value}</dd>
              <dt>{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default Home;
