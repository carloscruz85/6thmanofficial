import React, { useEffect } from "react";
import MarketingAssetsTop from "../../parts/marketing-assets-top/";
import MarketingAssets2 from "../../parts/marketing-assets-2/";
import MarketingAssets3 from "../../parts/marketing-assets-3/";
import MarketingAssets4 from "../../parts/marketing-assets-4/";
// import Contact from '../../parts/contact/'
import Footer from "../../parts/footer/";
import './index.scss'

const MarketingAssets = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="marketing-assets-ultra-container">
      <MarketingAssetsTop />
      <MarketingAssets2 />
      <MarketingAssets3 />
      <MarketingAssets4 />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default MarketingAssets;
