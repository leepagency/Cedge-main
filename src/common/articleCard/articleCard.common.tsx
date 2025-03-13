"use client";

import "./styles.scss";

import { ArrowLeftIcon, DownloadIcon, ViewIcon } from "@/assets";
import { Button, IconButton, Stack } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";

import { AR_LOCALE } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import test from "../../assets/images/book.png";

interface ArticleCardProps {
  image: string;
  title: string;
  id: string;
  slug: string;
  isSmallCard: boolean;
  isFeaturedArticle: boolean;
  isHasOnlyIcon: boolean;
  date: string;
}
export const ArticleCard: React.FC<ArticleCardProps> = ({
  isSmallCard,
  isFeaturedArticle,
  isHasOnlyIcon,
  slug,
  title,
  image,
  date,
}) => {
  const t = useTranslations("articles");
  const localActive = useLocale();

  return (
    <>
      <Link href={`/${localActive}/blog/${slug}`} style={{ textDecoration: "none" }}>
        <Stack
          className={isSmallCard ? "article-card-container small-article-card-container" : "article-card-container"}
          sx={{
            background: `url(${test.src}) lightgray 50% `,
          }}
        >
          <div className="mask-layer"></div>
          {image && <Image src={image} unoptimized alt={title} className="article-card-cover" layout="fill" />}
          <Stack
            justifyContent={isFeaturedArticle ? "space-between" : "flex-end"}
            height={"100%"}
            className={isSmallCard ? "card-content-container small-card-content-container" : "card-content-container"}
          >
            {isFeaturedArticle ? <span className="featured-Article">{t("featured-Article")}</span> : null}
            <Stack
              className="card-content-bottom"
              sx={{
                "& h4,p,span,h5": {
                  color: "white !important",
                },
              }}
            >
              <div className="card-title-container">
                <h4 className="card-title">{title}</h4>
                <p
                  className="card-date"
                  style={{
                    color: "white !important",
                  }}
                >
                  {date}
                </p>
              </div>
              <div className="btn-container">
                {isSmallCard ? (
                  <IconButton className="article-icon-btn" disableRipple>
                    <ArrowLeftIcon className={localActive === AR_LOCALE ? "rtl-icon" : ""} />
                  </IconButton>
                ) : isHasOnlyIcon ? (
                  <IconButton className="article-icon-btn" disableRipple>
                    <ArrowLeftIcon className={localActive === AR_LOCALE ? "rtl-icon" : ""} />
                  </IconButton>
                ) : (
                  <>
                    <Button
                      variant="outlined"
                      startIcon={<DownloadIcon />}
                      className="article-btn download-btn"
                      disableElevation
                      disableRipple
                    >
                      {t("download")}
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<ViewIcon />}
                      className="article-btn view-btn"
                      disableElevation
                      disableRipple
                    >
                      {t("view")}
                    </Button>
                  </>
                )}
              </div>
            </Stack>
          </Stack>
        </Stack>
      </Link>
    </>
  );
};
