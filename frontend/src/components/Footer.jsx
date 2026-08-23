import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-main">
          <h3>Vignesh</h3>

          <p>
            Java Full Stack Developer focused on building
            practical and scalable web applications.
          </p>
        </div>


        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>


        <div className="footer-bottom">
          <p>
            © 2026 Vignesh. All rights reserved.
          </p>

          <p>
            Built with React
          </p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;