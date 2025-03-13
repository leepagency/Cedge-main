// "use client";

import { Box, Typography } from "@mui/material";
import { MainContainer, MainShadow, MainTitle, SectionContainer } from "@/common";

import Image from "next/image";
import React from "react";
import cLogo from "@/assets/images/cLogo.svg";

// import { useTranslations } from "next-intl";

interface AboutWhoProps {
  title: string;
  description: string;
}

export const AboutWho: React.FC<AboutWhoProps> = ({ title, description }) => {
  // const t = useTranslations("about");
  // const mediaQuery = useMediaQuery("(max-width: 768px)");
  return (
    <SectionContainer>
      <div className="about-explore-container">
        <MainShadow />
        <MainContainer type="left">
          <MainTitle className="-about-title" title={title} />
        </MainContainer>
        <MainContainer type="center">
          <div className="-about-explore-content-wrapper">
            <Box className="--about-explore-content">
              <Image src={cLogo} alt="Cedge"
                unoptimized // Disable srcset and use src only
              className="---about-explore-content-icon"></Image>
            </Box>
            <Typography
              className="--about-explore-content-text"
              sx={{
                textAlign: "start",
              }}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
            </Typography>
          </div>
        </MainContainer>
      </div>
    </SectionContainer>
  );
};
