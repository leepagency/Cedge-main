"use client";

import "./styles.scss";

import { GenericButton, MainContainer } from "@/common";
import { Stack, Typography } from "@mui/material";

import { ContactUsModal } from "../contactUsModal";
import React from "react";

// import { useTranslations } from "next-intl";

interface HomeGrowSectionContentProps {
  title: string;
  description: string;
  button_text: string;
}

const HomeGrowSectionContent: React.FC<HomeGrowSectionContentProps> = ({ title, description, button_text }) => {
  // const t = useTranslations("homeGrowSection");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Stack className="grow-section-main-container">
      <MainContainer type="center">
        <Stack className="grow-section-content">
          <Typography>{title}</Typography>
          {/* <Typography>{t("description")}</Typography> */}
          <div
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
          <GenericButton size="large" buttonName={button_text} onClick={handleOpen} />
          <ContactUsModal open={open} handleClose={handleClose} />
        </Stack>
      </MainContainer>
    </Stack>
  );
};
export default HomeGrowSectionContent;
