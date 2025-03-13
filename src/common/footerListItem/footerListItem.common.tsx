"use client";
import "./styles.scss";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";
import { Typography } from "@mui/material";

interface FooterListItemProps {
  item: string;
  link?: string;
}

export const FooterListItem: React.FC<FooterListItemProps> = ({ item, link }) => {
  const router = useRouter();
  return (
    <motion.div 
      className={"clickable"}
      onClick={() => link && router.push(`${link}`)}
    >
      <Typography component="div" className="footer-list-item">
        {item && (
          <div
            dangerouslySetInnerHTML={{
              __html: item,
            }}
          />
        )}
        {/* {item} */}
      </Typography>
    </motion.div>
  );
};
