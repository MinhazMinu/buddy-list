import React, { useState } from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faUserFriends } from "@fortawesome/free-solid-svg-icons";
// ======================

// ====================
const Card = props => {
  const { gender, name, email, dob, phone, picture } = props.friend;

  const [isfriend, setIsfriend] = useState(false);
  let Button = (
    <button
      onClick={() => {
        props.handleFriensList(props.friend);
        setIsfriend(true);
      }}
    >
      <FontAwesomeIcon icon={faUserPlus} /> Be Friend!
    </button>
  );
  if (isfriend) {
    Button = (
      <button className="disablebtn" disabled>
        <FontAwesomeIcon icon={faUserFriends} /> Buddy!
      </button>
    );
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
        {Button}
      </div>
    </div>
  );
};

export default Card;
