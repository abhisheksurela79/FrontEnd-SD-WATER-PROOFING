import React from "react";
import "./css/footer.css";
import Logo from "./Logo";
import SocialMediaIcons from "./SocialMediaIcons";

function Footer() {
  return (
    <footer className="d-flex flex-wrap footer-container">
      <div className="footer-content">
        <Logo />

        <SocialMediaIcons />
      </div>

      <div className="d-flex gap-3 footer-section-2">
        <div>
          <h5 className="footer-heading mb-4">CORPORATE OFFICE:</h5>
          <p className="footer-paragraph">
            Metro Pillar: 123 Dwarka Mor, New Delhi - 110059
          </p>
          <div className="mt-3">
            <p className="footer-paragraph">+91 9205213241</p>
            <p className="footer-paragraph">abhisheksurela18@gmail.com</p>
          </div>
        </div>

        <div className="vertical-line"></div>

        <div>
          <h5 className="footer-heading  mb-4">POLICIES</h5>
          <p className="footer-paragraph">Warranty</p>
          <p className="footer-paragraph">Customer Policy</p>
          <p className="footer-paragraph">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

//
