import React from "react";
import SectionTitle from "../SectionTitle.jsx";
import SingleSkill from "./SingleSkill.jsx";
import "../../css/home-page/skills-section.css";

function SkillsSection() {
  return (
    <div className="mp mp-fit mp-color-5">
      <div className="imp imp-flex high-imp mp-txt-color-2 skills-container">
        <SectionTitle
          mainTitle="Yeah, I've Got Skills"
          subTitle="Technical Skill Set"
        />
        <SingleSkill skillName="HTML 5" skillLevel={4} />
        <SingleSkill skillName="CSS 3" skillLevel={2} />
        <SingleSkill skillName="JavaScript" skillLevel={3} />
        <SingleSkill skillName="Python" skillLevel={5} />
        <SingleSkill skillName="Java" skillLevel={1} />
        <SingleSkill skillName="React" skillLevel={0} />
      </div>
    </div>
  );
}

export default SkillsSection;
