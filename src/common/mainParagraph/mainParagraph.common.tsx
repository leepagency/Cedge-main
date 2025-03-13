import "./styles.scss";

import React from "react";
import { Typography } from "@mui/material";

interface MainParagraphProps {
  text: string;
}

export const MainParagraph: React.FC<MainParagraphProps> = ({ text }) => {
  return (
    <Typography component="div" className="main-paragraph">
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </Typography>
  );
};
