import React from "react";
import Logo1 from "./image.png";
import { BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import "./style.css";
import Footer from "./Footer";

function Info() {
  return (
    <div className="sub-wrapper">
      <main className="main-wrapper">
        <img src={Logo1} width="350px" />
        <div className="name-role">
          <h1>Josué Franco</h1>
          <p>Frontend Developer</p>
          <h5>joshtk.website</h5>
        </div>

        <div className="button-wrapper">
          <a
            className="button-style"
            href="mailto:josuefbraga@outlook.com"
            target="_blank"
          >
            <button className="mail-but">
              <GrMail className="icon" />
              Email
            </button>
          </a>

          <a
            className="button-style"
            href="https://ie.linkedin.com/"
            target="_blank"
          >
            <button className="linkedin-but">
              <BsLinkedin className="icon" />
              LinkedIn
            </button>
          </a>
        </div>

        <div className="about-interest">
          <div className="about-div">
            <h2>About</h2>
            <p>
              I have more than 3 years of production experience and strong
              knowledge of JavaScript, HTML/CSS, ReactJS and related
              technologies. I am able to create new functionality and support
              and extend existing ones. I work without supervision and can
              support less experienced colleagues.
            </p>
          </div>
          <div className="interest-div">
            <h2>Interests</h2>
            <p>
              Have artistic interests. They like work activities that deal with
              artistic forms, designs, and patterns. They prefer work which
              allows for self expression.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default Info;
