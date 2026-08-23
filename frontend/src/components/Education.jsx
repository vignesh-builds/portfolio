import "./Education.css"
import "./Education.css";

function Education() {
  return (
    <section className="education" id="education">
      <div className="education-container">

        <div className="section-heading">
          <p className="section-label">MY EDUCATION</p>
          <h2>Education</h2>
        </div>

        <div className="education-card">

          <div className="education-year">
            2023 – 2027
          </div>

          <div className="education-content">
            <h3>B.E. Computer Science and Engineering</h3>

            <h4>
              Anjalai Ammal Mahalingam Engineering College
            </h4>

            <p>
              Currently pursuing Computer Science and Engineering,
              with a focus on Java, backend development and
              full-stack application development.
            </p>

            <div className="education-focus">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>React</span>
              <span>SQL</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;