import React from 'react'
import './index.scss'
import MinLogo from '../../assets/images/logo-6thman-min.png'
import { Link } from "react-router-dom";

const MinimalMenu = () => {
  return (
    <div className="minimal-menu">
      <div>
        <Link to="/ourwork">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
          </svg>
          <span>
          BACK
          </span>
        </Link>
      </div>
      <div>
        <img src={MinLogo} alt="Logo" />
      </div>
      <div></div>
    </div>
  )
}

export default MinimalMenu
