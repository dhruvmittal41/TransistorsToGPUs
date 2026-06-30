import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

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
            <span className="nav-icon">🏠</span>
            <span>Home</span>
          </NavLink>
          <NavLink to="/courses" onClick={() => setMobileMenuOpen(false)}>
            <span className="nav-icon">📚</span>
            <span>Courses</span>
          </NavLink>
          <NavLink to="/research" onClick={() => setMobileMenuOpen(false)}>
            <span className="nav-icon">📄</span>
            <span>Research</span>
          </NavLink>
          <NavLink to="/about" onClick={() => setMobileMenuOpen(false)}>
            <span className="nav-icon">ℹ️</span>
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
