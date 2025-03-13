"use client";

import React from "react";
import { motion } from "framer-motion";

export const BgWave = () => {
  return (
    <motion.div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        backgroundImage: "linear-gradient(90deg, #FFD3A5 0%, #FFAA85 100%)",
        borderRadius: "1.5rem",
      }}
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
    />
  );
};
