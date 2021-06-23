import React from "react";
import "./index.scss";
// import Cel from '../../assets/images/cel-frame.png'
import Menu from "../../components/menu";
import Logo from "../../components/logoaloneizq";

const OurWork1 = () => {
  return (
    <div className="ourwork-container">
      <div className="container text-container">
        <div className="row p-0 m-0">
          <div className="col-12">
            <span className="title">OUR WORK</span>
            <div className="default-text mt-5 our-work-text">
              We know it’s not enough to tell you how good we play. We need to
              show you.
              <br /> Please browse and examine a sample of some of the creative
              projects we have <br />
              done for previous satisfied clients.
            </div>
          </div>
        </div>
        <div className="arrow-ourwork">
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

export default OurWork1;
