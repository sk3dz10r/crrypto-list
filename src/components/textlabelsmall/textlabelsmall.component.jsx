import React from "react";

import { TextLabelSmallDiv, LabelDiv, ValueDiv } from "./textlabelsmall.style";

const TextLabelSmall = ({ label, value, prefix, suffix }) => (
  <TextLabelSmallDiv>
    <LabelDiv>{label}</LabelDiv>
    <ValueDiv sign={value > 0}>{`${prefix +
      parseFloat(value).toFixed(2) +
      suffix}`}</ValueDiv>
  </TextLabelSmallDiv>
);

export default TextLabelSmall;
