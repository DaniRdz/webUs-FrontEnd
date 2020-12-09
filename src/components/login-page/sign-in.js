import React, { Component } from "react";
import { connect } from "react-redux";

import SignInForm from "./sign-in-form";

import wallpaper from "../../../static/assets/images/wallpapers/salchipulpos-login.jpg";

import * as actions from "../../actions";

class SignIn extends Component {
  componentDidUpdate() {
    if (this.props.isLoggin) {
      this.props.history.push("/");
    }
  }
  onSubmit = (fields) => {
    this.props.userAuthenticate(fields);
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
function mapStateToProps(state) {
  const { isLoggin } = state.user;
  return { isLoggin };
}

export default connect(mapStateToProps, actions)(SignIn);
