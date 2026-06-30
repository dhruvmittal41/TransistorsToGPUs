import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="breadcrumb">
      <Link to="/" className="breadcrumb-item">
        Home
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span className="breadcrumb-separator">/</span>
          {index === items.length - 1 ? (
            <span className="breadcrumb-item current">{item.label}</span>
          ) : (
            <Link to={item.path} className="breadcrumb-item">
              {item.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
