import React, { Component } from "react";
import MySkill from "./MySkill";
import "../css/menu.css";
import "../css/menu-resume.css";

const MenuResume = () => {
  return (
    <div className="menu">
      <div className="menu-area">
        {/* Menu Title */}
        <div className="menu-name">
          <h1 className="menu-name-text">Resume</h1>
          <div className="menu-name-underline"></div>
        </div>

        {/* Download Section */}
        <div className="download-resume">
          <p>
            Prefer a PDF version? View one now!<br></br>Note: This is not a
            download.
          </p>
          <button className="download-button">View PDF Resume</button>
        </div>

        {/* My Skills Section */}
        <div className="resume-full about-info">
          <div className="about-half-info">
            <p className="about-half-title">My Skills</p>
            <div className="myskills-list-section">
              <MySkill
                skillName={"Java"}
                numYears={"4 Years"}
                imagePath={"../images/java.jpg"}
              />
            </div>
            <div className="myskills-list-section"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuResume;
