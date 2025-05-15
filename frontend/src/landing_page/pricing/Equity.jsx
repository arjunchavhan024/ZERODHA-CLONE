import React from "react";
import "./css/Equity.css";

const Equity = () => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-4 equity">
          <img src="media/images/pricingEquity.svg" alt="" />
          <h1>Free equity delivery</h1>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 equity">
          <img src="media/images/intradayTrades.svg" alt="" />
          <h1>Intraday and F&O trades</h1>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 equity">
          <img src="media/images/pricingEquity.svg" alt="" />
          <h1>Free direct MF</h1>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Equity;
