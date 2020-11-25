import React, { Component } from "react";
import { connect } from "react-redux";

import OrderSummary from "../order-summary";
import PaymentForm from "./payment-form";
import ShippingSummary from "./shipping-sumary";

class Payment extends Component {
  handleSubmit(fields) {
    console.log(fields);
  }
  render() {
    return (
      <div className="payment">
        <div className="payment-title">Informacion de pago</div>
        <PaymentForm onSubmit={this.handleSubmit} />
        <div className="payment-summaries">
          <OrderSummary
            className="payment-order-summary"
            products={this.props.cartProducts}
          />
          <ShippingSummary className="payment-shipping-summary" />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { cartProducts } = state.user;
  return { cartProducts };
}

Payment = connect(mapStateToProps)(Payment);

export default Payment;
