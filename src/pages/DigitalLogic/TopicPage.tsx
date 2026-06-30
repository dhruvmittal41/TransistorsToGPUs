import React from "react";
import { useParams } from "react-router-dom";
import ArticleView from "../../components/Article/ArticleView";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { getArticleBySlug } from "../../data/articles/articlesIndex";
import {
  getTopicBySlug,
  getSubtopicBySlug,
} from "../../data/navigation/courseStructure";
import "./TopicPage.css";

const TopicPage: React.FC = () => {
  const { topicSlug, subtopicSlug } = useParams<{
    topicSlug: string;
    subtopicSlug: string;
  }>();

  const topic = topicSlug ? getTopicBySlug(topicSlug) : undefined;
  const subtopic =
    topicSlug && subtopicSlug
      ? getSubtopicBySlug(topicSlug, subtopicSlug)
      : undefined;
  const article =
    topicSlug && subtopicSlug
      ? getArticleBySlug(topicSlug, subtopicSlug)
      : undefined;

  if (!topic || !subtopic) {
    return (
      <div className="topic-page">
        <div className="not-found">
          <h1>Topic Not Found</h1>
          <p>The requested topic could not be found.</p>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Courses", path: "/courses" },
    { label: topic.title, path: `/courses#${topic.slug}` },
    { label: subtopic.title, path: `/topic/${topicSlug}/${subtopicSlug}` },
  ];

  return (
    <div className="topic-page">
      <Breadcrumb items={breadcrumbItems} />

      <main className="topic-content-full">
        {article ? (
          <ArticleView article={article} />
        ) : (
          <div className="no-content">
            <h1>{subtopic.title}</h1>
            <div className="placeholder-message">
              <p>📝 Content for this topic is coming soon!</p>
              <p>This section will cover:</p>
              <ul>
                <li>Detailed explanations and theory</li>
                <li>Code examples and implementations</li>
                <li>Diagrams and visualizations</li>
                <li>Common pitfalls and best practices</li>
                <li>Research papers and further reading</li>
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default TopicPage;
