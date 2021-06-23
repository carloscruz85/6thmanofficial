import React from "react";
import "./index.scss";
import Menu from "../../components/menu";
import Logo from "../../components/logoaloneizq";
import Tv from "../../assets/images/tv-on.png";
import TvNm from "../../assets/images/tv-on-no-margin.jpg";
// import PcFrame from "../../assets/images/pc-frame.png";
import MinimalMenu from "../../parts/minimal-menu"
// import { Link } from "react-router-dom";

const MotionGraphics = () => {
  // const year = new Date().getFullYear();
  // const goTop = () => {
  //   window.scrollTo(0, 0);
  // };

  return (
    <div className="motion-graphics-container ">
      <div className="master-container">
        <div className="container">
          <div className="row">
            <div className="col-12 title-default-container">
              <span className="title-default mg-esp">
                MOTION GRAPHICS / ANIMATION
              </span>
            </div>
          </div>
        </div>

        <div className="animation-master-container">
          <div className="animation-container">
            <div className="text text-left">
              <div>
                <p className="default-text">
                  There’s no better way to display, express, or promote your
                  brand’s message than with a visually stunning animated video.
                  A great alternative and more cost effective than its
                  traditional life filming counterpart.
                </p>
                <div className="no-opa default-text">
                  <ul>
                    <li>Explain complex ideas quickly</li>
                    <li>Visually appealing</li>
                    <li>Easy to upgrade</li>
                    <li>Bring your vision to life</li>
                  </ul>
                </div>
                <p className="default-text">
                  Interested? Please visit our landing page for more information
                </p>

                <div className="main-button-container mt-4">
                  <div className="cta-button">
                    <a href="https://6thman.us/animation/" target="_blank" rel="noopener noreferrer">CLICK HERE</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tv">
              <img src={Tv} alt="tv" className="tv-frame" />
              <video autoPlay controls muted className="video">
                <source
                  src="https://6thman.us/media/MotionGraphics-Reel.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className="animation-master-container-mobile">
        <div className="container">
          <div className="row intro-animation">
            <div className="col-12">
              <span className="title">MOTION GRAPHICS / ANIMATION</span>
            </div>
          </div>
          <div className="row">
            <div className="col-12 p-0">
              <p>
                There’s no better way to display, express, or promote your
                brand’s message than with a visually stunning animated video. A
                great alternative and more cost effective than its traditional
                life filming counterpart.
              </p>
              <div className="mobile-animation-container">
                <img src={TvNm} alt="Pc Frame" />
                <video autoPlay controls muted className="video">
                  <source
                    src="https://6thman.us/media/MotionGraphics-Reel.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="no-opa">
                <ul>
                  <li>Explain complex ideas quickly</li>
                  <li>Visually appealing</li>
                  <li>Easy to upgrade</li>
                  <li>Bring your vision to life</li>
                </ul>
              </div>
              <p>
                Interested? <br /> Please visit our landing page <br />for more information
              </p>

              <div className="main-button-container mg-mobile-button">
                <div className="main-button">
                <a href="https://6thman.us/animation/" target="_blank" rel="noopener noreferrer">CLICK HERE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MinimalMenu />
      <Menu auxclass="just-pc-block"/>
      <Logo auxclass="just-pc-block"/>
    </div>
  );
};

export default MotionGraphics;
