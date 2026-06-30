import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CodeSnippet as CodeSnippetType } from "../../data/articles/articleTypes";
import "./CodeSnippet.css";

interface CodeSnippetProps {
  snippet: CodeSnippetType;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ snippet }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-snippet">
      {(snippet.title || snippet.filename) && (
        <div className="code-header">
          <span className="code-title">
            {snippet.filename && (
              <span className="filename">📄 {snippet.filename}</span>
            )}
            {snippet.title && !snippet.filename && snippet.title}
          </span>
          <button className="copy-button" onClick={handleCopy}>
            {copied ? "✓ Copied!" : "📋 Copy"}
          </button>
        </div>
      )}
      <SyntaxHighlighter
        language={snippet.language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          borderRadius:
            snippet.title || snippet.filename ? "0 0 6px 6px" : "6px",
        }}
        showLineNumbers
      >
        {snippet.code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;
