import React, { Component } from "react";
import { connect } from "react-redux";

import RegisterForm from "./register-form";

import wallpaper from "../../../static/assets/images/wallpapers/papas-register.jpg";

import * as actions from "../../actions";

class Register extends Component {
  onSubmit = (fields) => {
    this.props.userRegister(fields);
    this.props.history.push("/sign-in");
  };
  render() {
    return (
      <div className="register-container">
        <div
          className="register-img"
          style={{
            backgroundImage: "url(" + wallpaper + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <RegisterForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, actions)(Register);
