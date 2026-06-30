import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { courseStructure } from "../../data/navigation/courseStructure";
import "./CompactNav.css";

const CompactNav: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeChapter, setActiveChapter] = useState<string | null>(null);

  // Determine current chapter from URL
  useEffect(() => {
    const pathParts = location.pathname.split("/");
    if (pathParts[1] === "topic" && pathParts[2]) {
      setActiveChapter(pathParts[2]);
    }
  }, [location.pathname]);

  const isActiveLink = (topicSlug: string, subtopicSlug: string): boolean => {
    return location.pathname === `/topic/${topicSlug}/${subtopicSlug}`;
  };

  const getCurrentPosition = () => {
    const pathParts = location.pathname.split("/");
    if (pathParts[1] === "topic" && pathParts[2] && pathParts[3]) {
      const topic = courseStructure.find((t) => t.slug === pathParts[2]);
      const subtopic = topic?.subtopics?.find((s) => s.slug === pathParts[3]);
      return { topic, subtopic };
    }
    return { topic: null, subtopic: null };
  };

  const { topic: currentTopic, subtopic: currentSubtopic } =
    getCurrentPosition();

  return (
    <>
      {/* Floating Navigation Button */}
      <button
        className={`nav-fab ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        <span className="nav-fab-icon">{isOpen ? "✕" : "☰"}</span>
        {!isOpen && currentTopic && (
          <span className="nav-fab-label">Ch. {currentTopic.order}</span>
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="nav-overlay"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Slide-out Navigation Panel */}
      <nav
        className={`compact-nav ${isOpen ? "open" : ""}`}
        aria-label="Course Navigation"
      >
        <div className="compact-nav-header">
          <div>
            <h2>Course Navigation</h2>
            <p className="nav-subtitle">12 Chapters • 75+ Topics</p>
          </div>
          <button
            className="nav-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation"
          >
            ✕
          </button>
        </div>

        {/* Current Location Indicator */}
        {currentTopic && currentSubtopic && (
          <div className="current-location">
            <div className="location-badge">Current Location</div>
            <div className="location-title">
              {currentTopic.order}. {currentSubtopic.title}
            </div>
            <div className="location-chapter">{currentTopic.title}</div>
          </div>
        )}

        {/* Chapter Progress Cards */}
        <div className="chapters-grid">
          {courseStructure.map((topic) => {
            const isActive = activeChapter === topic.slug;
            return (
              <div
                key={topic.id}
                className={`chapter-card ${isActive ? "active" : ""}`}
              >
                <div className="chapter-card-header">
                  <div className="chapter-number">{topic.order}</div>
                  <div className="chapter-info">
                    <h3>{topic.title.replace(/^\d+\.\s*/, "")}</h3>
                    <span className="chapter-count">
                      {topic.subtopics?.length || 0} topics
                    </span>
                  </div>
                </div>

                {/* Show topics when active */}
                {isActive && topic.subtopics && (
                  <ul className="chapter-topics">
                    {topic.subtopics.map((subtopic) => (
                      <li key={subtopic.id}>
                        <Link
                          to={`/topic/${topic.slug}/${subtopic.slug}`}
                          className={
                            isActiveLink(topic.slug, subtopic.slug)
                              ? "active"
                              : ""
                          }
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="topic-number">{subtopic.order}</span>
                          <span className="topic-title">{subtopic.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Expand/Collapse button */}
                <button
                  className="chapter-toggle"
                  onClick={() => setActiveChapter(isActive ? null : topic.slug)}
                  aria-expanded={isActive}
                >
                  {isActive ? "Show less" : "Show topics"} →
                </button>
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default CompactNav;
