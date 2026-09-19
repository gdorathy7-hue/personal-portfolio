function Contact() {
  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="section-title">
          <p>GET IN TOUCH</p>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-card">
          <p>
            I would love to connect with you. Feel free to reach out
            through email or visit my professional profiles.
          </p>

          <div className="contact-links">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:gdorathy7@gmail.com">
                gdorathy7@gmail.com
              </a>
            </p>

            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/gdorathy7-hue"
                target="_blank"
                rel="noreferrer"
              >
                Visit My GitHub
              </a>
            </p>

            <p>
              <strong>LinkedIn:</strong>{" "}
              <a href="#" target="_blank" rel="noreferrer">
                Visit My LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;