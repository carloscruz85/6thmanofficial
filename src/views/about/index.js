import React, { useEffect } from "react";
import AboutUsPart from "../../parts/aboutus/";
import History from "../../parts/history/";
import AboutUsTeam from "../../parts/about-us-team";
// import Contact from '../../parts/contact/'
import Footer from "../../parts/footer/";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AboutUsPart />
      <History />
      <AboutUsTeam />
      <div className="py-5"></div>
      {/* <Contact /> */}
      <Footer show={true} />
    </div>
  );
};

export default AboutUs;
