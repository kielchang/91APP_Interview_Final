import React, { Component } from "react";
import { Segment, Header } from "semantic-ui-react";

export default class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <Segment placeholder>
        <Header as="h1">91App Interview</Header>
      </Segment>
    );
  }
}
