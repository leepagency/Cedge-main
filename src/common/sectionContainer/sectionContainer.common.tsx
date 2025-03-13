import React from "react";
import { Stack } from "@mui/material";

interface SectionContainerProps {
  children: React.ReactNode;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({ children }) => {
  return (
    <Stack
      spacing={{
        xs: 2,
        sm: 4,
        md: 6,
        lg: 8,
        xl: 10,
      }}
      sx={{
        margin: "0 0 5vw 0",
        overflowX: "hidden",
      }}
    >
      {children}
    </Stack>
  );
};
