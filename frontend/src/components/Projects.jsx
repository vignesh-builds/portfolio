import { projects, profile } from "../data";
import { Icon } from "./Deco";

const hospitalRows = [
  ["9:00", "Ravi K.", "Cardiology"],
  ["9:30", "Meena S.", "General"],
  ["10:15", "Arun P.", "Orthopedic"],
];
const shopItems = ["₹499", "₹1,299", "₹799", "₹249"];

// Decorative app preview drawn with plain markup (used only when a project has no image)
function Mock({ kind }) {
  return (
    <div className="browser" aria-hidden="true">
      <div className="browser-bar"><i /><i /><i /></div>
      <div className={`browser-body mock-${kind}`}>
        {kind === "hospital" && (
          <>
            <div className="m-side"><b /><b /><b /></div>
            <div className="m-list">
              {hospitalRows.map(([t, n, d]) => (
                <div className="m-row" key={t}>
                  <span className="m-time">{t}</span>
                  <span>{n}<small>{d}</small></span>
                </div>
              ))}
            </div>
          </>
        )}
        {kind === "shop" && (
          <div className="m-grid">
            {shopItems.map((p) => (
              <div className="m-item" key={p}>
                <div className="m-img" />
                <span className="m-price">{p}</span>
              </div>
            ))}
            <span className="m-cart">Cart 2</span>
          </div>
        )}
        {kind === "site" && (
          <div className="m-site">
            <b className="w60" /><b className="w40" />
            <div className="m-form"><b /><b /><span /></div>
          </div>
        )}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section className="section section--band" id="projects">
      <div className="wrap">
        <div className="row-head">
          <header className="sec-head sec-head--inline">
            <span className="sec-icon"><Icon name="folder" size={26} /></span>
            <h2>Featured Projects</h2>
          </header>
          <a className="text-link" href={profile.github.url} target="_blank" rel="noreferrer">
            View All Projects <Icon name="arrow-right" size={16} />
          </a>
        </div>

        <div className="project-grid">
          {projects.map((p) => (
            <article className="card project" key={p.title}>
              <div className="project-view">
                {p.image ? (
                  <img className="shot" src={p.image} alt={`${p.title} preview`} loading="lazy" />
                ) : (
                  <Mock kind={p.kind} />
                )}
              </div>
              <div className="project-main">
                <h3>{p.title}</h3>
                <p className="project-summary">{p.summary}</p>
                <ul className="chips" aria-label="Technologies used">
                  {p.stack.slice(0, 5).map((t) => (
                    <li className="chip" key={t}>{t}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {p.links.length === 0 && <span className="muted-note">Links coming soon</span>}
                  {p.links.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      className={l.primary ? "plink plink--gold" : "plink"}
                    >
                      <Icon name={l.primary ? "external" : "github"} size={16} />
                      {l.primary ? "Live Demo" : "GitHub"}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
