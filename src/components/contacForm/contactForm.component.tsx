"use client";

import { Box, Button, CircularProgress } from "@mui/material";
import { CommonSelect, CommonTextField, PhoneTextField } from "@/common";
import { SubmitHandler, useForm } from "react-hook-form";

import { IContactForm } from "@/types";
import React from "react";
import { contactUs } from "@/actions";
import { contactUsSchema } from "@/validation";
import { useLocale, useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";

// import { z } from "zod";

interface ContactFormProps {
  modal?: boolean;
  handleSuccess?: () => void;
}
// type IFormSchema = z.output<typeof contactUsSchema>;

export const ContactForm: React.FC<ContactFormProps> = ({ modal = false, handleSuccess }) => {
  const localActive = useLocale();
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(contactUsSchema),

    defaultValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      body: "",
    },
  });

  const onSubmit: SubmitHandler<IContactForm> = async (data) => {
    await contactUs(data,localActive).then(() => {
      handleSuccess && handleSuccess();
    });
  };
  const t = useTranslations("contactForm");
  return (
    <Box
      gap={"1rem"}
      sx={{
        flex: 1,
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: modal ? "1fr" : "1fr 1fr",
        },
      }}
      component="form"
    >
      {/* <Stack className={`form-row-container ${modal ? "modal" : ""}`}> */}
      <CommonTextField control={control} name="name" placeholder={t("name")} />
      <CommonTextField control={control} name="email" placeholder={t("email")} />
      {/* </Stack> */}
      {/* <Stack className={`form-row-container ${modal ? "modal" : ""}`}> */}
      <CommonSelect control={control} name="subject" placeholder={t("subject")} />
      {/* <CommonTextField control={control} name="subject" placeholder={t("subject")} /> */}
      <PhoneTextField control={control} name="phone" placeholder={t("phone")} />
      {/* </Stack> */}
      {/* <Stack className={`text-field-multiline ${modal ? "modal" : ""}`}> */}
      <Box
        sx={{
          gridColumn: {
            xs: "1fr",
            md: modal ? "span 1" : "span 2",
          },
        }}
      >
        <CommonTextField control={control} name="body" placeholder={t("descriptions")} multiline />
      </Box>
      {/* </Stack> */}
      <Button
        size="small"
        className="form-submit-button"
        type="submit"
        onClick={handleSubmit(onSubmit)}
        disabled={isSubmitting}
        sx={{
          gridColumn: {
            xs: "1fr",
            md: modal ? "span 1" : "span 2",
          },
        }}
      >
        {isSubmitting ? <CircularProgress size={20} sx={{ color: "grey" }} /> : t("send")}
      </Button>
    </Box>
  );
};
