import React, { Component } from "react";
import "../App.css";
import { render } from "@testing-library/react";

export default class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <img src="3.jpg" class="img-responsive image" alt="Cinque Terre"></img>
      </div>
    );
  }
}
