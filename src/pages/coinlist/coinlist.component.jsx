import React from "react";
import CoinCard from "../../components/coincard/coincard.component";

class CoinList extends React.Component {
  render() {
    const coinlist = this.props.coinlist;
    return (
      <div>
        {coinlist.map(
          ({
            id,
            name,
            symbol,
            image,
            current_price,
            market_cap,
            market_cap_rank,
            total_volume,
            high_24h,
            low_24h,
            price_change_24h,
            price_change_percentage_24h,
            market_cap_change_24h,
            market_cap_change_percentage_24h,
            ath,
            ath_change_percentage,
            ath_date,
            circulating_supply,
            price_change_percentage_1h_in_currency,
            price_change_percentage_7d_in_currency,
            price_change_percentage_14d_in_currency,
            price_change_percentage_30d_in_currency,
            price_change_percentage_200d_in_currency,
            price_change_percentage_1y_in_currency,
            sparkline_in_7d
          }) => (
            <div>
              <CoinCard
                id={id}
                name={name}
                symbol={symbol}
                imageUrl={image}
                marketCap={market_cap}
                rank={market_cap_rank}
                price={current_price}
                high24h={high_24h}
                low24h={low_24h}
                totalVolume={total_volume}
                changePrice24h={price_change_24h}
                changePercent24h={price_change_percentage_24h}
                ath={ath}
                athChangePercent={ath_change_percentage}
                athDate={ath_date}
                circulatingSupply={circulating_supply}
                changePercent1h={price_change_percentage_1h_in_currency}
                changePercent7d={price_change_percentage_7d_in_currency}
                changePercent14d={price_change_percentage_14d_in_currency}
                changePercent30d={price_change_percentage_30d_in_currency}
                changePercent200d={price_change_percentage_200d_in_currency}
                changePercent1y={price_change_percentage_1y_in_currency}
                sparkLine={sparkline_in_7d.price}
              />
            </div>
          )
        )}
      </div>
    );
  }
}

export default CoinList;
