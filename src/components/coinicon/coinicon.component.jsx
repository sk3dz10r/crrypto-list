import React from "react";

const CoinIcon = ({ symbol }) => (
  <div style={{ width: "2em", height: "2em" }}>
    <img
      style={{ width: "2em", height: "2em" }}
      alt=""
      src={`https://static.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
    />
  </div>
);

export default CoinIcon;
