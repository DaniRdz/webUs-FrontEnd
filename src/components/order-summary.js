import React, { Component } from "react";

export default class OrderSumary extends Component {
  render() {
    const { className, products, qty } = this.props;
    const { price } = products;
    let subtotal = 0;
    let count = 0;
    let shipping = 30;
    products.map((cartProduct) => {
      subtotal += cartProduct.quantity * cartProduct.product.price;
      count += cartProduct.quantity;
    });
    return (
      <div className={` ${className} order-summary`}>
        <div className="order-summary-title">Resumen del pedido</div>
        <div className="order-summary-line"></div>
        <div className="order-summary-info">
          <div className="order-summary-info-qty">
            <div className="qty">{count} Productos</div>
            <div className="price">${subtotal}</div>
          </div>
          <div className="order-summary-info-shipping">
            <div className="shipping">Envios & Propinas</div>
            <div className="price">${shipping}</div>
          </div>
          <div className="order-summary-info-total">
            <div className="Total">Total</div>
            <div className="price">${(shipping + subtotal).toFixed(2)}</div>
          </div>
        </div>
      </div>
    );
  }
}
