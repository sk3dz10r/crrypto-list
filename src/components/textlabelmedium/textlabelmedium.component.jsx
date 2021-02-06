import React from "react";

import {
  TextLabelMediumDiv,
  LabelDiv,
  ValueDiv
} from "./textlabelmedium.style";

const TextLabelSmall = ({ label, value, date = false }) => (
  <TextLabelMediumDiv>
    <LabelDiv>{label}</LabelDiv>
    <ValueDiv>
      {date
        ? value.substring(0, 10)
        : parseFloat(value)
            .toFixed(2)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
    </ValueDiv>
  </TextLabelMediumDiv>
);

export default TextLabelSmall;
