import React from "react";

const Card = props => {
  return (
    <div className="card">
      <img src={props.img_url} alt={props.img_caption} />
    </div>
  );
};

export default Card;
