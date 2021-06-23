import React, { useEffect } from "react";
import Hero from "../../parts/hero-home/";
import Intro from "../../parts/intro/";
import Positions from "../../parts/positions/";
import Clients from "../../parts/clients/";
import Contact from "../../parts/contact-simple/";
import Footer from "../../parts/footer/";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <Intro />
      <Positions />
      <Clients />
      <Contact />
      <Footer show={true} />
    </div>
  );
};

export default App;
