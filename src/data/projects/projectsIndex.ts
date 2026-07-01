import { Project } from "./projectTypes";
import { EightBitALU } from "./hardware/8-bit_ALU";

/**
 * Projects Index
 * Central registry of all projects
 */

// Import all projects here as you create them
// import { fullAdderProject } from "./hardware/full-adder";
// import { attentionMechanismProject } from "./software/attention-mechanism";

export const allProjects: Project[] = [
  EightBitALU,
  // Add more projects here
];

// Helper function to get project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((project) => project.slug === slug);
}

// Helper function to get projects by category
export function getProjectsByCategory(category: string): Project[] {
  if (category === "all") return allProjects;
  return allProjects.filter((project) => project.category === category);
}

// Helper function to get featured projects
export function getFeaturedProjects(): Project[] {
  return allProjects.filter((project) => project.featured);
}

// Helper function to get projects by difficulty
export function getProjectsByDifficulty(difficulty: string): Project[] {
  return allProjects.filter((project) => project.difficulty === difficulty);
}

// Helper function to get related projects
export function getRelatedProjects(
  currentProjectSlug: string,
  limit: number = 3,
): Project[] {
  const currentProject = getProjectBySlug(currentProjectSlug);
  if (!currentProject) return [];

  // Find projects with similar tags or same category
  return allProjects
    .filter((project) => project.slug !== currentProjectSlug)
    .filter(
      (project) =>
        project.category === currentProject.category ||
        project.tags.some((tag) => currentProject.tags.includes(tag)),
    )
    .slice(0, limit);
}
