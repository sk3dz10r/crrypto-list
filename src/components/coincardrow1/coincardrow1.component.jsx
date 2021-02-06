import React from "react";

import CoinIcon from "../coinicon/coinicon.component";
import {
  RowContainer,
  RankContainer,
  NameContainer,
  PriceContainer
} from "./coincardrow1.style";

class CoinCardRow1 extends React.Component {
  render() {
    const { name, symbol, rank, price } = this.props;
    return (
      <RowContainer>
        <RankContainer>{rank}</RankContainer>
        <CoinIcon symbol={symbol} />
        <NameContainer>
          {name} ({symbol.toUpperCase()})
        </NameContainer>
        <PriceContainer>
          {price > 1
            ? parseFloat(price)
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            : parseFloat(price).toFixed(6)}
        </PriceContainer>
      </RowContainer>
    );
  }
}
export default CoinCardRow1;
