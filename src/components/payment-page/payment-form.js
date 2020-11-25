import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../form-fields";

import history from "../../history";

class PaymentForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className="payment-form">
        <Field
          className="payment-form-name"
          type="name"
          placeholder="Nombre"
          name="name"
          component={FormInput}
        />
        <Field
          className="payment-form-phone"
          type="phone"
          placeholder="Telefono"
          name="phone"
          component={FormInput}
        />
        <Field
          className="payment-form-address"
          type="address"
          placeholder="Direccion"
          name="address"
          component={FormInput}
        />
        <Field
          className="payment-form-col"
          type="col"
          placeholder="Colonia"
          name="col"
          component={FormInput}
        />
        <Field
          className="payment-form-zipcode"
          type="zipcode"
          placeholder="Codigo Postal"
          name="zipcode"
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
            onClick={() => history.push("/information/payment")}
            type="submit"
            title="Continuar"
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

export default PaymentForm;
