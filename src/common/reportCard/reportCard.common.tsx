"use client";
// to do move the translation into small components and make it server

import "./styles.scss";

import { Button, IconButton, Stack } from "@mui/material";
import { DownloadIcon, ViewIcon } from "@/assets";

import Link from "next/link";
import React from "react";
import { StaticImageData } from "next/image";
import { useLocale, useTranslations } from "next-intl";

interface ReportCardProps {
  image: string | StaticImageData;
  title: string;
  id: string;
  slug: string;
  isSmallCard: boolean;
  file: string;
  date: string;

  // isHasOnlyIcon: boolean;
}
export const ReportCard: React.FC<ReportCardProps> = ({
  image,
  title,
  slug,
  isSmallCard,
  file,
  date,
  // isHasOnlyIcon,
}) => {
  const t = useTranslations("reports");
  const handleDownload = () => {
    window.open(file, "_blank");
  };
  const localActive = useLocale();
  return (
    <>
      {/* <Link href={`/reports/${id}`} style={{ textDecoration: "none" }}> */}
      <Stack
        className={isSmallCard ? "report-card-container small-report-card-container" : "report-card-container"}
        sx={{
          background: `url(${image}) lightgray 50% `,
        }}
      >
        <div className="mask-layer"></div>

        <Stack
          justifyContent="flex-end"
          height="100%"
          className={isSmallCard ? "card-content-container small-card-content-container" : "card-content-container"}
        >
          <Stack className="card-content-bottom">
            <div className="report-card-title-container">
              <h4 className="card-title">{title} </h4>
              <p className="report-card-date">{date}</p>
            </div>
            <div className="btn-container">
              {isSmallCard ? (
                <>
                  <IconButton className="report-icon-btn" onClick={handleDownload}>
                    <DownloadIcon />
                  </IconButton>
                  <Link href={`/${localActive}/blog/reports/${slug}`} style={{ textDecoration: "none" }}>
                    <IconButton className="report-icon-btn">
                      <ViewIcon />
                    </IconButton>
                  </Link>
                </>
              ) : (
                <>
                  <Button
                    variant="outlined"
                    startIcon={<DownloadIcon />}
                    className="report-btn download-btn"
                    disableElevation
                    // disableRipple
                    onClick={handleDownload}
                    sx={{
                      background: "transparent",
                    }}
                  >
                    {t("download")}
                  </Button>
                  <Link href={`/${localActive}/blog/reports/${slug}`} style={{ textDecoration: "none" }}>
                    <Button
                      variant="outlined"
                      startIcon={<ViewIcon />}
                      className="report-btn view-btn"
                      disableElevation
                      // disableRipple
                      sx={{
                        background: "rgba(255, 255, 255, 0.10)",
                      }}
                    >
                      {t("view")}
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </Stack>
        </Stack>
      </Stack>
      {/* </Link> */}
    </>
  );
};
