"use client";

import "./styles.scss";

import Image from "next/image";
import React from "react";
import { Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useScrollRotate } from "@/hooks";

interface PrincipleCardProps {
  image: string;
  reverse?: boolean;
  title: string;
  description: string;
}

export const PrincipleCard: React.FC<PrincipleCardProps> = ({ image, title, description, reverse }) => {
  const { ref, hookedYPostion } = useScrollRotate();
  return (
    <Stack className="principle-card" bgcolor={reverse ? "#0D0D17" : ""}>
      <motion.div
        ref={ref}
        animate={{
          rotate: hookedYPostion * (reverse ? -360 : 360),
        }}
        transition={{
          type: "tween",
        }}
      >
        <Image src={image} alt="icon" loading="lazy" 
        unoptimized // Disable srcset and use src only
        width={350} height={350} />
      </motion.div>
      <h3>{title}</h3>
      {/* <p>{description}</p> */}
      <div
        dangerouslySetInnerHTML={{
          __html: description,
        }}
        style={{padding:"5px 15px"}}
      />
    </Stack>
  );
};
