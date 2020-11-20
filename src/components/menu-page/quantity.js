import React from "react";

export default function (props) {
  const { className, quantity } = props;
  return (
    <div className={`${className} quantity`}>
      <div className="quantity-title"> {quantity} </div>
      <div className="quantity-btns">
        <i className="fas fa-plus"></i>
        <i className="fas fa-minus"></i>
      </div>
    </div>
  );
}
