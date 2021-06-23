import React, { useState } from "react";
import "./index.scss";
import Menu from "../../components/menu";
import Logo from "../../components/logoaloneizq";
import MinimalLogo from "../../parts/minimal-menu"
import Cels from "../../assets/images/uiaux-full.png";
import MiniCel from "../../assets/images/cel-ui.png"
// import CelFrame from '../../assets/images/cel-frame.png'

const MotionGraphics = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="ui-container pb-4">
      {show === true ? (
        <div className="video-cta-container">
          <div
            className="close"
            onClick={() => {
              setShow(false);
            }}
          >
            X
          </div>
          <video autoPlay controls muted className="ui-video">
            <source src="https://6thman.us/media/ui.mp4" type="video/mp4" />
          </video>
        </div>
      ) : null}

      <div className="master-ui-container">
        {/* intro text */}
        <div className="container ui-master-container">
          <div className="row">
            <div className="col-12 title-default-container">
              <span className="title-default">UI / UX DESIGN</span>
            </div>
          </div>
        </div>
        {/* animation */}
        <div className="ui-animation-container">
          <div className="ui-inner-container">
            <div className="ui-text">
              <div className="ui-text-container default-text text-left">
                If you are considering building an App, quality UI/UX is
                essential to create confidence and trust in your services, and
                your brand. <br />
                <br />
                With an “End User” mind set, we’ll design an easy to use app
                with intuitive interaction that is also visually pleasing,
                therefore creating comfort and satisfaction for your users.
                <span
                  className="cta-button center-center mt-4 cta-mg"
                  onClick={() => {
                    setShow(true);
                  }}
                >
                  WATCH VIDEO
                </span>
              </div>
            </div>
            <div className="ui-animation">
              <img alt="img" src={Cels} />
              {/* <video autoPlay muted loop className="ui-video">
                <source
                  src="https://6thman.us/media/UI_UX-Vid.mp4"
                  type="video/mp4"
                />
              </video> */}
            </div>
          </div>
        </div>
        {/* animation mobile */}
        <div className="ui-animation-mobile-container">
          <div className="ui-animation-mobile-inner">
            If you are considering building an App, quality UI/UX is essential
            to create confidence and trust in your services, and your brand.{" "}
            </div>
            <img src={MiniCel} alt="cel" class="minicel" onClick={() => {
                    setShow(true);
                  }}/>
            <div className="ui-animation-mobile-inner">
            With an “End User” mind set, we’ll design an easy to use app with
            intuitive interaction that is also visually pleasing, therefore
            creating comfort and satisfaction for your users.
            <span
              className="cta-button center-center mt-4"
              onClick={() => {
                setShow(true);
              }}
            >
              WATCH VIDEO
            </span>
          </div>
        </div>
      </div>
      <MinimalLogo />
      <Menu auxclass="just-pc-block"/>
      <Logo auxclass="just-pc-block"/>
    </div>
  );
};

export default MotionGraphics;
