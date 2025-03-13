import "./styles.scss";

import { Stack, Typography } from "@mui/material";

import React from "react";

interface AboutSliderItemProps {
  title: string;
  description: string;
}

export const AboutSliderItem: React.FC<AboutSliderItemProps> = ({ title, description }) => {
  return (
    <Stack
      className="find-growth-item"
      sx={{
        direction: "ltr",
      }}
    >
      <Typography variant="h2" className="-find-growth-item-title">
        {title}
      </Typography>
      <Typography className="-find-growth-item-description">
        {/* {description} */}
        <div
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </Typography>
    </Stack>
  );
};
