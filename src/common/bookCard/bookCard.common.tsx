import "./styles.scss";

import { Button, Stack } from "@mui/material";

import { ViewIcon } from "@/assets";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

interface BookCardProps {
  image: string;
  title?: string;
  id: string;
  slug: string;
}

export const BookCard: React.FC<BookCardProps> = ({ image, slug }) => {
  const t = useTranslations("commons");
  const locale = useLocale();
  return (
    <Link href={`/${locale}/blog/e-books/${slug}`}>
      <Stack
        className="book-card-container"
        sx={{
          background: `url(${image})`,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <Typography sx={{

        }}>{title}</Typography> */}
        <div className="shadow"></div>
        <div className="btn-container">
          <Button variant="outlined" startIcon={<ViewIcon />} className="view-btn" disableElevation disableRipple>
            {t("view")}
          </Button>
        </div>
      </Stack>
    </Link>
  );
};
