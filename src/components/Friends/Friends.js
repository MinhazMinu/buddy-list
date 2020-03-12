import React, { useState } from "react";
import fakeData from "../../fakeData";
import Card from "../card/Card";
import "./Friends.css";
import Header from "../Header/Header";

// const SingleFriend = props => {
//   console.log(props);
// };

const Friends = () => {
  const [friend, setFriend] = useState([1]);
  console.log(friend.length);

  const handleFriensList = props => {
    console.log("btnclicked", props);
  };

  return (
    <section>
      <div className="friend-container">
        {fakeData.map(sf => (
          <Card friend={sf} handleFriensList={handleFriensList}></Card>
        ))
        //
        }
      </div>
      <div>{<Header friend={friend.length}></Header>}</div>
    </section>
  );
};

export default Friends;
