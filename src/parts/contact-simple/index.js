import React from "react";
import "./index.scss";

const Clients = () => {



  return (
    <div className="contact-container " id="contact">
      <div className="cc-container">
        <div className="cc-safe">
          <div className="title pt-5">COMING OFF THE BENCH</div>
          <div className="subtitle">CONTACT US</div>
        </div>
      </div>
      <div className="cc-container">
        <div className="cc-safe simple-contact-data">
        Ready for us to come and play for you?
        <br /> Pass us the ball and let us help you achive the vision
        <br />your have for your brand
        <br />
        <div className="intro-button-container">
            <a href="mailto:rod@6thman.us" className="cta-button">Tell us about your project</a>
        </div>
        </div>
    
      </div>
    </div>
  );
};

export default Clients;
