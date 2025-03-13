import React from "react";
import "./styles.scss";

interface TestimonialCardGridProps {
  children: React.ReactNode;
  className?: string;
}

export const TestimonialCardGrid: React.FC<TestimonialCardGridProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`testimonial-cards-grid ${className}`}>{children}</div>
  );
};
