import { useState } from "react";
import { profile } from "../data";
import { Icon } from "./Deco";

// Backend URL. Override with VITE_API_URL in a .env file if needed.
const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://portfolio-z2k5.onrender.com/api/contact";

const emptyForm = { name: "", email: "", message: "" };

function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  // "idle" | "sending" | "success" | "error"
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    if (status === "success" || status === "error") setStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData(emptyForm);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className="section section--band" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-left">
          <header className="sec-head sec-head--inline">
            <span className="sec-icon"><Icon name="mail" size={26} /></span>
            <h2>Get In Touch</h2>
          </header>
          <p className="muted">
            I'm open to internships and full-time opportunities. Feel free to
            reach out!
          </p>

          <ul className="contact-list">
            <li>
              <Icon name="mail" size={22} />
              <b>Email</b>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <Icon name="linkedin" size={22} />
              <b>LinkedIn</b>
              <a href={profile.linkedin.url} target="_blank" rel="noreferrer">{profile.linkedin.label}</a>
            </li>
            <li>
              <Icon name="github" size={22} />
              <b>GitHub</b>
              <a href={profile.github.url} target="_blank" rel="noreferrer">{profile.github.label}</a>
            </li>
            <li>
              <Icon name="code" size={22} />
              <b>LeetCode</b>
              <a href={profile.leetcode.url} target="_blank" rel="noreferrer">{profile.leetcode.label}</a>
            </li>
          </ul>

          <div className="cta-card">
            <Icon name="send" size={54} />
            <div>
              <h3>Let's Build Something Great Together!</h3>
              <p>If you like my work, feel free to connect with me on LinkedIn or drop an email.</p>
              <a className="btn btn--gold btn--small" href={profile.linkedin.url} target="_blank" rel="noreferrer">
                Connect on LinkedIn <Icon name="external" size={15} />
              </a>
            </div>
          </div>
        </div>

        <form className="card contact-form" onSubmit={handleSubmit}>
          <h3>Send a message</h3>

          <div className="form-group">
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              id="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn--gold" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send message"}
            <Icon name="send" size={17} />
          </button>

          <div className="form-status" role="status" aria-live="polite">
            {status === "sending" && (
              <p>
                Sending your message. The first request can take a few
                seconds while the server wakes up.
              </p>
            )}

            {status === "success" && (
              <p className="form-status--success">
                Message sent. Thank you for reaching out.
              </p>
            )}

            {status === "error" && (
              <p className="form-status--error">
                Your message was not sent. Please try again, or email{" "}
                <a href={`mailto:${profile.email}`}>{profile.email}</a>.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
