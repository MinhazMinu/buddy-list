import React from "react";
import logo from "../../logo.png";
import "./Header.css";
let bincom = 0;
const Header = props => {
  //   bincom = bincom + parseFloat(props.buddy.income);

  return (
    <div className="header">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="count">
        <h3>
          Buddy Count :{props.buddy} <br />
          Total Income :{props.amo}
        </h3>
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
