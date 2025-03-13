"use client";

import "./styles.scss";

import React, { Dispatch, SetStateAction, useEffect } from "react";

import { ArcBox } from "@/common";
import { IHomeCard } from "@/types";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { useState } from "react";

type Props = {
  cards: IHomeCard[];
  setContent: Dispatch<
    SetStateAction<{
      title: string;
      description: string;
    }>
  >;
};

export const ArcBoxes: React.FC<Props> = ({ setContent, cards }) => {
  const locale = useLocale();
  const cardData = cards[0] as IHomeCard;

  const [shortTitleValues, setShortTitleValues] = useState<string[]>([]);
  useEffect(() => {
    const shortTitles = Object.keys(cardData)
      .filter((key) => key.startsWith("short_title"))
      .map((cardDataKey) => cardData[cardDataKey]);
    setShortTitleValues(shortTitles);
  }, [cardData]);
  /////////////
  const [titleAndDescription, setTitleAndDescription] = useState<{ title: string; description: string }[]>([]);
  useEffect(() => {
    const newTitleAndDescription: { title: string; description: string }[] = [];
    cards.forEach((card) => {
      Object.keys(card).forEach((key) => {
        if (key.startsWith("title")) {
          const index = key.replace(/\D/g, "");
          const descriptionKey = `description${index}`;
          if (descriptionKey in card) {
            newTitleAndDescription.push({
              title: card[key],
              description: card[descriptionKey],
            });
          }
        }
      });
    });
    setTitleAndDescription(newTitleAndDescription);
  }, [cards]);
  const [selected, setSelected] = useState(0);
  const demoVariants = {
    animate: {
      delay: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <motion.div
      variants={demoVariants}
      whileInView="animate"
      className={`grid-container ${locale === "ar" ? "rotate" : null}`}
      viewport={{
        once: true,
      }}
    >
      {shortTitleValues.map((box, index) => {
        return (
          <ArcBox
            variants={demoVariants}
            selected={selected === index}
            onClick={() => {
              setContent(titleAndDescription[index]);
              setSelected(index);
            }}
            key={index}
            title={box}
            className={`arc-box arc-box-${index + 1}`}
          />
        );
      })}
    </motion.div>
  );
};
