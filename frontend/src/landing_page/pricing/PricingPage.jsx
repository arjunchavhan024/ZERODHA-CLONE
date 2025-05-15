import React from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import Equity from "./Equity";
import OpenAccount from "../OpenAccount";

const PricingPage = () => {
  return (
    <>
      <Hero />
      <Equity />
      <Brokerage />
      <OpenAccount />
    </>
  );
};

export default PricingPage;
