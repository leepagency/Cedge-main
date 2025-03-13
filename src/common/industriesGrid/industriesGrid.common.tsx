import "./styles.scss";

import { MainTitle } from "../mainTitle";
import React from "react";
import { useTranslations } from "next-intl";

interface IndustriesGridProps {
  children: React.ReactNode;
  mainTitle?: string;
}

export const IndustriesGrid: React.FC<IndustriesGridProps> = ({ children }) => {
  const t = useTranslations("industries");
  return (
    <>
      {/* <MainTitle title={mainTitle ? mainTitle : t("list-of-industries")} className="small-title" /> */}
      <MainTitle title={t("list-of-industries")} className="small-title" />
      <div className="industries-grid-container">{children}</div>
    </>
  );
};
