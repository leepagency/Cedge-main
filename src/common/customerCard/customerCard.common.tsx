import "./styles.scss";

import { Stack, Typography } from "@mui/material";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface CustomerCardProps {
  image: StaticImageData | string;
  name: string;
  position: string;
  quote: string;
  active?: boolean;
}

export const CustomerCard: React.FC<CustomerCardProps> = ({ name, image, position, active, quote }) => {
  return (
    <Stack 
    sx={{
      width: {
        sm: '20rem',
        md: '35rem', 
        lg: '35rem', // 50rem for large screens and above
      },
    }}
    className={`${active ? "customer-card-active customer-card-container" : "customer-card-container"}`}>
      <Image src={image} unoptimized alt="person" width={200} height={200} style={{ objectFit: 'cover' }} />
      {/* Name */}
      {/* <p className="customer-card-sign">،،</p> */}
      <Stack alignItems={"center"}>
        <Typography className="customer-card-name">{name}</Typography>
         {/* Position */}
        <Typography 
        className="customer-card-position" 
        textAlign="center" 
        sx={{ 
          textWrap: "nowrap", 
          }}
          >
          {position}
        </Typography>
      </Stack>
            {/* Quote */}

      <Typography className="customer-card-quote">
        {/* <div dangerouslySetInnerHTML={{ __html: quote }} /> */}
        <span className="font-30">"</span>{quote}<span className="font-30">"</span>
        </Typography>
    </Stack>
  );
};
