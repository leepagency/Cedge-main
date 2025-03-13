"use client";

import { AR_LOCALE } from "@/constants";
import { CacheProvider } from "@emotion/react";
import { Poppins } from "next/font/google";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import createCache from "@emotion/cache";
import { createTheme } from "@mui/material/styles";
import localeFont from "next/font/local";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { useLocale } from "next-intl";

// import dinFontRegular from "../../assets/arabic-font/light.otf";

// import dinFontLight from "@/assets/arabic-font/light.otf";

type Props = {
  children: React.ReactNode;
};

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["devanagari"],
  display: "swap",
});

const dinFont = localeFont({
  src: [
    {
      path: "../../assets/arabic-font/light.otf",
      weight: "300",
    },
    {
      path: "../../assets/arabic-font/normal.otf",
      weight: "400",
    },
    {
      path: "../../assets/arabic-font/medium.otf",
      weight: "500",
    },
    {
      path: "../../assets/arabic-font/bold.otf",
      weight: "700",
    },
  ],
});

export const ThemeRegistry = (props: Props) => {
  const defaultLocale = useLocale();
  const theme = createTheme({
    direction: defaultLocale === AR_LOCALE ? "rtl" : "ltr",

    typography: {
      fontFamily: defaultLocale === AR_LOCALE ? dinFont.style.fontFamily : poppins.style.fontFamily,
    },
  });

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  const cache = createCache({
    key: "mui",
  });
  const { children } = props;

  return (
    <CacheProvider value={defaultLocale === AR_LOCALE ? cacheRtl : cache}>
      <style jsx global>{`
        html {
          overflow-x: hidden;
          font-family: ${defaultLocale === AR_LOCALE ? dinFont.style.fontFamily : poppins.style.fontFamily};
        }
        button {
          font-family: ${defaultLocale === AR_LOCALE ? dinFont.style.fontFamily : poppins.style.fontFamily};
          text-transform: none !important;
        }
      `}</style>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  );
};
