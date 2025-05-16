import React from "react";
import "./css/Hero.css";

const Hero = () => {
  return (
    <div className="support-portal">
      <div className="support-header">
        <div className="">
          <h2>Support Portal</h2>
          <p>Search for an answer or browse help topics to create a ticket</p>
          <div className="search-box">
            <input
              type="text"
              placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
            />
            <button className="search-btn">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>

          <div className="quick-links">
            <a href="#">Track account opening</a>
            <a href="#">Track segment activation</a>
            <a href="#">Intraday margins</a>
            <div className="break-link">
              <a href="#">Kite user manual</a>
            </div>
          </div>
        </div>

        <div className="featured">
          <a href="#" className="track-tickets-link">
            Track tickets
          </a>
          <h3>Featured</h3>
          <ol>
            <li>
              <a href="#">BSE StAR mutual fund platform downtime</a>
            </li>
            <li>
              <a href="#">Offer for sale (OFS) – May 2025</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Hero;
