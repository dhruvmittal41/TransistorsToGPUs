# ⚡ Quick Guide: Add a New Project

## 5-Minute Setup

### 1. Copy Template

```bash
cd src/data/projects/hardware  # or /software
cp ../PROJECT_TEMPLATE.ts my-new-project.ts
```

### 2. Edit File - Replace These:

```typescript
export const myNewProject: Project = {
  id: "unique-id",
  slug: "url-slug",
  title: "Project Title",
  category: "hardware", // or "software"
  difficulty: "Beginner",

  shortDescription: "One-line description",
  description: `<p>Full description...</p>`,

  whatYouWillLearn: ["Learning point 1", "Learning point 2"],

  prerequisites: ["Prereq 1", "Prereq 2"],
  technologies: ["Tech1", "Tech2"],
  toolsRequired: ["Tool1", "Tool2"],
  estimatedTime: "3 hours",
  buildSteps: 5,

  steps: [
    {
      id: "step-1",
      title: "Step Title",
      content: `<p>Content...</p>`,
      codeSnippet: {
        language: "systemverilog",
        code: `// Your code`,
      },
    },
    // Add more steps...
  ],

  resources: [
    {
      type: "github",
      title: "Source Code",
      url: "https://github.com/you/repo",
    },
  ],

  lastUpdated: "2026-07-01",
  tags: ["tag1", "tag2"],
};
```

### 3. Register Project

```typescript
// In projectsIndex.ts

import { myNewProject } from "./hardware/my-new-project";

export const allProjects: Project[] = [
  halfAdderProject,
  myNewProject, // ← Add here
];
```

### 4. Test & Deploy

```bash
npm start              # Test locally
npm run build          # Build
npm run deploy         # Deploy
```

---

## 📋 Minimal Project (Fastest)

```typescript
export const minimalProject: Project = {
  // Required fields only
  id: "test-project",
  slug: "test-project",
  title: "Test Project",
  category: "hardware",
  difficulty: "Beginner",
  shortDescription: "Short desc",
  description: `<p>Description</p>`,
  whatYouWillLearn: ["Point 1"],
  prerequisites: ["Prereq 1"],
  technologies: ["Tech 1"],
  toolsRequired: ["Tool 1"],
  estimatedTime: "2 hours",
  buildSteps: 3,

  steps: [
    {
      id: "step-1",
      title: "Step 1",
      content: `<p>Content</p>`,
    },
  ],

  resources: [
    {
      type: "github",
      title: "GitHub",
      url: "https://github.com/you/repo",
    },
  ],

  lastUpdated: "2026-07-01",
  tags: ["test"],
};
```

---

## 🎯 URLs

**Project List:** `/#/projects`

**Your Project:** `/#/project/your-slug`

---

## ✅ Checklist

- [ ] Copied template
- [ ] Filled all required fields
- [ ] Added steps (at least 3)
- [ ] Added GitHub link in resources
- [ ] Registered in projectsIndex.ts
- [ ] Tested locally
- [ ] Built successfully
- [ ] Deployed

---

**Done! Your project is live!** 🚀
