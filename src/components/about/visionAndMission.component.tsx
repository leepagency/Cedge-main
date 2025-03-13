import { AboutVisionMission, MainContainer } from "@/common";

import React from "react";
import { Stack } from "@mui/material";

// import { useTranslations } from "next-intl";

interface VisionAndMissionProps {
  visionTitle: string;
  visionDescription: string;
  missionTitle: string;
  missionDescription: string;
  visionImage: string;
  missionImage: string;
}

export const VisionAndMission: React.FC<VisionAndMissionProps> = ({
  visionTitle,
  visionDescription,
  missionTitle,
  missionDescription,
  visionImage,
  missionImage,
}) => {
  // const t = useTranslations("about");
  return (
    <MainContainer type="center">
      <Stack className="about-vision-mission">
        <AboutVisionMission title={visionTitle} description={visionDescription} image={visionImage} />
        <AboutVisionMission title={missionTitle} description={missionDescription} image={missionImage} reverse />
      </Stack>
    </MainContainer>
  );
};
