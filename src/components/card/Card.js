import React from "react";
import "./Card.css";

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
      </div>
    </div>
  );
};

export default Card;
