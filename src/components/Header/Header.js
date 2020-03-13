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
      <div>
        <h3>{props.buddy.length}</h3>
      </div>
      <div></div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Buddy</a>
        <a href="#">About</a>
      </nav>
    </div>
  );
};

export default Header;
