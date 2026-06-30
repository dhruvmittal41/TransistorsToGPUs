import React from "react";
import { BookIcon, ChipIcon, DatabaseIcon } from "../../components/Icons/Icons";
import "./ResearchPage.css";

const ResearchPage: React.FC = () => {
  return (
    <div className="research-page">
      <header className="research-header">
        <h1>Research Papers & Case Studies</h1>
        <p>
          Key academic papers and industry insights in computer architecture
        </p>
      </header>

      <div className="research-content">
        <section className="research-section">
          <h2>
            <BookIcon size={24} className="section-icon" /> Classic Papers
          </h2>
          <p>Foundational research papers that shaped computer architecture</p>
          <div className="papers-placeholder">
            <p>Papers will be organized by category and include:</p>
            <ul>
              <li>Paper title and authors</li>
              <li>Publication venue and year</li>
              <li>Key contributions and findings</li>
              <li>Links to full papers</li>
              <li>Personal notes and insights</li>
            </ul>
          </div>
        </section>

        <section className="research-section">
          <h2>
            <ChipIcon size={24} className="section-icon" /> GPU Architecture
            Papers
          </h2>
          <p>Research on GPU design and parallel computing</p>
          <div className="papers-placeholder">
            <p>This section will cover GPU-specific research including:</p>
            <ul>
              <li>Graphics pipeline evolution</li>
              <li>GPGPU computing</li>
              <li>Memory hierarchy optimizations</li>
              <li>Warp scheduling algorithms</li>
            </ul>
          </div>
        </section>

        <section className="research-section">
          <h2>
            <ChipIcon size={24} className="section-icon" /> AI Hardware Papers
          </h2>
          <p>Research on AI accelerators and specialized hardware</p>
          <div className="papers-placeholder">
            <p>Coverage of accelerator architectures:</p>
            <ul>
              <li>TPU and systolic array designs</li>
              <li>Dataflow architectures</li>
              <li>Neural network specific optimizations</li>
              <li>Energy-efficient AI hardware</li>
            </ul>
          </div>
        </section>

        <section className="research-section">
          <h2>
            <DatabaseIcon size={24} className="section-icon" /> Memory System
            Papers
          </h2>
          <p>Research on cache hierarchies and memory optimization</p>
          <div className="papers-placeholder">
            <p>Papers on memory systems including:</p>
            <ul>
              <li>Cache coherence protocols</li>
              <li>Memory consistency models</li>
              <li>Non-volatile memory architectures</li>
              <li>Memory bandwidth optimizations</li>
            </ul>
          </div>
        </section>

        <section className="research-section">
          <h2>
            <BookIcon size={24} className="section-icon" /> Industry Case
            Studies
          </h2>
          <p>Real-world implementations and architectural decisions</p>
          <div className="papers-placeholder">
            <p>Analysis of commercial architectures:</p>
            <ul>
              <li>NVIDIA GPU generations</li>
              <li>Apple Silicon designs</li>
              <li>AMD RDNA/CDNA</li>
              <li>Intel Xe architectures</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResearchPage;
