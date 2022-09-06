import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/home";
import About from "./views/about";
import MarketingAssets from "./views/marketing-assets";
import OurWork from "./views/our-work";
import WebDev from "./views/web-development";
import MotionGraphics from "./views/motion-graphics";
import Ui from "./views/ui";
import BrandDev from "./views/brand-dev";
import ContactView from "./views/contact";
import AppDev from "./views/app-dev";
import Services from "./views/services";
import UnderConstruction from "./views/under-construction";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aboutus" element={<About />} />
        <Route exact path="/marketingassets" element={<MarketingAssets />} />
        <Route exact path="/ourwork" element={<OurWork />} />
        <Route exact path="/webdevelopment" element={<WebDev />} />
        <Route exact path="/motiongraphics" element={<MotionGraphics />} />
        <Route exact path="/uiuxdesign" element={<Ui />} />
        <Route exact path="/branddevelopment" element={<BrandDev />} />
        <Route exact path="/contact" element={<ContactView />} />
        <Route exact path="/appdev" element={<AppDev />} />
        <Route exact path="/services" element={<Services />} />
        <Route
          exact
          path="/underconstruction"
          element={<UnderConstruction />}
        />
      </Routes>
    </Router>
  );
}

export default App;
