"use client";

import "./styles.scss";

import { ExecutionCards, ExecutionHero } from "@/components";
import { Stack, useMediaQuery } from "@mui/material";

import { IHomeExecution } from "@/types";
import { MainContainer } from "@/common";
import React from "react";

interface ExecutionSectionContentProps {
  execution: IHomeExecution[];
}

const ExecutionSectionContent: React.FC<ExecutionSectionContentProps> = ({ execution }) => {
  const matches = useMediaQuery("(max-width: 768px)");
  const { title, description1 } = execution[0];
  if (!title || !description1) return <></>;
  return (
    <MainContainer type={matches ? "center" : "left"}>
      <Stack className="execution-section-container">
        <ExecutionHero title={title} description={description1} />
        <ExecutionCards execution={execution} />
      </Stack>
    </MainContainer>
  );
};
export default ExecutionSectionContent;
