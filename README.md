# Transistors to GPUs - Educational Website

A comprehensive educational journey from fundamental digital electronics to modern GPU and AI accelerator architectures.

## 🎯 Project Overview

This is a static React-based educational website designed to document learning in computer architecture, digital electronics, and modern computing hardware. The site provides a structured curriculum with support for:

- Detailed explanations and theory
- Code examples (Verilog, SystemVerilog)
- Diagrams and visualizations
- Common pitfalls and best practices
- Research paper references

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout/           # Header, Footer, Layout components
│   ├── Navigation/       # Course navigation sidebar
│   ├── Article/          # Article view component
│   ├── CodeSnippet/      # Syntax-highlighted code display
│   ├── Diagram/          # Diagram viewer component
│   ├── SearchBar/        # Search functionality
│   ├── Breadcrumb/       # Breadcrumb navigation
│   └── TOC/              # Table of contents
├── pages/
│   ├── Home/             # Landing page
│   ├── Fundamentals/     # Courses overview page
│   ├── DigitalLogic/     # Topic detail pages
│   ├── Research/         # Research papers section
│   └── About/            # About page
├── data/
│   ├── navigation/       # Course structure and navigation
│   └── articles/         # Article data and types
├── styles/               # Global styles
├── utils/                # Utility functions
└── hooks/                # Custom React hooks
```

## 🗂️ Course Structure

The course covers 12 major topics:

1. **Fundamentals & Building Blocks** - Transistors, logic gates, circuits
2. **Digital Logic Design** - Boolean algebra, FSMs, ALU design
3. **Hardware Description Languages** - Verilog, SystemVerilog, testbenches
4. **Basic Computer Architecture** - ISA, RISC/CISC, processors
5. **Pipelining & Performance** - Hazards, branch prediction, superscalar
6. **Memory Hierarchy** - Cache, virtual memory, coherence
7. **Parallel Architectures** - ILP, SIMD, multicore
8. **GPU Architecture** - CUDA, streaming multiprocessors, tensor cores
9. **Modern GPU Architectures** - NVIDIA, AMD, Intel
10. **AI Accelerators** - TPUs, systolic arrays, custom ASICs
11. **Advanced Topics** - Power, thermal, security, verification
12. **Research Papers** - Classic and modern research

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

Builds the app for production to the `build` folder.

## ✍️ Adding Content

### Creating a New Article

1. **Create article data** in `src/data/articles/`:

```typescript
// Example: transistors.ts
import { Article } from "./articleTypes";

export const transistorsArticle: Article = {
  id: "transistors-intro",
  topicSlug: "fundamentals",
  subtopicSlug: "transistors",
  title: "Introduction to Transistors",
  description: "Understanding BJT and MOSFET transistors...",
  lastUpdated: "2024-01-01",
  readTime: 15,
  tags: ["transistors", "fundamentals", "bjt", "mosfet"],
  sections: [
    {
      id: "overview",
      title: "Overview",
      content: "<p>Your content here...</p>",
    },
    // More sections...
  ],
  codeSnippets: [
    {
      language: "verilog",
      code: "module example();",
      title: "Simple Example",
    },
  ],
  diagrams: [
    {
      src: "/images/transistor-diagram.png",
      alt: "Transistor Structure",
      caption: "Basic transistor structure",
    },
  ],
  commonPitfalls: [
    {
      title: "Pitfall Title",
      description: "Description...",
    },
  ],
  bestPractices: [
    {
      title: "Practice Title",
      description: "Description...",
    },
  ],
  researchPapers: [
    {
      title: "Paper Title",
      authors: ["Author 1", "Author 2"],
      year: 2020,
      venue: "Conference",
      url: "https://...",
    },
  ],
};
```

2. **Register the article** in `src/data/articles/articlesIndex.ts`:

```typescript
import { transistorsArticle } from "./transistors";

export const allArticles: Article[] = [
  transistorsArticle,
  // Add more articles...
];
```

3. **Add diagrams** to the `public/images/` directory

### Content Guidelines

- Write clear, concise explanations
- Include working code examples
- Add diagrams for visual concepts
- Document common mistakes
- Reference relevant research papers
- Keep content well-structured with sections

## 🎨 Styling

- Uses CSS modules for component-specific styles
- Global styles in `src/index.css`
- Color palette based on purple gradient theme
- Responsive design for mobile, tablet, and desktop

## 📦 Dependencies

- **React** - UI framework
- **React Router** - Client-side routing
- **React Syntax Highlighter** - Code syntax highlighting
- **TypeScript** - Type safety

## 🔧 Customization

### Modifying Course Structure

Edit `src/data/navigation/courseStructure.ts` to add/modify topics and subtopics.

### Changing Theme Colors

Update color values in component CSS files. Main colors:

- Primary: `#667eea`
- Secondary: `#764ba2`
- Background: `#f7fafc`

### Adding New Pages

1. Create component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in `src/components/Layout/Header.tsx`

## 📝 License

This project is for educational purposes.

## 🤝 Contributing

This is a personal learning project, but suggestions and corrections are welcome!
