import "./styles.scss";

import React from "react";

interface MainCardsGridProps {
  children: React.ReactNode;
  className?: string;
}

export const MainCardsGrid: React.FC<MainCardsGridProps> = ({
  children,
  className,
}) => {
  return <div className={`main-cards-grid ${className}`}>{children}</div>;
};
