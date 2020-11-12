import React, { Component } from "react";

import RegisterForm from "./register-form";

import wallpaper from "../../../static/assets/images/wallpapers/papas-register.jpg";

class Register extends Component {
  onSubmit = (fields) => {
    console.log(fields);
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

export default Register;
