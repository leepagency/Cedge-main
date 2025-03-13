"use client";

import { ArticleCard, MainCardsGrid, SearchSortArea, TopCardGrid } from "@/common";
import { IArticleResponse, SearchParams } from "@/types";

import { InfiniteArticles } from "@/components";
import React from "react";
import { useTranslations } from "next-intl";

interface ArticlesHocProps {
  initData: IArticleResponse;
  searchParams: SearchParams;
  tags: { id: string; tag: string }[];
}

export const ArticlesHoc: React.FC<ArticlesHocProps> = ({ initData, searchParams, tags }) => {
  const t = useTranslations("sort");

  return (
    <>
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
        url="blog"
        tags={tags}
      />
      <TopCardGrid key={searchParams.sort_key}>
        {initData.articles.slice(0, 2).map(({ id, header_title, slug, image, is_featured, date_of_publish }) => (
          <ArticleCard
            key={id}
            slug={slug}
            isSmallCard={false}
            id={id}
            title={header_title}
            image={image}
            isFeaturedArticle={is_featured}
            date={date_of_publish}
            isHasOnlyIcon
          />
        ))}
      </TopCardGrid>
      <MainCardsGrid key={searchParams.sort_key}>
        <InfiniteArticles
          key={searchParams.search_text}
          initialData={initData}
          search_text={searchParams.search_text}
          sort_key={searchParams.sort_key}
        />
      </MainCardsGrid>
    </>
  );
};
