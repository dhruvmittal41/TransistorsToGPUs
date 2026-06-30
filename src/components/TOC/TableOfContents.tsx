import React, { useEffect, useState } from "react";
import "./TableOfContents.css";

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  sections: TOCItem[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="table-of-contents">
      <h3>On This Page</h3>
      <ul>
        {sections.map((section) => (
          <li
            key={section.id}
            className={`toc-item level-${section.level} ${
              activeSection === section.id ? "active" : ""
            }`}
          >
            <a onClick={() => handleClick(section.id)}>{section.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
