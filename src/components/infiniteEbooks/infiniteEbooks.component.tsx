"use client";

import { Box, CircularProgress } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";

import { BookCard } from "@/common";
import { IBook } from "@/types";
import { getBooks } from "@/apis";
import { useInView } from "react-intersection-observer";

type Props = {
  initialData: IBook[];
  search_text: string;
  sort_key?: string;
};

export const InfiniteEbooks: React.FC<Props> = ({ initialData, search_text, sort_key = "" }) => {
  const [movies, setMovies] = useState(initialData);
  const [page, setPage] = useState(1);
  const [showLoader, setShowLoader] = useState(true);
  const [ref, inView] = useInView();

  const loadMore = useCallback(async () => {
    const next = page + 1;
    const data = await getBooks({ page: next, search_text, sort_key });
    if (data?.meta.last_page >= next) {
      setPage(next);
      setMovies((prev: IBook[] | undefined) => [...(prev?.length ? prev : []), ...data.ebooks]);
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
      {movies.map((item) => (
        <BookCard key={item.id} image={item.image} title={item.title} id={item.id} slug={item.slug} />
      ))}
      {showLoader && (
        <Box
          sx={{
            gridColumn: {
              xs: "span 1",
              md: "span 2",
              lg: "span 3",
            },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size={40} ref={ref} />
        </Box>
      )}
    </>
  );
};
