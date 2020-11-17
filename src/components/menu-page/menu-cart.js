import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    return (
      <div id="menu-cart" className="menu-cart cart-hiden">
        <div className="menu-cart-icon">
          <i className="far fa-times-circle"></i>
        </div>
        <div className="menu-cart-content">
          <div className="menu-cart-title">Title goes here</div>
          <div className="menu-cart-footer">Footer</div>
        </div>
      </div>
    );
  }
}
