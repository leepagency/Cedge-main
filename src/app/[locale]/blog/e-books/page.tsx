import { MainBanner, SubscribeArea } from "@/common";
import { getBooks, getCapabilitiesTags, getIndustriesTags } from "@/apis";

import { Box } from "@mui/material";
import { EbooksHoc } from "@/hoc/ebooks/ebooks.hoc";
import React, { Suspense } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const LoaderComponent = dynamic(() => import('../../../../components/loader/loader.component'), {
  ssr: true, // Optional: Disable server-side rendering if needed
});

type Props = {
  searchParams?: {
    search_text: string;
    sort_key: string;
    type?: string;
    tag?: string;
  };
  params: {
    locale: string;
  };
};
export const generateMetadata = ({ params }: Props): Metadata => {
  const locale = params.locale;
  const title = locale === "ar" ? "الكتب الإلكترونية" : "E-Books";
  const description =
    locale === "ar"
      ? "اقرأ أحدث الكتب الإلكترونية والأفكار حول Cedge والصناعة."
      : "Read the latest articles and insights about Cedge and the industry.";
  const canonicalUrl = `https://www.cedge.com.sa/${locale}/e-books`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ar: `https://www.cedge.com.sa/ar/e-books`,
        en: `https://www.cedge.com.sa/en/e-books`,
        "x-default": "https://www.cedge.com.sa/en/e-books", // Default fallback
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
    },
    metadataBase: new URL("https://www.cedge.com.sa"),
  };
};
const EBooksPage: React.FC<Props> = async ({ searchParams, params }) => {
  const data = await getBooks(
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
    <Suspense fallback={<LoaderComponent />}>
      <Box>
        <MainBanner
          translation={false}
          backgroundImage={data.ebooks_header.image}
          title={data.ebooks_header.title}
          description={data.ebooks_header.description}
        />
        {/* <MainContainer type="center">
   <SearchSortArea
     url="blog/e-books"
     selectInputProps={{
       options: [{ value: "serives", label: "serives" }],
     }}
     sortInputProps={{
       options: [
         { value: "1", label: "descending" },
         {
           value: "2",
           label: "ascending",
         },
       ],
     }}
     tags={
       searchParams?.type === "1" ? capabilitiesTags.tags : searchParams?.type === "2" ? industriesTags.tags : []
     }
   />
   <MainCardsGrid key={searchParams?.sort_key}>
     <InfiniteEbooks
       key={searchParams?.search_text}
       initialData={data.ebooks}
       search_text={searchParams?.search_text || ""}
       sort_key={searchParams?.sort_key}
     />
     <MainShadow
       styles={{
         display: {
           xs: "block",
           md: "none",
         },
       }}
     />
   </MainCardsGrid>
 </MainContainer> */}
        <EbooksHoc
          data={data}
          searchParams={searchParams}
          tags={
            searchParams?.type === "1"
              ? capabilitiesTags.tags
              : searchParams?.type === "2"
              ? industriesTags.tags
              : []
          }
        />
        <SubscribeArea />
      </Box>
    </Suspense>
  );
};
export default EBooksPage;
