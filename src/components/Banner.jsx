import React from "../../node_modules/react";
import "../css/banner.css";
import "../App.css";

const Banner = () => {
  return (
    <div className="banner">
      {/*<h1 className="banner-title">SAM HULME</h1>*/}
      <div className="contact-area">
        <p className="contact-title">Contact Me!</p>
        <form
          className="contact-form"
          action="https://formspree.io/mzbzpgvk"
          method="POST"
        >
          <label className="contact-label">Your email:</label>
          <input className="contact-input" type="text" name="_replyto" />
          <label className="contact-label">Leave me a message:</label>
          <textarea className="contact-text-area" name="message"></textarea>

          <button className="contact-submit-button" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Banner;
