import React, { Component } from "react";
import Header from "./components/Header";
import { Post } from "./components/post";
import Ad from "./components/Ad";
import Pic from "./components/Pic";
import Image from "./components/Image";
import { Phone_finder } from "./components/Phone_finder";
import { Latest_phone } from "./components/Latest_phone";
import { Stories } from "./components/Stories";
import { Daily } from "./components/Daily";
import { Best_phone } from "./Best_phone";

// const postsDB = [
//   { img: "", title: "ABC", text: "hello word" },
//   { img: "", title: "ABC", text: "hello word" },
//   { img: "", title: "ABC", text: "hello word" },
//   { img: "", title: "ABC", text: "hello word" },
//   { img: "", title: "ABC", text: "hello word" },
//   { img: "", title: "ABC", text: "hello word" },
//   { img: "", title: "ABC", text: "hello word" },
//   { img: "", title: "ABC", text: "hello word" },
// ];

export default class App extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   posts: postsDB,
    // };
  }

  render() {
    // const { posts } = this.state;
    return (
      <div className="container-fluid">
        <Header />
        <div className="row bodycontainer">
          <div className="col-md-10  main-body">
            <div className="row">
              <div className="col-md-10 height-border">
                {" "}
                <Ad />
              </div>
              <div className="col-md-2 height-border">
                <Image />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 height-border">
                {" "}
                <Phone_finder />
              </div>
              <div className="col-md-9 height-border">
                <Pic />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 height-border">
                {" "}
                <Ad />
              </div>
              <div className="col-md-9 height-border">
                <Image />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="row">
                  <div className="col-md-12 height-border">
                    <Latest_phone />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 height-border">
                    <Stories />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 height-border">
                    <Daily />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 height-border">
                    <Daily />
                  </div>
                </div>
                <div className="row">
                  <Ad />
                </div>
                <div className="row">
                  <div className="col-md-12 height-border">
                    <Daily />
                  </div>
                </div>
              </div>
              <div className="col-md-9 height-border">
                <div className="row posts-header">
                  <div className="col-md-10">
                    <h2>The Best phones to get</h2>
                    <h3>blah blah blah bkah blah bah blah</h3>
                  </div>
                  <div className="col-md-2">icon</div>
                </div>
                <div className="row posts-body">
                  <div className="col-md-12 height-border">
                    <Best_phone />
                  </div>

                  {/* {posts.map((p, i) => {
                    return <Post post={p} index={i} />;
                  })} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
