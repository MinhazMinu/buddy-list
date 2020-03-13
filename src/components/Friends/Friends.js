import React, { useState } from "react";
import fakeData from "../../fakeData";
import Card from "../card/Card";
import "./Friends.css";
import Header from "../Header/Header";

// const SingleFriend = props => {
//   console.log(props);
// };

const Friends = () => {
  const [buddy, setBuddy] = useState([]);
  console.log(buddy.length);

  const handleFriensList = props => {
    console.log("btnclicked", props);
    const newBuddy = [...buddy, props];
    setBuddy(newBuddy);
  };

  return (
    <section>
      <div>{<Header buddy={buddy} />}</div>
      <div>Buddy Counter : {buddy.length}</div>
      <div className="friend-container">
        {fakeData.map(sf => (
          <Card friend={sf} handleFriensList={handleFriensList}></Card>
        ))
        //
        }
      </div>
    </section>
  );
};

export default Friends;
