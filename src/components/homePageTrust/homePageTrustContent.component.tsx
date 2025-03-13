import "./styles.scss";

import { MainContainer, MainTitle, SectionContainer, TrustSlider } from "@/common";

import { ICapabilityClients } from "@/types";
import React from "react";
import { useTranslations } from "next-intl";

type HomePageTrustContentProps = {
  title?: string;
  clients:
    | ICapabilityClients[]
    | {
        id: number;
        image: string;
        order: number;
      }[];
};

const HomePageTrustContent: React.FC<HomePageTrustContentProps> = ({ clients }) => {
  const t = useTranslations("homeTrust");
  return (
    <MainContainer type="center">
      <div className="home-trust-container">
        <SectionContainer>
          <MainTitle title={t("title")} />
          <div className="flex">
            <TrustSlider noArrow={false} clients={clients} />
          </div>
        </SectionContainer>
      </div>
    </MainContainer>
  );
};
export default HomePageTrustContent;
