import React, { Component } from "react";
import "../css/menu.css";
import "../css/menu-resume.css";
import "../css/menu-projects.css";

const MenuProjects = () => {
  return (
    <div className="menu">
      <div className="menu-area">
        {/***************************/}
        {/*       Menu Title        */}
        {/***************************/}
        <div className="menu-name">
          <h1 className="menu-name-text">Projects</h1>
          <div className="menu-name-underline"></div>
        </div>

        {/***************************/}
        {/* Work Experience Section */}
        {/***************************/}
        <div className="work-exp-test-area">
          <div className="work-exp-area">
            {/*
            
            
            
            
            
            
            
            
            */}
            <div className="work-exp-panel">
              <div className="work-exp-panel-image"></div>
              <p className="work-exp-title">Huffman Coding</p>
              <p className="project-text">
                Utilized VB.NET and SQL to implement site specific applications
                for administering driver and vehicle services to motor vehicle
                agencies in New Mexico.
              </p>
              <a href={"https://github.com/shulme33/HuffmanCode"}>
                <button className="view-button">View on GitHub</button>
              </a>
            </div>
            {/*
            
            
            
            
            
            
            
            
            */}

            <div className="work-exp-panel">
              <div className="work-exp-panel-image"></div>
              <p className="work-exp-title">Personal Website</p>
              <p className="project-text">
                Developed interactive, web-based, virtual circuit modules
                (breadboard, ohmmeter, impedance meter) for use in a classroom
                setting.
              </p>

              <a href={"https://github.com/shulme33/PersonalWebsite_V1"}>
                <button className="view-button">View on GitHub</button>
              </a>
            </div>
            {/*
            
            
            
            
            
            
            
            
            */}
            <div className="work-exp-panel">
              <div className="work-exp-panel-image"></div>
              <p className="work-exp-title">Virtual Breadboard</p>
              <p className="project-text">
                Instructed 40+ person lab sessions in the principles of HTML,
                CSS, and C programming in conjunction with lecture materials.
              </p>

              <a href={"https://github.com/shulme33/BeckerSummerProjects"}>
                <button className="view-button">View on GitHub</button>
              </a>
            </div>
            {/*
            
            
            
            
            
            
            
            
            */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuProjects;
