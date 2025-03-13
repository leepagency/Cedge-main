"use client";

import "./styles.scss";

import { Box, useMediaQuery } from "@mui/material";
import { Link } from "../../navigation";
import React from "react";
import { headerItemType } from "@/types";
import { useSelectedLayoutSegment } from "next/navigation";

export const HeaderItem: React.FC<headerItemType> = ({ title, href, subItems }) => {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;
  const matches = useMediaQuery("(max-width: 1024px)");

  if (subItems && subItems.length > 0)
    return (
      <Box
        sx={{
          position: "relative",
          "&:hover": {
            ".sub-items": {
              display: "grid",
            },
          },
        }}
      >
        <Link
          aria-current={isActive ? "page" : undefined}
          className={isActive ? "header-item active" : "header-item"}
          href={href}
        >
          {title}
        </Link>
        {!matches && (
          <Box
            className="sub-items"
            sx={{
              display: "none",
              position: "absolute",
              top: "45px",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#000000",
              zIndex: 1,
              boxShadow: "1px -1px 22px 3px rgb(30 30 30 / 36%)",
              columnGap: "1.5rem",
              rowGap: "1.5rem",
              gridTemplateColumns: "1fr 1fr",
              alignContent: "start",
              padding: "3rem 3rem 3.5rem 3rem",
              // borderRadius: "1rem",
              width: "max-content",
              "&::before": {
                content: '""',
                position: "absolute",
                top: "-15px",
                left: "50%",
                transform: "translateX(-50%)",
                width: 0,
                height: 0,
                borderLeft: "1rem solid transparent",
                borderRight: "1rem solid transparent",
                borderBottom: "1rem solid white",
              },
            }}
          >
            {subItems.map((subItem) => (
              <Box
                sx={{
                  color: "white",
                  fontSize: "1.25rem",
                  fontWeight: 500,
                  textAlign: "start",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    // color: "black",
                    textDecoration: "underline",
                  },
                }}
                component={Link}
                key={subItem.href}
                href={subItem.href as "/about"}
              >
                {subItem.title}
              </Box>
            ))}
          </Box>
        )}
      </Box>
    );

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={isActive ? "header-item active" : "header-item"}
      href={href}
    >
      {title}
    </Link>
  );
};
