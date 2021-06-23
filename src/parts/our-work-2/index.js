import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import Foco from "../../assets/images/foco.png";
import Atom from "../../assets/images/atom.png";
import Pc from "../../assets/images/pc.png";
import Msg from "../../assets/images/msg.png";
import Pluma from "../../assets/images/pluma.png";
// import AppDev from "../../assets/images/cel.png";
import MotionAnimation from "../../assets/images/Square-MotionGraph.jpg";
import RedFork from "../../assets/images/Square-BrandDev.jpg";
import WebDevelopment from "../../assets/images/Square-WebDev.jpg";
import Uix from "../../assets/images/Square-UI_UX.jpg";
import MarketingAssets from "../../assets/images/Square-Marketing.jpg";
// import AppDevImage from "../../assets/images/app-dev-img.png";

const OurWork1 = () => {
  const positionsA = [
    {
      title: "Motion Graphics",
      icon: Atom,
      link: "motiongraphics",
      image: MotionAnimation,
    },
    {
      title: "Brand development",
      icon: Foco,
      link: "branddevelopment",
      image: RedFork,
    },

    {
      title: "Web development",
      icon: Pc,
      link: "webdevelopment",
      image: WebDevelopment,
    },
    {
      title: "UI/UX Design",
      icon: Msg,
      link: "uiuxdesign",
      image: Uix,
    },
    // {
    //   title: "App Development",
    //   icon: AppDev,
    //   link: "appdevelopment",
    //   image: AppDevImage,
    // },
    {
      title: "Marketing assets",
      icon: Pluma,
      link: "marketingassets",
      image: MarketingAssets,
    },
  ];

  return (
    <div className="our-work-2-container">
      <div className="items-container">
        <div className="container-fluid ">
          <div className="row justify-content-center">
            {positionsA.map((d, i) => {
              const titleSpace = d.title.split(" ");
              //console.log(titleSpace);
              return (
                <div key={i} className="col-12 col-md-4 ">
                  <Link to={d.link} className="center-center">
                    <div className="action-container">
                      <div className="background">
                        <img alt="img" src={d.image} className="icon" />
                      </div>
                      <div className="foreground">
                        <img alt="img" src={d.icon} className="icon mb-2" />
                        View Samples
                      </div>
                    </div>
                    <div className="title-container">
                      {titleSpace[0]} {titleSpace[1]}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork1;
