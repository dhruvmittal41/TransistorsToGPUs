import React from "react";
import SEO from "../../components/SEO/SEO";
import "./AboutPage.css";

const AboutPage: React.FC = () => {
  return (
    <>
      <SEO
        title="About"
        description="Learn about the Transistors to GPUs project - a comprehensive educational resource for digital electronics and computer architecture, from fundamentals to modern AI accelerators."
        keywords="about, computer architecture education, digital electronics learning, GPU architecture tutorial"
        url="https://dhruvmittal41.github.io/TransistorsToGPUs/#/about"
      />
      <div className="about-page">
        <header className="about-header">
          <h1>About This Project</h1>
        </header>

        <div className="about-content">
          <section className="about-section">
            <h2>The Journey</h2>
            <p>
              This website documents my learning journey through the fascinating
              world of computer architecture, from the fundamental building
              blocks to modern GPU and AI accelerator designs.
            </p>
            <p>
              "You don't really understand something until you can explain it to
              others." This principle drives the creation of this educational
              resource - by teaching, I deepen my own understanding while
              hopefully helping others learn.
            </p>
          </section>

          <section className="about-section">
            <h2>What You'll Find Here</h2>
            <ul>
              <li>
                <strong>Comprehensive Coverage:</strong> From transistors to
                modern GPUs and AI accelerators
              </li>
              <li>
                <strong>Practical Examples:</strong> Verilog and SystemVerilog
                code implementations
              </li>
              <li>
                <strong>Visual Learning:</strong> Detailed diagrams and
                visualizations
              </li>
              <li>
                <strong>Real Insights:</strong> Common pitfalls and best
                practices from experience
              </li>
              <li>
                <strong>Research Integration:</strong> Key findings from
                academic papers
              </li>
              <li>
                <strong>Continuous Updates:</strong> Regular additions as I
                continue learning
              </li>
            </ul>
          </section>

          <section className="about-section">
            <h2>Approach</h2>
            <p>
              Each topic is structured to provide both theoretical understanding
              and practical knowledge. I focus on:
            </p>
            <ul>
              <li>Clear explanations of core concepts</li>
              <li>Working code examples you can learn from</li>
              <li>Visual representations for complex ideas</li>
              <li>Common mistakes and how to avoid them</li>
              <li>Industry-standard practices</li>
              <li>Connections to academic research</li>
            </ul>
          </section>

          <section className="about-section">
            <h2>Get In Touch</h2>
            <p>
              This is a living project that grows with my learning. If you find
              errors, have suggestions, or want to discuss any of the topics,
              feel free to reach out.
            </p>
            <div className="contact-links">
              <a
                href="https://github.com/dhruvmittal41"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/dhruv-mittal-a701b1330/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
