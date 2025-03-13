import { Box } from "@mui/material";
import React from "react";

interface MainContainerProps {
  type: "left" | "right" | "center";
  children: React.ReactNode;
  className?: string;
}

export const MainContainer: React.FC<MainContainerProps> = ({ children, type, className }) => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        width: "100%",
        // overflowX: "hi dden",
        maxWidth: {
          xs: "90vw",
          sm: type === "center" ? "88vw" : "90vw",
          md: type === "center" ? "80vw" : "90vw",
          lg: type === "center" ? "85vw" : "88vw",
          xl: type === "center" ? "82vw" : "86vw",
          xxl: type === "center" ? "72vw" : "86vw",
        },
        margin: {
          xs: type === "center" ? "0 auto" : type === "left" ? "0 0 0 auto" : "auto",
          sm: type === "center" ? "0 auto" : type === "left" ? "0 0 0 auto" : "0 auto 0 0",
        },
      }}
      className={className}
    >
      {children}
    </Box>
  );
};
