function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-7">
            <p className="hero-intro">WELCOME TO MY PORTFOLIO</p>

            <h1>
              Hi, I'm <span>Dorathy Godwin</span>
            </h1>

            <h2>Frontend Developer</h2>

            <p className="hero-text">
              I create responsive, user-friendly and modern websites.
              I enjoy turning ideas into functional digital experiences
              while continuously improving my skills in web development.
            </p>

            <div className="mt-4">
              <a href="#projects" className="btn btn-primary me-3">
                View My Projects
              </a>

              <a href="#contact" className="btn btn-outline-light">
                Let's Connect
              </a>
            </div>
          </div>

          <div className="col-lg-5 text-center mt-5 mt-lg-0">
            <div className="profile-circle">
              <span>DG</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;