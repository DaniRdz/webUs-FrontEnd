import React, { Component } from "react";

import SignInForm from "./sign-in-form";

import wallpaper from "../../static/assets/images/wallpapers/salchipulpos-login.jpg";

class SignIn extends Component {
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

        <SignInForm />
      </div>
    );
  }
}

export default SignIn;
