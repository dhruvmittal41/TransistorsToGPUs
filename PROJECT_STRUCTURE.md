# Project Structure Documentation

Complete guide to the website architecture and file organization.

## 📁 Directory Structure

```
digital-electronics-blog/
├── public/                          # Static assets
│   ├── images/                      # All diagrams and images
│   │   ├── fundamentals/
│   │   ├── digital-logic/
│   │   ├── gpu-architecture/
│   │   └── ...
│   ├── index.html
│   └── favicon.ico
│
├── src/                             # Source code
│   ├── components/                  # React components
│   │   ├── Layout/                  # Page layout components
│   │   │   ├── Header.tsx          # Top navigation
│   │   │   ├── Footer.tsx          # Bottom footer
│   │   │   └── Layout.tsx          # Main layout wrapper
│   │   ├── Navigation/              # Navigation components
│   │   │   └── CourseNav.tsx       # Sidebar course navigation
│   │   ├── Article/                 # Article display
│   │   │   └── ArticleView.tsx     # Main article component
│   │   ├── CodeSnippet/             # Code display
│   │   │   └── CodeSnippet.tsx     # Syntax highlighted code
│   │   ├── Diagram/                 # Diagram display
│   │   │   └── DiagramView.tsx     # Image viewer for diagrams
│   │   ├── SearchBar/               # Search functionality
│   │   │   └── SearchBar.tsx       # Search input component
│   │   ├── Breadcrumb/              # Breadcrumb navigation
│   │   │   └── Breadcrumb.tsx      # Breadcrumb trail
│   │   └── TOC/                     # Table of contents
│   │       └── TableOfContents.tsx # Scrollspy TOC
│   │
│   ├── pages/                       # Page components (routes)
│   │   ├── Home/
│   │   │   ├── HomePage.tsx        # Landing page
│   │   │   └── HomePage.css
│   │   ├── Fundamentals/
│   │   │   ├── CoursesPage.tsx     # Course overview
│   │   │   └── CoursesPage.css
│   │   ├── DigitalLogic/
│   │   │   ├── TopicPage.tsx       # Individual topic page
│   │   │   └── TopicPage.css
│   │   ├── Research/
│   │   │   ├── ResearchPage.tsx    # Research papers page
│   │   │   └── ResearchPage.css
│   │   └── About/
│   │       ├── AboutPage.tsx       # About page
│   │       └── AboutPage.css
│   │
│   ├── data/                        # Data and content
│   │   ├── navigation/
│   │   │   └── courseStructure.ts  # Complete course hierarchy
│   │   └── articles/
│   │       ├── articleTypes.ts     # TypeScript types
│   │       ├── articlesIndex.ts    # Article registry
│   │       ├── EXAMPLE_ARTICLE_TEMPLATE.ts
│   │       ├── fundamentals/       # Article files by topic
│   │       ├── digital-logic/
│   │       ├── gpu-architecture/
│   │       └── ...
│   │
│   ├── styles/                      # Global styles (reserved)
│   ├── utils/                       # Utility functions (reserved)
│   ├── hooks/                       # Custom React hooks (reserved)
│   │
│   ├── App.tsx                      # Main app component with routing
│   ├── App.css                      # App styles
│   ├── index.tsx                    # React entry point
│   └── index.css                    # Global styles
│
├── README.md                        # Main project README
├── QUICK_START.md                   # Quick start guide
├── CONTENT_GUIDE.md                 # Content creation guide
├── PROJECT_STRUCTURE.md             # This file
├── package.json                     # Dependencies and scripts
└── tsconfig.json                    # TypeScript configuration
```

## 🎯 Key Files Explained

### Core Application Files

| File                | Purpose                                             |
| ------------------- | --------------------------------------------------- |
| `src/App.tsx`       | Main application component with React Router routes |
| `src/index.tsx`     | Application entry point, renders App to DOM         |
| `public/index.html` | HTML template, single page for React app            |

### Data & Content

