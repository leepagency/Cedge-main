import React from "react";
import "./styles.scss";

interface TopCardGridProps {
  children: React.ReactNode;
}

export const TopCardGrid: React.FC<TopCardGridProps> = ({ children }) => {
  return <div className="top-cards-grid">{children}</div>;
};
