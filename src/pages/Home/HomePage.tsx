import React from "react";
import { Link } from "react-router-dom";
import { courseStructure } from "../../data/navigation/courseStructure";
import SEO from "../../components/SEO/SEO";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Learn digital electronics and computer architecture from transistors to modern GPUs and AI accelerators. Comprehensive tutorials with Verilog examples, diagrams, and best practices."
        keywords="digital electronics tutorial, computer architecture course, GPU architecture, transistors to GPUs, Verilog tutorial, hardware design, FPGA design"
        url="https://dhruvmittal41.github.io/TransistorsToGPUs/"
      />
      <div className="home-page">
        <section className="hero-section">
          <h1>From Transistors to Modern GPUs</h1>
          <p className="hero-subtitle">
            A comprehensive journey through digital electronics, computer
            architecture, and modern AI accelerators
          </p>
          <div className="hero-cta">
            <Link to="/courses" className="hero-button primary">
              Start Learning
            </Link>
            <Link to="/about" className="hero-button secondary">
              About This Journey
            </Link>
          </div>
        </section>

        <section className="features-section">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Comprehensive Content</h3>
            <p>
              In-depth explanations from basic transistors to cutting-edge GPU
              architectures
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💻</div>
            <h3>Code Examples</h3>
            <p>
              Verilog and SystemVerilog implementations with practical examples
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Visual Learning</h3>
            <p>
              Detailed diagrams and visualizations to understand complex
              concepts
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚠️</div>
            <h3>Common Pitfalls</h3>
            <p>Learn from mistakes - understand what to avoid and why</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h3>Best Practices</h3>
            <p>Industry-standard approaches and design patterns</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📄</div>
            <h3>Research Papers</h3>
            <p>Key research findings and academic insights</p>
          </div>
        </section>

        <section className="course-overview">
          <h2>Course Structure</h2>
          <p className="section-subtitle">
            Follow a structured path from fundamentals to advanced topics
          </p>
          <div className="topics-grid">
            {courseStructure.map((topic) => (
              <Link
                key={topic.id}
                to={`/courses#${topic.slug}`}
                className="topic-card"
              >
                <div className="topic-number">{topic.order}</div>
                <h3>{topic.title}</h3>
                <p>{topic.subtopics?.length || 0} subtopics</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to Start Learning?</h2>
          <p>Begin your journey from transistors to modern GPUs</p>
          <Link to="/courses" className="cta-button">
            Start Learning →
          </Link>
        </section>
      </div>
    </>
  );
};

export default HomePage;
