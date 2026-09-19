function Skills() {
  const skills = [
    {
      name: "HTML",
      description:
        "Creating well-structured, semantic and accessible web pages.",
    },
    {
      name: "CSS",
      description:
        "Designing responsive layouts and attractive user interfaces.",
    },
    {
      name: "JavaScript",
      description:
        "Adding functionality, interactivity and dynamic behavior to websites.",
    },
    {
      name: "React",
      description:
        "Building reusable components and modern interactive web applications.",
    },
    {
      name: "Bootstrap",
      description:
        "Creating responsive layouts and interfaces using Bootstrap components.",
    },
    {
      name: "Git & GitHub",
      description:
        "Managing projects, tracking changes and collaborating with version control.",
    },
  ];

  return (
    <section id="skills" className="section-padding skills-section">
      <div className="container">
        <div className="section-title">
          <p>MY EXPERTISE</p>
          <h2>My Skills</h2>
        </div>

        <div className="row g-4">
          {skills.map((skill, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="skill-card">
                <h4>{skill.name}</h4>
                <p>{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;