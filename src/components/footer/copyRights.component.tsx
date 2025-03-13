import {  Divider, Stack, Typography } from "@mui/material";
import React from "react";
import "./styles.scss";

interface CopyRightsProps {}

export const CopyRights: React.FC<CopyRightsProps> = () => {
  return (
    <Stack className="footer-copy-rights">
      <Divider
        variant="fullWidth"
        flexItem
        sx={{
          maxWidth: "80vw",
          margin: "0 auto",
          opacity: 0.2,
        }}
      />
      <Stack>
        <Typography className="copy-rights-text">Cedge © Copyright {(new Date().getFullYear())}, All Rights Reserved</Typography>
        {/* <Box>
          <Typography>Designed By </Typography>
          <Typography> IMMRSV</Typography>
        </Box> */}
      </Stack>
    </Stack>
  );
};
