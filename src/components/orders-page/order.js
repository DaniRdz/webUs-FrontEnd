import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

class Order extends Component {
  renderProducts(items) {
    return items.map((item) => {
      const { quantity, product } = item;
      const { _id, title } = product;
      return (
        <div className="order-product" key={_id}>
          <div className="order-product-title">{`${title} (${quantity})`}</div>
        </div>
      );
    });
  }

  render() {
    const { _id, user, orderStatus, orderTime } = this.props.order;
    const { name, phone, address, cartProducts } = user;
    const { subtotal, items } = cartProducts;

    let count = 0;
    items.map((item) => {
      count += item.quantity;
    });

    return (
      <div className="order">
        <div className="order-number">{_id}</div>
        <div className="order-user-info">
          <div className="user-info-name">{name}</div>
          <div className="user-info-phone">{phone}</div>
          <div className="user-info-address">{address}</div>
        </div>
        <div className="order-products">{this.renderProducts(items)}</div>
        <div className="order-qty">{count}</div>
        <div className="order-total">${subtotal}</div>
        <div className="order-date">{orderTime}</div>
        <div className="order-status">
          <div className="order-status-btns">
            <button
              className={`status-btn ${orderStatus === "wait" ? "active" : ""}`}
              onClick={() => {
                this.props.changeStatusOrder(_id, "wait");
              }}
            >
              espera
            </button>
            <button
              className={`status-btn ${orderStatus === "redy" ? "active" : ""}`}
              onClick={() => {
                this.props.changeStatusOrder(_id, "redy");
              }}
            >
              listo
            </button>
          </div>
          <a className="trash-icon" onClick={() => this.props.deleteOrder(_id)}>
            <i className="fas fa-trash "></i>
          </a>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Order);
