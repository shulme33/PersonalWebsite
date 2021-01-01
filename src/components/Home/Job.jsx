import React from "react";
import "../../css/home-page/job.css";
import "../../css/css-global/structure.css";

/*
    Each individual job or education that I have had
*/

function Job({
  jobIsLast,
  jobPicture,
  jobCompany,
  jobTitle,
  jobTime,
  jobLocation,
  jobDescription,
}) {
  function isLast() {
    return !jobIsLast ? " job-item-not-last" : "";
  }

  return (
    <div className={"job-item " + isLast()}>
      <div className={"job-picture " + jobPicture}></div>
      <div className="job-text">
        <h6 className="job-company">{jobCompany}</h6>
        <p className="job-title mp-txt-color-4">{jobTitle}</p>
        <p className="job-title mp-txt-color-4">{jobTime}</p>
        <p className="job-location">{jobLocation}</p>
        <p className="job-description">{jobDescription}</p>
      </div>
    </div>
  );
}

export default Job;

/*

<div key={1} className={"job-item " + isLast()}>
      <div key={2} className={"job-picture " + jobPicture}></div>
      <div key={3} className="job-text">
        <h6 key={4} className="job-company">
          {jobCompany}
        </h6>
        <p key={5} className="job-title mp-txt-color-4">
          {jobTitle}
        </p>
        <p key={6} className="job-location">
          {jobLocation}
        </p>
        <p key={7} className="job-description">
          {jobDescription}
        </p>
      </div>
    </div>

*/
