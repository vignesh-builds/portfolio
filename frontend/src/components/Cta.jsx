import { profile } from "../data";
import { Icon } from "./Deco";

function Cta() {
  return (
    <section className="cta-wrap">
      <div className="wrap">
        <div className="cta">
          <span className="cta-plane"><Icon name="plane" size={64} /></span>
          <div className="cta-text">
            <h2>Have any project idea?</h2>
            <p>I'm open to entry-level Java Developer roles, internships and collaborations.</p>
          </div>
          <a className="btn btn--primary" href={profile.resume} download>
            Download resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Cta;
