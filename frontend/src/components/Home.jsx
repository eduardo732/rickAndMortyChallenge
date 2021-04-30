import React from "react";

import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <div className="homeContainer">
      <img src="rm.png" alt="randm" className="App-logo" />
      <h1>Welcome to this challenge</h1>
      <p>In the first challenge, we count letters in the names 
          of locations, characters and episodes.
      </p>
      <p>In the second challenge, we do a list with
          episodes with their characters and origins. 
      </p>
      <div className="buttonContainer">
        <Button variant="success">First Challenge</Button>{" "}
        <Button variant="warning">Second Challenge</Button>{" "}
      </div>
    </div>
  );
};

export default Home;
