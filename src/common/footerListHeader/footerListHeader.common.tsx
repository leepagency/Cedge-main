import "./styles.scss";

import { Stack, Typography } from "@mui/material";

import React from "react";

interface FooterListHeaderProps {
  header: string;
  children: React.ReactNode;
  span?: number;
}

export const FooterListHeader: React.FC<FooterListHeaderProps> = ({ header, children, span }) => {
  return (
    <Stack className={span ? "grid" : "footer-list-header"}>
      <Typography
        sx={{
          gridColumn: span ? `span ${span}` : "span 1",
        }}
      >
        {header}
      </Typography>
      {children}
    </Stack>
  );
};
