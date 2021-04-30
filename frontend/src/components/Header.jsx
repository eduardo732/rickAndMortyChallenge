import React from "react";
import Navbar from "react-bootstrap/Navbar";
const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="rm.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Rick and Morty Challenge
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default Header;
