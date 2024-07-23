import React from "react";
import Project from "./Project";
// import BankistApp from "../../assets/Bankist-App.png";
// import BankistSite from "../../assets/BankistSite.png";
// import DrogoSurvey from "../../assets/DrogoSurvey.png";
// import MaptyApp from "../../assets/MaptyApp.png";
// import RandomGame from "../../assets/RandomGame.png";
// import DiceLuck from "../../assets/DiceLuck.png";
// import SnakeGame from "../../assets/SnakeGame.png";
// import TicTac from "../../assets/TicTac.png";
// import BookLand from "../../assets/BookLand.png";
// import Createsmart from "../../assets/Createsmart.png";
// import MBFX from "../../assets/MBFX.png";
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

      {/* <div className="projects_container container grid"> */}
      {/* <Project
        projects={[
          {
            imageURL: MBFX,
            title: "MBFX",
            // github: "https://github.com",
            demo: "https://mbfx.co",
            description: `<p>MBFX is a trading company website that uses HTML, CSS, and JavaScript.
             It offers an easy-to-use interface for trading stocks, commodities, currencies, and 
             indices. With real-time market data and analysis tools, users can make informed decisions.
              MBFX prioritizes security and provides customer support for a reliable trading 
              experience.</p>`,
          },
        ]}
      /> */}
      {/* </div> */}
    </section>
  );
};

export default Projects;
