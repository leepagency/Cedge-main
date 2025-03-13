import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { ArcBoxes } from ".";
import arcImage from "../../assets/shapes/c-shape.png";
import "./styles.scss";
import { useLocale } from "next-intl";
import { IHomeCard } from "@/types";
type Props = {
  cards: IHomeCard[];
  setContent: Dispatch<
    SetStateAction<{
      title: string;
      description: string;
    }>
  >;
};

export const ArcImage: React.FC<Props> = ({ setContent, cards }) => {
  const locale = useLocale();

  return (
    <div className={`image-container ${locale === "ar" ? "rotate" : null}`}>
      <Image src={arcImage}
      unoptimized // Disable srcset and use src only
      alt="arc" />
      <ArcBoxes setContent={setContent} cards={cards} />
    </div>
  );
};
