import Container from "../Container/index";
import React from "react";
import Navigation from "../Navigation/Navigation";

const AppBar = () => {
  return (
    <header>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};

export default AppBar;
