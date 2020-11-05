import React, { Component } from "react";

class NavigationContainer extends Component {
  render() {
    return (
      <div className="navigation-container">
        <div className="logo">some logo</div>
        <div className="nav-links">
          <a>Home</a>
          <a>Menu</a>
          <a>Acerca de Nosotros</a>
          <a>Contacto</a>
        </div>
        <div className="store-info">
          <div className="openning-info"> Openning Hours</div>
          <div className="hours">19:00-00:00</div>

          <div className="phone-info">(333)-333-33-33</div>
          <div className="phone-title">webUs Phone</div>
        </div>
        <div className="sigin-singup-links"></div>
      </div>
    );
  }
}

export default NavigationContainer;
