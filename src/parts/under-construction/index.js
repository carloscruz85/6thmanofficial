import React from 'react'
import './index.scss'
// import Cel from '../../assets/images/cel-frame.png'
// import Menu from '../../components/menu'
// import Logo from '../../components/logoaloneizq'
import Warning from '../../assets/images/warning.png'
import { Link } from 'react-router-dom'

const OurWork1 = () => {
  return (
    <div className="underconstruction-container">
      <div className="container text-container">
        <div className="row p-0 m-0">
          <div className="col-12">
            <img src={Warning} alt="Wait" className="warning item" />
            <div className="up-text item">
              <b>COMING SOON,</b> Stay tuned!
            </div>
            <div className="down-text item">
              We are working very hards to have the website up and running as
              soon as possible. <br /> Thank you for your patience and visit us
              again soon!
            </div>
          </div>
        </div>
      </div>
      <div className="return">
        <Link to="/">
          RETURN TO HOME PAGE{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default OurWork1
