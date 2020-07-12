import React from "react";
import "../../css/css-global/structure.css";
import "../../css/css-global/bootstrap-overrides.css";
import "../../css/home-page/home-page.css";
import "../../css/home-page/welcome.css";
import Button from "react-bootstrap/Button";
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
    <div className={"wel-highlight-item " + mobileBorderClass}>
      <div className={"wel-highlight-picture mp-color-1 " + picture}></div>
      <h5 className="wel-highlight-title mp-txt-color-2">{title}</h5>
      <p className="wel-highlight-txt mp-txt-color-5">{description}</p>
      <Button
        variant="outline-dark"
        className="ovrd-btn-clear wel-highlight-btn"
      >
        {buttonText}
      </Button>
    </div>
  );
}

export default WelcomeHighlight;
