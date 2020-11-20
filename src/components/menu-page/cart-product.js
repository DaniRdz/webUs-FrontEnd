import React, { Component } from "react";

export default class CartProduct extends Component {
  render() {
    const { product, quantity } = this.props;
    const { title, price, imgURL } = product;
    return (
      <div className="cart-product">
        <img className="cart-product-img" src={imgURL} />
        <div className="cart-product-info">
          <div className="cart-product-info-title">{title}</div>
          <div className="cart-product-info-quantity">{quantity}</div>
          <div className="cart-product-info-price">${price}</div>
        </div>
      </div>
    );
  }
}
