"use client";

import "./styles.scss";

import { FooterListHeader, FooterListItem, GenericButton } from "@/common";

import { ContactUsModal } from "../contactUsModal";
import React from "react";
import { Stack } from "@mui/material";
import { useTranslations } from "next-intl";

interface GetInTouchProps {
  address: string;
}

export const GetInTouch: React.FC<GetInTouchProps> = ({ address }) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const t = useTranslations("commons");
  const urlMatch = address.match(/href="([^"]*)"/);
  const url = urlMatch ? urlMatch[1] : null;
  
  return (
    <Stack
      className="footer-in-touch"
      sx={{
        minWidth: {
          xs: "auto",
          lg: "400px",
        },
      }}
    >
      <GenericButton buttonName={t("getInTouch")} onClick={handleOpen} size="small" />
      <ContactUsModal open={open} handleClose={handleClose} />
      <FooterListHeader header={t("address")}>
        <Stack direction={"row"} gap={"0.5rem"} mr={"1rem"}>
          <FooterListItem item={address} link={url || ''} />
        </Stack>
      </FooterListHeader>
    </Stack>
  );
};
