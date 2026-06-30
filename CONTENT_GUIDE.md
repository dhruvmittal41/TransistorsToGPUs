# Content Creation Guide

This guide will help you create and organize content for your educational website.

## 📝 Content Organization

### Directory Structure for Content

```
public/
├── images/
│   ├── fundamentals/
│   │   ├── transistors/
│   │   ├── logic-gates/
│   │   └── ...
│   ├── digital-logic/
│   ├── gpu-architecture/
│   └── ...
└── assets/

src/data/articles/
├── articleTypes.ts           # Type definitions (already created)
├── articlesIndex.ts          # Article registry (already created)
├── fundamentals/
│   ├── transistors.ts
│   ├── logic-gates.ts
│   └── ...
├── digital-logic/
├── gpu-architecture/
└── ...
```

## ✍️ Writing an Article

### Step-by-Step Process

1. **Choose a topic** from the course structure
2. **Create a new file** in the appropriate data directory
3. **Write your content** following the template
4. **Add images** to the public/images directory
5. **Register the article** in articlesIndex.ts
6. **Test locally** before committing

### Article Template

```typescript
import { Article } from "../articleTypes";

export const yourArticle: Article = {
  // Basic Info
  id: "unique-article-id",
  topicSlug: "fundamentals", // Must match courseStructure.ts
  subtopicSlug: "transistors", // Must match courseStructure.ts
  title: "Introduction to Transistors",
  description: "A brief description that appears in previews",
  lastUpdated: "2024-01-15",
  readTime: 12, // Estimated minutes
  tags: ["transistors", "bjt", "mosfet", "fundamentals"],

  // Introduction (optional)
  introduction: "A compelling introduction paragraph...",

  // Main Content Sections
  sections: [
    {
      id: "what-is-transistor",
      title: "What is a Transistor?",
      content: `
        <p>Your content here with HTML formatting...</p>
        <p>You can include multiple paragraphs.</p>
        <ul>
          <li>Bullet points</li>
          <li>Work great</li>
        </ul>
      `,
      subsections: [
        {
          id: "bjt-basics",
          title: "BJT Transistors",
          content: "<p>Subsection content...</p>",
        },
      ],
    },
  ],

  // Code Examples
  codeSnippets: [
    {
      language: "verilog",
      code: `module nand_gate(
    input wire a,
    input wire b,
    output wire y
);
    assign y = ~(a & b);
endmodule`,
      title: "NAND Gate Implementation",
      filename: "nand_gate.v",
    },
  ],

  // Diagrams
  diagrams: [
    {
      src: "/images/fundamentals/transistors/npn-structure.png",
      alt: "NPN Transistor Structure",
      caption: "Basic structure of an NPN bipolar junction transistor",
      width: "600px",
    },
  ],

  // Common Pitfalls
  commonPitfalls: [
    {
      title: "Forgetting Pull-up/Pull-down Resistors",
      description: "A common mistake is leaving inputs floating...",
      wrongExample: {
        language: "verilog",
        code: "// Wrong: Floating input\ninput wire button;",
      },
      correctExample: {
        language: "verilog",
        code: "// Correct: With pull-up\ninput wire button;\nassign button = (external_input) ? 1'b0 : 1'b1;",
      },
    },
  ],

  // Best Practices
  bestPractices: [
    {
      title: "Use Meaningful Signal Names",
      description: "Always use descriptive names for signals...",
      example: {
        language: "verilog",
        code: "// Good naming\nwire cache_hit;\nwire memory_ready;",
      },
    },
  ],

  // Research Papers
  researchPapers: [
    {
      title: "The Original MOSFET Paper",
      authors: ["John Doe", "Jane Smith"],
      year: 1960,
      venue: "IEEE Transactions on Electron Devices",
      doi: "10.1109/example",
      url: "https://ieeexplore.ieee.org/...",
      summary: "This paper introduced the concept of...",
    },
  ],

  // Further Reading
  furtherReading: [
    "Digital Design and Computer Architecture by Harris & Harris",
    "Computer Organization and Design by Patterson & Hennessy",
  ],

  // Navigation (optional - for sequential learning)
  prevArticle: {
    slug: "/topic/fundamentals/logic-gates",
    title: "Logic Gates",
  },
  nextArticle: {
    slug: "/topic/fundamentals/combinational-circuits",
    title: "Combinational Circuits",
  },
};
```

## 🎨 Creating Diagrams

### Tools Recommendations

