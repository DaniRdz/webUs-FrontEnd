import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../form-fields";

import history from "../../history";

class ShippingForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className="shipping-form">
        <Field
          className="shipping-form-name"
          type="name"
          placeholder="Nombre"
          name="name"
          component={FormInput}
        />
        <Field
          className="shipping-form-phone"
          type="phone"
          placeholder="Telefono"
          name="phone"
          component={FormInput}
        />
        <Field
          className="shipping-form-address"
          type="address"
          placeholder="Direccion"
          name="address"
          component={FormInput}
        />
        <Field
          className="shipping-form-col"
          type="col"
          placeholder="Colonia"
          name="col"
          component={FormInput}
        />
        <Field
          className="shipping-form-zipcode"
          type="zipcode"
          placeholder="Codigo Postal"
          name="zipcode"
          component={FormInput}
        />
        <div className="shipping-form-btns">
          <Field
            className="shipping-form-btn"
            onClick={() => history.push("/checkout/order/resumen")}
            type="button"
            title="Regresar"
            back={true}
            name="back"
            component={FormButton}
          />
          <Field
            className="shipping-form-btn"
            onClick={() => console.log("envio registrado")}
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
ShippingForm = reduxForm({
  form: "ShippingForm",
})(ShippingForm);

export default ShippingForm;
