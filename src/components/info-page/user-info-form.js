import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";

import { FormInput, FormButton } from "../form-fields";

class UserInfoForm extends Component {
  componentDidMount() {
    const { name, phone, address } = this.props.user;

    this.props.initialize({
      name: this.props.isLoggin ? name : "",
      phone: this.props.isLoggin ? phone : "",
      address: this.props.isLoggin ? address : "",
    });
  }
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className="user-info-form">
        <Field
          className="user-info-form-name"
          type="name"
          placeholder="Nombre"
          name="name"
          component={FormInput}
        />
        <Field
          className="user-info-form-phone"
          type="phone"
          placeholder="Telefono"
          name="phone"
          component={FormInput}
        />
        <div className="user-info-form-address-title">Direccion de Envio</div>
        <Field
          className="user-info-form-address"
          type="address"
          placeholder="Direccion"
          name="address"
          component={FormInput}
        />
        <Field
          className="user-info-form-btn"
          type="submit"
          title={this.props.isLoggin ? "Editar Informacion" : "Continuar"}
          name="edit"
          component={FormButton}
        />
      </form>
    );
  }
}
function mapStateToPtops(state) {
  const { user, isLoggin } = state.user;
  return { user, isLoggin };
}
UserInfoForm = reduxForm({
  form: "UserInfoForm",
})(UserInfoForm);

export default connect(mapStateToPtops)(UserInfoForm);
