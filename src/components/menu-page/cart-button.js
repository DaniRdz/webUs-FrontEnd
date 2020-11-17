import React from "react";

export default function CartButton(props) {
  const { className, icon, onClick } = props;
  return (
    <a onClick={onClick} className={`cart-btn ${className}`}>
      <i className={icon}></i>
    </a>
  );
}
