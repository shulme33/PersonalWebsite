import React from "react";
import "../css/css-global/section-title.css";

function SectionTitle({ mainTitle, subTitle }) {
  return (
    <div className="section-title">
      <h3 className="main-title">{mainTitle}</h3>
      <h6 className="sub-title">{"― " + subTitle + " ―"}</h6>
    </div>
  );
}

export default SectionTitle;
