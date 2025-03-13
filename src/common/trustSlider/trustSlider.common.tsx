"use client";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./styles.scss";

import { IconButton, Stack } from "@mui/material";
import React, { useRef } from "react";

import { ICapabilityClients } from "@/types";
import Image from "next/image";
import Slider from "react-slick";
import { SliderImageCard } from "..";
import arrowLeft from "../../assets/shapes/left-arrow.svg";
import arrowRight from "../../assets/shapes/right-arrow.svg";

type TrustSliderProps = {
  noArrow?: boolean;
  clients: ICapabilityClients[];
};

export const TrustSlider: React.FC<TrustSliderProps> = ({ noArrow = false, clients }) => {
  const settings = {
    slidesToShow: 4,
    swipe: true,
    infinite: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const sliderRef = useRef<Slider>(null);
  const btnStyles = {
    width: "60px",
    height: "60px",
    "&:hover": {
      backgroundColor: "#101010",
      borderRadius: ".875rem",
    },
  };

  const handleArrowClick = (direction: "left" | "right") => {
    if (direction === "left") {
      sliderRef.current?.slickPrev();
    } else {
      sliderRef.current?.slickNext();
    }
  };
  if (clients?.length === 0 || !clients) return null;

  return (
    <div className="trust-slider-container">
      <Slider {...settings} ref={sliderRef}>
        {clients.map((client) => {
          return <SliderImageCard key={client.id} image={client.image} />;
        })}
      </Slider>
      {!noArrow && (
        <Stack
          direction={{
            xs: "row",
          }}
          spacing={2}
          justifyContent="center"
          sx={{
            position: "absolute",
            bottom: "0rem",
            left: "0",
            zIndex: 1,
            "[dir=rtl] &": {
              img: {
                transform: "rotate(180deg)",
              },
            },
          }}
        >
          <IconButton
            sx={btnStyles}
            onClick={() => {
              handleArrowClick("left");
            }}
          >
            <Image src={arrowLeft} alt="arrow-left" />
          </IconButton>
          <IconButton
            sx={btnStyles}
            onClick={() => {
              handleArrowClick("right");
            }}
          >
            <Image src={arrowRight} alt="arrow-right" />
          </IconButton>
        </Stack>
      )}
    </div>
  );
};
