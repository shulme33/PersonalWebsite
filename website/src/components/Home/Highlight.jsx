// Components
import React from "react";
import Button from "react-bootstrap/Button";

// CSS Scripts
import "../../css/css-global/structure.css";
import "../../css/css-global/bootstrap-overrides.css";
import "../../css/home-page/home-page.css";
import "../../css/home-page/highlight.css";
import "bootstrap/dist/css/bootstrap.min.css";

/*

    The welcome section on the Home Page just below the Banner image

*/

function WelcomeHighlight({
  title,
  description,
  buttonText,
  picture,
  mobileBorderClass,
}) {
  return (
    <div className={"high-item " + mobileBorderClass}>
      <div className={"high-picture mp-color-1 " + picture}></div>
      <h5 className="high-title mp-txt-color-5">{title}</h5>
      <p className="high-txt mp-txt-color-4">{description}</p>
      <Button variant="outline-dark" className="ovrd-btn-clear high-btn">
        {buttonText}
      </Button>
    </div>
  );
}

export default WelcomeHighlight;
