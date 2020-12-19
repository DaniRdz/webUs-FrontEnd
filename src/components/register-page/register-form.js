import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../form-fields";

class RegisterForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className="register-form">
        <div className="register-form-title">Registro</div>
        <Field
          className="register-form-name"
          type="name"
          placeholder="Nombre"
          name="name"
          component={FormInput}
        />
        <Field
          className="register-form-email"
          type="email"
          placeholder="Email"
          name="email"
          component={FormInput}
        />
        <Field
          className="register-form-password"
          type="password"
          placeholder="Password"
          name="password"
          component={FormInput}
        />
        <div className="register-form-password-requires">
          <div className="title"> Requisitos de contraseña</div>
          <div className="requires">
            <div className="require"> Al menos 6 caracteres</div>
            <div className="require"> Al menos 1 numero</div>
            <div className="require"> Al menos 1 simbolo</div>
          </div>
        </div>
        <Field
          className="register-form-btn"
          type="submit"
          title="Registrarse"
          name="register"
          component={FormButton}
        />
      </form>
    );
  }
}

RegisterForm = reduxForm({
  form: "RegisterForm",
})(RegisterForm);

export default RegisterForm;
