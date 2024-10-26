import React from "react";
import SkillBox from "./SkillBox";
import "./Skills.css";

const Skills = () => {
  const frontendSkills = [
    { skill_name: "HTML", skill_level: "Advanced" },
    { skill_name: "React JS", skill_level: "Intermediate" },
    { skill_name: "JavaScript", skill_level: "Intermediate" },
    { skill_name: "NEXT JS", skill_level: "Intermediate" },
    { skill_name: "Tailwind Css", skill_level: "Intermediate" },
    { skill_name: "Bootstrap", skill_level: "Intermediate" },
    { skill_name: "Sass/Scss", skill_level: "Intermediate" },
  ];
  const backendSkills = [
    {
      skill_name: "Node Js",
      skill_level: "Basic",
    },
    {
      skill_name: "Express Js",
      skill_level: "Intermediate",
    },
    {
      skill_name: "Python Flask",
      skill_level: "Intermediate",
    },
    {
      skill_name: "RestApi",
      skill_level: "Intermediate",
    },
    {
      skill_name: "Graphql",
      skill_level: "Basic",
    },
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
