import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutus" component={About} />
        <Route exact path="/marketingassets" component={MarketingAssets} />
        <Route exact path="/ourwork" component={OurWork} />
        <Route exact path="/webdevelopment" component={WebDev} />
        <Route exact path="/motiongraphics" component={MotionGraphics} />
        <Route exact path="/uiuxdesign" component={Ui} />
        <Route exact path="/branddevelopment" component={BrandDev} />
        <Route exact path="/contact" component={ContactView} />
        <Route exact path="/appdev" component={AppDev} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/underconstruction" component={UnderConstruction} />
      </Switch>
    </Router>
  );
}

export default App;
