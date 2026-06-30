import { Article } from "../articleTypes";

export const historyArticle: Article = {
  id: "history",
  topicSlug: "fundamentals",
  subtopicSlug: "history",

  title: "A Brief Historical Perspective",
  description:
    "The best way to understand something is by looking at the history of it, this article covers a brief overview of the history of development of computers as one must ask why a computer was invented at all? what was it that drove researchers at that time to build such a machine?. Questions like this advent curiousity in the reader and also increases attention for learning things.",

  lastUpdated: "2026-07-29",
  readTime: 10,
  tags: ["history"],

  introduction: `Study the past if you would define the future  ~ Confucius, 460 BCE`,

  sections: [
    {
      id: "overview",
      title: "Overview",
      content: `
        <p>We humans have always worked on betterment of our lives and since every problem is the advent of a new invention, early thinkers encountered or revolved around a major question that led to the need for such a machine that we call a COMPUTER</p>
        <br><p>Ofcourse we abstract our incapabilities as "betterment of our lives".  ('<b>ABSTRACTION</b>' hmmm interesting word isn't it)</p>
        <br>
        <p><b><i>How can we make calculations and information processing faster, more accurately, and without relying on human mental effort?</i></b></p>
        <br>
        <p>Getting to computer was not a simple eureka moment, it started with simple mechanical devices and slowly led to what we see today.</p>
        <br><ul>
          <li>
          <b>The ABACUS : </b> One of the earliest calculating machine, it was developed nearly 2400 years ago and still taught to children to improve calculation and problem solving skills. It allowed addidtion, subtraction, multiplication and division but waas still controlled completely by a human.
          </li>
          <br>
          <div style="text-align: center;">
          <img src="${process.env.PUBLIC_URL}/images/fundamentals/history/RomanAbacusRecon.png" alt="Roman Abacus" style="max-width: 100%; height: auto;">
          <br><i>*Roman Abacus</i>
          </div>
          This led to another idea : <br>
          <div style="text-align : center;">
          <b><i>What if a machine could perform calculations by itself?</i></b>
          </div>
          <br>
          <li>
          <b>PASCALINE : </b> Developed by <b>Blaise Pascal in 1645</b> was a simple mechanical calculator that he made to reduce the tiring work of taxes calculation for his accountant father. 
          </li>
          <br>
          <div style="text-align: center;">
          <img src="${process.env.PUBLIC_URL}/images/fundamentals/history/Pascaline.jpg" alt="Pascaline" style="max-width: 100%; height: auto;">
          <br><i>*Pascaline</i>
          </div>
          <br>
          <li>
            <b>Difference Engine :</b> Developed by Charles Babbage in 1822, It was designed to automatically calculate mathematical tables.
          </li>
          <br>
          <div style="text-align: center;">
          <img src="${process.env.PUBLIC_URL}/images/fundamentals/history/Babbage_Difference_Engine.jpg" alt="Babbage Difference Engine" style="max-width: 600px; height: auto; width: 100%;">
          <br><i>*Difference Engine</i>
          </div>
          <br>
          <li>
            <b>Analytical Engine :</b> Designed by Charles Babbage, it was a mechanical computer having concepts of modern CPUs like Memory, Programs etc.
          </li>
          <br>
          <div style="text-align: center;">
          <img src="${process.env.PUBLIC_URL}/images/fundamentals/history/Babbages_Analytical_Engine.jpg" alt="Babbage Analytical Engine" style="max-width: 600px; height: auto; width: 100%;">
          <br><i>*Analytical Engine</i>
          </div>
          <br>
        </ul>
      `,

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

  furtherReading: [
    "Book: Digital Design and Computer Architecture by Harris & Harris",
    "Book: Computer Organization and Design by Patterson & Hennessy",
    "Online Resource: https://example.com/tutorial",
    "Documentation: Official Verilog IEEE Standard",
  ],

  nextArticle: {
    slug: "/topic/fundamentals/transistors",
    title: "Transistors",
  },
};
