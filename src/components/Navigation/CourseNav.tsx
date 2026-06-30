import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { courseStructure } from "../../data/navigation/courseStructure";
import "./CourseNav.css";

const CourseNav: React.FC = () => {
  const location = useLocation();
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set());

  // Auto-expand topic when navigating to its subtopic
  useEffect(() => {
    const pathParts = location.pathname.split("/");
    if (pathParts[1] === "topic" && pathParts[2]) {
      const topicSlug = pathParts[2];
      const topic = courseStructure.find((t) => t.slug === topicSlug);
      if (topic) {
        setExpandedTopics((prev) => {
          const newSet = new Set(prev);
          newSet.add(topic.id);
          return newSet;
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const toggleTopic = (topicId: string) => {
    const newExpanded = new Set(expandedTopics);
    if (newExpanded.has(topicId)) {
      newExpanded.delete(topicId);
    } else {
      newExpanded.add(topicId);
    }
    setExpandedTopics(newExpanded);
  };

  const isActiveLink = (topicSlug: string, subtopicSlug: string): boolean => {
    return location.pathname === `/topic/${topicSlug}/${subtopicSlug}`;
  };

  return (
    <nav className="course-nav" aria-label="Course Navigation">
      <div className="course-nav-header">
        <h2>Course Contents</h2>
        <span className="course-nav-subtitle">
          {courseStructure.length} Chapters
        </span>
      </div>
      <div className="course-nav-list">
        {courseStructure.map((topic) => (
          <div key={topic.id} className="topic-section">
            <button
              className={`topic-header ${expandedTopics.has(topic.id) ? "expanded" : ""}`}
              onClick={() => toggleTopic(topic.id)}
              aria-expanded={expandedTopics.has(topic.id)}
              aria-controls={`topic-${topic.id}`}
            >
              <span className="expand-icon" aria-hidden="true">
                {expandedTopics.has(topic.id) ? "−" : "+"}
              </span>
              <span className="topic-title">{topic.title}</span>
              <span className="topic-count">
                {topic.subtopics?.length || 0}
              </span>
            </button>

            {expandedTopics.has(topic.id) && topic.subtopics && (
              <ul className="subtopic-list" id={`topic-${topic.id}`}>
                {topic.subtopics.map((subtopic) => (
                  <li key={subtopic.id}>
                    <Link
                      to={`/topic/${topic.slug}/${subtopic.slug}`}
                      className={
                        isActiveLink(topic.slug, subtopic.slug) ? "active" : ""
                      }
                    >
                      <span className="subtopic-number">{subtopic.order}</span>
                      <span className="subtopic-title">{subtopic.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default CourseNav;
