"use client";

import React from "react";
import { motion } from "framer-motion";

interface IAnimateLTR {
  children: React.ReactNode;
  delay?: number;
}

export const AnimateLTR: React.FC<IAnimateLTR> = ({ children }) => {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        delay: 0.3,
        duration: 1,
        type: "tween",
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
