import React, { useEffect } from "react";
import "./index.scss";
// import Contact from '../../parts/contact/'
import Footer from "../../parts/footer/";
import Ui1 from "../../parts/ui-1";

const MotionGraphics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Ui1 />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default MotionGraphics;
