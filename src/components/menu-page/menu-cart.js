import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

import CartProduct from "./cart-product";

import history from "../../history";

function Footer(props) {
  const { className, products } = props;

  function handleCheckOut() {
    history.push("/checkout/order/resumen");
    props.saveCart(products);
  }

  let subtotal = 0;
  products.map((cartProduct) => {
    subtotal += cartProduct.quantity * cartProduct.product.price;
  });
  return (
    <div className={`${className} footer`}>
      <button className="footer-btn" onClick={() => handleCheckOut()}>
        Check Out
      </button>
      <div className="footer-subtotal">Subtotal ${subtotal.toFixed(2)}</div>
    </div>
  );
}

class Cart extends Component {
  renderCartProducts() {
    return this.props.cartProducts.map((cartProduct, index) => {
      return <CartProduct key={index} {...cartProduct} />;
    });
  }
  render() {
    let count = 0;
    this.props.cartProducts.map((cartProduct) => {
      count += cartProduct.quantity;
    });
    return (
      <div className="menu-cart">
        <div className="menu-cart-content">
          <div className="menu-cart-title">Pedido ({count})</div>
          <div className="menu-cart-products">{this.renderCartProducts()}</div>
          <Footer
            className="menu-cart-footer"
            products={this.props.cartProducts}
            saveCart={this.props.saveCart}
          />
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
