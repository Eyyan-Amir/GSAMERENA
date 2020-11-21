import React, { Component } from "react";
import { Glyphicon } from "./Glyphicon";

import "../App.css";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="row header-row-container">
        <div className="col-md-10">
          <div className="row header-body-container">
            <div className="col-md-1 icon">
              <div className="set_icon">
                <img
                  src="icon.png"
                  class="img-responsive"
                  alt="Cinque Terre"
                ></img>
              </div>
            </div>
            <div className="col-md-2 gsmarena">
              <h1 className="gsmarena_word">GSMArena</h1>
            </div>
            <div className="col-md-5 input_field">
              <input
                type="text"
                placeholder="  Search"
                className="search_bar"
              ></input>
              <div className="line3"></div>
              <button type="submit" className="search_btn">
                <i class="glyphicon glyphicon-search "></i>
              </button>
            </div>
            <div className="col-md-4 glyphicon_adjust">
              <Glyphicon />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
