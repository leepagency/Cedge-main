import "./styles.scss";

import { ExploreCube, ExploreInfo, GridContainer } from ".";
import { IHomeExplore, IHomePioneer } from "@/types";
import { MainContainer, MainTitle } from "@/common";

import Image from "next/image";
import { Stack } from "@mui/material";
import shadow from "../../assets/shapes/explore-shadow.svg";

type Props = {
  explore: IHomeExplore[];
  pioneer: IHomePioneer[];
};

const HomePageExploreContent = ({ explore, pioneer }: Props) => {
  return (
    <div className="home-explore-container">
      {explore[0].status && (
        <MainContainer type="center">
          <Image src={shadow} alt="home-explore-shadow" 
            unoptimized // Disable srcset and use src only
          className="explore-shadow" />
          <Stack
            spacing={{
              xs: 1,
              md: 10,
              xl: 14,
            }}
          >
            <MainTitle title={explore[0].title} />
            <div className="home-explore-content">
              <ExploreCube />
              {explore?.length > 0 && <ExploreInfo {...explore[0]} />}
            </div>
          </Stack>
        </MainContainer>
      )}
      {/* {pioneer[0].status && ( */}
      <MainContainer type="center">
        <GridContainer pioneer={pioneer} />
      </MainContainer>
      {/* )} */}
    </div>
  );
};
export default HomePageExploreContent;
