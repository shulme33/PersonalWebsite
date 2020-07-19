import React from "react";
import "../../css/home-page/project.css";

function Project({ projectTitle, projectPicture, repoLocation }) {
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
          <a href={repoLocation}>
            <button className="project-button" onClick>
              View on Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;

/* 

<button className="project-button" onClick>View on GitHub</button> 


<button
            className="project-button"
            onclick="location.href='http://www.google.com'"
            type="button"
          >
            Tester 2
          </button>

*/
