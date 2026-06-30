// Article data structure and types
export interface CodeSnippet {
  language: string;
  code: string;
  title?: string;
  filename?: string;
}

export interface Diagram {
  src: string;
  alt: string;
  caption?: string;
  width?: string | number;
}

export interface ResearchPaper {
  title: string;
  authors: string[];
  year: number;
  venue?: string;
  doi?: string;
  url?: string;
  summary?: string;
}

export interface CommonPitfall {
  title: string;
  description: string;
  wrongExample?: CodeSnippet;
  correctExample?: CodeSnippet;
}

export interface BestPractice {
  title: string;
  description: string;
  example?: CodeSnippet;
}

export interface Article {
  id: string;
  topicSlug: string;
  subtopicSlug: string;
  title: string;
  description: string;
  lastUpdated: string;
  readTime: number; // in minutes
  tags: string[];

  // Content sections (you'll populate these)
  introduction?: string;
  sections?: ArticleSection[];
  codeSnippets?: CodeSnippet[];
  diagrams?: Diagram[];
  commonPitfalls?: CommonPitfall[];
  bestPractices?: BestPractice[];
  researchPapers?: ResearchPaper[];
  furtherReading?: string[];

  // Navigation
  prevArticle?: { slug: string; title: string };
  nextArticle?: { slug: string; title: string };
}

export interface ArticleSection {
  id: string;
  title: string;
  content: string;
  subsections?: ArticleSubsection[];
}

export interface ArticleSubsection {
  id: string;
  title: string;
  content: string;
}

// Example article template - you can use this as a template for creating articles
export const articleTemplate: Article = {
  id: "",
  topicSlug: "",
  subtopicSlug: "",
  title: "",
  description: "",
  lastUpdated: new Date().toISOString().split("T")[0],
  readTime: 0,
  tags: [],
  sections: [
    {
      id: "overview",
      title: "Overview",
      content: "",
    },
    {
      id: "theory",
      title: "Theory & Fundamentals",
      content: "",
    },
    {
      id: "implementation",
      title: "Implementation",
      content: "",
    },
    {
      id: "examples",
      title: "Examples",
      content: "",
    },
  ],
  codeSnippets: [],
  diagrams: [],
  commonPitfalls: [],
  bestPractices: [],
  researchPapers: [],
};
