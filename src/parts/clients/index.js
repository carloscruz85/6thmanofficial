import React from "react";
import "./index.scss";
import C1 from "../../assets/images/Logos-Klipsch.png";
import C2 from "../../assets/images/Logos-Wpromote.png";
import C3 from "../../assets/images/Logos-BevMo.png";
import C4 from "../../assets/images/Logos-CoteHair.png";
import C5 from "../../assets/images/Logos-Zenni.png";
import C6 from "../../assets/images/Logos-Event360.png";
const Clients = () => {
  return (
    <div className="clients-container py-5">
      <div className="title">TEAMS WE’VE PLAYED FOR</div>
      <div className="subtitle">CLIENTS</div>
      <div className="container">
        <div className="row mb-0">
          {[C1, C2, C3, C4, C5, C6].map((c, i) => {
            let min = "";
            if (i === 0 || i === 2) min = "min";
            return (
              <div key={i} className="col-6 col-md-4">
                <img alt="icon" src={c} className={min} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Clients;
