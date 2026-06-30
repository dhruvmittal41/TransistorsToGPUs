import React from "react";
import { Article } from "../../data/articles/articleTypes";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import DiagramView from "../Diagram/DiagramView";
import {
  ReadIcon,
  AlertIcon,
  StarIcon,
  BookIcon,
  CheckIcon,
  XIcon,
} from "../Icons/Icons";
import "./ArticleView.css";

interface ArticleViewProps {
  article: Article;
}

const ArticleView: React.FC<ArticleViewProps> = ({ article }) => {
  return (
    <article className="article-view">
      <header className="article-header">
        <h1>{article.title}</h1>
        <div className="article-meta">
          <span className="read-time">
            <ReadIcon size={18} /> {article.readTime} min read
          </span>
          <span className="last-updated">
            Last updated: {article.lastUpdated}
          </span>
        </div>
        <p className="article-description">{article.description}</p>
        <div className="article-tags">
          {article.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </header>

      {article.introduction && (
        <section className="article-introduction">
          <p>{article.introduction}</p>
        </section>
      )}

      {article.sections &&
        article.sections.map((section) => (
          <section key={section.id} className="article-section" id={section.id}>
            <h2>{section.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: section.content }} />

            {section.subsections &&
              section.subsections.map((subsection) => (
                <div
                  key={subsection.id}
                  className="article-subsection"
                  id={subsection.id}
                >
                  <h3>{subsection.title}</h3>
                  <div
                    dangerouslySetInnerHTML={{ __html: subsection.content }}
                  />
                </div>
              ))}
          </section>
        ))}

      {article.codeSnippets && article.codeSnippets.length > 0 && (
        <section className="article-section">
          <h2>Code Examples</h2>
          {article.codeSnippets.map((snippet, index) => (
            <CodeSnippet key={index} snippet={snippet} />
          ))}
        </section>
      )}

      {article.diagrams && article.diagrams.length > 0 && (
        <section className="article-section">
          <h2>Diagrams</h2>
          <div className="diagrams-grid">
            {article.diagrams.map((diagram, index) => (
              <DiagramView key={index} diagram={diagram} />
            ))}
          </div>
        </section>
      )}

      {article.commonPitfalls && article.commonPitfalls.length > 0 && (
        <section className="article-section pitfalls-section">
          <h2>
            <AlertIcon size={24} className="section-icon" /> Common Pitfalls
          </h2>
          {article.commonPitfalls.map((pitfall, index) => (
            <div key={index} className="pitfall-item">
              <h3>{pitfall.title}</h3>
              <p>{pitfall.description}</p>
              {pitfall.wrongExample && (
                <div className="example-container wrong">
                  <h4>
                    <XIcon size={20} /> Wrong:
                  </h4>
                  <CodeSnippet snippet={pitfall.wrongExample} />
                </div>
              )}
              {pitfall.correctExample && (
                <div className="example-container correct">
                  <h4>
                    <CheckIcon size={20} /> Correct:
                  </h4>
                  <CodeSnippet snippet={pitfall.correctExample} />
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {article.bestPractices && article.bestPractices.length > 0 && (
        <section className="article-section best-practices-section">
          <h2>
            <StarIcon size={24} className="section-icon" /> Best Practices
          </h2>
          {article.bestPractices.map((practice, index) => (
            <div key={index} className="practice-item">
              <h3>{practice.title}</h3>
              <p>{practice.description}</p>
              {practice.example && <CodeSnippet snippet={practice.example} />}
            </div>
          ))}
        </section>
      )}

      {article.researchPapers && article.researchPapers.length > 0 && (
        <section className="article-section research-section">
          <h2>
            <BookIcon size={24} className="section-icon" /> Research Papers
          </h2>
          <div className="research-papers">
            {article.researchPapers.map((paper, index) => (
              <div key={index} className="paper-item">
                <h3>{paper.title}</h3>
                <p className="paper-authors">{paper.authors.join(", ")}</p>
                <p className="paper-venue">
                  {paper.venue} ({paper.year})
                </p>
                {paper.summary && (
                  <p className="paper-summary">{paper.summary}</p>
                )}
                {paper.url && (
                  <a
                    href={paper.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="paper-link"
                  >
                    Read Paper →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {article.furtherReading && article.furtherReading.length > 0 && (
        <section className="article-section">
          <h2>Further Reading</h2>
          <ul className="further-reading">
            {article.furtherReading.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      <nav className="article-nav">
        {article.prevArticle && (
          <a href={article.prevArticle.slug} className="nav-link prev">
            ← {article.prevArticle.title}
          </a>
        )}
        {article.nextArticle && (
          <a href={article.nextArticle.slug} className="nav-link next">
            {article.nextArticle.title} →
          </a>
        )}
      </nav>
    </article>
  );
};

export default ArticleView;
