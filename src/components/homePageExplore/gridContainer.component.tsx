"use client";

import "./styles.scss";

import { Box, Stack } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";

import { IHomePioneer } from "@/types";
import Image from "next/image";
import { MainContainer } from "@/common";
import React from "react";
import { SmallArrow } from "@/assets/icons/SmallArrow";
import { animateDir } from "@/helpers";
import { motion } from "framer-motion";
import starImage from "../../assets/shapes/start.svg";
// import { useRouter } from "next/navigation";
import { useRouter } from "next/navigation";
type Props = {
  pioneer: IHomePioneer[];
};

export const GridContainer: React.FC<Props> = ({ pioneer }) => {
  // const t = useTranslations("homeExplore.grid");
  const locale = useLocale();
  const router = useRouter();

  // const t = useTranslations("homeExplore.grid");
  if (pioneer?.length <= 0) return <></>;
  const data = pioneer[0];
  return (
    <MainContainer type="center">
      <Stack
        spacing={{
          xs: 2,
          md: 3,
          // lg: 4,
        }}
      >
        <div className="explore-grid">
          <motion.div
            className={`first-item ${pioneer[0].link1 && "clickable"}`}
            initial={{
              opacity: 0,
              y: -200,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            whileHover={{
              scale: pioneer[0].link1 ? 1.0125 : 1,
              transition: {
                duration: 0.2,
              },
            }}
            whileTap={{
              scale: pioneer[0].link1 ? 0.98 : 1,
              transition: {
                duration: 0.2,
              },
            }}
            viewport={{
              once: true,
            }}
          >
            <Stack
              justifyContent="space-between"
              height="100%"
              maxWidth={{
                xs: "100%",
                md: "90%",
                xl: "86%",
              }}
            >
              <h3>{data.title1}</h3>
              <div>
                <div
                  dangerouslySetInnerHTML={{ __html: data.description1 }} />
              </div>
            </Stack>
            {/* <ExploreItemNav /> */}
          </motion.div>

          <motion.div className={`second-item ${pioneer[0].link3 && "clickable"}`}>
            <motion.div
              
              initial={{
                opacity: 0,
                x: animateDir(locale, -200, 200),
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
            
              whileTap={{
                scale: pioneer[0].link3 ? 0.98 : 1,
                transition: {
                  duration: 0.2,
                },
              }}
              onClick={() => pioneer[0].link3 && router.push(`${locale}/${pioneer[0].link3}`)}
            >
              {/* <h3> */}
              <div
              dangerouslySetInnerHTML={{ __html: data.description3 }} />
              <ExploreItemNav />

              {/* </h3> */}
            </motion.div>
          </motion.div>

          <motion.div className={`third-item ${pioneer[0].link2 && "clickable"}`}>
            <motion.div
              initial={{
                opacity: 0,
                x: animateDir(locale, 200, -200),
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
            
              whileTap={{
                scale: pioneer[0].link2 ? 0.98 : 1,
                transition: {
                  duration: 0.2,
                },
              }}
              onClick={() => pioneer[0].link2 && router.push(`${locale}/${pioneer[0].link2}`)}
            >
              <div>
                <div
                dangerouslySetInnerHTML={{ __html: data.title2 }} />
              </div>
              {/* <div className="actions">
                <p>
                  <div className="third-item" dangerouslySetInnerHTML={{ __html: data.description2 }} />
                </p>
                <div className="flex">
                  <p></p>
                </div>
              </div> */}
              <ExploreItemNav />
            </motion.div>
          </motion.div>

        </div>
        <div className="second-explore-grid">

          <motion.div className={`first-item ${pioneer[0].link4 && "clickable"}`}>
            <motion.div
              initial={{
                opacity: 0,
                x: animateDir(locale, -200, 200),
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
              
              whileTap={{
                scale: pioneer[0].link4 ? 0.98 : 1,
                transition: {
                  duration: 0.2,
                },
              }}
              onClick={() => pioneer[0].link4 && router.push(`${locale}/${pioneer[0].link4}`)}
            >
              <div>
                <div
                dangerouslySetInnerHTML={{ __html: data.description4 }} />
                <ExploreItemNav />
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div className={`second-item  ${pioneer[0].link5 && "clickable"}`}>
            <motion.div
              initial={{
                opacity: 0,
                x: animateDir(locale, -200, 200),
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
              
              whileTap={{
                scale: pioneer[0].link5 ? 0.98 : 1,
                transition: {
                  duration: 0.2,
                },
              }}
              onClick={() => pioneer[0].link5 && router.push(`${locale}/${pioneer[0].link5}`)}
            >
              <div className="">
                <div dangerouslySetInnerHTML={{ __html: data.description5 }} />
              </div>
              <ExploreItemNav />
            </motion.div>
          </motion.div>

          <motion.div  className={`third-item  ${pioneer[0].link6 && "clickable"}`}>
            <motion.div
              initial={{
                opacity: 0,
                y: 200,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
            
              whileTap={{
                scale: pioneer[0].link6 ? 0.98 : 1,
                transition: {
                  duration: 0.2,
                },
              }}
              // className={`third-item ${pioneer[0].link6 && "clickable"}`}
              onClick={() => pioneer[0].link6 && router.push(`${locale}/${pioneer[0].link6}`)}
            >
              <Image src={starImage} 
                unoptimized // Disable srcset and use src only
              alt="star-image" />
              <div className="main-h3 vertical">
                <div dangerouslySetInnerHTML={{ __html: data.description6 }} className="main-h3 vertical" />
              </div>
              <ExploreItemNav />
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{
              opacity: 0,
              x: animateDir(locale, -200, 200),
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            whileHover={{
              scale: pioneer[0].link7 ? 1.0125 : 1,
              transition: {
                duration: 0.2,
              },
            }}
            whileTap={{
              scale: pioneer[0].link7 ? 0.98 : 1,
              transition: {
                duration: 0.2,
              },
            }}
            className={`fourth-item`}
          >
            <div>
              <div dangerouslySetInnerHTML={{ __html: data.description7 }} />
            </div>
          </motion.div>

          <motion.div className={`fifth-item  ${pioneer[0].link8 && "clickable"}`}>
            <motion.div
              initial={{
                opacity: 0,
                x: animateDir(locale, 200, -200),
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
              
              whileTap={{
                scale: pioneer[0].link8 ? 0.98 : 1,
                transition: {
                  duration: 0.2,
                },
              }}
              // className={`fifth-item ${pioneer[0].link8 && "clickable"}`}
              onClick={() => pioneer[0].link8 && router.push(`${locale}/${pioneer[0].link8}`)}

            >
              <div>
                <div dangerouslySetInnerHTML={{ __html: data.description8 }} />
              </div>
              <ExploreItemNav />
            </motion.div>
          </motion.div>

          <motion.div className={`sixth-item  ${pioneer[0].link9 && "clickable"}`}>
            <motion.div
              initial={{
                opacity: 0,
                x: animateDir(locale, -200, 200),
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
              
              whileTap={{
                scale: pioneer[0].link9 ? 0.98 : 1,
                transition: {
                  duration: 0.2,
                },
              }}
              // className={`sixth-item ${pioneer[0].link9 && "clickable"}`}
              onClick={() => pioneer[0].link9 && router.push(`${locale}/${pioneer[0].link9}`)}
            >
              {/* <h3>{data.description9}</h3> */}
              <div dangerouslySetInnerHTML={{ __html: data.description9 }} />
              <ExploreItemNav />
            </motion.div>
          </motion.div>

          <motion.div className={`seventh-item  ${pioneer[0].link10 && "clickable"}`}>
            <motion.div
              initial={{
                opacity: 0,
                x: animateDir(locale, 200, -200),
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
              whileTap={{
                scale: pioneer[0].link10 ? 0.98 : 1,
                transition: {
                  duration: 0.2,
                },
              }}
              // className={`seventh-item ${pioneer[0].link10 && "clickable"}`}
              onClick={() => pioneer[0].link10 && router.push(`${locale}/${pioneer[0].link10}`)}

            >
              {/* <h3>{data.description10}</h3> */}
              <div
                dangerouslySetInnerHTML={{
                  __html: data.description10,
                }}
              />
              <ExploreItemNav />
            </motion.div>
          </motion.div>
        </div>
      </Stack>
    </MainContainer>
  );
};

export const ExploreItemNav = () => {
  const t = useTranslations("homeExplore.grid");
  const locale = useLocale();
  return (
    <Box
      className="explore-grid-arrow"
      sx={{
        position: "absolute",
        right: "2rem",
        bottom: "1rem",
        display: "flex",
        gap: "4px",
        alignItems: "center",
        "& p": {
          color: "white",
          fontSize: "1rem !important",
        },
        "& svg": {
          rotate: locale === "ar" ? "180deg" : "",
        },
      }}
    >
      <p>{t("smallItem")}</p>
      <SmallArrow />
    </Box>
  );
};
