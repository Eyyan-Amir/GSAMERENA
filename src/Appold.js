import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { phones } from "./file";
function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div class="col-sm-12">
          <div className="a1">
            <div class="col-sm-1">
              <div className="a2"></div>
              <div className="i1">
                <img
                  src="1.jpg"
                  class="img-respnsive"
                  alt="Cinque Terre"
                  width="40"
                  height="35"
                ></img>
              </div>
              <p className="w1">GsM</p>
              <p className="w2">Arena</p>
            </div>
            <div>
              <form>
                <input
                  type="text"
                  placeholder="  Search"
                  className="s1"
                ></input>
                <button type="submit" className="b1">
                  <i class="glyphicon glyphicon-search "></i>
                </button>
                <p className="b2">
                  <p className="v1"></p>
                  <span class="glyphicon glyphicon-phone"></span>
                </p>

                <p className="b3">
                  <span class="glyphicon glyphicon-glass "></span>
                </p>
                <p className="b4">
                  <span class="glyphicon glyphicon-envelope "></span>
                </p>
                <p className="b5">
                  <span class="glyphicon glyphicon-fire "></span>
                </p>
                <p className="b6">
                  <p className="v2"></p>
                  <span class="glyphicon glyphicon-user "></span>
                </p>
                <p className="b7">
                  <span class="glyphicon glyphicon-heart "></span>
                </p>
                <p className="b8">
                  <span class="glyphicon glyphicon-camera "></span>
                </p>
              </form>
              <div className="a3"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <p className="adjust">Google Add</p>
          <div className="body">
            <div class="col-sm-12">
              <div class="col-sm-2">
                <div className="leftbrd"></div>
                <div class="col-sm-2">
                  <div className="rgtbrd"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div className="box">
            <div class="col-sm-4">
              <div className="fimage">
                <img
                  src="2.jpg"
                  class="img-responsive"
                  alt="Cinque Terre"
                  width="404px"
                  height="10px"
                ></img>
                <p className="pad"></p>
                <p className="pad-finder">
                  <i class="glyphicon glyphicon-search"></i> <b>PHONE FINDER</b>
                </p>
                <div className="cnt">
                  <ul>
                    {phones.map((k, i) => {
                      return <li key={i}>{k.title}</li>;
                    })}
                  </ul>
                </div>
                <p className="pad2"></p>
                <p className="butm-pad">
                  <i class="glyphicon glyphicon-phone"></i> <b>ALL BRANDS</b>
                </p>
                <p className="butm-pad2">
                  <i class="glyphicon glyphicon-fire"></i> <b>RUM0R MILLS</b>
                </p>
              </div>
            </div>
            <div class="col-sm-4">
              <div className="simage">
                <img
                  src="3.jpg"
                  class="img-responsive"
                  alt="Cinque Terre"
                  width="354"
                ></img>
              </div>
              <div className="bimage">
                <img
                  src="001.jpg"
                  class="img-responsive"
                  alt="Cinque Terre"
                  width="364"
                ></img>
              </div>
              <div className="cimage">
                <img
                  src="4.jpg"
                  class="img-responsive"
                  alt="Cinque Terre"
                  width="364"
                ></img>
              </div>
              <div className="dimage">
                <img
                  src="6.jpg"
                  class="img-responsive"
                  alt="Cinque Terre"
                  width="154"
                ></img>
              </div>
              <div className="eimage">
                <img
                  src="7.jpg"
                  class="img-responsive"
                  alt="Cinque Terre"
                  width="154"
                ></img>
              </div>
              <div className="gimage">
                <img
                  src="8.jpg"
                  class="img-responsive"
                  alt="Cinque Terre"
                  width="154"
                ></img>
              </div>
              <div className="iimage">
                <img
                  src="9.jpg"
                  class="img-responsive"
                  alt="Cinque Terre"
                  width="154"
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
