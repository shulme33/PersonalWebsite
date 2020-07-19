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
          repoLocation="https://github.com/shulme33/PersonalWebsite"
        />
        <Project
          projectTitle={["Edamam API"]}
          projectPicture=" project-pic-edamam"
          repoLocation="https://github.com/shulme33/EdamamRecipeAPI"
        />
        <Project
          projectTitle={["Virtual Breadboard"]}
          projectPicture=" project-pic-breadboard"
          repoLocation=""
        />
        <Project
          projectTitle={["Huffman Coding"]}
          projectPicture=" project-pic-huffman"
          repoLocation="https://github.com/shulme33/HuffmanCode"
        />
        <Project
          projectTitle={["Mine Sweeper"]}
          projectPicture=" project-pic-minesweeper"
          repoLocation="https://github.com/shulme33/MineSweeper"
        />
        <Project
          projectTitle={["C Programming"]}
          projectPicture=" project-pic-coding"
          repoLocation="https://github.com/shulme33/C_Programming_Tutor"
        />
      </div>
    </div>
  );
}

export default ProjectsSection;

/*

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
          projectTitle={["Mine Sweeper blahh blahh"]}
          projectPicture=" project-pic-personal-website"
        />
        */
