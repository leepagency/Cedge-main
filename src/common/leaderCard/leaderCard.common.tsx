import "./styles.scss";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Stack } from "@mui/material";

// import { useTranslations } from "next-intl";

// import { useTranslations } from "next-intl";

interface LeaderCardProps {
  title?: string;
  image?: string;
  id: string;
  cardFor: string;
  className?: string;
  position?: string;
}

export const LeaderCard: React.FC<LeaderCardProps> = ({ title, className, image, position }) => {
  // const t = useTranslations("about");
  return (
    <Stack
      className={`custom-card-container ${className}`}
      sx={{
        background: image
          ? ""
          : `url(https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg)`,
      }}
    >
      {image && <Image src={image} unoptimized alt="leader" className="background-image" layout="fill" />}
      <Link href={`/`} className="-custom-card-link">
        <Stack spacing={2}>
          <h3 className="--card-title">{title}</h3>
          <h5 className="--card-subtitle">{position ? position : "CEO"}</h5>
        </Stack>
      </Link>
    </Stack>
  );
};

{
  /* <p className="--card-explore">
  <WorldIcon />
  <WorldIcon />
</p>; */
}
