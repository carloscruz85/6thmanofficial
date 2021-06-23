import React, { useEffect } from "react";
import "./index.scss";
import UnderConstruction1 from "../../parts/under-construction/";
// import Footer from '../../parts/footer/'
// import Menu from '../../components/menu'
import Logo from "../../components/logoaloneizq";
const WebDev = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Logo />

      <UnderConstruction1 />
    </div>
  );
};

export default WebDev;
