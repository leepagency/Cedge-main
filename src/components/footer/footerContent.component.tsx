import "./styles.scss";

import { CopyRights, GetInTouch } from "@/components";
import { FooterListHeader, FooterListItem } from "@/common";
import { ICapability, IFooter, IIndustry } from "@/types";
import { useLocale, useTranslations } from "next-intl";

import React from "react";
import { SocialLinks } from "./SocialLinks.component";
import { Stack } from "@mui/material";

interface FooterContentProps {
  data: IFooter;
  capabilities?: ICapability[];
  industries?: IIndustry[];
  showContent: boolean;
}

const FooterContent: React.FC<FooterContentProps> = ({ data, industries, capabilities, showContent = true }) => {
  const t = useTranslations("header");
  const locale = useLocale();
  
  if (!data) return <></>;
  return (
    <Stack>
      <Stack className="footer-content">
        <SocialLinks data={data} />
        <Stack
          direction={{ md: "row" }}
          justifyContent={"space-between"}
          width={"100%"}
          display={{ xs: "none", lg: "flex" }}
          spacing={2}
        >
          <FooterListHeader header={t("home")}>
            <FooterListItem item={t("about")} link={`/${locale}/about`} />
            <FooterListItem item={t("blog")} link={`/${locale}/blog`} />
            <FooterListItem item={t("capabilities")} link={`/${locale}/services`} />
            <FooterListItem item="Privacy Policy" link={`/${locale}/privacy-policy`} />
          </FooterListHeader>
          <FooterListHeader header={t("industries")}>
            {industries?.map((industry) => (
              <FooterListItem key={industry.id} item={industry.name} link={`/${locale}/industries/${industry.slug}`} />
            ))}
          </FooterListHeader>
          <FooterListHeader header={t("capabilities")} span={2}>
            {capabilities?.map((capability) => (
              <FooterListItem
                key={capability.id}
                item={capability.name}
                link={`/${locale}/services/${capability.slug}`}
              />
            ))}
          </FooterListHeader>
        </Stack>
        <GetInTouch address={data.address} />
      </Stack>
      {showContent && <CopyRights />}
    </Stack>
  );
};

export default FooterContent;
