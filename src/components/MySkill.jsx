import React, { Component } from "react";
import "../css/my-skill.css";

//style={{ backgroundImage: `url(${imagePath2})` }}

const MySkill = ({ skillName, numYears, imagePath }) => {
  const imagePath2 = "../images/warrior-movie.jpg";

  const style = {
    backgroundImage: "url(" + require({ imagePath2 }) + ")"
  };

  return (
    <div className="skill">
      <div className="skill-logo" style={style}></div>
    </div>
  );
};

export default MySkill;
