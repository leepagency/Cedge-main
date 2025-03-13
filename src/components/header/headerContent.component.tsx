"use client";

import "./styles.scss";

import { AppBar, IconButton, Stack, useMediaQuery, useTheme } from "@mui/material";
import { HeaderDrawer, HeaderItemsContent } from ".";
import { ICapability, IIndustry } from "@/types";

import { HeaderLogo } from "@/assets";
import { HeaderRequestBtn } from "@/common";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import drawerIcon from "../../assets/shapes/drawer.svg";

interface HeaderContentProps {
  capabilities?: ICapability[];
  industries?: IIndustry[];
}

const HeaderContent: React.FC<HeaderContentProps> = ({ capabilities, industries }) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <AppBar className="header" position="sticky">
      <Link href="/">
        <HeaderLogo />
      </Link>
      {isMobileOrTablet ? (
        <Stack spacing={0} alignItems="center" direction="row">
          <IconButton
            className="drawer-icon"
            onClick={() => {
              setOpen(true);
            }}
          >
            <Image src={drawerIcon} alt="menu" width={20} height={20} />
          </IconButton>
          <HeaderRequestBtn />
        </Stack>
      ) : (
        <>
        <IconButton
          className="drawer-icon d-none"
          onClick={() => {
            setOpen(true);
          }}
        >
          <Image src={drawerIcon} alt="menu" width={20} height={20} />
        </IconButton>
        <HeaderItemsContent capabilities={capabilities} industries={industries} />
        <HeaderRequestBtn />
        </>
      )}

      <HeaderDrawer open={open} handleClose={handleClose} />
    </AppBar>
  );
};

export default HeaderContent;
