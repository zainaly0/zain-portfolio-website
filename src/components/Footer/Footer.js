import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Syed Zain Aly</h1>

        <ul className="footer__list">
          <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#footer" className="footer__link">
              Footer
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://github.com/zainaly0"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="uil uil-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/zainaly/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="uil uil-linkedin"></i>
          </a>
          <a
            href="https://www.youtube.com/@zainaly_"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-youtube"></i>
          </a>
        </div>

        <span className="footer__copy">
           Copyright &#169; 2023 SyedZainAly.com
        </span>
      </div>
    </footer>
  );
};

export default Footer;
