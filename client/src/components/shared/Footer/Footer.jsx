import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faCopyright} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => (
  <div className="page-footer">
    <footer className="footer-container">
      <a href="https://github.com/zac-olds/habaneros-marketplace">
        <FontAwesomeIcon icon={faGithub} id="github" />
      </a>
      <p>
        <FontAwesomeIcon icon={faCopyright} id="copyright" /> 2020 Zac Olds |
        Daysired De Jesus | Jeff Bond
      </p>
    </footer>
  </div>
);

export default Footer;
