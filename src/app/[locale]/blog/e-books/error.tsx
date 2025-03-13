"use client";
import { Typography, Button } from "@mui/material";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <>
      <Typography variant="h5">Sorry, Something went wrong.</Typography>
      <Link href="/">
        <a>
          <Button variant="text">Go to Home</Button>
        </a>
      </Link>
    </>
  );
};
export default PageNotFound;
