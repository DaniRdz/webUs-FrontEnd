import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

class Cart extends Component {
  componentDidMount() {
    console.log(this.props.cartProducts);
  }
  render() {
    return (
      <div className="menu-cart">
        <div className="menu-cart-content">
          <div className="menu-cart-title">Pedido (2)</div>
          <div className="menu-cart-products">Product goes here</div>
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
