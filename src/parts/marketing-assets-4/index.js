import React from "react";
import "./index.scss";
// import Pc from "../../assets/images/pc-frame-2.png";
import M1 from "../../assets/images/merch1.jpg";
import M2 from "../../assets/images/merch2.jpg";
import M3 from "../../assets/images/merch3.jpg";
import M4 from "../../assets/images/merch4.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const MarketingAssets4 = () => {
  return (
    <div className="marketing-assets-4-container">
      <div className="d-flex flex-column-reverse flex-lg-row-reverse content-container">
        <div className="text">
          <div className="text-container">
            <div className="inner-title">PACKAGING & MERCHANDISING</div>{" "}
            <div className="default-text">
              Your package is your product’s first physical interaction with
              your customer. It needs to be a representation of your brand’s
              quality.<br /><br /> Merchandise is great way to promote your brand. Quality
              merchandise creates brand recognition and can even generate
              revenue.<br /><br /> Let’s create some great designs to tell your brand’s
              story.
            </div>
          </div>
        </div>
        <div className="pc-merch">
          <Carousel>
            <div>
              <img src={M4} alt="Merch" />
            </div>
            <div>
              <img src={M1} alt="Merch" />
            </div>
            <div>
              <img src={M2} alt="Merch" />
            </div>
            <div>
              <img src={M3} alt="Merch" />
            </div>
          </Carousel>

          {/* <img src={Pc} alt="pc" className="pc-frame-merch" /> */}
          {/* <div className="slider-container-merch">
            <img src={M4} alt="Merch" className="slider-merch" />
            <img src={M1} alt="Merch" className="slider-merch" />
            <img src={M2} alt="Merch" className="slider-merch" />
            <img src={M3} alt="Merch" className="slider-merch" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MarketingAssets4;
