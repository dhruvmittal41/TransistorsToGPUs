import React from "react";
import { Link } from "react-router-dom";
import { GitHubIcon, LinkedInIcon, MailIcon, HeartIcon } from "../Icons/Icons";
import "./Footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-brand">
          <div className="footer-logo">
            <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
              <rect
                x="2"
                y="2"
                width="28"
                height="28"
                rx="6"
                fill="#667eea"
                fillOpacity="0.2"
              />
              <path
                d="M8 16h6m4 0h6M16 8v6m0 4v6"
                stroke="#667eea"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <h3>Transistors to GPUs</h3>
          <p>
            A comprehensive educational resource covering everything from
            fundamental digital electronics to modern GPU and AI accelerator
            architectures.
          </p>
          <div className="footer-stats">
            <div className="stat-item">
              <span className="stat-number">12</span>
              <span className="stat-label">Chapters</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">75+</span>
              <span className="stat-label">Topics</span>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Topics</h4>
          <ul>
            <li>
              <Link to="/topic/fundamentals/transistors">Fundamentals</Link>
            </li>
            <li>
              <Link to="/topic/basic-architecture/von-neumann">
                Computer Architecture
              </Link>
            </li>
            <li>
              <Link to="/topic/gpu-architecture/cuda-architecture">
                GPU Architecture
              </Link>
            </li>
            <li>
              <Link to="/topic/ai-accelerators/tpu-architecture">
                AI Accelerators
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <ul className="social-links">
            <li>
              <a
                href="https://github.com/dhruvmittal41"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="social-icon">
                  <GitHubIcon size={20} />
                </span>
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/dhruv-mittal-a701b1330/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="social-icon">
                  <LinkedInIcon size={20} />
                </span>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:mittaldhruv41@gmail.com">
                <span className="social-icon">
                  <MailIcon size={20} />
                </span>
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} Transistors to GPUs. All rights reserved.</p>
          <p className="footer-made-with">
            Made with{" "}
            <span className="heart">
              <HeartIcon size={16} />
            </span>{" "}
            by Dhruv Mittal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
