import React from "react";
import "../../css/home-page/banner.css";
import "../../App.css";

const Hm_Banner = ({ showContactForm }) => {
  React.useEffect(() => {
    console.log("Banner: " + typeof showContactForm);
  }, [showContactForm]);

  const determineBannerElement = () => {
    if (!showContactForm) {
      return <h1 className="banner-title">SAM HULME</h1>;
    } else {
      return (
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
      );
    }
  };

  return <div className="banner">{determineBannerElement()}</div>;
};

export default Hm_Banner;
