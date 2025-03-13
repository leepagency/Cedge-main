"use client";
import { MainTitle, SectionContainer } from "@/common";
import { CustomerCardsSlider } from "./customersCardsSlider.component";
import { IHomeTestimonials } from "@/types";
import React from "react";
import { Stack } from "@mui/material";
import { useTranslations } from "next-intl";

interface HomeCustomersContentProps {
  testimonials: IHomeTestimonials[];
}

const HomeCustomersContent: React.FC<HomeCustomersContentProps> = ({ testimonials }) => {
  const t = useTranslations("homeCustomers");
  return (
    <Stack gap={"3rem"}>
      <SectionContainer>
        <Stack>
          <MainTitle title={t("firstTitle") + " " + t("secondTitle")} />
          {/* <MainTitle title={} /> */}
        </Stack>
      </SectionContainer>
      <CustomerCardsSlider testimonials={testimonials} />
    </Stack>
  );
};

export default HomeCustomersContent;
