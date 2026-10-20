import "./Skills.css"
function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <div className="section-heading">
          <p className="section-label">TECHNICAL SKILLS</p>
          <h2>What I Work With</h2>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Languages</h3>

            <div className="skill-list">
              <span>Java</span>
              <span>JavaScript</span>
              <span>SQL</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>

            <div className="skill-list">
              <span>Spring Boot</span>
              <span>Spring Security</span>
              <span>REST API</span>
              <span>JPA / Hibernate</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Frontend</h3>

            <div className="skill-list">
              <span>React</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Database & Tools</h3>

            <div className="skill-list">
              <span>PostgreSQL</span>
              <span>MySQL</span>
              <span>Git</span>
              <span>GitHub</span>
              <span>Postman</span>
              <span>IntelliJ IDEA</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;