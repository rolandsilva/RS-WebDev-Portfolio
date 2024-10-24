import "./SkillsPage.css";

const skillsData = [
  {
    category: "Web",
    skills: [
      { name: "HTML", level: "90%" },
      { name: "CSS", level: "90%" },
      { name: "JavaScript", level: "90%" },
      { name: "React", level: "90%" },
      { name: "Next.js", level: "75%" },
    ],
  },
  {
    category: "Programming",
    skills: [
      { name: "Node.js", level: "80%" },
      { name: "Express.js", level: "90%" },
    ],
  },
  {
    category: "Databases",
    skills: [{ name: "MongoDB", level: "90%" }],
  },
];

const SkillsPage = () => {
  return (
    // <main className="home-container">
    //   <section className="mainSection">
    // </section>
    // </main>

    <section className="skillssection">
      <h2>My Skills</h2>
      <div>
        {skillsData.map((skillCategory) => (
          <div key={skillCategory.category} className="skillCategory">
            <h3>{skillCategory.category}</h3>
            {skillCategory.skills.map((skill) => (
              <div key={skill.name} className="skillBarContainer">
                <span>{skill.name}</span>
                <div className="skillBarWrapper">
                  <span>{skill.level}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsPage;
