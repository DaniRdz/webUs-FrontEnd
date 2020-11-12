import React, { Component } from "react";

import SignInForm from "./sign-in-form";

import wallpaper from "../../../static/assets/images/wallpapers/salchipulpos-login.jpg";

class SignIn extends Component {
  onSubmit = (fields) => {
    console.log(fields);
  };
  render() {
    return (
      <div className="sign-in-container">
        <div
          className="welcome-img"
          style={{
            backgroundImage: "url(" + wallpaper + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />

        <SignInForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default SignIn;
