import React from "react";
import WelcomeHighlight from "./WelcomeHighlight.jsx";
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
          <h3 className="hm-section-hdr mp-txt-color-2">Welcome!</h3>
          <span className="hm-section-txt mp-txt-color-2">
            Lorem ipsum dolor sit amet, nec alienum cotidieque ex. Sit no possit
            expetendis, mei ne iudico homero gubergren. Possim iisque conceptam
            cu eum. Et pri vivendo lobortis, dolorum contentiones vim et. Pri ea
            aliquid intellegebat, et stet argumentum omittantur per. Et numquam
            bonorum ius.
          </span>
        </div>
        <div className="wel wel-highlights">
          <WelcomeHighlight
            title="Resume"
            description="Take a look at my technical skills, work history, and education."
            buttonText="Take a Look"
            picture="resume-pic"
          />
          <WelcomeHighlight
            title="Projects"
            description="Explore my project history and GitHub repositories."
            buttonText="Explore"
            picture="projects-pic"
          />
          <WelcomeHighlight
            title="About Me"
            description="Take a looksie at my background and interests."
            buttonText="Say Hi"
            picture="about-me-pic"
          />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
