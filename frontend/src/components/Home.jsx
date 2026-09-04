import "./Home.css";

function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <p className="hero-small">Hi, I'm</p>

        <h1>Vignesh</h1>

        <h2>
          Java <span>Full Stack Developer</span>
        </h2>

        <p className="hero-description">
          I build full-stack web applications using Java, Spring Boot,
          React and PostgreSQL, with a focus on clean backend development
          and responsive user experiences.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>

          <a
            href="\Vignesh-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            Resume
          </a>

        </div>

        <div className="hero-tech">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>React</span>
          <span>PostgreSQL</span>
        </div>

      </div>
    </section>
  );
}

export default Home;
