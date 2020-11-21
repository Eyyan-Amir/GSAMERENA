import React, { Component } from "react";
import { Daily } from "./Daily";

export default class Tble extends Component() {
  render() {
    return (
      <div>
        <tr>
          <td>{this.props.data.id}</td>
          <td>{this.props.data.name}</td>
          <td>{this.props.data.age}</td>
        </tr>
      </div>
    );
  }
}
