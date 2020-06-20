// This is a survey session.
import React from 'react';

const Progress = (props) => {
  return (
    <div>
      <h2>Question {props.current} of {props.total}</h2>
    </div>
  )
}
export default Progress;