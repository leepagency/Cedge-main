import "./styles.scss";

import { ArticleCard } from "../articleCard";
import { DownloadBtn } from "../downloadBtn";
import { IArticle } from "@/types";
import { MainCardsGrid } from "../mainCardGrid";
import React from "react";
import { Container, Stack } from "@mui/material";
import { useTranslations } from "next-intl";

interface ItemDetailsProps {
  // isHasDownloadBtn?: boolean;
  iSHasRelated?: boolean;
  subTitle?: string;
  relatedCard?: IArticle[];
  children: React.ReactNode;
  relatedType?: string;
  downloadUrl?: string;
  article?: boolean;
  type?:string;
}

export const ItemDetails: React.FC<ItemDetailsProps> = ({
  // isHasDownloadBtn,
  iSHasRelated,
  subTitle,
  relatedCard,
  children,
  relatedType,
  downloadUrl,
  article,
  type
}) => {
  const t = useTranslations("item-details");
  return (
    <Stack
      className="item-details-container"
      spacing={4}
      sx={{
        "& h1,p,span,h5": {
          color: type === "ebook" ||  type === "reports"  ? "#fff !important" : "#000 !important",
        },
      }}
    >
      {subTitle ? (
        <div className="item-details-sub-title-container">
          <h3 className="item-details-sub-title-main">{subTitle}</h3>
          <span className="item-details-sub-title-sub">{subTitle}</span>
        </div>
      ) : null}
      {article && (
        <Container
          sx={{
            margin: "0 auto !important",
          }}
          maxWidth="md"
        >
          {children}
        </Container>
      )}
      {!article && children}
      {downloadUrl ? <DownloadBtn downloadUrl={downloadUrl} /> : null}
      {iSHasRelated ? (
        <Stack className="related-card-container">
          <h5 className="related-card-title">{` ${t(relatedType)}  ${t("related")}`}</h5>
          <MainCardsGrid>
            {relatedCard?.map((card) => (
              <ArticleCard
                key={card.id}
                title={card.header_title}
                id={card.id}
                slug={card.slug}
                image={card.image}
                isFeaturedArticle={false}
                isHasOnlyIcon={false}
                date={card.date_of_publish}
                isSmallCard
              />
            ))}
          </MainCardsGrid>
        </Stack>
      ) : null}
    </Stack>
  );
};
