import React from "react";
import { Diagram } from "../../data/articles/articleTypes";
import "./DiagramView.css";

interface DiagramViewProps {
  diagram: Diagram;
}

const DiagramView: React.FC<DiagramViewProps> = ({ diagram }) => {
  return (
    <figure className="diagram-view">
      <img
        src={diagram.src}
        alt={diagram.alt}
        style={{ width: diagram.width || "100%" }}
        className="diagram-image"
      />
      {diagram.caption && (
        <figcaption className="diagram-caption">{diagram.caption}</figcaption>
      )}
    </figure>
  );
};

export default DiagramView;
