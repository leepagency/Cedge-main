import "./styles.scss";

import { Button, Stack } from "@mui/material";

import { ContactUsModal } from "@/components";
import React from "react";
import { useTranslations } from "next-intl";
import { LocalSwitcher } from "../localSwitcher";

export const HeaderRequestBtn = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const t = useTranslations("headerRequestBtn");
  return (
    <Stack
      spacing={2}
      alignItems="center"
      direction="row"
      sx={{
        display: {
          xs: "block",
          md: "block",
        },
      }}
    >
      <LocalSwitcher />
      <Button variant="contained" className="header-btn" onClick={handleOpen}>
        {t("title")}
      </Button>
      <ContactUsModal open={open} handleClose={handleClose} />
    </Stack>
  );
};
