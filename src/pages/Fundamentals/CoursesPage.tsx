import React from "react";
import { Link } from "react-router-dom";
import { courseStructure } from "../../data/navigation/courseStructure";
import "./CoursesPage.css";

const CoursesPage: React.FC = () => {
  return (
    <div className="courses-page">
      <div className="courses-header">
        <h1>Complete Course</h1>
        <p>
          Explore the comprehensive curriculum from transistors to modern GPUs
          and AI accelerators
        </p>
      </div>

      <div className="courses-content-single">
        <div className="courses-intro">
          <h2>Welcome to the Course</h2>
          <p>
            This course takes you on a comprehensive journey through computer
            architecture, starting from the fundamental building blocks and
            progressing to modern GPU and AI accelerator designs.
          </p>

          <h3>What You'll Learn</h3>
          <ul>
            <li>Fundamental digital electronics and logic design</li>
            <li>Hardware description languages (Verilog & SystemVerilog)</li>
            <li>Computer architecture principles and design</li>
            <li>Advanced topics in pipelining and parallelism</li>
            <li>Memory hierarchy and optimization</li>
            <li>Modern GPU architectures</li>
            <li>AI accelerators and specialized hardware</li>
          </ul>

          <h3>Course Features</h3>
          <ul>
            <li>📚 Detailed explanations with theory and practical examples</li>
            <li>💻 Code snippets in Verilog and SystemVerilog</li>
            <li>🎨 Diagrams and visual aids for complex concepts</li>
            <li>⚠️ Common pitfalls and how to avoid them</li>
            <li>✨ Industry best practices</li>
            <li>📄 References to key research papers</li>
          </ul>
        </div>

        <div className="chapters-list">
          <h2>Course Chapters</h2>
          <p className="chapters-subtitle">
            Click on any chapter to expand and explore topics. Use the floating
            navigation button at the bottom-right for quick access.
          </p>
          {courseStructure.map((topic) => (
            <div key={topic.id} className="chapter-card-large">
              <div className="chapter-card-header">
                <div className="chapter-number-large">{topic.order}</div>
                <div className="chapter-info-large">
                  <h3>{topic.title.replace(/^\d+\.\s*/, "")}</h3>
                  <p className="chapter-meta">
                    {topic.subtopics?.length || 0} topics • Learn at your own
                    pace
                  </p>
                </div>
              </div>
              <div className="chapter-topics-grid">
                {topic.subtopics?.map((subtopic) => (
                  <Link
                    key={subtopic.id}
                    to={`/topic/${topic.slug}/${subtopic.slug}`}
                    className="topic-card-link"
                  >
                    <span className="topic-number-badge">{subtopic.order}</span>
                    <span className="topic-link-title">{subtopic.title}</span>
                    <span className="topic-arrow">→</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
