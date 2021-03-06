import React from "react";
import "./index.scss";
import Kl1 from "../../assets/images/Klipsch-Cover.jpg";
import Kl2 from "../../assets/images/Klipsch-image02.jpg";
import Kl3 from "../../assets/images/Klipsch-image01.jpg";
import Kl4 from "../../assets/images/Klipsch-image03.jpg";

import TopPc from "../../assets/images/top-desktop-pc.png"
import BottomPc from "../../assets/images/bottom-desktop-pc.png"
import TopBrowser from "../../assets/images/top-browser.png"

// import Valdez from "../../assets/images/valdezpage.jpg";
const MarketingAssets2 = () => {
  return (
    <div className="marketing-assets-2-container ">
      <div className="d-flex flex-column-reverse flex-lg-row-reverse content-container-a2">
        <div className="text-a2">
          <div className="text-container-a2">
            <div className="inner-title">GOOGLE ADS</div>{" "}
            <div className="default-text">
              A great way to use Google’s massive reach to generate brand
              awareness. With a wide range of targeting and flexibility at any
              budget, they are a great tool to generate traffic and conversions.
            </div>
          </div>
        </div>
        <div className="pc-container-a2">
          <div className="desktop-slide">
            <img src={TopPc} alt="pc" />
            <div className="pc-screen">
              <img src={TopBrowser} alt="browser" />
              <div className="secure-screen">
                <div className="slider-container">
                       <div className="slide">
                  <img src={Kl2} alt="kl2" className="slider-a2" />
                  <img src={Kl1} alt="kl1" className="slider-a2" />
                  <img src={Kl3} alt="kl3" className="slider-a2" />
                  <img src={Kl4} alt="kl4" className="slider-a2" />
                </div>
                </div>
           
              </div>

            </div>
            <img src={BottomPc} alt="pc" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingAssets2;
