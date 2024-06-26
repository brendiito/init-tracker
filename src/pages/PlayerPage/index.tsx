import React, { Component } from "react";
import { Container, Jumbotron } from "reactstrap";
import PlayerContainer from "../../containers/Player";

class PlayerPage extends Component {
  state = {};
  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h3>Player Manager</h3>
          <p>Manage your player's characters for your campaign here</p>
        </Jumbotron>
        <PlayerContainer />
      </Container>
    );
  }
}

export default PlayerPage;
