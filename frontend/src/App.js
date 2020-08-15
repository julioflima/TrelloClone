import React, { Component } from "react";
import { uniqueId } from "lodash";

import api from "./services/api";

import GlobalStyle from "./styles/global";
import { Navbar, Container, Dashboard, List, Logo } from "./styles";

import Card from ''

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Dashboard>
          <Navbar>
            <Logo />
          </Navbar>
          <Container>
            <List>
              List
              <Card>Card</Card>
              <Card>Card</Card>
              <Card>Card</Card>
              <Card>Card</Card>
            </List>
            <List>
              List
              <Card>Card</Card>
              <Card>Card</Card>
              <Card>Card</Card>
              <Card>Card</Card>
            </List>
            <List>List Card</List>
          </Container>
        </Dashboard>
      </div>
    );
  }
}

export default App;
