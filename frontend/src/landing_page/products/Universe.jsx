import React from "react";
import "./css/Universe.css";

const Universe = () => {
  return (
    <div className="container uni-container">
      <div className="row uni-row">
        <div className="head text-center">
          <h1>The Zerodha Universe</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
        <div className="col-4 uni-col-4">
          <img src="media\images\smallcaseLogo.png" alt="Samll Logo" />
          <p>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 uni-col-4">
          <img src="media/images/goldenpiLogo.png" />
          <p>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 uni-col-4">
          <img src="media\images\smallcaseLogo.png" alt="Samll Logo" />
          <p>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 uni-col-4">
          <img src="media/images/goldenpiLogo.png" />
          <p>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 uni-col-4">
          <img src="media\images\smallcaseLogo.png" alt="Samll Logo" />
          <p>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 uni-col-4">
          <img src="media/images/goldenpiLogo.png" />
          <p>
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
      </div>
      <button className="mt-4 button">Sign up for free</button>
    </div>
  );
};

export default Universe;
