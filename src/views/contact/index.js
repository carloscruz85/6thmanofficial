import React, { useEffect } from "react";
import "./index.scss";
import Contact from "../../parts/contact/";
import Footer from "../../parts/footer/";
import Menu from "../../components/menu";
import Logo from "../../components/logoaloneizq";

const WebDev = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Logo />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
};

export default WebDev;
