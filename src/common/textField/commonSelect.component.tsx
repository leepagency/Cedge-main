import "./styles.scss";

import { Control, Controller } from "react-hook-form";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { IContactForm } from "@/types";
import React from "react";
import { useTranslations } from "next-intl";

interface CommonTextFieldProps {
  name: "name" | "phone" | "email" | "subject" | "body";
  control: Control<IContactForm>;
  placeholder: string;
  multiline?: boolean;
}

export const CommonSelect: React.FC<CommonTextFieldProps> = ({ control, name, placeholder, multiline }) => {
  const t = useTranslations("contactForm");
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormControl
          sx={{
            width: "100%",
          }}
        >
          <InputLabel
            sx={{
              color: "grey",
              "&.MuiInputLabel-root": {
                color: "#969696",
              },
            }}
            id="select-subject"
          >
            {placeholder}
          </InputLabel>

          <Select
            fullWidth
            className="common-text-field"
            id="select-subject"
            label={placeholder}
            //   placeholder={placeholder}
            multiline={multiline}
            {...field}
            error={fieldState.error ? true : false}
            size="small"
            defaultValue="0"
            sx={{
              "& .MuiInputLabel-root": {
                color: "red",
              },
            }}
          >
            {/* <MenuItem value="0">{t("subject")} </MenuItem> */}
            <MenuItem value={"1Select"}>{t("1Select")}</MenuItem>
            <MenuItem value={"2Select"}>{t("2Select")}</MenuItem>
            <MenuItem value={"3Select"}>{t("3Select")}</MenuItem>
            <MenuItem value={"4Select"}>{t("4Select")}</MenuItem>
            <MenuItem value={"5Select"}>{t("5Select")}</MenuItem>
            <MenuItem value={"6Select"}>{t("6Select")}</MenuItem>
            <MenuItem value={"7Select"}>{t("7Select")}</MenuItem>
          </Select>
        </FormControl>
      )}
    />
  );
};
