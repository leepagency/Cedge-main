import "./styles.scss";

import { Stack, Typography } from "@mui/material";

import { ExecutionCard } from "@/common";
import { IHomeExecution } from "@/types";
import React from "react";

interface ExecutionCardsProps {
  execution: IHomeExecution[];
}

export const ExecutionCards: React.FC<ExecutionCardsProps> = ({ execution }) => {
  return (
    <Stack className="execution-cards-container">
      {/* first cards */}
      <Stack>
        <ExecutionCard
          number={parseFloat(execution[0].card_title1.replace(/[^\d.]/g, "")) || 0}
          title={execution[0].card_description1}
          type={"square"}
          numberAppendix={execution[0].card_title1.replace(/[\d.]+/g, "").trim()}
        />
        <ExecutionCard
          number={parseFloat(execution[0].card_title2.replace(/[^\d.]/g, "")) || 0}
          title={execution[0].card_description2}
          type="square"
        />
        <ExecutionCard
          number={parseFloat(execution[0].card_title3.replace(/[^\d.]/g, "")) || 0}
          title={execution[0].card_description3}
          type="rectangle"
          numberAppendix={execution[0].card_title3.replace(/[\d.]+/g, "").trim()}
        />
      </Stack>
      {/* second cards with paragraph */}
      <Stack>
        <Typography component="div" className="execution-cards-paragraph">
          {/* {execution[0].description2} */}
          <div dangerouslySetInnerHTML={{ __html: execution[0]?.description2 }} />
        </Typography>
        <ExecutionCard
          number={parseFloat(execution[0].card_title4.replace(/[^\d.]/g, ""))}
          title={execution[0].card_description4}
          type="rectangle"
        />
      </Stack>
    </Stack>
  );
};
