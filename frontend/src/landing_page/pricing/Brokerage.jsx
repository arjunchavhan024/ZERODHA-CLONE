import React from "react";
import "./css/Brokerage.css";
import { Link } from "react-router-dom";

const Brokerage = () => {
  return (
    <div className="container">
      <div className="row border-top">
        <div className="col-8 brokerage">
          <Link className="brokerage-link text-center">
            <h3>Brokerage Calculator</h3>
          </Link>
          <ul>
            <li>
              Call & tred RMS auto-squareoff: Additinol charges of ₹50 + GST per
              order.
            </li>
            <li>
              Call & tred RMS auto-squareoff: Additinol charges of ₹50 + GST per
              order.
            </li>
            <li>
              Call & tred RMS auto-squareoff: Additinol charges of ₹50 + GST per
              order.
            </li>
            <li>
              Call & tred RMS auto-squareoff: Additinol charges of ₹50 + GST per
              order.
            </li>
            <li>
              Call & tred RMS auto-squareoff: Additinol charges of ₹50 + GST per
              order.
            </li>
            <li>
              Call & tred RMS auto-squareoff: Additinol charges of ₹50 + GST per
              order.
            </li>
          </ul>
        </div>
        <div className="col-4 brokerage">
          <Link className="brokerage-link text-center">
            <h3>List of charges</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;
