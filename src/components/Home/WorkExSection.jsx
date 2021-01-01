import React from "react";
import Job from "./Job.jsx";
import SectionTitle from "../SectionTitle.jsx";
import "../../css/home-page/work-experience.css";

/*
    Work experience section on the home page
*/

function WorkExSection() {
  return (
    <div className="mp mp-fit mp-color-2" id="id-work-section">
      <div className="imp imp-flex work-imp">
        <SectionTitle
          key="fuck-me"
          mainTitle="The Long and Winding Road..."
          subTitle="Work Experience and History"
        />
        <Job
          key={"fast"}
          jobIsLast={false}
          jobPicture=" job-fast-llc"
          jobCompany="Fast Enterprises, LLC"
          jobTitle={"Implementation Consultant"}
          jobTime="June 2018 - Present"
          jobLocation="New Mexico & Montana"
          jobDescription={[
            "In New Mexico, I was the lead developer on the MVD's online customer portal. The highlight of my time there was the complete re-design of the vehicle registrations process which helped to streamline the task for over 35,000 MVD customers.",
            <br key="br-1"></br>,
            <br key="br-2"></br>,
            "Now in Montana, my attention has been focused on interfaces with the Montana Department of Revenue. I have overseen the conversion of our older FTP/Interface system to an updated/modern design.",
          ]}
        />
        <Job
          key={"msu-3"}
          jobIsLast={false}
          jobPicture=" job-msu-1"
          jobCompany="MSU Bozeman College of Engineering"
          jobTitle={"Research Assistant / Web Developer"}
          jobTime="May 2016 - June 2018"
          jobLocation="Bozeman, Montana"
          jobDescription="As lead developer of the project, I helped design and implement an interactive, web-based homework system that is currently used by electrical engineering students at MSU. The system includes a virtual breadboard that allows students to design test circuits and helps improve the understanding of core fundementals without the need of a physical lab space."
        />
        <Job
          key={"msu-2"}
          jobIsLast={true}
          jobPicture=" job-msu-2"
          jobCompany="MSU Bozeman Computer Science Department"
          jobTitle={"Course Assistant"}
          jobTime="August 2016 - May 2018"
          jobLocation="Bozeman, Montana"
          jobDescription="I oversaw lab sessions and instructed students in the principles of HTML, CSS, Java, and C programming in conjuction with course materials. My other duties involved holding out-of-class study sessions and grading student work."
        />
        <Job
          key={"msu-1"}
          jobIsLast={true}
          jobPicture=" job-msu-1"
          jobCompany="Montana State University"
          jobTitle={[
            "B.S. in Computer Science",
            <br key="br-3"></br>,
            "Minor in Electrical Engineering",
          ]}
          jobTime="Earned May 2018"
          jobLocation="Bozeman, Montana"
          jobDescription={[
            "My time at MSU opened my eyes to an entire world of experiences that I had not been able to have growing up. I explored a multitude of tech disciplines and fell in love with the software engineer life. The faculty was excellent and fostered a love of learned in growing that has stayed with me since graduation. ",
            <br key="br-4"></br>,
            <br key="br-5"></br>,
            "Attending MSU gave me the start that I needed and was one of the best decisions I have ever made for myself.",
          ]}
        />
      </div>
    </div>
  );
}

export default WorkExSection;
