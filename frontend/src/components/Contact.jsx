import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://portfolio-z2k5.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: ""
        });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Backend connection failed.");
    }
  };

  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        <div className="section-heading">
          <p className="section-label">GET IN TOUCH</p>

          <h2>Let's Connect</h2>

          <p className="section-description">
            I'm open to opportunities, internships and
            collaborations in Java full-stack development.
          </p>
        </div>


        <div className="contact-content">

          {/* Contact Information */}
          <div className="contact-info">

            <div className="contact-item">
              <span className="contact-label">Email</span>

              <a
                href="mailto:vignesh.builds-email@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                vignesh.builds@gmail.com
              </a>
            </div>


            <div className="contact-item">
              <span className="contact-label">GitHub</span>

              <a
                href="https://github.com/vignesh-builds"
                target="_blank"
                rel="noreferrer"
              >
                github.com/vignesh-builds
              </a>
            </div>


            <div className="contact-item">
              <span className="contact-label">LinkedIn</span>

              <a
                href="http://linkedin.com/in/vignesh1926/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/vignesh1926/
              </a>
            </div>

          </div>


          {/* Contact Form */}
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input
                type="text"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value
                  })
                }
                required
              />
            </div>


            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                type="email"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value
                  })
                }
                required
              />
            </div>


            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value
                  })
                }
                required
              ></textarea>
            </div>


            <button type="submit">
              Send Message
            </button>

            {status && (
              <p className="form-status">
                {status}
              </p>
)}

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;