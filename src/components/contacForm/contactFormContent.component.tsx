"use client";

import "./styles.scss";

import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { MainContainer, MainTitle } from "@/common";

import { ContactForm } from "@/components";
import React from "react";
import { useTranslations } from "next-intl";

interface ContactFormContentProps {
  title?: string;
  description?: string;
  id?: string;
}

export const ContactFormContent: React.FC<ContactFormContentProps> = ({ title, description, id }) => {
  const matches = useMediaQuery("(max-width:768px)");
  const t = useTranslations("contactForm");
  return (
    <Stack className="contact-us-main" id={id}>
      {/* <SectionContainer> */}
      <MainContainer type="center">
        <div className="contact-us-container">
          <Box
            sx={{
              width: "100%",
            }}
          >
            {title ? (
              <Stack
                spacing={2}
                sx={{
                  "& p": {
                    fontSize: "1.25rem",
                    color: "#75778B",
                  },
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: {
                      xs: "3rem",
                      md: "3rem",
                      lg: "6.5rem",
                    },
                    fontWeight: 700,
                    color: "white",
                  }}
                >
                  {title}
                </Typography>
                {/* <Typography
                  variant="body1"
                  className="description"
                  sx={{
                    color: "#75778B",
                    fontSize: "1.25rem",
                  }}
                >
                  {description}
                </Typography> */}
                {description && <div dangerouslySetInnerHTML={{ __html: description }} />}
              </Stack>
            ) : matches ? (
              <MainTitle title={t("getInTouch")} />
            ) : (
              <Stack
                sx={{
                  flex: 1,
                }}
              >
               <Typography
                  variant="h2"
                  sx={{
                    fontSize: {
                      xs: "3rem",
                      md: "3rem",
                      lg: "6.5rem",
                    },
                    fontWeight: 700,
                    color: "white",
                  }}
                >
                  {t("getInTouch")}
                </Typography>
              </Stack>
            )}
          </Box>

          <ContactForm />
        </div>
      </MainContainer>
      {/* </SectionContainer> */}
    </Stack>
  );
};
