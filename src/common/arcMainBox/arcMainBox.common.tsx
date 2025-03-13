import "./styles.scss";

import React from "react";

type ArcMainBoxProps = {
  title: string;
  description: string;
};

export const ArcMainBox: React.FC<ArcMainBoxProps> = ({ title, description }) => {
  return (
    <div className="arc-main-box">
      <h6>{title}</h6>
      {/* <p></p> */}
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};
