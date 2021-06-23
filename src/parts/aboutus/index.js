import React from "react";
//import axios from "axios";
import "./index.scss";
import Menu from "../../components/menu";
import Logo from "../../components/logoaloneizq";

const AboutUsPart = () => {
  return (
    <div className="aboutuspart-container">
      <div className="container text-container">
        <div className="row p-0 m-0">
          <div className="col-12">
            <span className="title">ABOUT US</span>
            <div className="default-text mt-5 about-us-text">
              Putting a championship team together is not easy. You not only
              need the right players, <br />
              you also need to have them in the right positions to achieve
              success on the court.
            </div>
          </div>
        </div>
        <div className="arrow-aboutus">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
          </svg>
        </div>
      </div>
      <Menu />
      <Logo />
    </div>
  );
};

export default AboutUsPart;
