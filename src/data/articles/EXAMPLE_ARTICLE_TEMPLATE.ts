import { Article } from "./articleTypes";

/**
 * EXAMPLE ARTICLE TEMPLATE
 *
 * Copy this template when creating new articles.
 * Fill in all sections with your content.
 * Delete sections you don't need.
 *
 * File naming: Place in subdirectory matching topic
 * Example: src/data/articles/fundamentals/transistors.ts
 */

export const exampleArticle: Article = {
  // ============================================
  // BASIC INFORMATION (Required)
  // ============================================

  id: "unique-article-id", // Must be unique across all articles
  topicSlug: "fundamentals", // Must match a topic in courseStructure.ts
  subtopicSlug: "transistors", // Must match a subtopic in courseStructure.ts

  title: "Your Article Title Here",
  description:
    "A brief one or two sentence description that will appear in previews and search results.",

  lastUpdated: "2024-01-15", // YYYY-MM-DD format
  readTime: 10, // Estimated reading time in minutes
  tags: ["transistors", "fundamentals", "electronics"], // Relevant keywords

  // ============================================
  // INTRODUCTION (Optional)
  // ============================================

  introduction:
    "A compelling opening paragraph that hooks the reader and provides context for what they will learn.",

  // ============================================
  // MAIN CONTENT SECTIONS (Required)
  // ============================================

  sections: [
    {
      id: "overview", // Unique ID for section (used for anchors)
      title: "Overview",
      content: `
        <p>Your main content here. You can use HTML formatting.</p>
        <p>Multiple paragraphs work great.</p>
        <ul>
          <li>Bullet points</li>
          <li>Are also supported</li>
        </ul>
        <ol>
          <li>Numbered lists</li>
          <li>Work too</li>
        </ol>
        <h4>Subheadings within sections</h4>
        <p>More content...</p>
      `,

      // Optional subsections for more structure
      subsections: [
        {
          id: "subsection-1",
          title: "Subsection Title",
          content: "<p>Subsection content...</p>",
        },
      ],
    },

    {
      id: "theory",
      title: "Theory & Fundamentals",
      content: `
        <p>Detailed explanation of the theory...</p>
        <p>Use this section to explain the "why" behind the concept.</p>
      `,
    },

    {
      id: "implementation",
      title: "Implementation",
      content: `
        <p>How to actually implement or use this concept...</p>
        <p>Practical guidance and steps.</p>
      `,
    },
  ],

  // ============================================
  // CODE EXAMPLES (Optional)
  // ============================================

  codeSnippets: [
    {
      language: "verilog", // Language for syntax highlighting
      code: `// Your Verilog code here
module example(
    input wire clk,
    input wire reset,
    output reg [7:0] count
);
    always @(posedge clk or posedge reset) begin
        if (reset)
            count <= 8'b0;
        else
            count <= count + 1;
    end
endmodule`,
      title: "Simple Counter Example", // Optional
      filename: "counter.v", // Optional
    },

    {
      language: "systemverilog",
      code: `// SystemVerilog example
class Transaction;
    rand bit [7:0] data;
    constraint data_range {
        data inside {[10:100]};
    }
endclass`,
      title: "SystemVerilog Class Example",
    },

    {
      language: "c",
      code: `// C code example
#include <stdio.h>

int main() {
    printf("Hello, Hardware!\\n");
    return 0;
}`,
      title: "C Example",
      filename: "example.c",
    },
  ],

  // ============================================
  // DIAGRAMS (Optional)
  // ============================================

  diagrams: [
    {
      src: "/images/fundamentals/transistors/example-diagram.png",
      alt: "Description for accessibility",
      caption: "A detailed caption explaining what the diagram shows",
      width: "600px", // Optional, defaults to 100%
    },

    {
      src: "/images/fundamentals/transistors/another-diagram.png",
      alt: "Another diagram description",
      caption: "Another informative caption",
    },
  ],

  // ============================================
  // COMMON PITFALLS (Optional but Recommended)
  // ============================================

  commonPitfalls: [
    {
      title: "Pitfall #1: Descriptive Title",
      description:
        "Explain what the common mistake is and why people make it. Be specific and provide context.",

      // Optional: Show wrong example
      wrongExample: {
        language: "verilog",
        code: `// WRONG: Don't do this
always @(a or b) begin
    c = a + b;  // Using blocking assignment in always block
end`,
      },

      // Optional: Show correct example
      correctExample: {
        language: "verilog",
        code: `// CORRECT: Do this instead
always @(a or b) begin
    c <= a + b;  // Non-blocking assignment for sequential logic
end`,
      },
    },

    {
      title: "Pitfall #2: Another Common Mistake",
      description: "Description of another pitfall...",
    },
  ],

  // ============================================
  // BEST PRACTICES (Optional but Recommended)
  // ============================================

  bestPractices: [
    {
      title: "Practice #1: Use Meaningful Names",
      description:
        "Always use descriptive names for signals, modules, and variables. This makes your code self-documenting and easier to maintain.",

      // Optional example
      example: {
        language: "verilog",
        code: `// Good naming convention
wire cache_hit;
wire instruction_ready;
reg [31:0] program_counter;

// Instead of
wire ch;
wire ir;
reg [31:0] pc;`,
      },
    },

    {
      title: "Practice #2: Another Best Practice",
      description: "Description of the practice and why it matters...",
    },
  ],

  // ============================================
  // RESEARCH PAPERS (Optional)
  // ============================================

  researchPapers: [
    {
      title: "Full Title of Research Paper",
      authors: ["First Author", "Second Author", "Third Author"],
      year: 2020,
      venue: "IEEE Transactions on Computers", // Optional
      doi: "10.1109/TC.2020.example", // Optional
      url: "https://ieeexplore.ieee.org/document/...", // Optional
      summary:
        "A brief 2-3 sentence summary of what this paper contributes and why it is relevant to this topic.", // Optional
    },

    {
      title: "Another Important Paper",
      authors: ["Author Name"],
      year: 2018,
      url: "https://arxiv.org/abs/...",
    },
  ],

  // ============================================
  // FURTHER READING (Optional)
  // ============================================

  furtherReading: [
    "Book: Digital Design and Computer Architecture by Harris & Harris",
    "Book: Computer Organization and Design by Patterson & Hennessy",
    "Online Resource: https://example.com/tutorial",
    "Documentation: Official Verilog IEEE Standard",
  ],

  // ============================================
  // NAVIGATION (Optional)
  // ============================================

  // Links to previous and next articles for sequential learning
  prevArticle: {
    slug: "/topic/fundamentals/previous-topic",
    title: "Previous Topic Title",
  },

  nextArticle: {
    slug: "/topic/fundamentals/next-topic",
    title: "Next Topic Title",
  },
};

/**
 * USAGE INSTRUCTIONS:
 *
 * 1. Copy this template to a new file in the appropriate directory
 *    Example: src/data/articles/fundamentals/my-topic.ts
 *
 * 2. Rename the export (exampleArticle -> myTopicArticle)
 *
 * 3. Fill in all the content
 *
 * 4. Import and register in articlesIndex.ts:
 *    import { myTopicArticle } from './fundamentals/my-topic';
 *    export const allArticles: Article[] = [
 *      myTopicArticle,
 *      // ... other articles
 *    ];
 *
 * 5. Test locally by running npm start and navigating to the article
 *
 * TIPS:
 * - Don't include sections you don't need
 * - Code examples should be working, tested code
 * - Diagrams should be clear and well-labeled
 * - Keep descriptions concise but informative
 * - Use consistent formatting and style
 * - Review for spelling and grammar
 * - Test all links before publishing
 */
