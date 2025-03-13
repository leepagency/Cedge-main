import { getFooterData, getHeaderData } from "@/apis";

import { AlertMessage } from "@/common";
import React from "react";
import { Stack } from "@mui/material";
import dynamic from "next/dynamic";

interface LayoutContentProps {
  children: React.ReactNode;
  locale: string;
}

const HeaderComponent = dynamic(() => import('../../components/header/headerContent.component'), {
  ssr: true, // Optional: Disable server-side rendering if needed
});

const FooterComponent = dynamic(() => import('../../components/footer/footerContent.component'), {
  ssr: true, // Optional: Disable server-side rendering if needed
});

export const LayoutContent: React.FC<LayoutContentProps> = async ({ children, locale }) => {
  const data = await getFooterData(locale);

  const headerData = await getHeaderData(locale);

  return (
    <Stack>
      <HeaderComponent capabilities={headerData.data.capabilities} industries={headerData.data.industries} />
      {children}
      <FooterComponent data={data} capabilities={headerData.data.capabilities} industries={headerData.data.industries}  showContent={true}/>
      <AlertMessage />
    </Stack>
  );
};