1. **Draw.io** - Free, web-based, exports PNG/SVG
2. **Lucidchart** - Professional diagramming
3. **PowerPoint/Keynote** - Quick diagrams
4. **Inkscape** - Vector graphics
5. **TikZ** - For LaTeX users

### Diagram Guidelines

- Use consistent colors and styles
- Keep diagrams simple and focused
- Add clear labels
- Export as PNG (high DPI) or SVG
- Recommended size: 800-1200px wide
- Name files descriptively: `cache-hierarchy-diagram.png`

### Diagram Organization

```
public/images/
├── fundamentals/
│   ├── transistors/
│   │   ├── npn-structure.png
│   │   ├── pnp-structure.png
│   │   └── mosfet-operation.png
│   ├── logic-gates/
│   │   ├── and-gate-symbol.png
│   │   ├── truth-table.png
│   │   └── cmos-implementation.png
```

## 💻 Writing Code Examples

### Verilog Best Practices

```verilog
// Always include comments
// Use consistent indentation (2 or 4 spaces)
// Name your modules descriptively

module alu_8bit (
    input  wire [7:0] a,
    input  wire [7:0] b,
    input  wire [2:0] opcode,
    output reg  [7:0] result,
    output wire       zero_flag
);
    // Implementation...
endmodule
```

### SystemVerilog Examples

```systemverilog
// Show modern features
class Transaction;
    rand bit [7:0] data;
    rand bit [3:0] addr;

    constraint addr_range {
        addr inside {[0:15]};
    }
endclass
```

### Supported Languages

The syntax highlighter supports:

- `verilog`
- `systemverilog`
- `c`, `cpp`
- `python`
- `javascript`, `typescript`
- `bash`
- Many more...

## 📚 Research Paper Section

### How to Add Papers

1. Find the official citation
2. Get the DOI if available
3. Link to IEEE Xplore, ACM Digital Library, or arXiv
4. Write a brief summary (2-3 sentences)
5. Explain why it's relevant

### Paper Categories

- **Classic Papers**: Foundational work (pre-2000)
- **GPU Papers**: Graphics and parallel computing
- **AI Hardware**: Accelerators and specialized designs
- **Memory Systems**: Cache, DRAM, NVM
- **Industry Case Studies**: Commercial architectures

## ✅ Content Checklist

Before publishing an article, ensure:

- [ ] Article is registered in `articlesIndex.ts`
- [ ] All images are optimized and placed in `/public/images/`
- [ ] Code examples are tested and correct
- [ ] No spelling or grammar errors
- [ ] Diagrams have alt text and captions
- [ ] Research papers have proper citations
- [ ] Read time is estimated
- [ ] Tags are relevant
- [ ] Previous/next article links are correct (if applicable)

## 🔄 Updating Content

To update existing content:

1. Find the article file in `src/data/articles/`
2. Edit the content
3. Update the `lastUpdated` date
4. Test locally
5. Commit changes

## 🎯 Content Strategy

### Recommended Order

1. Start with fundamentals (transistors, logic gates)
2. Build up to digital logic design
3. Add HDL content with code examples
4. Cover basic architecture
5. Progress to advanced topics
6. Add GPU and AI accelerator content last

### Content Depth

- **Beginner-friendly**: Start with basics
- **Progressive complexity**: Build on previous topics
- **Practical examples**: Always include working code
- **Visual aids**: Use diagrams liberally
- **Real-world context**: Connect to actual hardware

## 💡 Tips for Great Content

1. **Explain like teaching**: Imagine explaining to someone new
2. **Use analogies**: Make complex concepts relatable
3. **Show, don't just tell**: Include examples
4. **Anticipate confusion**: Address common misunderstandings
5. **Link concepts**: Reference related topics
6. **Keep it current**: Update as technology evolves
7. **Be honest**: Share what you find difficult too

## 🐛 Troubleshooting

### Article Not Showing Up

- Check that it's added to `articlesIndex.ts`
- Verify `topicSlug` and `subtopicSlug` match `courseStructure.ts`
- Ensure no syntax errors in the article file

### Images Not Loading

- Check file path (case-sensitive)
- Ensure image is in `/public/images/`
- Verify image file extension

### Code Not Highlighting

- Check language identifier is correct
- Ensure code string is properly escaped
- Look for syntax errors in code block

## 📧 Questions?

If you need help with content creation, refer to:

- Example articles in the data directory
- React documentation for components
- TypeScript documentation for types
