"use client";

import "./styles.scss";

import { ContactFormContent, ServicesSection } from "@/components";
import { CustomCard, MainContainer, MainShadow, MainTabs, TestimonialsSlider, TrustSlider } from "@/common";
import React, { useState } from "react";

import { CustomSection } from "@/common/customSection";
import { ICapability } from "@/types";
import Image from "next/image";
import Slider from "react-slick";
import { Stack } from "@mui/material";
import { TestimonialCard } from "@/common/testimonialCard";
import { VideoPlayer } from "@/common/videoPlayer";
import nextArrow from "../../assets/icons/next.svg";
import prevArrow from "../../assets/icons/prev.svg";
import { useTranslations } from "next-intl";

// import image from "../../assets/images/book.png";

export const CapabilityHoc: React.FC<ICapability> = ({
  section_one,
  section_two,
  section_three,
  section_four,
  section_five,
  section_six,
  section_seven,
  section_eight,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  // const [activeButtonTab, setActiveButtonTab] = useState<number>(0);

  const t = useTranslations("capabilities");
  const tabs = [
    section_one.status && section_one.title,
    section_two.status && section_two.title,
    section_three.status && section_three.title,
    section_four.status && section_four.title,
    section_five.status && section_five.title,
    section_six.status && section_five.title,
    section_seven.status && section_seven.title,
    section_eight.status && section_eight.title,
  ];
  return (
    <div className="capability-container">
      <MainTabs setValue={setActiveTab} value={activeTab} tabs={tabs} />
      <Stack spacing={4} width="100%" justifyContent="center" alignItems="center">
        <MainContainer type="center">
          <Stack className="-capability-content-container" spacing={8}>
            {section_one.status && (
              <CustomSection
                id={section_one.title}
                // isReversedSection={true}
                // isBackgroundImage={true}
                image={section_one.image}
                // backgroundImage={image.src}
                title={section_one.sub_title}
                // subTitle={section_one.sub_title}
                description={section_one.description}
              />
            )}
            {section_two.status && (
              <div className="--section-wrapper" id={section_two.title}>
                <h4 className="---tab-title">{t("services")}</h4>
                <ServicesSection services={section_two.services} />
              </div>
            )}
            <MainShadow
              styles={{
                display: {
                  xs: "none",
                  md: "block",
                },
                rotate: "343deg",
                height: {
                  xs: "100px",
                  sm: "150px",
                  md: "200px",
                  lg: "250px",
                  xl: "300px",
                },
              }}
            />
            {/* section_three.status &&  */}
            {section_three.insights.length === 1 && (
              <div className="--section-wrapper" id={section_three.title}>
                <h4 className="---tab-title">{t("insights")}</h4>
                <CustomCard
                  cardFor={
                    section_three.insights[0].type === "article"
                      ? "blog"
                      : section_three.insights[0].type === "blog"
                      ? "blogs"
                      : section_three.insights[0].type === "report"
                      ? "reports"
                      : "ebooks"
                  }
                  id={section_three.insights[0].id.toString()}
                  slug={section_three.insights[0].slug.toString()}
                  image={section_three.insights[0].image}
                  title={section_three.insights[0].title}
                  subTitle={section_three.insights[0].description}
                  insight
                />
              </div>
            )}
            {section_three.insights?.length > 1 && (
              <div className="--section-wrapper" id={section_three.title} style={{overflow:"hidden"}}>
                <h4 className="---tab-title">{t("insights")}</h4>
                <Slider
                  {...{
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: section_three?.insights?.length > 4 ? 3 : section_three?.insights?.length,
                    slidesToScroll: 1,
                    prevArrow: <Image src={prevArrow} alt="prev-arrow" className="icon" />,
                    nextArrow: <Image src={nextArrow} alt="prev-arrow" className="icon" />,
                    responsive: [
                      {
                        breakpoint: 1024,
                        settings: {
                          slidesToShow: section_three?.insights?.length > 2 ? 3 : section_three?.insights?.length,
                          slidesToScroll: 1,
                        },
                      },
                      {
                        breakpoint: 600,
                        settings: {
                          slidesToShow: section_three?.insights?.length > 1 ? 2 : section_three?.insights?.length,
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
                  {section_three.insights.map((insight) => (
                    <CustomCard
                      key={insight.id}
                      cardFor={
                        insight.type === "article"
                          ? "blog"
                          : insight.type === "blog"
                          ? "blogs"
                          : insight.type === "report"
                          ? "reports"
                          : insight.type
                      }
                      id={insight.id.toString()}
                      slug={section_three.insights[0].slug.toString()}
                      image={insight.image}
                      title={insight.title}
                      subTitle={insight.description}
                      insight
                    />
                  ))}
                </Slider>
              </div>
            )}
             {section_five.status && section_five.testimonials?.length > 0 && (
              <div className="--section-wrapper"  id={section_five.title}>
                <h4 className="---tab-title">{section_five.title}</h4>
                <TestimonialsSlider>
                  {section_five.testimonials.map((testimonial) => (
                    <TestimonialCard
                      key={testimonial.id}
                      quote={testimonial.description}
                      name={testimonial.name}
                      job={testimonial.position}
                      image={testimonial.image}
                    />
                  ))}
                </TestimonialsSlider>
              </div>
            )}
            {section_four.status && section_four.clients?.length > 0 && (
              <div className="--section-wrapper" id={section_four.title}>
                <h4 className="---tab-title">{section_four.title}</h4>
                <TrustSlider noArrow clients={section_four.clients} />
              </div>
            )}
           
            {section_six.status && section_six.video && (
              <div className="--section-wrapper">
                <h4 className="---tab-title">{section_six.title}</h4>
                <VideoPlayer video={section_six.video} className="---video-player" />
              </div>
            )}
            {section_seven.status && (
              <CustomSection
                id={`${section_seven.title}`}
                // isReversedSection={true}
                // isBackgroundImage={true}
                image={section_seven.image}
                // backgroundImage={image.src}
                title={section_seven.sub_title}
                // subTitle={section_seven.sub_title}
                description={section_seven.description}
              />
            )}
          </Stack>
        </MainContainer>
        {section_eight.status && (
          <ContactFormContent
            id={section_eight.title}
            title={section_eight.subtitle}
            description={section_eight.description}
          />
        )}
      </Stack>
    </div>
  );
};