| File                                     | Purpose                                    |
| ---------------------------------------- | ------------------------------------------ |
| `src/data/navigation/courseStructure.ts` | Defines all topics and subtopics in course |
| `src/data/articles/articleTypes.ts`      | TypeScript interfaces for articles         |
| `src/data/articles/articlesIndex.ts`     | Registry of all articles                   |
| `src/data/articles/[topic]/[article].ts` | Individual article content files           |

### Components

| Component         | Purpose                            | Props                     |
| ----------------- | ---------------------------------- | ------------------------- |
| `Layout`          | Wraps all pages with header/footer | `children`                |
| `Header`          | Top navigation bar                 | None                      |
| `Footer`          | Bottom footer with links           | None                      |
| `CourseNav`       | Sidebar with expandable topics     | None                      |
| `ArticleView`     | Displays article content           | `article: Article`        |
| `CodeSnippet`     | Syntax highlighted code            | `snippet: CodeSnippet`    |
| `DiagramView`     | Image with caption                 | `diagram: Diagram`        |
| `SearchBar`       | Search input                       | None                      |
| `Breadcrumb`      | Navigation breadcrumbs             | `items: BreadcrumbItem[]` |
| `TableOfContents` | Scrollspy TOC                      | `sections: TOCItem[]`     |

### Pages (Routes)

| Page         | Route                             | Purpose                                 |
| ------------ | --------------------------------- | --------------------------------------- |
| HomePage     | `/`                               | Landing page with features and overview |
| CoursesPage  | `/courses`                        | Course curriculum overview              |
| TopicPage    | `/topic/:topicSlug/:subtopicSlug` | Individual topic article                |
| ResearchPage | `/research`                       | Research papers and case studies        |
| AboutPage    | `/about`                          | About the project                       |

## 🏗️ Architecture Patterns

### Component Structure

```
Component/
├── ComponentName.tsx    # Component logic and JSX
└── ComponentName.css    # Component-specific styles
```

### Data Flow

```
courseStructure.ts → Navigation components → User clicks
                                                ↓
articlesIndex.ts → Article lookup → ArticleView → Display
```

### Routing Flow

```
URL: /topic/fundamentals/transistors
          ↓
    React Router matches route
          ↓
    TopicPage component
          ↓
    Extract topicSlug='fundamentals', subtopicSlug='transistors'
          ↓
    Look up article in articlesIndex
          ↓
    Render ArticleView with article data
```

## 📊 Type System

### Main Interfaces

```typescript
// Article structure
interface Article {
  id: string;
  topicSlug: string;
  subtopicSlug: string;
  title: string;
  description: string;
  lastUpdated: string;
  readTime: number;
  tags: string[];
  sections?: ArticleSection[];
  codeSnippets?: CodeSnippet[];
  diagrams?: Diagram[];
  commonPitfalls?: CommonPitfall[];
  bestPractices?: BestPractice[];
  researchPapers?: ResearchPaper[];
  // ... more fields
}

// Course navigation
interface Topic {
  id: string;
  title: string;
  slug: string;
  order: number;
  subtopics?: Subtopic[];
}
```

## 🎨 Styling Approach

### CSS Organization

- **Component-level**: Each component has its own CSS file
- **Global styles**: `src/index.css` for body, fonts, etc.
- **No CSS-in-JS**: Using plain CSS for simplicity
- **Naming**: BEM-style class names (`.component-name__element--modifier`)

### Color Scheme

```css
Primary:     #667eea (Purple)
Secondary:   #764ba2 (Deep Purple)
Background:  #f7fafc (Light Gray)
Text:        #2d3748 (Dark Gray)
Muted:       #718096 (Medium Gray)
```

## 🔄 Data Management

### State Management

- **No Redux/Context**: Using React's built-in state for simplicity
- **Static data**: Articles stored as TypeScript objects
- **URL-based state**: Navigation state from React Router

### Content Updates

1. Create/edit article file in `src/data/articles/[topic]/`
2. Import and add to `articlesIndex.ts`
3. Refresh browser (hot reload in development)

## 🚀 Build Process

### Development

```bash
npm start
# Webpack dev server with hot reload
# Runs on http://localhost:3000
```

