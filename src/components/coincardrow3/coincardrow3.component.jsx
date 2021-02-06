import React from "react";
import TextLabelSmall from "../textlabelsmall/textlabelsmall.component";
import TextLabelMedium from "../textlabelmedium/textlabelmedium.component";
import {
  RowContainer,
  SubRowContainer,
  SubColumnContainer
} from "./coincardrow3.style";
import Sparkline from "../sparkline/sparkline.component";

class CoinCardRow3 extends React.Component {
  render() {
    const {
      changePercent14d,
      changePercent30d,
      changePercent200d,
      changePercent1y,
      athChangePercent,
      marketCap,
      ath,
      athDate,
      circulatingSupply,
      totalVolume,
      sparkLine
    } = this.props;
    return (
      <RowContainer>
        <SubRowContainer>
          <TextLabelSmall
            label="14D"
            value={changePercent14d}
            prefix=""
            suffix="%"
          />
          <TextLabelSmall
            label="30D"
            value={changePercent30d}
            prefix=""
            suffix="%"
          />
          <TextLabelSmall
            label="200D"
            value={changePercent200d}
            prefix=""
            suffix="%"
          />
          <TextLabelSmall
            label="1Y"
            value={changePercent1y}
            prefix=""
            suffix="%"
          />
          <TextLabelSmall
            label="ATH"
            value={athChangePercent}
            prefix=""
            suffix="%"
          />
        </SubRowContainer>
        <SubRowContainer>
          <SubColumnContainer>
            <TextLabelMedium label="MarketCap" value={marketCap} />
            <TextLabelMedium label="Volume" value={totalVolume} />
            <TextLabelMedium label="Supply" value={circulatingSupply} />
            <TextLabelMedium label="All Time High" value={ath} />
            <TextLabelMedium label="ATH Date" value={athDate} date={true} />
          </SubColumnContainer>
          <Sparkline data={sparkLine} />
        </SubRowContainer>
      </RowContainer>
    );
  }
}
export default CoinCardRow3;
