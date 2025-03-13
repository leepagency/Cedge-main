"use client";

import "./styles.scss";

import { Box, } from "@mui/material";
import {  useTranslations } from "next-intl";

import React from "react";

// import Link from "next/link";

interface notFoundPageProps {
  title: string;
 
}

export const MainBanners: React.FC<notFoundPageProps> = ({
  title
}) => {
  const t = useTranslations("notFound");
  return (
    <Box sx={{
      fontSize:"30px",
      fontWeight:700,
    }}>
      {t(title)}
    </Box>
  );
};
