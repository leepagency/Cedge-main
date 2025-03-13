import "./styles.scss";

import React from "react";
import { Typography } from "@mui/material";

interface HeroTitleProps {
  title: string;
  head:boolean;
}

export const HeroTitle: React.FC<HeroTitleProps> = ({ title , head=false }) => {
  return (
    <Typography className="hero-title" variant={head ? "h1" :"h2"}>
      {title}
    </Typography>
  );
};
