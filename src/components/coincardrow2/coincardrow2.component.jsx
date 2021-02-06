import React from "react";
import TextLabelSmall from "../textlabelsmall/textlabelsmall.component";

import { RowContainer } from "./coincardrow2.style";

class CoinCardRow2 extends React.Component {
  render() {
    const {
      changePercent1h,
      changePercent7d,
      changePercent24h,
      changePrice24h,
      low24h,
      high24h
    } = this.props;
    return (
      <RowContainer>
        <TextLabelSmall
          label="1H:"
          value={changePercent1h}
          prefix=""
          suffix="%"
        />
        <TextLabelSmall
          label="7D:"
          value={changePercent7d}
          prefix=""
          suffix="%"
        />
        <TextLabelSmall
          label="24H:"
          value={changePercent24h}
          prefix=""
          suffix="%"
        />
        <TextLabelSmall label="L:" value={low24h} prefix="" suffix="" />
        <TextLabelSmall label="H:" value={high24h} prefix="" suffix="" />
      </RowContainer>
    );
  }
}
export default CoinCardRow2;
