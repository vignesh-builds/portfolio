import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="projects-container">

        <div className="section-heading">
          <p className="section-label">MY WORK</p>

          <h2>Projects</h2>

          <p className="section-description">
            Real-world projects built using modern web technologies
            and full-stack development tools.
          </p>
        </div>

        <div className="projects-grid">

          {/* Project 1 */}
          <div className="project-card">

            <span className="project-number">01</span>

            <h3>Hospital Appointment Management System</h3>

            <p>
              A full-stack application for managing
              patients, doctors and appointments.
            </p>

            <div className="project-tech">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>React</span>
              <span>PostgreSQL</span>
            </div>

            <div className="project-links">

              <a
                href="https://github.com/vignesh-builds/hospital-management"
                target="_blank"
                rel="noreferrer"
                className="project-btn"
              >
                GitHub
              </a>

              <a
                href="https://hospital-frontend-7jfj.onrender.com"
                target="_blank"
                rel="noreferrer"
                className="project-btn"
              >
                Live Demo
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;
