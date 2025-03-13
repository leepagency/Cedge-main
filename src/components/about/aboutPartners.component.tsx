// import { MainContainer, SectionContainer } from "@/common";

import dynamic from "next/dynamic";
import React from "react";
import Loader from "../loader/loader.component";
import { MainContainer } from "@/common";

// import { useTranslations } from "next-intl";

interface AboutPartnersProps {
  title: string;
  partners: {
    id: number;
    icon: string;
    order: number;
  }[];
}

const HomePageTrustContentComponent = dynamic(() => import('../../components/homePageTrust/homePageTrustContent.component'), {
  ssr: true, // Optional: Disable server-side rendering if needed
  loading: () => <Loader />
});

export const AboutPartners: React.FC<AboutPartnersProps> = ({ title, partners }) => {
  // const t = useTranslations("about");
  return (
    <MainContainer type="center">
      <div className="about-partners-slider">
        <HomePageTrustContentComponent
          title={title}
          clients={partners.map((partner) => ({
            id: partner.id,
            image: partner.icon,
            order: partner.order,
          }))}
        />
      </div>
    </MainContainer>
  );
};

// <SectionContainer>
// <MainContainer type="left">
{
  /* <div className="about-partners-container">
          {partners.map((partner, index) => (
            <SliderImageCard key={index} image={partner.icon} />
          ))}
          <div className="title-container">
            <MainTitle title={title} />
          </div>
        </div> */
}

{
  /* </MainContainer> */
}
// </SectionContainer>
