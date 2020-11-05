import React, { Component } from "react";

class NavigationContainer extends Component {
  render() {
    return (
      <div className="navigation-container">
        <div className="logo">WebUs</div>
        <div className="nav-links">
          <a>Home</a>
          <a>Menu</a>
          <a>Acerca de Nosotros</a>
          <a>Contacto</a>
          {/* <a>Informacion de cuenta</a> */}
        </div>
        <div className="store-info">
          <div className="store-info-opennig">
            <div className="openning-info"> Openning Hours</div>
            <div className="hours">19:00-00:00</div>
          </div>
          <div clasNAme="store-info-phone">
            <div className="phone-info">(333)-333-33-33</div>
            <div className="phone-title">webUs Phone</div>
          </div>
        </div>
        <div className="sigin-singup-links">
          <a>Login</a>
          <a>Register</a>
        </div>
      </div>
    );
  }
}

export default NavigationContainer;
