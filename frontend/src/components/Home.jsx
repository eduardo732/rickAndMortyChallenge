import React from "react";
import Header from './Header'
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="homeContainer">
      <Header />
      <img src="rm.png" alt="randm" className="App-logo" />
      <h1>Welcome to this challenge</h1>
      <p>In the first challenge, we count letters in the names 
          of locations, characters and episodes.
      </p>
      <p>In the second challenge, we do a list with
          episodes with their characters and origins. 
      </p>
      <div className="buttonContainer">
        <Link to={'/firstChallenge'}>
        <Button variant="success">First Challenge</Button>{" "}
        </Link>
        <Link to={'/secondChallenge'}>
        <Button variant="warning">Second Challenge</Button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Home;
