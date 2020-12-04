import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";

import { FormInput, FormButton } from "../form-fields";

import history from "../../history";
import * as actions from "../../actions";

class PaymentForm extends Component {
  handleClick() {
    this.props.handleShowModal();
    this.props.setCartProducts();
  }
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className="payment-form">
        <Field
          className="payment-form-number-card"
          type="numberCard"
          placeholder="Numero de tarjeta"
          name="numberCard"
          component={FormInput}
        />
        <i className="fas fa-lock encrypted"></i>
        <Field
          className="payment-form-name"
          type="name"
          placeholder="Nombre del titular"
          name="name"
          component={FormInput}
        />
        <Field
          className="payment-form-date"
          type="expirationDate"
          placeholder="Fecha de vencimiento (MM/AA)"
          name="expirationDate"
          component={FormInput}
        />
        <Field
          className="payment-form-cvv"
          type="cvv"
          placeholder="Codigo de seguridad"
          name="cvv"
          component={FormInput}
        />
        <div className="payment-form-btns">
          <Field
            className="payment-form-btn"
            onClick={() => history.push("/information/shipping")}
            type="button"
            title="Regresar"
            back={true}
            name="back"
            component={FormButton}
          />
          <Field
            className="payment-form-btn"
            onClick={() => this.handleClick()}
            type="submit"
            title="Continuar & Pagar"
            name="continue"
            component={FormButton}
          />
        </div>
      </form>
    );
  }
}
PaymentForm = reduxForm({
  form: "PaymentForm",
})(PaymentForm);

export default connect(null, actions)(PaymentForm);
