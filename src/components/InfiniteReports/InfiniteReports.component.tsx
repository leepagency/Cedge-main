"use client";

import { Box, CircularProgress } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";

import { IReport } from "@/types";
import { ReportCard } from "@/common";
import { getReports } from "@/apis";
import { useInView } from "react-intersection-observer";

// import { ArticleCard  } from "@/common";

type Props = {
  initialData: IReport[];
  search_text: string;
  sort_key: string;
};

export const InfiniteReports: React.FC<Props> = ({ initialData, search_text, sort_key }) => {
  const [reports, setReports] = useState(initialData);
  const [page, setPage] = useState(1);
  const [showLoader, setShowLoader] = useState(true);
  const [ref, inView] = useInView();

  const loadMore = useCallback(async () => {
    const next = page + 1;
    const data = await getReports({ page: next, search_text, sort_key });
    if (data?.meta.last_page >= next) {
      setPage(next);
      setReports((prev: IReport[] | undefined) => [...(prev?.length ? prev : []), ...data.reports]);
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
      {reports.map((item) => (
        <ReportCard
          key={item.id}
          id={item.id}
          slug={item.slug}
          image={item.image}
          title={item.title}
          isSmallCard
          file={item.file}
          date={item.date_of_publish}
        />
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
