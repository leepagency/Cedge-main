import { AboutContent } from "@/components";
import { IAbout } from "@/types";
import React from "react";

interface AboutHocProps {
  about: IAbout;
}

export const AboutHoc: React.FC<AboutHocProps> = ({ about }) => {
  return <AboutContent about={about} />;
};
