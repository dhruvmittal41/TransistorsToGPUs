import { Project } from "./projectTypes";

/**
 * PROJECT TEMPLATE
 *
 * Copy this file to create a new project.
 *
 * Steps:
 * 1. Copy this file to hardware/ or software/ folder
 * 2. Rename to your-project-name.ts
 * 3. Fill in all the fields
 * 4. Import in projectsIndex.ts
 * 5. Add to allProjects array
 */

export const templateProject: Project = {
  // ============================================
  // BASIC INFO
  // ============================================
  id: "project-unique-id",
  slug: "project-url-slug",
  title: "Your Project Title",
  category: "hardware", // or "software" or "tutorial"
  difficulty: "Beginner", // or "Intermediate" or "Advanced"

  // ============================================
  // OVERVIEW
  // ============================================
  shortDescription:
    "One-line description for project cards (keep it under 150 characters)",

  description: `
    <p>Full description of the project. What does it do? Why is it important?</p>
    
    <p>This appears at the top of the project page. Use 2-3 paragraphs.</p>
    
    <p>You can use HTML for formatting!</p>
  `,

  // ============================================
  // LEARNING OUTCOMES
  // ============================================
  whatYouWillLearn: [
    "Learning outcome 1 - Be specific!",
    "Learning outcome 2 - What will they understand?",
    "Learning outcome 3 - What skills will they gain?",
    "Learning outcome 4",
    "Learning outcome 5",
  ],

  prerequisites: [
    "Prerequisite knowledge 1",
    "Prerequisite knowledge 2",
    "Required tool or software",
    "Basic understanding of X",
  ],

  // ============================================
  // TECHNOLOGIES & TOOLS
  // ============================================
  technologies: ["Tech1", "Tech2", "Tech3"],
  toolsRequired: [
    "Tool/Software 1 (version)",
    "Tool/Software 2",
    "Optional: Additional tool",
  ],

  // ============================================
  // TIME & EFFORT
  // ============================================
  estimatedTime: "4 hours", // Be realistic!
  buildSteps: 6, // Number of steps in your tutorial

  // ============================================
  // CONTENT - INTRODUCTION (Optional but recommended)
  // ============================================
  introduction: `
    <p class="quote">"Add an inspiring quote here" - Author</p>
    
    <p>Set the context. Why is this project interesting or important?</p>
    
    <p>What real-world application does it have?</p>
  `,

  // ============================================
  // CONTENT - BUILD STEPS (Required)
  // ============================================
  steps: [
    // STEP 1
    {
      id: "step-1",
      title: "Step 1: Setup and Understanding",
      content: `
        <h3>What We're Building</h3>
        <p>Explain the overview of this step.</p>
        
        <h3>Why This Matters</h3>
        <p>Explain the theory or reasoning.</p>
        
        <h3>Let's Begin</h3>
        <p>Start with the practical instructions.</p>
        
        <ul>
          <li>Instruction 1</li>
          <li>Instruction 2</li>
          <li>Instruction 3</li>
        </ul>
      `,
      // Optional: Add code snippet
      codeSnippet: {
        language: "systemverilog", // or "python", "c", "javascript", etc.
        filename: "example.sv",
        title: "Code Example",
        code: `// Your code here
module example();
  // Implementation
endmodule`,
      },
      // Optional: Add diagram
      diagram: {
        src: "/images/projects/your-project/diagram1.png",
        alt: "Diagram description",
        caption: "Explain what the diagram shows",
        width: "600px",
      },
    },

    // STEP 2
    {
      id: "step-2",
      title: "Step 2: Implementation",
      content: `
        <h3>Building the Core</h3>
        <p>Step-by-step instructions...</p>
      `,
      codeSnippet: {
        language: "systemverilog",
        filename: "main.sv",
        title: "Main Implementation",
        code: `// Main code here`,
      },
    },

    // STEP 3
    {
      id: "step-3",
      title: "Step 3: Testing and Verification",
      content: `
        <h3>Writing Tests</h3>
        <p>How to verify your implementation...</p>
      `,
    },

    // Add more steps as needed...
  ],

  // ============================================
  // SCREENSHOTS (Optional but recommended)
  // ============================================
  screenshots: [
    {
      src: "/images/projects/your-project/screenshot1.png",
      alt: "Screenshot 1 description",
      caption: "What this screenshot shows",
      width: "800px",
    },
    {
      src: "/images/projects/your-project/screenshot2.png",
      alt: "Screenshot 2 description",
      caption: "Another view or result",
    },
  ],

  // ============================================
  // COMMON ISSUES (Optional but very helpful)
  // ============================================
  commonIssues: [
    {
      title: "Issue 1: Compilation Error",
      problem: "Describe the error message or symptom",
      solution: "Explain how to fix it step by step",
    },
    {
      title: "Issue 2: Wrong Output",
      problem: "What wrong result appears",
      solution: "Debug steps and solution",
    },
  ],

  // ============================================
  // EXTENSIONS (Optional)
  // ============================================
  extensions: [
    {
      title: "Extension 1: Add Feature X",
      description: "How to extend the project with additional functionality",
      difficulty: "Intermediate",
    },
    {
      title: "Extension 2: Optimize Performance",
      description: "Ways to make it faster or more efficient",
      difficulty: "Advanced",
    },
  ],

  // ============================================
  // RESOURCES (Required)
  // ============================================
  resources: [
    {
      type: "github",
      title: "Complete Source Code",
      url: "https://github.com/yourusername/project-repo",
      description: "Full code with comments and examples",
    },
    {
      type: "article",
      title: "Related Course Article",
      url: "/topic/fundamentals/related-topic",
      description: "Background theory for this project",
    },
    {
      type: "documentation",
      title: "Tool Documentation",
      url: "https://example.com/docs",
      description: "Official documentation",
    },
  ],

  // ============================================
  // RELATED CONTENT (Optional)
  // ============================================
  relatedArticles: [
    {
      slug: "/topic/fundamentals/related-topic",
      title: "Related Course Article",
    },
  ],

  relatedProjects: [
    {
      slug: "another-project-slug",
      title: "Another Project Title",
    },
  ],

  // ============================================
  // METADATA
  // ============================================
  featured: false, // Set to true for featured projects
  completedDate: "2026-07-01",
  lastUpdated: "2026-07-01",
  tags: ["tag1", "tag2", "tag3", "tag4"],

  // ============================================
  // VISUAL (Optional)
  // ============================================
  thumbnail: "/images/projects/your-project/thumbnail.png",
  coverImage: "/images/projects/your-project/cover.png",
};
