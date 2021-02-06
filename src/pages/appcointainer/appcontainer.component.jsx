import React from "react";
import CoinList from "../coinlist/coinlist.component";

class AppContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      coinlist: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C7d%2C14d%2C30d%2C200d%2C1y"
    )
      .then(response => response.json())
      .then(coinlist => {
        this.setState({ coinlist: coinlist });
      });
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { coinlist, searchfield } = this.state;
    const searchString = searchfield.toLowerCase();
    const filteredCoinlist = coinlist.filter(coin => {
      return (
        coin.name.toLowerCase().includes(searchString) ||
        coin.symbol.toLowerCase().includes(searchString)
      );
    });
    return !coinlist.length ? (
      <h1>Loading</h1>
    ) : (
      <div>
        <input onChange={this.onSearchChange} />
        <CoinList coinlist={filteredCoinlist} />
      </div>
    );
  }
}

export default AppContainer;
