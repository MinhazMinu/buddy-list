import React from "react";
import fakeData from "../../fakeData";
import Card from "../card/Card";
import "./Friends.css";

// const SingleFriend = props => {
//   console.log(props);
// };

const Friends = () => {
  return (
    <section>
      <div className="friend-container">
        {fakeData.map(sf => (
          <Card friend={sf}></Card>
        ))
        //
        }
      </div>
    </section>
  );
};

export default Friends;
