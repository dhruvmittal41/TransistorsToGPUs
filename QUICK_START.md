# Quick Start Guide

Get your educational website up and running in minutes!

## 🚀 Initial Setup

1. **Navigate to project directory**

   ```bash
   cd digital-electronics-blog
   ```

2. **Install dependencies** (if not already done)

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm start
   ```

4. **Open in browser**
   - Navigate to http://localhost:3000
   - You should see the homepage with the course structure

## ✍️ Adding Your First Article

### Step 1: Create Article File

Create a new file: `src/data/articles/fundamentals/transistors.ts`

```typescript
import { Article } from "../articleTypes";

export const transistorsArticle: Article = {
  id: "transistors-intro",
  topicSlug: "fundamentals",
  subtopicSlug: "transistors",
  title: "Introduction to Transistors",
  description:
    "Understanding the fundamental building blocks of digital electronics - BJT and MOSFET transistors.",
  lastUpdated: "2024-01-15",
  readTime: 10,
  tags: ["transistors", "bjt", "mosfet", "fundamentals", "electronics"],

  introduction:
    "Transistors are the fundamental building blocks of all modern digital electronics. In this article, we will explore how they work and why they are so important.",

  sections: [
    {
      id: "overview",
      title: "What is a Transistor?",
      content: `
        <p>A transistor is a semiconductor device used to amplify or switch electronic signals and electrical power. It is composed of semiconductor material with at least three terminals for connection to an external circuit.</p>
        <p>The two main types of transistors we'll focus on are:</p>
        <ul>
          <li><strong>BJT (Bipolar Junction Transistor)</strong> - Current-controlled device</li>
          <li><strong>MOSFET (Metal-Oxide-Semiconductor Field-Effect Transistor)</strong> - Voltage-controlled device</li>
        </ul>
      `,
    },
    {
      id: "bjt-transistors",
      title: "BJT Transistors",
      content: `
        <p>Bipolar Junction Transistors consist of three layers of semiconductor material. They come in two configurations:</p>
        <ul>
          <li>NPN - Negative-Positive-Negative</li>
          <li>PNP - Positive-Negative-Positive</li>
        </ul>
        <p>The three terminals are: Emitter, Base, and Collector.</p>
      `,
    },
  ],

  codeSnippets: [
    {
      language: "verilog",
      code: `// Simple switch model of a transistor in Verilog
module transistor_switch(
    input wire gate,
    input wire source,
    output wire drain
);
    assign drain = gate ? source : 1'bz;
endmodule`,
      title: "Transistor as a Switch",
      filename: "transistor_switch.v",
    },
  ],
};
```

### Step 2: Register the Article

Edit `src/data/articles/articlesIndex.ts`:

```typescript
import { Article } from "./articleTypes";
import { transistorsArticle } from "./fundamentals/transistors"; // Add this

export const allArticles: Article[] = [
  transistorsArticle, // Add this
];
```

### Step 3: Test It Out

1. Save both files
2. Navigate to http://localhost:3000/courses
3. Click on "Fundamentals & Building Blocks"
4. Click on "Transistors (BJT, MOSFET)"
5. Your article should appear!

## 🎨 Adding Diagrams

### Step 1: Create or Find Your Diagram

Use any tool (Draw.io, PowerPoint, etc.) to create your diagram.

### Step 2: Export and Save

1. Export as PNG or SVG
2. Save to: `public/images/fundamentals/transistors/`
3. Name it descriptively: `npn-bjt-structure.png`

### Step 3: Reference in Article

Add to your article's `diagrams` array:

```typescript
diagrams: [
  {
    src: '/images/fundamentals/transistors/npn-bjt-structure.png',
    alt: 'NPN BJT Structure',
    caption: 'Structure of an NPN Bipolar Junction Transistor showing Emitter, Base, and Collector',
    width: '600px',
  },
],
```

## 📝 Content Creation Workflow

### Recommended Process

1. **Plan Your Topic**
   - Choose from course structure
   - List key concepts to cover
   - Gather reference materials

2. **Write Content**
   - Start with introduction
   - Break into logical sections
   - Write in clear, simple language

3. **Create Visuals**
   - Make diagrams for complex concepts
   - Prepare code examples
   - Take screenshots if needed

4. **Add Code Examples**
   - Write working Verilog/SystemVerilog
   - Test code before adding
   - Include comments

5. **Document Pitfalls**
   - Note common mistakes
   - Show wrong vs. right approaches
   - Explain why mistakes happen

6. **Add Best Practices**
   - Industry standards
   - Design patterns
   - Optimization tips

7. **Include Research**
   - Find relevant papers
   - Add proper citations
   - Summarize key findings

8. **Review and Polish**
   - Check for errors
   - Verify all links work
   - Test on localhost

## 🔧 Development Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests (if you add them)
npm test

# Check TypeScript types
npx tsc --noEmit
```

## 📂 Important Files

- **Course Structure**: `src/data/navigation/courseStructure.ts`
- **Article Types**: `src/data/articles/articleTypes.ts`
- **Article Index**: `src/data/articles/articlesIndex.ts`
- **Routing**: `src/App.tsx`
- **Styling**: Component CSS files

## 🎯 Next Steps

1. **Create your first article** following the guide above
2. **Add diagrams** to make content visual
3. **Write more articles** - build out topics sequentially
4. **Customize styling** to match your preferences
5. **Add search functionality** (already scaffolded)
6. **Deploy** when ready (see deployment guide)

## 🚢 Deploying Your Site

### Option 1: GitHub Pages

1. Add to `package.json`:

   ```json
   "homepage": "https://yourusername.github.io/project-name"
   ```

2. Install gh-pages:

   ```bash
   npm install --save-dev gh-pages
   ```

3. Add deploy scripts to `package.json`:

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### Option 2: Netlify

1. Build your site: `npm run build`
2. Drag the `build` folder to Netlify
3. Or connect your Git repository for auto-deployment

### Option 3: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

## ❓ Common Issues

### Article Not Showing

- Check it's imported in `articlesIndex.ts`
- Verify slug names match `courseStructure.ts`
- Look for TypeScript errors

### Images Not Loading

- Ensure images are in `/public/images/`
- Check file path is correct (case-sensitive)
- Verify file extension

### Styling Issues

- Clear browser cache
- Check CSS syntax
- Look for conflicting styles

## 📚 Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Router](https://reactrouter.com)
- [Verilog Reference](https://verilog.renerta.com/)

## 💡 Tips

- Start small - one article at a time
- Use the template as a guide
- Keep content organized
- Commit changes frequently
- Test on different devices
- Get feedback from others

---

Happy content creation! 🎉
