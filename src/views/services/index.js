import React, { useEffect } from "react";
import "./index.scss";
import Positions from "../../parts/positions/";
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
      <Positions />
      <Footer />
    </div>
  );
};

export default WebDev;
