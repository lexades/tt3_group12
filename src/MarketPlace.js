import React from "react";
import { useState } from "react";

const axios = require("axios");

const data = {
  accountKey: "e200e4e0-e45a-4923-9079-6ebd929f97db",
};
const config = {
  headers: {
    "x-api-key": "BDTv5isstyQr8aGI2xNp5CzqSYFCrtXPIAZV4Z40",
  },
};
const BuyAndSellAsset = (accountKey, orderType, assetAmount) => {
  const api_url =
    "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add";

  let data = {
    accountKey: accountKey,
    orderType: orderType,
    assetAmount: assetAmount,
  };

  return axios.post(api_url, data, config).then((response) => {
    return response.data;
  });
};

const MarketPlace = () => {
  const [buyPrice, setBuyPrice] = useState("");
  const [buyTotal, setBuyTotal] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [sellTotal, setSellTotal] = useState("");

  const handleSubmitBuy = () => {
    //e.preventDefault();
    console.log({ buyPrice });
    BuyAndSellAsset(data.accountKey, "Buy", { buyTotal }).then((data) => {
      console.log(data);
    });
  };

  const handleSubmitSell = () => {
    //e.preventDefault();
    console.log({ sellPrice });
    BuyAndSellAsset(data.accountKey, "Sell", { sellTotal }).then((data) => {
      console.log(data);
    });
  };

  return (
    <div>
      <h1>Market</h1>
      <br />
      <h1>Buy BTC</h1>
      <br />
      <h4>Buy Price: </h4>
      <input
        type="text"
        onChange={(e) => {
          setBuyPrice(e.target.value);
        }}></input>
      <br />
      <h4>Buy Total: </h4>
      <input
        type="text"
        value={buyPrice}
        onChange={(e) => {
          setBuyTotal(e.target.value);
        }}></input>
      {/* slider */}
      <br />
      <button type="button" onClick={handleSubmitBuy}>
        Buy BTC
      </button>

      <h1>Sell BTC</h1>
      <h4>Sell Price: </h4>
      <input
        type="text"
        onChange={(e) => {
          setSellPrice(e.target.value);
        }}></input>
      <br />
      <h4>Sell Total: </h4>
      <input
        type="text"
        value={sellPrice}
        onChange={(e) => {
          setSellTotal(e.target.value);
        }}></input>
      {/* slider */}
      <br />
      <button type="button" onClick={handleSubmitSell}>
        Sell BTC
      </button>
      <br />
      <br />
      <h1>Balance Summary</h1>
      <br />
      <h3>Asset Balance: </h3>
      <br />
      <h3>Cash Balance: </h3>
    </div>
  );
};

export default MarketPlace;
