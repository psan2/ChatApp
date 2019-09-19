import React from "react";

const renderArrow = dir => {
  if (dir === "back") {
    return "<";
  } else if (dir === "forward") {
    return ">";
  }
};

const Arrow = props => {
  return (
    <div className="arrow" onClick={props.clickFunction}>
      {renderArrow(props.dir)}
    </div>
  );
};

export default Arrow;
