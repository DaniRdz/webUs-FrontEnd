import React, { Component } from "react";
import { connect } from "react-redux";

import ShippingForm from "./shipping-info-form";
import OrderSummary from "../order-summary";

import * as actions from "../../actions";

class ShippingInfo extends Component {
  onSubmit = (fields) => {
    const { _id, name } = this.props.user;
    if (name === "") {
      this.props.setUserInfo(fields, this.props.cartProductId);
    } else {
      this.props.updateUser(_id, fields, this.props.cartProductId);
    }
    this.props.history.push("/information/payment");
  };
  render() {
    return (
      <div className="shipping-info">
        <div className="shipping-info-title">Informacion de envio</div>
        <ShippingForm onSubmit={this.onSubmit} />
        <OrderSummary
          className="shipping-info-order-summary"
          products={this.props.cartProducts}
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { cartProducts, cartProductId, user } = state.user;
  return { cartProducts, cartProductId, user };
}

ShippingInfo = connect(mapStateToProps, actions)(ShippingInfo);

export default ShippingInfo;
