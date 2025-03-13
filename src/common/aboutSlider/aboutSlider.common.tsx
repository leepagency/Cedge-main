"use client";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./styles.scss";

import { Button, Stack } from "@mui/material";

import { AR_LOCALE } from "@/constants";
import { AboutSliderItem } from "@/common";
import { ArrowRightIcon } from "@/assets";
import { ContactUsModal } from "@/components";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import nextArrow from "../../assets/icons/next.svg";
import prevArrow from "../../assets/icons/prev.svg";
import { useLocale } from "next-intl";

interface AboutSliderProps {
  sliderItems: { title: string; description: string }[];
  sliderButtonText: string;
}

export const AboutSlider: React.FC<AboutSliderProps> = ({ sliderItems, sliderButtonText }) => {
  const localActive = useLocale();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Stack
      position={"relative"}
      className={`find-growth-slider ${localActive === AR_LOCALE && "rtl-find-growth-slider"}`}
    >
      {sliderItems.length > 1 ? (
        <Slider
          {...settings}
          arrows
          prevArrow={<Image src={prevArrow} alt="prev-arrow" />}
          nextArrow={<Image src={nextArrow} alt="prev-arrow" />}
        >
          {sliderItems.map((item, index) => (
            <AboutSliderItem key={index} title={item.title} description={item.description} />
          ))}
        </Slider>
      ) : (
        <AboutSliderItem title={sliderItems[0].title} description={sliderItems[0].description} />
      )}
      <Button
        className="-find-growth-button"
        endIcon={<ArrowRightIcon className={localActive === AR_LOCALE ? "rtl-icon" : ""} />}
        onClick={handleClick}
      >
        {sliderButtonText}
      </Button>
      <ContactUsModal open={open} handleClose={handleClick} />
    </Stack>
  );
};
