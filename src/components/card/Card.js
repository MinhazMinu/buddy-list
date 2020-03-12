import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faPlusCircle,
  faPlus,
  faSearchPlus,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";

const Card = props => {
  const { gender, name, email, dob, phone, picture } = props.friend;
  console.log(picture.large);

  return (
    <div className="card-comp">
      <div className="card">
        <img src={picture.large} alt="" />
        <h4>{name}</h4>
        <h4>{email}</h4>
        <h4>Age : {dob.age}</h4>
        <h4>Phone : {phone}</h4>
        <button>
          <FontAwesomeIcon icon={faUserPlus} />
          &nbsp; Be Friend!
        </button>
      </div>
    </div>
  );
};

export default Card;
