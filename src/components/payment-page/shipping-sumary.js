import React, { Component } from "react";

export default class ShippingSummary extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={` ${className} shipping-summary`}>
        <div className="shipping-summary-title">Resumen de envio</div>
        <div className="shpping-summary-line"></div>
        <div className="shipping-summary-info">
          <div className="user-name">Pedrito Navajas</div>
          <div className="user-address">Address Goes here amix</div>
        </div>
      </div>
    );
  }
}
