import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../form-fields";

import history from "../../history";

class SignInForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className="sign-in-form">
        <div className="sign-in-form-title">¡Bienvenido!</div>
        <Field
          className="sign-in-form-email"
          type="email"
          placeholder="Email"
          name="email"
          component={FormInput}
        />
        <Field
          className="sign-in-form-password"
          type="password"
          placeholder="Password"
          name="password"
          component={FormInput}
        />
        <Field
          className="sign-in-form-btn"
          type="submit"
          title="Login"
          name="login"
          component={FormButton}
        />
        <div className="sign-in-form-register">
          ¿No tienes cuenta?
          <a
            onClick={() => {
              history.push("/register");
            }}
          >
            Registrate.
          </a>
        </div>
      </form>
    );
  }
}

SignInForm = reduxForm({
  form: "SignInForm",
})(SignInForm);

export default SignInForm;
