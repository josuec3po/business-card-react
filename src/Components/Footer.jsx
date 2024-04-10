import React from "react";
import "./style.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <footer className="footer-wrapper">
      <a href="https://twitter.com/" target="_blank">
        <FaSquareXTwitter size={20} color="white" />
      </a>
      <a href="https://www.instagram.com/" target="_blank">
        <BsInstagram size={20} color="white" />
      </a>
      <a href="https://www.facebook.com/" target="_blank">
        <AiFillFacebook size={20} color="white" />
      </a>
      <a href="https://github.com/josuec3po" target="_blank">
        <AiFillGithub size={20} color="white" />
      </a>
    </footer>
  );
}

export default Footer;
