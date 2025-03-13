import { Button } from "@mui/material";
import React from "react";
import "./styles.scss";

interface GenericButtonProps {
  buttonName: string;
  onClick: () => void;
  size: "small" | "large";
}

export const GenericButton: React.FC<GenericButtonProps> = ({ buttonName, onClick, size }) => {
  return (
    <Button
      className="generic-button"
      variant="contained"
      onClick={onClick}
      disableElevation
      sx={{
        width: {
          xs: "100%",
          md: size === "small" ? "180px !important" : "262px !important",
        },
        height: {
          xs: "40px",
          md: size === "small" ? "48px" : "80px",
        },
        fontWeight: "500",
      }}
    >
      {buttonName}
    </Button>
  );
};
