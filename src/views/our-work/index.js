import React, { useEffect } from "react";
import OurWork1 from "../../parts/our-work-1/";
import OurWork2 from "../../parts/our-work-2/";
import "./index.scss";
// import Contact from '../../parts/contact/'
import Footer from "../../parts/footer/";

const OurWork = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <OurWork1 />
      <OurWork2 />
      {/* <Contact /> */}
      <Footer show={true} />
    </div>
  );
};

export default OurWork;
