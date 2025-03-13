"use client";

import { Box, CircularProgress } from "@mui/material";
import { IArticle, IArticleResponse } from "@/types";
import React, { useCallback, useEffect, useState } from "react";

import { ArticleCard } from "@/common";
import { getArticles } from "@/apis";
import { useInView } from "react-intersection-observer";

// import { ArticleCard  } from "@/common";

type Props = {
  initialData: IArticleResponse;
  search_text: string;
  sort_key: string;
};

export const InfiniteArticles: React.FC<Props> = ({ initialData, search_text, sort_key }) => {
  const [articles, setArticles] = useState<IArticle[]>(initialData.articles.slice(2));
  const [page, setPage] = useState(1);
  const [showLoader, setShowLoader] = useState(true);
  const [ref, inView] = useInView();

  const loadMore = useCallback(async () => {
    const next = page + 1;
    const data = await getArticles({ page: next, search_text, sort_key });
    if (data?.meta.last_page >= next) {
      setPage(next);
      setArticles((prev: IArticle[] | undefined) => [...(prev?.length ? prev : []), ...data.articles]);
    } else {
      setShowLoader(false);
    }
  }, [page, search_text, sort_key]);
  useEffect(() => {
    if (inView) {
      loadMore();
    }
  }, [inView, loadMore]);
  return (
    <>
      {articles.map((item, index) => (
        <ArticleCard
          key={index}
          id={item.id}
          slug={item.slug}
          image={item.image}
          title={item.header_title}
          isFeaturedArticle={item.is_featured}
          date={item.date_of_publish}
          isSmallCard
          isHasOnlyIcon={false}
        />
      ))}
      {showLoader && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gridColumn: {
              xs: "span 1",
              md: "span 2",
              lg: "span 3",
            },
          }}
        >
          <CircularProgress size={40} ref={ref} />
        </Box>
      )}
    </>
  );
};
