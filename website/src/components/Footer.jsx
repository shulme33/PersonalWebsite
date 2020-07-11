import React from "react";
import "../css/css-global/structure.css";
import "../css/css-global/footer.css";
import "../css/css-global/animations.css";

/*

    Navigation bar that stretches across the top of website 

*/

function Footer() {
  return (
    <div className="mp mp-tiny mp-color-5">
      <div className="imp foot-imp">
        <a href="https://www.instagram.com/shulme33/">
          <div className="foot-social-icon icon-insta anim-upscale"></div>
        </a>
        <a href="https://www.facebook.com/sam.hulme.7">
          <div className="foot-social-icon icon-fb anim-upscale"></div>
        </a>
        <a href="https://github.com/shulme33">
          <div className="foot-social-icon icon-git anim-upscale"></div>
        </a>
      </div>
    </div>
  );
}

export default Footer;
