import React, { Component } from "react";
import "../css/my-skill.css";

//style={{ backgroundImage: `url(${imagePath2})` }}

const MySkill = ({ skillName, numYears, imagePath }) => {
  return (
    <div className="skill">
      <div className="skill-logo">
        <img
          src={require(`../images/${imagePath}`)}
          alt="Test Image"
          height="50"
        />
      </div>
      <div className="skill-data">
        <p className="skill-data-title">{skillName}</p>
        <p className="skill-data-years">{numYears}</p>
      </div>
    </div>
  );
};

export default MySkill;
