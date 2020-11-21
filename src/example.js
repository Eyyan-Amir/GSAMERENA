import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid" class="a">
        <hr class="solid"></hr>
        <div className="row" class="v1">
          <div class="col-sm-6">
            <div className="v2">
              <img
                src="3.jpg"
                class="img-respnsive"
                alt="Cinque Terre"
                width="204"
                height="200"
              ></img>
            </div>
          </div>
          <div class="col-sm-6">
            <hr class="solid1"></hr>

            <div className="v3">
              <div className="v4">
                <img
                  src="2.jpg"
                  class="img-responsive"
                  className="i"
                  alt="Cinque Terre"
                  width="204"
                  height="200"
                ></img>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <hr class="solid3"></hr>
            <div className="v5">
              <div className="v6">
                <img
                  src="3.jpg"
                  class="img-respnsive"
                  className="i2"
                  alt="Cinque Terre"
                  width="204"
                  height="200"
                ></img>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <hr class="solid2"></hr>
            <div className="v7">
              <div className="v8">
                <img
                  src="2.jpg"
                  class="img-responsive"
                  className="i3"
                  alt="Cinque Terre"
                  width="204"
                  height="200"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
