import "./styles.scss";

import { ArrowLeftIcon } from "@/assets";
import Link from "next/link";
import React from "react";
import { Stack } from "@mui/material";
import { useTranslations } from "next-intl";

interface ListCardProps {
  image: string;
  title?: string;
  id: string;
  slug: string;
  cardFor: string;
  className?: string;
}

export const ListCard: React.FC<ListCardProps> = ({ image,slug, cardFor, title, className }) => {
  const t = useTranslations("commons");
  return (
    <Stack
      className={`custom-card-container ${className}`}
      sx={{
        background: `url(${image})`,
      }}
    >
      <Link href={`${cardFor}/${slug}`} className="-custom-card-link">
        <h3 className="--card-title">{title}</h3>
        <p className="--card-explore">
          <span>{t("explore")}</span>
          <ArrowLeftIcon />
        </p>
      </Link>
    </Stack>
  );
};
