import React from "react";

const TextPage = (props) => {
  return (
    <div className="tile is-parent">
      <div className="tile is-child box">
        <p className="title">{props.title}</p>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default TextPage;
