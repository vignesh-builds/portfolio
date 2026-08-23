import "./About.css";
function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-heading">
          <p className="section-label">GET TO KNOW ME</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">

          <div className="about-text">
            <p>
              I'm a Computer Science Engineering student focused on
              Java backend and full-stack development.
            </p>

            <p>
              I use Java and Spring Boot to build RESTful APIs,
              backend services and database-driven applications.
              I also work with React to build responsive frontend
              interfaces.
            </p>

            <p>
              I'm currently strengthening my skills in Spring Security,
              PostgreSQL, REST API design, Git and problem solving by
              building practical full-stack applications.
            </p>
          </div>

          <div className="about-focus">

            <div className="focus-card">
              <span className="focus-number">01</span>
              <h3>Backend Development</h3>
              <p>
                Java · Spring Boot · REST APIs · Spring Security
              </p>
            </div>

            <div className="focus-card">
              <span className="focus-number">02</span>
              <h3>Frontend Development</h3>
              <p>
                React · JavaScript · HTML · CSS
              </p>
            </div>

            <div className="focus-card">
              <span className="focus-number">03</span>
              <h3>Database & Tools</h3>
              <p>
                PostgreSQL · MySQL · Git · GitHub · Postman
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;