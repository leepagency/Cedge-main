import React from "react";
import Image from "next/image";
import { IconButton } from "@mui/material";

interface SliderArrowProps {
  arrow: string;
  style?: {};
  className?: string;
  onClick?: () => void;
  width: string;
  height: string;
}

export const SliderArrow: React.FC<SliderArrowProps> = ({
  style,
  className,
  onClick,
  arrow,
  width,
  height,
}) => {
  return (
    <IconButton
      sx={{ position: "absolute", width, height }}
      style={{ ...style }}
      className={className}
      onClick={onClick}
    >
      <Image src={arrow} alt="arrow-left" 
      unoptimized // Disable srcset and use src only

      />
    </IconButton>
  );
};
