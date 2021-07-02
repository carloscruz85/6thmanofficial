import React from "react";
import "./index.scss";
import Menu from "../../components/menu";
import Logo from "../../components/logoaloneizq";
import MinimalLogo from "../../parts/minimal-menu"
import Pc from "../../assets/images/Devices-Desktop.png";
import Kl1 from "../../assets/images/WebDev-Valdez03.jpg";
import Kl2 from "../../assets/images/WebDev-Valdez02.jpg";
import Valdez from "../../assets/images/WebDev-Valdez01.jpg";

const WebDevelopment1 = () => {
  return (
    <div className="web-development-1-top-container">
      <div className="container wb-master-container">
        <div className="row">
          <div className="col-12 title-default-container">
            <span className="title-default w-d-title just-pc-inline-block">Web Development</span>
            <span className="title-default w-d-title just-mobile-inline-block">Web DEV</span>
            <div className="intro-default w-d-intro">
              The proper development of your brand’s online presence is
              essential in today’s <br />
              fast paced marketing world. Knowledge, execution and performance
              are key for brand trust and recognition.
            </div>
          </div>
        </div>
      </div>
      <div className="web-development-1-1-top-container ">
        <div className="d-flex flex-column-reverse flex-lg-row-reverse content-container">
          <div className="text">
            <div className="text-container">
              <div className="inner-title">WEBSITES</div>{" "}
              <div className="default-text">
                The online representation of your brand needs to be clear,
                on-message, intuitive and good looking. It needs to appeal to
                the end user and make him interact with it. Whether you are
                creating an informative site or an online store, 6th Man
                Creative will design a great looking (and functional) website
                for you.
              </div>
            </div>
          </div>
          <div className="pc">
            <img src={Pc} alt="pc" className="pc-frame-webdev1" />
            <div className="slider-container">
              <img src={Kl1} alt="kl1" className="slider" />
              <img src={Kl2} alt="kl2" className="slider" />
              <img src={Valdez} alt="Valdez" className="slider" />
            </div>
          </div>
        </div>
      </div>
      <MinimalLogo />
      <Menu auxclass="just-pc-block"/>
      <Logo auxclass="just-pc-block"/>
    </div>
  );
};

export default WebDevelopment1;
