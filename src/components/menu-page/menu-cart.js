import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    return (
      <div id="menu-cart" className="menu-cart">
        <div className="menu-cart-content">
          <div className="menu-cart-title">Pedido (2)</div>
          <div className="menu-cart-products">Product goes here</div>
          <div className="menu-cart-footer">Footer</div>
        </div>
      </div>
    );
  }
}
