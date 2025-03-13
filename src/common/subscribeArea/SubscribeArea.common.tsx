"use client";
import "./styles.scss";

import { Stack } from "@mui/material";
import { useTranslations } from "next-intl";
import SubscribeForm from "./SubscribeForm";

interface SubscribeAreaProps {}

export const SubscribeArea: React.FC<SubscribeAreaProps> = () => {
  const t = useTranslations("subscribe");

  return (
    <Stack className="subscribe-area-container">
      <h3 className="subscribe-title">{t("title")}</h3>

      <SubscribeForm />
    </Stack>
  );
};
