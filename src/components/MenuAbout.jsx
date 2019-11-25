import React, { Component } from "react";
import "../css/menu.css";
import "../css/menu-resume.css";

//<p className="about-half-title">Where I Grew Up</p>
//<p className="about-half-text">Fort Benton, Montana</p>

const MenuAbout = () => {
  return (
    <div className="menu">
      <div className="menu-area">
        {/* Menu Title */}
        <div className="menu-name">
          <h1 className="menu-name-text">About Me</h1>
          <div className="menu-name-underline"></div>
        </div>

        <div className="resume-full education-full">
          <p className="resume-full-title">Hello There!</p>
          <div className="education-section">
            <div className="education-picture">
              <img
                src={require("../images/profile-picture-2.jpg")}
                alt="Profile Picture"
              />
            </div>
            <p className="about-half-text">
              Hi! My name is Sam Hulme and I hope that you like my website. The
              main purpose of this website is to provide me with a fun place to
              experiment with various technologies and display my projects. Feel
              free to poke around and/or contact me if you have any questions or
              would just like to get in touch!
            </p>
          </div>
        </div>

        <div className="resume-full education-full">
          <p className="resume-full-title">My Hometown</p>
          <div className="education-section">
            <div className="education-picture">
              <img
                src={require("../images/fort-benton.jpg")}
                alt="Profile Picture"
              />
            </div>
            <p className="about-half-text">Fort Benton, Montana</p>
          </div>
        </div>

        <div className="resume-full education-full">
          <p className="resume-full-title">Favorite Movie</p>
          <div className="education-section">
            <div className="education-picture">
              <img
                src={require("../images/warrior-movie.jpg")}
                alt="Profile Picture"
              />
            </div>
            <p className="about-half-text">
              Warrior (2011)<br></br>Directed By: Gavin O'Connor
            </p>
          </div>
        </div>

        <div className="resume-full education-full">
          <p className="resume-full-title">Favorite Superhero</p>
          <div className="education-section">
            <div className="education-picture">
              <img
                src={require("../images/batman-funny.jpg")}
                alt="Favorite Superhero"
              />
            </div>
            <p className="about-half-text">Batman.....duhh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuAbout;
