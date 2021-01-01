import React from "react";
import "../../css/css-global/structure.css";
import "../../css/home-page/banner.css";

/*

    The large banner image at the top of the home page

*/

function Banner() {
  return (
    <div className="mp mp-fit mp-color-3 ban-mp-img">
      <div className="imp imp-flex ban-imp">
        <div className="ban-img-txt">
          <h3 className="mp-txt-color-2">― Hi, I'm ―</h3>
          <h1 className="mp-txt-color-2 ban-main-title">
            SAMMY <br></br>HULME
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;
