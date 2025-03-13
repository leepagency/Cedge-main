import "./styles.scss";

import Image from "next/image";
import React from "react";

interface props {
  image: string;
}

export const SliderImageCard: React.FC<props> = ({ image }) => {
  return (
    <div className="slider-image-card">
      <Image src={image} alt="slider-image" width={800} height={800}
      unoptimized // Disable srcset and use src only
      />
    </div>
  );
};
