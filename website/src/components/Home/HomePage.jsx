import React from "react";
import Banner from "./Banner.jsx";
import Welcome from "./Welcome.jsx";
import HighlightSection from "./HighlightSection.jsx";
import ProjectsSection from "./ProjectsSection.jsx";
import WorkExSection from "./WorkExSection.jsx";
import SkillsSection from "./SkillsSection.jsx";
import "../../css/css-global/structure.css";
import "../../css/home-page/home-page.css";

/*

    The home page of samhulme.com

*/

function HomePage() {
  return (
    <div className="home-page">
      <Banner />
      <Welcome />
      <HighlightSection />
      <WorkExSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}

export default HomePage;
