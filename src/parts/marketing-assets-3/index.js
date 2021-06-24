import React from "react";
import "./index.scss";
import Pc from "../../assets/images/Devices-Desktop.png";
import Info from "../../assets/images/infographic.jpg";
import Cel from "../../assets/images/cel-animation.png";

import TopPc from "../../assets/images/top-desktop-pc.png"
import BottomPc from "../../assets/images/bottom-desktop-pc.png"
import TopBrowser from "../../assets/images/top-browser.png"

const MarketingAssets3 = () => {
  return (
    <div className="marketing-assets-3-container ">
      <div className="d-flex flex-column flex-lg-row-reverse content-container-a3">
        <div className="pc-a3">
  
          
          <div className="desktop-slide-vertical">
              <img src={TopPc} alt="pc" />
              <div className="pc-frame-vertical">
                <img src={TopBrowser} alt="browser" />
                <div className="slide-vertical">
                  <img src={Info} alt="Info" className="innerimage-a3" />
                </div>
              </div>
              <img src={BottomPc} alt="pc" />
            </div>

            <img src={Cel} alt="cel" className="rotate-cel-in-vertical" />
          
        </div>
        <div className="text-a3">
          <div className="text-container-a3">
            <div className="inner-title">INFOGRAPHICS</div>{" "}
            <div className="default-text ma-3-special-footer">
              Combining written explanations and appealing visual elements in an
              organized fashion, infographics are a great way to explain
              concepts, simplify procedures, and creating a better understanding
              of your brand’s message.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingAssets3;
