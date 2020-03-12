import React from "react";
import logo from "../../logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={logo} alt="" />
      </div>
      <div></div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Buddy List</a>
        <a href="#">About</a>
      </nav>
    </div>
  );
};

export default Header;
