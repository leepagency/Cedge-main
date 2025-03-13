import { CapabilitiesImageGrid, MainContainer, MainShadow } from "@/common";

import { Box } from "@mui/material";
import { ContactFormContent } from "@/components";
import { MainBanner } from "@/common/mainBanner";
import React from "react";
import { getCapabilities } from "@/apis";
import { Metadata } from "next";

type Props = {
  params: {
    locale: string;
  };
};
export const generateMetadata = ({ params }: Props): Metadata => {
  const locale = params.locale;
  const title = locale === 'ar' ? 'الخدمات' : 'services';
  const description = locale === 'ar' 
  ? 'اقرأ أحدث الخدمات والأفكار حول Cedge والصناعة.' 
  : 'Read the latest services and insights about Cedge and the services.';
  const canonicalUrl = `https://www.cedge.com.sa/${locale}/services`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ar: `https://www.cedge.com.sa/ar/services`,
        en: `https://www.cedge.com.sa/en/services`,
        'x-default':'https://www.cedge.com.sa/en/services', // Default fallback
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
    },
    metadataBase: new URL('https://www.cedge.com.sa'),
  };
};
const CapabilitiesPage: React.FC<Props> = async ({ params }) => {
  const data = await getCapabilities(params.locale);
  return (
    <Box sx={{
      overflow:'hidden'
    }}>
      <MainBanner
        title={data.capabilities_header.title}
        backgroundImage={data.capabilities_header.image}
        translation={false}
        description={data.capabilities_header.description}
      />
      <MainContainer type="center">
        <CapabilitiesImageGrid items={data.capabilities} />
        <MainShadow
          styles={{
            display: {
              xs: "none",
              md: "block",
            },
            height: {
              xs: 100,
              sm: 150,
              md: 200,
              lg: 250,
              xl: 300,
            },
          }}
        />
      </MainContainer>
      <ContactFormContent />
    </Box>
  );
};
export default CapabilitiesPage;
