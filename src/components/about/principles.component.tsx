import "./principles.scss";

import { MainContainer, MainTitle, PrincipleCard } from "@/common";

import React from "react";

interface PrinciplesProps {
  title: string;
  principles: {
    title: string;
    description: string;
    icon: string;
  }[];
  // about: IAbout;
}
export const Principles: React.FC<PrinciplesProps> = ({ title, principles }) => {
  return (
    <MainContainer type="center">
      <MainTitle title={title} />
      <div className="principles-card-container">
        {principles.map((principle, index) => (
          <PrincipleCard
            key={index}
            title={principle.title}
            description={principle.description}
            image={principle.icon}
            reverse={index % 2 === 0}
          />
        ))}
      </div>
    </MainContainer>
  );
};
