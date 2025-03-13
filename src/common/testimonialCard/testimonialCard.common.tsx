"use client";
import "./styles.scss";

import React from "react";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  job: string;
  image: string;
  quote: string;
  active?: boolean;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  job,
  active,
  image,
  quote,
}) => {
  return (
    <Stack
      sx={{
        width: {
          md: '37rem', 
          lg: '37rem', 
        },
      }}
      className={`customer-card-container1 ${active ? "customer-card-active" : ""}`}
    >
      <Image src={image} alt="person"
      unoptimized // Disable srcset and use src only
      width={200} height={200} style={{ objectFit: "cover" }} />
      {/* <p className="customer-card-sign">،،</p> */}
      <Stack alignItems={"center"}>
        <Typography className="customer-card-name">{name}</Typography>
        <Typography
          className="customer-card-position"
          textAlign="center"
          sx={{
            textWrap: "nowrap",
          }}
        >
          {job}
        </Typography>
      </Stack>
      <Typography className="customer-card-quote">
        {quote}
      </Typography>
    </Stack>
  );
};
