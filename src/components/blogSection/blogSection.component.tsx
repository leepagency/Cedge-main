import "./styles.scss";

import { useLocale, useTranslations } from "next-intl";

import { AR_LOCALE } from "@/constants";
import { ArrowFrowardIcon } from "@/assets";
import Link from "next/link";
import { MainTitle } from "@/common";
import React from "react";

// import { Box, Stack, Typography } from "@mui/material";

interface BlogSectionProps {
  link: string;
  title: string;
  children: React.ReactNode;
  isTopBlogSection?: boolean;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ link, title, children, isTopBlogSection }) => {
  const t = useTranslations("commons");
  const localActive = useLocale();

  return (
    <div className={`blog-container ${isTopBlogSection ? "top-blog-container" : ""}`}>
      <div className="blog-top-section">
        <MainTitle title={t(title)} className="responsive-title" />
        <Link href={link} className="blog-link  hide-responsive-link">
          <div className="blog-link-grid">
            <p>{t("all")}</p>
            <ArrowFrowardIcon className={localActive === AR_LOCALE ? "rtl-icon classvg" : "classvg"} />
          </div>
        </Link>
       
      </div>
      <div className="bottom-top-section">{children}</div>
    </div>
  );
};
