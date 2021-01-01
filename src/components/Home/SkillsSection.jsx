import React, { Component } from "react";
import SectionTitle from "../SectionTitle.jsx";
import SingleSkill from "./SingleSkill.jsx";
import "../../css/home-page/skills-section.css";

/*
    Skills section on the home screen
*/

class SkillsSection extends Component {
  constructor() {
    super();
    this.state = { skills: [] };
  }

  componentDidMount() {
    console.log("SkillsSection Component Mounted!");
    fetch("/api/skills")
      .then((res) => res.json())
      .then((incomingSkills) =>
        this.setState({ skills: incomingSkills }, () =>
          console.log("Skills fetched...", this.state.skills)
        )
      );
  }

  showSkills() {
    var skills = this.state.skills;
    if (skills === undefined) {
      return [];
    }
    var skillsToPrint = [];
    var dividerAdded = false;
    for (var i = 0; i < skills.length; i++) {
      if (!dividerAdded && skills[i].section === 2) {
        skillsToPrint.push(<div className="skills-divider" key={1000}></div>);
        dividerAdded = true;
      }
      var tempSkill = (
        <SingleSkill
          key={skills[i].id}
          skillName={skills[i].skillName}
          skillLevel={skills[i].skillLevel}
        />
      );
      skillsToPrint.push(tempSkill);
    }
    return skillsToPrint;
  }

  render() {
    return (
      <div className="mp mp-fit mp-color-5" id="id-skills-section">
        <div className="imp imp-flex high-imp mp-txt-color-2 skills-container">
          <SectionTitle
            mainTitle="Yeah, I've Got Skills"
            subTitle="Technical Skill Set"
          />
          {this.showSkills()}
        </div>
      </div>
    );
  }
}

export default SkillsSection;

/*

<SingleSkill key={1} skillName="HTML 5" skillLevel={3.5} />
          <SingleSkill key={2} skillName="CSS 3" skillLevel={3.5} />
          <SingleSkill key={3} skillName="JavaScript" skillLevel={3} />
          <SingleSkill key={4} skillName="React" skillLevel={3} />
          <SingleSkill key={5} skillName="Node.js" skillLevel={2} />
          <SingleSkill key={6} skillName="Python" skillLevel={4} />
          <SingleSkill key={7} skillName="Java" skillLevel={4} />
          <SingleSkill key={8} skillName="VB.NET" skillLevel={4} />
          <SingleSkill key={9} skillName="C Programming" skillLevel={3} />
          <SingleSkill key={10} skillName="SQL" skillLevel={3} />
          <div className="skills-divider"></div>
          <SingleSkill key={11} skillName="Git/GitHub" skillLevel={3.5} />
          <SingleSkill key={12} skillName="VS Code" skillLevel={4} />
          <SingleSkill key={13} skillName="Visual Studio" skillLevel={4} />
          <SingleSkill key={14} skillName="SSMS" skillLevel={3} />
          <SingleSkill key={15} skillName="Microsoft Office" skillLevel={5} />
          <SingleSkill key={16} skillName="XAMPP" skillLevel={2.5} />
          <SingleSkill key={17} skillName="Figma" skillLevel={2.5} />
          <SingleSkill key={18} skillName="ES6: Skyrim" skillLevel={5} />

  */
