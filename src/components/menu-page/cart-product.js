import React, { Component } from "react";

export default class CartProduct extends Component {
  render() {
    const { product, quantity } = this.props;
    const { title, price, imgURL } = product;
    return (
      <div className="cart-product">
        <div className="cart-product-title">{title}</div>
        <img className="cart-product-img" src={imgURL} />
        <div className="cart-product-price">{price}</div>
      </div>
    );
  }
}
