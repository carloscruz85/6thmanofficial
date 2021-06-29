import React from "react";
import "./index.scss";
import Pc from "../../assets/images/Devices-Laptop.png";
import Landing from "../../assets/images/WebDev-scroll-LandingPage.jpg";

import TopPc from "../../assets/images/top-laptop.png"
import BottomPc from "../../assets/images/bottom-laptop.png"
import TopBrowser from "../../assets/images/top-browser.png"

const WebDev2 = () => {
  return (
    <div className="web-dev-2-container ">
      <div className="d-flex flex-column flex-lg-row-reverse content-container">
        <div className="pc-wd2">
          <div className="laptop-slide-vertical">
            <img src={TopPc} alt="pc" />
            <div className="laptop-frame-vertical">
              <img src={TopBrowser} alt="browser" className="top-browser"/>
              <div className="slide-vertical">
                <img src={Landing} alt="Info" className="innerimage-a3" />
              </div>
            </div>
            <img src={BottomPc} alt="pc" />
          </div>
        </div>
        <div className="text">
          <div className="text-container">
            <div className="inner-title">LANDING PAGES </div>{" "}
            <div className="default-text">
              With their single goal approach, landing pages are a great way to
              promote a specific message, service, event or product. They
              increase conversion, generate data, grow your email list and
              improve brand awareness.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDev2;
