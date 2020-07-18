import React from "react";
import "../../css/home-page/project.css";

function Project({ projectTitle, projectPicture }) {
  return (
    <div className="project-item">
      <div className={"project-picture" + projectPicture}></div>

      <div className="project-text-container">
        <h4 className="project-title">{projectTitle}</h4>
        <p className="project-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
          accusamus iure officia doloribus quasi veritatis quis.
        </p>
        <div className="project-button-container">
          <button className="project-button">View on GitHub</button>
        </div>
      </div>
    </div>
  );
}

export default Project;
