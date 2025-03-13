"use client";

import "./styles.scss";

import { ButtonTabs, CustomCard, ListSection, MainContainer, MainTabs } from "@/common";
import React, { useState } from "react";

import { ContactFormContent } from "@/components";
import { CustomSection } from "@/common/customSection";
import { IIndustry } from "@/types";
import { Stack, Typography } from "@mui/material";
import Slider from "react-slick";
import Image from "next/image";
import nextArrow from "../../assets/icons/next.svg";
import prevArrow from "../../assets/icons/prev.svg";
import { useTranslations } from "next-intl";

export const IndustryHoc: React.FC<IIndustry> = ({
  section_one,
  section_two,
  section_three,
  section_four,
  section_five,
  section_six,
  section_seven,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeButtonTab, setActiveButtonTab] = useState<number>(0);
  const t = useTranslations("capabilities");

  // const t = useTranslations("industries");
  const tabs = [
    section_one.status && section_one.navigation_title,
    section_two.status && section_two.navigation_title,
    section_three.status && section_three.navigation_title,
    section_four.insights.length > 0 && t("insights"),
    section_five.our_people.length > 0 && section_five.navigation_title,
    section_six.status && section_six.navigation_title,
    section_seven.status && section_seven.navigation_title,
  ];
  const btntabs = section_five.our_people.map((item) => item.main_title);
  return (
    <div className="industry-container">
      <MainTabs setValue={setActiveTab} value={activeTab} tabs={tabs} />
      <Stack className="-industry-content-container">
        <MainContainer type="center">
          {section_one.status && (
            <CustomSection
              id={section_one.navigation_title}
              className="--industry-section"
              image={section_one.image}
              // backgroundImage={image.src}
              title={section_one.title}
              // subTitle={section_one.sub_title}
              description={section_one.description}
            />
          )}
        </MainContainer>
        {section_two.status && (
          <div id={section_two.navigation_title}>
            <MainContainer type="right">
              <ListSection title={section_two.title} items={section_two.services} />
            </MainContainer>
          </div>
        )}
        {section_three.status && (
          <MainContainer type="center">
            <CustomSection
              id={section_three.navigation_title}
              isHasImage={false}
              className="--industry-section --industry-section-3"
              title={section_three.title}
              sectionDescription1={section_three.description}
            />
          </MainContainer>
        )}
        <ButtonTabs setValue={setActiveButtonTab} value={activeButtonTab} tabs={btntabs} />
        <MainContainer type="center">
          {section_five.our_people.length > 0 && (
            <>
              {section_five?.our_people.map((item, index) => {
                if (index === activeButtonTab) {
                  return (
                    <CustomSection
                      id={section_five.navigation_title}
                      key={item.id}
                      className="--industry-section --industry-section-4"
                      image={item.image}
                      title={item.title}
                      description={item.description}
                      insight
                    />
                  );
                } else {
                  return <></>;
                }
              })}
            </>
          )}

          {section_four.insights.length === 1 && (
            <div className="--section-wrapper" id={"insights"}>
              <h4 className="---tab-title">{t("insights")}</h4>
              <CustomCard
                cardFor={
                  section_four.insights[0].type === "article"
                    ? "blog"
                    : section_four.insights[0].type === "blog"
                    ? "blogs"
                    : section_four.insights[0].type === "report"
                    ? "reports"
                    : "ebooks"
                }
                id={section_four.insights[0].id.toString()}
                slug={section_four.insights[0].slug.toString()}
                image={section_four.insights[0].image}
                title={section_four.insights[0].title}
                subTitle={section_four.insights[0].description}
                insight
              />
            </div>
          )}
          {section_four.insights?.length > 1 && (
            <div className="--section-wrapper" id={"insights"} style={{overflow:"hidden"}} >
              <Typography
                sx={{
                  fontSize: {
                    xs: "1.5rem",
                    sm: "2rem",
                    md: "2.5rem",
                    lg: "3rem",
                    xl: "3.5rem",
                  },
                  fontWeight: "bold",
                }}
                className="---tab-title"
              >
                {t("insights")}
              </Typography>

              {/* <h4 className="---tab-title">{t("insights")}</h4> */}
              <Slider
                {...{
                  dots: false,
                  infinite: true,
                  speed: 500,
                  slidesToShow: section_four?.insights?.length > 4 ? 3 : section_four?.insights?.length,
                  slidesToScroll: 1,
                  prevArrow: <Image src={prevArrow} alt="prev-arrow" />,
                  nextArrow: <Image src={nextArrow} alt="prev-arrow" />,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: section_four?.insights?.length > 2 ? 3 : section_four?.insights?.length,
                        slidesToScroll: 1,
                      },
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: section_four?.insights?.length > 1 ? 2 : section_four?.insights?.length,
                        slidesToScroll: 1,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                      },
                    },
                  ],
                }}
              >
                {section_four.insights.map((insight) => (
                  <CustomCard
                    key={insight.id}
                    cardFor={
                      insight.type === "article"
                        ? "blog"
                        : insight.type === "blog"
                        ? "blogs"
                        : insight.type === "report"
                        ? "reports"
                        : "ebooks"
                    }
                    id={insight.id.toString()}
                    slug={insight.slug.toString()}
                    image={insight.image}
                    title={insight.title}
                    subTitle={insight.description}
                    insight
                  />
                ))}
              </Slider>
            </div>
          )}

          {section_six.status && (
            <CustomSection
              isBackgroundImage
              // backgroundImage={image.src}
              isHasGetInTouchBtn
              isReversedSection
              className="--industry-section --industry-section-6"
              image={section_six.image}
              title={section_six.title}
              buttonText={section_six.button_text}
              description={section_six.description}
            />
          )}
        </MainContainer>

        {section_seven.status && (
          <ContactFormContent
            id={section_seven.title}
            title={section_seven.title}
            description={section_seven.description}
          />
        )}
      </Stack>
    </div>
  );
};
