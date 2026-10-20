import { profile } from "../data";
import { Icon } from "./Deco";

const tech = ["Java", "Spring Boot", "React", "PostgreSQL", "GitHub"];

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <p>© {new Date().getFullYear()} {profile.firstName}. All rights reserved.</p>
        <ul className="footer-tech" aria-label="Technologies">
          {tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <a href="#home" className="icon-btn to-top" aria-label="Back to top">
          <Icon name="up" size={18} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
