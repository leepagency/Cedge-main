"use client";

import { MainCardsGrid, MainContainer, MainShadow, ReportCard, SearchSortArea, TopCardGrid } from "@/common";

import { IReportResponse } from "@/types";
import { InfiniteReports } from "@/components";
import React from "react";
import { useTranslations } from "next-intl";

interface ArticlesHocProps {
  data: IReportResponse;
  searchParams?: {
    search_text: string;
    sort_key: string;
    type?: string;
    tag?: string;
  };
  tags: { id: string; tag: string }[];
}

export const ReportsHoc: React.FC<ArticlesHocProps> = ({ data, searchParams, tags }) => {
  const t = useTranslations("sort");

  return (
    <MainContainer type="center">
      <SearchSortArea
        selectInputProps={{
          options: [
            { 
              value: "1", 
              label: t("capabilities") 
            },
            {
              value: "2",
              label: t("industries")
            }
          ]
        }}
        sortInputProps={{
          options: [
            { 
              value: "1", 
              label: t("descending")  
            },
            {
              value: "2",
              label: t("ascending")
            }
          ]
        }}
        url="reports"
        tags={tags}
      />
      <TopCardGrid>
        {data.reports.slice(0, 2).map(({ id, title, slug,image, file, date_of_publish }) => (
          <ReportCard
            key={id}
            slug={slug}
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
    </MainContainer>
  );
};
