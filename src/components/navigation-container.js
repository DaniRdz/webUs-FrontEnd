import React, { Component } from "react";

class NavigationContainer extends Component {
  render() {
    return (
      <div className="navigation-container">
        <div className="logo">
          <div className="title">WebUs</div>
          <div className="subtitle">con chalchicha</div>
        </div>
        <div className="nav-links">
          <a className="link">Home</a>
          <a className="link">Menu</a>
          <a className="link">Acerca de Nosotros</a>
          <a className="link">Contacto</a>
          {/* <a>Informacion de cuenta</a> */}
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
        <div className="sigin-singup-links">
          <a className="link">Login</a>
          <a className="link">Register</a>
        </div>
      </div>
    );
  }
}

export default NavigationContainer;
