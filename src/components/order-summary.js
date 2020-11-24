import React, { Component } from "react";

export default class OrderSumary extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={` ${className} order-summary`}>
        <div className="order-summary-title">Resumen del pedido</div>
        <div className="order-summary-line"></div>
        <div className="order-summary-info">
          <div className="order-summary-info-qty">
            <div className="qty">2 Productos</div>
            <div className="price">$25.98</div>
          </div>
          <div className="order-summary-info-shipping">
            <div className="shipping">Envios & Propinas</div>
            <div className="price">$0.00</div>
          </div>
          <div className="order-summary-info-total">
            <div className="Total">Total</div>
            <div className="price">$25.98</div>
          </div>
        </div>
      </div>
    );
  }
}
