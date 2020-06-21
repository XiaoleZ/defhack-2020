import React from "react";
import './Journal.css'

export default function PostHeader(props) {
  return(
  <div className="post-header-container">
    <div className="data-container">
      <strong>{props.name}</strong>
      <span class="entryTime"> {props.data}</span>
    </div>
  </div>
  )
};

