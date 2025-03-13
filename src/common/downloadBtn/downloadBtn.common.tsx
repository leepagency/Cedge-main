"use client";

import "./styles.scss";

import { Button } from "@mui/material";
import { DownloadIcon } from "@/assets";
import React from "react";
import { useTranslations } from "next-intl";

type DownloadBtnProps = {
  downloadUrl: string;
};

export const DownloadBtn: React.FC<DownloadBtnProps> = ({ downloadUrl }) => {
  const t = useTranslations("item-details");

  const handleDownload = () => {
    window.open(downloadUrl, "_blank");
  };

  return (
    <Button
      className="download-btn"
      variant="contained"
      disableElevation
      // disableRipple
      startIcon={<DownloadIcon />}
      onClick={handleDownload}
    >
      {t("download")}
    </Button>
  );
};
