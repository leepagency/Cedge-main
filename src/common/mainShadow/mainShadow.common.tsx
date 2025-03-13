import { Box } from "@mui/material";
import React from "react";

type Props = {
  styles?: {
    [key: string]:
      | string
      | {
          xs: string | number;
          sm?: string | number;
          md?: string | number;
          lg?: string | number;
          xl?: string | number;
        }
      | string;
  };
};

export const MainShadow: React.FC<Props> = ({ styles }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        height: {
          xs: "200px",
          sm: "300px",
          md: "400px",
          lg: "500px",
          xl: "700px",
        },
        right: {
          xs: "-50px",
          sm: "-100px",
          md: "-150px",
          lg: "-200px",
          xl: "-550px",
        },
        top: "50%",
        transform: "translateY(-50%)",
        width: {
          xs: "200px",
          sm: "300px",
          lg: "400px",
        },
        borderRadius: "8px",
        background: "linear-gradient(134deg, #7172FF 24.86%, #FF7262 55.89%, #FFAEA5 77.59%)",
        filter: "blur(190.5px)",
        ...styles,
      }}
    />
  );
};
