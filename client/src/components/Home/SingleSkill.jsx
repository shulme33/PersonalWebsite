import React from "react";
import "../../css/home-page/skills-section.css";

/*
    Each individual skill in the skills section
*/

function SingleSkill({ skillName, skillLevel }) {
  function determineSkillStarLevel() {
    //Creating star rating visuals based on a number input out of 5 stars
    var starObject = [];

    for (var i = 0; i < 5; i++) {
      if (i >= skillLevel) {
        //Unfilled star
        starObject.push(<div key={i} className="star-unfilled"></div>);
      } else if (skillLevel - i > 0 && skillLevel - i < 1) {
        //Half-filled star
        starObject.push(<div key={i} className="star-half-filled"></div>);
      } else {
        //Filled star
        starObject.push(<div key={i} className="star-filled"></div>);
      }
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
