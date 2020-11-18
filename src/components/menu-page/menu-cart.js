import React, { Component } from "react";

import CartButton from "./cart-button";

export default class Cart extends Component {
  handleAddtoCart() {
    if (document.getElementById("menu-cart").classList.contains("cart-hiden")) {
      document.getElementById("menu-cart").classList.remove("cart-hiden");
    } else {
      document.getElementById("menu-cart").classList.add("cart-hiden");
    }
  }
  render() {
    return (
      <div id="menu-cart" className="menu-cart cart-hiden">
        <CartButton
          className="menu-cart-btn"
          icon="far fa-times-circle"
          onClick={this.handleAddtoCart}
        />
        <div className="menu-cart-content">
          <div className="menu-cart-title">Pedido (2)</div>
          <div className="menu-cart-products">Product goes here</div>
          <div className="menu-cart-footer">Footer</div>
        </div>
      </div>
    );
  }
}
