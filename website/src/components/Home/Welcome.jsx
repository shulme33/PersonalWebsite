import React from "react";
import Highlight from "./Highlight.jsx";
import "../../css/css-global/structure.css";
import "../../css/home-page/home-page.css";
import "../../css/home-page/welcome.css";
import Button from "react-bootstrap/Button";
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
          <p className="wel-section-txt mp-txt-color-2">
            This is the first long line of the text that will display here! It
            can honestly be pretty long.
          </p>
          <p className="wel-section-txt mp-txt-color-2">
            There will also be this second shorter line.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
