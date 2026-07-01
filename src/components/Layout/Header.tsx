import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HomeIcon, BookIcon, InfoIcon } from "../Icons/Icons";
import "./Header.css";

// Hammer and Wrench icon for Projects
const ProjectsIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <div className="logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect
                x="2"
                y="2"
                width="28"
                height="28"
                rx="6"
                fill="white"
                fillOpacity="0.2"
              />
              <path
                d="M8 16h6m4 0h6M16 8v6m0 4v6"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="logo-text">
            <h1>Transistors to GPUs</h1>
            <p className="tagline">Computer Architecture Journey</p>
          </div>
        </Link>

        <nav className={`main-nav ${mobileMenuOpen ? "mobile-open" : ""}`}>
          <NavLink to="/" end onClick={() => setMobileMenuOpen(false)}>
            <span className="nav-icon">
              <HomeIcon size={20} />
            </span>
            <span>Home</span>
          </NavLink>
          <NavLink to="/courses" onClick={() => setMobileMenuOpen(false)}>
            <span className="nav-icon">
              <BookIcon size={20} />
            </span>
            <span>Courses</span>
          </NavLink>
          <NavLink to="/projects" onClick={() => setMobileMenuOpen(false)}>
            <span className="nav-icon">
              <ProjectsIcon size={20} />
            </span>
            <span>Projects</span>
          </NavLink>
          <NavLink to="/about" onClick={() => setMobileMenuOpen(false)}>
            <span className="nav-icon">
              <InfoIcon size={20} />
            </span>
            <span>About</span>
          </NavLink>
        </nav>

        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className={`hamburger ${mobileMenuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
