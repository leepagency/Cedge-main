import { MainContainer, MainShadow, SubscribeArea } from "@/common";

import { Box } from "@mui/material";
import { ItemDetails } from "@/common/itemDetails";
import { MainBanner } from "@/common/mainBanner";
import React from "react";
import { getSingeBook } from "@/apis";
import { MainBanners } from "@/common/notFoundPage";
import { Metadata } from "next";
 

type Props = {
  params: { id: string; locale: string };
};
export const generateMetadata = ({ params }: Props): Metadata => {
  const locale = params.locale;
  const title = locale === 'ar' ? 'الكتب الإلكترونية' : 'E-Books';
  const description = locale === 'ar' 
  ? 'اقرأ أحدث الكتب الإلكترونية والأفكار حول Cedge والصناعة.' 
  : 'Read the latest articles and insights about Cedge and the industry.';
  const canonicalUrl = `https://www.cedge.com.sa/${locale}/blog/e-books/${params.id}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ar: `https://www.cedge.com.sa/ar/blog/e-books/${params.id}`,
        en: `https://www.cedge.com.sa/en/blog/e-books/${params.id}`,
        'x-default': `https://www.cedge.com.sa/en/blog/e-books/${params.id}`, // Default fallback
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
const EBookPage: React.FC<Props> = async ({ params }) => {
  const { id } = params;
  const { ebook } = await getSingeBook(id, params.locale);
    // Check if the article is available
    if (!ebook) {
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
        }}
      />

      <MainBanner
        backUrl="/log/e-books"
        title={ebook.banner_title}
        backgroundImage={ebook.banner}
        translation={false}
        description={ebook.banner_description}
      />
      <MainContainer type="center">
        <ItemDetails downloadUrl={ebook.file} type="ebook">
          <h1 style={{color:"#fff !important", paddingTop: '2rem'}}>{ebook.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: ebook.description }} />
        </ItemDetails>
      </MainContainer>
      <SubscribeArea />
    </Box>
  );
};
export default EBookPage;
