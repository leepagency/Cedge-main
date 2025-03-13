import { ICapability, IIndustry, headerItemType } from "@/types";
import { useTranslations } from "next-intl";

import { HeaderItem } from "@/common";
import React from "react";

interface HeaderItemsContentProps {
  capabilities?: ICapability[];
  industries?: IIndustry[];
}

export const HeaderItemsContent: React.FC<HeaderItemsContentProps> = ({ capabilities }) => {
  const t = useTranslations("header");
  // const locale = useLocale();

  const subCapabilities = capabilities?.map((capability) => ({
    title: capability.name,
    href: `/services/${capability.slug}`,
  }));

  const headerItem: headerItemType[] = [
    {
      title: t("home"),
      href: "/",
    },
    {
      title: t("about"),
      href: "/about",
    },
    {
      title: t("industries"),
      href: "/industries",
    },
    {
      title: t("capabilities"),
      href: "/services",
      subItems: subCapabilities,
    },
    {
      title: t("blog"),
      href: "/blog",
    },
  ];
  return (
    <div className="header-items-container">
      {headerItem.map((item) => (
        <HeaderItem key={item.href} title={item.title} href={item.href} subItems={item?.subItems} />
      ))}
    </div>
  );
};
