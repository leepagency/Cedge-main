import "./styles.scss";

import { MenuItem, TextField } from "@mui/material";
import { useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import React from "react";

// import { useTranslations } from "next-intl";

export interface SelectInputProps {
  options: { value: string; label: string }[];
  resetActiveTags?: () => void;
}

export const SelectInput: React.FC<SelectInputProps> = ({ options, resetActiveTags }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const handleSelectTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams?.toString() ?? "");
    params.set("type", e.target.value);
    params.delete("tag");
    resetActiveTags && resetActiveTags();
    const url = `${pathname}?${params.toString()}`;
    router.push(url, {
      scroll: false,
    });
    // revalidatePath(pathname);
  };
  const t = useTranslations("sort");
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
      className="select-input-container"
      InputProps={{
        style: {
          borderRadius: "12px",
          color: "#fff",
          minHeight: 0,
          height: "100% ",
          paddingBlock: 0,
          borderColor: "rgba(255, 255, 255, .25)",
          // menu background color
        },
      }}
      SelectProps={{
        MenuProps: {
          PaperProps: {
            sx: {
              backgroundColor: "black",
            },
          },
        },
      }}
      onChange={handleSelectTag}
      value={searchParams?.get("type") || "select"}
    >
      <MenuItem
        className="option"
        disabled
        value={"select"}
        sx={{
          color: "white",
        }}
      >
        {t("title")}
      </MenuItem>
      {options.map((option) => (
        <MenuItem
          className="option"
          key={option.value}
          value={option.value}
          sx={{
            color: "white",
          }}
        >
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
