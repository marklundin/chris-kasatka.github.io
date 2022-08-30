import React, { useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <ul className="nav" id="navvy">
      <div className="divvy divvy1">
        <li className="nav-item">
          <a href="#top">
            <img
              src="https://lh3.googleusercontent.com/pw/AM-JKLUzpq0sXQMAE8LcdYKochNGwIRCg_ePf6cPBaXAURANs_EckbgG6UBlWkXepbSJhnYiGkM2bwbgGNmlh-ic8EnlH-dJ9rtGSgepfO2R--QLMzydns1HQa14mEHagIPXq5VJrdMrA3jQmQl9w-uowkDV=s824-no?authuser=0"
              alt="EYE"
              className="eye"
            />
          </a>
        </li>
      </div>

      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <i className="bi bi-list"></i>
      </button>

      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <div className="divvy divvy2">
          <li className="nav-item">
            <a className="nav-link nav-links" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-links" href="#about-me">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-links" href="#contact">
              Contact
            </a>
          </li>
        </div>
        <div className="divvy divvy3">
          <li className="nav-item">
            <a
              className="nav-link nav-links nav-icons"
              href="https://github.com/anthonyradose"
            >
              <i className="bi bi-github"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link nav-links nav-icons"
              href="https://www.instagram.com/asradose/"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link nav-links nav-icons"
              href="https://www.linkedin.com/in/anthony-radose-35a969236/"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </li>
        </div>
      </div>
    </ul>
  );
};

export default Nav;
