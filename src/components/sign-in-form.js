import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "./form-fields";

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
          onClick={() => console.log("Hello amix")}
          type="submit"
          title="Login"
          name="login"
          component={FormButton}
        />
      </form>
    );
  }
}

SignInForm = reduxForm({
  form: "SignInForm",
})(SignInForm);

export default SignInForm;
