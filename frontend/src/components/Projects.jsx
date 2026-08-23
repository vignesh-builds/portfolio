import "./Projects.css"
function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="projects-container">

        <div className="section-heading">
          <p className="section-label">MY WORK</p>

          <h2>Projects</h2>

          <p className="section-description">
            Practical full-stack applications built using
            Java, Spring Boot, React and PostgreSQL.
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
              <a href="https://github.com/vignesh-builds" 
              target="_blank"
              rel="noreferrer" className="project-btn">
                GitHub
              </a>

              <a href="#" className="project-btn">
                Live Demo
              </a>
            </div>

          </div>


          {/* Project 2 */}
          <div className="project-card">

            <span className="project-number">02</span>

            <h3>E-Commerce Web Application</h3>

            <p>
              A full-stack e-commerce application for browsing
              products, managing a shopping cart and placing orders.
            </p>

            <div className="project-tech">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>React</span>
              <span>PostgreSQL</span>
            </div>

            <div className="project-links">
              <a href="https://github.com/vignesh-builds" 
              target="_blank"
              rel="noreferrer" className="project-btn">
                GitHub
              </a>

              <a href="#" className="project-btn">
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