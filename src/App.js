import React, { useState } from "react";
import "./index.css";

let App = () => {
  let [ps, us] = useState("");
  let [name, uname] = useState("");
  let input_event = (event) => {
    us(event.target.value);
  };

  let click = () => {
    uname(ps);
  };

  return (
    <>
      <div className="body-style">
        <h1>Hy {name}</h1>

        <input
          type="text"
          placeholder="What is your Name ?"
          onChange={input_event}
          value={ps}
        ></input>
        <button onClick={click}>Click 👍</button>
      </div>
    </>
  );
};

export default App;
