import { getCapabilitiesTags, getIndustriesTags, getReports } from "@/apis";

import { Box } from "@mui/material";
import { MainBanner } from "@/common/mainBanner";
import React from "react";
import { ReportsHoc } from "@/hoc/reports/reports.hoc";
import { SubscribeArea } from "@/common";
import { Metadata } from "next";
 

// import book from "../../../assets/images/book.png";

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
  const title = locale === 'ar' ? 'التقارير' : 'Reports';
  const description = locale === 'ar' 
  ? 'اقرأ أحدث التقارير والأفكار حول Cedge والصناعة.' 
  : 'Read the latest reports and insights about Cedge and the Reports.';
  const canonicalUrl = `https://www.cedge.com.sa/${locale}/reports`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ar: `https://www.cedge.com.sa/ar/reports`,
        en: `https://www.cedge.com.sa/en/reports`,
        'x-default':'https://www.cedge.com.sa/en/reports', // Default fallback
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
const ReportsPage: React.FC<Props> = async ({ searchParams, params }) => {
  const data = await getReports(
    {
      page: 1,
      search_text: searchParams?.search_text || "",
      sort_key: searchParams?.sort_key || "2",
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
        translation={false}
        backgroundImage={data.reports_header.image}
        title={data.reports_header.title}
        description={data.reports_header.description}
      />{" "}
      <ReportsHoc
        data={data}
        searchParams={searchParams}
        tags={
          searchParams?.type === "1" ? capabilitiesTags.tags : searchParams?.type === "2" ? industriesTags.tags : []
        }
      />
      {/* <MainContainer type="center">
        <SearchSortArea
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
          url="reports"
        />
        <TopCardGrid>
          {data.reports.slice(0, 2).map(({ id, title, image, file, date_of_publish }) => (
            <ReportCard
              key={id}
              isSmallCard={false}
              id={id}
              title={title}
              image={image}
              file={file}
              date={date_of_publish}
            />
          ))}
        </TopCardGrid>
        <MainCardsGrid>
          <InfiniteReports
            key={searchParams?.search_text}
            initialData={data.reports.slice(2)}
            search_text={searchParams?.search_text || ""}
            sort_key={searchParams?.sort_key || ""}
          />
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
          />{" "}
        </MainCardsGrid>
      </MainContainer> */}
      <SubscribeArea />
    </Box>
  );
};
export default ReportsPage;
