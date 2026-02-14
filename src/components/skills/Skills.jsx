import React from "react";
import SkillBox from "./SkillBox";
import "./Skills.css";

const Skills = () => {
 const frontendSkills = [
  { skill_name: "HTML", skill_level: "Advanced" },
  { skill_name: "CSS", skill_level: "Advanced" },
  { skill_name: "JavaScript", skill_level: "Advanced" },
  { skill_name: "React JS", skill_level: "Advanced" },
  { skill_name: "Next.js", skill_level: "Advanced" },
  { skill_name: "Tailwind CSS", skill_level: "Advanced" },
  { skill_name: "Bootstrap", skill_level: "Advanced" },
  { skill_name: "Sass / SCSS", skill_level: "Advanced" },
  { skill_name: "Responsive Design", skill_level: "Advanced" },
  { skill_name: "Cross-Browser Compatibility", skill_level: "Advanced" },
  { skill_name: "UI / UX Implementation", skill_level: "Advanced" },
  { skill_name: "REST API Integration", skill_level: "Advanced" },
];
const backendSkills = [
  { skill_name: "Node.js", skill_level: "Advanced" },
  { skill_name: "Express.js", skill_level: "Advanced" },
  { skill_name: "REST API Development", skill_level: "Advanced" },
  { skill_name: "MongoDB", skill_level: "Advanced" },
  { skill_name: "JWT Authentication", skill_level: "Advanced" },
  { skill_name: "API Integration", skill_level: "Advanced" },
  { skill_name: "Python (Flask)", skill_level: "Intermediate" },
  { skill_name: "GraphQL", skill_level: "Intermediate" },
  { skill_name: "Database Design", skill_level: "Advanced" },
  { skill_name: "Error Handling", skill_level: "Advanced" },
];

  return (
    <section className="skills section" id="skills">
      <h2 className="section_title" data-aos="zoom-in">
        Skills
      </h2>
      <span className="section_subtitle" data-aos="zoom-in">
        My technical level
      </span>

      <div className="skills_container container grid">
        <SkillBox title="Frontend Developer" skills={frontendSkills} />
        <SkillBox title="Backend Developer" skills={backendSkills} />
      </div>
    </section>
  );
};

export default Skills;
