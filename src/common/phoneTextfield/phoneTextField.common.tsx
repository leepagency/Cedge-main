"use client";

import "react-phone-number-input/style.css";
import "./styles.scss";

import { Control, Controller, useFormState } from "react-hook-form";
import { IContactForm } from "@/types";
import PhoneInput from "react-phone-number-input";
import React from "react";
import { parsePhoneNumber } from "libphonenumber-js";

interface PhoneTextFieldProps {
  name: "phone";
  control: Control<IContactForm>;
  placeholder: string;
}

export const PhoneTextField: React.FC<PhoneTextFieldProps> = ({ name, control, placeholder }) => {
  const { errors } = useFormState({ control });
  
  // Validation function
  const validatePhone = (value: string) => {
    try {
      const phoneNumber = parsePhoneNumber(value);
      return phoneNumber.isValid() ? true : "Invalid phone number";
    } catch (error) {
      return "Invalid phone number";
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={{ validate: validatePhone }}
      render={({ field }) => (
        <>
          <PhoneInput
            className={`phone-text-field ${errors[name] ? 'error-border' : ''}`}
            placeholder={placeholder}
            onChange={(value) => {
              field.onChange(value);
            }}
            value={field.value}
            defaultCountry="SA"
          />
          {errors[name] && (
            <div className="error-message">{errors[name]?.message}</div>
          )}
        </>
      )}
    />
  );
};
