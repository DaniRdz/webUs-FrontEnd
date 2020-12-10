import React, { Component } from "react";
import { connect } from "react-redux";

import Logo from "./logo";

import history from "../history";

import * as actions from "../actions";

class NavigationContainer extends Component {
  handleLogout() {
    this.props.userLogout();
    history.push("/");
  }
  render() {
    return (
      <div className="navigation-container">
        <Logo />
        <div className="nav-links">
          <a onClick={() => history.push("/")} className="link">
            Home
          </a>
          <a onClick={() => history.push("/menu")} className="link">
            Menu
          </a>
          <a
            onClick={() => history.push("/acerca-de-nosotros")}
            className="link"
          >
            Acerca de Nosotros
          </a>
          <a href="#contact" onClick={() => history.push("/")} className="link">
            Contacto
          </a>
          {this.props.isLoggin ? <a className="link">Informacion</a> : null}
        </div>
        <div className="store-info">
          <div className="store-info-opennig">
            <i className="far fa-clock icon"></i>
            <div className="store-info-opennig-schedule">
              <div className="openning-info"> Openning Hours</div>
              <div className="hours">19:00-00:00</div>
            </div>
          </div>
          <div className="store-info-phone">
            <i className="fas fa-phone-volume icon"></i>
            <div className="store-info-phone-number">
              <div className="phone-info">(333)-333-33-33</div>
              <div className="phone-title">webUs Phone</div>
            </div>
          </div>
        </div>
        {this.props.isLoggin ? (
          <div className="sigin-singup-links">
            <a onClick={() => this.handleLogout()} className="link">
              Logout <i className="fas fa-sign-out-alt"></i>
            </a>
          </div>
        ) : (
          <div className="sigin-singup-links">
            <a onClick={() => history.push("/sign-in")} className="link">
              Login
            </a>
            <a onClick={() => history.push("/register")} className="link">
              Register
            </a>
          </div>
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { isLoggin } = state.user;
  return { isLoggin };
}

export default connect(mapStateToProps, actions)(NavigationContainer);
