import React from "react";
import "../../css/home-page/skills-section.css";

function SingleSkill({ skillName, skillLevel }) {
  function determineSkillStarLevel() {
    var starObject = [];
    var i = 0;
    for (i; i < skillLevel; i++) {
      var tempObject = <div className="star-filled"></div>;
      starObject.push(tempObject);
    }

    for (i; i < 5; i++) {
      var tempObject = <div className="star-unfilled"></div>;
      starObject.push(tempObject);
    }

    return starObject;
  }

  return (
    <div className="single-skill">
      <p>{skillName}</p>
      <div className="skill-stars">{determineSkillStarLevel(skillLevel)}</div>
    </div>
  );
}

export default SingleSkill;
