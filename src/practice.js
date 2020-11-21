import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div class="col-sm-6">
            <div>
              <img
                src="3.jpg"
                class="img-responsive"
                alt="Cinque Terre"
                width="204"
                height="136"
              ></img>
            </div>
          </div>
          <div class="col-sm-6">
            <div>
              <img
                src="2.jpg"
                class="img-responsive"
                alt="Cinque Terre"
                width="204"
                height="136"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h2>Husnain</h2>
            <h4>
              <b>Husnain naeem bscs 4</b> <small> Cims </small>
            </h4>
          </div>
          <div className="col-sm-6">
            <h1> Ayyan </h1>
            <h4>
              <b>Ayyan amir bscs 4</b> <small> Cims </small>
            </h4>
          </div>
          <div>
            <table class="table table-bordered">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>
                      Specialization
                      <span class="glyphicon glyphicon-fire"></span>
                    </th>
                    <th>
                      Specialization
                      <span class="glyphicon glyphicon-fire"></span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="success">
                    <td>Game Developer</td>
                    <td>web Developer</td>
                  </tr>
                  <tr class="danger">
                    <td> unity</td>
                    <td>Visual studio code </td>
                  </tr>
                </tbody>
              </table>
            </table>
            <div class="container">
              <div class="row">
                <div class="col-sm-5">
                  <h2>Basic List Group</h2>
                  <ul class="list-group">
                    <li class="list-group-item list-group-item-info">
                      First item
                    </li>
                    <li class="list-group-item list-group-item-danger">
                      Second item
                    </li>
                    <li class="list-group-item list-group-item-success">
                      Third item
                    </li>
                  </ul>
                </div>
                <div class="col-sm-5">
                  <h2>Basic List Group</h2>
                  <ul class="list-group">
                    <li class="list-group-item list-group-item-danger">
                      React
                    </li>
                    <li class="list-group-item list-group-item-success">
                      Javascript
                    </li>
                    <li class="list-group-item list-group-item-info">
                      Bootstrap
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <ul class="pager">
              <li>
                <a href="#">Previous</a>
              </li>
              <li>
                <a href="#">Next</a>
              </li>
            </ul>

            <div class="container">
              <form>
                <div class="form-group">
                  <label for="pwd">Password:</label>
                  <input
                    type="password"
                    class="form-control"
                    id="pwd"
                    placeholder="Enter password"
                  ></input>
                  <span class="help-block">
                    This is some help text that breaks onto a new line and may
                    extend more than one line.
                  </span>
                </div>
                <button type="submit" class="btn btn-default">
                  Submit
                </button>
              </form>
              <h2>Simple Collapsible</h2>
              <p>
                Click on the button to toggle between showing and hiding
                content.
              </p>
              <button
                type="button"
                class="btn btn-info"
                data-toggle="collapse"
                data-target="#demo"
              >
                Simple collapsible
              </button>

              <div id="demo" class="collapse">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div class="col-sm-6">
            <div>
              <img
                src="3.jpg"
                class="img-responsive"
                alt="Cinque Terre"
                width="204"
                height="136"
              ></img>
            </div>
          </div>
          <div class="col-sm-6">
            <div>
              <img
                src="2.jpg"
                class="img-responsive"
                alt="Cinque Terre"
                width="204"
                height="136"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h2>Husnain</h2>
            <h4>
              <b>Husnain naeem bscs 4</b> <small> Cims </small>
            </h4>
          </div>
          <div className="col-sm-6">
            <h1> Ayyan </h1>
            <h4>
              <b>Ayyan amir bscs 4</b> <small> Cims </small>
            </h4>
          </div>
          <div>
            <table class="table table-bordered">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>
                      Specialization
                      <span class="glyphicon glyphicon-fire"></span>
                    </th>
                    <th>
                      Specialization
                      <span class="glyphicon glyphicon-fire"></span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="success">
                    <td>Game Developer</td>
                    <td>web Developer</td>
                  </tr>
                  <tr class="danger">
                    <td> unity</td>
                    <td>Visual studio code </td>
                  </tr>
                </tbody>
              </table>
            </table>
            <div class="container">
              <div class="row">
                <div class="col-sm-5">
                  <h2>Basic List Group</h2>
                  <ul class="list-group">
                    <li class="list-group-item list-group-item-info">
                      First item
                    </li>
                    <li class="list-group-item list-group-item-danger">
                      Second item
                    </li>
                    <li class="list-group-item list-group-item-success">
                      Third item
                    </li>
                  </ul>
                </div>
                <div class="col-sm-5">
                  <h2>Basic List Group</h2>
                  <ul class="list-group">
                    <li class="list-group-item list-group-item-danger">
                      React
                    </li>
                    <li class="list-group-item list-group-item-success">
                      Javascript
                    </li>
                    <li class="list-group-item list-group-item-info">
                      Bootstrap
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <ul class="pager">
              <li>
                <a href="#">Previous</a>
              </li>
              <li>
                <a href="#">Next</a>
              </li>
            </ul>

            <div class="container">
              <form>
                <div class="form-group">
                  <label for="pwd">Password:</label>
                  <input
                    type="password"
                    class="form-control"
                    id="pwd"
                    placeholder="Enter password"
                  ></input>
                  <span class="help-block">
                    This is some help text that breaks onto a new line and may
                    extend more than one line.
                  </span>
                </div>
                <button type="submit" class="btn btn-default">
                  Submit
                </button>
              </form>
              <h2>Simple Collapsible</h2>
              <p>
                Click on the button to toggle between showing and hiding
                content.
              </p>
              <button
                type="button"
                class="btn btn-info"
                data-toggle="collapse"
                data-target="#demo"
              >
                Simple collapsible
              </button>

              <div id="demo" class="collapse">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
