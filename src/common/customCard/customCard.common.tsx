import "./styles.scss";

import Image, { StaticImageData } from "next/image";

import Link from "next/link";
import React from "react";
import { Stack } from "@mui/material";
import { useLocale } from "next-intl";

// import { useTranslations } from "next-intl";

// import { ArrowLeftIcon } from "@/assets";

interface CustomCardProps {
  image: string | StaticImageData;
  title: string;
  subTitle?: string;
  id: string;
  slug: string;
  cardFor: string;
  className?: string;
  insight?: boolean;
}

export const CustomCard: React.FC<CustomCardProps> = ({ insight, image, cardFor, title, className,slug }) => {
  // const t = useTranslations("commons");
  const localActive = useLocale();

  const getShorterTitle = (title: string) => {
    return title?.length > 60 ? title?.slice(0, 60) + "..." : title;
  };
  return (
    <Link href={`/${localActive}/${cardFor}/${slug}`} className="custom-card-link">
      <Stack className={`-custom-card-container ${className}`}>
        <Image src={image} alt={title} loading="lazy" unoptimized className="--card-image" width={500} height={500} />
        <h3 className="--card-title">{ insight ? title : title}</h3>
        {/* <p className="--card-sub-title">{subTitle}</p> */}
      </Stack>
    </Link>
  );
};
