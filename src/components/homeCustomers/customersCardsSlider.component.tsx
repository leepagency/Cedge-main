"use client";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./styles.scss";

import { CustomerCard } from "@/common";
import { IHomeTestimonials } from "@/types";
import { Stack } from "@mui/material";
import React from "react";
import Slider from "react-slick";

// import profile from "../../assets/images/profile.png";

interface CustomerCardsSliderProps {
  testimonials: IHomeTestimonials[];
}

export const CustomerCardsSlider: React.FC<CustomerCardsSliderProps> = ({ testimonials }) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 2,
    speed: 1000,
    centerPadding: "300px",
    arrows: false,
    responsive: [
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 2,
          centerPadding: "220px",
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          centerPadding: "200px",
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          centerPadding: "180px",
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          centerPadding: "120px",
        },
      },
    
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: "100px",
           // arrows: true,
          // prevArrow: <Image src={prevArrow} alt="prev-arrow" />,
          // nextArrow: <Image src={nextArrow} alt="prev-arrow" />,
        },
      },
    
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
           // arrows: true,
          // prevArrow: <Image src={prevArrow} alt="prev-arrow" />,
          // nextArrow: <Image src={nextArrow} alt="prev-arrow" />,
        },
      },
    ],
  };
  return (
    <Stack
      sx={{
        alignItems: "center",
        width: {
          xs: "90vw",
          md: "calc(100vw)",
        },
        margin: "0 auto",
        overflowX: {
          xs: "hidden",
        },
      }}
    >
      <div
        style={{
          width: "100%",
        }}
      >
        <Slider {...settings} autoplaySpeed={2500}>
          {testimonials.map((testimony) => (
            <CustomerCard
              key={testimony.id}
              image={testimony.image}
              name={testimony.name}
              position={testimony.position}
              quote={testimony.description}
            />
          ))}
        </Slider>
      </div>
    </Stack>
  );
};
