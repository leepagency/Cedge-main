"use client";

import { Box, Fade, Modal, Typography, useMediaQuery } from "@mui/material";

import { ContactForm } from "../contacForm";
import React from "react";
import { useTranslations } from "next-intl";

type ContactUsModalProps = {
  open: boolean;
  handleClose?: () => void;
};
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 600,
  bgcolor: "black",
  // border: "2px solid #000",
  display: "flex",
  flexDirection: "column",
  gap: 2,
  borderRadius: 4,
  boxShadow: "0px 0px 10px 0px rgba(255,255,255,0.75)",
  maxHeight: "90vh",
  overflowY: "auto",
  maxWidth: "95vw",
};

export const ContactUsModal: React.FC<ContactUsModalProps> = ({
  open,
  handleClose,
}) => {
  const t = useTranslations("contactForm");
  const isLargerThan1440 = useMediaQuery("(min-width:1440px)");

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="Modal-contact-us"
      aria-describedby="modal-modal-contact-us-form"
    >
      <Fade in={open}>
        <Box
          sx={{
            ...style,
            width: { xs: "100%", sm: "80%", md: "60%", lg: "600px" },
            padding: {
              xs: 2,
              sm: 4,
            },
          }}
        >
          {!isLargerThan1440 && (
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              textAlign="center"
            >
              {t("title")}
            </Typography>
          )}
          <ContactForm modal={true} handleSuccess={handleClose} />
        </Box>
      </Fade>
    </Modal>
  );
};
