// Complete course structure from Transistors to GPUs
export interface Topic {
  id: string;
  title: string;
  slug: string;
  order: number;
  subtopics?: Subtopic[];
}

export interface Subtopic {
  id: string;
  title: string;
  slug: string;
  order: number;
}

export const courseStructure: Topic[] = [
  {
    id: "fundamentals",
    title: "1. Fundamentals & Building Blocks",
    slug: "fundamentals",
    order: 1,
    subtopics: [
      {
        id: "history",
        title: "Historical Perspective",
        slug: "history",
        order: 1,
      },
      {
        id: "transistors",
        title: "Transistors (MOSFET)",
        slug: "transistors",
        order: 2,
      },
      {
        id: "logic-gates",
        title: "Logic Gates",
        slug: "logic-gates",
        order: 3,
      },
      {
        id: "combinational-circuits",
        title: "Combinational Circuits",
        slug: "combinational-circuits",
        order: 4,
      },
      {
        id: "sequential-circuits",
        title: "Sequential Circuits",
        slug: "sequential-circuits",
        order: 5,
      },
      {
        id: "flip-flops-latches",
        title: "Flip-Flops & Latches",
        slug: "flip-flops-latches",
        order: 6,
      },
      {
        id: "timing-analysis",
        title: "Timing Analysis",
        slug: "timing-analysis",
        order: 7,
      },
    ],
  },
  {
    id: "digital-logic",
    title: "2. Digital Logic Design",
    slug: "digital-logic",
    order: 2,
    subtopics: [
      {
        id: "boolean-algebra",
        title: "Boolean Algebra",
        slug: "boolean-algebra",
        order: 1,
      },
      {
        id: "karnaugh-maps",
        title: "Karnaugh Maps",
        slug: "karnaugh-maps",
        order: 2,
      },
      {
        id: "multiplexers-demux",
        title: "Multiplexers & Demultiplexers",
        slug: "multiplexers-demux",
        order: 3,
      },
      {
        id: "encoders-decoders",
        title: "Encoders & Decoders",
        slug: "encoders-decoders",
        order: 4,
      },
      {
        id: "adders-subtractors",
        title: "Adders & Subtractors",
        slug: "adders-subtractors",
        order: 5,
      },
      { id: "alu-design", title: "ALU Design", slug: "alu-design", order: 6 },
      {
        id: "state-machines",
        title: "Finite State Machines",
        slug: "state-machines",
        order: 7,
      },
    ],
  },
  {
    id: "verilog-hdl",
    title: "3. Hardware Description Languages",
    slug: "verilog-hdl",
    order: 3,
    subtopics: [
      {
        id: "verilog-basics",
        title: "Verilog Basics",
        slug: "verilog-basics",
        order: 1,
      },
      {
        id: "systemverilog",
        title: "SystemVerilog",
        slug: "systemverilog",
        order: 2,
      },
      {
        id: "testbenches",
        title: "Writing Testbenches",
        slug: "testbenches",
        order: 3,
      },
      {
        id: "synthesis",
        title: "Synthesis Considerations",
        slug: "synthesis",
        order: 4,
      },
      {
        id: "common-pitfalls",
        title: "Common Pitfalls",
        slug: "common-pitfalls",
        order: 5,
      },
      {
        id: "best-practices",
        title: "Best Practices",
        slug: "best-practices",
        order: 6,
      },
    ],
  },
  {
    id: "basic-architecture",
    title: "4. Basic Computer Architecture",
    slug: "basic-architecture",
    order: 4,
    subtopics: [
      {
        id: "von-neumann",
        title: "Von Neumann Architecture",
        slug: "von-neumann",
        order: 1,
      },
      {
        id: "harvard-arch",
        title: "Harvard Architecture",
        slug: "harvard-arch",
        order: 2,
      },
      {
        id: "instruction-set",
        title: "Instruction Set Architecture (ISA)",
        slug: "instruction-set",
        order: 3,
      },
      {
        id: "risc-vs-cisc",
        title: "RISC vs CISC",
        slug: "risc-vs-cisc",
        order: 4,
      },
      {
        id: "datapath-control",
        title: "Datapath & Control Unit",
        slug: "datapath-control",
        order: 5,
      },
      {
        id: "single-cycle",
        title: "Single-Cycle Processor",
        slug: "single-cycle",
        order: 6,
      },
      {
        id: "multi-cycle",
        title: "Multi-Cycle Processor",
        slug: "multi-cycle",
        order: 7,
      },
    ],
  },
  {
    id: "pipelining",
    title: "5. Pipelining & Performance",
    slug: "pipelining",
    order: 5,
    subtopics: [
      {
        id: "pipeline-basics",
        title: "Pipeline Basics",
        slug: "pipeline-basics",
        order: 1,
      },
      {
        id: "hazards",
        title: "Data, Control & Structural Hazards",
        slug: "hazards",
        order: 2,
      },
      {
        id: "forwarding",
        title: "Forwarding & Bypassing",
        slug: "forwarding",
        order: 3,
      },
      {
        id: "branch-prediction",
        title: "Branch Prediction",
        slug: "branch-prediction",
        order: 4,
      },
      {
        id: "superscalar",
        title: "Superscalar Processors",
        slug: "superscalar",
        order: 5,
      },
      {
        id: "out-of-order",
        title: "Out-of-Order Execution",
        slug: "out-of-order",
        order: 6,
      },
    ],
  },
  {
    id: "memory-hierarchy",
    title: "6. Memory Hierarchy",
    slug: "memory-hierarchy",
    order: 6,
    subtopics: [
      {
        id: "memory-basics",
        title: "Memory Basics (SRAM, DRAM)",
        slug: "memory-basics",
        order: 1,
      },
      {
        id: "cache-organization",
        title: "Cache Organization",
        slug: "cache-organization",
        order: 2,
      },
      {
        id: "cache-policies",
        title: "Cache Replacement Policies",
        slug: "cache-policies",
        order: 3,
      },
      {
        id: "cache-coherence",
        title: "Cache Coherence",
        slug: "cache-coherence",
        order: 4,
      },
      {
        id: "virtual-memory",
        title: "Virtual Memory & TLB",
        slug: "virtual-memory",
        order: 5,
      },
      {
        id: "memory-consistency",
        title: "Memory Consistency Models",
        slug: "memory-consistency",
        order: 6,
      },
    ],
  },
  {
    id: "parallel-architecture",
    title: "7. Parallel Architectures",
    slug: "parallel-architecture",
    order: 7,
    subtopics: [
      {
        id: "ilp",
        title: "Instruction-Level Parallelism",
        slug: "ilp",
        order: 1,
      },
      { id: "vliw", title: "VLIW Architecture", slug: "vliw", order: 2 },
      { id: "simd", title: "SIMD & Vector Processing", slug: "simd", order: 3 },
      {
        id: "multicore",
        title: "Multi-Core Processors",
        slug: "multicore",
        order: 4,
      },
      {
        id: "multithreading",
        title: "Hardware Multithreading",
        slug: "multithreading",
        order: 5,
      },
      {
        id: "interconnects",
        title: "Interconnection Networks",
        slug: "interconnects",
        order: 6,
      },
    ],
  },
  {
    id: "gpu-architecture",
    title: "8. GPU Architecture",
    slug: "gpu-architecture",
    order: 8,
    subtopics: [
      {
        id: "gpu-evolution",
        title: "GPU Evolution",
        slug: "gpu-evolution",
        order: 1,
      },
      {
        id: "gpu-pipeline",
        title: "Graphics Pipeline",
        slug: "gpu-pipeline",
        order: 2,
      },
      {
        id: "cuda-architecture",
        title: "CUDA Architecture",
        slug: "cuda-architecture",
        order: 3,
      },
      {
        id: "streaming-multiprocessors",
        title: "Streaming Multiprocessors",
        slug: "streaming-multiprocessors",
        order: 4,
      },
      {
        id: "gpu-memory",
        title: "GPU Memory Hierarchy",
        slug: "gpu-memory",
        order: 5,
      },
      {
        id: "warp-scheduling",
        title: "Warp Scheduling",
        slug: "warp-scheduling",
        order: 6,
      },
      {
        id: "tensor-cores",
        title: "Tensor Cores",
        slug: "tensor-cores",
        order: 7,
      },
    ],
  },
  {
    id: "modern-gpus",
    title: "9. Modern GPU Architectures",
    slug: "modern-gpus",
    order: 9,
    subtopics: [
      {
        id: "nvidia-arch",
        title: "NVIDIA Architectures (Ampere, Hopper, Blackwell)",
        slug: "nvidia-arch",
        order: 1,
      },
      { id: "amd-arch", title: "AMD RDNA & CDNA", slug: "amd-arch", order: 2 },
      { id: "intel-gpu", title: "Intel Arc & Xe", slug: "intel-gpu", order: 3 },
      {
        id: "gpu-compute",
        title: "GPGPU Computing",
        slug: "gpu-compute",
        order: 4,
      },
      {
        id: "ray-tracing",
        title: "Hardware Ray Tracing",
        slug: "ray-tracing",
        order: 5,
      },
      {
        id: "nvlink",
        title: "NVLink & GPU Interconnects",
        slug: "nvlink",
        order: 6,
      },
    ],
  },
  {
    id: "ai-accelerators",
    title: "10. AI Accelerators & Specialized Hardware",
    slug: "ai-accelerators",
    order: 10,
    subtopics: [
      {
        id: "tpu-architecture",
        title: "Google TPU Architecture",
        slug: "tpu-architecture",
        order: 1,
      },
      {
        id: "systolic-arrays",
        title: "Systolic Arrays",
        slug: "systolic-arrays",
        order: 2,
      },
      {
        id: "neural-engines",
        title: "Apple Neural Engine",
        slug: "neural-engines",
        order: 3,
      },
      {
        id: "custom-asics",
        title: "Custom ASICs for AI",
        slug: "custom-asics",
        order: 4,
      },
      {
        id: "dataflow-architectures",
        title: "Dataflow Architectures",
        slug: "dataflow-architectures",
        order: 5,
      },
      {
        id: "spatial-architectures",
        title: "Spatial Architectures",
        slug: "spatial-architectures",
        order: 6,
      },
      {
        id: "neuromorphic",
        title: "Neuromorphic Computing",
        slug: "neuromorphic",
        order: 7,
      },
    ],
  },
  {
    id: "advanced-topics",
    title: "11. Advanced Topics",
    slug: "advanced-topics",
    order: 11,
    subtopics: [
      {
        id: "power-optimization",
        title: "Power Optimization",
        slug: "power-optimization",
        order: 1,
      },
      {
        id: "thermal-management",
        title: "Thermal Management",
        slug: "thermal-management",
        order: 2,
      },
      {
        id: "security-hardware",
        title: "Hardware Security",
        slug: "security-hardware",
        order: 3,
      },
      {
        id: "verification",
        title: "Hardware Verification",
        slug: "verification",
        order: 4,
      },
      {
        id: "fpga-design",
        title: "FPGA Design",
        slug: "fpga-design",
        order: 5,
      },
      {
        id: "emerging-tech",
        title: "Emerging Technologies",
        slug: "emerging-tech",
        order: 6,
      },
    ],
  },
  {
    id: "research-papers",
    title: "12. Research Papers & Case Studies",
    slug: "research-papers",
    order: 12,
    subtopics: [
      {
        id: "classic-papers",
        title: "Classic Papers",
        slug: "classic-papers",
        order: 1,
      },
      {
        id: "gpu-papers",
        title: "GPU Architecture Papers",
        slug: "gpu-papers",
        order: 2,
      },
      {
        id: "ai-hardware-papers",
        title: "AI Hardware Papers",
        slug: "ai-hardware-papers",
        order: 3,
      },
      {
        id: "memory-papers",
        title: "Memory System Papers",
        slug: "memory-papers",
        order: 4,
      },
      {
        id: "case-studies",
        title: "Industry Case Studies",
        slug: "case-studies",
        order: 5,
      },
    ],
  },
];

export const getTopicBySlug = (slug: string): Topic | undefined => {
  return courseStructure.find((topic) => topic.slug === slug);
};

export const getSubtopicBySlug = (
  topicSlug: string,
  subtopicSlug: string,
): Subtopic | undefined => {
  const topic = getTopicBySlug(topicSlug);
  return topic?.subtopics?.find((subtopic) => subtopic.slug === subtopicSlug);
};
