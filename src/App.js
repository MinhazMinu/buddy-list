import React from "react";

import "./App.css";
import Friends from "./components/Friends/Friends";

function App() {
  // fetch(
  //   "https://randomuser.me/api/?inc=gender,name,email,dob,phone,picture&&results=15"
  // )
  //   .then(response => response.json())
  //   .then(json => console.log(json));
  return (
    <div>
      <Friends></Friends>
    </div>
  );
}

export default App;
