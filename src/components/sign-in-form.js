import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

class SignInForm extends Component {
  render() {
    return (
      <div className="sign-in-form">
        <h2>Sign in Form goes here</h2>
      </div>
    );
  }
}

SignInForm = reduxForm({
  form: "SignInForm",
})(SignInForm);

export default SignInForm;
