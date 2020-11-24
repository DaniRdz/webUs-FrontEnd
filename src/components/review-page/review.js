import React, { Component } from "react";
import { connect } from "react-redux";

import ReviewProduct from "./review-product";

class Review extends Component {
  renderProducts() {
    return this.props.cartProducts.map((cartProduct, index) => {
      return <ReviewProduct key={index} {...cartProduct} />;
    });
  }
  render() {
    let subtotal = 0.0;
    let shipping = 30;
    this.props.cartProducts.map((cartProduct) => {
      subtotal += cartProduct.quantity * cartProduct.product.price;
    });
    return (
      <div className="review">
        <div className="review-title">Resumen de Orden</div>

        <div className="review-info">
          <div className="review-info-name">Nombre</div>
          <div className="review-info-qty">Cantidad</div>
          <div className="review-info-price">Precio</div>
          <div className="review-info-line-top"></div>
          <div className="review-info-products">{this.renderProducts()}</div>
          <div className="review-info-line-bot"></div>
          <div className="review-info-details">
            <div className="review-info-details-subtotal">
              <div className="title">Subtotal</div>
              <div className="price">${subtotal}</div>
            </div>
            <div className="review-info-details-shipping">
              <div className="title">Envio</div>
              <div className="price">${shipping}</div>
            </div>
            <div className="review-info-details-total">
              <div className="title">Total</div>
              <div className="price orange">${shipping + subtotal}</div>
            </div>
          </div>
        </div>

        <div className="review-btns">
          <button
            className="review-btns-back"
            onClick={() => {
              this.props.history.push("/menu");
            }}
          >
            Regresar
          </button>
          <button className="review-btns-continue">Continuar</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { cartProducts } = state.user;

  return { cartProducts };
}

Review = connect(mapStateToProps)(Review);

export default Review;
