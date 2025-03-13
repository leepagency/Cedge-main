import { FindGrowthSlider } from "@/components";
import Image from "next/image";
import { MainContainer } from "@/common";
import React from "react";
import { Stack } from "@mui/material";

interface FindGrowthProps {
  slides: { title: string; description: string }[];
  sliderImage: string;
  sliderButtonText: string;
}

export const FindGrowth: React.FC<FindGrowthProps> = ({ sliderButtonText, slides, sliderImage }) => {
  return (
    <Stack className="find-growth-container">
      <Image src={sliderImage} layout="fill" alt="bg" className="bg"
       unoptimized // Disable srcset and use src only
        />
      <MainContainer type="center" className="-find-growth-content-container">
        <Stack className="--find-growth-content">
          <FindGrowthSlider sliderButtonText={sliderButtonText} slides={slides} />
        </Stack>
      </MainContainer>
    </Stack>
  );
};
