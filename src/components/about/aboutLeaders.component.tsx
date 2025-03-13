import "./aboutLeaders.scss";

import { LeaderCard, MainContainer, MainTitle } from "@/common";

import { ILeader } from "@/types";
import React from "react";

// import userImage from "@/assets/images/profile.png";

interface AboutLeadersProps {
  title: string;
  leaders: ILeader[];
}

export const AboutLeaders: React.FC<AboutLeadersProps> = ({ title, leaders }) => {
  return (
    <MainContainer type="center">
      <div className="leaders-title">
            <MainTitle title={title} className="small-title" />
      </div>
      <div className="about-leaders-container">
        {leaders.map((leader) => (
          <LeaderCard
            key={leader.id}
            title={leader.name}
            id={String(leader.id)}
            image={leader.image}
            cardFor={""}
            position={leader.position}
          />
        ))}
        {/* <LeaderCard title="Odai AlHazmi" id="5" image={firstImage} cardFor="" position="Chief Executive Officer" />
        <LeaderCard
          title="Mohammed AlHazmi"
          id="5"
          image={secondImage}
          cardFor=""
          position="Partner - BD & innovation"
        />
        <LeaderCard title="Abdullah Omar" id="5" cardFor="" />
        <LeaderCard title="Abdullah Omar" id="5" cardFor="" /> */}
      </div>
    </MainContainer>
  );
};
