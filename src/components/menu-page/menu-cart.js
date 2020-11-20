import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

import CartProduct from "./cart-product";

class Cart extends Component {
  renderCartProducts() {
    return this.props.cartProducts.map((cartProduct, index) => {
      return <CartProduct key={index} {...cartProduct} />;
    });
  }
  render() {
    let count = this.props.cartProducts.length;
    return (
      <div className="menu-cart">
        <div className="menu-cart-content">
          <div className="menu-cart-title">Pedido ({count})</div>
          <div className="menu-cart-products">{this.renderCartProducts()}</div>
          <div className="menu-cart-footer">Footer</div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { cartProducts } = state.user;
  return { cartProducts };
}
Cart = connect(mapStateToProps, actions)(Cart);

export default Cart;
