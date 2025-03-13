import React from "react";
import "./styles.scss";
interface SocialButtonProps {
  icon: React.ReactNode;
  link?: string;
}

export const SocialButton: React.FC<SocialButtonProps> = ({ icon, link }) => {
  return (
    <a href={link} aria-label="social-button" className="social-button" target="_blank">
      {icon}
    </a>
  );
};
