"use client";

import { MainCardsGrid, MainContainer, MainShadow, SearchSortArea } from "@/common";

import { IBookResponse } from "@/types";
import { InfiniteEbooks } from "@/components";
import React from "react";
import { useTranslations } from "next-intl";

interface IBooksHoc {
  data: IBookResponse;
  searchParams?: {
    search_text: string;
    sort_key: string;
    type?: string;
    tag?: string;
  };
  tags: { id: string; tag: string }[];
}

export const EbooksHoc: React.FC<IBooksHoc> = ({ searchParams, tags, data }) => {
  const t = useTranslations("sort");

  return (
    <MainContainer type="center">
      <SearchSortArea
        url="log/e-books"
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
        tags={searchParams?.type === "1" ? tags : searchParams?.type === "2" ? tags : []}
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
    </MainContainer>
  );
};
