import { MainContainer, MainShadow, SubscribeArea } from "@/common";

import { Box } from "@mui/material";
import { ItemDetails } from "@/common/itemDetails";
import { MainBanner } from "@/common/mainBanner";
import React from "react";
import { getSingleReport } from "@/apis";
import { MainBanners } from "@/common/notFoundPage";
import { Metadata } from "next";
 

type Props = {
  params: { id: string , locale: string };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const locale = params.locale;
  const title = locale === 'ar' ? 'تقرير' : 'Reports';
  const description = locale === 'ar' 
    ? 'اقرأ أحدث تقرير والأفكار حول Cedge والصناعة.' 
    : 'Read the latest articles and insights about Cedge and the reports.';
  const canonicalUrl = `https://www.cedge.com.sa/${locale}/blog/reports/${params.id}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ar: `https://www.cedge.com.sa/ar/blog/reports/${params.id}`,
        en: `https://www.cedge.com.sa/en/blog/reports/${params.id}`,
        'x-default': `https://www.cedge.com.sa/en/blog/reports/${params.id}`, // Default fallback
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
const ReportPage: React.FC<Props> = async ({ params }) => {
  const { id, locale } = params;
  const { report } = await getSingleReport(id,locale);
  // Check if the article is available
  if (!report) {
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
    <Box
      sx={{
        position: "relative",
      }}
    >
       
      <MainShadow
        styles={{
          display: {
            xs: "none",
            md: "block",
          },
          height: {
            xs: "50px",
            md: "200px",
            lg: "300px",
          },
          color:{
            xs:"#fff",
            md: "#fff",
            lg: "#fff",
          }
        }}
      />
      <MainBanner
        backUrl="/blog/reports"
        title={report.banner_title}
        backgroundImage={report.banner}
        translation={false}
        description={report.banner_description}
      />
      <MainContainer type="center">
        <ItemDetails downloadUrl={report.file}  type="reports">
          <h1 style={{color:"#fff !important", paddingTop: '2rem'}}>{report.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: report?.description }}/>
        </ItemDetails>
      </MainContainer>
      <SubscribeArea />
    </Box>
  );
};
export default ReportPage;
