import React, { Component } from "react";
import { connect } from "react-redux";

import Quantity from "./quantity";

import * as actions from "../../actions";

class CartProduct extends Component {
  render() {
    const { product, quantity, pos } = this.props;
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
          <a
            className="cart-product-info-remove"
            onClick={() => this.props.removeCartProduct(pos)}
          >
            Quitar
          </a>
          <div className="cart-product-info-price">${price}</div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(CartProduct);
