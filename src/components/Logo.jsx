import React from 'react'
import SiteLogo from "../static/site-logo.svg";
import './css/logo.css'


function Logo() {
  return (
    <img className="site-logo" src={SiteLogo} alt="site logo" draggable="false"/>
  )
}

export default Logo