import React, { Component } from "react";
import "../App.css";
import { render } from "@testing-library/react";

export default class Pic extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <img src="7.jpg" class="img-responsive pic" alt="Cinque Terre"></img>
      </div>
    );
  }
}
