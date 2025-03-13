import "./styles.scss";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Stack } from "@mui/material";
import { useTranslations } from "next-intl";

interface BlogCardProps {
  image: string;
  title: string;
  date: string;
  description: string;
  isFeaturedAticle?: boolean;
  isPositionAbsolute?: boolean;
  id: string;
  slug:string;
}
export const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  description,
  isFeaturedAticle,
  isPositionAbsolute,
  date,
  slug,
}) => {
  const t = useTranslations("commons");
  return (
    <Link
      href={`blog/${slug}`}
      style={{
        position: isPositionAbsolute ? "absolute" : "static",
      }}
      className="blog-card-wrapper"
    >
      <div className="blog-card-container">
        {/* TODO optimize */}
        <Image src={image} alt={title} unoptimized className="-blog-card-cover" width={350} height={900} />
        <Stack  className="-blog-content-container">
          {isFeaturedAticle ? <span className="--featured-blog-content">{t("featured-aticle")}</span> : null}
          <h4 className="--card-title --card-texts">{title}</h4>
          <div className="--card-sub-title --card-texts">
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>

          <p className="--card-date">{date}</p>
        </Stack>
      </div>
    </Link>
  );
};
