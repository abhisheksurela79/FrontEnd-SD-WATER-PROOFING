import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import "./css/navbar.css";
import Logo from "./Logo";


function Navbar(props) {
  const location = useLocation();

  const singlePageScrollLinks = () => {
    return (
      <>
        <li className="nav-item">
          <HashLink
            to="/#home"
            className={`nav-link ${
              location.pathname === "/" && location.hash === "#home"
                ? "active"
                : ""
            }`}
          >
            Home
          </HashLink>
        </li>
        <li className="nav-item">
          <HashLink
            to="/#about"
            className={`nav-link ${
              location.pathname === "/" && location.hash === "#about"
                ? "active"
                : ""
            }`}
          >
            About
          </HashLink>
        </li>
      </>
    );
  };

  return (
    <div
      style={{
        position: "sticky",
        top: "-2px",
        backgroundColor: "#2c2c2c",
        zIndex: "2",
      }}
      id="nav-page"
    >
      <div className="d-flex justify-content-between list-unstyled top-nav">
        <li>+91 9205213241</li>
        <li>abhisheksurela18@gmail.com</li>
      </div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary custom-nav"
        style={{ borderRadius: "45px 0 0 0" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <Logo />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {singlePageScrollLinks()}
              <li className="nav-item">
                <Link 
                className={`nav-link ${location.pathname === '/services'? 'active' : ''}`} to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/portfolio'? 'active' : ''}`} to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/contact'? 'active' : ''}`}  to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/developer'? 'active' : ''}`}  to="/developer">
                  Developer
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
