import "./styles.scss";

import { Control, Controller } from "react-hook-form";

import { IContactForm } from "@/types";
import React from "react";
import { TextField } from "@mui/material";

interface CommonTextFieldProps {
  name: "name" | "phone" | "email" | "subject" | "body";
  control: Control<IContactForm>;
  placeholder: string;
  multiline?: boolean;
}

export const CommonTextField: React.FC<CommonTextFieldProps> = ({ control, name, placeholder, multiline }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          className="common-text-field"
          placeholder={placeholder}
          multiline={multiline}
          minRows={multiline ? 4 : undefined}
          {...field}
          error={fieldState.error ? true : false}
        />
      )}
    />
  );
};
