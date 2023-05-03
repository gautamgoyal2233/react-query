import React from "react";
import styled from "styled-components";

const NavHeading = styled.h3`
  text-align: center;
   background-color: rgb(51 91 89);

  font-size: 30px;
  font-family: "Libre Baskerville", serif;
  padding: 15px;
  color: black;
  font-weight: 100px;
`;

// const nav = styled.

const Navbar = () => {
  return (
    <nav>
      <NavHeading>
        {" "}
        <span>U</span>sers
        <span>D</span>etails
      </NavHeading>
    </nav>
  );
};

export default Navbar;
