"use client";

import { motion } from "framer-motion";
import React from "react";
import "./styles.scss";

interface ArcBoxProps {
  title: string;
  className: string;
  selected: boolean;
  onClick: () => void;
  variants: {
    animate: {
      scale: number;
      transition: {
        staggerChildren: number;
      };
    };
  };
}

const ArcBoxNotMemoized: React.FC<ArcBoxProps> = ({ title, className, onClick, selected, variants }) => {
  return (
    <motion.div
      variants={variants}
      initial={{
        scale: 0,
      }}
      className={`${className} ${selected ? "active" : ""}`}
      onClick={onClick}
      drag
      dragConstraints={{
        top: -10,
        left: -10,
        right: 10,
        bottom: 10,
      }}
    >
      {title}
    </motion.div>
  );
};

export const ArcBox = React.memo(ArcBoxNotMemoized);
