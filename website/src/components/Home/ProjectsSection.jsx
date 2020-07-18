import React from "react";
import SectionTitle from "../SectionTitle.jsx";
import Project from "./Project.jsx";
import "../../css/css-global/structure.css";
import "../../css/home-page/projects-section.css";

/*

    The home page of samhulme.com

*/

function ProjectsSection() {
  return (
    <div className="mp mp-fit mp-color-2">
      <div className="imp imp-flex proj-imp">
        <SectionTitle mainTitle="It's Alive!" subTitle="Personal Projects" />
        <Project
          projectTitle={["Personal Website"]}
          projectPicture=" project-pic-personal-website"
        />
        <Project
          projectTitle={["Edamam API"]}
          projectPicture=" project-pic-personal-website"
        />
        <Project
          projectTitle={["Virtual Breadboard"]}
          projectPicture=" project-pic-personal-website"
        />
        <Project
          projectTitle={["Huffman Coding"]}
          projectPicture=" project-pic-personal-website"
        />
        <Project
          projectTitle={["Mine Sweeper"]}
          projectPicture=" project-pic-personal-website"
        />
        <Project
          projectTitle={["Mine Sweeper"]}
          projectPicture=" project-pic-personal-website"
        />
      </div>
    </div>
  );
}

export default ProjectsSection;
