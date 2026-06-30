import { Article } from "../articleTypes";

export const transistorsArticle: Article = {
  id: "transistors-intro",
  topicSlug: "fundamentals",
  subtopicSlug: "transistors",
  title: "Introduction to Transistors",
  description:
    "Understanding the fundamental building blocks of digital electronics - MOSFET transistors.",
  lastUpdated: "2026-06-29",
  readTime: 10,
  tags: ["Transistors", "MOSFET", "Fundamentals", "Electronics"],

  introduction:
    "Transistors are the fundamental building blocks of all modern digital electronics. In this article, we will explore how they work and why they are so important.",

  sections: [
    {
      id: "overview",
      title: "What is a Transistor?",
      content: `
        <p>A transistor is a semiconductor device used to amplify or switch electronic signals and electrical power. It is composed of semiconductor material with at least three terminals for connection to an external circuit.</p>
        <p>The main type of transistor we'll focus on is:</p>
        <ul>
          <li><strong>MOSFET (Metal-Oxide-Semiconductor Field-Effect Transistor)</strong> - Voltage-controlled device</li>
        </ul>
      `,
    },
    {
      id: "mosfet-transistors",
      title: "MOSFET Transistors",
      content: `
        <p>Metal Oxide Field Effect Transistors consist of three layers of semiconductor material. They come in two configurations:</p>
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
