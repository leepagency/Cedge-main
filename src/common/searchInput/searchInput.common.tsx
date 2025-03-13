"use client";

import "./styles.scss";

import { IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { SearchIcon } from "@/assets";
import { useDebounce } from "use-debounce";
import { useTranslations } from "next-intl";

interface SearchInputProps {
  // url: string;
}

export const SearchInput: React.FC<SearchInputProps> = () => {
  const t = useTranslations("commons");

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [text, setText] = useState(searchParams?.get("search_text") || "");
  const [query] = useDebounce(text, 750);

  function handleSearch(term: string) {
    setText(term);
  }
  useEffect(() => {
    if (!searchParams) return;
    
    const params = new URLSearchParams(searchParams.toString());
    if (query === "") {
      params.delete("search_text");
      const url = `${pathname}?${params.toString()}`;
      router.push(url, {
        scroll: false,
      });
      return;
    }

    params.set("search_text", query);
    const url = `${pathname}?${params.toString()}`;
    router.push(url, {
      scroll: false,
    });
    // router.refresh();
  }, [query, pathname, router, searchParams]);

  return (
    <TextField
      defaultValue={searchParams?.get("search_text") || ""}
      value={text}
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      sx={{
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#fff !important",
        },
      }}
      className="search-input-container"
      placeholder={t("search")}
      InputProps={{
        style: {
          backgroundColor: "rgba(255, 248, 248, 0.1)",
          borderRadius: "12px",
          color: "#fff",
          minHeight: 0,
          height: "100% ",
          paddingBlock: 0,
        },
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
