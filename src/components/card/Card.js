import React, { useState } from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
// ======================

// ====================
const Card = props => {
  const { gender, name, email, dob, phone, picture } = props.friend;

  let [btn, setBtn] = useState(false);
  function btnn() {
    if (btn == false) {
      let newbtn = true;
      setBtn(newbtn);
    }
  }

  return (
    <div className="card-comp">
      <div className="card">
        <img src={picture.large} alt="" />
        <h4>{name}</h4>
        <h4>{email}</h4>
        <h4>Age : {dob.age}</h4>
        <h4>Gender : {gender}</h4>
        <h4>Phone : {phone}</h4>
        <button
          disabled={btn}
          onClick={() => {
            props.handleFriensList(props.friend);
            btnn();
          }}
        >
          <FontAwesomeIcon icon={faUserPlus} />
          &nbsp; Be Friend!
        </button>
      </div>
    </div>
  );
};

export default Card;
