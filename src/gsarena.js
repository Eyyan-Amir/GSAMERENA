import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="col-sm-2">
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">
                Gsarena
              </a>
            </div>
            <form class="form-inline">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button
                className="button"
                class="glyphicon glyphicon-search "
                type="submit"
              ></button>
              {/* <button
                type="button"
                role="button"
                aria-label="toggle Navigation"
                class="lines button minus"
              ></button> */}

              <ul class="nav navbar-nav navbar-right">
                <li>
                  <a href="#">
                    <span class="glyphicon glyphicon-user"></span> Sign Up
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="glyphicon glyphicon-log-in"></span> Login
                  </a>
                </li>
              </ul>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
