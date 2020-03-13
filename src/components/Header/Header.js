import React, { useState } from "react";
import logo from "../../logo.png";
import "./Header.css";
import { StickyContainer, Sticky } from "react-sticky";
import SearchForm from "../SearchForm/SearchForm";

let bincom = 0;
const Header = props => {
  //   bincom = bincom + parseFloat(props.buddy.income);

  return (
    <div className="head">
      <div className="header">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="count">
          <h4>
            Buddy Count :<br />
            <span className="bc">{props.buddy}</span>
          </h4>
        </div>
        <div className="income">
          <h4>
            Total Income :<br />
            <span className="amo">{props.amo}</span>
          </h4>
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Buddy</a>
          <a href="#">About</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
