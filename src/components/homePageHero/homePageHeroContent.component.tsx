"use client";

import "./styles.scss";

import { HeroTitle, MainContainer } from "@/common";
import { useLocale, useTranslations } from "next-intl";

import { Button } from "@mui/material";
import { ContactUsModal } from "../contactUsModal";
import Image from "next/image";
import { animateDir } from "@/helpers";
import { motion } from "framer-motion";
import { useState } from "react";
import Breadcrumb from "../BreadCrumb/BreadCrumb";

interface Props {
  hero: {
    title: string;
    description: string;
    image: string;
  }[];
}
const HomePageHeroContent = ({ hero }: Props) => {
  const t = useTranslations("homeHero");
  const locale = useLocale();
  const { title, description } = hero[0];
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  if (hero?.length <= 0 || !title || !description) return <></>;
  // const titles = title.split(" ! ");
  return (
    <div className="home-hero-container">
      <Image src={hero[0].image} layout="fill" 
        unoptimized // Disable srcset and use src only
      objectFit="cover"  className="bg" alt="bg" />

      <MainContainer type="left">
        <motion.div
          initial={{
            opacity: 0,
            y: -50,
            x: animateDir(locale, -50, 50),
          }}
          animate={{
            opacity: 1,
            y: 0,
            x: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="titles-container"
        >
          <Breadcrumb/>
          <HeroTitle title={title} head={true}/>

          {/* <HeroTitle title={`${titles[1]}`} /> */}
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
            x: animateDir(locale, 50, -50),
          }}
          animate={{
            opacity: 1,
            y: 0,
            x: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: description }} />

          {/* <p>{description}</p> */}
          <Button className="hero-btn" onClick={handleOpen}>
            {t("button")}
          </Button>
          <ContactUsModal open={open} handleClose={handleClose} />
        </motion.div>
      </MainContainer>
    </div>
  );
};
export default HomePageHeroContent;
