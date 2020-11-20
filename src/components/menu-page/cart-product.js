import React, { Component } from "react";

import Quantity from "./quantity";

export default class CartProduct extends Component {
  render() {
    const { product, quantity } = this.props;
    const { title, price, imgURL } = product;
    return (
      <div className="cart-product">
        <img className="cart-product-img" src={imgURL} />
        <div className="cart-product-info">
          <div className="cart-product-info-title">{title}</div>
          <Quantity
            className="cart-product-info-quantity"
            quantity={quantity}
          />
          <div className="cart-product-info-price">${price}</div>
        </div>
      </div>
    );
  }
}
