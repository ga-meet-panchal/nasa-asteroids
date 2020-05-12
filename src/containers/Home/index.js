import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import "./styles.css";

class Home extends Component {
  state = {
    asteroidId: ""
  };
  inputChangeHandler = event => {
    let text = event.target.value.trim();
    this.setState({
      asteroidId: text
    });
  };

  navigateToIdPage = () => {
    this.props.history.push(`/asteroids/${this.state.asteroidId}`);
  };

  navigateToRandomPage = () => {
    this.props.history.push(`/asteroids/random`);
  };

  render() {
    return (
      <Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter Asteroid ID</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Asteroid ID"
              value={this.state.asteroidId}
              onChange={event => {
                this.inputChangeHandler(event);
              }}
            />
          </Form.Group>

          <Button
            variant="primary"
            onClick={this.navigateToIdPage}
            disabled={!this.state.asteroidId}
          >
            Search By Id
          </Button>
          <Button
            variant="primary"
            className="random"
            onClick={this.navigateToRandomPage}
          >
            Random Asteroid
          </Button>
        </Form>
      </Container>
    );
  }
}

export default withRouter(Home);
