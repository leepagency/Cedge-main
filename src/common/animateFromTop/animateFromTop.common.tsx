"use client";

import React from "react";
import { motion } from "framer-motion";

interface IAnimateLTR {
  children: React.ReactNode;
  delay?: number;
}

export const AnimateFromTop: React.FC<IAnimateLTR> = ({ children }) => {
  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
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
