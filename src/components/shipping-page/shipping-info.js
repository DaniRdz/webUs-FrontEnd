import React, { Component } from "react";
import { connect } from "react-redux";

import ShippingForm from "./shipping-info-form";
import OrderSummary from "../order-summary";

class ShippingInfo extends Component {
  handleSubmit(fields) {
    console.log(fields);
  }
  render() {
    return (
      <div className="shipping-info">
        <div className="shipping-info-title">Informacion de envio</div>
        <ShippingForm onSubmit={this.handleSubmit} />
        <OrderSummary
          className="shipping-info-order-summary"
          products={this.props.cartProducts}
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { cartProducts } = state.user;
  return { cartProducts };
}

ShippingInfo = connect(mapStateToProps)(ShippingInfo);

export default ShippingInfo;
