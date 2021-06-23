import React from "react";
import "./index.scss";
import Menu from "../../components/menu";
import Logo from "../../components/logoaloneizq";
import MinimalMenu from "../../parts/minimal-menu"
import BrandImg1 from "../../assets/images/brand1.png";
import BrandImg1Mobile from "../../assets/images/brand1-mobile.png";
import BrandImg2 from "../../assets/images/brand2.jpg";

const BrandDev = () => {
  return (
    <div className="brand-dev-container ">
      <div className="master-brand-dev-container">
        {/* intro text */}
        <div className="container">
          <div className="row">
            <div className="col-12 title-default-container">
              <span className="title-default">Brand Development</span>
              <div className="intro-default">
                The very core of your business, your brand represents more than
                what you do… <br />
                it says why you do it. 6th Man will help you tell your brand’s
                story through innovative <br />
                and creative design solutions that will generate value, trust
                and recognition.
              </div>
            </div>
          </div>
        </div>
        {/* content */}
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="bi-m brown-color">
                Red Fork
              </div>
              <img src={BrandImg1} alt="Brand" className="brand-img bi-pc" />
              <img src={BrandImg1Mobile} alt="Brand" className="brand-img bi-m" />
            </div>
            <div className="col-12 col-md-6">
            <div className="bi-m brown-color ">
                Valdez Law Firm
              </div>
              <img src={BrandImg2} alt="Brand" className="brand-img" />
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

export default BrandDev;
