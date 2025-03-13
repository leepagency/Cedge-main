import "./styles.scss";

import { Box, Tab, Tabs } from "@mui/material";

import { MainContainer } from "../mainContainer";
import React from "react";

interface ButtonTabsProps {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  tabs: string[];
  onClick?: () => void;
}

export const ButtonTabs: React.FC<ButtonTabsProps> = ({ value, setValue, tabs, onClick }) => {
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box className="button-tabs-container">
      <MainContainer type="center">
        <Tabs value={value} onChange={handleChange} className="-button-tabs">
          {tabs.map((tab, index) => (
            <Tab value={index} label={tab} key={index} className="--button-tab" onClick={onClick} />
          ))}
        </Tabs>
      </MainContainer>
    </Box>
  );
};
