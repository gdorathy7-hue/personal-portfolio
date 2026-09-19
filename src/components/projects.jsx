function Projects() {
  const projects = [
    {
      name: "Age Checker",
      description:
        "A simple web application that checks a user's age and provides a result based on the information entered.",
      technologies: "HTML, CSS, JavaScript",
      github: "#",
      demo: "#"
    },

    {
      name: "Calculator App",
      description:
        "A responsive calculator application designed to perform basic mathematical operations with a simple and user-friendly interface.",
      technologies: "HTML, CSS, JavaScript",
      github: "#",
      demo: "#"
    },

    {
      name: "Registration App",
      description:
        "A React-based registration application that manages user input and displays a successful registration message.",
      technologies: "React, JavaScript, Bootstrap",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding">

      <div className="container">

        <div className="section-title">
          <p>MY WORK</p>
          <h2>Projects</h2>
        </div>

        <div className="row g-4">

          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-4" key={index}>

              <div className="project-card">

                <div className="project-image">
                  <span>Project {index + 1}</span>
                </div>

                <div className="project-content">

                  <h3>{project.name}</h3>

                  <p>
                    {project.description}
                  </p>

                  <p>
                    <strong>Technologies:</strong>{" "}
                    {project.technologies}
                  </p>

                  <div className="mt-3">

                    <a
                      href={project.github}
                      className="btn btn-dark me-2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;