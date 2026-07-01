/**
 * Project Type Definitions
 * Similar structure to articles but for hands-on projects
 */

export type ProjectCategory = "hardware" | "software" | "tutorial";
export type ProjectDifficulty = "Beginner" | "Intermediate" | "Advanced";

export interface ProjectStep {
  id: string;
  title: string;
  content: string; // HTML content
  codeSnippet?: {
    language: string;
    code: string;
    title?: string;
    filename?: string;
  };
  diagram?: {
    src: string;
    alt: string;
    caption?: string;
    width?: string;
  };
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption: string;
  width?: string;
}

export interface ProjectResource {
  type: "github" | "demo" | "video" | "article" | "documentation";
  title: string;
  url: string;
  description?: string;
}

export interface Project {
  // Basic Info
  id: string;
  slug: string; // URL-friendly identifier
  title: string;
  category: ProjectCategory;
  difficulty: ProjectDifficulty;

  // Overview
  shortDescription: string; // For project cards
  description: string; // Full description for project page

  // Learning Outcomes
  whatYouWillLearn: string[];
  prerequisites: string[];

  // Technologies
  technologies: string[];
  toolsRequired: string[];

  // Time & Effort
  estimatedTime: string;
  buildSteps: number;

  // Content
  introduction?: string;
  steps: ProjectStep[];
  screenshots?: ProjectScreenshot[];

  // Additional Content
  commonIssues?: {
    title: string;
    problem: string;
    solution: string;
  }[];

  extensions?: {
    title: string;
    description: string;
    difficulty: ProjectDifficulty;
  }[];

  // Resources & Links
  resources: ProjectResource[];
  relatedArticles?: {
    slug: string;
    title: string;
  }[];
  relatedProjects?: {
    slug: string;
    title: string;
  }[];

  // Metadata
  featured?: boolean;
  completedDate?: string;
  lastUpdated: string;
  tags: string[];

  // Visual
  thumbnail?: string;
  coverImage?: string;
}
