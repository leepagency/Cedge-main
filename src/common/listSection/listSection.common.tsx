import "./styles.scss";

import { IServiceIndustry } from "@/types";
import { MainShadow } from "../mainShadow";
import React from "react";
import { Stack } from "@mui/material";

// import { useTranslations } from "next-intl";

interface ListSectionProps {
  title: string;
  items: IServiceIndustry[];
}

export const ListSection: React.FC<ListSectionProps> = ({ title, items }) => {
  // const t = useTranslations("commons");
  return (
    <div className="list-section-container">
      <MainShadow
        styles={{
          rotate: "343deg",
        }}
      />
      <div className="-list-section-block"></div>
      <div className="-list-section-list">
        <h4 className="--list-title">{title}</h4>
        <div className="--list-items-container industry">
          {items.map((item) => (
            <Stack className="---list-items" key={item.id}>
              <h5 className="----list-item-title">{item.title}</h5>
              {/* <p className="----list-item-description">
              </p> */}
              <div className="----list-item-description" dangerouslySetInnerHTML={{ __html: item?.description }} />
            </Stack>
          ))}
        </div>
      </div>
    </div>
  );
};
