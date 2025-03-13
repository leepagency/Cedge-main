import "./styles.scss";

import { Box, Tab, Tabs } from "@mui/material";

import { MainContainer } from "../mainContainer";
import React from "react";

// import { useTranslations } from "next-intl";

interface MainTabsProps {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  tabs: (string | false)[];
  ref?: string;
}

export const MainTabs: React.FC<MainTabsProps> = ({ value, setValue, tabs }) => {
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  // const t = useTranslations("commons");

  const handleClickedTab = (ref: string) => {
    let element = document.getElementById(ref);

    // add some space from the top when scrolling
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box className="tabs-container">
      <MainContainer type="center">
        <Tabs value={value} onChange={handleChange} className="tabs">
          {tabs.map((tab, index) => {
            if (tab) {
              return (
                <Tab
                  sx={{
                    // upper case first letter
                    textTransform: "capitalize",
                  }}
                  key={index}
                  label={tab as string}
                  className="tab"
                  onClick={() => {
                    handleClickedTab(tab as string);
                  }}
                />
              );
            } else {
              return <> </>;
            }
          })}
        </Tabs>
      </MainContainer>
    </Box>
  );
};
