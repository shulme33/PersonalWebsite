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
        {/*     Download Section    */}
        {/***************************/}
        <div className="download-resume">
          <p>
            Want to see my GitHub?<br></br>Take a look!
          </p>
          <a href={"https://github.com/shulme33"}>
            <button className="download-button">View My GitHub</button>
          </a>
        </div>

        {/***************************/}
        {/* Work Experience Section */}
        {/***************************/}
        <div className="work-exp-test-area">
          <div className="work-exp-area">
            {/*
            
            
            
            
            
            
            
            
            */}
            <div className="work-exp-panel">
              <div className="work-exp-panel-image">
                <img
                  src={require("../images/projects/huffman-code.png")}
                  alt="Course Assistant"
                />
              </div>
              <p className="work-exp-title">Huffman Coding</p>
              <p className="project-text">
                A simple implementation of the Huffman Coding compression
                algorithm. This particular instance of the algorithm is written
                in Python.
              </p>
              <a href={"https://github.com/shulme33/HuffmanCode"}>
                <button className="view-button">View on GitHub</button>
              </a>
            </div>
            {/*
            
            
            
            
            
            
            
            
            */}

            <div className="work-exp-panel">
              <div className="work-exp-panel-image">
                <img
                  src={require("../images/projects/personal-website.png")}
                  alt="Course Assistant"
                />
              </div>
              <p className="work-exp-title">Personal Website</p>
              <p className="project-text">
                The very website you are viewing right now! This is a place for
                me to experiment with a variety of technologies as well as one
                to showcase my skills and projects to others.
              </p>

              <a href={"https://github.com/shulme33/PersonalWebsite_V1"}>
                <button className="view-button">View on GitHub</button>
              </a>
            </div>
            {/*
            
            
            
            
            
            
            
            
            */}
            <div className="work-exp-panel">
              <div className="work-exp-panel-image">
                <img
                  src={require("../images/projects/breadboard.png")}
                  alt="Course Assistant"
                />
              </div>
              <p className="work-exp-title">Virtual Breadboard</p>
              <p className="project-text">
                A web application built in HTML, CSS, and JavaScript that allows
                a user to simulate a variety of electrical circuits through use
                of an interactive breadboard, voltmeter, and ohmmeter.
              </p>

              <a href={"https://github.com/shulme33/BeckerSummerProjects"}>
                <button className="view-button">View on GitHub</button>
              </a>
            </div>
            {/*
            
            
            
            
            
            
            
            
            */}
            <div className="work-exp-panel">
              <div className="work-exp-panel-image">
                <img
                  src={require("../images/projects/edamam.jpg")}
                  alt="Course Assistant"
                />
              </div>
              <p className="work-exp-title">Edamam API</p>
              <p className="project-text">
                A React application built around the Edamam API. This
                application is given some search critieria and returns recipes
                based on that input.
              </p>

              <a href={"https://github.com/shulme33/EdamamRecipeAPI"}>
                <button className="view-button">View on GitHub</button>
              </a>
            </div>
            {/*
            
            
            
            
            
            
            
            
            */}
            <div className="work-exp-panel">
              <div className="work-exp-panel-image">
                <img
                  src={require("../images/projects/minesweeper.png")}
                  alt="Course Assistant"
                />
              </div>
              <p className="work-exp-title">Mine Sweeper</p>
              <p className="project-text">
                An implementation of the popular Mine Sweeper game with Java and
                JavaFX.
              </p>

              <a href={"https://github.com/shulme33/BeckerSummerProjects"}>
                <button className="view-button">View on GitHub</button>
              </a>
            </div>
            {/*
            
            
            
            
            
            
            
            
            */}
            <div className="work-exp-panel">
              <div className="work-exp-panel-image">
                <img src={require("../images/c.png")} alt="Course Assistant" />
              </div>
              <p className="work-exp-title">C Programming</p>
              <p className="project-text">
                A set of C programming labs that I wrote while tutoring for the
                class in college.
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
