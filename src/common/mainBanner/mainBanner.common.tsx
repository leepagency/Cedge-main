"use client";

import "./styles.scss";

import { Box, Button, Stack } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";

import { AR_LOCALE } from "@/constants";
import { ArrowBackIcon } from "@/assets";
import Image from "next/image";
import { MainContainer } from "../mainContainer";
import React from "react";
import { useRouter } from "next/navigation";
import Breadcrumb from "@/components/BreadCrumb/BreadCrumb";

// import Link from "next/link";

interface MainBannerProps {
  title: string;
  backgroundImage?: string;
  translation?: boolean;
  backUrl?: string;
  isNoMarginBottom?: boolean;
  description?: string;
  smallTitle?: boolean;
  article?: boolean;
}

export const MainBanner: React.FC<MainBannerProps> = ({
  title,
  backgroundImage,
  translation = true,
  backUrl,
  isNoMarginBottom = false,
  description,
  smallTitle,
  article,
}) => {
  const t = useTranslations("commons");
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  const localActive = useLocale();

  return (
    <Box
      className={`banner-container ${isNoMarginBottom && "margin-Bottom"}`}
      sx={{
        position: "relative",
        "& .bg": {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          objectFit:"cover" 
        },
      }}
      // style={{
      //   backgroundImage: `url(${backgroundImage}) !important`,
      // }}
    >
      {backgroundImage && <Image src={backgroundImage} alt="background" layout="fill" className="bg" unoptimized />}
      <MainContainer type="left">
        <Stack className="content-container">
        <Breadcrumb/>
          {backUrl && (
            // <Link href={backUrl}>
            <Button
              variant="contained"
              className="back-btn"
              startIcon={<ArrowBackIcon className={localActive === AR_LOCALE ? "rtl-icon" : ""} />}
              onClick={handleBack}
              sx={{
                color: article ? "black" : "",
                "& svg": {
                  path: {
                    color: article ? "black" : "",
                    fill: article ? "black" : "",
                  },
                },
              }}
            >
              {t("back")}
            </Button>
            // </Link>
          )}
          <h1
            style={{
              color: article ? "black" : "#fff",
            }}
            className={`banner-title ${smallTitle && "small-title"}`}
          >
            {translation ? t(title) : title}
          </h1>
            {(description && description.split('').length > 1) &&  (
              <p
                style={{
                  color: article ? "black" : "",
                }}
                className="banner-description"
              >
                {description}
              </p>
            )}
        </Stack>
      </MainContainer>
    </Box>
  );
};
