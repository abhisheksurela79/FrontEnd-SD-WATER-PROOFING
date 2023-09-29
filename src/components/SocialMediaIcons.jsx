import React from "react";
import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import "./css/social-media-icons.css";
import { BsFacebook } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";

function SocialMediaIcons() {
  return (
    <div className="d-flex gap-2 mt-4 mb-4 align-items-center social-media-icons-container">
      <BsFacebook className="social-icon" />

      <AiOutlineInstagram className="social-icon" />

      <AiFillYoutube className="social-icon" />

      <BiLogoLinkedin className="social-icon" />

      <AiFillTwitterCircle className="social-icon" />
    </div>
  );
}

export default SocialMediaIcons;