### Production

```bash
npm run build
# Creates optimized build in /build directory
# Ready for static hosting
```

## 📦 Dependencies

### Core Dependencies

- **react**: UI framework
- **react-dom**: DOM rendering
- **react-router-dom**: Client-side routing
- **typescript**: Type safety

### UI Dependencies

- **react-syntax-highlighter**: Code syntax highlighting
- **@types/react-syntax-highlighter**: TypeScript types

### Dev Dependencies

- **react-scripts**: Build tooling (webpack, babel, etc.)
- Various testing and linting tools

## 🔌 Extension Points

### Adding New Features

1. **New page**:
   - Create in `src/pages/`
   - Add route in `App.tsx`
   - Update navigation in `Header.tsx`

2. **New component**:
   - Create in `src/components/`
   - Import where needed

3. **New topic**:
   - Add to `courseStructure.ts`
   - Create articles directory
   - Add articles

4. **Search functionality**:
   - Implement in `searchArticles()` function
   - Create SearchResults page
   - Add route

## 🧪 Testing Strategy (To Implement)

### Recommended Tests

- **Unit tests**: Component rendering, utility functions
- **Integration tests**: Navigation flow, article loading
- **E2E tests**: Full user journeys

### Testing Tools

- Jest (unit tests)
- React Testing Library (component tests)
- Cypress (E2E tests)

## 📱 Responsive Design

### Breakpoints

```css
Mobile:  < 768px
Tablet:  768px - 1024px
Desktop: > 1024px
```

### Mobile Considerations

- Collapsible navigation
- Stacked layouts
- Touch-friendly buttons
- Readable text sizes

## 🔒 Security Considerations

- **Static site**: No server-side vulnerabilities
- **XSS prevention**: React auto-escapes by default
- **dangerouslySetInnerHTML**: Only used for authored content
- **Links**: Use `rel="noopener noreferrer"` for external links

## ⚡ Performance

### Optimization Strategies

- Code splitting by route
- Image optimization
- Lazy loading for images
- Syntax highlighter loaded on demand
- Static site = fast CDN delivery

## 🚢 Deployment Options

1. **GitHub Pages**: Free static hosting
2. **Netlify**: Auto-deploy from Git
3. **Vercel**: Optimized for React
4. **AWS S3 + CloudFront**: Scalable CDN
5. **Any static host**: Just upload /build folder

## 📈 Future Enhancements

### Potential Features

- [ ] Full-text search
- [ ] Article versioning
- [ ] Comments/discussions
- [ ] Dark mode toggle
- [ ] PDF export
- [ ] Print-friendly styles
- [ ] Progressive Web App
- [ ] Analytics integration
- [ ] Related articles suggestions
- [ ] Reading progress indicator

## 🛠️ Maintenance

### Regular Tasks

- Update dependencies monthly
- Add new content regularly
- Fix broken links
- Optimize images
- Update outdated information
- Respond to user feedback

### Version Control

```bash
# Recommended Git structure
main          # Production-ready code
develop       # Active development
feature/*     # New features
content/*     # Content updates
```

## 📝 Content Workflow

```
1. Research topic
2. Create article file
3. Write content
4. Create diagrams
5. Add code examples
6. Document pitfalls
7. Add best practices
8. Include research papers
9. Register in articlesIndex
10. Test locally
11. Commit and deploy
```

## 🎓 Learning Path

### For Understanding Codebase

1. Start with `App.tsx` - routing
2. Look at `HomePage.tsx` - simple page
3. Check `courseStructure.ts` - data structure
4. Explore `ArticleView.tsx` - complex component
5. Read `articleTypes.ts` - type system

### For Adding Content

1. Read `QUICK_START.md`
2. Study `CONTENT_GUIDE.md`
3. Copy `EXAMPLE_ARTICLE_TEMPLATE.ts`
4. Create your first article
5. Add diagrams
6. Test and iterate

---

This project structure is designed for simplicity, maintainability, and ease of content creation. Focus on writing great educational content - the architecture handles the rest!
