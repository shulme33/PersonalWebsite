import React from "react";
import Highlight from "./Highlight.jsx";
import "../../css/css-global/structure.css";
import "../../css/home-page/home-page.css";
import "../../css/home-page/highlight.css";
import "bootstrap/dist/css/bootstrap.min.css";

/*

    The welcome section on the Home Page just below the Banner image

*/

function HighlightSection() {
  return (
    <div className="mp mp-fit mp-color-2">
      <div className="imp imp-flex high-imp">
        <div className="highlights-group">
          <Highlight
            title="Resume"
            description="Take a look at my technical skills, work history, and education."
            buttonText="Take a Look"
            picture="resume-pic"
            mobileBorderClass="high-btm-border"
          />
          <Highlight
            title="Projects"
            description="Explore my project history and GitHub repositories."
            buttonText="Explore"
            picture="projects-pic"
            mobileBorderClass="high-btm-border"
          />
          <Highlight
            title="About Me"
            description="Take a look at my background and interests."
            buttonText="Say Hi"
            picture="about-me-pic"
          />
        </div>
      </div>
    </div>
  );
}

export default HighlightSection;
