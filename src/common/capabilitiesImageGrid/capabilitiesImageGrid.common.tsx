"use client";

import "./styles.scss";

import { ICapability } from "@/types";
import { ListCard } from "../listCard";
import { MainTitle } from "../mainTitle";
import React from "react";
import { addIndexStyle } from "@/constants";
import { useTranslations } from "next-intl";

interface CapabilitiesImageGridProps {
  items: ICapability[];
  mainTitle?: string;
}

export const CapabilitiesImageGrid: React.FC<CapabilitiesImageGridProps> = ({ items, mainTitle }) => {
  const t = useTranslations("capabilities");
  return (
    <>
      <MainTitle title={mainTitle ? mainTitle : t("list-of-capabilities")} className="small-title" />

      <div className="capabilities-grid-container">
        {items.map((item, index) => (
          <ListCard
            key={index}
            cardFor="services"
            id={String(item.id)}
            slug={String(item.slug)}
            image={item.section_one.image}
            title={item.name}
            className={`list-card-${addIndexStyle(items.length, 8, index)}`}
          />
        ))}
      </div>
    </>
  );
};
