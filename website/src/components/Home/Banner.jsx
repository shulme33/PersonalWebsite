import React from "react";
import "../../css/css-global/structure.css";
import "../../css/home-page/banner.css";

/*

    The large banner image at the top of the home page

*/

function Banner() {
  return (
    <div className="mp mp-fit mp-color-3">
      <div className="ban-imp">
        <div className="ban-img"></div>
        <div className="ban-img-txt">
          <h1 className="mp-txt-color-2 ban-main-title">
            Samuel <br></br>Hulme
          </h1>
          <p className="mp-txt-color-2">Software Developer</p>
          <p className="mp-txt-color-2">Enjoyer of Cocoa Wheats</p>
          <p className="mp-txt-color-2">Stupid But Not Dumb</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
