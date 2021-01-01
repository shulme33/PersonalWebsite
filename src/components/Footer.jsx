import React from "react";
import "../css/css-global/structure.css";
import "../css/css-global/footer.css";

/*

    Footer bar that stretches across the bottom of website 

*/

function Footer() {
  return (
    <div className="mp mp-fit mp-color-5">
      <div className="imp ftr-imp">
        <div className="ftr-section ftr-social ftr-logo"></div>
        <div className="ftr-section ftr-social">
          <p className="ftr-title">Follow me on social media!</p>
          <ul className="ftr-social-list">
            <a href="https://www.linkedin.com/in/samuelhulme">
              <li className="ftr-social-item ftr-linkedin"></li>
            </a>
            <a href="https://www.instagram.com/shulme33/">
              <li className="ftr-social-item ftr-instagram"></li>
            </a>
            <a href="https://www.facebook.com/sam.hulme.7/">
              <li className="ftr-social-item ftr-facebook"></li>
            </a>
            <a href="https://github.com/shulme33">
              <li className="ftr-social-item ftr-github"></li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
