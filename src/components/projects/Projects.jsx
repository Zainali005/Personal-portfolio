import React from "react";
import Project from "./Project";
import StickerBlitz from "../../assets/stickerblitz.png";
import SehalWelfare from "../../assets/sehalwelfare.png";
import Codeertz from "../../assets/codeetz.png";

import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section_title" data-aos="zoom-in">
        Projects
      </h2>
      <span className="section_subtitle" data-aos="zoom-in">
        Most recent work
      </span>

      <div className="projects_container container">
        <Project
          projects={[
            {
              imageURL: StickerBlitz,
              title: "Sticker Blitz",
              demo: "https://sticker-blitz.vercel.app/",
              description: `<p>Sticker Blitz is a dynamic e-commerce platform built using the MERN stack 
              (MongoDB, Express.js, React, and Node.js) that specializes in custom stickers and decals.
              Users can explore, customize, and purchase stickers from a wide variety of designs. 
              Sticker Blitz integrates a secure payment gateway and real-time order tracking to provide a 
              seamless user experience.</p>`,
            },
            {
              imageURL: SehalWelfare,
              title: "Sehal Welfare Foundation",
              demo: "https://sehalwelfarefoundation.com/",
              description: `<p>Sehal Welfare Foundation is a charitable organization website developed to promote
              community welfare initiatives. Built with HTML, CSS, JavaScript, and jQuery, this site provides 
              information on various programs, events, and donation opportunities. The Sehal Welfare Foundation
              platform is designed to raise awareness and streamline the donation process, making it easy for 
              users to contribute to social causes.</p>`,
            },
            {
              imageURL: Codeertz,
              title: "Codeertz Agency",
              demo: "https://codeertz.com/",
              description: `<p>Codeertz is a digital agency specializing in web development, mobile app development, and digital marketing. Our team is dedicated to delivering innovative solutions that meet the unique needs of our clients. From concept to execution, Codeertz is committed to driving success through technology.</p>`, // Update with a description of Codeertz
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Projects;
