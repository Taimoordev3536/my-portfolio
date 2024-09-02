import React, { useState } from "react";
import "./header.css";

const Header = ({ toggleTheme, theme }) => {
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
        
        </a>

        <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            {/* Your existing nav items */}
            <li className="nav_item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav_link active-link" : "nav_link"
                }
              >
                <i className="uil uil-estate nav_icon"></i>Home
              </a>
            </li>
            <li className="nav_item">
              <a href="#about"  onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav_link active-link" : "nav_link"
                }>
                <i className="uil uil-user nav_icon"></i>About
              </a>
            </li>
            <li className="nav_item">
              <a href="#skills"  onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills" ? "nav_link active-link" : "nav_link"
                }>
                <i className="uil uil-file-alt nav_icon"></i>Skills
              </a>
            </li>
            {/* <li className="nav_item">
              <a href="#services"  onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services" ? "nav_link active-link" : "nav_link"
                }>
                <i className="uil uil-briefcase-alt nav_icon"></i>Services
              </a>
            </li> */}
            <li className="nav_item">
              <a href="#portfolio"  onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio" ? "nav_link active-link" : "nav_link"
                }>
                <i className="uil uil-scenery nav_icon"></i>Portfolio
              </a>
            </li>
            <li className="nav_item">
              <a href="#contact"  onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact" ? "nav_link active-link" : "nav_link"
                }>
                <i className="uil uil-message nav_icon"></i>Contact
              </a>
            </li>

          </ul>
          <i className="uil uil-times nav_close" onClick={() => showMenu(!Toggle)}></i>
        </div>

        <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>

        {/* Theme Toggle Button */}
        <button className="theme-toggle"  onClick={toggleTheme}>
          {theme === "light" ? (
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--title-color)" width="24px" height="24px" id="moon"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"></path></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--title-color)" width="24px" height="24px" id="sun"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"></path></svg>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
