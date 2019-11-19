import React, { Component } from "react";
import "../css/menu.css";

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

        {/* Profile Section */}
        <div className="about-half about-info">
          <div className="about-half-info">
            <p className="about-half-title">Hello There!</p>
            <p className="about-half-text">
              Hi! My name is Sam Hulme and I hope that you like my website. The
              main purpose of this website is to provide me with a fun place to
              experiment with various technologies and display my projects. Feel
              free to poke around and/or contact me if you have any questions or
              would just like to get in touch!
            </p>
          </div>
        </div>
        <div className="about-half">
          <div
            className="about-picture"
            style={{ width: "320px", height: "396px" }}
          >
            <img
              className="about-picture"
              src={require("../images/profile-picture-2.jpg")}
              alt="Profile Picture"
              width="300"
            />
          </div>
        </div>

        {/* Hometown Section */}
        <div className="about-half">
          <div
            className="about-picture"
            style={{ width: "476px", height: "320px" }}
          >
            <img
              className="about-picture"
              src={require("../images/fort-benton.jpg")}
              alt="Profile Picture"
              height="300"
            />
          </div>
        </div>
        <div className="about-half about-info">
          <div className="about-half-info">
            <p className="about-half-title">Where I Grew Up</p>
            <p className="about-half-text">Fort Benton, Montana</p>
          </div>
        </div>

        {/* Favorite Movie Section */}
        <div className="about-half about-info">
          <div className="about-half-info">
            <p className="about-half-title">My Favorite Movie</p>
            <p className="about-half-text">
              Warrior (2011)<br></br>Directed By: Gavin O'Connor
            </p>
          </div>
        </div>
        <div className="about-half">
          <div
            className="about-picture"
            style={{ width: "270px", height: "404px" }}
          >
            <img
              className="about-picture"
              src={require("../images/warrior-movie.jpg")}
              alt="Profile Picture"
              width="250"
            />
          </div>
        </div>

        {/* Favorite Superhero Section */}
        <div className="about-half">
          <div
            className="about-picture"
            style={{ width: "420px", height: "420px" }}
          >
            <img
              className="about-picture"
              src={require("../images/batman-funny.jpg")}
              alt="Profile Picture"
              width="400"
            />
          </div>
        </div>
        <div className="about-half about-info">
          <div className="about-half-info">
            <p className="about-half-title">My Favorite Superhero</p>
            <p className="about-half-text">Batman.....duhh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuAbout;
