import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { NavMenu } from "./NavMenu";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <NavMenu>
        <Container>{this.props.children}</Container>
      </NavMenu>
    );
  }
}
