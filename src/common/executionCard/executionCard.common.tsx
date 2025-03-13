"use client";

import { Stack, Typography } from "@mui/material";
import React from "react";
import CountUp from "react-countup";
import "./styles.scss";

interface ExecutionCardProps {
  number: number;
  numberAppendix?: string;
  title: string;
  type: "square" | "rectangle";
}

export const ExecutionCard: React.FC<ExecutionCardProps> = ({
  type,
  number,
  title,
  numberAppendix,
}) => {
  return (
    <Stack
      className={`execution-card-container ${
        type === "square" ? "square-execution-card" : "rectangle-execution-card"
      }`}
    >
      <Typography>
        {numberAppendix ? (
          number + " " + numberAppendix
        ) : (
          <CountUp end={number} duration={2} enableScrollSpy scrollSpyOnce />
        )}
      </Typography>
      <Typography>{title}</Typography>
    </Stack>
  );
};
