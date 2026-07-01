import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO/SEO";
import { CodeIcon, ChipIcon } from "../../components/Icons/Icons";
import {
  allProjects,
  getFeaturedProjects,
  getProjectsByCategory,
} from "../../data/projects/projectsIndex";
import { ProjectCategory } from "../../data/projects/projectTypes";
import "./ProjectsPage.css";

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    ProjectCategory | "all"
  >("all");

  const filteredProjects =
    selectedCategory === "all"
      ? allProjects
      : getProjectsByCategory(selectedCategory);

  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <SEO
        title="Projects"
        description="Step-by-step hardware and software projects: Build circuits in SystemVerilog, implement computer architecture concepts, and explore AI/ML from first principles."
        keywords="hardware projects, systemverilog projects, FPGA projects, computer architecture projects, GPU programming, transformer implementation, digital logic projects"
        url="https://dhruvmittal41.github.io/TransistorsToGPUs/#/projects"
      />
      <div className="projects-page">
        {/* Hero Section */}
        <section className="projects-hero">
          <div className="hero-badge">Build & Learn</div>
          <h1>Hands-On Projects</h1>
          <p className="hero-description">
            Learn by building! From simple logic gates to complex AI systems -
            complete step-by-step projects with code, schematics, and detailed
            explanations.
          </p>
        </section>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="featured-section">
            <h2 className="section-title">Featured Projects</h2>
            <div className="featured-grid">
              {featuredProjects.map((project) => (
                <div key={project.id} className="featured-card">
                  <div className="featured-badge">Featured</div>
                  <div className="project-category-icon">
                    {project.category === "hardware" ? (
                      <ChipIcon size={32} />
                    ) : (
                      <CodeIcon size={32} />
                    )}
                  </div>
                  <h3>{project.title}</h3>
                  <div className="project-difficulty">{project.difficulty}</div>
                  <p>{project.description}</p>
                  <div className="project-meta">
                    <span className="meta-item">
                      {project.buildSteps} Steps
                    </span>
                    <span className="meta-item">{project.estimatedTime}</span>
                  </div>
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <Link
                      to={`/project/${project.slug}`}
                      className="btn-western primary"
                    >
                      Begin Building →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="projects-filter">
          <h2 className="section-title">All Projects</h2>
          <div className="filter-buttons">
            <button
              className={`filter-btn ${selectedCategory === "all" ? "active" : ""}`}
              onClick={() => setSelectedCategory("all")}
            >
              All Projects
            </button>
            <button
              className={`filter-btn ${selectedCategory === "hardware" ? "active" : ""}`}
              onClick={() => setSelectedCategory("hardware")}
            >
              <ChipIcon size={18} /> Hardware
            </button>
            <button
              className={`filter-btn ${selectedCategory === "software" ? "active" : ""}`}
              onClick={() => setSelectedCategory("software")}
            >
              <CodeIcon size={18} /> Software
            </button>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="projects-grid">
          {filteredProjects.length === 0 ? (
            <div className="empty-state">
              <p>More projects coming soon!</p>
              <p className="empty-subtitle">
                Check back regularly as I build new projects.
              </p>
            </div>
          ) : (
            filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <div className="project-icon">
                    {project.category === "hardware" ? (
                      <ChipIcon size={28} />
                    ) : (
                      <CodeIcon size={28} />
                    )}
                  </div>
                  <div className="project-title-group">
                    <h3>{project.title}</h3>
                    <span
                      className={`difficulty-badge ${project.difficulty.toLowerCase()}`}
                    >
                      {project.difficulty}
                    </span>
                  </div>
                </div>

                <p>{project.shortDescription}</p>

                <div className="project-meta">
                  <span className="meta-item">
                    📋 {project.buildSteps} Steps
                  </span>
                  <span className="meta-item">⏱️ {project.estimatedTime}</span>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <Link to={`/project/${project.slug}`} className="btn-link">
                    Begin Building →
                  </Link>
                </div>
              </div>
            ))
          )}
        </section>

        {/* Coming Soon Section */}
        <section className="coming-soon-section">
          <h2>Coming Soon</h2>
          <div className="coming-soon-grid">
            <div className="coming-soon-card">
              <ChipIcon size={32} />
              <h3>RISC-V CPU Core</h3>
              <p>Build a simple 5-stage pipelined processor</p>
            </div>
            <div className="coming-soon-card">
              <CodeIcon size={32} />
              <h3>Ray Tracer from Scratch</h3>
              <p>Understand GPU rendering by building a ray tracer</p>
            </div>
            <div className="coming-soon-card">
              <ChipIcon size={32} />
              <h3>Cache Simulator</h3>
              <p>Implement and visualize cache hierarchies</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="projects-cta">
          <h2>Ready to Build?</h2>
          <p>
            Each project includes detailed step-by-step instructions, complete
            code, and explanations.
          </p>
          <a href="#featured" className="cta-button">
            Start Building →
          </a>
        </section>
      </div>
    </>
  );
};

export default ProjectsPage;
