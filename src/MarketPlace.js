import React from "react";
import { useState } from "react";

const MarketPlace = () => {
  const [buyPrice, setBuyPrice] = useState("");
  const [buyTotal, setBuyTotal] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [sellTotal, setSellTotal] = useState("");

  return (
    <div>
      <h1>Market</h1>
      <br />
      <h1>Buy BTC</h1>
      <br />
      <input
        type="text"
        onChange={(e) => {
          setBuyPrice(e.target.value);
        }}></input>
      <br />
      <input
        type="text"
        onChange={(e) => {
          setBuyTotal(e.target.value);
        }}></input>
      <br />
      <button type="submit" onClick={handleSubmit}>
        Buy BTC
      </button>

      <h1>Sell BTC</h1>
      <input
        type="text"
        onChange={(e) => {
          setSellPrice(e.target.value);
        }}></input>
      <br />
      <input
        type="text"
        onChange={(e) => {
          setSellTotal(e.target.value);
        }}></input>
      <br />
      <button type="button">Sell BTC</button>
    </div>
  );
};

export default MarketPlace;
