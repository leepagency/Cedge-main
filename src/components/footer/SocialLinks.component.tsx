import "./styles.scss";

import { FaceBookIcon, InstagramIcon, LinkedInIcon, Logo, TwitterIcon, YoutubeIcon } from "@/assets";

import { IFooter } from "@/types";
import React from "react";
import { SocialButton } from "@/common";
import { Stack } from "@mui/material";

interface SocialLinksProps {
  data: IFooter;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ data }) => {
  const { facebook, twitter, instagram, linkedin, youtube } = data;
  return (
    <Stack className="footer-logo-container">
      <Logo />
      <Stack
        justifyContent={{
          xs: "center",
          md: "flex-start",
        }}
      >
        <SocialButton icon={<FaceBookIcon />} link={facebook} />
        <SocialButton icon={<TwitterIcon />} link={twitter} />
        <SocialButton icon={<InstagramIcon />} link={instagram} />
        <SocialButton icon={<LinkedInIcon />} link={linkedin} />
        <SocialButton icon={<YoutubeIcon />} link={youtube} />

        {/* <SocialButton icon={<FaceBookIcon />} link="https://www.facebook.com/cedge.sa/" />
        <SocialButton icon={<TwitterIcon />} link="https://twitter.com/Cedge_sa" />
        <SocialButton icon={<InstagramIcon />} link="https://www.instagram.com/cedge_sa/" />
        <SocialButton icon={<LinkedInIcon />} link="https://www.linkedin.com/company/cedge-sa/" />
        <SocialButton icon={<YoutubeIcon />} link="https://www.youtube.com/@Cedge_sa" /> */}
      </Stack>
    </Stack>
  );
};
