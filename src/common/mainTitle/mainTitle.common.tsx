import "./styles.scss";

import React from "react";
import { Typography } from "@mui/material";

// import { AnimateLTR } from "..";

interface MainTitleProps {
  title: string;
  className?: string;
}

export const MainTitle: React.FC<MainTitleProps> = ({ title, className }) => {
  return (
    // <AnimateLTR>
    <Typography variant="h2" className={`main-title ${className}`}>
      {title}
    </Typography>
    // </AnimateLTR>
  );
};
