import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    return (
      <div className="menu-cart">
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
