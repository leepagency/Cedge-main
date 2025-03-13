"use client";
import React, { useEffect, useState } from "react";
import { NextIntlClientProvider } from "next-intl";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeRegistry } from "@/libs";
import { getFooterData, getHeaderData } from "@/apis";
import { ICapability, IIndustry , IFooter } from "@/types";
import dynamic from "next/dynamic";

const HeaderComponent = dynamic(() => import('../components/header/headerContent.component'), {
  ssr: true, // Optional: Disable server-side rendering if needed
});

const FooterComponent = dynamic(() => import('../components/footer/footerContent.component'), {
  ssr: true, // Optional: Disable server-side rendering if needed
});

const NotFoundComponent = dynamic(() => import('./not-found-page-content'), {
  ssr: true, // Optional: Disable server-side rendering if needed
});

const LoadingComponent = dynamic(() => import('./[locale]/loading'), {
  ssr: true, // Optional: Disable server-side rendering if needed
});

interface HeaderData {
  capabilities: ICapability[];
  industries: IIndustry[];
}

interface FooterData extends IFooter {
  // Optionally include additional properties if needed
}

const NotFound: React.FC = () => {
  const [locale, setLocale] = useState("en");
  const [direction, setDirection] = useState("ltr");
  const [headerData, setHeaderData] = useState<HeaderData | null>(null); // Correctly typed state
  const [footerData, setFooterData] = useState<FooterData | null>(null);
  const [messages, setMessages] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedLocale = localStorage.getItem("locale") || "en";
        setLocale(storedLocale);
        setDirection(storedLocale === "ar" ? "rtl" : "ltr");

        const messages = (await import(`../../messages/${storedLocale}.json`)).default;
        const header = await getHeaderData(storedLocale);
        const footer = await getFooterData(storedLocale);

        setMessages(messages);
        setHeaderData(header.data);
        setFooterData(footer);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  if (!headerData || !footerData || !messages) {
    return <LoadingComponent />;
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div dir={direction}>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <HeaderComponent
              capabilities={headerData.capabilities}
              industries={headerData.industries}
            />
            <NotFoundComponent/>
            <FooterComponent
              data={footerData}
              capabilities={headerData.capabilities}
              industries={headerData.industries}
              showContent={false}
            />
          </ThemeRegistry>
        </AppRouterCacheProvider>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KB46SV6H"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </div>
    </NextIntlClientProvider>
  );
};

export default NotFound;
