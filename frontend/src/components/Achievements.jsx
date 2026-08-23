import "./Achievements.css";

function Achievements() {
  return (
    <section className="achievements" id="achievements">

      <div className="achievements-container">

        <div className="section-heading">
          <p className="section-label">ACHIEVEMENTS</p>

          <h2>Achievements & Activities</h2>

          <p className="section-description">
            Highlights from my academic, technical and
            extracurricular journey.
          </p>
        </div>


        <div className="achievements-grid">

          {/* Symposium */}
          <div className="achievement-card">

            <span className="achievement-number">01</span>

            <h3>Technical Symposium Winner</h3>

            <p>
              Secured first place in Debugging and Coding competitions at a technical symposium and received prize money and certificates for the achievement.
            </p>

            <div className="achievement-tags">
              <span>Debugging</span>
              <span>Coding</span>
              <span>Winner And Runner</span>
              <span>Prize</span>
              <span>Certificate</span>
            </div>

          </div>


          {/* NCC */}
          <div className="achievement-card">

            <span className="achievement-number">02</span>

            <h3>NCC</h3>

            <p>
              Participated in NCC activities during school,
              developing discipline, teamwork and leadership skills.
            </p>

            <div className="achievement-tags">
              <span>Discipline</span>
              <span>Teamwork</span>
              <span>Leadership</span>
            </div>

          </div>


          {/* Typewriting */}
          <div className="achievement-card">

            <span className="achievement-number">03</span>

            <h3>Typewriting</h3>

            <p>
              Completed both Junior and Senior level typewriting
              examinations with First Class, including Distinction
              in Senior level.
            </p>

            <div className="achievement-tags">
              <span>Junior - First Class</span>
              <span>Senior - Distinction With First Class</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Achievements;