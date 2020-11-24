import React, { Component } from "react";

import ShippingForm from "./shipping-info-form";

export default class ShippingInfo extends Component {
  render() {
    return (
      <div className="shipping-info">
        <div className="shipping-info-title">Informacion de envio</div>
        <ShippingForm />
      </div>
    );
  }
}
