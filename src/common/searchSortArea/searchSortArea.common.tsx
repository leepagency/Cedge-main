"use client";
import "./styles.scss";

import { Box, Button, Stack } from "@mui/material";
import { SelectInput, SelectInputProps } from "../selectInput";
import { SortInput, SortInputProps } from "../sortInput";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import React, { useEffect } from "react";
import { SearchInput } from "../searchInput";

interface SearchSortAreaProps {
  selectInputProps: SelectInputProps;
  sortInputProps: SortInputProps;
  url: string;
  tags?: { id: string; tag: string }[];
}

export const SearchSortArea: React.FC<SearchSortAreaProps> = ({ sortInputProps, tags, selectInputProps }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [activeTags, setActiveTags] = React.useState<string[]>(searchParams?.get("tag")?.split(",") ?? []);

  useEffect(() => {
    const params = new URLSearchParams(searchParams?.toString() ?? "");
    const tagsParam = activeTags.join(",");
    if (tagsParam) {
      params.set("tag", tagsParam);
    } else {
      params.delete("tag");
    }
    const url = `${pathname}?${params.toString()}`;
    router.push(url, {
      scroll: false,
    });
  }, [activeTags, pathname, router, searchParams]);

  const handleSetActiveTags = (tag: string) => {
    setActiveTags((prevActiveTags) => {
      if (prevActiveTags.includes(tag)) {
        return prevActiveTags.filter((activeTag) => activeTag !== tag);
      } else {
        return [...prevActiveTags, tag];
      }
    });
  };

  return (
    <div className="search-sort-area-container">
      <Stack>
        <div className="search-select">
          <SearchInput />
          <SelectInput
            {...selectInputProps}
            resetActiveTags={() => {
              setActiveTags([]);
            }}
          />
        </div>
        <div className="btns-container">
          {tags &&
            tags.map((tag) => (
              <Button
                key={tag.id}
                className={activeTags.includes(tag.id) ? "search-sort-area-btn active-btn" : "search-sort-area-btn"}
                variant="contained"
                disableElevation
                onClick={() => handleSetActiveTags(tag.id)}
              >
                {tag.tag}
              </Button>
            ))}
        </div>
      </Stack>
      <Box sx={{
        minWidth:"300px"
      }}>

      <SortInput {...sortInputProps} />
      </Box>
    </div>
  );
};
