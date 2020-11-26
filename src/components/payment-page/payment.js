import React, { Component } from "react";
import { connect } from "react-redux";

import OrderSummary from "../order-summary";
import PaymentForm from "./payment-form";
import ShippingSummary from "./shipping-sumary";
import ThanksModal from "../modals/thanks-modal";

class Payment extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };

  handleShowModal = () => {
    this.setState({
      showModal: true,
    });
  };
  onSubmit(fields) {
    console.log(fields);
  }
  render() {
    return (
      <div className="payment">
        <ThanksModal
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
        />
        <div className="payment-title">Informacion de pago</div>
        <PaymentForm
          onSubmit={this.onSubmit}
          handleShowModal={this.handleShowModal}
        />
        <div className="payment-summaries">
          <OrderSummary
            className="payment-order-summary"
            products={this.props.cartProducts}
          />
          <ShippingSummary
            className="payment-shipping-summary"
            user={this.props.user}
          />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { cartProducts, user } = state.user;
  return { cartProducts, user };
}

Payment = connect(mapStateToProps)(Payment);

export default Payment;
