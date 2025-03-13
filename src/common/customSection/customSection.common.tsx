"use client";

import "./styles.scss";

import { Box, Button, Stack } from "@mui/material";
import Image, { StaticImageData } from "next/image";

import { ArrowLeftIcon } from "@/assets";
import { ContactUsModal } from "@/components";
import React from "react";

// import { useTranslations } from "next-intl";

interface CustomSectionProps {
  image?: string | StaticImageData;
  title: string;
  subTitle?: string;
  description?: string;
  sectionDescription1?: string; // if the section doesn,t has image
  sectionDescription2?: string; // if the section doesn,t has image
  className?: string;
  isBackgroundImage?: boolean;
  isReversedSection?: boolean;
  isHasGetInTouchBtn?: boolean;
  buttonText?: string;
  isHasBottomUnderline?: boolean;
  isHasImage?: boolean;
  backgroundImage?: string;
  id?: string;
  insight?: boolean;
}

export const CustomSection: React.FC<CustomSectionProps> = ({
  image,
  title,
  subTitle,
  description,
  sectionDescription1, // if the section doesn,t has image
  sectionDescription2, // if the section doesn,t has image
  className,
  isBackgroundImage = false,
  isReversedSection = false,
  backgroundImage,
  isHasGetInTouchBtn = false,
  isHasImage = true,
  isHasBottomUnderline = false,
  id,
  buttonText,
  insight,
}) => {
  // const t = useTranslations("commons");
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const getShorterTitle = (title: string) => {
    return title.length > 50 ? title.slice(0, 50) + "..." : title;
  };
  return (
    <div id={id}>
      <Box
        className={`custom-section-container ${className} ${isHasImage && isBackgroundImage && "background-image"} ${
          isReversedSection && "-reversed-section"
        }`}
        sx={{
          "&.background-image": {
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), url(${backgroundImage}) black 50% / cover no-repeat`,
          },
        }}
      >
        <Box className={`-custom-section-content-container `}>
          <Stack className="--custom-section-content">
            <h3 className="---content-title">{insight ? title : title}</h3>
            {subTitle && <h3 className="---content-sub-title">{subTitle}</h3>}
            {/* <p className="---content-description">{description}</p> */}
            {description && (
              <div className="---content-description" dangerouslySetInnerHTML={{ __html: description }} />
            )}{" "}
            {isHasGetInTouchBtn && buttonText ? (
              <>
                <Button
                  className="---get-in-touch-btn"
                  variant="contained"
                  disableElevation
                  // disableRipple
                  endIcon={<ArrowLeftIcon />}
                  onClick={handleClickOpen}
                >
                  {buttonText}
                </Button>
                <ContactUsModal open={open} handleClose={handleClose} />
              </>
            ) : null}
          </Stack>
        </Box>
        {isHasImage && image ? (
          <Image
          unoptimized
            width={500}
            height={500}
            className={`-custom-section-image ${isHasImage && isBackgroundImage && "-display-none"} `}
            src={image}
            alt={title}
          />
        ) : (
          <div className="-custom-section-description-container">
            {/* <p className="--section-description">{sectionDescription1}</p> */}
            {sectionDescription1 && <div dangerouslySetInnerHTML={{ __html: sectionDescription1 }} />}
            <br />
            <p className="--section-description">{sectionDescription2}</p>
          </div>
        )}
      </Box>
      {isHasBottomUnderline && <hr className="bottom-underline" />}
    </div>
  );
};
