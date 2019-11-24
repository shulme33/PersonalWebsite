import React, { Component } from "react";
import MySkill from "./MySkill";
import Pdf from "../images/Samuel_Hulme_Resume.pdf";
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
          <a href={Pdf} target="_blank">
            <button className="download-button">View PDF Resume</button>
          </a>
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
              <div className="work-exp-panel-image">
                <img
                  src={require("../images/fast.png")}
                  alt="Implentation Consultant"
                />
              </div>
              <p className="work-exp-title">Implementation Consultant</p>
              <p className="work-exp-dates">June 2018 - Present</p>
              <p className="work-exp-text">
                Utilized VB.NET and SQL to implement site specific applications
                for administering driver and vehicle services to motor vehicle
                agencies in New Mexico and Colorado, including an overhaul of
                the online user interface and re-write of the vehicle
                registration process.
              </p>
            </div>

            <div className="work-exp-panel">
              <div className="work-exp-panel-image">
                <img
                  src={require("../images/msu-logo.jpg")}
                  alt="Research Assistant"
                />
              </div>
              <p className="work-exp-title">Research Assistant</p>
              <p className="work-exp-dates">May 2016 - June 2018</p>
              <p className="work-exp-text">
                Developed interactive, web-based, virtual circuit modules
                (breadboard, ohmmeter, impedance meter) for use in a classroom
                setting.
              </p>
              <p className="work-exp-text">
                Utilized HTML5, CSS3, and JavaScript Canvas to design an
                interactive and engaging user interface for introductory
                electrical engineering students.
              </p>
            </div>

            <div className="work-exp-panel">
              <div className="work-exp-panel-image">
                <img
                  src={require("../images/msu-logo.jpg")}
                  alt="Course Assistant"
                />
              </div>
              <p className="work-exp-title">Course Assistant</p>
              <p className="work-exp-dates">August 2016 - May 2018</p>
              <p className="work-exp-text">
                Instructed 40+ person lab sessions in the principles of HTML,
                CSS, and C programming in conjunction with lecture materials.
              </p>
              <p className="work-exp-text">
                Reviewed and evaluated individual student work produced during
                lab sessions in accordance with course guidelines.
              </p>
            </div>
          </div>
        </div>

        {/***************************/}
        {/*    Education Section    */}
        {/***************************/}
        <div className="resume-full education-full">
          <p className="resume-full-title">Education</p>
          <div className="education-section">
            <div className="education-picture">
              <img
                src={require("../images/bobcat.png")}
                alt="Montana State University"
              />
            </div>
            <div className="education-info-section">
              <div className="education-info">
                <p className="education-info-text-large">
                  Montana State University
                </p>
                <p className="education-info-text-small">
                  August 2013 – May 2018
                </p>
              </div>
              <div className="education-info">
                <p className="education-info-text-large">
                  B.S. in Computer Science
                </p>
                <p className="education-info-text-small">
                  with Minor in Electrical Engineering
                </p>
              </div>
              <div className="education-info">
                <p className="education-info-text-large">Overall GPA</p>
                <p className="education-info-text-small">3.59</p>
              </div>
            </div>
          </div>
          <div className="education-section">
            <div className="education-picture">
              <img
                src={require("../images/longhorns.png")}
                alt="Montana State University"
              />
            </div>
            <div className="education-info-section">
              <div className="education-info">
                <p className="education-info-text-large">
                  Fort Benton High School
                </p>
                <p className="education-info-text-small">
                  August 2009 – May 2013
                </p>
              </div>
              <div className="education-info">
                <p className="education-info-text-large">
                  Class Rank at Graduation
                </p>
                <p className="education-info-text-small">1st</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuResume;
