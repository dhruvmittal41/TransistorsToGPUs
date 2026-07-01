import { Project } from "../projectTypes";

export const halfAdderProject: Project = {
  id: "half-adder-verilog",
  slug: "half-adder-verilog",
  title: "Half Adder in SystemVerilog",
  category: "hardware",
  difficulty: "Beginner",

  shortDescription:
    "Build a fundamental half adder circuit using SystemVerilog. Learn the basics of combinational logic and HDL syntax.",

  description: `
    A half adder is one of the most fundamental building blocks in digital electronics. It adds two single binary digits and produces a sum and carry output. This project will teach you how to design, implement, and test a half adder using SystemVerilog.
    
    By building this circuit from scratch, you'll understand how basic arithmetic operations work at the hardware level - the foundation for all computer arithmetic!
  `,

  whatYouWillLearn: [
    "How binary addition works at the gate level",
    "Basic SystemVerilog syntax and module structure",
    "Writing testbenches for verification",
    "Understanding combinational logic design",
    "Reading waveform outputs from simulation",
  ],

  prerequisites: [
    "Basic understanding of binary numbers",
    "Knowledge of AND and XOR logic gates",
    "Familiarity with truth tables",
    "A text editor and HDL simulator installed",
  ],

  technologies: ["SystemVerilog", "Digital Logic", "HDL Simulation"],
  toolsRequired: [
    "ModelSim, Icarus Verilog, or EDA Playground",
    "Text editor (VS Code, Vim, etc.)",
    "GTKWave for waveform viewing (optional)",
  ],

  estimatedTime: "2 hours",
  buildSteps: 5,

  introduction: `
    <p class="quote">"The journey of a thousand miles begins with a single step." - Lao Tzu</p>
    
    <p>In digital design, that first step is the humble half adder. Despite its simplicity, this circuit forms the basis of every arithmetic operation your computer performs billions of times per second.</p>
  `,

  steps: [
    {
      id: "step-1",
      title: "Understanding the Half Adder",
      content: `
        <h3>What is a Half Adder?</h3>
        <p>A half adder adds two single-bit binary numbers (A and B) and produces:</p>
        <ul>
          <li><strong>Sum (S):</strong> The sum bit of the addition</li>
          <li><strong>Carry (C):</strong> The carry bit generated</li>
        </ul>
        
        <h3>Truth Table</h3>
        <table style="margin: 1rem 0; border-collapse: collapse;">
          <thead>
            <tr style="background: var(--color-wood-medium); color: var(--color-parchment-light);">
              <th style="padding: 0.75rem; border: 2px solid var(--color-wood-dark);">A</th>
              <th style="padding: 0.75rem; border: 2px solid var(--color-wood-dark);">B</th>
              <th style="padding: 0.75rem; border: 2px solid var(--color-wood-dark);">Sum (S)</th>
              <th style="padding: 0.75rem; border: 2px solid var(--color-wood-dark);">Carry (C)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 0.5rem; border: 1px solid var(--color-ink-faded);">0</td>
              <td style="padding: 0.5rem; border: 1px solid var(--color-ink-faded);">0</td>
              <td style="padding: 0.5rem; border: 1px solid var(--color-ink-faded);">0</td>
              <td style="padding: 0.5rem; border: 1px solid var(--color-ink-faded);">0</td>
            </tr>
            <tr>
              <td style="padding: 0.5rem; border: 1px solid var(--color-ink-faded);">0</td>
              <td style="padding: 0.5rem; border: 1px solid var(--color-ink-faded);">1</td>
              <td style="padding: 0.5rem; border: 1px solid var(--color-ink-faded);">1</td>
              <td style="padding: 0.5rem; border: 1px solid var(--color-ink-faded);">0</td>
            </tr>
            <tr>
              <td style="padding: 0.5rem; border: 1px solid var(--color-ink-faded);">1</td>
              <td style="padding: 0.5rem; border: 1px solid var(--color-ink-faded);">0</td>
              <td style="padding: 0.5rem; border: 1px solid var(--color-ink-faded);">1</td>
              <td style="padding: 0.5rem; border: 1px solid var(--color-ink-faded);">0</td>
            </tr>
            <tr>
              <td style="padding: 0.5rem; border: 1px solid var(--color-ink-faded);">1</td>
              <td style="padding: 0.5rem; border: 1px solid var(--color-ink-faded);">1</td>
              <td style="padding: 0.5rem; border: 1px solid var(--color-ink-faded);">0</td>
              <td style="padding: 0.5rem; border: 1px solid var(--color-ink-faded);">1</td>
            </tr>
          </tbody>
        </table>
        
        <h3>Logic Equations</h3>
        <p>From the truth table, we can derive:</p>
        <ul>
          <li><strong>Sum = A ⊕ B</strong> (XOR operation)</li>
          <li><strong>Carry = A ∧ B</strong> (AND operation)</li>
        </ul>
        
        <p>This means we need just two gates: one XOR and one AND!</p>
      `,
    },

    {
      id: "step-2",
      title: "Setting Up Your Environment",
      content: `
        <h3>Choose Your Simulator</h3>
        <p>For this project, you can use any of these tools:</p>
        
        <h4>Option 1: EDA Playground (Easiest - No Installation)</h4>
        <ol>
          <li>Go to <a href="https://www.edaplayground.com/" target="_blank">edaplayground.com</a></li>
          <li>Select "SystemVerilog/Verilog" as the language</li>
          <li>Select a simulator (Icarus Verilog or ModelSim)</li>
          <li>You're ready to code!</li>
        </ol>
        
        <h4>Option 2: Icarus Verilog (Local Installation)</h4>
        <pre><code># macOS
brew install icarus-verilog

# Linux (Ubuntu/Debian)
sudo apt-get install iverilog gtkwave

# Windows
# Download from: http://bleyer.org/icarus/</code></pre>
        
        <h4>Option 3: ModelSim (Professional)</h4>
        <p>Download from Intel's website (requires free registration)</p>
        
        <h3>Create Project Directory</h3>
        <pre><code>mkdir half-adder-project
cd half-adder-project
touch half_adder.sv half_adder_tb.sv</code></pre>
      `,
    },

    {
      id: "step-3",
      title: "Writing the Half Adder Module",
      content: `
        <h3>Create the Module</h3>
        <p>Open <code>half_adder.sv</code> and write the following code:</p>
      `,
      codeSnippet: {
        language: "systemverilog",
        filename: "half_adder.sv",
        title: "Half Adder Module",
        code: `// Half Adder Module
// Inputs: a, b (1-bit)
// Outputs: sum, carry (1-bit)

module half_adder (
    input  logic a,      // First input bit
    input  logic b,      // Second input bit
    output logic sum,    // Sum output
    output logic carry   // Carry output
);

    // Combinational logic
    assign sum   = a ^ b;  // XOR gate for sum
    assign carry = a & b;  // AND gate for carry

endmodule`,
      },
    },

    {
      id: "step-4",
      title: "Writing the Testbench",
      content: `
        <h3>Create the Testbench</h3>
        <p>A testbench verifies that our module works correctly by testing all input combinations.</p>
        <p>Open <code>half_adder_tb.sv</code> and add:</p>
      `,
      codeSnippet: {
        language: "systemverilog",
        filename: "half_adder_tb.sv",
        title: "Half Adder Testbench",
        code: `// Testbench for Half Adder
\`timescale 1ns/1ps

module half_adder_tb;
    // Declare signals
    logic a, b;           // Inputs
    logic sum, carry;     // Outputs
    
    // Instantiate the half adder
    half_adder dut (
        .a(a),
        .b(b),
        .sum(sum),
        .carry(carry)
    );
    
    // Test stimulus
    initial begin
        // Display header
        $display("Time\\tA\\tB\\t|\\tSum\\tCarry");
        $display("------------------------------------");
        
        // Test all 4 combinations
        a = 0; b = 0; #10;
        $display("%0t\\t%b\\t%b\\t|\\t%b\\t%b", $time, a, b, sum, carry);
        
        a = 0; b = 1; #10;
        $display("%0t\\t%b\\t%b\\t|\\t%b\\t%b", $time, a, b, sum, carry);
        
        a = 1; b = 0; #10;
        $display("%0t\\t%b\\t%b\\t|\\t%b\\t%b", $time, a, b, sum, carry);
        
        a = 1; b = 1; #10;
        $display("%0t\\t%b\\t%b\\t|\\t%b\\t%b", $time, a, b, sum, carry);
        
        // End simulation
        $display("\\nAll tests completed!");
        $finish;
    end
    
    // Optional: Generate waveform dump
    initial begin
        $dumpfile("half_adder.vcd");
        $dumpvars(0, half_adder_tb);
    end
    
endmodule`,
      },
    },

    {
      id: "step-5",
      title: "Simulate and Verify",
      content: `
        <h3>Run the Simulation</h3>
        
        <h4>Using Icarus Verilog:</h4>
        <pre><code># Compile
iverilog -g2012 -o half_adder_sim half_adder.sv half_adder_tb.sv

# Run simulation
vvp half_adder_sim

# View waveform (optional)
gtkwave half_adder.vcd</code></pre>
        
        <h4>Using EDA Playground:</h4>
        <ol>
          <li>Paste the module code in the left pane</li>
          <li>Paste the testbench in the right pane</li>
          <li>Click "Run"</li>
          <li>View results in the log window</li>
          <li>Click "Open EPWave" to see waveforms</li>
        </ol>
        
        <h3>Expected Output</h3>
        <pre><code>Time    A    B    |    Sum    Carry
------------------------------------
0       0    0    |    0      0
10      0    1    |    1      0
20      1    0    |    1      0
30      1    1    |    0      1

All tests completed!</code></pre>
        
        <h3>Verify the Results</h3>
        <p>Compare the output with our truth table from Step 1. All values should match!</p>
        
        <h3>🎉 Congratulations!</h3>
        <p>You've successfully built and verified a half adder in SystemVerilog!</p>
      `,
    },
  ],

  commonIssues: [
    {
      title: "Compilation Error: Undefined module",
      problem: "Error says 'half_adder' is not defined",
      solution:
        "Make sure both files are in the same directory and you're compiling both files together: iverilog half_adder.sv half_adder_tb.sv",
    },
    {
      title: "No waveform output",
      problem: "$dumpfile and $dumpvars don't generate .vcd file",
      solution:
        "Ensure the initial block with $dumpfile is before the test stimulus block, and check file permissions in your directory.",
    },
    {
      title: "Wrong output values",
      problem: "Sum or carry values don't match truth table",
      solution:
        "Check your logic operators: use ^ for XOR (sum) and & for AND (carry). Also verify you're using 'logic' type, not 'reg'.",
    },
  ],

  extensions: [
    {
      title: "Full Adder",
      description:
        "Extend this to a full adder that accepts a carry-in input. Combine two half adders and an OR gate.",
      difficulty: "Beginner",
    },
    {
      title: "4-bit Ripple Carry Adder",
      description:
        "Chain four full adders to create a 4-bit adder. Learn about propagation delay.",
      difficulty: "Intermediate",
    },
    {
      title: "Synthesize to FPGA",
      description:
        "Load this design onto a real FPGA board (like Basys3) and control it with switches and LEDs.",
      difficulty: "Intermediate",
    },
  ],

  resources: [
    {
      type: "github",
      title: "Complete Project Repository",
      url: "https://github.com/yourusername/half-adder-verilog",
      description: "Full source code with additional examples",
    },
    {
      type: "article",
      title: "Combinational Circuits Course",
      url: "/topic/fundamentals/combinational-circuits",
      description: "Related course material on combinational logic",
    },
    {
      type: "documentation",
      title: "SystemVerilog Reference",
      url: "https://www.chipverify.com/systemverilog/systemverilog-tutorial",
      description: "Complete language reference",
    },
  ],

  relatedArticles: [
    {
      slug: "/topic/fundamentals/logic-gates",
      title: "Logic Gates Fundamentals",
    },
    {
      slug: "/topic/fundamentals/combinational-circuits",
      title: "Combinational Circuit Design",
    },
  ],

  relatedProjects: [
    {
      slug: "full-adder-verilog",
      title: "Full Adder in SystemVerilog",
    },
    {
      slug: "4-bit-alu",
      title: "4-bit ALU Design",
    },
  ],

  featured: true,
  completedDate: "2026-07-01",
  lastUpdated: "2026-07-01",
  tags: ["beginner", "systemverilog", "combinational-logic", "digital-design"],

  thumbnail: "/images/projects/hardware/half-adder-thumb.png",
};
