import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Home />
        <div className="wrap section">
          <About />
        </div>
        <div className="section--band">
          <div className="wrap section">
            <Skills />
          </div>
        </div>
        <Projects />
        <div className="wrap section">
          <Education />
        </div>
        <div className="section--band">
          <div className="wrap section">
            <Achievements />
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
