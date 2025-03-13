"use client";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";

export const useScrollRotate = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const [hookedYPostion, setHookedYPosition] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setHookedYPosition(latest);
  });
  return { ref, hookedYPostion };
};
