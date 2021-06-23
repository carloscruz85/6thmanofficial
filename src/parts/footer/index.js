import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-6thman.png";
// import Fb from "../../assets/images/fb.png";
// import Ins from "../../assets/images/ins.png";
import In from "../../assets/images/in.png";
import Be from "../../assets/images/be.png";
import Pi from "../../assets/images/pi.png";

const Footer = (props) => {
  const year = new Date().getFullYear();

  const items = [
    // { name: 'HOME', link: '/' },
    { name: "About Us", link: "/aboutus" },
    { name: "Our Work", link: "/ourwork" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
  ];
  // const items = [
  //   // { name: 'HOME', link: '/' },
  //   { name: "About Us", link: "/underconstruction" },
  //   { name: "Our Work", link: "/underconstruction" },
  //   { name: "Services", link: "/underconstruction" },
  //   { name: "Contact", link: "/underconstruction" },
  // ];

  const sm = [
    // { name: "facebook", link: "", icon: Fb },
    // { name: "instagram", link: "", icon: Ins },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/rod-perez-67a19672/ ",
      icon: In,
    },
    { name: "behance", link: "https://www.behance.net/RodPerez", icon: Be },
    {
      name: "pinterest",
      link: "https://www.pinterest.com/6thManCreative/",
      icon: Pi,
    },
  ];

  const goTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer-container">
      {props.show === true ? (
        <div className="container">
          <div className="row">
            <div className="col-lg-4 text-center logo-container">
              <img src={Logo} alt="logo" className="logo" />
            </div>
            <div className="col-lg-4 move">
              <ul>
                {items.map((d, i) => {
                  return (
                    <li key={i}>
                      <Link to={d.link}>{d.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-lg-4 move">
              <ul>
                {sm.map((d, i) => {
                  return (
                    <li key={i}>
                      <a href={d.link} target="_blank" rel="noopener noreferrer">
                        <img src={d.icon} alt={d.name} /> {d.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      ) : null}

      <div className="footer">
        <div className="container">
          <div className="row p-1">
            <div className="col-8 col-sm-4 special-footer">
              ©{year} 6th Man Creative. All Rights Reserved. Muffin Group
            </div>
            <div
              className="col-4 col-sm-4 footer-arrow"
              onClick={() => {
                goTop();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
              </svg>
            </div>
            <div className="col-sm-4 text-right center-center cta-contact">
              {/* <Link to="contact">CONTACT US</Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
