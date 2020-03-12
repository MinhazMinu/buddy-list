import React from "react";
import logo from "../../logo.png";
import "./Header.css";

const Header = props => {
  console.log(props);

  return (
    <div className="header">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>{props.friend}</div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Buddy List</a>
        <a href="#">About</a>
      </nav>
    </div>
  );
};

export default Header;
