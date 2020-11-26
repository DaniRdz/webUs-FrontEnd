import React, { Component } from "react";

export default class ShippingSummary extends Component {
  render() {
    const { className, user } = this.props;
    const { address, name } = user;
    return (
      <div className={` ${className} shipping-summary`}>
        <div className="shipping-summary-title">Envio a:</div>
        <div className="shipping-summary-line"></div>
        <div className="shipping-summary-info">
          <div className="user-name">{name}</div>
          <div className="user-address">{address}</div>
        </div>
      </div>
    );
  }
}
