import React from "react";
import { Link } from "react-router-dom";
import { Project } from "../../data/projects/projectTypes";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import {
  GitHubIcon,
  AlertIcon,
  ChipIcon,
  CodeIcon,
  BookIcon,
} from "../Icons/Icons";
import "./ProjectView.css";

interface ProjectViewProps {
  project: Project;
}

const ProjectView: React.FC<ProjectViewProps> = ({ project }) => {
  // Get icon based on category
  const CategoryIcon = project.category === "hardware" ? ChipIcon : CodeIcon;

  return (
    <article className="project-view">
      {/* Project Header */}
      <header className="project-header">
        <div className="project-badges">
          <span
            className={`difficulty-badge ${project.difficulty.toLowerCase()}`}
          >
            {project.difficulty}
          </span>
          <span className={`category-badge ${project.category}`}>
            <CategoryIcon size={16} /> {project.category}
          </span>
          {project.featured && <span className="featured-badge">Featured</span>}
        </div>

        <h1>{project.title}</h1>

        <div className="project-meta">
          <span className="meta-item">⏱️ {project.estimatedTime}</span>
          <span className="meta-item">📋 {project.buildSteps} Steps</span>
          <span className="meta-item">📅 {project.lastUpdated}</span>
        </div>

        <div dangerouslySetInnerHTML={{ __html: project.description }} />

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* What You'll Learn */}
      <section className="project-section learning-outcomes">
        <h2>🎯 What You'll Learn</h2>
        <ul className="outcomes-list">
          {project.whatYouWillLearn.map((outcome, index) => (
            <li key={index}>{outcome}</li>
          ))}
        </ul>
      </section>

      {/* Prerequisites */}
      <section className="project-section prerequisites">
        <h2>📚 Prerequisites</h2>
        <ul className="prerequisites-list">
          {project.prerequisites.map((prereq, index) => (
            <li key={index}>{prereq}</li>
          ))}
        </ul>
      </section>

      {/* Technologies & Tools */}
      <section className="project-section tech-tools">
        <div className="tech-tools-grid">
          <div className="tech-box">
            <h3>Technologies</h3>
            <div className="tech-tags">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="tech-box">
            <h3>Tools Required</h3>
            <ul>
              {project.toolsRequired.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Introduction */}
      {project.introduction && (
        <section className="project-introduction">
          <div dangerouslySetInnerHTML={{ __html: project.introduction }} />
        </section>
      )}

      {/* Build Steps */}
      <section className="project-section build-steps">
        <h2>🛠️ Building the Project</h2>
        {project.steps.map((step, index) => (
          <div key={step.id} className="build-step">
            <div className="step-header">
              <span className="step-number">{index + 1}</span>
              <h3>{step.title}</h3>
            </div>
            <div
              className="step-content"
              dangerouslySetInnerHTML={{ __html: step.content }}
            />
            {step.codeSnippet && (
              <div className="step-code">
                <CodeSnippet snippet={step.codeSnippet} />
              </div>
            )}
            {step.diagram && (
              <div className="step-diagram">
                <img
                  src={step.diagram.src}
                  alt={step.diagram.alt}
                  style={{ maxWidth: step.diagram.width || "100%" }}
                />
                {step.diagram.caption && (
                  <p className="diagram-caption">{step.diagram.caption}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Screenshots */}
      {project.screenshots && project.screenshots.length > 0 && (
        <section className="project-section screenshots">
          <h2>📸 Project Screenshots</h2>
          <div className="screenshots-grid">
            {project.screenshots.map((screenshot, index) => (
              <div key={index} className="screenshot-item">
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  style={{ maxWidth: screenshot.width || "100%" }}
                />
                <p className="screenshot-caption">{screenshot.caption}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Common Issues */}
      {project.commonIssues && project.commonIssues.length > 0 && (
        <section className="project-section common-issues">
          <h2>
            <AlertIcon size={24} className="section-icon" /> Common Issues &
            Solutions
          </h2>
          {project.commonIssues.map((issue, index) => (
            <div key={index} className="issue-item">
              <h3>{issue.title}</h3>
              <div className="issue-problem">
                <strong>Problem:</strong> {issue.problem}
              </div>
              <div className="issue-solution">
                <strong>Solution:</strong> {issue.solution}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Extensions */}
      {project.extensions && project.extensions.length > 0 && (
        <section className="project-section extensions">
          <h2>🚀 Take It Further</h2>
          <div className="extensions-grid">
            {project.extensions.map((extension, index) => (
              <div key={index} className="extension-card">
                <div className="extension-header">
                  <h3>{extension.title}</h3>
                  <span
                    className={`difficulty-badge ${extension.difficulty.toLowerCase()}`}
                  >
                    {extension.difficulty}
                  </span>
                </div>
                <p>{extension.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Resources */}
      <section className="project-section resources">
        <h2>📚 Resources & Links</h2>
        <div className="resources-grid">
          {project.resources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target={
                resource.type === "github" || resource.type === "demo"
                  ? "_blank"
                  : undefined
              }
              rel={
                resource.type === "github" || resource.type === "demo"
                  ? "noopener noreferrer"
                  : undefined
              }
              className={`resource-card ${resource.type}`}
            >
              <div className="resource-icon">
                {resource.type === "github" && <GitHubIcon size={24} />}
                {resource.type === "article" && <BookIcon size={24} />}
                {(resource.type === "documentation" ||
                  resource.type === "demo") && <CodeIcon size={24} />}
              </div>
              <div className="resource-content">
                <h4>{resource.title}</h4>
                {resource.description && <p>{resource.description}</p>}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Related Content */}
      {((project.relatedArticles && project.relatedArticles.length > 0) ||
        (project.relatedProjects && project.relatedProjects.length > 0)) && (
        <section className="project-section related-content">
          <h2>🔗 Related Content</h2>
          <div className="related-grid">
            {project.relatedArticles && project.relatedArticles.length > 0 && (
              <div className="related-box">
                <h3>Course Articles</h3>
                <ul>
                  {project.relatedArticles.map((article, index) => (
                    <li key={index}>
                      <Link to={article.slug}>{article.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.relatedProjects && project.relatedProjects.length > 0 && (
              <div className="related-box">
                <h3>Other Projects</h3>
                <ul>
                  {project.relatedProjects.map((proj, index) => (
                    <li key={index}>
                      <Link to={`/project/${proj.slug}`}>{proj.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Navigation */}
      <nav className="project-nav">
        <Link to="/projects" className="nav-link back">
          ← Back to All Projects
        </Link>
      </nav>
    </article>
  );
};

export default ProjectView;
