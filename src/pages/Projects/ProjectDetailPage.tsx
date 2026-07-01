import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getProjectBySlug } from "../../data/projects/projectsIndex";
import ProjectView from "../../components/Project/ProjectView";
import SEO from "../../components/SEO/SEO";

const ProjectDetailPage: React.FC = () => {
  const { projectSlug } = useParams<{ projectSlug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectSlug]);

  if (!projectSlug) {
    return <Navigate to="/projects" replace />;
  }

  const project = getProjectBySlug(projectSlug);

  if (!project) {
    return (
      <div style={{ padding: "4rem 2rem", textAlign: "center" }}>
        <h1>Project Not Found</h1>
        <p>The project you're looking for doesn't exist.</p>
        <a href="/#/projects" style={{ color: "var(--color-rust)" }}>
          ← Back to Projects
        </a>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={project.title}
        description={project.shortDescription}
        keywords={`${project.category} project, ${project.technologies.join(", ")}, ${project.tags.join(", ")}`}
        url={`https://dhruvmittal41.github.io/TransistorsToGPUs/#/project/${project.slug}`}
      />
      <ProjectView project={project} />
    </>
  );
};

export default ProjectDetailPage;
