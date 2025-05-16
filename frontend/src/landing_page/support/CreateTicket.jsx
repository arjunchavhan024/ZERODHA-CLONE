import React from "react";
import { Link } from "react-router-dom";
import "./css/CreateTicket.css";

const CreateTicket = () => {
  return (
    <div>
      <div className="container">
        <div className="row create-ticket-row">
          <h4 className="create-ticket-row-h4">
            To create a ticket, select a relevant topic
          </h4>
          <div className="col-4 create-ticket-row-col-4">
            <h4>
              <i
                class="fa fa-plus-circle st"
                style={{ marginRight: "10px" }}
                aria-hidden="true"
              ></i>
              Account Opening
            </h4>
            <a href="#">Resident individual</a>
            <br />
            <a href="#">Minor</a>
            <br />
            <a href="#">Non Resident Indian (NRI)</a>
            <br />
            <a href="#">Company, Partnership, HUF and LLP</a>
            <br />
            <a href="#">Glossary</a>
          </div>
          <div className="col-4 create-ticket-row-col-4">
            <h4>
              <i
                class="fa fa-user-o"
                style={{ marginRight: "10px" }}
                aria-hidden="true"
              ></i>
              Your Zerodha Account
            </h4>
            <a href="#">Your Profile</a>
            <br />
            <a href="#">Account modification</a>
            <br />
            <a href="#">Client Master Report (CMR) and Depository</a>
            <br />
            <a href="#">Nomination</a>
            <br />
            <a href="#">Transfer and conversion of securities</a>
          </div>
          <div className="col-4 create-ticket-row-col-4">
            <h4>
              <i
                class="fa fa-bar-chart"
                style={{ marginRight: "10px" }}
                aria-hidden="true"
              ></i>
              Kite
            </h4>
            <a href="#">IPO</a>
            <br />
            <a href="#">Trading FAQs</a>
            <br />
            <a href="#">Margin Trading Facility (MTF) and Margins</a>
            <br />
            <a href="#">Charts and orders</a>
            <br />
            <a href="#">Alerts and Nudges</a>
          </div>
        </div>
        <div
          className="row"
          style={{ marginBottom: "50px", marginTop: "50px" }}
        >
          <div className="col-4 create-ticket-row-col-4">
            <h4>
              <i
                class="fa fa-undo"
                style={{ marginRight: "10px" }}
                aria-hidden="true"
              ></i>
              Funds
            </h4>
            <a href="#">Add money</a>
            <br />
            <a href="#">Withdraw money</a>
            <br />
            <a href="#">Add bank accounts</a>
            <br />
            <a href="#">eMandates</a>
            <br />
          </div>
          <div className="col-4 create-ticket-row-col-4">
            <h4>
              <i
                class="fa fa-check-circle"
                style={{ marginRight: "10px" }}
                aria-hidden="true"
              ></i>
              Console
            </h4>
            <a href="#">Portfolio</a>
            <br />
            <a href="#">Corporate actions</a>
            <br />
            <a href="#">Funds statement</a>
            <br />
            <a href="#">Reports</a>
            <br />
            <a href="#">Profile</a>
            <br />
            <a href="#">Segments</a>
            <br />
          </div>
          <div className="col-4 create-ticket-row-col-4">
            <h4>
              <i
                class="fa fa-connectdevelop"
                style={{ marginRight: "10px" }}
                aria-hidden="true"
              ></i>
              Coin
            </h4>
            <a href="#">Understanding mutual funds and Coin</a>
            <br />
            <a href="#">Coin app</a>
            <br />
            <a href="#">Coin web</a>
            <br />
            <a href="#">Transactions and reports</a>
            <br />
            <a href="#">National Pension Scheme (NPS)</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
