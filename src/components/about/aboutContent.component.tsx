import "./styles.scss";

import {
  AboutLeaders,
  AboutPartners,
  AboutWho,
  ContactFormContent,
  FindGrowth,
  Principles,
  VisionAndMission,
} from "@/components";

import { Box } from "@mui/material";
import { IAbout } from "@/types";
import { MainBanner } from "@/common";
import React from "react";

interface AboutContentProps {
  about: IAbout;
}

export const AboutContent: React.FC<AboutContentProps> = ({ about }) => {
  const {
    // banner,
    header_image,
    title,
    description,
    section_one: { who_we_are_title, who_we_are_description },
    section_two: { slider_image, slider_button_text, slides },
    section_three: {
      mission_description,
      mission_title,
      vision_description,
      vision_title,
      vision_image,
      mission_image,
    },
    section_four: { our_principles_title, principles },
    section_five: { market_leaders_title, leaders },
    section_six: { partners_title, partners },
    section_seven: { get_in_touch_title },
  } = about.about;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: {
          xs: "2rem",
          md: "3rem",
          lg: "4rem",
          xl: "7rem",
        },
      }}
    >
       
      <MainBanner translation={false} title={title} backgroundImage={header_image} description={description} />
      <AboutWho title={who_we_are_title} description={who_we_are_description} />
      {slides.length > 0 && (
        <FindGrowth slides={slides} sliderImage={slider_image} sliderButtonText={slider_button_text} />
      )}
      <VisionAndMission
        missionDescription={mission_description}
        missionTitle={mission_title}
        visionDescription={vision_description}
        visionTitle={vision_title}
        missionImage={mission_image}
        visionImage={vision_image}
      />
      <Principles title={our_principles_title} principles={principles} />
      <AboutLeaders title={market_leaders_title} leaders={leaders} />
      <AboutPartners title={partners_title} partners={partners} />
      <ContactFormContent title={get_in_touch_title}/>
    </Box>
  );
};
