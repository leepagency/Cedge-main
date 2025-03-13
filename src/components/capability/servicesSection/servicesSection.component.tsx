"use client";

import "./styles.scss";

import { AboutVisionMission } from "@/common";
import { ICapabilityService } from "@/types";
import React from "react";

// import missionIcon from "@/assets/shapes/torus.svg";
// import planeIcon from "@/assets/shapes/plane.svg";
// import visionIcon from "@/assets/shapes/icosphere.svg";

interface ServicesSectionProps {
  services: ICapabilityService[];
}
const renderCards = (myNewArray: ICapabilityService[]) => {
  return myNewArray.map((item: ICapabilityService, itemIndex: number) => {
    // let reverse = false;
    // let isColumn = false;
    // if (itemIndex % 5 === 0 || itemIndex === 0) {
    //   reverse = false;
    //   isColumn = false;
    // } else if ((itemIndex % 5) - 1 === 0) {
    //   reverse = true;
    // } else {
    //   isColumn = true;
    //   reverse = false;
    // }
    return (
      <React.Fragment key={itemIndex}>
        <AboutVisionMission
          key={item.title}
          className="capability-services-section-card-container"
          title={item.title}
          description={item.description}
          reverse={item.is_reversed}
          isColumn={item.is_column}
          image={item.icon}
        />
      </React.Fragment>
    );
  });
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return <div className="capability-Services-Section-container">{renderCards(services)}</div>;
};
