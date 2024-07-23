import React from "react";
import "./Resume.css";
import ResumeBox from "./ResumeBox";

const Resume = () => {
  return (
    <section className="resume section" id="resume">
      <h2 className="section_title" data-aos="zoom-in">
        Resume
      </h2>
      <span className="section_subtitle" data-aos="zoom-in">
        My personal journey
      </span>

      <div className="resume_container container grid">
        <ResumeBox
          heading="Education"
          iconClass="graduation-cap"
          qualification={[
            {
              title: "Bachelor In Computer Science",
              location: "FUUAST, Islamabad",
              calender: "2020-2024",
            },
            {
              title: "Intermediate",
              location: "APACS Pothwar complex , Islamabad",
              calender: "2018 - 2020",
            },
            {
              title: "Matriculation",
              location: "IMSB G-6/4, Islamabad",
              calender: "2015 - 2017",
            },
          ]}
        />

        <ResumeBox
          heading="Work"
          iconClass="briefcase-alt"
          qualification={[
            {
              title: "FRONTEND Web Developer",
              location: "Free CodeCamp",
              calender: "February 2024 - Present",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Resume;
