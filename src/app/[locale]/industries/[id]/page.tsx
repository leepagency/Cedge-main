import { Box } from "@mui/material";
import { IndustryHoc } from "@/hoc";
import { MainBanner } from "@/common/mainBanner";
import React from "react";
import { getSingleIndustry } from "@/apis";
import { MainBanners } from "@/common/notFoundPage";
import { Metadata } from "next";
 

// import background from "../../../../assets/bg/home-hero.svg";

type Props = {
  params: { id: string; locale: string };
};
export const generateMetadata = ({ params }: Props): Metadata => {
  const locale = params.locale;
  const title = locale === 'ar' ? 'مقالة' : 'industries';
  const description = locale === 'ar' 
    ? 'اقرأ أحدث القطاعات والأفكار حول Cedge والصناعة.' 
    : 'Read the latest industries and insights about Cedge and the industry.';
  const canonicalUrl = `https://www.cedge.com.sa/${locale}/industries/${params.id}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ar: `https://www.cedge.com.sa/ar/industries/${params.id}`,
        en: `https://www.cedge.com.sa/en/industries/${params.id}`,
        'x-default': `https://www.cedge.com.sa/en/industries/${params.id}`, // Default fallback
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
const IndustriesPage: React.FC<Props> = async ({ params }) => {
  const { id, locale } = params;
  const { industry } = await getSingleIndustry(id, locale);
   // Check if the article is available
   if (!industry) {
    return (
      <Box
        sx={{
          position: "relative",
          background: "#000",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <MainBanners title={'no_data_found'}/>
      </Box>
    );
  }
  return (
    <Box sx={{
      overflow:'hidden'
    }}>
       

      <MainBanner
        backUrl="/industries"
        title={industry.name}
        backgroundImage={industry.header_image}
        translation={false}
        isNoMarginBottom={true}
        description={industry.banner_description}
      />
      <IndustryHoc {...industry} />
    </Box>
  );
};
export default IndustriesPage;
