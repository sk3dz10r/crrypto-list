import React from "react";
import CoinCardButton from "../coincard-button/coincard-button.component";

import { CoinCardContainer, CoinContainer } from "./coincard.style";
import CoinCardRow1 from "../coincardrow1/coincardrow1.component";
import CoinCardRow2 from "../coincardrow2/coincardrow2.component";
import CoinCardRow3 from "../coincardrow3/coincardrow3.component";

class CoinCard extends React.Component {
  constructor() {
    super();
    this.state = {
      hideCoinCardExt: true
    };
  }

  handleClick = () => {
    this.state.hideCoinCardExt
      ? this.setState({ hideCoinCardExt: false })
      : this.setState({ hideCoinCardExt: true });
  };

  render() {
    const {
      id,
      name,
      symbol,
      imageUrl,
      rank,
      marketCap,
      price,
      high24h,
      low24h,
      totalVolume,
      changePrice24h,
      changePercent24h,
      changePercent1h,
      changePercent7d,
      ath,
      athChangePercent,
      athDate,
      circulatingSupply,
      changePercent14d,
      changePercent30d,
      changePercent200d,
      changePercent1y,
      sparkLine
    } = this.props;
    return (
      <div onClick={this.handleClick}>
        <CoinCardContainer>
          <CoinContainer>
            <CoinCardRow1
              name={name}
              symbol={symbol}
              rank={rank}
              price={price}
            />
            <CoinCardRow2
              changePercent1h={changePercent1h}
              changePercent7d={changePercent7d}
              changePercent24h={changePercent24h}
              changePrice24h={changePrice24h}
              high24h={high24h}
              low24h={low24h}
            />
          </CoinContainer>
          <CoinCardButton />
        </CoinCardContainer>
        {this.state.hideCoinCardExt ? (
          <div />
        ) : (
          <CoinCardRow3
            changePercent14d={changePercent14d}
            changePercent30d={changePercent30d}
            changePercent200d={changePercent200d}
            changePercent1y={changePercent1y}
            athChangePercent={athChangePercent}
            marketCap={marketCap}
            ath={ath}
            athDate={athDate}
            circulatingSupply={circulatingSupply}
            totalVolume={totalVolume}
            sparkLine={sparkLine}
          />
        )}
      </div>
    );
  }
}

export default CoinCard;
