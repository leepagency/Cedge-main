"use client";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { AboutSlider } from "@/common";
import React from "react";

interface FindGrowthSliderProps {
  slides: { title: string; description: string }[];
  // sliderImage: string;
  sliderButtonText: string;
}

export const FindGrowthSlider: React.FC<FindGrowthSliderProps> = ({ sliderButtonText, slides }) => {
  return <AboutSlider sliderItems={slides} sliderButtonText={sliderButtonText} />;
};
