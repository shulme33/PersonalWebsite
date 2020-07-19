import React from "react";
import Job from "./Job.jsx";
import SectionTitle from "../SectionTitle.jsx";
import "../../css/home-page/work-experience.css";

function WorkExSection() {
  return (
    <div className="mp mp-fit mp-color-2">
      <div className="imp imp-flex work-imp">
        <SectionTitle
          mainTitle="The Long and Winding Road..."
          subTitle="Work Experience and History"
        />
        <Job
          jobIsLast={false}
          jobPicture=" job-fast-llc"
          jobCompany="Fast Enterprises, LLC"
          jobTitle="Implementation Consultant"
          jobLocation="New Mexico & Montana"
          jobDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          quasi beatae fugit nulla molestiae rerum veniam eos numquam atque
          optio odio maiores aut, minus tempora quia, aperiam perspiciatis
          dolorem vel?"
        />
        <Job
          jobIsLast={false}
          jobPicture=" job-msu-1"
          jobCompany="MSU Bozeman College of Engineering"
          jobTitle="Research Assistant / Web Developer"
          jobLocation="Bozeman, Montana"
          jobDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          quasi beatae fugit nulla molestiae rerum veniam eos numquam atque
          optio odio maiores aut, minus tempora quia, aperiam perspiciatis
          dolorem vel?"
        />
        <Job
          jobIsLast={true}
          jobPicture=" job-msu-2"
          jobCompany="MSU Bozeman Computer Science Department"
          jobTitle="Course Assistant"
          jobLocation="Bozeman, Montana"
          jobDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          quasi beatae fugit nulla molestiae rerum veniam eos numquam atque
          optio odio maiores aut, minus tempora quia, aperiam perspiciatis
          dolorem vel?"
        />
      </div>
    </div>
  );
}

export default WorkExSection;
