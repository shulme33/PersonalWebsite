import React from "react";
import "../../css/home-page/skills-section.css";

function SingleSkill({ skillName, skillLevel }) {
  function determineSkillStarLevel() {
    var starObject = [];
    var i = 0;

    for (i; i < Math.floor(skillLevel); i++) {
      var tempObject = <div className="star-filled"></div>;
      starObject.push(tempObject);
    }

    if (skillLevel % 1 != 0) {
      //This is something like 3.5 or 4.5 stars instead of a whole 3 or 4
      var tempObject = <div className="star-half-filled"></div>;
      starObject.push(tempObject);
      i++;
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
