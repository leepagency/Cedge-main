"use client";

import { AR_LOCALE, EN_LOCALE } from "@/constants";
import React, { useTransition } from "react";

import { IconButton } from "@mui/material";
import Image from "next/image";
import globeImage from "../../assets/images/Globe.svg";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export const LocalSwitcher: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const changeLocale = () => {
    localStorage.setItem("locale",localActive === AR_LOCALE ? "en" : "ar");
    let route = window.location.pathname.split('/').length > 2 ? '/'+window.location.pathname.split('/').slice(2).join('/') : '';
    startTransition(() => {
      router.replace(`/${localActive === AR_LOCALE ? EN_LOCALE : AR_LOCALE}${route}`);
    });
  };

  return (
    <IconButton
      onClick={changeLocale}
      disabled={isPending}
      sx={{
        width: "3.25rem",
        height: "3.25rem",
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(0.825rem)",
      }}
    >
      <Image src={globeImage} alt="language-switcher" unoptimized // Disable srcset and use src only
      />
    </IconButton>
  );
};
