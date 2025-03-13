"use client";

import "./styles.scss";

import Image from "next/image";
import React from "react";
import { Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useScrollRotate } from "@/hooks";

interface AboutVisionMissionProps {
  image: string;
  title: string;
  description: string;
  reverse?: boolean;
  isColumn?: boolean;
  className?: string;
}

export const AboutVisionMission: React.FC<AboutVisionMissionProps> = ({
  image,
  title,
  description,
  reverse,
  isColumn,
  className,
}) => {
  const { ref, hookedYPostion } = useScrollRotate();
  return (
    <div
      className={`about-vision-mission-container ${reverse && "about-vision-mission-container-reverse"} ${
        isColumn && "about-vision-mission-container-column"
      } ${className}`}
      // direction={reverse ? "row-reverse" : "row"}
    >
      <motion.div
        className="-about-vision-mission-image-container"
        ref={ref}
        animate={{
          rotate: hookedYPostion * (reverse ? -360 : 360),
        }}
        transition={{
          type: "tween",
        }}
      >
        <Image
          src={image}
          alt="icon"
          loading="lazy"
          className="--about-vision-mission-image"
          width={300}
          height={300}
        />
      </motion.div>
      <Stack className="-about-vision-mission-content">
        <h2 className="--about-vision-mission-title">{title}</h2>
        {/* <p className="--about-vision-mission-description"></p> */}
        <div className="--about-vision-mission-description" dangerouslySetInnerHTML={{ __html: description }} />
      </Stack>
    </div>
  );
};
