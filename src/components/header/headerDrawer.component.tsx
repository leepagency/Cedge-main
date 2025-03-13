"use client";

import * as React from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { HeaderLogo } from "@/assets";
import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useLocale, useTranslations } from "next-intl";

type Props = {
  open: boolean;
  handleClose: () => void;
};

export const HeaderDrawer: React.FC<Props> = ({ open, handleClose }) => {
  const locale = useLocale();
  // const [open, setOpen] = React.useState(false);

  // const toggleDrawer = (newOpen: boolean) => () => {
  //   setOpen(newOpen);
  // };
  const t = useTranslations("header");

  const links = [
    {
      title: t("home"),
      href: "/",
    },
    {
      title: t("about"),
      href: `/${locale}/about`,
    },
    {
      title: t("industries"),
      href: `/${locale}/industries`,
    },
    {
      title: t("capabilities"),
      href: `/${locale}/services`,
    },
    {
      title: t("blog"),
      href: `/${locale}/blog`,
    },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} onClick={handleClose}>
      <List
        sx={{
          width: 250,
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: 0,
          "& a": {
            textDecoration: "none",
            color: "inherit",
          },
        }}
      >
        {links.map((text) => (
          <Link href={text.href} key={text.title}>
            <ListItem
              disablePadding
              sx={{
                "&:hover": {
                  backgroundColor: "#333",
                },
              }}
            >
              <ListItemButton>
                <ListItemText
                  primary={text.title}
                  sx={{
                    color: "#fff",
                    fontSize: "1.25rem",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: "#000",
          padding: "2rem 0",
        },
      }}
    >
      {/* <BackgroundParticles /> */}
      <Link href="/">
        <Box
          onClick={handleClose}
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          <HeaderLogo />
        </Box>
      </Link>

      {DrawerList}
    </Drawer>
  );
};
