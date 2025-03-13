"use client";

import "./styles.scss";

import { ArcMainBox, MainContainer } from "@/common";

import { ArcImage } from ".";
import { IHomeCard } from "@/types";
import Image from "next/image";
import cEdge from "@/assets/shapes/c-edge.svg";
import { useState } from "react";

type Props = {
  cards: IHomeCard[];
};

const HomePageArcContent = ({ cards }: Props) => {
  const [content, setContent] = useState({
    title: cards[0].title1,
    description: cards[0].description1,
  } as {
    title: string;
    description: string;
  });
  return (
    <MainContainer type="center">
      <div className="arc-content-container">
        <ArcImage setContent={setContent} cards={cards} />
        <div className="content-container">
          <div className="content">
            <Image src={cEdge} alt="arc" className="c-image"     
             unoptimized // Disable srcset and use src only
            />
            <ArcMainBox {...content} />
          </div>
        </div>
      </div>
    </MainContainer>
  );
};
export default HomePageArcContent;
