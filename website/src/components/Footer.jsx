import React from "react";
import "../css/css-global/structure.css";
import "../css/css-global/footer.css";
import "../css/css-global/navbar.css";
import "../css/css-global/animations.css";

/*

    Navigation bar that stretches across the top of website 

*/

function Footer() {
  return (
    <div className="mp mp-fit mp-color-5">
      <div className="imp ftr-imp">
        <div className="ftr-section ftr-social">
          <p className="ftr-title">Follow me on social media!</p>
          <ul className="ftr-social-list">
            <li className="ftr-social-item ftr-linkedin"></li>
            <li className="ftr-social-item ftr-instagram"></li>
            <li className="ftr-social-item ftr-facebook"></li>
            <li className="ftr-social-item ftr-github"></li>
          </ul>
        </div>
        <div className="ftr-section ftr-contact">
          <p className="ftr-title">Contact Me</p>
        </div>
        <div className="ftr-section ftr-rating"></div>
      </div>
    </div>
  );
}

export default Footer;

/*
<a href="https://www.instagram.com/shulme33/">
          <div className="ftr-social-icon icon-insta anim-upscale"></div>
        </a>
        <a href="https://www.facebook.com/sam.hulme.7">
          <div className="ftr-social-icon icon-fb anim-upscale"></div>
        </a>
        <a href="https://github.com/shulme33">
          <div className="ftr-social-icon icon-git anim-upscale"></div>
        </a>

*/
