import { MainContainer, MainShadow } from "@/common";
import { getArticles, getCapabilitiesTags, getIndustriesTags } from "@/apis";

import { ArticlesHoc } from "@/hoc/articles";
import { Box } from "@mui/material";
import { MainBanner } from "@/common/mainBanner";
import React from "react";
import { SearchParams } from "@/types";
import { SubscribeArea } from "@/common";
import { Metadata } from "next";
 

type Props = {
  searchParams: SearchParams;
  params: {
    locale: string;
  };
};
export const generateMetadata = ({ params }: Props): Metadata => {
  const locale = params.locale;
  const title = locale === 'ar' ? 'المقالات' : 'Articles';
  const description = locale === 'ar' 
  ? 'اقرأ أحدث المقالات والأفكار حول Cedge والصناعة.' 
  : 'Read the latest articles and insights about Cedge and the industry.';
  const canonicalUrl = `https://www.cedge.com.sa/${locale}/articles`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ar: `https://www.cedge.com.sa/ar/articles`,
        en: `https://www.cedge.com.sa/en/articles`,
        'x-default':'https://www.cedge.com.sa/en/articles', // Default fallback
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
const ArticlesPage: React.FC<Props> = async ({ searchParams, params }) => {
  const data = await getArticles(
    {
      page: 1,
      search_text: searchParams?.search_text || "",
      sort_key: searchParams?.sort_key || "",
      type: searchParams?.type || "",
      tag: searchParams?.tag || "",
    },
    params.locale
  );
  const capabilitiesTags = await getCapabilitiesTags(params.locale);
  const industriesTags = await getIndustriesTags(params.locale);
  return (
    <Box>
      <MainBanner
        title={data.articles_header.title}
        translation={false}
        description={data.articles_header.description}
        backgroundImage={data.articles_header.image}
      />
       
      <MainContainer type="center">
        <ArticlesHoc
          initData={data}
          searchParams={searchParams}
          tags={
            searchParams.type === "1" ? capabilitiesTags.tags : searchParams.type === "2" ? industriesTags.tags : []
          }
        />
        <MainShadow />
      </MainContainer>
      <SubscribeArea />
    </Box>
  );
};
export default ArticlesPage;
