import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { SparkLinesContainer } from "./sparkline.style";

const Sparkline = ({ data }) => (
  <SparkLinesContainer>
    <Sparklines data={data} width={180} height={100} margin={5}>
      <SparklinesLine color="blue" />
    </Sparklines>
  </SparkLinesContainer>
);

export default Sparkline;
