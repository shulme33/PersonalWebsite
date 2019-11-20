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
        <div className="resume-full">
          <div className="about-half-info">
            <p className="about-half-title">My Technical Skills</p>
            <div className="myskills-list-section">
              <MySkill
                skillName={"HTML5"}
                numYears={"2+ Years"}
                imagePath={"html.png"}
              />
              <MySkill
                skillName={"CSS3"}
                numYears={"2+ Years"}
                imagePath={"css.png"}
              />
              <MySkill
                skillName={"JavaScript"}
                numYears={"2+ Years"}
                imagePath={"js.svg"}
              />
              <MySkill
                skillName={"React"}
                numYears={"6+ Months"}
                imagePath={"react.png"}
              />
              <MySkill
                skillName={"SQL"}
                numYears={"1+ Years"}
                imagePath={"mysql.png"}
              />
            </div>
            <div className="myskills-list-section">
              <MySkill
                skillName={"Java"}
                numYears={"4+ Years"}
                imagePath={"java.png"}
              />
              <MySkill
                skillName={"Python"}
                numYears={"4+ Years"}
                imagePath={"python.png"}
              />
              <MySkill
                skillName={"C Programming"}
                numYears={"3+ Years"}
                imagePath={"c.png"}
              />
              <MySkill
                skillName={"VB.NET"}
                numYears={"1+ Years"}
                imagePath={"vb.png"}
              />
              <MySkill
                skillName={"GitHub/Git"}
                numYears={"1+ Years"}
                imagePath={"github.png"}
              />
            </div>
          </div>
        </div>

        <div className="about-half about-info">
          <div className="about-half-info">
            <p className="about-half-title">My Favorite Movie</p>
            <p className="about-half-text">
              Warrior (2011)<br></br>Directed By: Gavin O'Connor
            </p>
          </div>
        </div>
        <div className="about-half about-info">
          <div className="about-half-info">
            <p className="about-half-title">My Favorite Movie</p>
            <p className="about-half-text">
              Warrior (2011)<br></br>Directed By: Gavin O'Connor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuResume;
