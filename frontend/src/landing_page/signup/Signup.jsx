import React from "react";
import "./css/Signup.css";

const Signup = () => {
  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <h1 className="signup-title">Open a Zerodha account</h1>

        <p className="signup-subtitle">
          Simple and intuitive apps · ₹0 for investments · ₹20 for intraday and
          F&O trades.
        </p>

        <button className="signup-btn">Signup for free</button>
      </div>
    </div>
  );
};

export default Signup;