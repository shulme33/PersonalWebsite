import React from "react";
import "../../css/css-global/structure.css";
import "../../css/home-page/banner.css";

/*

    The large banner image at the top of the home page

*/

function Banner() {
  return (
    <div className="mp mp-fit mp-color-2">
      <div className="imp imp-flex ban-imp">
        <div className="ban ban-img"></div>
        <div className="ban ban-img-txt">
          <h1 className="mp-txt-color-5">Samuel Hulme</h1>
          <h4 className="mp-txt-color-3">Software Developer</h4>
          <h4 className="mp-txt-color-3">Helena, MT</h4>
        </div>
      </div>
    </div>
  );
}

export default Banner;
