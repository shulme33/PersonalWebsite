import React from "react";
import "../../css/home-page/project.css";

/* 
    Each individual personal project
*/

function Project({
  projectTitle,
  projectPicture,
  repoLocation,
  repoLocation2,
  buttonTitle1,
  buttonTitle2,
  projectDescription,
}) {
  function visibilityClassButton() {
    return repoLocation === "" ? " link-hidden" : "";
  }

  function visibilityClassPar() {
    return repoLocation === "" ? "" : " link-hidden";
  }

  function determineButtonLabel(title) {
    return title !== undefined && title !== "" ? title : "View on Github";
  }

  function renderButtons(repoLoc, title) {
    if (repoLoc === undefined || repoLoc === "") {
      return;
    }

    return (
      <a href={repoLoc}>
        <button className={"project-button " + visibilityClassButton()}>
          {determineButtonLabel(title)}
        </button>
      </a>
    );
  }

  return (
    <div className="project-item">
      <div className={"project-picture" + projectPicture}></div>

      <div className="project-text-container">
        <h4 className="project-title">{projectTitle}</h4>
        <p className="project-text">{projectDescription}</p>
        <div className="project-button-container">
          {renderButtons(repoLocation, buttonTitle1)}
          {renderButtons(repoLocation2, buttonTitle2)}

          <p className={visibilityClassPar()}>Inquire For Details</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
