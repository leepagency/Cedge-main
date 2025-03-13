import "./styles.scss";

import { MainTitle } from "@/common";
import React from "react";
import { Stack } from "@mui/material";

// import { MainContainer } from "@/common";

interface ExecutionHeroProps {
  title: string;
  description: string;
}

export const ExecutionHero: React.FC<ExecutionHeroProps> = ({ title, description }) => {
  return (
    <Stack className="execution-hero-title">
      <MainTitle title={title} />

      {/* <MainTitle title={description} className="small-title-execution" /> */}
      <div dangerouslySetInnerHTML={{ __html: description }} className="small-text" />
    </Stack>
  );
};
