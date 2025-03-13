import { IndustriesGrid, MainContainer, MainShadow } from "@/common";

import { Box } from "@mui/material";
import { ListCard } from "@/common/listCard";
import { MainBanner } from "@/common/mainBanner";
import React from "react";
import { getIndustries } from "@/apis";
import { Metadata } from "next";
 

type Props = {
  params: {
    locale: string;
  };
};
export const generateMetadata = ({ params }: Props): Metadata => {
  const locale = params.locale;
  const title = locale === 'ar' ? 'القطاعات' : 'Industries';
  const description = locale === 'ar' 
  ? 'اقرأ أحدث القطاعات والأفكار حول Cedge والصناعة.' 
  : 'Read the latest industries and insights about Cedge and the industry.';
  const canonicalUrl = `https://www.cedge.com.sa/${locale}/industries`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ar: `https://www.cedge.com.sa/ar/industries`,
        en: `https://www.cedge.com.sa/en/industries`,
        'x-default':'https://www.cedge.com.sa/en/industries', // Default fallback
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
  const data = await getIndustries(params.locale);
  return (
    <Box>
       
      <MainBanner
        title={data?.industries_header?.title}
        description={data?.industries_header?.description}
        translation={false}
        backgroundImage={data?.industries_header?.image}
      />

      <MainContainer type="center">
        <IndustriesGrid mainTitle={data.industries_header.description}>
          {data.industries.map((item) => (
            <ListCard
              key={item.id}
              title={item.name}
              image={item.header_image}
              id={String(item.id)}
              slug={String(item.slug)}
              cardFor="industries"
            />
          ))}
          <MainShadow />
        </IndustriesGrid>
      </MainContainer>
    </Box>
  );
};
export default IndustriesPage;
