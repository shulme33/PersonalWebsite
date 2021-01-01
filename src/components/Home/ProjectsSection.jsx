import React from "react";
import SectionTitle from "../SectionTitle.jsx";
import Project from "./Project.jsx";
import "../../css/css-global/structure.css";
import "../../css/home-page/projects-section.css";

/*

    The Projects section on the homepage

*/

function ProjectsSection() {
  return (
    <div className="mp mp-fit mp-color-2" id="id-projects-section">
      <div className="imp imp-flex proj-imp">
        <SectionTitle mainTitle="It's Alive!" subTitle="Personal Projects" />
        <Project
          projectTitle={["Personal Website"]}
          projectPicture=" project-pic-personal-website"
          repoLocation="https://github.com/shulme33/PersonalWebsite"
          repoLocation2="https://github.com/shulme33/PersonalWebsiteServer"
          buttonTitle1="View Client"
          buttonTitle2="View Server"
          projectDescription="The very website you are viewing right now! This is a place for me to experiment with a variety of technologies as well as one to showcase my skills and projects to others."
        />
        <Project
          projectTitle={["Edamam API"]}
          projectPicture=" project-pic-edamam"
          repoLocation="https://github.com/shulme33/EdamamRecipeAPI"
          projectDescription="A React application built around the Edamam API. This application is given some search critieria and returns recipes based on that input."
        />
        <Project
          projectTitle={["Virtual Breadboard"]}
          projectPicture=" project-pic-breadboard"
          repoLocation=""
          projectDescription="A web application built in HTML, CSS, and JavaScript Canvas that allows a user to simulate a variety of electrical circuits through use of an interactive breadboard, voltmeter, and ohmmeter."
        />
        <Project
          projectTitle={["Huffman Coding"]}
          projectPicture=" project-pic-huffman"
          repoLocation="https://github.com/shulme33/HuffmanCode"
          projectDescription="A simple implementation of the Huffman Coding compression algorithm. This particular instance of the algorithm is written in Python."
        />
        <Project
          projectTitle={["Mine Sweeper"]}
          projectPicture=" project-pic-minesweeper"
          repoLocation="https://github.com/shulme33/MineSweeper"
          projectDescription="An implementation of the popular Mine Sweeper game with Java and JavaFX."
        />
        <Project
          projectTitle={["C Programming"]}
          projectPicture=" project-pic-coding"
          repoLocation="https://github.com/shulme33/C_Programming_Tutor"
          projectDescription="A set of C programming labs that I wrote while tutoring for the class in college."
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
