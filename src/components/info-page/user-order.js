import React, { Component } from "react";

export default class UserOrder extends Component {
  render() {
    const { _id, user, orderStatus } = this.props.order;
    const { cartProducts } = user;
    const { subtotal, items } = cartProducts;

    let count = 0;
    items.map((item) => {
      count += item.quantity;
    });

    return (
      <div className="user-order">
        <div className="user-order-number">{_id}</div>
        <div className="user-order-qty">{count}</div>
        <div className="user-order-total">${subtotal}</div>
        <div className="user-order-status">{orderStatus}</div>
      </div>
    );
  }
}
