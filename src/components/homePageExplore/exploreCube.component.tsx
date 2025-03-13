"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import cubeImage from "../../assets/shapes/cube.svg";
import { useMediaQuery } from "@mui/material";

export const ExploreCube = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const [hookedYPosition, setHookedYPosition] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setHookedYPosition(latest);
  });

  const matches = useMediaQuery("(max-width: 600px)");

  return (
    <motion.div
      ref={ref}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-center",
        width: "100%",
        height: matches ? "30vh" : "100%", // Adjust this height as needed
        transformOrigin: "center",
      }}
      animate={{
        rotate: hookedYPosition * 360,
      }}
      transition={{
        type: "tween",
      }}
    >
      <Image src={cubeImage} 
      unoptimized // Disable srcset and use src only
      alt="home-explore" />
    </motion.div>
  );
};
