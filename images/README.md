# Images Directory

Place all your diagrams, screenshots, and visual content here.

## Structure

Organize images by topic to match the course structure:

```
images/
├── fundamentals/
│   ├── transistors/          # Transistor diagrams, schematics
│   ├── logic-gates/          # Logic gate symbols, truth tables
│   ├── combinational-circuits/
│   └── sequential-circuits/
├── digital-logic/            # Boolean algebra, K-maps
├── verilog-hdl/             # HDL examples, waveforms
├── basic-architecture/      # CPU diagrams, datapaths
├── pipelining/              # Pipeline diagrams
├── memory-hierarchy/        # Cache diagrams, memory organization
├── parallel-architecture/   # Parallel processing diagrams
├── gpu-architecture/        # GPU block diagrams
├── modern-gpus/            # Modern GPU architectures
├── ai-accelerators/        # TPU, custom ASIC diagrams
├── advanced-topics/        # Misc advanced topics
└── research-papers/        # Paper figures (with proper attribution)
```

## Image Guidelines

- **Format**: PNG or SVG preferred
- **Resolution**: At least 800px wide for diagrams
- **File naming**: Use lowercase with hyphens (e.g., `cache-hierarchy-diagram.png`)
- **Size**: Optimize images to keep under 500KB when possible
- **Attribution**: If using images from papers/sources, note in filename or add attribution file

## Tools for Creating Diagrams

- Draw.io (free, web-based)
- Lucidchart
- PowerPoint/Keynote
- Inkscape (SVG editor)
- TikZ (LaTeX)

## Reference in Articles

Use the relative path from public directory:

```typescript
diagrams: [
  {
    src: "/images/fundamentals/transistors/npn-structure.png",
    alt: "NPN Transistor Structure",
    caption: "Basic structure of an NPN transistor",
  },
];
```
