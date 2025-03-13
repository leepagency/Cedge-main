"use client";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./styles.scss";
import React, { useRef } from "react";
import Slider from "react-slick";

type TestimonialsSliderProps = {
  children: React.ReactNode;
};

export const TestimonialsSlider: React.FC<TestimonialsSliderProps> = ({
  children,
}) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3, // Show 3 cards
    speed: 1000,
    centerPadding: "400px", // Adjust padding to fit 3 cards
    arrows: false,
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 3,
          centerPadding: "0", // Hide extra cards
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          centerPadding: "220px",
        },
      },
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 2,
          centerPadding: "220px",
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  const sliderRef = useRef<Slider>(null);

  return (
    <div className="testimonials-slider-container">
      <Slider {...settings} ref={sliderRef}>
        {children}
      </Slider>
    </div>
  );
};
