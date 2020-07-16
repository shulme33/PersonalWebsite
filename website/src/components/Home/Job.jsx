import React from "react";
import "../../css/home-page/job.css";
import "../../css/css-global/structure.css";

function Job({
  jobPicture,
  jobCompany,
  jobTitle,
  jobLocation,
  jobDescription,
}) {
  return (
    <div className="job-item">
      <div className={"job-picture " + jobPicture}></div>
      <div className="job-text">
        <h6 className="job-company">{jobCompany}</h6>
        <p className="job-title mp-txt-color-4">{jobTitle}</p>
        <p className="job-location">{jobLocation}</p>
        <p className="job-description">{jobDescription}</p>
      </div>
    </div>
  );
}

export default Job;
