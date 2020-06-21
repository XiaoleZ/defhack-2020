import React from "react";
import './Journal.css'

const PostHeader = props => (
  <div className="post-header-container">
    <div className="data-container">
      <p class="entryTime"> {props.data}</p>
      <p class="entryName"><strong>{props.name}</strong></p>
    </div>
  </div>
);

export default PostHeader;
