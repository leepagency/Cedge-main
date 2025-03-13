"use client";

import "./styles.scss";

import { MenuItem, TextField } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import React from "react";
import { useTranslations } from "next-intl";

export interface SortInputProps {
  options: { value: string; label: string }[];
}

export const SortInput: React.FC<SortInputProps> = ({ options }) => {
  const t = useTranslations("commons");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const handleSort = (e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams?.toString() ?? "");
    params.set("sort_key", e.target.value);
    const url = `${pathname}?${params.toString()}`;
    router.push(url, {
      scroll: false,
    });
    // revalidatePath(pathname);
  };
  return (
    <TextField
      defaultValue="select"
      sx={{
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "rgba(255, 255, 255, .25) !important",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "rgba(255, 255, 255, .25) !important",
        },
        "& .MuiSvgIcon-root": {
          color: "#fff",
          fontSize: "32px",
        },
      }}
      select
      className="sort-input-container"
      InputProps={{
        style: {
          backgroundColor: "rgba(255, 248, 248, 0.1)",
          borderRadius: "12px",
          color: "#fff",
          minHeight: 0,
          height: "100% ",
          paddingBlock: 0,
          borderColor: "rgba(255, 255, 255, .25)",
        },
      }}
      onChange={handleSort}
      value={searchParams?.get("sort_key") || "select"}
      SelectProps={{
        MenuProps: {
          PaperProps: {
            sx: {
              backgroundColor: "black",
            },
          },
        },}}
    >
      <MenuItem className="option" disabled value={"select"} sx={{
        color: "#fff",
      
      }}>
        {t("sort-by")}
      </MenuItem>
      {options.map((option) => (
        <MenuItem className="option" key={option.value} value={option.value} sx={{
          color: "#fff",
        
        }}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
