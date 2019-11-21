import React, { Component } from "react";
import MySkill from "./MySkill";
import "../css/menu.css";
import "../css/menu-resume.css";
import { createRequireFromPath } from "module";

const MenuResume = () => {
  return (
    <div className="menu">
      <div className="menu-area">
        {/***************************/}
        {/*       Menu Title        */}
        {/***************************/}
        <div className="menu-name">
          <h1 className="menu-name-text">Resume</h1>
          <div className="menu-name-underline"></div>
        </div>

        {/***************************/}
        {/*     Download Section    */}
        {/***************************/}
        <div className="download-resume">
          <p>
            Prefer a PDF version? View one now!<br></br>Note: This is not a
            download.
          </p>
          <button className="download-button">View PDF Resume</button>
        </div>

        {/***************************/}
        {/*    My Skills Section    */}
        {/***************************/}
        <div className="resume-full">
          <p className="resume-full-title">My Technical Skills</p>
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
          </div>
          <div className="myskills-list-section">
            <MySkill
              skillName={"SQL"}
              numYears={"1+ Years"}
              imagePath={"mysql.png"}
            />
            <MySkill
              skillName={"GitHub/Git"}
              numYears={"1+ Years"}
              imagePath={"github.png"}
            />
            <MySkill
              skillName={"Microsoft Office"}
              numYears={"8+ Years"}
              imagePath={"office.png"}
            />
            <MySkill
              skillName={"Skyrim"}
              numYears={"4+ Years"}
              imagePath={"skyrim.png"}
            />
          </div>
        </div>

        {/***************************/}
        {/* Work Experience Section */}
        {/***************************/}
        <div className="work-exp-test-area">
          <div className="work-exp-area">
            <div className="work-exp-panel">
              <img
                src={require("../images/fort-benton.jpg")}
                alt="Fast Enterprises"
                width="350"
                height="200"
              />
            </div>
            <div className="work-exp-panel">
              <img
                src={require("../images/fort-benton.jpg")}
                alt="Fast Enterprises"
                width="350"
                height="200"
              />
            </div>
            <div className="work-exp-panel">
              <img
                src={require("../images/fort-benton.jpg")}
                alt="Fast Enterprises"
                width="350"
                height="200"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuResume;
