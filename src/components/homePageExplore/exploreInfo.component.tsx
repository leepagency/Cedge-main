import { IHomeExplore } from "@/types";
import { MainParagraph } from "@/common";
import React from "react";
import { Stack } from "@mui/material";

// import { useTranslations } from "next-intl";

export const ExploreInfo: React.FC<IHomeExplore> = ({ description }) => {
  // const t = useTranslations("homeExplore");
  return (
    <Stack
      spacing={{
        xs: 2,
        md: 3,
        lg: 4,
        xl: 7,
      }}
    >
      <MainParagraph text={description} />
      <Stack
        spacing={{
          xs: 2,
          md: 3,
          lg: 4,
        }}
      >
        {/* {bullet1 && <SmallText text={bullet1} />}
        {bullet2 && <SmallText text={bullet2} />}
        {bullet3 && <SmallText text={bullet3} />} */}
      </Stack>
    </Stack>
  );
};
