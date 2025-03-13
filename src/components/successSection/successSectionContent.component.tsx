import "./styles.scss";

import { Box, Stack, Typography } from "@mui/material";
import { MainContainer, MainTitle } from "@/common";

import { IHomeSuccess } from "@/types";
import Image from "next/image";
import { Logo } from "@/assets";
import React from "react";
import { useTranslations } from "next-intl";

interface SuccessSectionContentProps {
  success: IHomeSuccess[];
}

const SuccessSectionContent: React.FC<SuccessSectionContentProps> = ({ success }) => {
  const { title1, title2, description1, description2, image, card_description } = success[0];
  const t = useTranslations("successSection");
  return (
    <>
      <MainContainer type="left">
        <MainTitle title={t("firstTitle") + " " + t("secondTitle")} />
      </MainContainer>

      <MainContainer type="center">
        <Box className="success-container">
          {/* main */}
          <Stack
            className="success-main-card"
            // sx={{
            //   background: image,
            // }}
          >
            <Image className="bg" src={image} alt="success" layout="fill" priority />
            <Stack>
              <Typography>{title1}</Typography>
              <Typography component="div">
                <div dangerouslySetInnerHTML={{ __html: description1 }} />
              </Typography>
            </Stack>
          </Stack>

          <Stack
            className="success-logo-card"
            alignItems="space-between"
            sx={{
              height: "100%",
            }}
          >
            <Logo />
            {/* <Typography>{description3}</Typography> */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                padding: "0 0 2rem 0",
              }}
              dangerouslySetInnerHTML={{ __html: card_description }}
            />
          </Stack>
          {/* text card */}
          <Stack
            className="success-text-card"
            sx={{
              border: "0.761px solid #292A36",
              borderRadius: "1.5rem",
            }}
          >
            <Stack>
              <Typography>{title2}</Typography>
              {/* <Typography> */}
              <div dangerouslySetInnerHTML={{ __html: description2 }} />
              {/* </Typography> */}
            </Stack>
            {/* </Stack> */}
          </Stack>
        </Box>
      </MainContainer>
    </>
  );
};
export default SuccessSectionContent;
