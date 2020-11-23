import React, { Component } from "react";

export default class ReviewProduct extends Component {
  render() {
    const { product, quantity } = this.props;
    const { title, price, imgURL } = product;
    return (
      <div className="review-product">
        <img className="review-product-img" src={imgURL}></img>
        <div className="review-product-title">{title}</div>
        <div className="review-product-qty">{quantity}</div>
        <div className="review-product-price">${price}</div>
      </div>
    );
  }
}
