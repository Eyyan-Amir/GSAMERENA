import React, { Component } from "react";
import { render } from "@testing-library/react";

export default class Ad extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <img src="001.jpg" class="img-responsive ad" alt="Cinque Terre"></img>
      </div>
    );
  }
}
