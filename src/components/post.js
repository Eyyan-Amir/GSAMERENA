import React from "react";

export const Post = ({ post, index }) => {
  return (
    <div>
      <div key={index} className="post-row">
        <div className="col-md-4">
          <img src="2.jpg" class="img-responsive" alt="Cinque Terre"></img>
        </div>
        <div className="col-md-8">
          <h2>{post.title}</h2>
          <p>{post.text}</p>
        </div>
      </div>
    </div>
  );
};
