import { Typography } from "@mui/material";
import React from "react";
import "./styles.scss";
interface SmallTextProps {
  text: string;
}

export const SmallText: React.FC<SmallTextProps> = ({ text }) => {
  return (
    <Typography variant="body2" className="small-text">
      {text}
    </Typography>
  );
};
