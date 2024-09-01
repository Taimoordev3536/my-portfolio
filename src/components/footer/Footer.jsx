import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Taimoor Ali</h1>
        <ul className="footer_list">
          {/* first */}
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          {/* second */}
          <li>
            <a href="#portfolio" className="footer_link">
              Projects
            </a>
          </li>
          {/* second */}
          <li>
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a
            href="https://www.instagram.com/taimoorali3881"
            className="footer_social-link"
            id="insta"
            target="_blank"
          >
            <i class="uil uil-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/taimoor-ali-381662272/"
            className="footer_social-link"
            id="linkdin"
            target="_blank"
          >
            <i class="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://github.com/Taimoordev3536"
            className="footer_social-link"
            id="github"
            target="_blank"
          >
            <i class="uil uil-github-alt"></i>
          </a>
        </div>
        <span className="footer_copy">
        Copyright &#169; 2024 Taimoor Ali. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
