import React, { useEffect } from "react";
import "./index.scss";
// import Contact from '../../parts/contact/'
import Footer from "../../parts/footer/";
import MotionGraphics1 from "../../parts/motion-graphics-1";

const MotionGraphics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="web-dev-master-container">
      <MotionGraphics1 />
      {/* <div className="p-4"></div> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default MotionGraphics;
