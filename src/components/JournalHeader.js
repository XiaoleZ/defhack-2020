import React from "react";
import './Journal.css'

const PostHeader = props => (
  <div className="post-header-container">
    <div className="data-container">
      <strong>{props.name}</strong>
      <span class="entryTime"> {props.data}</span>
    </div>
  </div>
);

export default PostHeader;
