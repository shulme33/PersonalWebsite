import React from "react";
import "../../css/css-global/structure.css";
import "../../css/home-page/home-page.css";
import "../../css/home-page/welcome.css";
import "bootstrap/dist/css/bootstrap.min.css";

/*

    The welcome section on the Home Page just below the Banner image

*/

function Welcome() {
  return (
    <div className="mp mp-fit mp-color-4">
      <div className="imp imp-flex wel-imp">
        <div className="wel wel-msg">
          <h3 className="wel-section-hdr mp-txt-color-2">Welcome!</h3>
          <p className="wel-section-txt-1 mp-txt-color-2">
            Hello! Its good to see you. My name is Sam Hulme and I am a software
            developer with over 2 years of professional working experience. My
            passion lies in both front-end and back-end web development. I am a
            driven, outgoing, and passionate person who is easy to work with and
            can be relied on to get stuff done. This website contains all of my
            necessary credentials as well as any random personal projects that I
            might be interested in developing.
          </p>
          <p className="wel-section-txt-2 mp-txt-color-2">
            Feel free to take a look around and let me know what you think.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
