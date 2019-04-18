import React from "react";

const CommentDetails = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.picture} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
      </div>
      <div className="metadata">
        <span className="date">{props.posted}</span>
      </div>
      <div className="text">{props.content}</div>
    </div>
  );
};

export default CommentDetails;
