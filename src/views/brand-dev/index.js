import React, { useEffect } from "react";
import "./index.scss";
// import Contact from '../../parts/contact/'
import Footer from "../../parts/footer/";
import BrandDev1 from "../../parts/brand-dev-1";

const MotionGraphics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <BrandDev1 />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default MotionGraphics;
